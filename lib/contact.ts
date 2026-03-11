import { randomUUID } from "node:crypto";

import {
  DynamoDBClient,
} from "@aws-sdk/client-dynamodb";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import {
  DynamoDBDocumentClient,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";

import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import type { ContactSubmission } from "@/types";

const CONTACT_TABLE_NAME = process.env.CONTACT_TABLE_NAME ?? "ContactSubmissions";
const AWS_REGION = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION ?? "eu-west-2";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "admin@futurelogix.ng";
const CONTACT_ADMIN_EMAIL = process.env.CONTACT_ADMIN_EMAIL ?? "admin@futurelogix.ng";
const SES_CONFIGURATION_SET_NAME = process.env.SES_CONFIGURATION_SET_NAME;

const spamKeywords = [
  "bitcoin",
  "casino",
  "crypto investment",
  "forex",
  "loan offer",
  "porn",
  "seo agency",
  "viagra",
  "whatsapp us",
];

const dynamoClient = new DynamoDBClient({ region: AWS_REGION });
const sesClient = new SESv2Client({ region: AWS_REGION });
const docClient = DynamoDBDocumentClient.from(dynamoClient, {
  marshallOptions: { removeUndefinedValues: true },
});

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 2;

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ");
}

function sanitizeText(value?: string) {
  if (!value) {
    return undefined;
  }

  return stripHtml(value)
    .replace(/\s+/g, " ")
    .trim();
}

export function getContactIpAddress(forwardedForHeader: string | null) {
  return forwardedForHeader?.split(",")[0]?.trim() || "unknown";
}

export function checkContactRateLimit(ipAddress: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(ipAddress);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ipAddress, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return null;
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return "Too many contact attempts from this connection. Please try again later.";
  }

  existing.count += 1;
  return null;
}

export function sanitizeContactPayload(values: ContactFormValues) {
  return {
    name: sanitizeText(values.name) ?? "",
    email: values.email.trim().toLowerCase(),
    organization: sanitizeText(values.organization),
    phone: sanitizeText(values.phone),
    interest: sanitizeText(values.interest) ?? "",
    message: sanitizeText(values.message) ?? "",
    referralSource: sanitizeText(values.referralSource),
  };
}

export function detectSpam(values: ContactFormValues) {
  const haystack = [
    values.name,
    values.organization,
    values.interest,
    values.message,
    values.referralSource,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return spamKeywords.some((keyword) => haystack.includes(keyword));
}

export function formatContactSummary(values: ContactFormValues) {
  return [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    values.organization ? `Organization: ${values.organization}` : null,
    values.phone ? `Phone: ${values.phone}` : null,
    `Interest: ${values.interest}`,
    values.referralSource ? `How they heard about us: ${values.referralSource}` : null,
    "",
    "Message:",
    values.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export async function storeContactSubmission(submission: ContactSubmission) {
  await docClient.send(
    new PutCommand({
      TableName: CONTACT_TABLE_NAME,
      Item: submission,
    })
  );
}

export async function sendContactEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string[];
}) {
  await sesClient.send(
    new SendEmailCommand({
      FromEmailAddress: CONTACT_FROM_EMAIL,
      ReplyToAddresses: replyTo && replyTo.length > 0 ? replyTo : [CONTACT_FROM_EMAIL],
      Destination: {
        ToAddresses: [to],
      },
      Content: {
        Simple: {
          Subject: { Data: subject },
          Body: {
            Html: { Data: html },
            Text: { Data: text },
          },
        },
      },
      ConfigurationSetName: SES_CONFIGURATION_SET_NAME,
    })
  );
}

export function buildAdminContactEmail(values: ContactFormValues, submittedAt: string) {
  const subject = `New Contact Form Submission - ${values.interest} - ${values.name}`;
  const bodyLines = [
    `From: ${values.name} <${values.email}>`,
    `Organization: ${values.organization || "-"}`,
    `Phone: ${values.phone || "-"}`,
    `Interest: ${values.interest}`,
    `Submitted: ${submittedAt}`,
    values.referralSource ? `How they heard about us: ${values.referralSource}` : null,
    "",
    "Message:",
    values.message,
    "",
    `Reply directly to this email to respond to ${values.email}.`,
  ].filter(Boolean);

  return {
    to: CONTACT_ADMIN_EMAIL,
    subject,
    text: bodyLines.join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h1 style="font-size: 24px; margin-bottom: 16px;">New contact form submission</h1>
        <p><strong>From:</strong> ${values.name} &lt;${values.email}&gt;</p>
        <p><strong>Organization:</strong> ${values.organization || "-"}</p>
        <p><strong>Phone:</strong> ${values.phone || "-"}</p>
        <p><strong>Interest:</strong> ${values.interest}</p>
        <p><strong>Submitted:</strong> ${submittedAt}</p>
        ${
          values.referralSource
            ? `<p><strong>How they heard about us:</strong> ${values.referralSource}</p>`
            : ""
        }
        <p><strong>Message:</strong></p>
        <p>${values.message.replace(/\n/g, "<br />")}</p>
        <p>Reply directly to this email to respond to ${values.email}.</p>
      </div>
    `,
    replyTo: [values.email],
  };
}

export function buildSubmitterContactEmail(values: ContactFormValues) {
  const summary = values.message.length > 240 ? `${values.message.slice(0, 237)}...` : values.message;

  return {
    to: values.email,
    subject: "We received your message - Future Logix",
    text: [
      "Thank you for contacting Future Logix.",
      "",
      "We typically respond within 24 hours.",
      "",
      `Your message: ${summary}`,
      "",
      "For urgent matters, call +23470611006212.",
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h1 style="font-size: 24px; margin-bottom: 16px;">We received your message</h1>
        <p>Thank you for contacting Future Logix.</p>
        <p>We typically respond within 24 hours.</p>
        <p><strong>Your message:</strong> ${summary}</p>
        <p>For urgent matters, call +23470611006212.</p>
      </div>
    `,
  };
}

export function createContactSubmissionRecord(values: ContactFormValues, source: string, ipAddress: string) {
  return {
    id: randomUUID(),
    name: values.name,
    email: values.email,
    organization: values.organization,
    phone: values.phone,
    interest: values.interest,
    message: values.message,
    source,
    submittedAt: new Date().toISOString(),
    status: "new" as const,
    referralSource: values.referralSource,
    ipAddress,
  };
}

export function validateContactPayload(values: unknown) {
  return contactFormSchema.safeParse(values);
}

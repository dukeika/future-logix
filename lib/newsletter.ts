import { randomBytes } from "node:crypto";

import {
  DynamoDBClient,
} from "@aws-sdk/client-dynamodb";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  QueryCommand,
  ScanCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";

import type { NewsletterSubscription } from "@/types";

const NEWSLETTER_TABLE_NAME =
  process.env.NEWSLETTER_TABLE_NAME ?? "NewsletterSubscriptions";
const AWS_REGION = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION ?? "eu-west-2";
const SITE_URL = process.env.SITE_URL ?? "https://futurelogix.ng";
const NEWSLETTER_FROM_EMAIL = process.env.NEWSLETTER_FROM_EMAIL ?? "hello@futurelogix.ng";
const SES_CONFIGURATION_SET_NAME = process.env.SES_CONFIGURATION_SET_NAME;

const disposableDomains = new Set([
  "10minutemail.com",
  "dispostable.com",
  "fakeinbox.com",
  "guerrillamail.com",
  "mailinator.com",
  "sharklasers.com",
  "tempmail.com",
  "temp-mail.org",
  "trashmail.com",
  "yopmail.com",
]);

const dynamoClient = new DynamoDBClient({ region: AWS_REGION });
const sesClient = new SESv2Client({ region: AWS_REGION });
const docClient = DynamoDBDocumentClient.from(dynamoClient, {
  marshallOptions: { removeUndefinedValues: true },
});

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

export function normalizeNewsletterEmail(email: string) {
  return email.trim().toLowerCase();
}

export function validateNewsletterEmail(email: string) {
  const normalized = normalizeNewsletterEmail(email);
  const basicPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!basicPattern.test(normalized)) {
    return "Enter a valid email address.";
  }

  const domain = normalized.split("@")[1];

  if (disposableDomains.has(domain)) {
    return "Disposable email addresses are not allowed.";
  }

  return null;
}

export function checkNewsletterRateLimit(ipAddress: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(ipAddress);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(ipAddress, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return null;
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return "Too many signup attempts from this connection. Please try again later.";
  }

  existing.count += 1;
  return null;
}

export function createNewsletterToken() {
  return randomBytes(24).toString("hex");
}

export function getNewsletterIpAddress(forwardedForHeader: string | null) {
  return forwardedForHeader?.split(",")[0]?.trim() || "unknown";
}

export function getNewsletterBaseUrl(requestUrl?: string) {
  if (SITE_URL) {
    return SITE_URL.replace(/\/$/, "");
  }

  if (!requestUrl) {
    return "https://futurelogix.ng";
  }

  return new URL(requestUrl).origin;
}

export async function getNewsletterSubscription(email: string) {
  const response = await docClient.send(
    new GetCommand({
      TableName: NEWSLETTER_TABLE_NAME,
      Key: { email },
    })
  );

  return (response.Item as NewsletterSubscription | undefined) ?? null;
}

export async function putNewsletterSubscription(subscription: NewsletterSubscription) {
  await docClient.send(
    new PutCommand({
      TableName: NEWSLETTER_TABLE_NAME,
      Item: subscription,
    })
  );
}

export async function findNewsletterSubscriptionByToken(
  token: string,
  indexName: "confirmationToken-index" | "unsubscribeToken-index",
  field: "confirmationToken" | "unsubscribeToken"
) {
  const response = await docClient.send(
    new QueryCommand({
      TableName: NEWSLETTER_TABLE_NAME,
      IndexName: indexName,
      KeyConditionExpression: "#field = :token",
      ExpressionAttributeNames: { "#field": field },
      ExpressionAttributeValues: { ":token": token },
      Limit: 1,
    })
  );

  return (response.Items?.[0] as NewsletterSubscription | undefined) ?? null;
}

export async function confirmNewsletterSubscription(email: string) {
  const confirmedAt = new Date().toISOString();

  await docClient.send(
    new UpdateCommand({
      TableName: NEWSLETTER_TABLE_NAME,
      Key: { email },
      UpdateExpression:
        "SET confirmed = :confirmed, confirmedAt = :confirmedAt REMOVE confirmationToken",
      ExpressionAttributeValues: {
        ":confirmed": true,
        ":confirmedAt": confirmedAt,
      },
    })
  );

  return confirmedAt;
}

export async function unsubscribeNewsletterSubscription(email: string) {
  const unsubscribedAt = new Date().toISOString();

  await docClient.send(
    new UpdateCommand({
      TableName: NEWSLETTER_TABLE_NAME,
      Key: { email },
      UpdateExpression:
        "SET confirmed = :confirmed, unsubscribedAt = :unsubscribedAt REMOVE confirmationToken",
      ExpressionAttributeValues: {
        ":confirmed": false,
        ":unsubscribedAt": unsubscribedAt,
      },
    })
  );

  return unsubscribedAt;
}

export async function listRecentNewsletterSubscriptions(limit = 50) {
  const response = await docClient.send(
    new ScanCommand({
      TableName: NEWSLETTER_TABLE_NAME,
      Limit: limit,
    })
  );

  return ((response.Items as NewsletterSubscription[] | undefined) ?? []).sort((a, b) =>
    b.subscribedAt.localeCompare(a.subscribedAt)
  );
}

export async function sendNewsletterEmail({
  subject,
  html,
  text,
  to,
}: {
  subject: string;
  html: string;
  text: string;
  to: string;
}) {
  await sesClient.send(
    new SendEmailCommand({
      FromEmailAddress: NEWSLETTER_FROM_EMAIL,
      ReplyToAddresses: [NEWSLETTER_FROM_EMAIL],
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

export function buildNewsletterConfirmationEmail({
  confirmationUrl,
  unsubscribeUrl,
}: {
  confirmationUrl: string;
  unsubscribeUrl: string;
}) {
  return {
    subject: "Confirm your subscription to Future Logix insights",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h1 style="font-size: 24px; margin-bottom: 16px;">Confirm your subscription</h1>
        <p>Welcome to Future Logix insights.</p>
        <p>Please confirm your email address to receive practical updates on technology, operations, and African business.</p>
        <p>
          <a href="${confirmationUrl}" style="display: inline-block; padding: 12px 18px; background: #0066cc; color: #ffffff; text-decoration: none; border-radius: 999px;">
            Confirm subscription
          </a>
        </p>
        <p>If you would rather not receive these emails, unsubscribe here:</p>
        <p><a href="${unsubscribeUrl}">${unsubscribeUrl}</a></p>
        <p>If you did not request this, you can ignore this email.</p>
      </div>
    `,
    text: [
      "Confirm your subscription to Future Logix insights.",
      "",
      `Confirm here: ${confirmationUrl}`,
      "",
      `Unsubscribe: ${unsubscribeUrl}`,
      "",
      "If you did not request this, ignore this email.",
    ].join("\n"),
  };
}

export function buildNewsletterWelcomeEmail({
  unsubscribeUrl,
}: {
  unsubscribeUrl: string;
}) {
  return {
    subject: "You're subscribed to Future Logix insights",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h1 style="font-size: 24px; margin-bottom: 16px;">You're subscribed</h1>
        <p>Thank you for subscribing to Future Logix insights.</p>
        <p>You can expect practical updates on products, implementation, operations, and African business technology.</p>
        <p>If you ever want to unsubscribe, use this link:</p>
        <p><a href="${unsubscribeUrl}">${unsubscribeUrl}</a></p>
        <p>Contact: hello@futurelogix.ng</p>
      </div>
    `,
    text: [
      "You're subscribed to Future Logix insights.",
      "",
      "Thank you for subscribing. You can expect practical updates on products, implementation, operations, and African business technology.",
      "",
      `Unsubscribe: ${unsubscribeUrl}`,
      "",
      "Contact: hello@futurelogix.ng",
    ].join("\n"),
  };
}

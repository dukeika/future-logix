import { NextResponse } from "next/server";

import {
  buildAdminContactEmail,
  buildSubmitterContactEmail,
  checkContactRateLimit,
  createContactSubmissionRecord,
  detectSpam,
  getContactIpAddress,
  sanitizeContactPayload,
  sendContactEmail,
  storeContactSubmission,
  validateContactPayload,
} from "@/lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const honeypot = typeof payload.companyWebsite === "string" ? payload.companyWebsite.trim() : "";
    const source = typeof payload.source === "string" && payload.source.trim() ? payload.source.trim() : "contact-page";

    if (honeypot) {
      return NextResponse.json(
        { message: "Thank you for your message. We'll respond within 24 hours." },
        { status: 200, headers: { "Cache-Control": "no-store" } }
      );
    }

    const ipAddress = getContactIpAddress(request.headers.get("x-forwarded-for"));
    const rateLimitError = checkContactRateLimit(ipAddress);

    if (rateLimitError) {
      return NextResponse.json(
        { message: rateLimitError },
        { status: 429, headers: { "Cache-Control": "no-store" } }
      );
    }

    const parsed = validateContactPayload(payload);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];

      return NextResponse.json(
        { message: firstIssue?.message ?? "Please check your form and try again." },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    const sanitized = sanitizeContactPayload(parsed.data);

    if (detectSpam(sanitized)) {
      return NextResponse.json(
        { message: "Thank you for your message. We'll respond within 24 hours." },
        { status: 200, headers: { "Cache-Control": "no-store" } }
      );
    }

    const submission = createContactSubmissionRecord(sanitized, source, ipAddress);
    await storeContactSubmission(submission);

    const adminEmail = buildAdminContactEmail(sanitized, submission.submittedAt);
    const submitterEmail = buildSubmitterContactEmail(sanitized);

    await Promise.all([
      sendContactEmail(adminEmail),
      sendContactEmail(submitterEmail),
    ]);

    return NextResponse.json(
      { message: "Thank you for your message. We'll respond within 24 hours." },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("Contact submission failed", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again or email us directly." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

import { NextResponse } from "next/server";

import {
  buildNewsletterConfirmationEmail,
  checkNewsletterRateLimit,
  createNewsletterToken,
  getNewsletterBaseUrl,
  getNewsletterIpAddress,
  getNewsletterSubscription,
  normalizeNewsletterEmail,
  putNewsletterSubscription,
  sendNewsletterEmail,
  validateNewsletterEmail,
} from "@/lib/newsletter";

export const runtime = "nodejs";
const noStoreHeaders = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const emailInput = String(body?.email ?? "");
    const source = String(body?.source ?? "footer");

    const email = normalizeNewsletterEmail(emailInput);
    const validationError = validateNewsletterEmail(email);

    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400, headers: noStoreHeaders });
    }

    const ipAddress = getNewsletterIpAddress(request.headers.get("x-forwarded-for"));
    const rateLimitError = checkNewsletterRateLimit(ipAddress);

    if (rateLimitError) {
      return NextResponse.json({ error: rateLimitError }, { status: 429, headers: noStoreHeaders });
    }

    const existing = await getNewsletterSubscription(email);

    if (existing?.confirmed && !existing.unsubscribedAt) {
      return NextResponse.json(
        { error: "This email is already subscribed to Future Logix insights." },
        { status: 409, headers: noStoreHeaders }
      );
    }

    const confirmationToken = createNewsletterToken();
    const unsubscribeToken = existing?.unsubscribeToken ?? createNewsletterToken();
    const subscribedAt = new Date().toISOString();
    const baseUrl = getNewsletterBaseUrl(request.url);
    const confirmationUrl = `${baseUrl}/api/newsletter/confirm?token=${confirmationToken}`;
    const unsubscribeUrl = `${baseUrl}/api/newsletter/unsubscribe?token=${unsubscribeToken}`;

    await putNewsletterSubscription({
      email,
      subscribedAt,
      source,
      confirmed: false,
      confirmationToken,
      unsubscribeToken,
    });

    const confirmationEmail = buildNewsletterConfirmationEmail({
      confirmationUrl,
      unsubscribeUrl,
    });

    await sendNewsletterEmail({
      to: email,
      subject: confirmationEmail.subject,
      html: confirmationEmail.html,
      text: confirmationEmail.text,
    });

    return NextResponse.json({
      message: "Check your email to confirm subscription.",
    }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("newsletter subscribe error", error);
    return NextResponse.json(
      { error: "Unable to process your subscription right now. Please try again later." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}

import { NextResponse } from "next/server";

import {
  buildNewsletterWelcomeEmail,
  confirmNewsletterSubscription,
  findNewsletterSubscriptionByToken,
  getNewsletterBaseUrl,
  sendNewsletterEmail,
} from "@/lib/newsletter";

export const runtime = "nodejs";
const noStoreHeaders = { "Cache-Control": "no-store" };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const baseUrl = getNewsletterBaseUrl(request.url);

  if (!token) {
    return NextResponse.redirect(new URL("/newsletter/success?status=invalid", baseUrl), {
      headers: noStoreHeaders,
    });
  }

  try {
    const subscription = await findNewsletterSubscriptionByToken(
      token,
      "confirmationToken-index",
      "confirmationToken"
    );

    if (!subscription) {
      return NextResponse.redirect(new URL("/newsletter/success?status=invalid", baseUrl), {
        headers: noStoreHeaders,
      });
    }

    if (subscription.confirmed && !subscription.unsubscribedAt) {
      return NextResponse.redirect(new URL("/newsletter/success?status=already", baseUrl), {
        headers: noStoreHeaders,
      });
    }

    await confirmNewsletterSubscription(subscription.email);

    const unsubscribeUrl = `${baseUrl}/api/newsletter/unsubscribe?token=${subscription.unsubscribeToken}`;
    const welcomeEmail = buildNewsletterWelcomeEmail({ unsubscribeUrl });

    await sendNewsletterEmail({
      to: subscription.email,
      subject: welcomeEmail.subject,
      html: welcomeEmail.html,
      text: welcomeEmail.text,
    });

    return NextResponse.redirect(new URL("/newsletter/success?status=confirmed", baseUrl), {
      headers: noStoreHeaders,
    });
  } catch (error) {
    console.error("newsletter confirm error", error);
    return NextResponse.redirect(new URL("/newsletter/success?status=error", baseUrl), {
      headers: noStoreHeaders,
    });
  }
}

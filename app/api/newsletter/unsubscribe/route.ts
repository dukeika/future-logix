import { NextResponse } from "next/server";

import {
  findNewsletterSubscriptionByToken,
  getNewsletterBaseUrl,
  unsubscribeNewsletterSubscription,
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
      "unsubscribeToken-index",
      "unsubscribeToken"
    );

    if (!subscription) {
      return NextResponse.redirect(new URL("/newsletter/success?status=invalid", baseUrl), {
        headers: noStoreHeaders,
      });
    }

    await unsubscribeNewsletterSubscription(subscription.email);

    return NextResponse.redirect(new URL("/newsletter/success?status=unsubscribed", baseUrl), {
      headers: noStoreHeaders,
    });
  } catch (error) {
    console.error("newsletter unsubscribe error", error);
    return NextResponse.redirect(new URL("/newsletter/success?status=error", baseUrl), {
      headers: noStoreHeaders,
    });
  }
}

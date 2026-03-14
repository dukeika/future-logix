import { NextResponse } from "next/server";
import { z } from "zod";

import { initializeFutureLogixPayment } from "@/lib/payments";

export const runtime = "nodejs";

const noStoreHeaders = { "Cache-Control": "no-store" };

const directPaymentSchema = z.object({
  email: z.string().trim().email(),
  amount: z.number().min(100),
  description: z.string().trim().min(3).max(160),
});

export async function POST(request: Request) {
  try {
    const payload = await request.json().catch(() => null);
    const parsed = directPaymentSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid payment payload." },
        { status: 400, headers: noStoreHeaders }
      );
    }

    const payment = await initializeFutureLogixPayment({
      amount: parsed.data.amount,
      email: parsed.data.email,
      referencePrefix: "FLX-DIRECT",
      metadata: {
        app: "futurelogix",
        source: "direct_payment",
        description: parsed.data.description,
      },
    });

    return NextResponse.json(
      {
        authorization_url: payment.authorizationUrl,
        reference: payment.reference,
      },
      { headers: noStoreHeaders }
    );
  } catch (error) {
    console.error("direct payment initialization error", error);
    return NextResponse.json(
      { error: "Unable to initialize direct payment right now." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}

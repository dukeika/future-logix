import { NextResponse } from "next/server";
import { z } from "zod";

import { getInvoice, updateInvoice } from "@/lib/invoices";
import { getPaystackClient } from "@/lib/paystack";

export const runtime = "nodejs";

const noStoreHeaders = { "Cache-Control": "no-store" };
const SITE_URL = process.env.SITE_URL ?? "https://futurelogix.ng";

const initializePaymentSchema = z.object({
  invoiceId: z.string().trim().min(1),
  email: z.string().trim().email(),
  amount: z.number().int().positive(),
});

export async function POST(request: Request) {
  try {
    const payload = await request.json().catch(() => null);
    const parsed = initializePaymentSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid payment payload." },
        { status: 400, headers: noStoreHeaders }
      );
    }

    const { invoiceId, email, amount } = parsed.data;
    const invoice = await getInvoice(invoiceId);

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found." }, { status: 404, headers: noStoreHeaders });
    }

    const paystack = getPaystackClient();

    const response = (await (paystack as any).transaction.initialize({
      email,
      amount: amount * 100,
      reference: `${invoiceId}-${Date.now()}`,
      callback_url: `${SITE_URL}/pay/success?invoiceId=${encodeURIComponent(invoiceId)}`,
      metadata: {
        invoiceId,
      },
    })) as {
      data?: {
        authorization_url?: string;
        reference?: string;
      };
    };

    const authorizationUrl = response.data?.authorization_url;
    const reference = response.data?.reference;

    if (!authorizationUrl || !reference) {
      throw new Error("Paystack did not return an authorization URL.");
    }

    await updateInvoice(invoiceId, { paystackReference: reference, clientEmail: email });

    return NextResponse.json(
      {
        authorization_url: authorizationUrl,
        reference,
      },
      { headers: noStoreHeaders }
    );
  } catch (error) {
    console.error("initialize payment error", error);
    return NextResponse.json(
      { error: "Unable to initialize payment right now." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}

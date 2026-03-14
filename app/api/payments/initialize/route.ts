import { NextResponse } from "next/server";
import { z } from "zod";

import { getInvoice } from "@/lib/invoices";
import { getOrCreatePaymentLink } from "@/lib/payment-links";

export const runtime = "nodejs";

const noStoreHeaders = { "Cache-Control": "no-store" };
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

    if (invoice.totalAmount !== amount) {
      return NextResponse.json({ error: "Invoice total no longer matches the payment amount." }, { status: 409, headers: noStoreHeaders });
    }

    const paymentLink = await getOrCreatePaymentLink({
      ...invoice,
      clientEmail: email,
    });

    return NextResponse.json(
      {
        authorization_url: paymentLink.url,
        reference: paymentLink.reference,
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

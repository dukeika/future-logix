import { NextResponse } from "next/server";

import { getInvoice } from "@/lib/invoices";
import { getOrCreatePaymentLink } from "@/lib/payment-links";

export const runtime = "nodejs";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const invoice = await getInvoice(id);

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found." }, { status: 404, headers: { "Cache-Control": "no-store" } });
    }

    if (invoice.status === "paid") {
      return NextResponse.json(
        { error: "Payment link is not available for a paid invoice." },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    const paymentLink = await getOrCreatePaymentLink(invoice);

    return NextResponse.json(
      {
        paymentUrl: paymentLink.url,
        reference: paymentLink.reference,
        expiresAt: paymentLink.expiresAt,
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("invoice link generation error", error);
    return NextResponse.json(
      { error: "Unable to generate payment link right now." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

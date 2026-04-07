import { NextResponse } from "next/server";

import { requireAdminRequest } from "@/lib/admin-request";
import { getInvoice, updateInvoice } from "@/lib/invoices";
import { getOrCreatePaymentLink, markPaymentLinkEvent } from "@/lib/payment-links";

export const runtime = "nodejs";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const unauthorized = requireAdminRequest(request);

    if (unauthorized) {
      return unauthorized;
    }

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
    const trackedPaymentLink = markPaymentLinkEvent(paymentLink, "copied");

    await updateInvoice(invoice.invoiceId, {
      paymentLink: trackedPaymentLink,
      paystackReference: trackedPaymentLink.reference,
    });

    return NextResponse.json(
      {
        paymentUrl: trackedPaymentLink.url,
        reference: trackedPaymentLink.reference,
        expiresAt: trackedPaymentLink.expiresAt,
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

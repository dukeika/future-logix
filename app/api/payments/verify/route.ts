import { NextResponse } from "next/server";
import { z } from "zod";

import { getInvoiceByPaystackReference, updateInvoice } from "@/lib/invoices";
import { buildPaymentConfirmationEmail } from "@/lib/email-templates/payment-link";
import { sendContactEmail } from "@/lib/contact";
import { verifyFutureLogixPayment } from "@/lib/payments";

export const runtime = "nodejs";

const verifySchema = z.object({
  reference: z.string().trim().min(1),
});

export async function POST(request: Request) {
  try {
    const payload = await request.json().catch(() => null);
    const parsed = verifySchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid verification request." },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    const payment = await verifyFutureLogixPayment(parsed.data.reference);

    if (payment.status !== "success") {
      return NextResponse.json(
        {
          paymentStatus: payment.status,
          reference: payment.reference,
          source: payment.metadata?.source,
        },
        { headers: { "Cache-Control": "no-store" } }
      );
    }

    if (payment.metadata?.app !== "futurelogix") {
      return NextResponse.json(
        { error: "Unsupported payment metadata." },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    if (payment.metadata.source === "direct_payment") {
      return NextResponse.json(
        {
          description: payment.metadata.description ?? "Direct payment",
          email: payment.email,
          paymentStatus: "success",
          reference: payment.reference,
          source: payment.metadata.source,
          totalAmount: typeof payment.amount === "number" ? payment.amount / 100 : undefined,
        },
        { headers: { "Cache-Control": "no-store" } }
      );
    }

    const invoice = await getInvoiceByPaystackReference(payment.reference);

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found for this payment reference." }, { status: 404 });
    }

    if (typeof payment.amount === "number" && invoice.totalAmount * 100 !== payment.amount) {
      return NextResponse.json({ error: "Payment amount mismatch." }, { status: 400 });
    }

    if (invoice.status === "paid") {
      return NextResponse.json(
        {
          invoice,
          invoiceId: invoice.invoiceId,
          paymentStatus: "success",
          reference: payment.reference,
          source: payment.metadata.source,
          totalAmount: invoice.totalAmount,
        },
        { headers: { "Cache-Control": "no-store" } }
      );
    }

    const updated = await updateInvoice(invoice.invoiceId, {
      clientEmail: payment.email ?? invoice.clientEmail,
      status: "paid",
    });

    const confirmationEmail = buildPaymentConfirmationEmail({
      amount: updated.totalAmount,
      description: `Invoice ${updated.invoiceId}`,
      email: updated.clientEmail,
      reference: payment.reference,
    });

    await sendContactEmail({
      to: confirmationEmail.to,
      subject: confirmationEmail.subject,
      html: confirmationEmail.html,
      text: confirmationEmail.text,
    });

    return NextResponse.json(
      {
        invoice: updated,
        invoiceId: updated.invoiceId,
        paymentStatus: "success",
        reference: payment.reference,
        source: payment.metadata.source,
        totalAmount: updated.totalAmount,
      },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("verify payment error", error);
    return NextResponse.json(
      { error: "Unable to verify payment right now." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

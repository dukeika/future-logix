import { createHmac, timingSafeEqual } from "node:crypto";

import { NextResponse } from "next/server";

import { getInvoiceByPaystackReference, updateInvoice } from "@/lib/invoices";
import { buildPaymentConfirmationEmail } from "@/lib/email-templates/payment-link";
import { sendContactEmail } from "@/lib/contact";
import { getPaystackSecretKey } from "@/lib/paystack";
import { normalizePaymentMetadata } from "@/lib/payments";

export const runtime = "nodejs";

type PaystackWebhookPayload = {
  event?: string;
  data?: {
    amount?: number;
    customer?: { email?: string };
    metadata?: unknown;
    reference?: string;
    status?: string;
  };
};

function signatureIsValid(body: string, signature: string | null) {
  if (!signature) {
    return false;
  }

  const expected = createHmac("sha512", getPaystackSecretKey()).update(body).digest("hex");
  const received = signature.trim();

  if (expected.length !== received.length) {
    return false;
  }

  return timingSafeEqual(Buffer.from(expected), Buffer.from(received));
}

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-paystack-signature");

    if (!signatureIsValid(body, signature)) {
      return NextResponse.json({ error: "Invalid webhook signature." }, { status: 401 });
    }

    const payload = JSON.parse(body) as PaystackWebhookPayload;

    if (payload.event !== "charge.success") {
      return NextResponse.json({ received: true }, { headers: { "Cache-Control": "no-store" } });
    }

    const reference = payload.data?.reference;
    const amount = payload.data?.amount;
    const email = payload.data?.customer?.email?.trim().toLowerCase();
    const metadata = normalizePaymentMetadata(payload.data?.metadata);

    if (!reference || !amount || !email || metadata?.app !== "futurelogix") {
      return NextResponse.json({ received: true, ignored: true }, { headers: { "Cache-Control": "no-store" } });
    }

    if (metadata.source === "direct_payment") {
      const confirmationEmail = buildPaymentConfirmationEmail({
        amount: amount / 100,
        description: metadata.description ?? "Direct payment",
        email,
        reference,
      });

      await sendContactEmail({
        to: confirmationEmail.to,
        subject: confirmationEmail.subject,
        html: confirmationEmail.html,
        text: confirmationEmail.text,
      });

      console.info("paystack direct payment received", { email, reference });
      return NextResponse.json(
        { logged: true, received: true, source: metadata.source },
        { headers: { "Cache-Control": "no-store" } }
      );
    }

    const invoice = await getInvoiceByPaystackReference(reference);

    if (!invoice) {
      return NextResponse.json({ received: true, missingInvoice: true }, { headers: { "Cache-Control": "no-store" } });
    }

    if (invoice.status === "paid") {
      return NextResponse.json({ received: true, alreadyPaid: true }, { headers: { "Cache-Control": "no-store" } });
    }

    if (invoice.totalAmount * 100 !== amount) {
      console.error("paystack webhook amount mismatch", {
        expected: invoice.totalAmount * 100,
        invoiceId: invoice.invoiceId,
        received: amount,
      });
      return NextResponse.json({ mismatch: true, received: true }, { headers: { "Cache-Control": "no-store" } });
    }

    const updated = await updateInvoice(invoice.invoiceId, {
      clientEmail: email,
      status: "paid",
    });

    const confirmationEmail = buildPaymentConfirmationEmail({
      amount: updated.totalAmount,
      description: `Invoice ${updated.invoiceId}`,
      email: updated.clientEmail,
      reference,
    });

    await sendContactEmail({
      to: confirmationEmail.to,
      subject: confirmationEmail.subject,
      html: confirmationEmail.html,
      text: confirmationEmail.text,
    });

    return NextResponse.json(
      { received: true, source: metadata.source, status: updated.status },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("paystack webhook error", error);
    return NextResponse.json({ error: "Unable to process webhook." }, { status: 500 });
  }
}

import { createHmac, timingSafeEqual } from "node:crypto";

import { NextResponse } from "next/server";

import { sendContactEmail } from "@/lib/contact";
import { getInvoiceByPaystackReference, updateInvoice } from "@/lib/invoices";
import { getPaystackSecretKey } from "@/lib/paystack";

export const runtime = "nodejs";

type PaystackWebhookPayload = {
  event?: string;
  data?: {
    amount?: number;
    customer?: { email?: string };
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

function buildPaymentConfirmationEmail(invoiceId: string, amount: number, clientName: string) {
  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(amount);

  return {
    subject: `Payment confirmed for ${invoiceId}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h1 style="font-size: 24px; margin-bottom: 16px;">Payment received</h1>
        <p>Hi ${clientName},</p>
        <p>We have confirmed payment for invoice <strong>${invoiceId}</strong>.</p>
        <p><strong>Amount:</strong> ${formattedAmount}</p>
        <p>Thank you for choosing Future Logix.</p>
      </div>
    `,
    text: [
      `Hi ${clientName},`,
      "",
      `We have confirmed payment for invoice ${invoiceId}.`,
      `Amount: ${formattedAmount}`,
      "",
      "Thank you for choosing Future Logix.",
    ].join("\n"),
  };
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

    if (!reference || !amount || !email) {
      return NextResponse.json({ received: true }, { headers: { "Cache-Control": "no-store" } });
    }

    const invoice = await getInvoiceByPaystackReference(reference);

    if (!invoice) {
      return NextResponse.json({ received: true }, { headers: { "Cache-Control": "no-store" } });
    }

    if (invoice.status === "paid") {
      return NextResponse.json({ received: true, alreadyPaid: true }, { headers: { "Cache-Control": "no-store" } });
    }

    if (invoice.totalAmount * 100 !== amount) {
      console.error("paystack webhook amount mismatch", {
        invoiceId: invoice.invoiceId,
        expected: invoice.totalAmount * 100,
        received: amount,
      });
      return NextResponse.json({ received: true, mismatch: true }, { headers: { "Cache-Control": "no-store" } });
    }

    const updated = await updateInvoice(invoice.invoiceId, {
      clientEmail: email,
      status: "paid",
    });

    const confirmationEmail = buildPaymentConfirmationEmail(
      updated.invoiceId,
      updated.totalAmount,
      updated.clientName
    );

    await sendContactEmail({
      to: updated.clientEmail,
      subject: confirmationEmail.subject,
      html: confirmationEmail.html,
      text: confirmationEmail.text,
    });

    return NextResponse.json({ received: true, status: updated.status }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("paystack webhook error", error);
    return NextResponse.json({ error: "Unable to process webhook." }, { status: 500 });
  }
}

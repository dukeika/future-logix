import { NextResponse } from "next/server";
import { z } from "zod";

import { sendContactEmail } from "@/lib/contact";
import { getInvoiceByPaystackReference, updateInvoice } from "@/lib/invoices";
import { getPaystackClient } from "@/lib/paystack";

export const runtime = "nodejs";

const verifySchema = z.object({
  reference: z.string().trim().min(1),
});

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
    const payload = await request.json().catch(() => null);
    const parsed = verifySchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid verification request." },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    const paystack = getPaystackClient();
    const response = (await (paystack as any).transaction.verify({
      reference: parsed.data.reference,
    })) as {
      data?: {
        amount?: number;
        customer?: { email?: string };
        reference?: string;
        status?: string;
      };
    };

    const status = response.data?.status;
    const reference = response.data?.reference;
    const amount = response.data?.amount;

    if (!reference || !status) {
      throw new Error("Paystack did not return a valid verification payload.");
    }

    const invoice = await getInvoiceByPaystackReference(reference);

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found for this payment reference." }, { status: 404 });
    }

    if (status !== "success") {
      return NextResponse.json(
        {
          invoiceId: invoice.invoiceId,
          paymentStatus: status,
        },
        { headers: { "Cache-Control": "no-store" } }
      );
    }

    if (typeof amount === "number" && invoice.totalAmount * 100 !== amount) {
      return NextResponse.json({ error: "Payment amount mismatch." }, { status: 400 });
    }

    if (invoice.status === "paid") {
      return NextResponse.json(
        {
          invoiceId: invoice.invoiceId,
          paymentStatus: "success",
          invoice,
        },
        { headers: { "Cache-Control": "no-store" } }
      );
    }

    const updated = await updateInvoice(invoice.invoiceId, {
      clientEmail: response.data?.customer?.email?.trim().toLowerCase() ?? invoice.clientEmail,
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

    return NextResponse.json(
      {
        invoiceId: updated.invoiceId,
        paymentStatus: "success",
        invoice: updated,
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

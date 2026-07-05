import { NextResponse } from "next/server";
import { z } from "zod";

import { requireAdminRequest } from "@/lib/admin-request";
import { buildPaymentLinkEmail } from "@/lib/email-templates/payment-link";
import { generateInvoicePDF } from "@/lib/pdf-generator";
import { getInvoice, updateInvoice } from "@/lib/invoices";
import { sendMail } from "@/lib/mailer";
import { getOrCreatePaymentLink, markPaymentLinkEvent } from "@/lib/payment-links";

const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "admin@futurelogix.ng";

export const runtime = "nodejs";
const sendInvoiceSchema = z.object({
  mode: z.enum(["pdf", "payment-link"]).optional(),
  type: z.enum(["invoice", "payment_link"]).optional(),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const unauthorized = requireAdminRequest(request);

    if (unauthorized) {
      return unauthorized;
    }

    const payload = await request.json().catch(() => null);
    const parsed = sendInvoiceSchema.safeParse(payload ?? {});

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid send option." },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    const { id } = await params;
    const invoice = await getInvoice(id);

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found." }, { status: 404, headers: { "Cache-Control": "no-store" } });
    }

    const type =
      parsed.data.type ??
      (parsed.data.mode === "payment-link" ? "payment_link" : parsed.data.mode === "pdf" ? "invoice" : undefined) ??
      (invoice.status === "paid" ? "invoice" : "payment_link");

    if (type === "payment_link" && invoice.status !== "paid") {
      const paymentLink = await getOrCreatePaymentLink(invoice);
      const trackedPaymentLink = markPaymentLinkEvent(paymentLink, "sent");
      const description = `Invoice ${invoice.invoiceId} is ready for payment. Due date: ${invoice.dueDate}.`;
      const paymentLinkEmail = buildPaymentLinkEmail({
        amount: invoice.totalAmount,
        clientName: invoice.clientName,
        description,
        expiresAt: trackedPaymentLink.expiresAt,
        paymentUrl: trackedPaymentLink.url,
        subject: "Payment Request from Future Logix",
      });

      await sendMail({
        from: CONTACT_FROM_EMAIL,
        to: invoice.clientEmail,
        replyTo: [CONTACT_FROM_EMAIL],
        subject: paymentLinkEmail.subject,
        html: paymentLinkEmail.html,
        text: paymentLinkEmail.text,
      });

      const updated = await updateInvoice(invoice.invoiceId, {
        status: "sent",
        paymentLink: trackedPaymentLink,
        paystackReference: trackedPaymentLink.reference,
      });

      return NextResponse.json(
        {
          message: "Payment link sent successfully.",
          invoice: updated,
          paymentUrl: trackedPaymentLink.url,
          reference: trackedPaymentLink.reference,
          expiresAt: trackedPaymentLink.expiresAt,
        },
        { headers: { "Cache-Control": "no-store" } }
      );
    }

    const pdf = await generateInvoicePDF(invoice);

    await sendMail({
      from: CONTACT_FROM_EMAIL,
      to: invoice.clientEmail,
      replyTo: [CONTACT_FROM_EMAIL],
      subject: `Invoice ${invoice.invoiceId} from Future Logix`,
      html: [
        `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">`,
        `<h1 style="font-size: 24px; margin-bottom: 16px;">Future Logix Invoice</h1>`,
        `<p>Please find invoice <strong>${invoice.invoiceId}</strong> attached as a PDF.</p>`,
        `<p>If you have any questions, reply to this email or contact +234 706 110 6212.</p>`,
        `</div>`,
      ].join(""),
      text: [
        `Please find invoice ${invoice.invoiceId} attached as a PDF.`,
        "If you have any questions, reply to this email or contact +234 706 110 6212.",
      ].join("\n"),
      attachments: [
        { filename: "invoice.pdf", content: pdf, contentType: "application/pdf" },
      ],
    });

    const updated = await updateInvoice(invoice.invoiceId, { status: "sent" });

    return NextResponse.json(
      { message: "Invoice sent successfully.", invoice: updated },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("invoice email send error", error);
    return NextResponse.json(
      { error: "Unable to send invoice right now." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

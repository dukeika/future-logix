import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { NextResponse } from "next/server";

import { generateInvoicePDF } from "@/lib/pdf-generator";
import { getInvoice, updateInvoice } from "@/lib/invoices";

const AWS_REGION = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION ?? "eu-west-2";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "admin@futurelogix.ng";
const SES_CONFIGURATION_SET_NAME = process.env.SES_CONFIGURATION_SET_NAME;

const sesClient = new SESv2Client({ region: AWS_REGION });

export const runtime = "nodejs";

function buildRawEmail({
  invoiceId,
  to,
  pdf,
}: {
  invoiceId: string;
  to: string;
  pdf: Buffer;
}) {
  const boundary = `flx-boundary-${Date.now()}`;
  const attachment = pdf.toString("base64").match(/.{1,76}/g)?.join("\r\n") ?? pdf.toString("base64");

  return Buffer.from(
    [
      `From: Future Logix <${CONTACT_FROM_EMAIL}>`,
      `To: ${to}`,
      `Reply-To: ${CONTACT_FROM_EMAIL}`,
      `Subject: Invoice ${invoiceId} from Future Logix`,
      "MIME-Version: 1.0",
      `Content-Type: multipart/mixed; boundary="${boundary}"`,
      "",
      `--${boundary}`,
      "Content-Type: text/html; charset=UTF-8",
      "Content-Transfer-Encoding: 7bit",
      "",
      `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">`,
      `<h1 style="font-size: 24px; margin-bottom: 16px;">Future Logix Invoice</h1>`,
      `<p>Please find invoice <strong>${invoiceId}</strong> attached as a PDF.</p>`,
      `<p>If you have any questions, reply to this email or contact *2347061106212.</p>`,
      `</div>`,
      "",
      `--${boundary}`,
      "Content-Type: application/pdf; name=\"invoice.pdf\"",
      "Content-Disposition: attachment; filename=\"invoice.pdf\"",
      "Content-Transfer-Encoding: base64",
      "",
      attachment,
      "",
      `--${boundary}--`,
    ].join("\r\n")
  );
}

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

    const pdf = await generateInvoicePDF(invoice);
    const raw = buildRawEmail({
      invoiceId: invoice.invoiceId,
      to: invoice.clientEmail,
      pdf,
    });

    await sesClient.send(
      new SendEmailCommand({
        FromEmailAddress: CONTACT_FROM_EMAIL,
        Destination: {
          ToAddresses: [invoice.clientEmail],
        },
        Content: {
          Raw: {
            Data: raw,
          },
        },
        ConfigurationSetName: SES_CONFIGURATION_SET_NAME,
      })
    );

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

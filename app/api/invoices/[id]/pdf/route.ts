import { NextResponse } from "next/server";

import { generateInvoicePDF } from "@/lib/pdf-generator";
import { getInvoice } from "@/lib/invoices";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const invoice = await getInvoice(id);

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found." }, { status: 404 });
    }

    const pdf = await generateInvoicePDF(invoice);

    return new NextResponse(pdf, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
        "Content-Disposition": `attachment; filename="${invoice.invoiceId}.pdf"`,
        "Content-Type": "application/pdf",
      },
    });
  } catch (error) {
    console.error("invoice pdf error", error);
    return NextResponse.json({ error: "Unable to generate invoice PDF right now." }, { status: 500 });
  }
}

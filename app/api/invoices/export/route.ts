import { NextResponse } from "next/server";

import { requireAdminRequest } from "@/lib/admin-request";
import { listInvoices } from "@/lib/invoices";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function escapeCsv(value: string | number) {
  const stringValue = String(value ?? "");
  const escaped = stringValue.replace(/"/g, "\"\"");
  return /[",\n]/.test(escaped) ? `"${escaped}"` : escaped;
}

export async function GET(request: Request) {
  try {
    const unauthorized = requireAdminRequest(request);

    if (unauthorized) {
      return unauthorized;
    }

    const invoices = await listInvoices();
    const rows = [
      ["ID", "Client", "Email", "Amount", "Status", "Due Date", "Created"],
      ...invoices.map((invoice) => [
        invoice.invoiceId,
        invoice.clientName,
        invoice.clientEmail,
        invoice.totalAmount,
        invoice.status,
        invoice.dueDate,
        invoice.createdAt,
      ]),
    ];

    const csv = rows.map((row) => row.map(escapeCsv).join(",")).join("\n");
    const date = new Date().toISOString().slice(0, 10);

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
        "Content-Disposition": `attachment; filename="invoices-${date}.csv"`,
        "Content-Type": "text/csv; charset=utf-8",
      },
    });
  } catch (error) {
    console.error("invoice export error", error);
    return NextResponse.json({ error: "Unable to export invoices right now." }, { status: 500 });
  }
}

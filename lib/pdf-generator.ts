import type { Invoice } from "@/lib/invoices";

export async function generateInvoicePDF(_invoice: Invoice): Promise<Buffer> {
  return Buffer.from("PDF placeholder");
}

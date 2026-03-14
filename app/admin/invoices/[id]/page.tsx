import { notFound } from "next/navigation";

import { InvoiceDetailClient } from "@/components/admin/InvoiceDetailClient";
import { getInvoice } from "@/lib/invoices";

export default async function InvoiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const invoice = await getInvoice(id);

  if (!invoice) {
    notFound();
  }

  return <InvoiceDetailClient invoiceId={id} initialInvoice={invoice} />;
}

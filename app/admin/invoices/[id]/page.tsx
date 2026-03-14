import { InvoiceDetailClient } from "@/components/admin/InvoiceDetailClient";

export default async function InvoiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <InvoiceDetailClient invoiceId={id} />;
}

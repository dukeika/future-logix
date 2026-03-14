import { PaymentStatusClient } from "@/components/pay/PaymentStatusClient";

export default function PaySuccessPage({
  searchParams,
}: {
  searchParams: { invoiceId?: string; reference?: string; trxref?: string };
}) {
  return (
    <PaymentStatusClient
      invoiceId={searchParams.invoiceId}
      reference={searchParams.reference ?? searchParams.trxref}
    />
  );
}

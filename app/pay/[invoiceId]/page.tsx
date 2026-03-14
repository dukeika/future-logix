import { notFound } from "next/navigation";

import { PayInvoiceClient } from "@/components/pay/PayInvoiceClient";
import { SiteContainer } from "@/components/shared/site-container";
import { getInvoice } from "@/lib/invoices";

export default async function PayInvoicePage({
  params,
}: {
  params: Promise<{ invoiceId: string }>;
}) {
  const { invoiceId } = await params;
  const invoice = await getInvoice(invoiceId);

  if (!invoice) {
    notFound();
  }

  return (
    <section className="section-shell">
      <SiteContainer className="max-w-4xl">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Pay Invoice</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Complete your payment</h1>
            <p className="max-w-2xl text-base text-muted-foreground">
              Review the invoice below and continue securely to Paystack to complete your payment.
            </p>
          </div>
          <PayInvoiceClient invoice={invoice} />
        </div>
      </SiteContainer>
    </section>
  );
}

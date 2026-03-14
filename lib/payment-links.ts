import { Invoice, InvoicePaymentLink, updateInvoice } from "@/lib/invoices";
import { getPaystackClient } from "@/lib/paystack";

const SITE_URL = process.env.SITE_URL ?? "https://futurelogix.ng";
const PAYMENT_LINK_TTL_HOURS = 72;

function resolveExpiry(invoice: Invoice, createdAt: string) {
  const createdTime = new Date(createdAt).getTime();
  const ttlTime = createdTime + PAYMENT_LINK_TTL_HOURS * 60 * 60 * 1000;
  const rawDueTime = Number.isNaN(Date.parse(invoice.dueDate))
    ? Number.POSITIVE_INFINITY
    : new Date(`${invoice.dueDate}T23:59:59.999Z`).getTime();
  const dueTime = rawDueTime > createdTime ? rawDueTime : Number.POSITIVE_INFINITY;

  return new Date(Math.min(ttlTime, dueTime)).toISOString();
}

export function getPaymentLinkStatus(invoice: Pick<Invoice, "status" | "paymentLink">) {
  if (invoice.status === "paid") {
    return "paid";
  }

  if (!invoice.paymentLink) {
    return "not-generated";
  }

  return new Date(invoice.paymentLink.expiresAt).getTime() > Date.now() ? "active" : "expired";
}

export function isPaymentLinkActive(invoice: Pick<Invoice, "status" | "paymentLink">) {
  return getPaymentLinkStatus(invoice) === "active";
}

export async function getOrCreatePaymentLink(invoice: Invoice): Promise<InvoicePaymentLink> {
  if (isPaymentLinkActive(invoice) && invoice.paymentLink) {
    return invoice.paymentLink;
  }

  const paystack = getPaystackClient();
  const response = (await (paystack as any).transaction.initialize({
    email: invoice.clientEmail,
    amount: invoice.totalAmount * 100,
    reference: `${invoice.invoiceId}-${Date.now()}`,
    callback_url: `${SITE_URL}/pay/success?invoiceId=${encodeURIComponent(invoice.invoiceId)}`,
    metadata: {
      invoiceId: invoice.invoiceId,
    },
  })) as {
    data?: {
      authorization_url?: string;
      reference?: string;
    };
  };

  const url = response.data?.authorization_url;
  const reference = response.data?.reference;

  if (!url || !reference) {
    throw new Error("Unable to create payment link.");
  }

  const createdAt = new Date().toISOString();
  const paymentLink: InvoicePaymentLink = {
    url,
    reference,
    createdAt,
    expiresAt: resolveExpiry(invoice, createdAt),
  };

  await updateInvoice(invoice.invoiceId, {
    clientEmail: invoice.clientEmail,
    paystackReference: reference,
    paymentLink,
  });

  return paymentLink;
}

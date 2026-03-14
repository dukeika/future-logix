import { Invoice, InvoicePaymentLink, updateInvoice } from "@/lib/invoices";
import { initializeFutureLogixPayment } from "@/lib/payments";

const PAYMENT_LINK_TTL_HOURS = 72;

type PaymentLinkEvent = "sent" | "copied";

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

async function initializePaymentLink(invoice: Invoice): Promise<InvoicePaymentLink> {
  const response = await initializeFutureLogixPayment({
    email: invoice.clientEmail,
    amount: invoice.totalAmount,
    referencePrefix: invoice.invoiceId,
    metadata: {
      app: "futurelogix",
      source: "invoice_system",
      invoiceId: invoice.invoiceId,
      paymentLinkGeneration: (invoice.paymentLink?.generationCount ?? 0) + 1,
    },
  });

  const createdAt = new Date().toISOString();
  const paymentLink: InvoicePaymentLink = {
    url: response.authorizationUrl,
    reference: response.reference,
    createdAt,
    expiresAt: resolveExpiry(invoice, createdAt),
    generationCount: (invoice.paymentLink?.generationCount ?? 0) + 1,
    lastSentAt: invoice.paymentLink?.lastSentAt,
    sentCount: invoice.paymentLink?.sentCount ?? 0,
    lastCopiedAt: invoice.paymentLink?.lastCopiedAt,
    copiedCount: invoice.paymentLink?.copiedCount ?? 0,
  };

  await updateInvoice(invoice.invoiceId, {
    clientEmail: invoice.clientEmail,
    paystackReference: response.reference,
    paymentLink,
  });

  return paymentLink;
}

export async function getOrCreatePaymentLink(invoice: Invoice): Promise<InvoicePaymentLink> {
  if (isPaymentLinkActive(invoice) && invoice.paymentLink) {
    return invoice.paymentLink;
  }

  return initializePaymentLink(invoice);
}

export function markPaymentLinkEvent(
  paymentLink: InvoicePaymentLink,
  event: PaymentLinkEvent,
  at = new Date().toISOString()
): InvoicePaymentLink {
  if (event === "sent") {
    return {
      ...paymentLink,
      lastSentAt: at,
      sentCount: (paymentLink.sentCount ?? 0) + 1,
    };
  }

  return {
    ...paymentLink,
    lastCopiedAt: at,
    copiedCount: (paymentLink.copiedCount ?? 0) + 1,
  };
}

import { getPaystackClient } from "@/lib/paystack";

const SITE_URL = process.env.SITE_URL ?? "https://futurelogix.ng";

export type FutureLogixPaymentSource = "invoice_system" | "direct_payment";

export type FutureLogixPaymentMetadata = {
  app: "futurelogix";
  source: FutureLogixPaymentSource;
  invoiceId?: string;
  description?: string;
  paymentLinkGeneration?: number;
};

type InitializePaymentInput = {
  amount: number;
  callbackPath?: string;
  email: string;
  metadata: FutureLogixPaymentMetadata;
  referencePrefix: string;
};

type PaystackVerifyData = {
  amount?: number;
  currency?: string;
  customer?: { email?: string };
  metadata?: FutureLogixPaymentMetadata | string | null;
  reference?: string;
  status?: string;
};

export function normalizePaymentMetadata(metadata: unknown): FutureLogixPaymentMetadata | null {
  if (!metadata) {
    return null;
  }

  if (typeof metadata === "string") {
    try {
      return normalizePaymentMetadata(JSON.parse(metadata) as FutureLogixPaymentMetadata);
    } catch {
      return null;
    }
  }

  if (typeof metadata !== "object" || !("app" in metadata)) {
    return null;
  }

  return (metadata as FutureLogixPaymentMetadata).app === "futurelogix"
    ? (metadata as FutureLogixPaymentMetadata)
    : null;
}

export async function initializeFutureLogixPayment({
  amount,
  callbackPath = "/pay/success",
  email,
  metadata,
  referencePrefix,
}: InitializePaymentInput) {
  const paystack = getPaystackClient();
  const response = (await (paystack as any).transaction.initialize({
    email,
    amount: amount * 100,
    reference: `${referencePrefix}-${Date.now()}`,
    callback_url: `${SITE_URL}${callbackPath}`,
    metadata,
  })) as {
    data?: {
      authorization_url?: string;
      reference?: string;
    };
  };

  const authorizationUrl = response.data?.authorization_url;
  const reference = response.data?.reference;

  if (!authorizationUrl || !reference) {
    throw new Error("Paystack did not return an authorization URL.");
  }

  return {
    authorizationUrl,
    reference,
  };
}

export async function verifyFutureLogixPayment(reference: string) {
  const paystack = getPaystackClient();
  const response = (await (paystack as any).transaction.verify({
    reference,
  })) as {
    data?: PaystackVerifyData;
  };

  if (!response.data?.reference || !response.data?.status) {
    throw new Error("Paystack did not return a valid verification payload.");
  }

  return {
    amount: response.data.amount,
    currency: response.data.currency,
    email: response.data.customer?.email?.trim().toLowerCase(),
    metadata: normalizePaymentMetadata(response.data.metadata),
    reference: response.data.reference,
    status: response.data.status,
  };
}

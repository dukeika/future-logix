import Paystack from "@paystack/paystack-sdk";

let paystackClient: Paystack | null = null;

function getPaystackSecretKey() {
  const secretKey = process.env.PAYSTACK_SERVER_KEY ?? process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing PAYSTACK_SECRET_KEY environment variable.");
  }

  return secretKey;
}

export function getPaystackClient() {
  if (!paystackClient) {
    paystackClient = new Paystack(getPaystackSecretKey());
  }

  return paystackClient;
}

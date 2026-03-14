import Paystack from "@paystack/paystack-sdk";

let paystackClient: Paystack | null = null;
let paystackModeLogged = false;

export function getPaystackSecretKey() {
  const secretKey = process.env.PAYSTACK_SERVER_KEY ?? process.env.PAYSTACK_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing PAYSTACK_SECRET_KEY environment variable.");
  }

  return secretKey;
}

export function getPaystackClient() {
  if (!paystackClient) {
    const secretKey = getPaystackSecretKey();

    if (!paystackModeLogged) {
      const isTestKey = secretKey.startsWith("sk_test_");
      const mode = isTestKey ? "test" : "live";

      console.info(`Paystack client initialized in ${mode} mode.`);

      if (process.env.NODE_ENV === "production" && isTestKey) {
        console.warn("Paystack is using a test secret key in production.");
      }

      paystackModeLogged = true;
    }

    paystackClient = new Paystack(secretKey);
  }

  return paystackClient;
}

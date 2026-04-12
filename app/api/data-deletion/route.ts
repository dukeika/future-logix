import { createHmac, randomUUID, timingSafeEqual } from "crypto";

import { NextResponse } from "next/server";

const SITE_URL = (process.env.SITE_URL ?? "https://futurelogix.ng").replace(/\/$/, "");
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;

function decodeBase64Url(input: string) {
  const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  return Buffer.from(padded, "base64");
}

function parseSignedRequest(signedRequest: string) {
  const [encodedSignature, payload] = signedRequest.split(".", 2);

  if (!encodedSignature || !payload) {
    throw new Error("Invalid signed_request format.");
  }

  if (FACEBOOK_APP_SECRET) {
    const expectedSignature = createHmac("sha256", FACEBOOK_APP_SECRET).update(payload).digest();
    const actualSignature = decodeBase64Url(encodedSignature);

    if (
      actualSignature.length !== expectedSignature.length ||
      !timingSafeEqual(actualSignature, expectedSignature)
    ) {
      throw new Error("Invalid signed_request signature.");
    }
  }

  const payloadJson = decodeBase64Url(payload).toString("utf8");
  return JSON.parse(payloadJson) as Record<string, unknown>;
}

function buildDeletionResponse() {
  const confirmationCode = randomUUID();

  return {
    url: `${SITE_URL}/data-deletion?confirmation_code=${confirmationCode}`,
    confirmation_code: confirmationCode,
  };
}

export async function GET() {
  return NextResponse.json({
    message:
      "Submit a POST request with a platform signed_request to receive a deletion confirmation response.",
    instructions_url: `${SITE_URL}/data-deletion`,
  });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    let signedRequest = "";

    if (contentType.includes("application/json")) {
      const body = (await request.json()) as { signed_request?: string };
      signedRequest = body.signed_request ?? "";
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await request.formData();
      signedRequest = String(formData.get("signed_request") ?? "");
    } else {
      const text = await request.text();
      const params = new URLSearchParams(text);
      signedRequest = params.get("signed_request") ?? "";
    }

    if (signedRequest) {
      parseSignedRequest(signedRequest);
    }

    return NextResponse.json(buildDeletionResponse());
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to process deletion callback.",
        instructions_url: `${SITE_URL}/data-deletion`,
      },
      { status: 400 }
    );
  }
}

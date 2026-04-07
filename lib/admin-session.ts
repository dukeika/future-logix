import { createHmac, timingSafeEqual } from "node:crypto";

const ADMIN_SESSION_COOKIE = "future-logix-admin-session";
const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 12;

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET ?? process.env.ADMIN_PASSWORD ?? "";
}

function encodeBase64Url(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function decodeBase64Url(value: string) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function signValue(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

function parseCookieValue(cookieHeader: string | null, cookieName: string) {
  if (!cookieHeader) {
    return null;
  }

  const segments = cookieHeader.split(/;\s*/);
  const target = `${cookieName}=`;
  const match = segments.find((segment) => segment.startsWith(target));

  if (!match) {
    return null;
  }

  return match.slice(target.length);
}

export function createAdminSessionCookieValue(now = Date.now()) {
  const expiresAt = now + ADMIN_SESSION_MAX_AGE_SECONDS * 1000;
  const payload = JSON.stringify({ exp: expiresAt });
  const encodedPayload = encodeBase64Url(payload);
  const signature = signValue(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export function isAdminSessionValid(cookieHeader: string | null, now = Date.now()) {
  const secret = getSessionSecret();

  if (!secret) {
    return false;
  }

  const rawCookie = parseCookieValue(cookieHeader, ADMIN_SESSION_COOKIE);

  if (!rawCookie) {
    return false;
  }

  const [encodedPayload, providedSignature] = rawCookie.split(".");

  if (!encodedPayload || !providedSignature) {
    return false;
  }

  const expectedSignature = signValue(encodedPayload);
  const providedBuffer = Buffer.from(providedSignature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (providedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  if (!timingSafeEqual(providedBuffer, expectedBuffer)) {
    return false;
  }

  try {
    const payload = JSON.parse(decodeBase64Url(encodedPayload)) as { exp?: number };
    return typeof payload.exp === "number" && payload.exp > now;
  } catch {
    return false;
  }
}

export function buildAdminSessionSetCookieHeader() {
  const secure = process.env.NODE_ENV === "production";
  const parts = [
    `${ADMIN_SESSION_COOKIE}=${createAdminSessionCookieValue()}`,
    "HttpOnly",
    "Path=/",
    "SameSite=Strict",
    `Max-Age=${ADMIN_SESSION_MAX_AGE_SECONDS}`,
  ];

  if (secure) {
    parts.push("Secure");
  }

  return parts.join("; ");
}

export function buildAdminSessionClearCookieHeader() {
  const secure = process.env.NODE_ENV === "production";
  const parts = [
    `${ADMIN_SESSION_COOKIE}=`,
    "HttpOnly",
    "Path=/",
    "SameSite=Strict",
    "Max-Age=0",
  ];

  if (secure) {
    parts.push("Secure");
  }

  return parts.join("; ");
}

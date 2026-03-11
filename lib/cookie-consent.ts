export const COOKIE_CONSENT_STORAGE_KEY = "future-logix-cookie-consent";

export type CookieConsentValue = "accepted" | "rejected";

export function isCookieConsentValue(value: string | null): value is CookieConsentValue {
  return value === "accepted" || value === "rejected";
}

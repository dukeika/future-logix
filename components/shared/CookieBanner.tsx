"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  type CookieConsentValue,
  isCookieConsentValue,
} from "@/lib/cookie-consent";

export function CookieBanner() {
  const [consent, setConsent] = useState<CookieConsentValue | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

    if (isCookieConsentValue(storedValue)) {
      setConsent(storedValue);
    }

    setReady(true);
  }, []);

  const updateConsent = (value: CookieConsentValue) => {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
    window.dispatchEvent(new CustomEvent("future-logix-cookie-consent", { detail: value }));
    setConsent(value);
  };

  if (!ready || consent) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[70] sm:inset-x-auto sm:right-4 sm:max-w-xl">
      <div className="surface-panel border-border/90 bg-background/95 px-5 py-4 shadow-[0_30px_80px_-32px_rgba(15,23,42,0.32)] backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
          Cookie Notice
        </p>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          We use essential cookies to keep the site working and optional analytics cookies to
          understand usage and improve performance. You can accept or reject optional analytics.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="button" className="sm:min-w-[140px]" onClick={() => updateConsent("accepted")}>
            Accept cookies
          </Button>
          <Button
            type="button"
            variant="outline"
            className="sm:min-w-[140px]"
            onClick={() => updateConsent("rejected")}
          >
            Reject analytics
          </Button>
          <Link
            href="/privacy"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Read privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
}

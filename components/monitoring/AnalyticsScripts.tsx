"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import {
  COOKIE_CONSENT_STORAGE_KEY,
  isCookieConsentValue,
} from "@/lib/cookie-consent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export function AnalyticsScripts() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const readConsent = () => {
      const storedValue = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
      setHasConsent(isCookieConsentValue(storedValue) && storedValue === "accepted");
    };

    readConsent();
    window.addEventListener("future-logix-cookie-consent", readConsent);

    return () => {
      window.removeEventListener("future-logix-cookie-consent", readConsent);
    };
  }, []);

  if (!hasConsent) {
    return null;
  }

  return (
    <>
      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                anonymize_ip: true,
                send_page_view: true
              });
            `}
          </Script>
        </>
      ) : null}
      {PLAUSIBLE_DOMAIN ? (
        <Script
          src="https://plausible.io/js/script.js"
          data-domain={PLAUSIBLE_DOMAIN}
          strategy="afterInteractive"
        />
      ) : null}
    </>
  );
}

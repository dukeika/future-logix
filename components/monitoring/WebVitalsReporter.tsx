"use client";

import { useEffect } from "react";
import { useState } from "react";
import { useReportWebVitals } from "next/web-vitals";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  isCookieConsentValue,
} from "@/lib/cookie-consent";

const WEB_VITALS_ENDPOINT = process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT;
const ERROR_ENDPOINT = process.env.NEXT_PUBLIC_ERROR_REPORTING_ENDPOINT;

type WebVitalMetric = {
  name: string;
  value: number;
  rating?: string;
  delta: number;
  id: string;
  navigationType?: string;
};

function transmit(payload: Record<string, unknown>, endpoint?: string) {
  if (!endpoint || typeof navigator === "undefined") {
    return;
  }

  const body = JSON.stringify(payload);

  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, body);
    return;
  }

  void fetch(endpoint, {
    method: "POST",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
}

function reportMetric(metric: WebVitalMetric) {
  transmit(
    {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType,
    },
    WEB_VITALS_ENDPOINT
  );
}

export function WebVitalsReporter() {
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

  useReportWebVitals((metric) => {
    if (!hasConsent) {
      return;
    }

    reportMetric(metric);
  });

  useEffect(() => {
    if (!ERROR_ENDPOINT) {
      return;
    }

    const handleError = (event: ErrorEvent) => {
      transmit(
        {
          type: "client-error",
          message: event.message,
          filename: event.filename,
          line: event.lineno,
          column: event.colno,
        },
        ERROR_ENDPOINT
      );
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      transmit(
        {
          type: "unhandled-rejection",
          reason:
            typeof event.reason === "string"
              ? event.reason
              : JSON.stringify(event.reason, Object.getOwnPropertyNames(event.reason ?? {})),
        },
        ERROR_ENDPOINT
      );
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ERROR_ENDPOINT = process.env.NEXT_PUBLIC_ERROR_REPORTING_ENDPOINT;

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);

    if (!ERROR_ENDPOINT || typeof navigator === "undefined") {
      return;
    }

    const body = JSON.stringify({
      type: "react-error-boundary",
      message: error.message,
      digest: error.digest,
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon(ERROR_ENDPOINT, body);
      return;
    }

    void fetch(ERROR_ENDPOINT, {
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
  }, [error]);

  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-3xl px-6 py-12 sm:px-8">
          <div className="flex items-center gap-3 text-primary">
            <AlertTriangle className="h-6 w-6" />
            <p className="text-sm font-semibold uppercase tracking-[0.18em]">Unexpected error</p>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Something went wrong while rendering this page.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            The issue has been logged for follow-up when monitoring is configured. You can retry
            the page, return home, or contact Future Logix directly if the problem persists.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button type="button" onClick={() => reset()}>
              Try again
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

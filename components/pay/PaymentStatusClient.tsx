"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";

import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Invoice } from "@/lib/invoices";

type VerifyResponse = {
  description?: string;
  error?: string;
  invoice?: Invoice;
  invoiceId?: string;
  paymentStatus?: string;
  reference?: string;
  source?: string;
  totalAmount?: number;
};

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(amount);
}

export function PaymentStatusClient({
  invoiceId,
  reference,
}: {
  invoiceId?: string;
  reference?: string;
}) {
  const [loading, setLoading] = useState(Boolean(reference));
  const [error, setError] = useState("");
  const [result, setResult] = useState<VerifyResponse | null>(null);

  useEffect(() => {
    if (!reference) {
      setLoading(false);
      setError("Missing payment reference.");
      return;
    }

    let active = true;

    async function verifyPayment() {
      try {
        const response = await fetch("/api/payments/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ reference }),
        });

        const data = (await response.json()) as VerifyResponse;

        if (!response.ok) {
          throw new Error(data.error ?? "Unable to verify payment.");
        }

        if (!active) {
          return;
        }

        if (data.paymentStatus !== "success") {
          setError("Payment was not completed successfully.");
        } else {
          setResult(data);
        }
      } catch (verifyError) {
        if (active) {
          setError(verifyError instanceof Error ? verifyError.message : "Unable to verify payment.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void verifyPayment();

    return () => {
      active = false;
    };
  }, [reference]);

  return (
    <section className="section-shell">
      <SiteContainer className="max-w-3xl">
        <Card>
          <CardHeader className="items-center text-center">
            {loading ? (
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            ) : error ? (
              <XCircle className="h-10 w-10 text-destructive" />
            ) : (
              <CheckCircle2 className="h-10 w-10 text-secondary" />
            )}
            <CardTitle className="text-3xl text-slate-950">
              {loading ? "Verifying payment" : error ? "Payment verification failed" : "Payment confirmed"}
            </CardTitle>
            <CardDescription>
              {loading
                ? "Please wait while we confirm your payment with Paystack."
                : error
                  ? error
                  : "Your payment has been confirmed successfully."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 text-center">
            {result?.invoice ? (
              <div className="rounded-[1.5rem] border border-border/70 bg-slate-50 px-5 py-5 text-left">
                <p className="text-sm text-muted-foreground">Invoice</p>
                <p className="font-medium text-slate-950">{result.invoice.invoiceId}</p>
                <p className="mt-4 text-sm text-muted-foreground">Amount paid</p>
                <p className="text-2xl font-semibold text-slate-950">{formatCurrency(result.invoice.totalAmount)}</p>
              </div>
            ) : null}
            {!result?.invoice && result?.paymentStatus === "success" ? (
              <div className="rounded-[1.5rem] border border-border/70 bg-slate-50 px-5 py-5 text-left">
                <p className="text-sm text-muted-foreground">Reference</p>
                <p className="font-medium text-slate-950">{result.reference}</p>
                <p className="mt-4 text-sm text-muted-foreground">Description</p>
                <p className="font-medium text-slate-950">{result.description ?? "Direct payment"}</p>
                {typeof result.totalAmount === "number" ? (
                  <>
                    <p className="mt-4 text-sm text-muted-foreground">Amount paid</p>
                    <p className="text-2xl font-semibold text-slate-950">{formatCurrency(result.totalAmount)}</p>
                  </>
                ) : null}
              </div>
            ) : null}
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              {error && invoiceId ? (
                <Button asChild variant="outline">
                  <Link href={`/pay/${invoiceId}`}>Try Again</Link>
                </Button>
              ) : null}
              {error && !invoiceId ? (
                <Button asChild variant="outline">
                  <Link href="/pay/now">Try Again</Link>
                </Button>
              ) : null}
              <Button asChild>
                <Link href="/">Back to Homepage</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </SiteContainer>
    </section>
  );
}

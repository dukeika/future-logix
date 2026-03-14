"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Invoice } from "@/lib/invoices";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(amount);
}

export function PayInvoiceClient({ invoice }: { invoice: Invoice }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handlePay() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/payments/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          invoiceId: invoice.invoiceId,
          email: invoice.clientEmail,
          amount: invoice.totalAmount,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        authorization_url?: string;
        error?: string;
      } | null;

      if (!response.ok || !data?.authorization_url) {
        throw new Error(data?.error ?? "Unable to start payment right now.");
      }

      window.location.href = data.authorization_url;
    } catch (payError) {
      setError(payError instanceof Error ? payError.message : "Unable to start payment right now.");
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-950">Invoice summary</CardTitle>
        <CardDescription>Review the invoice details below before continuing to Paystack.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 rounded-[1.5rem] border border-border/70 p-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-muted-foreground">Invoice ID</p>
            <p className="font-medium text-slate-950">{invoice.invoiceId}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <p className="font-medium capitalize text-primary">{invoice.status}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Client</p>
            <p className="font-medium text-slate-950">{invoice.clientName}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Due date</p>
            <p className="font-medium text-slate-950">{invoice.dueDate}</p>
          </div>
        </div>

        <div className="space-y-3">
          {invoice.items.map((item, index) => (
            <div
              key={`${invoice.invoiceId}-${index}`}
              className="grid gap-2 rounded-[1.5rem] border border-border/70 px-4 py-4 sm:grid-cols-[1.4fr_0.5fr_0.8fr_0.8fr]"
            >
              <div className="font-medium text-slate-950">{item.description}</div>
              <div className="text-sm text-muted-foreground">Qty {item.quantity}</div>
              <div className="text-sm text-slate-950">{formatCurrency(item.amount)}</div>
              <div className="text-sm font-medium text-slate-950">
                {formatCurrency(item.amount * item.quantity)}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[1.5rem] bg-slate-50 px-5 py-5">
          <p className="text-sm text-muted-foreground">Amount due</p>
          <p className="mt-1 text-3xl font-semibold text-slate-950">{formatCurrency(invoice.totalAmount)}</p>
        </div>

        {invoice.status === "paid" ? (
          <p className="rounded-2xl border border-secondary/30 bg-secondary/10 px-4 py-3 text-sm text-slate-900">
            This invoice has already been paid.
          </p>
        ) : (
          <Button onClick={handlePay} disabled={loading} className="w-full" size="lg">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Pay Now
          </Button>
        )}

        {error ? <p className="text-sm text-destructive">{error}</p> : null}
      </CardContent>
    </Card>
  );
}

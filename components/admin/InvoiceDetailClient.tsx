"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Loader2, Mail, PencilLine, ReceiptText } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Invoice } from "@/lib/invoices";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function InvoiceDetailClient({ invoiceId }: { invoiceId: string }) {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [updating, setUpdating] = useState(false);

  const loadInvoice = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`/api/invoices/${invoiceId}`, { cache: "no-store" });
      const data = (await response.json()) as { invoice?: Invoice; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to load invoice.");
      }

      setInvoice(data.invoice ?? null);
      setError("");
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Unable to load invoice.");
    } finally {
      setLoading(false);
    }
  }, [invoiceId]);

  useEffect(() => {
    void loadInvoice();
  }, [loadInvoice]);

  async function handleSendEmail() {
    setSending(true);

    try {
      const response = await fetch(`/api/invoices/${invoiceId}/send`, { method: "POST" });
      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Unable to send invoice.");
      }

      await loadInvoice();
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : "Unable to send invoice.");
    } finally {
      setSending(false);
    }
  }

  async function handleMarkSent() {
    setUpdating(true);

    try {
      const response = await fetch(`/api/invoices/${invoiceId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "sent" }),
      });
      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Unable to update invoice.");
      }

      await loadInvoice();
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : "Unable to update invoice.");
    } finally {
      setUpdating(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-[30vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" aria-label="Loading invoice" />
      </div>
    );
  }

  if (!invoice) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">Invoice not found.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Invoice detail</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{invoice.invoiceId}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {invoice.clientName} · {invoice.clientEmail}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" asChild>
            <a href={`/api/invoices/${invoice.invoiceId}/pdf`} className="gap-2">
              <ReceiptText className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
          <Button type="button" variant="outline" onClick={() => void handleSendEmail()} disabled={sending} className="gap-2">
            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
            Send Email
          </Button>
          <Button type="button" onClick={() => void handleMarkSent()} disabled={updating} className="gap-2">
            {updating ? <Loader2 className="h-4 w-4 animate-spin" /> : <PencilLine className="h-4 w-4" />}
            Mark as Sent
          </Button>
        </div>
      </div>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle className="text-slate-950">Invoice items</CardTitle>
            <CardDescription>Review line items, quantities, and value.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {invoice.items.map((item, index) => (
              <div
                key={`${invoice.invoiceId}-${index}`}
                className="grid gap-2 rounded-[1.5rem] border border-border/70 px-4 py-4 md:grid-cols-[1.6fr_0.4fr_0.8fr_0.8fr]"
              >
                <div>
                  <p className="font-medium text-slate-950">{item.description}</p>
                </div>
                <div className="text-sm text-muted-foreground">Qty {item.quantity}</div>
                <div className="text-sm text-slate-950">{formatCurrency(item.amount)}</div>
                <div className="text-sm font-medium text-slate-950">{formatCurrency(item.amount * item.quantity)}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-slate-950">Summary</CardTitle>
            <CardDescription>Current status and payment metadata.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium capitalize text-primary">{invoice.status}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Due date</span>
              <span className="font-medium text-slate-950">{invoice.dueDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Created</span>
              <span className="font-medium text-slate-950">{invoice.createdAt}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Updated</span>
              <span className="font-medium text-slate-950">{invoice.updatedAt}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Paystack ref</span>
              <span className="max-w-[14rem] truncate font-medium text-slate-950">
                {invoice.paystackReference ?? "Not initialized"}
              </span>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 px-4 py-4">
              <p className="text-sm text-muted-foreground">Total</p>
              <p className="mt-1 text-2xl font-semibold text-slate-950">{formatCurrency(invoice.totalAmount)}</p>
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href="/admin/invoices">Back to invoice list</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

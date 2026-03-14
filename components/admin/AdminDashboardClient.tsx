"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, ReceiptText, TrendingUp, Wallet } from "lucide-react";

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

export function AdminDashboardClient() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadInvoices() {
      try {
        const response = await fetch("/api/invoices", { cache: "no-store" });
        const data = (await response.json()) as { invoices?: Invoice[]; error?: string };

        if (!response.ok) {
          throw new Error(data.error ?? "Unable to load invoices.");
        }

        if (active) {
          setInvoices(data.invoices ?? []);
        }
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : "Unable to load invoices.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadInvoices();

    return () => {
      active = false;
    };
  }, []);

  const stats = useMemo(() => {
    const paidInvoices = invoices.filter((invoice) => invoice.status === "paid");

    return {
      total: invoices.length,
      paid: paidInvoices.length,
      revenue: paidInvoices.reduce((sum, invoice) => sum + invoice.totalAmount, 0),
    };
  }, [invoices]);

  if (loading) {
    return (
      <div className="flex min-h-[30vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" aria-label="Loading invoice dashboard" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardDescription>Total invoices</CardDescription>
            <CardTitle className="flex items-center gap-2 text-3xl text-slate-950">
              <ReceiptText className="h-5 w-5 text-primary" />
              {stats.total}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Paid invoices</CardDescription>
            <CardTitle className="flex items-center gap-2 text-3xl text-slate-950">
              <TrendingUp className="h-5 w-5 text-primary" />
              {stats.paid}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Collected revenue</CardDescription>
            <CardTitle className="flex items-center gap-2 text-3xl text-slate-950">
              <Wallet className="h-5 w-5 text-primary" />
              {formatCurrency(stats.revenue)}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle className="text-slate-950">Recent invoices</CardTitle>
            <CardDescription>Monitor status, outstanding payments, and next actions.</CardDescription>
          </div>
          <Button asChild>
            <Link href="/admin/invoices" className="gap-2">
              Open invoice desk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          {invoices.slice(0, 5).map((invoice) => (
            <div
              key={`${invoice.invoiceId}-${invoice.createdAt}`}
              className="flex flex-col gap-2 rounded-2xl border border-border/70 px-4 py-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="font-medium text-slate-950">{invoice.invoiceId}</p>
                <p className="text-sm text-muted-foreground">{invoice.clientName}</p>
              </div>
              <div className="text-sm text-muted-foreground">{invoice.dueDate}</div>
              <div className="text-sm font-medium text-slate-950">{formatCurrency(invoice.totalAmount)}</div>
              <div className="text-sm capitalize text-primary">{invoice.status}</div>
            </div>
          ))}
          {!invoices.length ? (
            <div className="rounded-2xl border border-dashed border-border/80 px-4 py-8 text-sm text-muted-foreground">
              No invoices yet. Create the first one from the invoice desk.
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}

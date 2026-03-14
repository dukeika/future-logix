"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Download, Loader2, Mail, Plus, ReceiptText, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { Invoice } from "@/lib/invoices";

const filters = ["all", "draft", "sent", "paid", "overdue"] as const;
type FilterValue = (typeof filters)[number];

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function InvoicesListClient() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<FilterValue>("all");
  const [sendingId, setSendingId] = useState("");
  const [query, setQuery] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  async function loadInvoices() {
    setLoading(true);

    try {
      const response = await fetch("/api/invoices", { cache: "no-store" });
      const data = (await response.json()) as { invoices?: Invoice[]; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to load invoices.");
      }

      setInvoices(data.invoices ?? []);
      setError("");
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Unable to load invoices.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadInvoices();
  }, []);

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) => {
      const matchesStatus = filter === "all" ? true : invoice.status === filter;
      const normalizedQuery = query.trim().toLowerCase();
      const matchesQuery = normalizedQuery
        ? invoice.clientName.toLowerCase().includes(normalizedQuery) ||
          invoice.clientEmail.toLowerCase().includes(normalizedQuery)
        : true;
      const createdDate = invoice.createdAt.slice(0, 10);
      const matchesFrom = fromDate ? createdDate >= fromDate : true;
      const matchesTo = toDate ? createdDate <= toDate : true;

      return matchesStatus && matchesQuery && matchesFrom && matchesTo;
    });
  }, [filter, fromDate, invoices, query, toDate]);

  async function handleSendEmail(invoiceId: string) {
    setSendingId(invoiceId);

    try {
      const response = await fetch(`/api/invoices/${invoiceId}/send`, {
        method: "POST",
      });
      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error ?? "Unable to send invoice email.");
      }

      await loadInvoices();
    } catch (sendError) {
      setError(sendError instanceof Error ? sendError.message : "Unable to send invoice email.");
    } finally {
      setSendingId("");
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <CardTitle className="text-slate-950">Invoices</CardTitle>
          <CardDescription>Track draft, sent, paid, and overdue invoices in one place.</CardDescription>
        </div>
        <Button asChild>
          <Link href="/admin/invoices/new" className="gap-2">
            <Plus className="h-4 w-4" />
            New Invoice
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex flex-wrap gap-2">
          {filters.map((value) => (
            <Button
              key={value}
              type="button"
              size="sm"
              variant={filter === value ? "default" : "outline"}
              onClick={() => setFilter(value)}
              className="capitalize"
            >
              {value === "all" ? "All" : value}
            </Button>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-[1.3fr_0.8fr_0.8fr_auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search client name or email"
              className="pl-10"
            />
          </div>
          <Input type="date" value={fromDate} onChange={(event) => setFromDate(event.target.value)} />
          <Input type="date" value={toDate} onChange={(event) => setToDate(event.target.value)} />
          <Button asChild variant="outline" className="gap-2">
            <a href="/api/invoices/export">
              <Download className="h-4 w-4" />
              Export CSV
            </a>
          </Button>
        </div>

        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        {loading ? (
          <div className="flex min-h-[20vh] items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-primary" aria-label="Loading invoices" />
          </div>
        ) : (
          <div className="overflow-x-auto rounded-[1.5rem] border border-border/70">
            <table className="min-w-full divide-y divide-border/70 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">ID</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Client</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Amount</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Status</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Due Date</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/70 bg-white">
                {filteredInvoices.map((invoice) => (
                  <tr key={`${invoice.invoiceId}-${invoice.createdAt}`}>
                    <td className="px-4 py-4 font-medium text-slate-950">{invoice.invoiceId}</td>
                    <td className="px-4 py-4">
                      <div className="font-medium text-slate-950">{invoice.clientName}</div>
                      <div className="text-muted-foreground">{invoice.clientEmail}</div>
                    </td>
                    <td className="px-4 py-4 text-slate-950">{formatCurrency(invoice.totalAmount)}</td>
                    <td className="px-4 py-4 capitalize text-primary">{invoice.status}</td>
                    <td className="px-4 py-4 text-muted-foreground">{invoice.dueDate}</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/admin/invoices/${invoice.invoiceId}`}>View</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={`/api/invoices/${invoice.invoiceId}/pdf`} className="gap-2">
                            <ReceiptText className="h-4 w-4" />
                            Download PDF
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          type="button"
                          onClick={() => void handleSendEmail(invoice.invoiceId)}
                          disabled={sendingId === invoice.invoiceId}
                          className="gap-2"
                        >
                          {sendingId === invoice.invoiceId ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Mail className="h-4 w-4" />
                          )}
                          Send Email
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!filteredInvoices.length ? (
              <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                No invoices match this filter yet.
              </div>
            ) : null}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

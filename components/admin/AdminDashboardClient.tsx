"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CircleDollarSign,
  FileText,
  Loader2,
  Plus,
  ReceiptText,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { InsightArticle } from "@/types";
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
  const [articles, setArticles] = useState<InsightArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const [invRes, insRes] = await Promise.all([
          fetch("/api/invoices", { cache: "no-store" }),
          fetch("/api/admin/insights", { cache: "no-store" }),
        ]);

        const invData = (await invRes.json().catch(() => ({}))) as {
          invoices?: Invoice[];
          error?: string;
        };
        const insData = (await insRes.json().catch(() => ({}))) as {
          articles?: InsightArticle[];
          error?: string;
        };

        if (!active) return;
        if (!invRes.ok) throw new Error(invData.error ?? "Unable to load invoices.");
        setInvoices(invData.invoices ?? []);
        setArticles(insData.articles ?? []);
      } catch (loadError) {
        if (active) setError(loadError instanceof Error ? loadError.message : "Unable to load.");
      } finally {
        if (active) setLoading(false);
      }
    }

    void load();
    return () => {
      active = false;
    };
  }, []);

  const stats = useMemo(() => {
    const paidInvoices = invoices.filter((invoice) => invoice.status === "paid");
    const unpaidInvoices = invoices.filter((invoice) => invoice.status !== "paid");
    const published = articles.filter((a) => (a.status ?? "published") === "published");
    const drafts = articles.filter((a) => (a.status ?? "published") === "draft");

    return {
      total: invoices.length,
      paid: paidInvoices.length,
      revenue: paidInvoices.reduce((sum, invoice) => sum + invoice.totalAmount, 0),
      outstanding: unpaidInvoices.reduce((sum, invoice) => sum + invoice.totalAmount, 0),
      published: published.length,
      drafts: drafts.length,
    };
  }, [invoices, articles]);

  if (loading) {
    return (
      <div className="flex min-h-[30vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" aria-label="Loading dashboard" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Insights published" value={stats.published.toString()} icon={FileText} accent="primary" />
        <StatCard label="Insights drafts" value={stats.drafts.toString()} icon={FileText} accent="amber" />
        <StatCard label="Paid invoices" value={stats.paid.toString()} icon={TrendingUp} accent="secondary" />
        <StatCard
          label="Outstanding"
          value={formatCurrency(stats.outstanding)}
          icon={CircleDollarSign}
          accent="primary"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="bento-card-accent p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex rounded-2xl bg-white/70 p-3 text-primary shadow-bento">
                <FileText className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground">
                Insights
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Write, edit, and publish articles for /insights.
              </p>
            </div>
            <Button asChild className="rounded-full">
              <Link href="/admin/insights/new">
                <Plus className="mr-1.5 h-4 w-4" />
                New article
              </Link>
            </Button>
          </div>

          <div className="mt-5 space-y-2">
            {articles.slice(0, 4).map((article) => {
              const isPublished = (article.status ?? "published") === "published";
              return (
                <Link
                  key={article.slug}
                  href={`/admin/insights/${article.slug}/edit`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-white/80 px-3.5 py-2.5 text-sm transition-colors hover:border-primary/25"
                >
                  <span className="line-clamp-1 font-medium text-foreground">{article.title}</span>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                      isPublished ? "bg-secondary/10 text-secondary" : "bg-amber-500/10 text-amber-600"
                    }`}
                  >
                    {isPublished ? "Live" : "Draft"}
                  </span>
                </Link>
              );
            })}
            {articles.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border/60 px-3.5 py-3 text-sm text-muted-foreground">
                No articles yet — create the first one.
              </p>
            ) : null}
          </div>

          <Button
            asChild
            variant="outline"
            className="mt-5 w-full justify-between rounded-full bg-white/80"
          >
            <Link href="/admin/insights">
              Manage all insights
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="bento-card p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex rounded-2xl bg-secondary/15 p-3 text-secondary">
                <ReceiptText className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h2 className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground">
                Invoices
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {stats.total} total · {formatCurrency(stats.revenue)} collected
              </p>
            </div>
          </div>

          {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}

          <div className="mt-5 space-y-2">
            {invoices.slice(0, 4).map((invoice) => (
              <div
                key={`${invoice.invoiceId}-${invoice.createdAt}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-white/80 px-3.5 py-2.5 text-sm"
              >
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-1 font-medium text-foreground">{invoice.invoiceId}</p>
                  <p className="line-clamp-1 text-xs text-muted-foreground">{invoice.clientName}</p>
                </div>
                <span className="shrink-0 text-xs font-medium text-foreground">
                  {formatCurrency(invoice.totalAmount)}
                </span>
                <span className="shrink-0 text-xs capitalize text-primary">{invoice.status}</span>
              </div>
            ))}
            {invoices.length === 0 ? (
              <p className="rounded-xl border border-dashed border-border/60 px-3.5 py-3 text-sm text-muted-foreground">
                No invoices yet.
              </p>
            ) : null}
          </div>

          <Button
            asChild
            variant="outline"
            className="mt-5 w-full justify-between rounded-full bg-white/80"
          >
            <Link href="/admin/invoices">
              Open invoice desk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="bento-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Collected revenue
          </p>
          <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
            {formatCurrency(stats.revenue)}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            from {stats.paid} paid invoice{stats.paid === 1 ? "" : "s"}
          </p>
        </div>
        <div className="bento-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Total invoices
          </p>
          <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground">
            {stats.total}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">across all statuses</p>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  accent: "primary" | "secondary" | "amber";
}) {
  const accentClass =
    accent === "secondary"
      ? "bg-secondary/15 text-secondary"
      : accent === "amber"
      ? "bg-amber-500/15 text-amber-600"
      : "bg-primary/10 text-primary";

  return (
    <div className="bento-card p-5">
      <div className={`inline-flex rounded-2xl p-2.5 ${accentClass}`}>
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1.5 font-display text-2xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
    </div>
  );
}

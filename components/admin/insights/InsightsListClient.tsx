"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, FileText, Loader2, Pencil, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { InsightArticle } from "@/types";

export function InsightsListClient() {
  const [articles, setArticles] = useState<InsightArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  useEffect(() => {
    void load();
  }, []);

  async function load() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/insights", { cache: "no-store" });
      const data = (await res.json()) as { articles?: InsightArticle[]; error?: string };
      if (!res.ok) throw new Error(data.error || "Unable to load.");
      setArticles(data.articles ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to load.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(slug: string) {
    if (!confirm("Delete this article? This cannot be undone.")) return;
    setDeletingSlug(slug);
    try {
      const res = await fetch(`/api/admin/insights/${slug}`, { method: "DELETE" });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Delete failed.");
      }
      setArticles((prev) => prev.filter((a) => a.slug !== slug));
    } catch (e) {
      alert(e instanceof Error ? e.message : "Delete failed.");
    } finally {
      setDeletingSlug(null);
    }
  }

  const published = articles.filter((a) => (a.status ?? "published") === "published").length;
  const drafts = articles.length - published;

  if (loading) {
    return (
      <div className="flex min-h-[30vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bento-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Total articles</p>
          <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">{articles.length}</p>
        </div>
        <div className="bento-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Published</p>
          <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-secondary">{published}</p>
        </div>
        <div className="bento-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Drafts</p>
          <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-primary">{drafts}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">Insights</h2>
          <p className="text-sm text-muted-foreground">Add, edit, and publish articles for /insights.</p>
        </div>
        <Button asChild className="h-11 rounded-full px-5">
          <Link href="/admin/insights/new">
            <Plus className="mr-1.5 h-4 w-4" />
            New article
          </Link>
        </Button>
      </div>

      {error ? (
        <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      {articles.length === 0 ? (
        <div className="bento-card flex flex-col items-center justify-center gap-4 px-6 py-14 text-center">
          <FileText className="h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
          <div>
            <p className="font-display text-lg font-semibold text-foreground">No articles yet</p>
            <p className="mt-1 text-sm text-muted-foreground">Create your first insight to get started.</p>
          </div>
          <Button asChild className="rounded-full">
            <Link href="/admin/insights/new">
              <Plus className="mr-1.5 h-4 w-4" />
              New article
            </Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {articles.map((article) => {
            const isPublished = (article.status ?? "published") === "published";
            return (
              <article key={article.slug} className="bento-card flex h-full flex-col p-5">
                {article.coverImageUrl ? (
                  <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-2xl border border-border/60 bg-muted">
                    <Image
                      src={article.coverImageUrl}
                      alt={article.title}
                      fill
                      sizes="(min-width: 768px) 45vw, 90vw"
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ) : null}

                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {article.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                      isPublished ? "bg-secondary/10 text-secondary" : "bg-amber-500/10 text-amber-600"
                    }`}
                  >
                    <span
                      className={`inline-flex h-1.5 w-1.5 rounded-full ${
                        isPublished ? "bg-secondary" : "bg-amber-500"
                      }`}
                    />
                    {isPublished ? "Published" : "Draft"}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground line-clamp-3">{article.excerpt}</p>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <p className="text-xs text-muted-foreground">
                    {article.publishedAt}
                    {article.updatedAt ? ` · updated ${new Date(article.updatedAt).toLocaleDateString()}` : ""}
                  </p>
                  <div className="flex items-center gap-1.5">
                    {isPublished ? (
                      <Button asChild size="sm" variant="ghost" className="h-8 rounded-full px-3">
                        <Link href={`/insights/${article.slug}`} target="_blank">
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    ) : null}
                    <Button asChild size="sm" variant="outline" className="h-8 rounded-full px-3">
                      <Link href={`/admin/insights/${article.slug}/edit`}>
                        <Pencil className="mr-1 h-3.5 w-3.5" />
                        Edit
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 rounded-full px-3 text-destructive hover:bg-destructive/10 hover:text-destructive"
                      onClick={() => handleDelete(article.slug)}
                      disabled={deletingSlug === article.slug}
                    >
                      {deletingSlug === article.slug ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <Trash2 className="h-3.5 w-3.5" />
                      )}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

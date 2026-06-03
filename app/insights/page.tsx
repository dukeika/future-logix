import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { listInsights } from "@/lib/insights-db";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Insights on Technology & African Business",
  description:
    "Practical thinking on technology strategy, product decisions, and operational improvement for African organizations.",
  alternates: { canonical: "/insights" },
  openGraph: { url: "/insights" },
};

export const revalidate = 60;

const categoryStyles: Record<string, string> = {
  Positioning: "bg-primary/10 text-primary",
  "Decision Guide": "bg-secondary/10 text-secondary",
  Operations: "bg-amber-500/10 text-amber-600",
  Technology: "bg-slate-900/10 text-slate-700",
};

export default async function InsightsPage() {
  const articles = await listInsights({ publishedOnly: true });

  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20">
      <div
        aria-hidden="true"
        className="grid-bg grid-bg-mask pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] opacity-80"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-radial-fade"
      />

      <SiteContainer>
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Insights</span>
          <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Practical thinking</span> for African operators.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Useful guidance for leaders deciding what to buy, build, automate, or improve next.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="mx-auto mt-14 max-w-2xl">
            <div className="bento-card p-10 text-center">
              <p className="font-display text-lg font-semibold text-foreground">No articles yet</p>
              <p className="mt-2 text-sm text-muted-foreground">
                New perspectives on technology and African business are published regularly.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {articles.map((article, idx) => {
              const isFeature = idx === 0;
              return (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className={`group ${isFeature ? "lg:col-span-2 lg:row-span-1" : ""}`}
                >
                  <article
                    className={`flex h-full flex-col overflow-hidden ${
                      isFeature ? "bento-card-accent" : "bento-card"
                    }`}
                  >
                    {article.coverImageUrl ? (
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                        <Image
                          src={article.coverImageUrl}
                          alt={article.title}
                          fill
                          sizes={isFeature ? "(min-width:1024px) 60vw, 90vw" : "(min-width:1024px) 30vw, 90vw"}
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          unoptimized
                        />
                      </div>
                    ) : null}

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                            categoryStyles[article.category] ?? "bg-primary/10 text-primary"
                          }`}
                        >
                          {article.category}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </div>

                      <h2
                        className={`mt-5 font-display font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary ${
                          isFeature ? "text-2xl sm:text-3xl" : "text-lg"
                        }`}
                      >
                        {article.title}
                      </h2>

                      <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                        {article.excerpt}
                      </p>

                      <p className="mt-5 text-xs text-muted-foreground">
                        {article.author ?? "Future Logix Team"} · {article.publishedAt}
                      </p>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="bento-card-dark p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Stay informed
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              New perspectives, published regularly.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Subscribe to receive new insights on technology, operations, and African business
              directly in your inbox.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-white text-foreground hover:bg-white/90">
                <Link href="mailto:admin@futurelogix.ng">
                  Subscribe
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>

          <div className="bento-card-accent p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              Have a topic?
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
              Suggest a future article.
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Tell us what you wish you had a clearer answer to — we may cover it next.
            </p>
            <Button asChild variant="outline" className="mt-5 rounded-full bg-white/80">
              <Link href="/contact">
                Send a suggestion
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

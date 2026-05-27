import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { insightArticles } from "@/lib/insights";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";

const categoryStyles: Record<string, string> = {
  Positioning: "bg-primary/10 text-primary",
  "Decision Guide": "bg-secondary/10 text-secondary",
  Operations: "bg-slate-900/10 text-slate-700",
};

export function InsightsSection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionHeader
                number="06"
                title="Insights"
                subtitle="Practical thinking on technology, operations, and African business."
                description="Useful guidance for leaders deciding what to buy, build, automate, or improve next."
              />
            </div>
            <Button asChild variant="outline" className="hidden rounded-full bg-white/80 lg:inline-flex">
              <Link href="/insights">
                View all insights
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {insightArticles.map((article, idx) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className={`group ${idx === 0 ? "lg:col-span-2" : ""}`}
              >
                <article
                  className={`flex h-full flex-col ${
                    idx === 0 ? "bento-card-accent" : "bento-card"
                  } p-6 sm:p-7`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                        categoryStyles[article.category] ?? "bg-primary/10 text-primary"
                      }`}
                    >
                      {article.category}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>

                  <h3
                    className={`mt-5 font-display font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary ${
                      idx === 0 ? "text-xl sm:text-2xl" : "text-lg"
                    }`}
                  >
                    {article.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                    {article.excerpt}
                  </p>

                  <p className="mt-5 text-xs text-muted-foreground">
                    {article.author ?? "Future Logix Team"} · {article.publishedAt}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          <Button asChild variant="outline" className="rounded-full bg-white/80 lg:hidden">
            <Link href="/insights">
              View all insights
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SiteContainer>
    </section>
  );
}

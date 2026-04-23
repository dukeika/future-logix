import Link from "next/link";
import type { Metadata } from "next";

import { insightArticles } from "@/lib/insights";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Insights on Technology & African Business",
  description:
    "Practical thinking on technology strategy, product decisions, and operational improvement for African organizations.",
};

export default function InsightsPage() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-6xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
          <SectionHeader
            number="05"
            title="Insights"
            subtitle="Practical thinking on technology, operations, and African business."
            description="Useful guidance for leaders deciding what to buy, build, automate, or improve next."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {insightArticles.map((article) => (
              <article key={article.slug} className="rounded-[1.5rem] border border-border/80 bg-background/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {article.category}
                </p>
                <h2 className="mt-4 text-xl font-semibold text-foreground">{article.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {article.author ?? "Future Logix Team"} • {article.publishedAt}
                </p>
                <p className="mt-4 text-base leading-8 text-muted-foreground">{article.excerpt}</p>
                <Link
                  href={`/insights/${article.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-primary"
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>

          <div className="rounded-[1.5rem] border border-dashed border-border bg-white/60 p-6 text-center">
            <p className="text-sm font-semibold tracking-[0.12em] text-muted-foreground">
              New perspectives on technology and African business published regularly.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-full">
              <Link href="/contact">Contact us</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full bg-white/70">
              <Link href="mailto:admin@futurelogix.ng">Subscribe for updates</Link>
            </Button>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

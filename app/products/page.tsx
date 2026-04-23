import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/shared/site-container";

export const metadata: Metadata = {
  title: "Products - SchoolsRep & Portfolio",
  description:
    "Explore SchoolsRep, our flagship school operations platform for Nigerian schools, and the wider Future Logix product direction.",
};

export default function ProductsPage() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-4xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <CheckCircle2 className="h-4 w-4" />
              Products
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Products
            </h1>
            <p className="max-w-3xl text-base leading-8 text-muted-foreground">
              Our product portfolio is led by SchoolsRep, with more solutions in development for
              African organizations.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-5">
            <p className="text-lg font-semibold text-foreground">SchoolsRep</p>
            <p className="mt-2 text-base leading-8 text-muted-foreground">
              Explore the flagship school operations platform for Nigerian private schools.
            </p>
            <Button asChild className="mt-5 rounded-full">
              <Link href="/schoolsrep">
                View SchoolsRep
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-[1.5rem] border border-border/80 bg-white/70 p-6">
            <p className="text-sm font-semibold tracking-[0.12em] text-muted-foreground">
              Platform Expansion
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Future Logix is actively developing specialized solutions for sectors where
              operational complexity meets growth opportunity. Our product philosophy centers on
              building tools that integrate seamlessly with existing workflows while providing
              clear, measurable improvements in efficiency and visibility.
            </p>

            <div className="mt-6 grid gap-5">
              <div className="rounded-[1.35rem] border border-border/80 bg-background/80 p-5">
                <h2 className="text-lg font-semibold text-foreground">Operations Hub — Early Development</h2>
                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  A unified operations platform for service-led businesses that brings client
                  management, project tracking, billing, and team coordination into one system.
                  Designed specifically for the realities of African professional services firms:
                  intermittent connectivity, multi-currency operations, and lean teams managing
                  complex delivery.
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-border/80 bg-background/80 p-5">
                <h2 className="text-lg font-semibold text-foreground">Financial Operations Layer — Research Phase</h2>
                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  Embedded financial tools for businesses moving from spreadsheet-based tracking to
                  structured, auditable systems. Not a replacement for accounting software, but an
                  operational layer that connects transactions to business activities automatically.
                </p>
              </div>

              <div className="rounded-[1.35rem] border border-border/80 bg-background/80 p-5">
                <h2 className="text-lg font-semibold text-foreground">Integration Bridge — Architecture Phase</h2>
                <p className="mt-3 text-base leading-8 text-muted-foreground">
                  A middleware platform solving the fragmentation problem: connecting popular local
                  tools (payment processors, SMS gateways, identity verification) with modern
                  business systems without requiring custom development for each connection.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.35rem] border border-primary/10 bg-primary/5 p-5">
              <h2 className="text-lg font-semibold text-foreground">Our Product Criteria</h2>
              <p className="mt-3 text-base leading-8 text-muted-foreground">
                Before any product carries the Future Logix name, it must demonstrate: measurable
                time savings within the first week of use, functionality without constant internet
                connectivity, clear pricing without hidden scaling costs, and implementation support
                from real humans who understand the local context.
              </p>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

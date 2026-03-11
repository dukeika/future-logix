import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/shared/site-container";

export const metadata: Metadata = {
  title: "Products - ClassPoint & Portfolio",
  description:
    "Explore ClassPoint, our flagship school operations platform for Nigerian schools, and future product portfolio direction.",
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
              Our product portfolio is led by ClassPoint, with more solutions in development for
              African organizations.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-5">
            <p className="text-lg font-semibold text-foreground">ClassPoint</p>
            <p className="mt-2 text-base leading-8 text-muted-foreground">
              Explore the flagship product for school operations in Nigeria.
            </p>
            <Button asChild className="mt-5 rounded-full">
              <Link href="https://classpoint.ng" target="_blank" rel="noreferrer noopener">
                Visit ClassPoint
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-[1.5rem] border border-dashed border-border bg-white/60 p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Coming Soon
            </p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Future products will be introduced here as the portfolio expands.
            </p>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

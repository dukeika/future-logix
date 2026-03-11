import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Future Logix",
  description:
    "Learn about Future Logix Limited, a Lagos-based technology company building products and services for African organizations.",
};

export default function AboutPage() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-6xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
          <SectionHeader
            number="07"
            title="About"
            subtitle="About Future Logix"
            description="Implementation-minded technology company for African organizations."
          />

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">Company Story</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  Future Logix Limited is a technology company building practical digital products
                  and delivery services for growing African organizations. We operate at the
                  intersection of product development and implementation services, with a focus on
                  systems that actually work in local business environments.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">Mission</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  To help African organizations operate better, move faster, and scale with
                  confidence through technology that fits their reality.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">Approach</h2>
                <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground">
                  <li>Build for the context, not just the spec</li>
                  <li>Ship quickly, improve continuously</li>
                  <li>Measure by business outcomes, not technical complexity</li>
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-background/80 p-6">
                <h2 className="text-xl font-semibold text-foreground">Leadership</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  Leadership team profiles coming soon
                </p>
                <div className="mt-5 flex h-40 items-center justify-center rounded-[1.2rem] border border-dashed border-border bg-white/70 text-sm font-medium text-muted-foreground">
                  Founder and team photos placeholder
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/80 bg-slate-950 p-6 text-white">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-secondary" />
                  <div>
                    <h2 className="text-xl font-semibold">Location</h2>
                    <p className="mt-4 text-base leading-8 text-slate-300">Lagos, Nigeria</p>
                    <p className="text-base leading-8 text-slate-300">Serving clients across Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button asChild className="rounded-full">
            <Link href="/contact">Work with us</Link>
          </Button>
        </div>
      </SiteContainer>
    </section>
  );
}

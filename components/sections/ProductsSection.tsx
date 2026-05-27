import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BellRing,
  CalendarCheck2,
  CreditCard,
  FolderKanban,
  GraduationCap,
  LineChart,
} from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/shared/site-container";
import type { ProductFeature } from "@/types";

const features: ProductFeature[] = [
  { label: "Administration & Records", icon: FolderKanban },
  { label: "Parent Communication", icon: BellRing },
  { label: "Academic Scheduling", icon: CalendarCheck2 },
  { label: "Fee Management", icon: CreditCard },
  { label: "Attendance & Results", icon: LineChart },
];

export function ProductsSection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-10">
          <div className="max-w-4xl">
            <SectionHeader
              number="01"
              title="Products"
              subtitle="SchoolsRep leads the product portfolio."
              description="Start with the product if you need a practical school operations system today."
            />
          </div>

          <article className="bento-card-accent p-5 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
                    Flagship Product
                  </span>
                  <span className="rounded-full bg-secondary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                    Live
                  </span>
                </div>

                <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  SchoolsRep
                </h3>

                <p className="max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                  A school operations platform for Nigerian private schools — manage attendance,
                  results, parent communication, and admin workflows in one place.
                </p>

                <div className="grid gap-2.5 sm:grid-cols-2">
                  {features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={feature.label}
                        className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white/75 px-3.5 py-2.5 backdrop-blur"
                      >
                        <div className="rounded-xl bg-primary/10 p-1.5 text-primary">
                          <Icon className="h-4 w-4" strokeWidth={1.75} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{feature.label}</span>
                      </div>
                    );
                  })}
                </div>

                <Button asChild className="h-12 rounded-full px-6 text-base">
                  <Link href="/schoolsrep">
                    View SchoolsRep
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-bento">
                  <div className="aspect-[4/3] p-3 sm:p-4">
                    <div className="relative h-full overflow-hidden rounded-2xl bg-white">
                      <Image
                        src="/images/schoolsrep-admin-dashboard.png"
                        alt="SchoolsRep admin dashboard preview"
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-cover object-top"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>

                <div className="bento-card-dark p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-secondary/15 p-2.5 text-secondary">
                      <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div className="space-y-1.5">
                      <span className="inline-flex rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                        Learning Session
                      </span>
                      <h4 className="font-display text-base font-semibold text-white">
                        Interactive Classroom Workspace
                      </h4>
                      <p className="text-xs leading-6 text-slate-300 sm:text-sm">
                        Track student responses, session flow, and engagement in one place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </SiteContainer>
    </section>
  );
}

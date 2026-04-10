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
  { label: "Administration & Records Management", icon: FolderKanban },
  { label: "Communication & Parent Engagement", icon: BellRing },
  { label: "Academic Workflows & Scheduling", icon: CalendarCheck2 },
  { label: "Fee Management & Payment Tracking", icon: CreditCard },
  { label: "Attendance & Result Processing", icon: LineChart },
];

export function ProductsSection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-8">
          <div className="max-w-4xl">
            <SectionHeader
              number="01"
              title="Products"
              subtitle="SchoolsRep Flagship Product"
              description="Future Logix is building a product company, not just a services brand."
              supportingCopy="SchoolsRep leads the portfolio today, while the wider Future Logix platform is positioned to support more products, stronger service lines, and deeper long-term partnerships over time."
            />
          </div>

          <div className="grid gap-6">
            <article className="group">
              <div className="surface-panel h-full p-5 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)] sm:p-7">
                <div className="space-y-7">
                  <div className="flex flex-col gap-4 border-b border-border/70 pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-semibold text-foreground">SchoolsRep</h3>
                        <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                          Flagship Product
                        </span>
                      </div>
                      <p className="max-w-3xl text-lg leading-8 text-foreground">
                        A school operations platform for Nigerian private schools — manage
                        attendance, results, parent communication, and admin workflows in one
                        place.
                      </p>
                    </div>
                    <Button asChild className="rounded-full">
                      <Link href="https://schoolsrep.com" target="_blank" rel="noreferrer noopener">
                        Visit SchoolsRep
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                    <div className="space-y-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Core capabilities
                      </p>
                      <div className="grid gap-3">
                        {features.map((feature) => {
                          const Icon = feature.icon;

                          return (
                            <div
                              key={feature.label}
                              className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background/80 px-4 py-3"
                            >
                              <div className="rounded-xl bg-primary/10 p-2 text-primary">
                                <Icon className="h-4 w-4" />
                              </div>
                              <span className="text-sm font-medium text-foreground">
                                {feature.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="overflow-hidden rounded-[1.5rem] border border-primary/10 bg-gradient-to-br from-primary/15 via-white to-secondary/15">
                        <div className="aspect-video p-5 sm:p-6">
                          <div className="flex h-full items-center justify-center rounded-[1.2rem] border border-dashed border-primary/20 bg-slate-950/85 text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                            SchoolsRep Interface Preview
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-border/80 bg-slate-950 p-5 text-white shadow-soft">
                        <div className="flex items-start gap-3">
                          <div className="rounded-2xl bg-secondary/15 p-3 text-secondary">
                            <GraduationCap className="h-5 w-5" />
                          </div>
                          <div className="space-y-2">
                            <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-300">
                              Learning Session
                            </div>
                            <h4 className="text-lg font-semibold">Interactive Classroom Workspace</h4>
                            <p className="text-sm leading-7 text-slate-300">
                              Track student responses, session flow, and engagement in one place.
                              Run more organized classes and training sessions with real-time
                              visibility.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

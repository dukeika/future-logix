import Link from "next/link";
import { ArrowUpRight, Briefcase, GraduationCap, Rocket, TrendingUp, Users } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import type { Industry } from "@/types";

const industries: Industry[] = [
  {
    title: "Education",
    need: "Schools, training providers, and learning-focused institutions need better structure, engagement, and visibility across teaching delivery.",
    solution:
      "Products like SchoolsRep and the digital systems that support modern learning experiences.",
    href: "/industries",
    icon: GraduationCap,
  },
  {
    title: "SMEs & Growing Businesses",
    need: "Businesses moving from manual operations to scalable systems need simpler workflows and better visibility.",
    solution:
      "Practical systems, automation, and digital foundations that support growth without overengineering.",
    href: "/industries",
    icon: TrendingUp,
  },
  {
    title: "Professional Services",
    need: "Firms that sell expertise need clearer internal processes, client-facing systems, and better control over delivery.",
    solution:
      "Workflow, reporting, and digital infrastructure so teams deliver more consistently.",
    href: "/industries",
    icon: Briefcase,
  },
  {
    title: "Service-Led Organizations",
    need: "Organizations whose performance depends on process, responsiveness, and coordination need systems that reduce friction.",
    solution:
      "Platforms, automations, and supporting technology that make service operations more resilient.",
    href: "/industries",
    icon: Users,
  },
  {
    title: "Startups & Product Ventures",
    need: "Early-stage teams building digital products need product thinking, technical execution, and scalable foundations.",
    solution:
      "Founders and product teams move from concept to usable product with stronger structure and clearer technical decisions.",
    href: "/industries",
    icon: Rocket,
  },
];

export function IndustriesSection() {
  return (
    <section className="section-shell overflow-hidden">
      <SiteContainer>
        <div className="space-y-10">
          <div className="max-w-5xl">
            <SectionHeader
              number="03"
              title="Industries"
              subtitle="Who We Serve"
              description="Built for organizations that need useful systems, not empty transformation language."
            />
          </div>

          <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:overflow-visible sm:px-0">
            <div className="grid auto-rows-fr grid-flow-col gap-4 sm:grid-flow-row sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:grid-rows-2">
              {industries.map((industry, idx) => {
                const Icon = industry.icon;
                const isFeature = idx === 0;

                return (
                  <Link
                    key={industry.title}
                    href={industry.href}
                    className={`group ${
                      isFeature ? "xl:col-span-1 xl:row-span-2" : ""
                    } min-w-[78vw] sm:min-w-0`}
                  >
                    <article
                      className={`flex h-full flex-col ${
                        isFeature ? "bento-card-accent" : "bento-card"
                      } p-6 sm:p-7`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={`rounded-2xl p-3 ${
                            isFeature
                              ? "bg-white/70 text-primary"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </div>

                      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {industry.title}
                      </h3>

                      <div className="mt-4 space-y-3">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            Need
                          </p>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {industry.need}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            Solution
                          </p>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {industry.solution}
                          </p>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

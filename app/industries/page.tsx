import Link from "next/link";
import { Briefcase, GraduationCap, Rocket, TrendingUp, Users } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import type { Industry } from "@/types";

const industries: Industry[] = [
  {
    title: "Education",
    need: "Schools, training providers, and learning-focused institutions need better structure, engagement, and visibility across teaching and training delivery.",
    solution:
      "Future Logix helps with products like ClassPoint and the digital systems that support modern learning experiences.",
    href: "/contact",
    icon: GraduationCap,
  },
  {
    title: "SMEs and Growing Businesses",
    need: "Businesses moving from manual operations to more scalable systems need simpler workflows, better visibility, and tools that reduce operational drag.",
    solution:
      "Future Logix helps design practical systems, automation, and digital foundations that support growth without overengineering.",
    href: "/contact",
    icon: TrendingUp,
  },
  {
    title: "Professional Services",
    need: "Firms that sell expertise and depend on coordinated internal delivery need clearer internal processes, client-facing systems, and better control over delivery operations.",
    solution:
      "Future Logix helps improve workflow, reporting, and digital infrastructure so teams can deliver more consistently.",
    href: "/contact",
    icon: Briefcase,
  },
  {
    title: "Service-Led Organizations",
    need: "Organizations whose performance depends on process, responsiveness, and operational coordination need systems that reduce friction, improve accountability, and make service delivery easier to manage.",
    solution:
      "Future Logix helps implement platforms, automations, and supporting technology that make service operations more resilient.",
    href: "/contact",
    icon: Users,
  },
  {
    title: "Startups and Product Ventures",
    need: "Early-stage teams building digital products or new technology-led services need product thinking, technical execution, and scalable foundations without wasting time on the wrong build path.",
    solution:
      "Future Logix helps founders and product teams move from concept to usable product with stronger structure and clearer technical decisions.",
    href: "/contact",
    icon: Rocket,
  },
];

export default function IndustriesPage() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="surface-panel max-w-6xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
          <SectionHeader
            number="03"
            title="Industries"
            subtitle="Who We Serve"
            description="Built for organizations that need useful systems, not empty transformation language."
            supportingCopy="The industries focus is intentionally practical: sectors where technology has to improve delivery, visibility, coordination, and growth. The goal is not to claim every industry. It is to show where Future Logix is most likely to be useful, credible, and commercially relevant."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div key={industry.title} className="rounded-[1.5rem] border border-border/80 bg-background/80 p-5">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-foreground">{industry.title}</h2>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Need
                  </p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground">{industry.need}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Solution
                  </p>
                  <p className="mt-2 text-base leading-8 text-muted-foreground">{industry.solution}</p>
                </div>
              );
            })}
          </div>

          <Button asChild className="rounded-full">
            <Link href="/contact">Discuss your sector-specific needs</Link>
          </Button>
        </div>
      </SiteContainer>
    </section>
  );
}

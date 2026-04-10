import Link from "next/link";
import { Briefcase, GraduationCap, Rocket, TrendingUp, Users } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Industry } from "@/types";

const industries: Industry[] = [
  {
    title: "Education",
    need: "Schools, training providers, and learning-focused institutions need better structure, engagement, and visibility across teaching and training delivery.",
    solution:
      "Future Logix helps with products like SchoolsRep and the digital systems that support modern learning experiences.",
    href: "/industries",
    icon: GraduationCap,
  },
  {
    title: "SMEs and Growing Businesses",
    need: "Businesses moving from manual operations to more scalable systems need simpler workflows, better visibility, and tools that reduce operational drag.",
    solution:
      "Future Logix helps design practical systems, automation, and digital foundations that support growth without overengineering.",
    href: "/industries",
    icon: TrendingUp,
  },
  {
    title: "Professional Services",
    need: "Firms that sell expertise and depend on coordinated internal delivery need clearer internal processes, client-facing systems, and better control over delivery operations.",
    solution:
      "Future Logix helps improve workflow, reporting, and digital infrastructure so teams can deliver more consistently.",
    href: "/industries",
    icon: Briefcase,
  },
  {
    title: "Service-Led Organizations",
    need: "Organizations whose performance depends on process, responsiveness, and operational coordination need systems that reduce friction, improve accountability, and make service delivery easier to manage.",
    solution:
      "Future Logix helps implement platforms, automations, and supporting technology that make service operations more resilient.",
    href: "/industries",
    icon: Users,
  },
  {
    title: "Startups and Product Ventures",
    need: "Early-stage teams building digital products or new technology-led services need product thinking, technical execution, and scalable foundations without wasting time on the wrong build path.",
    solution:
      "Future Logix helps founders and product teams move from concept to usable product with stronger structure and clearer technical decisions.",
    href: "/industries",
    icon: Rocket,
  },
];

export function IndustriesSection() {
  return (
    <section className="section-shell overflow-hidden">
      <SiteContainer>
        <div className="space-y-8">
          <div className="max-w-5xl">
            <SectionHeader
              number="03"
              title="Industries"
              subtitle="Who We Serve"
              description="Built for organizations that need useful systems, not empty transformation language."
              supportingCopy="The industries focus is intentionally practical: sectors where technology has to improve delivery, visibility, coordination, and growth. The goal is not to claim every industry. It is to show where Future Logix is most likely to be useful, credible, and commercially relevant."
            />
          </div>

          <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:-mx-0 sm:px-0">
            <div className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 xl:grid-cols-5">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <div key={industry.title} className="group min-w-[84%] snap-start md:min-w-0">
                    <Card className="flex h-full flex-col border-border/80 bg-white/85 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)]">
                      <CardHeader className="space-y-4 p-5">
                        <div className="rounded-2xl bg-primary/10 p-3 text-primary w-fit">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl text-foreground">{industry.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 space-y-4 px-5 pb-5 pt-0">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            Need
                          </p>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">{industry.need}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            Solution
                          </p>
                          <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            {industry.solution}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="px-5 pb-5 pt-0">
                        <Button asChild variant="outline" className="w-full rounded-full bg-white/70">
                          <Link href={industry.href}>View industry</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

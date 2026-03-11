import { CheckCircle2 } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Differentiator } from "@/types";

const differentiators: Differentiator[] = [
  {
    number: "01",
    title: "Practical over bloated",
    description:
      "Future Logix is positioned around usable systems, better operations, and real delivery, not long decks full of jargon.",
    icon: CheckCircle2,
  },
  {
    number: "02",
    title: "Grounded in African operating realities",
    description:
      "The work is framed around the constraints and opportunities of African businesses and institutions, not imported assumptions.",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Products and services in one company",
    description:
      "The company builds its own products while also delivering services, which creates stronger strategic and execution depth.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Implementation-minded delivery",
    description:
      "Advice matters only if it can be executed. Future Logix is designed to help teams actually ship and operationalize the work.",
    icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Scalable thinking from the start",
    description:
      "Products, workflows, and infrastructure are shaped with future growth in mind so clients do not outgrow every decision too quickly.",
    icon: CheckCircle2,
  },
  {
    number: "06",
    title: "Long-term partner orientation",
    description:
      "The relationship is framed around continued support, improvement, and future phases, not a one-time engagement and exit.",
    icon: CheckCircle2,
  },
];

export function WhySection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-8 rounded-[2rem] border border-border/80 bg-slate-950 px-5 py-10 text-white shadow-soft sm:px-8 sm:py-12">
          <div className="max-w-5xl">
            <SectionHeader
              number="04"
              title="Why Future Logix"
              subtitle="A sharper proposition than the usual technology consultancy story."
              supportingCopy="The company should feel implementation-minded, market-aware, and built for long-term relevance in African business environments. Future Logix should feel like a company that can build, deliver, and stay relevant as client needs evolve."
              inverted
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.number}>
                  <Card className="h-full border-white/10 bg-white/5 text-white shadow-none">
                    <CardHeader className="space-y-4 p-5">
                      <div className="flex items-start justify-between gap-4">
                        <span className="text-4xl font-semibold tracking-tight text-white/40">
                          {item.number}
                        </span>
                        <div className="rounded-2xl bg-secondary/15 p-3 text-secondary">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="px-5 pb-5 pt-0">
                      <p className="text-sm leading-7 text-slate-300">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

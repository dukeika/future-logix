import { CheckCircle2, Layers3, ShieldCheck } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";

const trustSignals = [
  {
    icon: Layers3,
    title: "A parent brand, not a one-off product",
    description:
      "Future Logix gives each product and service a stronger trust layer: clear ownership, implementation thinking, and long-term accountability.",
    accent: "primary" as const,
  },
  {
    icon: ShieldCheck,
    title: "Practical proof over broad claims",
    description:
      "The site should market specific products, workflows, pricing anchors, and delivery paths instead of vague transformation language.",
    accent: "secondary" as const,
  },
  {
    icon: CheckCircle2,
    title: "Built for local operating realities",
    description:
      "Products and services shaped for African organizations balancing lean teams and growth pressure.",
    accent: "primary" as const,
  },
];

const accentClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/15 text-secondary",
};

export function SocialProofSection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-10">
          <div className="max-w-4xl">
            <SectionHeader
              number="01A"
              title="Why Teams Start Here"
              subtitle="Future Logix is the main trust layer for the campaign."
              description="SchoolsRep can lead product demand, but Future Logix should carry the broader brand story, expertise, and acquisition engine."
            />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {trustSignals.map((signal, idx) => {
              const Icon = signal.icon;

              return (
                <article
                  key={signal.title}
                  className="bento-card p-6 sm:p-7"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className={`inline-flex rounded-2xl p-3 ${accentClasses[signal.accent]}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-foreground">
                    {signal.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {signal.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

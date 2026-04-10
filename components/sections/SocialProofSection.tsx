import { Quote } from "lucide-react";

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";

const testimonials = [
  {
    quote:
      "Future Logix helped us move from scattered tools to one clearer operating rhythm across the business.",
    name: "Amina Okafor",
    role: "Operations Lead",
    company: "Northfield Advisory",
  },
  {
    quote:
      "The team focused on systems that actually worked for our staff, not just impressive presentations.",
    name: "Tunde Adebayo",
    role: "Director",
    company: "Bridgeway Schools",
  },
  {
    quote:
      "They brought structure, speed, and practical thinking to a project that had stalled for months.",
    name: "Ifeoma Nnaji",
    role: "COO",
    company: "Meridian Growth Co.",
  },
];

export function SocialProofSection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-8">
          <div className="max-w-4xl">
            <SectionHeader
              number="01A"
              title="Trusted By Teams Doing Real Work"
              subtitle="What working with Future Logix can feel like."
              supportingCopy="This section is intentionally simple social proof to reinforce trust immediately after the hero."
            />
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={`${testimonial.name}-${testimonial.company}`}
                className="surface-panel h-full px-5 py-6 sm:px-6"
              >
                {/* TODO: Replace this placeholder testimonial with a real customer quote. */}
                <Quote className="h-5 w-5 text-secondary" />
                <p className="mt-4 text-base leading-8 text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6 border-t border-border/70 pt-4">
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

import { SectionHeader } from "@/components/shared/SectionHeader";
import { SiteContainer } from "@/components/shared/site-container";

export function WhoWeAreSection() {
  return (
    <section className="section-shell">
      <SiteContainer>
        <div className="space-y-8">
          <div className="max-w-4xl">
            <SectionHeader
              number="05"
              title="Who We Are"
              subtitle="A small team focused on useful outcomes."
            />
          </div>

          <div className="surface-panel max-w-4xl px-5 py-8 sm:px-8">
            <p className="text-base leading-8 text-muted-foreground sm:text-lg">
              Future Logix is a Lagos-based technology company founded to build practical digital
              products and services for African organizations. We are a small, focused team of
              builders and operators who care more about useful outcomes than impressive-sounding
              deliverables.
            </p>
            {/* TODO: Add founder name, photo, and LinkedIn link here */}
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

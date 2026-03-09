import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CtaBand, FeatureCard, PageContainer, PageShell, Section, SectionHeading } from "../../components/site/PagePrimitives";
import { industries } from "../../content/siteContent";

export const metadata = {
  title: "Industries | Future Logix",
  description: "See the sectors Future Logix is building products and delivery capabilities for.",
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <Section className="pb-12 pt-16 sm:pt-24">
          <PageContainer>
            <SectionHeading
              eyebrow="Industries"
              title="A technology partner for organizations that need systems with business value."
              description="This page frames Future Logix around market segments that fit both its product direction and its services capability."
            />
          </PageContainer>
        </Section>

        <Section tone="light">
          <PageContainer>
            <div className="grid gap-6 md:grid-cols-2">
              {industries.map((industry) => (
                <FeatureCard key={industry.name} variant="light" meta="Industry Focus" title={industry.name} description={industry.summary} />
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <SectionHeading
              eyebrow="Expansion Path"
              title="Ready for deeper industry pages later."
              description="Phase 2 can expand each industry into tailored problem statements, capabilities, and proof points without changing the layout system."
            />
          </PageContainer>
        </Section>

        <Section className="pt-0">
          <PageContainer>
            <CtaBand
              eyebrow="Industry Fit"
              title="Need a partner that understands your operating environment and growth stage?"
              body="This section now provides a stable entry point for market-specific positioning in later phases."
              primaryHref="/contact"
              primaryLabel="Discuss Your Industry"
            />
          </PageContainer>
        </Section>
      </main>
      <Footer />
    </PageShell>
  );
}

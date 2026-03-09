import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CtaBand, FeatureCard, PageContainer, PageShell, Section, SectionHeading } from "../../components/site/PagePrimitives";
import { insights } from "../../content/siteContent";

export const metadata = {
  title: "Insights | Future Logix",
  description: "Perspectives from Future Logix on products, platforms, operations, and technology strategy.",
};

export default function InsightsPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <Section className="pb-12 pt-16 sm:pt-24">
          <PageContainer>
            <SectionHeading
              eyebrow="Insights"
              title="A home for practical thinking on products, platforms, and growth."
              description="This replaces the old brochure-style blog direction with an insights area better suited to a product-and-company narrative."
            />
          </PageContainer>
        </Section>

        <Section tone="light">
          <PageContainer>
            <div className="grid gap-6 lg:grid-cols-3">
              {insights.map((item) => (
                <FeatureCard key={item.title} variant="light" meta={item.category} title={item.title} description={item.summary} />
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <SectionHeading
              eyebrow="Editorial Direction"
              title="Ready for future article publishing."
              description="Phase 1 establishes the page shell and content style. A later phase can decide whether insights remain static, become CMS-backed, or replace the current in-memory blog flow entirely."
            />
          </PageContainer>
        </Section>

        <Section className="pt-0">
          <PageContainer>
            <CtaBand
              eyebrow="Stay Connected"
              title="Want to explore how Future Logix thinks about building and operating modern technology?"
              body="The page is now ready to receive stronger editorial content without another structural rebuild."
              primaryHref="/contact"
              primaryLabel="Talk to the Team"
            />
          </PageContainer>
        </Section>
      </main>
      <Footer />
    </PageShell>
  );
}

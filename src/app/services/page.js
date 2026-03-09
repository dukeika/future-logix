import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CtaBand, FeatureCard, PageContainer, PageShell, Section, SectionHeading } from "../../components/site/PagePrimitives";
import { services } from "../../content/siteContent";

export const metadata = {
  title: "Services | Future Logix",
  description: "Explore Future Logix service capabilities across product engineering, platform delivery, cloud infrastructure, and advisory support.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <Section className="pb-12 pt-16 sm:pt-24">
          <PageContainer>
            <SectionHeading
              eyebrow="Services"
              title="Delivery services built to help organizations move with more clarity and control."
              description="Future Logix offers a focused service line that supports product launches, platform delivery, internal operations, and digital growth."
            />
          </PageContainer>
        </Section>

        <Section tone="light">
          <PageContainer>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <FeatureCard key={service.name} variant="light" meta="Service Capability" title={service.name} description={service.summary}>
                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </FeatureCard>
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <SectionHeading
              eyebrow="How We Work"
              title="A service model that stays practical."
              description="Later phases can expand this into detailed service pages. For now, the structure supports a clear story: scope the problem, define the right build path, execute cleanly, and support what goes live."
            />
          </PageContainer>
        </Section>

        <Section className="pt-0">
          <PageContainer>
            <CtaBand
              eyebrow="Engage Future Logix"
              title="Need a delivery partner for product, platform, or operational technology work?"
              body="Use this page as the anchor for future service detail without changing the site structure again."
              primaryHref="/contact"
              primaryLabel="Talk to Us"
            />
          </PageContainer>
        </Section>
      </main>
      <Footer />
    </PageShell>
  );
}

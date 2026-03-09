import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CtaBand, FeatureCard, PageContainer, PageShell, Section, SectionHeading } from "../../components/site/PagePrimitives";

const principles = [
  {
    title: "Build with business context",
    body: "Technology decisions should make commercial and operational sense, not just look impressive in a proposal.",
  },
  {
    title: "Design for what comes next",
    body: "Products, internal systems, and platforms should support growth instead of becoming blockers six months later.",
  },
  {
    title: "Partner for the long run",
    body: "Future Logix is positioned as a company that can stay involved as products mature and businesses evolve.",
  },
];

export const metadata = {
  title: "About | Future Logix",
  description: "Learn how Future Logix is positioned as a modern parent technology company for products and services.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <Section className="pb-12 pt-16 sm:pt-24">
          <PageContainer>
            <SectionHeading
              eyebrow="About"
              title="Future Logix is the parent technology brand behind products, platforms, and delivery services."
              description="This page now supports a clearer company story: modern, practical, and built for long-term relevance in African markets."
            />
          </PageContainer>
        </Section>

        <Section tone="light">
          <PageContainer>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <FeatureCard
                variant="light"
                meta="Company Direction"
                title="A technology company with room to grow"
                description="Future Logix is positioned to operate as both a builder of products and a provider of services. That distinction matters because it changes how the company is perceived, how the website scales, and how future offerings can be introduced."
              />
              <FeatureCard
                variant="light"
                meta="Market Position"
                title="Built for African businesses and institutions"
                description="The brand tone avoids vague consultancy language and instead speaks to product value, operational clarity, and long-term partnership."
              />
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <SectionHeading
              eyebrow="Principles"
              title="The company story is grounded in a few clear principles."
              description="These are placeholders for a stronger future narrative while still giving the page a complete and usable structure now."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {principles.map((item) => (
                <FeatureCard key={item.title} meta="Principle" title={item.title} description={item.body} />
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section className="pt-0">
          <PageContainer>
            <CtaBand
              eyebrow="Meet Future Logix"
              title="If you need a technology company that can build, advise, and stay engaged, start the conversation."
              body="The about page is now ready for future leadership bios, company milestones, and stronger proof without another architecture reset."
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

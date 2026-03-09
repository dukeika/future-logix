import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CtaBand, FeatureCard, PageContainer, PageShell, Section, SectionHeading } from "../../components/site/PagePrimitives";
import { products } from "../../content/siteContent";

export const metadata = {
  title: "Products | Future Logix",
  description: "See the Future Logix product portfolio, starting with ClassPoint and expanding into future product lines.",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <Section className="pb-12 pt-16 sm:pt-24">
          <PageContainer>
            <SectionHeading
              eyebrow="Products"
              title="Future Logix is building a portfolio, not a one-off product story."
              description="This page establishes the products area as a durable home for ClassPoint and future software ventures under the parent brand."
            />
          </PageContainer>
        </Section>

        <Section tone="light">
          <PageContainer>
            <div className="grid gap-6 lg:grid-cols-2">
              {products.map((product) => (
                <FeatureCard
                  key={product.slug}
                  variant="light"
                  meta={product.status}
                  title={product.name}
                  description={product.summary}
                  href={product.ctas?.[0]?.href}
                  cta={product.ctas?.[0]?.label}
                >
                  <p className="mt-4 text-sm leading-7 text-slate-600">{product.detail}</p>
                </FeatureCard>
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section id="classpoint">
          <PageContainer>
            <SectionHeading
              eyebrow="ClassPoint"
              title="The first visible product in the Future Logix portfolio."
              description="In later phases, this can expand into a richer product narrative with screenshots, outcomes, use cases, and dedicated conversion paths."
            />
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <p className="max-w-3xl text-base leading-8 text-slate-300">
                For this phase, ClassPoint is presented as a flagship product that validates the broader Future Logix
                product-company direction and creates a natural highlighted destination in the navigation.
              </p>
            </div>
          </PageContainer>
        </Section>

        <Section className="pt-0">
          <PageContainer>
            <CtaBand
              eyebrow="Product Conversations"
              title="Want to discuss ClassPoint, portfolio strategy, or a new product idea?"
              body="The product architecture is now in place and can support deeper product expansion in the next phase."
              primaryHref="/contact"
              primaryLabel="Talk Product Strategy"
            />
          </PageContainer>
        </Section>
      </main>
      <Footer />
    </PageShell>
  );
}

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  CtaBand,
  FeatureCard,
  PageContainer,
  PageShell,
  PromoStrip,
  Section,
  SectionHeading,
} from "../components/site/PagePrimitives";
import {
  differentiators,
  featuredProduct,
  industries,
  insights,
  outcomes,
  products,
  services,
  trustPoints,
} from "../content/siteContent";

export const metadata = {
  title: "Future Logix | Products and Technology Services",
  description:
    "Future Logix Limited is a modern technology company building products and delivering practical technology services for African businesses.",
};

export default function Home() {
  return (
    <PageShell>
      <Header />

      <main>
        <Section className="overflow-hidden pb-14 pt-16 sm:pt-24">
          <PageContainer>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300">Future Logix Limited</p>
                <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  A modern technology company building products and delivering execution.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  Future Logix is the parent brand behind ClassPoint and a growing portfolio of technology products,
                  platforms, and services designed for ambitious African businesses.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    Talk to Us
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex justify-center rounded-full border border-white/[0.12] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.26),transparent_28%),linear-gradient(140deg,#13213b,#0a1321)] p-8 shadow-[0_30px_120px_-50px_rgba(6,182,212,0.45)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-200">ClassPoint Highlight</p>
                <h2 className="mt-4 text-3xl font-semibold">{featuredProduct.name}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-200">{featuredProduct.summary}</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-sm font-semibold text-white">Products</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Portfolio-led technology products that solve practical business and institutional problems.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4">
                    <p className="text-sm font-semibold text-white">Services</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Delivery capability for organizations that need product, platform, and operational execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>

        <Section className="pt-0">
          <PageContainer>
            <PromoStrip items={trustPoints} />
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <SectionHeading
              eyebrow="What We Do"
              title="Future Logix is structured around two clear value lines."
              description="The company is positioned to grow a product portfolio while also delivering the services businesses need to launch and operate well."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <FeatureCard
                meta="Products"
                title="Digital products with portfolio potential"
                description="Future Logix builds products that solve repeatable market problems and can grow into a wider technology portfolio."
                href="/products"
                cta="See Products"
              />
              <FeatureCard
                meta="Services"
                title="Services that help businesses execute"
                description="Future Logix also works directly with organizations to design, build, and improve platforms, systems, and digital operations."
                href="/services"
                cta="See Services"
              />
            </div>
          </PageContainer>
        </Section>

        <Section tone="light">
          <PageContainer>
            <SectionHeading
              eyebrow="Featured Products"
              title="A serious parent brand starts with a flagship product and room to expand."
              description="Phase 1 positions ClassPoint clearly while leaving clean space for future products to sit naturally under the Future Logix brand."
              tone="light"
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {products.map((product) => (
                <FeatureCard
                  key={product.slug}
                  variant="light"
                  meta={product.status}
                  title={product.name}
                  description={product.summary}
                  href={product.href}
                  cta={product.cta}
                >
                  <p className="mt-4 text-sm leading-7 text-slate-600">{product.detail}</p>
                </FeatureCard>
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <SectionHeading
              eyebrow="Services Overview"
              title="Services designed to support product growth and business execution."
              description="The service line is framed as practical delivery capability, not generic outsourcing."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <FeatureCard key={service.name} meta="Service" title={service.name} description={service.summary}>
                  <ul className="mt-5 space-y-3 text-sm text-slate-300">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-full border border-white/[0.08] bg-white/5 px-3 py-2">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </FeatureCard>
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section tone="surface">
          <PageContainer>
            <SectionHeading
              eyebrow="Industries"
              title="Built for organizations that need structure, clarity, and momentum."
              description="Future Logix is intentionally broad enough to support multiple sectors while still sounding specific and useful."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {industries.map((industry) => (
                <FeatureCard key={industry.name} meta="Who We Serve" title={industry.name} description={industry.summary} />
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <SectionHeading
              eyebrow="Why Future Logix"
              title="A company model designed for longevity, not a one-page consultancy story."
              description="The brand direction balances product ambition, execution credibility, and business maturity."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {differentiators.map((item) => (
                <FeatureCard key={item.title} meta="Differentiator" title={item.title} description={item.body} />
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section tone="light">
          <PageContainer>
            <SectionHeading
              eyebrow="Selected Outcomes"
              title="The value proposition stays grounded in business outcomes."
              description="Even before deeper case-study content is added, the homepage now signals the kinds of results Future Logix is built to help create."
              tone="light"
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {outcomes.map((item) => (
                <FeatureCard key={item.title} variant="light" meta="Outcome" title={item.title} description={item.body} />
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <SectionHeading
              eyebrow="Insights"
              title="A future-ready home for strategic and product-led thinking."
              description="The insights area is positioned as a place for practical perspective on building, operating, and scaling with technology."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {insights.map((item) => (
                <FeatureCard
                  key={item.title}
                  meta={item.category}
                  title={item.title}
                  description={item.summary}
                  href="/insights"
                  cta="Read Insights"
                />
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section className="pt-0">
          <PageContainer>
            <CtaBand
              eyebrow="Next Step"
              title="If you are building a product, improving operations, or planning a stronger digital foundation, start here."
              body="Phase 1 now gives Future Logix a proper parent-brand shell. The next phases can deepen product pages, service detail, case studies, and final messaging without reworking the structure again."
              primaryHref="/contact"
              primaryLabel="Start a Conversation"
              secondaryHref="/products"
              secondaryLabel="View Product Direction"
            />
          </PageContainer>
        </Section>
      </main>

      <Footer />
    </PageShell>
  );
}

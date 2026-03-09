import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  CtaBand,
  FeatureCard,
  PageContainer,
  PageShell,
  Pill,
  PromoStrip,
  Section,
  SectionHeading,
} from "../components/site/PagePrimitives";
import {
  decisionCards,
  differentiators,
  featuredProduct,
  homepage,
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
        <Section className="relative overflow-hidden pb-14 pt-16 sm:pt-24">
          <PageContainer>
            <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_22%)]" />
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300">{homepage.hero.eyebrow}</p>
                <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  {homepage.hero.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  {homepage.hero.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={homepage.hero.primaryCta.href}
                    className="inline-flex justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  >
                    {homepage.hero.primaryCta.label}
                  </Link>
                  <Link
                    href={homepage.hero.secondaryCta.href}
                    className="inline-flex justify-center rounded-full border border-white/[0.12] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
                  >
                    {homepage.hero.secondaryCta.label}
                  </Link>
                </div>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400">{homepage.hero.supportLine}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {homepage.hero.benefits.map((benefit) => (
                    <Pill key={benefit}>{benefit}</Pill>
                  ))}
                </div>
              </div>

              <div className="rounded-[2.25rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.24),transparent_30%),linear-gradient(140deg,#13213b,#0a1321)] p-8 shadow-[0_30px_120px_-50px_rgba(6,182,212,0.45)]">
                <div className="grid gap-8">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-200">{homepage.hero.heroPanel.eyebrow}</p>
                    <h2 className="mt-4 text-3xl font-semibold">{homepage.hero.heroPanel.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-200">{homepage.hero.heroPanel.body}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {homepage.hero.heroPanel.stats.map((stat) => (
                      <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">{stat.label}</p>
                        <p className="mt-3 text-lg font-semibold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-[#0f192c] p-5">
                    <p className="text-sm font-semibold text-white">{featuredProduct.name}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{featuredProduct.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                      {homepage.hero.heroPanel.links.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="inline-flex rounded-full border border-white/[0.14] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
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
              eyebrow={homepage.decisionGateway.eyebrow}
              title={homepage.decisionGateway.title}
              description={homepage.decisionGateway.description}
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {decisionCards.map((card) => (
                <FeatureCard key={card.title} meta={card.meta} title={card.title} description={card.summary} href={card.href} cta={card.cta}>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{card.audience}</p>
                </FeatureCard>
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section tone="light">
          <PageContainer>
            <SectionHeading
              eyebrow={homepage.featuredProductsIntro.eyebrow}
              title={homepage.featuredProductsIntro.title}
              description={homepage.featuredProductsIntro.description}
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
                  className={product.slug === "classpoint" ? "lg:col-span-1" : ""}
                >
                  <p className="mt-4 text-sm leading-7 text-slate-600">{product.detail}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    <span className="font-semibold text-slate-900">Who it serves:</span> {product.audience}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    <span className="font-semibold text-slate-900">Why it matters:</span> {product.problem}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {product.ctas.map((cta) => (
                      <Link
                        key={`${product.slug}-${cta.href}`}
                        href={cta.href}
                        className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        {cta.label}
                      </Link>
                    ))}
                  </div>
                </FeatureCard>
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <SectionHeading
              eyebrow={homepage.servicesIntro.eyebrow}
              title={homepage.servicesIntro.title}
              description={homepage.servicesIntro.description}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {services.map((service) => (
                <FeatureCard key={service.name} meta="Service" title={service.name} description={service.summary}>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{service.value}</p>
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
              eyebrow={homepage.industriesIntro.eyebrow}
              title={homepage.industriesIntro.title}
              description={homepage.industriesIntro.description}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry) => (
                <FeatureCard key={industry.name} meta="Who We Serve" title={industry.name} description={industry.organization}>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    <span className="font-semibold text-white">Common need:</span> {industry.need}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    <span className="font-semibold text-white">How Future Logix helps:</span> {industry.help}
                  </p>
                </FeatureCard>
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <SectionHeading
              eyebrow={homepage.differentiatorsIntro.eyebrow}
              title={homepage.differentiatorsIntro.title}
              description={homepage.differentiatorsIntro.description}
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {differentiators.map((item) => (
                <FeatureCard key={item.title} meta="Differentiator" title={item.title} description={item.body} />
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section tone="light">
          <PageContainer>
            <SectionHeading
              eyebrow={homepage.outcomesIntro.eyebrow}
              title={homepage.outcomesIntro.title}
              description={homepage.outcomesIntro.description}
              tone="light"
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {outcomes.map((item) => (
                <FeatureCard key={item.title} variant="light" meta="Outcome" title={item.title} description={item.body} />
              ))}
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <SectionHeading
              eyebrow={homepage.insightsIntro.eyebrow}
              title={homepage.insightsIntro.title}
              description={homepage.insightsIntro.description}
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
              eyebrow={homepage.finalCta.eyebrow}
              title={homepage.finalCta.title}
              body={homepage.finalCta.body}
              primaryHref={homepage.finalCta.primaryHref}
              primaryLabel={homepage.finalCta.primaryLabel}
              secondaryHref={homepage.finalCta.secondaryHref}
              secondaryLabel={homepage.finalCta.secondaryLabel}
            />
          </PageContainer>
        </Section>
      </main>

      <Footer />
    </PageShell>
  );
}

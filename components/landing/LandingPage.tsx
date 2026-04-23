import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Star } from "lucide-react";

import { LandingContactForm } from "@/components/landing/LandingContactForm";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { SiteContainer } from "@/components/shared/site-container";
import { Button } from "@/components/ui/button";
import { contactDetails, type LandingPageData } from "@/lib/landing-pages";

type LandingPageProps = {
  page: LandingPageData;
};

function ContactMethods() {
  return (
    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
      <a
        href={`tel:${contactDetails.phone}`}
        className="rounded-2xl border border-border/80 bg-white/80 px-4 py-4 transition-colors hover:border-primary/30"
      >
        <Phone className="h-5 w-5 text-primary" />
        <p className="mt-3 text-sm font-semibold text-foreground">Call</p>
        <p className="mt-1 text-sm text-muted-foreground">{contactDetails.phoneLabel}</p>
      </a>
      <a
        href={`mailto:${contactDetails.email}`}
        className="rounded-2xl border border-border/80 bg-white/80 px-4 py-4 transition-colors hover:border-primary/30"
      >
        <Mail className="h-5 w-5 text-primary" />
        <p className="mt-3 text-sm font-semibold text-foreground">Email</p>
        <p className="mt-1 text-sm text-muted-foreground">{contactDetails.email}</p>
      </a>
      <div className="rounded-2xl border border-border/80 bg-white/80 px-4 py-4">
        <MapPin className="h-5 w-5 text-primary" />
        <p className="mt-3 text-sm font-semibold text-foreground">Location</p>
        <p className="mt-1 text-sm text-muted-foreground">{contactDetails.location}</p>
      </div>
    </div>
  );
}

export function LandingPage({ page }: LandingPageProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": page.schemaType,
    name: page.title,
    description: page.metaDescription,
    provider:
      page.schemaType === "Service"
        ? {
            "@type": "Organization",
            name: "Future Logix Limited",
            url: "https://futurelogix.ng",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lagos",
              addressCountry: "NG",
            },
            telephone: contactDetails.phone,
            email: contactDetails.email,
          }
        : undefined,
    brand:
      page.schemaType === "Product"
        ? {
            "@type": "Organization",
            name: "Future Logix Limited",
          }
        : undefined,
    url: `https://futurelogix.ng/${page.slug}`,
    areaServed: "Africa",
    offers: page.price
      ? {
          "@type": "Offer",
          priceCurrency: "NGN",
          description: page.price,
        }
      : undefined,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="border-b border-border/70 bg-background/94 py-4 backdrop-blur">
        <SiteContainer className="flex items-center justify-between gap-4">
          <BrandLogo showTagline={false} />
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="outline" size="sm">
              <a href={`tel:${contactDetails.phone}`}>Call</a>
            </Button>
            <Button asChild size="sm">
              <a href="#contact-form">{page.primaryCta}</a>
            </Button>
          </div>
        </SiteContainer>
      </div>

      <section className="section-shell pb-8 lg:pb-12">
        <SiteContainer>
          <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-stretch">
            <div className="surface-panel flex flex-col justify-between px-5 py-8 sm:px-8 lg:px-10 lg:py-12">
              <div className="space-y-6">
                <div className="inline-flex w-fit rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {page.eyebrow}
                </div>
                <div className="space-y-5">
                  <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    {page.h1}
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                    {page.subheadline}
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild size="lg" className="gap-2">
                    <a href="#contact-form">
                      {page.primaryCta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  {page.slug === "schoolsrep" && page.productUrl ? (
                    <Button asChild variant="outline" size="lg">
                      <a href={page.productUrl}>{page.secondaryCta}</a>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" size="lg">
                      <a href={`tel:${contactDetails.phone}`}>{page.secondaryCta}</a>
                    </Button>
                  )}
                  {page.tertiaryCta ? (
                    <Button asChild variant="outline" size="lg">
                      <a href={page.slug === "schoolsrep" ? `tel:${contactDetails.phone}` : `mailto:${contactDetails.email}`}>
                        {page.tertiaryCta}
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>

              {page.price || page.timeline ? (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {page.price ? (
                    <div className="rounded-2xl border border-primary/15 bg-primary/5 px-4 py-4">
                      <p className="text-sm text-muted-foreground">Pricing anchor</p>
                      <p className="mt-1 text-lg font-semibold text-foreground">{page.price}</p>
                    </div>
                  ) : null}
                  {page.timeline ? (
                    <div className="rounded-2xl border border-secondary/20 bg-secondary/10 px-4 py-4">
                      <p className="text-sm text-muted-foreground">Typical timeline</p>
                      <p className="mt-1 text-lg font-semibold text-foreground">{page.timeline}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            <LandingContactForm
              interest={page.interest}
              source={page.slug}
              title={page.formTitle}
              intro={page.formIntro}
              messagePlaceholder={page.messagePlaceholder}
              submitLabel={page.slug === "schoolsrep" ? "Request Demo" : "Send Inquiry"}
            />
          </div>
        </SiteContainer>
      </section>

      <section className="section-shell py-8">
        <SiteContainer>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="surface-panel px-5 py-7 sm:px-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Problem</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{page.painTitle}</h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">{page.painIntro}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {page.painPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-border/80 bg-white/80 p-5">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="section-shell py-8">
        <SiteContainer>
          <div className="space-y-6">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Solution</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{page.solutionTitle}</h2>
              <p className="text-base leading-8 text-muted-foreground">{page.solutionIntro}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {page.capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <div key={capability.title} className="surface-panel px-5 py-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{capability.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{capability.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="section-shell py-8">
        <SiteContainer>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] bg-slate-950 px-5 py-8 text-white shadow-soft sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Outcomes</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">What should improve</h2>
              <div className="mt-6 grid gap-3">
                {page.outcomes.map((outcome) => (
                  <div key={outcome} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                    <p className="text-sm leading-7 text-slate-200">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-panel px-5 py-8 sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Trust</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">{page.trustTitle}</h2>
              <div className="mt-6 space-y-3">
                {page.trustItems.map((item) => (
                  <div key={item} className="flex gap-3">
                    <Star className="mt-1 h-4 w-4 shrink-0 fill-secondary text-secondary" />
                    <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <blockquote className="mt-7 rounded-2xl border border-border/80 bg-background/80 p-5">
                <p className="text-base leading-8 text-foreground">&quot;{page.proofQuote}&quot;</p>
                <footer className="mt-4 text-sm font-semibold text-muted-foreground">{page.proofAttribution}</footer>
              </blockquote>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="section-shell py-8">
        <SiteContainer>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">FAQ</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">Questions buyers usually ask</h2>
              <p className="text-base leading-8 text-muted-foreground">
                Short answers before we get into the details of your organization, timeline, and implementation path.
              </p>
            </div>
            <div className="space-y-3">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="surface-panel group px-5 py-4">
                  <summary className="cursor-pointer list-none text-base font-semibold text-foreground">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-primary transition-transform group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="section-shell pt-8">
        <SiteContainer>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="surface-panel px-5 py-8 sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                Ready to discuss the next practical step?
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Use the form above, call, or email Future Logix. For WhatsApp-style quick contact, this
                block is structured so a chat link can be added without changing the page flow.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href="#contact-form">{page.primaryCta}</a>
                </Button>
                <Button asChild variant="outline">
                  <a href={`tel:${contactDetails.phone}`}>Call {contactDetails.phoneLabel}</a>
                </Button>
              </div>
            </div>
            <ContactMethods />
          </div>
        </SiteContainer>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 p-3 shadow-soft backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
          <Button asChild size="sm">
            <a href="#contact-form">{page.primaryCta}</a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={`tel:${contactDetails.phone}`}>Call Now</a>
          </Button>
        </div>
      </div>
    </>
  );
}

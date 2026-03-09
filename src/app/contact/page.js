import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import ConsultationForm from "../../components/ConsultationForm";
import { CtaBand, PageContainer, PageShell, Section, SectionHeading } from "../../components/site/PagePrimitives";

export const metadata = {
  title: "Contact | Future Logix",
  description: "Talk to Future Logix about products, services, partnerships, and technology delivery.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <Section className="pb-12 pt-16 sm:pt-24">
          <PageContainer>
            <SectionHeading
              eyebrow="Contact"
              title="Talk to Future Logix about products, delivery, or long-term partnership."
              description="This page is now structured as a real conversion destination rather than a simple brochure contact page."
            />
          </PageContainer>
        </Section>

        <Section tone="light">
          <PageContainer>
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-slate-950 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.35)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-700">Contact Details</p>
                <h2 className="mt-4 text-3xl font-semibold">Start with the right conversation.</h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                  <p>Products and portfolio discussions</p>
                  <p>Service and delivery enquiries</p>
                  <p>ClassPoint partnerships</p>
                  <p>General business conversations</p>
                </div>
                <div className="mt-8 space-y-4 text-sm">
                  <p className="font-semibold text-slate-950">admin@futurelogix.ng</p>
                  <p className="font-semibold text-slate-950">+234 706 110 6212</p>
                  <p className="text-slate-600">Lagos, Nigeria</p>
                </div>
              </div>

              <ContactForm />
            </div>
          </PageContainer>
        </Section>

        <Section>
          <PageContainer>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <SectionHeading
                eyebrow="Strategy Session"
                title="Prefer a more structured conversation?"
                description="Use the consultation form for a planned discussion around products, services, or a new initiative."
              />
              <ConsultationForm />
            </div>
          </PageContainer>
        </Section>

        <Section className="pt-0">
          <PageContainer>
            <CtaBand
              eyebrow="Ready When You Are"
              title="Future Logix now has a cleaner conversion path for product and service conversations."
              body="This page can be expanded later with map, scheduling integrations, FAQs, or sales routing logic without replacing the structure."
              primaryHref="/contact"
              primaryLabel="Send an Enquiry"
            />
          </PageContainer>
        </Section>
      </main>
      <Footer />
    </PageShell>
  );
}

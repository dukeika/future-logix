import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PageShell } from "../../components/site/PagePrimitives";
import {
  EngagementModelSection,
  FeaturedServicesSection,
  ServiceArchitectureSection,
  ServicePathsSection,
  ServicesHero,
} from "../../components/services/ServiceSections";

export const metadata = {
  title: "Services | Future Logix",
  description:
    "Explore Future Logix technology services across workflow automation, custom software development, cloud infrastructure, cybersecurity, and technology advisory.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <ServicesHero />
        <ServiceArchitectureSection />
        <EngagementModelSection />
        <FeaturedServicesSection />
        <ServicePathsSection />
      </main>
      <Footer />
    </PageShell>
  );
}

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PageShell } from "../../components/site/PagePrimitives";
import {
  CrossIndustryFitSection,
  FeaturedIndustrySection,
  IndustriesHero,
  IndustryCoverageSection,
  IndustryPathsSection,
} from "../../components/industries/IndustrySections";

export const metadata = {
  title: "Industries | Future Logix",
  description:
    "Explore the industries Future Logix serves, including education and SMEs, and see how products and services connect to real operational needs.",
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <IndustriesHero />
        <IndustryCoverageSection />
        <CrossIndustryFitSection />
        <FeaturedIndustrySection />
        <IndustryPathsSection />
      </main>
      <Footer />
    </PageShell>
  );
}

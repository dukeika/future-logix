import Header from "../components/Header";
import Footer from "../components/Footer";
import { PageShell } from "../components/site/PagePrimitives";
import {
  DecisionSection,
  FinalChoices,
  HomeHero,
  IndustriesSection,
  InsightsSection,
  OutcomesSection,
  PositioningSection,
  ProductSpotlight,
  ServicesBand,
  TrustStrip,
} from "../components/home/HomeSections";

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
        <HomeHero />
        <TrustStrip />
        <DecisionSection />
        <ProductSpotlight />
        <ServicesBand />
        <IndustriesSection />
        <PositioningSection />
        <OutcomesSection />
        <InsightsSection />
        <FinalChoices />
      </main>

      <Footer />
    </PageShell>
  );
}

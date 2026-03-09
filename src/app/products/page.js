import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { PageShell } from "../../components/site/PagePrimitives";
import {
  FlagshipSpotlightSection,
  PortfolioGrowthSection,
  ProductPathsSection,
  ProductPhilosophySection,
  ProductsHero,
} from "../../components/products/ProductSections";

export const metadata = {
  title: "Products | Future Logix",
  description:
    "Explore the Future Logix product portfolio, including ClassPoint, the flagship school operations product backed by Future Logix Limited.",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <ProductsHero />
        <ProductPhilosophySection />
        <FlagshipSpotlightSection />
        <PortfolioGrowthSection />
        <ProductPathsSection />
      </main>
      <Footer />
    </PageShell>
  );
}

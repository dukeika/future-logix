import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { PageShell } from "../../../components/site/PagePrimitives";
import { SmesIndustryPageSections } from "../../../components/industries/IndustrySections";

export const metadata = {
  title: "SMEs and Growing Businesses | Future Logix",
  description:
    "See how Future Logix helps SMEs and growing businesses improve workflows, build better systems, and modernize operations with practical technology support.",
};

export default function SmesIndustryPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <SmesIndustryPageSections />
      </main>
      <Footer />
    </PageShell>
  );
}

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { PageShell } from "../../../components/site/PagePrimitives";
import { EducationIndustryPageSections } from "../../../components/industries/IndustrySections";

export const metadata = {
  title: "Education | Future Logix",
  description:
    "See how Future Logix supports schools and education organizations with ClassPoint, workflow improvement, custom systems, and practical modernization support.",
};

export default function EducationIndustryPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <EducationIndustryPageSections />
      </main>
      <Footer />
    </PageShell>
  );
}

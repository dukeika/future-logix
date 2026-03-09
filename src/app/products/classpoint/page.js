import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { PageShell } from "../../../components/site/PagePrimitives";
import {
  ClassPointAudienceSection,
  ClassPointCapabilitiesSection,
  ClassPointConversionSection,
  ClassPointDifferentiationSection,
  ClassPointHero,
  ClassPointProblemSection,
} from "../../../components/products/ProductSections";

export const metadata = {
  title: "ClassPoint | Future Logix",
  description:
    "ClassPoint is a school operations platform for Nigerian schools, built by Future Logix to improve administration, academic workflows, and operational visibility.",
};

export default function ClassPointPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <ClassPointHero />
        <ClassPointProblemSection />
        <ClassPointCapabilitiesSection />
        <ClassPointAudienceSection />
        <ClassPointDifferentiationSection />
        <ClassPointConversionSection />
      </main>
      <Footer />
    </PageShell>
  );
}

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { PageShell } from "../../../components/site/PagePrimitives";
import { CustomSoftwarePageSections } from "../../../components/services/ServiceSections";

export const metadata = {
  title: "Custom Software Development | Future Logix",
  description:
    "Future Logix designs and builds custom software, internal platforms, portals, dashboards, and operational systems for growing businesses and institutions.",
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <CustomSoftwarePageSections />
      </main>
      <Footer />
    </PageShell>
  );
}

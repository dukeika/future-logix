import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { PageShell } from "../../../components/site/PagePrimitives";
import { WorkflowAutomationPageSections } from "../../../components/services/ServiceSections";

export const metadata = {
  title: "Workflow Automation | Future Logix",
  description:
    "Future Logix helps growing businesses automate repetitive workflows, improve visibility, and reduce manual operational drag.",
};

export default function WorkflowAutomationPage() {
  return (
    <PageShell>
      <Header />
      <main>
        <WorkflowAutomationPageSections />
      </main>
      <Footer />
    </PageShell>
  );
}

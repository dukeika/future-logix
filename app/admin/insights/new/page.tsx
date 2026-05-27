import { InsightEditor } from "@/components/admin/insights/InsightEditor";

export const metadata = { title: "New insight | Admin" };

export default function NewInsightPage() {
  return <InsightEditor mode="new" />;
}

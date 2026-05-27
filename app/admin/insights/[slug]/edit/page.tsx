import { notFound } from "next/navigation";

import { InsightEditor } from "@/components/admin/insights/InsightEditor";
import { getInsight } from "@/lib/insights-db";

export const metadata = { title: "Edit insight | Admin" };
export const dynamic = "force-dynamic";

type PageProps = { params: { slug: string } };

export default async function EditInsightPage({ params }: PageProps) {
  const article = await getInsight(params.slug);
  if (!article) notFound();
  return <InsightEditor mode="edit" initial={article} />;
}

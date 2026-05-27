import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { isAdminSessionValid } from "@/lib/admin-session";
import { listInsights, putInsight } from "@/lib/insights-db";
import type { InsightArticle } from "@/types";

export const runtime = "nodejs";
const noStoreHeaders = { "Cache-Control": "no-store" };

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: noStoreHeaders });
}

export async function GET(request: Request) {
  if (!isAdminSessionValid(request.headers.get("cookie"))) return unauthorized();
  try {
    const articles = await listInsights();
    return NextResponse.json({ articles }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[api/admin/insights] GET failed", error);
    return NextResponse.json({ error: "Unable to load articles." }, { status: 500, headers: noStoreHeaders });
  }
}

export async function POST(request: Request) {
  if (!isAdminSessionValid(request.headers.get("cookie"))) return unauthorized();

  const payload = (await request.json().catch(() => null)) as Partial<InsightArticle> | null;
  if (!payload) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400, headers: noStoreHeaders });
  }

  const slug = slugify(payload.slug || payload.title || "");
  if (!slug) {
    return NextResponse.json({ error: "Slug or title is required." }, { status: 400, headers: noStoreHeaders });
  }
  if (!payload.title || !payload.excerpt || !payload.category) {
    return NextResponse.json(
      { error: "Title, excerpt, and category are required." },
      { status: 400, headers: noStoreHeaders }
    );
  }

  const article: InsightArticle = {
    slug,
    category: payload.category,
    title: payload.title,
    excerpt: payload.excerpt,
    author: payload.author || "Future Logix Team",
    publishedAt: payload.publishedAt || formatPublishedAt(new Date()),
    content: Array.isArray(payload.content) ? payload.content : [],
    status: payload.status === "published" ? "published" : "draft",
    coverImageKey: payload.coverImageKey || undefined,
  };

  try {
    const saved = await putInsight(article);
    revalidatePath("/insights");
    revalidatePath(`/insights/${saved.slug}`);
    revalidatePath("/");
    return NextResponse.json({ article: saved }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[api/admin/insights] POST failed", error);
    return NextResponse.json({ error: "Unable to save article." }, { status: 500, headers: noStoreHeaders });
  }
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatPublishedAt(date: Date) {
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
}

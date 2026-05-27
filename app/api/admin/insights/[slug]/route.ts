import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { isAdminSessionValid } from "@/lib/admin-session";
import { deleteInsight, getInsight, putInsight } from "@/lib/insights-db";
import type { InsightArticle } from "@/types";

export const runtime = "nodejs";
const noStoreHeaders = { "Cache-Control": "no-store" };

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: noStoreHeaders });
}

type RouteContext = { params: { slug: string } };

export async function GET(request: Request, { params }: RouteContext) {
  if (!isAdminSessionValid(request.headers.get("cookie"))) return unauthorized();
  try {
    const article = await getInsight(params.slug);
    if (!article) {
      return NextResponse.json({ error: "Not found" }, { status: 404, headers: noStoreHeaders });
    }
    return NextResponse.json({ article }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[api/admin/insights/[slug]] GET failed", error);
    return NextResponse.json({ error: "Unable to load article." }, { status: 500, headers: noStoreHeaders });
  }
}

export async function PUT(request: Request, { params }: RouteContext) {
  if (!isAdminSessionValid(request.headers.get("cookie"))) return unauthorized();

  const existing = await getInsight(params.slug);
  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404, headers: noStoreHeaders });
  }

  const payload = (await request.json().catch(() => null)) as Partial<InsightArticle> | null;
  if (!payload) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400, headers: noStoreHeaders });
  }

  const updated: InsightArticle = {
    ...existing,
    category: payload.category ?? existing.category,
    title: payload.title ?? existing.title,
    excerpt: payload.excerpt ?? existing.excerpt,
    author: payload.author ?? existing.author,
    publishedAt: payload.publishedAt ?? existing.publishedAt,
    content: Array.isArray(payload.content) ? payload.content : existing.content,
    status: payload.status === "published" ? "published" : payload.status === "draft" ? "draft" : existing.status,
    coverImageKey: payload.coverImageKey ?? existing.coverImageKey,
  };

  try {
    const saved = await putInsight(updated);
    revalidatePath("/insights");
    revalidatePath(`/insights/${saved.slug}`);
    revalidatePath("/");
    return NextResponse.json({ article: saved }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[api/admin/insights/[slug]] PUT failed", error);
    return NextResponse.json({ error: "Unable to save article." }, { status: 500, headers: noStoreHeaders });
  }
}

export async function DELETE(request: Request, { params }: RouteContext) {
  if (!isAdminSessionValid(request.headers.get("cookie"))) return unauthorized();
  try {
    await deleteInsight(params.slug);
    revalidatePath("/insights");
    revalidatePath(`/insights/${params.slug}`);
    revalidatePath("/");
    return NextResponse.json({ ok: true }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[api/admin/insights/[slug]] DELETE failed", error);
    return NextResponse.json({ error: "Unable to delete article." }, { status: 500, headers: noStoreHeaders });
  }
}

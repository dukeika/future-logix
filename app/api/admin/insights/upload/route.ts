import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { isAdminSessionValid } from "@/lib/admin-session";
import { bucketName, getCoverUploadKey, s3Client } from "@/lib/insights-db";

export const runtime = "nodejs";
const noStoreHeaders = { "Cache-Control": "no-store" };

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];
const MAX_BYTES = 5 * 1024 * 1024;

export async function POST(request: Request) {
  if (!isAdminSessionValid(request.headers.get("cookie"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: noStoreHeaders });
  }

  const payload = (await request.json().catch(() => null)) as
    | { slug?: string; contentType?: string; size?: number; extension?: string }
    | null;

  if (!payload?.contentType || !ALLOWED_TYPES.includes(payload.contentType)) {
    return NextResponse.json(
      { error: "Unsupported image type. Use JPEG, PNG, WebP, or AVIF." },
      { status: 400, headers: noStoreHeaders }
    );
  }
  if (typeof payload.size === "number" && payload.size > MAX_BYTES) {
    return NextResponse.json(
      { error: "Image too large. Max 5MB." },
      { status: 400, headers: noStoreHeaders }
    );
  }

  const slug = (payload.slug || "draft").toLowerCase().replace(/[^a-z0-9-]/g, "-").slice(0, 40);
  const extension = (payload.extension || payload.contentType.split("/")[1] || "jpg").toLowerCase();
  const key = await getCoverUploadKey(slug || "draft", extension);

  try {
    const url = await getSignedUrl(
      s3Client(),
      new PutObjectCommand({
        Bucket: bucketName(),
        Key: key,
        ContentType: payload.contentType,
      }),
      { expiresIn: 60 * 5 }
    );

    return NextResponse.json({ uploadUrl: url, key }, { headers: noStoreHeaders });
  } catch (error) {
    console.error("[api/admin/insights/upload] failed", error);
    return NextResponse.json(
      { error: "Unable to create upload URL." },
      { status: 500, headers: noStoreHeaders }
    );
  }
}

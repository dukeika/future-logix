import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { insightArticles as seedArticles } from "@/lib/insights";
import type { InsightArticle } from "@/types";

const TABLE = process.env.INSIGHTS_TABLE_NAME ?? "FutureLogixInsights";
const BUCKET = process.env.INSIGHTS_BUCKET_NAME ?? "fl-blog-posts";
const REGION = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION ?? "eu-west-2";

const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({ region: REGION }), {
  marshallOptions: { removeUndefinedValues: true },
});

const s3 = new S3Client({ region: REGION });

let seeded = false;

export async function listInsights(options: { publishedOnly?: boolean } = {}) {
  try {
    await ensureSeeded();
    const { Items = [] } = await ddb.send(new ScanCommand({ TableName: TABLE }));
    const articles = Items as InsightArticle[];
    const filtered = options.publishedOnly
      ? articles.filter((a) => (a.status ?? "published") === "published")
      : articles;
    filtered.sort((a, b) =>
      (b.updatedAt ?? b.createdAt ?? "").localeCompare(a.updatedAt ?? a.createdAt ?? "")
    );
    return Promise.all(filtered.map(hydrateCoverUrl));
  } catch (error) {
    console.warn("[insights-db] listInsights fallback to seed:", (error as Error).message);
    return seedArticles.map((a) => ({ ...a, status: "published" as const }));
  }
}

export async function getInsight(slug: string) {
  try {
    await ensureSeeded();
    const { Item } = await ddb.send(new GetCommand({ TableName: TABLE, Key: { slug } }));
    if (!Item) return null;
    return hydrateCoverUrl(Item as InsightArticle);
  } catch (error) {
    console.warn("[insights-db] getInsight fallback to seed:", (error as Error).message);
    const fallback = seedArticles.find((a) => a.slug === slug);
    return fallback ? { ...fallback, status: "published" as const } : null;
  }
}

export async function putInsight(article: InsightArticle) {
  const now = new Date().toISOString();
  const item: InsightArticle = {
    ...article,
    status: article.status ?? "draft",
    updatedAt: now,
    createdAt: article.createdAt ?? now,
  };
  // Don't persist coverImageUrl — it's regenerated on read
  const { coverImageUrl: _ignore, ...persistable } = item;
  await ddb.send(new PutCommand({ TableName: TABLE, Item: persistable }));
  return item;
}

export async function deleteInsight(slug: string) {
  await ddb.send(new DeleteCommand({ TableName: TABLE, Key: { slug } }));
}

export async function getCoverUploadKey(slug: string, extension: string) {
  const safeExt = extension.replace(/[^a-zA-Z0-9]/g, "").slice(0, 6) || "jpg";
  return `public/insights/${slug}-${Date.now()}.${safeExt}`;
}

export function s3Client() {
  return s3;
}

export function bucketName() {
  return BUCKET;
}

async function hydrateCoverUrl(article: InsightArticle): Promise<InsightArticle> {
  if (!article.coverImageKey) return article;
  try {
    const url = await getSignedUrl(
      s3,
      new GetObjectCommand({ Bucket: BUCKET, Key: article.coverImageKey }),
      { expiresIn: 60 * 60 * 24 * 6 } // 6 days (max 7 with IAM creds)
    );
    return { ...article, coverImageUrl: url };
  } catch {
    return article;
  }
}

async function ensureSeeded() {
  if (seeded) return;
  try {
    // Project only slugs to find which seed articles are missing
    const { Items = [] } = await ddb.send(
      new ScanCommand({ TableName: TABLE, ProjectionExpression: "slug" })
    );
    const haveSlugs = new Set((Items as Array<{ slug?: string }>).map((i) => i.slug));
    const missing = seedArticles.filter((a) => !haveSlugs.has(a.slug));

    if (missing.length === 0) {
      seeded = true;
      return;
    }

    const now = new Date().toISOString();
    const results = await Promise.allSettled(
      missing.map((article) =>
        ddb.send(
          new PutCommand({
            TableName: TABLE,
            Item: {
              ...article,
              status: "published",
              createdAt: now,
              updatedAt: now,
            },
            ConditionExpression: "attribute_not_exists(slug)",
          })
        )
      )
    );

    const failures = results.filter((r) => r.status === "rejected").length;
    if (failures === 0) {
      seeded = true;
    } else {
      console.warn(`[insights-db] seed partial — ${missing.length - failures}/${missing.length} written, retry on next call.`);
    }
  } catch (error) {
    console.error("[insights-db] seed check failed", error);
  }
}

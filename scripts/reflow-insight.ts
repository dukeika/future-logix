/**
 * One-off script to reflow a single insight whose entire body was saved
 * as a single paragraph block. Splits on blank lines into multiple
 * paragraph blocks and writes back to DynamoDB.
 *
 * Usage:
 *   AWS_PROFILE=future-logix-aws npx tsx scripts/reflow-insight.ts <slug>
 */

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand } from "@aws-sdk/lib-dynamodb";

const TABLE = "FutureLogixInsights";

type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: { term?: string; description: string }[] }
  | { type: "orderedList"; items: string[] };

function parseTextToBlocks(raw: string): Block[] {
  const text = raw.replace(/\r\n/g, "\n").trim();
  if (!text) return [];
  const chunks = text.split(/\n\s*\n+/);
  const blocks: Block[] = [];
  for (const chunk of chunks) {
    const trimmed = chunk.trim();
    if (!trimmed) continue;
    const lines = trimmed.split("\n").map((l) => l.trimEnd());
    if (lines.length === 1) {
      const h = lines[0].match(/^#{1,6}\s+(.+)$/);
      if (h) {
        blocks.push({ type: "heading", text: h[1].trim() });
        continue;
      }
    }
    if (lines.every((l) => /^\d+[.)]\s+/.test(l))) {
      blocks.push({
        type: "orderedList",
        items: lines.map((l) => l.replace(/^\d+[.)]\s+/, "").trim()).filter(Boolean),
      });
      continue;
    }
    if (lines.every((l) => /^[-*•]\s+/.test(l))) {
      blocks.push({
        type: "list",
        items: lines.map((l) => {
          const stripped = l.replace(/^[-*•]\s+/, "").trim();
          const m = stripped.match(/^\*\*([^*]+)\*\*\s*[:\-—]\s*(.+)$/);
          if (m) return { term: m[1].trim(), description: m[2].trim() };
          return { description: stripped };
        }),
      });
      continue;
    }
    blocks.push({ type: "paragraph", text: lines.join("\n") });
  }
  return blocks;
}

async function main() {
  const slug = process.argv[2];
  if (!slug) {
    console.error("Usage: reflow-insight.ts <slug>");
    process.exit(1);
  }

  const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "eu-west-2" }), {
    marshallOptions: { removeUndefinedValues: true },
  });

  const { Item } = await ddb.send(new GetCommand({ TableName: TABLE, Key: { slug } }));
  if (!Item) {
    console.error("Not found:", slug);
    process.exit(1);
  }

  const content = (Item.content || []) as Block[];
  if (content.length !== 1 || content[0].type !== "paragraph") {
    console.log(`Article already has ${content.length} blocks, skipping.`);
    return;
  }

  const newBlocks = parseTextToBlocks((content[0] as { text: string }).text);
  console.log(`Splitting 1 paragraph → ${newBlocks.length} blocks`);
  for (const b of newBlocks) {
    if (b.type === "paragraph") console.log("  paragraph:", b.text.slice(0, 60), "...");
    else if (b.type === "heading") console.log("  heading:", b.text);
    else if (b.type === "list") console.log(`  list: ${b.items.length} items`);
    else console.log(`  ordered: ${b.items.length} items`);
  }

  await ddb.send(
    new PutCommand({
      TableName: TABLE,
      Item: { ...Item, content: newBlocks, updatedAt: new Date().toISOString() },
    })
  );
  console.log("Saved.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

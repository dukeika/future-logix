import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";

import { insightArticles } from "../lib/insights";

const TABLE = "FutureLogixInsights";

async function main() {
  const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "eu-west-2" }), {
    marshallOptions: { removeUndefinedValues: true },
  });

  const existing = await ddb.send(
    new ScanCommand({ TableName: TABLE, ProjectionExpression: "slug" })
  );
  const haveSlugs = new Set((existing.Items || []).map((i) => i.slug as string));
  console.log("Existing:", [...haveSlugs]);

  const now = new Date().toISOString();
  for (const article of insightArticles) {
    if (haveSlugs.has(article.slug)) {
      console.log("skip", article.slug);
      continue;
    }
    await ddb.send(
      new PutCommand({
        TableName: TABLE,
        Item: { ...article, status: "published", createdAt: now, updatedAt: now },
      })
    );
    console.log("put", article.slug);
  }
  console.log("done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

import fs from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const targetUrl = process.argv[2] ?? "http://127.0.0.1:3000";
const executablePath =
  process.env.PUPPETEER_EXECUTABLE_PATH ??
  "/Users/akabo/Library/Caches/ms-playwright/chromium-1208/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  args: ["--no-sandbox"],
});

const page = await browser.newPage();
await page.goto(targetUrl, { waitUntil: "networkidle0" });

const axePath = path.resolve(process.cwd(), "node_modules/axe-core/axe.min.js");
await page.addScriptTag({ path: axePath });

const results = await page.evaluate(async () => {
  // @ts-expect-error axe is injected at runtime
  return window.axe.run(document, {
    runOnly: {
      type: "tag",
      values: ["wcag2a", "wcag2aa"],
    },
  });
});

console.log(
  JSON.stringify(
    {
      url: targetUrl,
      violations: results.violations.map((violation) => ({
        id: violation.id,
        impact: violation.impact,
        description: violation.description,
        help: violation.help,
        nodes: violation.nodes.length,
      })),
      passes: results.passes.length,
      incomplete: results.incomplete.length,
    },
    null,
    2
  )
);

await browser.close();

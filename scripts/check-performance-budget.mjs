import fs from "node:fs";
import path from "node:path";

const [, , reportArg = ".lighthouseci/report.json"] = process.argv;
const reportPath = path.resolve(process.cwd(), reportArg);
const budgetPath = path.resolve(process.cwd(), "performance-budget.json");

if (!fs.existsSync(reportPath)) {
  console.error(`Lighthouse report not found: ${reportPath}`);
  process.exit(1);
}

if (!fs.existsSync(budgetPath)) {
  console.error(`Performance budget file not found: ${budgetPath}`);
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
const budget = JSON.parse(fs.readFileSync(budgetPath, "utf8"));

const auditValues = {
  performance: report.categories?.performance?.score,
  accessibility: report.categories?.accessibility?.score,
  seo: report.categories?.seo?.score,
  "first-contentful-paint": report.audits?.["first-contentful-paint"]?.numericValue,
  "largest-contentful-paint": report.audits?.["largest-contentful-paint"]?.numericValue,
  interactive: report.audits?.interactive?.numericValue,
  "total-blocking-time": report.audits?.["total-blocking-time"]?.numericValue,
  "cumulative-layout-shift": report.audits?.["cumulative-layout-shift"]?.numericValue,
  "server-response-time": report.audits?.["server-response-time"]?.numericValue,
};

const failures = [];

for (const [key, limit] of Object.entries(budget)) {
  const actual = auditValues[key];

  if (typeof actual !== "number") {
    failures.push(`${key}: metric missing in report`);
    continue;
  }

  const passed =
    key === "performance" || key === "accessibility" || key === "seo"
      ? actual >= limit
      : actual <= limit;

  if (!passed) {
    failures.push(`${key}: expected ${limit}, received ${actual}`);
  }
}

if (failures.length > 0) {
  console.error("Performance budget failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Performance budget passed.");

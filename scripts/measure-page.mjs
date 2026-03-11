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
const client = await page.target().createCDPSession();

await client.send("Network.enable");
await client.send("Network.emulateNetworkConditions", {
  offline: false,
  downloadThroughput: (500 * 1024) / 8,
  uploadThroughput: (500 * 1024) / 8,
  latency: 150,
  connectionType: "cellular3g",
});
await client.send("Emulation.setCPUThrottlingRate", { rate: 4 });

await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
await page.setUserAgent(
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
);

await page.evaluateOnNewDocument(() => {
  window.__perfMetrics = { cls: 0, lcp: 0, fcp: 0, longtask: 0 };

  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === "first-contentful-paint") {
        window.__perfMetrics.fcp = entry.startTime;
      }
    }
  }).observe({ type: "paint", buffered: true });

  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    if (lastEntry) {
      window.__perfMetrics.lcp = lastEntry.startTime;
    }
  }).observe({ type: "largest-contentful-paint", buffered: true });

  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        window.__perfMetrics.cls += entry.value;
      }
    }
  }).observe({ type: "layout-shift", buffered: true });

  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      window.__perfMetrics.longtask += Math.max(0, entry.duration - 50);
    }
  }).observe({ type: "longtask", buffered: true });
});

const response = await page.goto(targetUrl, { waitUntil: "networkidle0" });
await new Promise((resolve) => setTimeout(resolve, 2000));

const metrics = await page.evaluate(() => {
  const nav = performance.getEntriesByType("navigation")[0];

  return {
    ...window.__perfMetrics,
    ttfb: nav.responseStart,
    domContentLoaded: nav.domContentLoadedEventEnd,
    load: nav.loadEventEnd,
  };
});

console.log(
  JSON.stringify(
    {
      url: targetUrl,
      status: response?.status(),
      metrics,
    },
    null,
    2
  )
);

await browser.close();

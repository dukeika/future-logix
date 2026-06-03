import type { MetadataRoute } from "next";

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "Meta-ExternalAgent",
  "Bytespider",
  "cohere-ai",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api", "/pay"],
      },
      ...AI_BOTS.map((bot) => ({
        userAgent: bot,
        allow: "/",
        disallow: ["/admin", "/api", "/pay"],
      })),
    ],
    host: "https://futurelogix.ng",
    sitemap: "https://futurelogix.ng/sitemap.xml",
  };
}

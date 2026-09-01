import type { MetadataRoute } from "next";

import { insightArticles } from "@/lib/insights";
import { landingRouteSlugs } from "@/lib/landing-pages";

const baseUrl = "https://futurelogix.ng";
const siteUpdated = new Date("2026-09-01T00:00:00.000Z");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: siteUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: siteUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: siteUpdated,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: siteUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const articleRoutes: MetadataRoute.Sitemap = insightArticles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: article.modifiedAtISO ?? article.updatedAt ?? article.publishedAtISO ?? siteUpdated,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const landingRoutes: MetadataRoute.Sitemap = landingRouteSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: siteUpdated,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...landingRoutes, ...articleRoutes];
}

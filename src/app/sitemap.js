export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://futurelogix.ng";

  const staticRoutes = ["", "products", "services", "industries", "insights", "about", "contact"];
  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}/${route}`.replace(/\/$/, ""),
    lastModified: new Date(),
  }));

  return staticEntries;
}

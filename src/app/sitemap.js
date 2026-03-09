export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://futurelogix.ng";

  const staticRoutes = [
    "",
    "products",
    "products/classpoint",
    "services",
    "services/workflow-automation",
    "services/custom-software-development",
    "industries",
    "industries/education",
    "industries/smes",
    "insights",
    "about",
    "contact",
  ];
  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}/${route}`.replace(/\/$/, ""),
    lastModified: new Date(),
  }));

  return staticEntries;
}

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://futurelogix.ng";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/blog/admin"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

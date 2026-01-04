import { getBlogPosts } from "../data/blogPosts";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://futurelogix.ng";

  const staticRoutes = ["", "about", "services", "blog", "contact"];
  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}/${route}`.replace(/\/$/, ""),
    lastModified: new Date(),
  }));

  const blogEntries = getBlogPosts()
    .filter((post) => post.published)
    .map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
    }));

  return [...staticEntries, ...blogEntries];
}

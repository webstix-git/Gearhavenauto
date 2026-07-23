import type { MetadataRoute } from "next";
import { getAllPosts } from "@/data/blog-posts";
import { getAllServiceSlugs } from "@/data/service-pages";
import { SITE_URL } from "@/lib/site-url";

const lastmod = new Date();

/** Homepage 1.0; all other public pages 0.8 */
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const mainPaths = [
    "/about-us",
    "/services",
    "/blog",
    "/gallery",
    "/faqs",
    "/reviews",
    "/oil-changes",
    ...getAllServiceSlugs().map((slug) => `/${slug}`),
    "/contact-us",
    "/sitemap",
    "/privacy-policy",
    "/ai-policy",
    "/ai-readiness-service-index",
  ];

  return [
    {
      url: SITE_URL,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...mainPaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: lastmod,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

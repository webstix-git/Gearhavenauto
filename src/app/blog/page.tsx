import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/blog/BlogIndexPage";
import { getAllPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Auto and diesel repair tips, maintenance guides, and shop news from Gearhaven Auto & Diesel in Nixa, MO. Practical advice for Missouri drivers.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Auto & Diesel Repair Blog | Gearhaven",
    description:
      "Maintenance checklists, diagnostic guides, diesel tips, and community news from your local Nixa repair shop.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogIndexPage posts={posts} />;
}

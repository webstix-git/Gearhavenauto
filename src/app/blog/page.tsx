import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/blog/BlogIndexPage";
import { getAllPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Auto & Diesel Repair Blog",
  description:
    "Practical auto and diesel tips from Gearhaven in Nixa, MO. Maintenance checklists, diagnostics guidance, and useful advice for Missouri drivers.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Auto & Diesel Repair Blog | Gearhaven",
    description:
      "Practical auto and diesel tips from Gearhaven in Nixa, MO. Maintenance checklists, diagnostics guidance, and useful advice for Missouri drivers.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogIndexPage posts={posts} />;
}

import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { BlogIndexPage } from "@/components/blog/BlogIndexPage";
import { JsonLd } from "@/components/JsonLd";
import { getAllPosts } from "@/data/blog-posts";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Auto & Diesel Repair Blog",
  description:
    "Practical auto and diesel tips from Gearhaven in Nixa, MO. Maintenance checklists, diagnostics guidance, and useful advice for Missouri drivers.",
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    title: "Auto & Diesel Repair Blog | Gearhaven",
    description:
      "Practical auto and diesel tips from Gearhaven in Nixa, MO. Maintenance checklists, diagnostics guidance, and useful advice for Missouri drivers.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/blog",
            name: "Auto & Diesel Repair Blog",
            description:
              "Practical auto and diesel tips from Gearhaven in Nixa, MO. Maintenance checklists, diagnostics guidance, and useful advice for Missouri drivers.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <BlogIndexPage posts={posts} />
    </>
  );
}

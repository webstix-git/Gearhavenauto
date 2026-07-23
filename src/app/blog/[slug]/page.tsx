import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/blog/BlogPostView";
import { JsonLd } from "@/components/JsonLd";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/blog-posts";
import {
  blogPostingSchema,
  breadcrumbSchema,
} from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: absoluteUrl(`/blog/${slug}`) },
    openGraph: {
      title: `${post.metaTitle} | Gearhaven`,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.metaTitle} | Gearhaven`,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />
      <BlogPostView post={post} related={related} />
    </>
  );
}

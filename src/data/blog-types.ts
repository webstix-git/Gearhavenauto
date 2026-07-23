export type BlogCategory =
  | "Diagnostics"
  | "Maintenance"
  | "Diesel"
  | "Shop News"
  | "Fleet"
  | "Community"
  | "Seasonal";

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  content: string;
};

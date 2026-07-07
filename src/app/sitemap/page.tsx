import type { Metadata } from "next";
import { UtilityPage } from "@/components/UtilityPage";
import { SITEMAP_HTML } from "@/lib/utility-pages-html";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "HTML sitemap for Gear Haven Auto & Diesel. Find services, company pages, blog posts, and contact information.",
  alternates: {
    canonical: "/sitemap",
  },
};

export default function Page() {
  return <UtilityPage html={SITEMAP_HTML} />;
}

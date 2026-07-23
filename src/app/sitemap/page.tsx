import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { UtilityPage } from "@/components/UtilityPage";
import { SITEMAP_HTML } from "@/lib/utility-pages-html";

export const metadata: Metadata = {
  title: "Website Sitemap",
  description:
    "Browse every Gearhaven Auto & Diesel page in one place—services, company info, blog articles, policies, and the best ways to contact our Nixa shop.",
  alternates: {
    canonical: absoluteUrl("/sitemap"),
  },
};

export default function Page() {
  return <UtilityPage html={SITEMAP_HTML} />;
}

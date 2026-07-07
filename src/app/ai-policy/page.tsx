import type { Metadata } from "next";
import { UtilityPage } from "@/components/UtilityPage";
import { AI_POLICY_HTML } from "@/lib/utility-pages-html";

export const metadata: Metadata = {
  title: "AI Policy",
  description:
    "AI Policy for Gear Haven Auto & Diesel. How we approach AI systems, website content, and customer information.",
  alternates: {
    canonical: "/ai-policy",
  },
};

export default function Page() {
  return <UtilityPage html={AI_POLICY_HTML} />;
}

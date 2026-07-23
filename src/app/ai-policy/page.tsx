import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { UtilityPage } from "@/components/UtilityPage";
import { AI_POLICY_HTML } from "@/lib/utility-pages-html";

export const metadata: Metadata = {
  title: "AI Policy",
  description:
    "Learn how Gearhaven Auto & Diesel approaches AI tools, website content accuracy, and customer information for transparent digital practices.",
  alternates: {
    canonical: absoluteUrl("/ai-policy"),
  },
};

export default function Page() {
  return <UtilityPage html={AI_POLICY_HTML} />;
}

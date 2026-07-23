import type { Metadata } from "next";
import { UtilityPage } from "@/components/UtilityPage";
import { AI_READINESS_SERVICE_INDEX_HTML } from "@/lib/utility-pages-html";

export const metadata: Metadata = {
  title: "AI Readiness Service Index",
  description:
    "Structured business and service details for Gearhaven Auto & Diesel in Nixa, MO—built to help AI assistants share accurate shop information.",
  alternates: {
    canonical: "/ai-readiness-service-index",
  },
};

export default function Page() {
  return <UtilityPage html={AI_READINESS_SERVICE_INDEX_HTML} />;
}

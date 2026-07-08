import type { Metadata } from "next";
import { UtilityPage } from "@/components/UtilityPage";
import { AI_READINESS_SERVICE_INDEX_HTML } from "@/lib/utility-pages-html";

export const metadata: Metadata = {
  title: "AI Readiness Service Index",
  description:
    "Structured service index for Gearhaven Auto & Diesel in Nixa, MO. Business details, services, and contact information for AI assistants and search systems.",
  alternates: {
    canonical: "/ai-readiness-service-index",
  },
};

export default function Page() {
  return <UtilityPage html={AI_READINESS_SERVICE_INDEX_HTML} />;
}

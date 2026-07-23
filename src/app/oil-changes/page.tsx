import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { OilChangesPage } from "@/components/OilChangesPage";

export const metadata: Metadata = {
  title: "Oil Changes in Nixa, MO",
  description:
    "Professional oil changes in Nixa for cars, trucks, and diesels. Quality oil, a careful multi-point check, and honest recommendations every visit.",
  alternates: {
    canonical: absoluteUrl("/oil-changes"),
  },
};

export default function Page() {
  return <OilChangesPage />;
}

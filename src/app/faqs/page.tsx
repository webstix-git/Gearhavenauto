import type { Metadata } from "next";
import { FaqsPage } from "@/components/FaqsPage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about vehicles we service, diagnostics, warranties, scheduling, and diesel repair at Gearhaven Auto & Diesel in Nixa, Missouri.",
  alternates: {
    canonical: "/faqs",
  },
};

export default function Page() {
  return <FaqsPage />;
}

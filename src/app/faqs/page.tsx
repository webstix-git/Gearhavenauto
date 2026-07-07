import type { Metadata } from "next";
import { FaqsPage } from "@/components/FaqsPage";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about auto and diesel repair at Gear Haven Auto & Diesel in Nixa, MO. Vehicles we service, warranties, diagnostics, and more.",
  alternates: {
    canonical: "/faqs",
  },
};

export default function Page() {
  return <FaqsPage />;
}

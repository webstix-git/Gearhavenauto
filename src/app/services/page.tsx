import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Auto & Diesel Repair Services",
  description:
    "Explore auto and diesel services in Nixa, MO—maintenance, diagnostics, tires, fleet care, truck upgrades, and post-accident mechanical repair.",
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}

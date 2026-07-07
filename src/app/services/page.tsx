import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete auto and diesel repair services in Nixa, MO. Maintenance, diagnostics, major repairs, tires, fleet service, and truck accessories.",
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}

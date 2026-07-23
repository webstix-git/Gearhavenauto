import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { ServicesPage } from "@/components/ServicesPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Auto & Diesel Repair Services",
  description:
    "Explore auto and diesel services in Nixa, MO—maintenance, diagnostics, tires, fleet care, truck upgrades, and post-accident mechanical repair.",
  alternates: {
    canonical: absoluteUrl("/services"),
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/services",
            name: "Auto & Diesel Repair Services",
            description:
              "Explore auto and diesel services in Nixa, MO—maintenance, diagnostics, tires, fleet care, truck upgrades, and post-accident mechanical repair.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <ServicesPage />
    </>
  );
}

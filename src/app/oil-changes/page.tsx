import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { OilChangesPage } from "@/components/OilChangesPage";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  namedServiceSchema,
  webPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Oil Changes in Nixa, MO",
  description:
    "Professional oil changes in Nixa for cars, trucks, and diesels. Quality oil, a careful multi-point check, and honest recommendations every visit.",
  alternates: {
    canonical: absoluteUrl("/oil-changes"),
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          namedServiceSchema({
            path: "/oil-changes",
            name: "Oil Changes",
            description:
              "Professional oil changes in Nixa for cars, trucks, and diesels. Quality oil, a careful multi-point check, and honest recommendations every visit.",
            serviceType: "Oil Change",
          }),
          webPageSchema({
            path: "/oil-changes",
            name: "Oil Changes in Nixa, MO",
            description:
              "Professional oil changes in Nixa for cars, trucks, and diesels. Quality oil, a careful multi-point check, and honest recommendations every visit.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Oil Changes", path: "/oil-changes" },
          ]),
        ]}
      />
      <OilChangesPage />
    </>
  );
}

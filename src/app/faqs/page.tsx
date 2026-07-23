import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { FaqsPage } from "@/components/FaqsPage";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers about vehicles we service, diagnostics, warranties, scheduling, and diesel repair at Gearhaven Auto & Diesel in Nixa, Missouri.",
  alternates: {
    canonical: absoluteUrl("/faqs"),
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/faqs",
            name: "Frequently Asked Questions",
            description:
              "Find answers about vehicles we service, diagnostics, warranties, scheduling, and diesel repair at Gearhaven Auto & Diesel in Nixa, Missouri.",
          }),
          faqPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
        ]}
      />
      <FaqsPage />
    </>
  );
}

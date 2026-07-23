import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { ReviewsPage } from "@/components/ReviewsPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials",
  description:
    "Read real customer reviews for Gearhaven Auto & Diesel in Nixa. See why Ozarks drivers trust us for honest repairs, clear answers, and reliable service.",
  alternates: {
    canonical: absoluteUrl("/reviews"),
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/reviews",
            name: "Customer Reviews & Testimonials",
            description:
              "Read real customer reviews for Gearhaven Auto & Diesel in Nixa. See why Ozarks drivers trust us for honest repairs, clear answers, and reliable service.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Reviews", path: "/reviews" },
          ]),
        ]}
      />
      <ReviewsPage />
    </>
  );
}

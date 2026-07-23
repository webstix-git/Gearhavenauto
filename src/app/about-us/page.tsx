import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { AboutPage } from "@/components/AboutPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About Our Nixa Auto & Diesel Shop",
  description:
    "Meet the Gearhaven team in Nixa. Learn our story, values, and how we deliver honest auto and diesel repair for drivers across the Ozarks every day.",
  alternates: {
    canonical: absoluteUrl("/about-us"),
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          {
            ...webPageSchema({
              path: "/about-us",
              name: "About Our Nixa Auto & Diesel Shop",
              description:
                "Meet the Gearhaven team in Nixa. Learn our story, values, and how we deliver honest auto and diesel repair for drivers across the Ozarks every day.",
            }),
            "@type": "AboutPage",
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
          ]),
        ]}
      />
      <AboutPage />
    </>
  );
}

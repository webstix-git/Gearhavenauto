import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { GalleryPage } from "@/components/GalleryPage";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Shop Photo Gallery",
  description:
    "See photos from Gearhaven Auto & Diesel in Nixa—shop work, diesel repairs, fleet service, and the vehicles we keep safely on the road every week.",
  alternates: {
    canonical: absoluteUrl("/gallery"),
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/gallery",
            name: "Shop Photo Gallery",
            description:
              "See photos from Gearhaven Auto & Diesel in Nixa—shop work, diesel repairs, fleet service, and the vehicles we keep safely on the road every week.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
        ]}
      />
      <GalleryPage />
    </>
  );
}

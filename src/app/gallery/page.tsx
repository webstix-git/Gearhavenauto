import type { Metadata } from "next";
import { GalleryPage } from "@/components/GalleryPage";

export const metadata: Metadata = {
  title: "Shop Photo Gallery",
  description:
    "See photos from Gearhaven Auto & Diesel in Nixa—shop work, diesel repairs, fleet service, and the vehicles we keep safely on the road every week.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function Page() {
  return <GalleryPage />;
}

import type { Metadata } from "next";
import { GalleryPage } from "@/components/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Gear Haven Auto & Diesel. Shop work, diesel repairs, fleet service, and more in Nixa, MO.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function Page() {
  return <GalleryPage />;
}

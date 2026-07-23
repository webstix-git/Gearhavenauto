import type { Metadata } from "next";
import { ReviewsPage } from "@/components/ReviewsPage";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials",
  description:
    "Read real customer reviews for Gearhaven Auto & Diesel in Nixa. See why Ozarks drivers trust us for honest repairs, clear answers, and reliable service.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function Page() {
  return <ReviewsPage />;
}

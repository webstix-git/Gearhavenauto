import type { Metadata } from "next";
import { ReviewsPage } from "@/components/ReviewsPage";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read customer reviews for Gear Haven Auto & Diesel in Nixa, MO. Trusted by drivers, diesel owners, and fleet managers across the Ozarks.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function Page() {
  return <ReviewsPage />;
}

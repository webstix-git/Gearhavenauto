import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Our Nixa Auto & Diesel Shop",
  description:
    "Meet the Gearhaven team in Nixa. Learn our story, values, and how we deliver honest auto and diesel repair for drivers across the Ozarks every day.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}

import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Gear Haven Auto & Diesel. Our story, values, and team serving Nixa and the Ozarks with honest auto and diesel repair.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}

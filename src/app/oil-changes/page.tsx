import type { Metadata } from "next";
import { OilChangesPage } from "@/components/OilChangesPage";

export const metadata: Metadata = {
  title: "Oil Changes",
  description:
    "Professional oil change service in Nixa, MO for cars, trucks, and diesel vehicles. Quality oil, thorough inspection, honest recommendations.",
  alternates: {
    canonical: "/oil-changes",
  },
};

export default function Page() {
  return <OilChangesPage />;
}

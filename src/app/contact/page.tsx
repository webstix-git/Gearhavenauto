import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Gear Haven Auto & Diesel in Nixa, MO. Call 417-319-4798, email office@gearhaven.com, or request an appointment online.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}

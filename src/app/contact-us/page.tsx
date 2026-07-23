import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { ContactPage } from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us in Nixa, MO",
  description:
    "Call 417-319-4798, email collen@gearhaven.com, or request an appointment online. Gearhaven Auto & Diesel is ready to help drivers in Nixa, MO.",
  alternates: {
    canonical: absoluteUrl("/contact-us"),
  },
};

export default function Page() {
  return <ContactPage />;
}

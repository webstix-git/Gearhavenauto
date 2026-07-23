import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { ContactPage } from "@/components/ContactPage";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  contactPageSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Us in Nixa, MO",
  description:
    "Call 417-319-4798, email collen@gearhaven.com, or request an appointment online. Gearhaven Auto & Diesel is ready to help drivers in Nixa, MO.",
  alternates: {
    canonical: absoluteUrl("/contact-us"),
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact-us" },
          ]),
        ]}
      />
      <ContactPage />
    </>
  );
}

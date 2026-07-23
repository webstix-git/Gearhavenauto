import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { UtilityPage } from "@/components/UtilityPage";
import { THANK_YOU_HTML } from "@/lib/utility-pages-html";

export const metadata: Metadata = {
  title: "Contact – Thank You",
  description:
    "Thanks for contacting us! We will get in touch with you shortly.",
  alternates: {
    canonical: absoluteUrl("/thank-you"),
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return <UtilityPage html={THANK_YOU_HTML} />;
}

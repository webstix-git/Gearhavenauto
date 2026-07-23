import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { UtilityPage } from "@/components/UtilityPage";
import { PRIVACY_POLICY_HTML } from "@/lib/utility-pages-html";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Gearhaven Auto & Diesel collects, uses, and protects your personal information when you contact us, book service, or use our website.",
  alternates: {
    canonical: absoluteUrl("/privacy-policy"),
  },
};

export default function Page() {
  return <UtilityPage html={PRIVACY_POLICY_HTML} />;
}

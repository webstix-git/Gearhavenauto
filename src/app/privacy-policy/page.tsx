import type { Metadata } from "next";
import { UtilityPage } from "@/components/UtilityPage";
import { PRIVACY_POLICY_HTML } from "@/lib/utility-pages-html";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Gearhaven Auto & Diesel. Learn how we collect, use, and protect your information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Page() {
  return <UtilityPage html={PRIVACY_POLICY_HTML} />;
}

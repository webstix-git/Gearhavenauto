import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getServicePage } from "@/data/service-pages";

const slug = "digital-inspection";
const data = getServicePage(slug)!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: absoluteUrl(`/${slug}`) },
};

export default function Page() {
  return <ServiceDetailPage slug={slug} />;
}

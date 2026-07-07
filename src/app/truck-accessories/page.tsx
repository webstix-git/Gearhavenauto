import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getServicePage } from "@/data/service-pages";

const slug = "truck-accessories";
const data = getServicePage(slug)!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: `/${slug}` },
};

export default function Page() {
  return <ServiceDetailPage slug={slug} />;
}

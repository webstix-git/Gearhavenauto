import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-url";
import { ServicePageWithSchema } from "@/components/ServicePageWithSchema";
import { getServicePage } from "@/data/service-pages";

const slug = "tires";
const data = getServicePage(slug)!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: absoluteUrl(`/${slug}`) },
};

export default function Page() {
  return <ServicePageWithSchema slug={slug} />;
}

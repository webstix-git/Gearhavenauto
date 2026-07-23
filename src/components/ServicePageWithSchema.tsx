import { JsonLd } from "@/components/JsonLd";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getServicePage } from "@/data/service-pages";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/structured-data";
import { notFound } from "next/navigation";

type Props = {
  slug: string;
};

export function ServicePageWithSchema({ slug }: Props) {
  const data = getServicePage(slug);
  if (!data) notFound();

  const schemas = [
    serviceSchema(data),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: data.breadcrumbLabel, path: `/${slug}` },
    ]),
    ...(data.faqs?.items?.length ? [faqPageSchema(data.faqs.items)] : []),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <ServiceDetailPage slug={slug} />
    </>
  );
}

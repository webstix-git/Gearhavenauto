"use client";

import { getServicePageHtml } from "@/data/service-pages";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";

type Props = {
  slug: string;
};

export function ServiceDetailPage({ slug }: Props) {
  const containerRef = useGhPageEffects();
  const html = getServicePageHtml(slug);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: html }}
      suppressHydrationWarning
    />
  );
}

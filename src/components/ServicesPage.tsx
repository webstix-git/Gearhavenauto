"use client";

import { SERVICES_HTML } from "@/generated/services-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import { withCurrentFooterSocials } from "@/lib/build-footer-html";

const PAGE_HTML = withCurrentFooterSocials(SERVICES_HTML);

export function ServicesPage() {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: PAGE_HTML }}
      suppressHydrationWarning
    />
  );
}

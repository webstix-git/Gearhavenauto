"use client";

import { FAQS_HTML } from "@/generated/faqs-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import { withCurrentFooterSocials } from "@/lib/build-footer-html";

const PAGE_HTML = withCurrentFooterSocials(FAQS_HTML);

export function FaqsPage() {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: PAGE_HTML }}
      suppressHydrationWarning
    />
  );
}

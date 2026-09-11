"use client";

import { ABOUT_HTML } from "@/generated/about-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import { withCurrentFooterSocials } from "@/lib/build-footer-html";

const PAGE_HTML = withCurrentFooterSocials(ABOUT_HTML);

export function AboutPage() {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: PAGE_HTML }}
      suppressHydrationWarning
    />
  );
}

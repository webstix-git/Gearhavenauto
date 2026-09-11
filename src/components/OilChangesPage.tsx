"use client";

import { OIL_CHANGES_HTML } from "@/generated/oil-changes-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import { withCurrentFooterSocials } from "@/lib/build-footer-html";

const PAGE_HTML = withCurrentFooterSocials(OIL_CHANGES_HTML);

export function OilChangesPage() {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: PAGE_HTML }}
      suppressHydrationWarning
    />
  );
}

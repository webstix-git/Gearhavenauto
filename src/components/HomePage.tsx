"use client";

import { PAGE_HTML } from "@/generated/page-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import { buildMonthlyPromoHtml } from "@/lib/build-monthly-promo-html";

const HOME_HTML = PAGE_HTML.replace(
  "  <!-- COMPLETE CARE -->",
  `${buildMonthlyPromoHtml()}\n\n  <!-- COMPLETE CARE -->`,
);

export function HomePage() {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: HOME_HTML }}
      suppressHydrationWarning
    />
  );
}

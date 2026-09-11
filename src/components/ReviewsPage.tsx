"use client";

import { REVIEWS_HTML } from "@/generated/reviews-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import { withCurrentFooterSocials } from "@/lib/build-footer-html";

const PAGE_HTML = withCurrentFooterSocials(REVIEWS_HTML);

export function ReviewsPage() {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: PAGE_HTML }}
      suppressHydrationWarning
    />
  );
}

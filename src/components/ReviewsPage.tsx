"use client";

import { REVIEWS_HTML } from "@/generated/reviews-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";

export function ReviewsPage() {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: REVIEWS_HTML }}
      suppressHydrationWarning
    />
  );
}

"use client";

import { FAQS_HTML } from "@/generated/faqs-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";

export function FaqsPage() {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: FAQS_HTML }}
      suppressHydrationWarning
    />
  );
}

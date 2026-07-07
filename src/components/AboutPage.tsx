"use client";

import { ABOUT_HTML } from "@/generated/about-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";

export function AboutPage() {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: ABOUT_HTML }}
      suppressHydrationWarning
    />
  );
}

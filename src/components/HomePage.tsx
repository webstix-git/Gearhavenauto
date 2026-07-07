"use client";

import { GhPopupBanner } from "@/components/GhPopupBanner";
import { PAGE_HTML } from "@/generated/page-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";

export function HomePage() {
  const containerRef = useGhPageEffects();

  return (
    <>
      <GhPopupBanner />
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: PAGE_HTML }}
        suppressHydrationWarning
      />
    </>
  );
}

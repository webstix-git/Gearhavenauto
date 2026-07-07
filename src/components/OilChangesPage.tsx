"use client";

import { OIL_CHANGES_HTML } from "@/generated/oil-changes-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";

export function OilChangesPage() {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: OIL_CHANGES_HTML }}
      suppressHydrationWarning
    />
  );
}

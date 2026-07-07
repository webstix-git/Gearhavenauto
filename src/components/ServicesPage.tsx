"use client";

import { SERVICES_HTML } from "@/generated/services-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";

export function ServicesPage() {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: SERVICES_HTML }}
      suppressHydrationWarning
    />
  );
}

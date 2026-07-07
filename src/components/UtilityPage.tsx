"use client";

import { useGhPageEffects } from "@/hooks/useGhPageEffects";

type UtilityPageProps = {
  html: string;
};

export function UtilityPage({ html }: UtilityPageProps) {
  const containerRef = useGhPageEffects();

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: html }}
      suppressHydrationWarning
    />
  );
}

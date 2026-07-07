"use client";

import { GALLERY_HTML } from "@/generated/gallery-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import { useGhGalleryLightbox } from "@/hooks/useGhPageInteractions";

export function GalleryPage() {
  const revealRef = useGhPageEffects();
  const lightboxRef = useGhGalleryLightbox();

  const setRef = (node: HTMLDivElement | null) => {
    revealRef.current = node;
    lightboxRef.current = node;
  };

  return (
    <div
      ref={setRef}
      dangerouslySetInnerHTML={{ __html: GALLERY_HTML }}
      suppressHydrationWarning
    />
  );
}

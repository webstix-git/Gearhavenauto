"use client";

import { GALLERY_HTML } from "@/generated/gallery-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import { useGhGalleryLightbox } from "@/hooks/useGhPageInteractions";
import { withCurrentFooterSocials } from "@/lib/build-footer-html";

const PAGE_HTML = withCurrentFooterSocials(GALLERY_HTML);

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
      dangerouslySetInnerHTML={{ __html: PAGE_HTML }}
      suppressHydrationWarning
    />
  );
}

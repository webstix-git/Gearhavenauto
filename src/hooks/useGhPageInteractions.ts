"use client";

import { useEffect, useRef } from "react";

export function useGhGalleryLightbox() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const lightbox = root.querySelector("#gh-lightbox") as HTMLElement | null;
    const lbImg = root.querySelector("#gh-lb-img") as HTMLImageElement | null;
    const lbCount = root.querySelector("#gh-lb-count") as HTMLElement | null;
    const closeBtn = root.querySelector("#gh-lb-close");
    const prevBtn = root.querySelector("#gh-lb-prev");
    const nextBtn = root.querySelector("#gh-lb-next");
    const tiles = Array.from(root.querySelectorAll(".gh-tile"));

    if (!lightbox || !lbImg || !tiles.length) return;

    const images = tiles.map(
      (tile) => tile.querySelector("img")?.getAttribute("src") || ""
    );
    let current = 0;

    const show = (idx: number) => {
      current = (idx + images.length) % images.length;
      lbImg.src = images[current];
      lbImg.alt = tiles[current]?.querySelector("img")?.alt || "Gallery photo";
      if (lbCount) lbCount.textContent = `${current + 1} / ${images.length}`;
      lightbox.style.display = "flex";
      document.body.style.overflow = "hidden";
    };

    const hide = () => {
      lightbox.style.display = "none";
      document.body.style.overflow = "";
    };

    const onTileClick = (idx: number) => () => show(idx);
    const tileHandlers = tiles.map((tile, idx) => {
      const handler = onTileClick(idx);
      tile.addEventListener("click", handler);
      return { tile, handler };
    });

    const onClose = () => hide();
    const onPrev = () => show(current - 1);
    const onNext = () => show(current + 1);
    const onKey = (e: KeyboardEvent) => {
      if (lightbox.style.display !== "flex") return;
      if (e.key === "Escape") hide();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    };
    const onBackdrop = (e: MouseEvent) => {
      if (e.target === lightbox) hide();
    };

    closeBtn?.addEventListener("click", onClose);
    prevBtn?.addEventListener("click", onPrev);
    nextBtn?.addEventListener("click", onNext);
    lightbox.addEventListener("click", onBackdrop);
    window.addEventListener("keydown", onKey);

    return () => {
      tileHandlers.forEach(({ tile, handler }) =>
        tile.removeEventListener("click", handler)
      );
      closeBtn?.removeEventListener("click", onClose);
      prevBtn?.removeEventListener("click", onPrev);
      nextBtn?.removeEventListener("click", onNext);
      lightbox.removeEventListener("click", onBackdrop);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  return containerRef;
}

export function useGhContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const form = containerRef.current?.querySelector(
      "#gh-form"
    ) as HTMLFormElement | null;
    if (!form) return;

    const onSubmit = (e: Event) => {
      e.preventDefault();
      const note = containerRef.current?.querySelector(
        "#gh-form-note"
      ) as HTMLElement | null;
      if (note) {
        note.style.display = "block";
        note.textContent =
          "Thanks! We received your request and will be in touch shortly.";
      }
      form.reset();
    };

    form.addEventListener("submit", onSubmit);
    return () => form.removeEventListener("submit", onSubmit);
  }, []);

  return containerRef;
}

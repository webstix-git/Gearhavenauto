"use client";

import { useEffect, useRef } from "react";
import {
  isValidInternationalPhone,
  PHONE_VALIDATION_MESSAGE,
} from "@/lib/phone";

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

    const phoneInput = form.querySelector(
      'input[name="phone"]'
    ) as HTMLInputElement | null;

    const clearPhoneError = () => {
      phoneInput?.setCustomValidity("");
    };

    const onSubmit = async (e: Event) => {
      e.preventDefault();
      const note = containerRef.current?.querySelector(
        "#gh-form-note"
      ) as HTMLElement | null;
      const submitBtn = form.querySelector(
        'button[type="submit"]'
      ) as HTMLButtonElement | null;

      if (phoneInput) {
        if (!isValidInternationalPhone(phoneInput.value)) {
          phoneInput.setCustomValidity(PHONE_VALIDATION_MESSAGE);
          phoneInput.reportValidity();
          return;
        }
        phoneInput.setCustomValidity("");
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      if (note) {
        note.style.display = "none";
        note.style.color = "#1F8A5B";
      }

      try {
        const action =
          form.getAttribute("action") ||
          "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/1642b3ec-d3da-4a7c-8b6f-3e64eb0c8d7e";
        const res = await fetch(action, {
          method: "POST",
          body: new FormData(form),
        });

        if (!res.ok) {
          throw new Error(`Form submit failed (${res.status})`);
        }

        window.location.href = "/thank-you";
      } catch {
        if (note) {
          note.style.display = "block";
          note.style.color = "#B42318";
          note.textContent =
            "Something went wrong. Please try again or call 417-319-4798.";
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Request";
        }
      }
    };

    phoneInput?.addEventListener("input", clearPhoneError);
    form.addEventListener("submit", onSubmit);
    return () => {
      phoneInput?.removeEventListener("input", clearPhoneError);
      form.removeEventListener("submit", onSubmit);
    };
  }, []);

  return containerRef;
}

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

    const applyPhoneValidity = () => {
      if (!phoneInput) return true;
      if (!isValidInternationalPhone(phoneInput.value)) {
        phoneInput.setCustomValidity(PHONE_VALIDATION_MESSAGE);
        return false;
      }
      phoneInput.setCustomValidity("");
      return true;
    };

    const onPhoneInput = () => {
      // Clear stale errors while typing; re-check when value looks complete enough
      if (!phoneInput) return;
      if (!phoneInput.value.trim()) {
        phoneInput.setCustomValidity("");
        return;
      }
      applyPhoneValidity();
    };

    const onPhoneBlur = () => {
      if (!phoneInput?.value.trim()) {
        phoneInput?.setCustomValidity("");
        return;
      }
      applyPhoneValidity();
      phoneInput?.reportValidity();
    };

    const onSubmit = async (e: Event) => {
      e.preventDefault();
      const note = containerRef.current?.querySelector(
        "#gh-form-note"
      ) as HTMLElement | null;
      const submitBtn = form.querySelector(
        'button[type="submit"]'
      ) as HTMLButtonElement | null;

      applyPhoneValidity();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
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
        const turnstileInput = form.querySelector(
          '[name="cf-turnstile-response"]'
        ) as HTMLInputElement | null;
        const turnstileToken = turnstileInput?.value?.trim() || "";
        if (!turnstileToken) {
          if (note) {
            note.style.display = "block";
            note.style.color = "#B42318";
            note.textContent = "Please complete the captcha before sending.";
          }
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send Request";
          }
          return;
        }

        const res = await fetch("/api/contact-submit", {
          method: "POST",
          body: new FormData(form),
        });

        const payload = (await res.json().catch(() => null)) as {
          ok?: boolean;
          error?: string;
        } | null;

        if (!res.ok || !payload?.ok) {
          throw new Error(payload?.error || `Form submit failed (${res.status})`);
        }

        window.location.href = "/thank-you";
      } catch (err) {
        if (note) {
          note.style.display = "block";
          note.style.color = "#B42318";
          note.textContent =
            err instanceof Error && err.message
              ? err.message
              : "Something went wrong. Please try again or call 417-319-4798.";
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Request";
        }
        const turnstile = (
          window as Window & {
            turnstile?: { reset: (el?: HTMLElement) => void };
          }
        ).turnstile;
        const widget = form.querySelector(".cf-turnstile") as HTMLElement | null;
        if (turnstile && widget) turnstile.reset(widget);
      }
    };

    phoneInput?.addEventListener("input", onPhoneInput);
    phoneInput?.addEventListener("blur", onPhoneBlur);
    form.addEventListener("submit", onSubmit);
    return () => {
      phoneInput?.removeEventListener("input", onPhoneInput);
      phoneInput?.removeEventListener("blur", onPhoneBlur);
      form.removeEventListener("submit", onSubmit);
    };
  }, []);

  return containerRef;
}

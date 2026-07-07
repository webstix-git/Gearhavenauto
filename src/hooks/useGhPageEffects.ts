"use client";

import { useEffect, useRef } from "react";

export function useGhPageEffects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = Array.from(
      containerRef.current?.querySelectorAll("[data-reveal]") ?? []
    ) as HTMLElement[];
    const pending = new Set(els);

    const update = () => {
      if (pending.size) {
        const trigger = (window.innerHeight || 800) * 0.92;
        pending.forEach((el) => {
          if (el.getBoundingClientRect().top < trigger) {
            el.classList.add("gh-revealed");
            pending.delete(el);
          }
        });
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();

    const fallback = window.setTimeout(() => {
      pending.forEach((el) => el.classList.add("gh-revealed"));
      pending.clear();
    }, 3000);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.clearTimeout(fallback);
    };
  }, []);

  return containerRef;
}

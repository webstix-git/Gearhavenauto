"use client";

import { useEffect } from "react";

export function GhHeaderScroll() {
  useEffect(() => {
    const header = document.getElementById("gh-header");
    const inner = document.getElementById("gh-header-inner");
    const logo = document.getElementById("gh-logo");
    let solidState: boolean | null = null;

    const applyState = (solid: boolean) => {
      if (solid === solidState) return;
      solidState = solid;
      if (header) {
        header.style.background = solid
          ? "#0E1720"
          : "rgba(14, 23, 32, 0.88)";
        header.style.boxShadow = solid
          ? "0 8px 28px -14px rgba(0,0,0,.7)"
          : "0 8px 24px -16px rgba(0,0,0,.45)";
      }
      if (inner) {
        const mobile = window.matchMedia("(max-width: 1024px)").matches;
        inner.style.padding = solid
          ? mobile
            ? "10px 20px"
            : "10px 40px"
          : mobile
            ? "14px 20px"
            : "14px 32px";
      }
      if (logo) logo.style.width = solid ? (window.matchMedia("(max-width: 1024px)").matches ? "120px" : "132px") : (window.matchMedia("(max-width: 1024px)").matches ? "160px" : "190px");
    };

    const update = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || 0;
      applyState(scrollTop > 40);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}

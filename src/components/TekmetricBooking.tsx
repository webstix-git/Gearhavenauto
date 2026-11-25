"use client";

import { useEffect } from "react";
import { TEKMETRIC_SHOP_ID } from "@/lib/tekmetric";

const CDN_SCRIPT = "https://booking.tekmetric.com/iframe/modal.js";
const CDN_STYLE = "https://booking.tekmetric.com/iframe/modal.css";
const LOCAL_SCRIPT = "/tekmetric/modal.js";
const LOCAL_STYLE = "/tekmetric/modal.css";

function loadStylesheet(href: string) {
  if (document.querySelector(`link[href^="${href.split("?")[0]}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(
      `script[src^="${src.split("?")[0]}"]`,
    ) as HTMLScriptElement | null;
    if (existing) {
      if (typeof window.onShowBooking === "function") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

/** Tekmetric online booking modal — shop embed */
export function TekmetricBooking() {
  useEffect(() => {
    window.tekmetricBooking = {
      shopId: TEKMETRIC_SHOP_ID,
      orgId: undefined,
    };

    const cacheBust = `?time=${Date.now()}`;

    loadStylesheet(CDN_STYLE + cacheBust);

    loadScript(CDN_SCRIPT + cacheBust).catch(() => {
      // CDN can be blocked (geo/WAF). Fall back to local copies.
      loadStylesheet(LOCAL_STYLE);
      return loadScript(LOCAL_SCRIPT);
    });
  }, []);

  return null;
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    oaiq?: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

/** OpenAI Ads pixel setup and site-wide page-view tracking. */
export function OpenAIAdsPixel() {
  const pathname = usePathname();

  useEffect(() => {
    window.oaiq?.("measure", "page_viewed", { type: "contents" });
  }, [pathname]);

  return null;
}

"use client";

import { useEffect } from "react";
import { TEKMETRIC_SHOP_ID } from "@/lib/tekmetric";

const SCRIPT_SRC = "https://booking.tekmetric.com/iframe/modal.js";
const STYLE_HREF = "https://booking.tekmetric.com/iframe/modal.css";

/** Tekmetric online booking modal — shop embed */
export function TekmetricBooking() {
  useEffect(() => {
    window.tekmetricBooking = {
      shopId: TEKMETRIC_SHOP_ID,
      orgId: undefined,
    };

    const cacheBust = `?time=${Date.now()}`;

    if (!document.querySelector(`script[src^="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC + cacheBust;
      script.defer = true;
      document.body.appendChild(script);
    }

    if (!document.querySelector(`link[href^="${STYLE_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = STYLE_HREF + cacheBust;
      document.head.appendChild(link);
    }
  }, []);

  return null;
}

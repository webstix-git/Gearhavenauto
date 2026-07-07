"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { POPUP_BANNER, POPUP_SESSION_KEY } from "@/lib/popup-banner";

export function GhPopupBanner() {
  const titleId = useId();
  const descId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(
      `${POPUP_SESSION_KEY}:${POPUP_BANNER.id}`
    );
    if (!dismissed) {
      setOpen(true);
    }
  }, []);

  const closePopup = useCallback(() => {
    sessionStorage.setItem(`${POPUP_SESSION_KEY}:${POPUP_BANNER.id}`, "1");
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closePopup]);

  if (!open) return null;

  return (
    <div className="gh-popup-root" role="presentation">
      <button
        type="button"
        className="gh-popup-backdrop"
        aria-label="Close announcement"
        onClick={closePopup}
      />
      <div
        className="gh-popup-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <button
          type="button"
          className="gh-popup-close"
          aria-label="Close announcement"
          onClick={closePopup}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div className="gh-popup-accent" aria-hidden="true" />

        <p className="gh-popup-eyebrow">{POPUP_BANNER.eyebrow}</p>
        <h2 id={titleId} className="gh-popup-title">
          {POPUP_BANNER.title}
        </h2>
        <p id={descId} className="gh-popup-body">
          {POPUP_BANNER.body}
        </p>

        <div className="gh-popup-actions">
          <Link
            href={POPUP_BANNER.ctaHref}
            className="gh-btn-solid gh-popup-cta"
            onClick={closePopup}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {POPUP_BANNER.ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

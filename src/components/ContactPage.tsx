"use client";

import Script from "next/script";
import { CONTACT_HTML } from "@/generated/contact-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import { useGhContactForm } from "@/hooks/useGhPageInteractions";

export function ContactPage() {
  const revealRef = useGhPageEffects();
  const formRef = useGhContactForm();

  const setRef = (node: HTMLDivElement | null) => {
    revealRef.current = node;
    formRef.current = node;
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div
        ref={setRef}
        dangerouslySetInnerHTML={{ __html: CONTACT_HTML }}
        suppressHydrationWarning
      />
    </>
  );
}

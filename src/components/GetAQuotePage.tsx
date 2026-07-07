"use client";

import { GET_A_QUOTE_HTML } from "@/generated/get-a-quote-content";
import { useGhPageEffects } from "@/hooks/useGhPageEffects";
import { useGhContactForm } from "@/hooks/useGhPageInteractions";

export function GetAQuotePage() {
  const revealRef = useGhPageEffects();
  const formRef = useGhContactForm();

  const setRef = (node: HTMLDivElement | null) => {
    revealRef.current = node;
    formRef.current = node;
  };

  return (
    <div
      ref={setRef}
      dangerouslySetInnerHTML={{ __html: GET_A_QUOTE_HTML }}
      suppressHydrationWarning
    />
  );
}

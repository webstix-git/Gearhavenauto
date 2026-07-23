/** Optional leading +, then digits with common separators only. */
const PHONE_FORMAT = /^\+?[\d\s().-]+$/;

/**
 * International phone validation (E.164 digit range).
 * Accepts formats like:
 * - +1 (417) 319-4798
 * - +44 7911 123456
 * - 417-319-4798
 *
 * Rules: optional leading "+", 8–15 digits total, separators allowed.
 */
export function isValidInternationalPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed || !PHONE_FORMAT.test(trimmed)) return false;

  // "+" only allowed as the first character
  if (trimmed.includes("+") && !trimmed.startsWith("+")) return false;

  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

/** Digits only, with leading + preserved when present (for storage/display). */
export function normalizeInternationalPhone(value: string): string {
  const trimmed = value.trim();
  const hasPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "");
  return hasPlus ? `+${digits}` : digits;
}

export const PHONE_VALIDATION_MESSAGE =
  "Enter a valid international phone number (8–15 digits). Example: +1 (417) 319-4798";

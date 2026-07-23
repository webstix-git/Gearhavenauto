/** Digits only, optional leading +, spaces / dashes / parentheses / dots allowed. */
const PHONE_FORMAT = /^\+?[\d\s().-]+$/;

/**
 * International-style phone check: 8–15 digits (E.164 range).
 * A leading "+" is optional.
 */
export function isValidInternationalPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed || !PHONE_FORMAT.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

export const PHONE_VALIDATION_MESSAGE =
  "Enter a valid phone number with 8–15 digits. The + is optional.";

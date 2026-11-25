export const TEKMETRIC_SHOP_ID = "12c01407-8e24-4a25-a1a5-368fc8910b10";

/** Inline HTML attribute for Tekmetric booking buttons */
export const TEKMETRIC_BOOK_ONCLICK = `onShowBooking('${TEKMETRIC_SHOP_ID}')`;

declare global {
  interface Window {
    onShowBooking?: (shopId: string) => void;
    tekmetricBooking?: {
      shopId: string;
      orgId: string | undefined;
    };
  }
}

export function openTekmetricBooking() {
  window.onShowBooking?.(TEKMETRIC_SHOP_ID);
}

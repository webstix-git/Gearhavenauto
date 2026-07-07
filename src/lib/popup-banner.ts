export type PopupBannerConfig = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  dismissLabel?: string;
};

/** Active site-wide pop-up. Swap `POPUP_BANNER` later for seasonal / inspection promos. */
export const POPUP_BANNER: PopupBannerConfig = {
  id: "rebrand-2026",
  eyebrow: "New Name. Expanded Services. Same Trusted Team.",
  title: "Tom's Diesel & Custom Truck is now Gear Haven Auto & Diesel",
  body: "We still provide the trusted diesel repair you've known for years, and now proudly offer complete auto repair and maintenance for cars, trucks, SUVs, and fleet vehicles.",
  ctaLabel: "Schedule Service",
  ctaHref: "/contact",
  dismissLabel: "Close",
};

/** Future promo — swap into `POPUP_BANNER` when ready. */
export const POPUP_BANNER_DIGITAL_INSPECTION: PopupBannerConfig = {
  id: "digital-inspection-2026",
  eyebrow: "Free Digital Vehicle Inspection",
  title: "Free Digital Vehicle Inspection with Diagnostic Service",
  body: "See exactly what our technicians see. Detailed photos, transparent recommendations, and honest guidance to help you make informed decisions about your vehicle.",
  ctaLabel: "Schedule Diagnostics",
  ctaHref: "/contact",
  dismissLabel: "Close",
};

/**
 * Update this file each month to refresh the homepage promotion.
 * Set `active: false` to hide the section between campaigns.
 */
export type MonthlyPromo = {
  active: boolean;
  /** Anchor id for ad landing links, e.g. /#promo */
  id: string;
  badge: string;
  headline: string;
  description: string;
  finePrint: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

export const MONTHLY_PROMO: MonthlyPromo = {
  active: true,
  id: "promo",
  badge: "September Special",
  headline: "Free Multipoint Inspection",
  description:
    "Get a free multipoint inspection with any service at Gearhaven.",
  finePrint: "Exclusions apply.",
  ctaLabel: "Call 417-319-4798",
  ctaHref: "tel:4173194798",
  image: "/images/promo-oil-change.png",
  imageAlt: "Technician working under the hood at Gearhaven Auto & Diesel",
};

import { getAllServiceSlugs } from "./service-pages";

export type NavItem = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  match?: string[];
  children?: NavItem[];
};

export const SERVICE_LINKS: NavItem[] = [
  { label: "All Services", href: "/services" },
  { label: "Oil Changes", href: "/oil-changes" },
  { label: "Tires", href: "/tires" },
  { label: "Preventive Maintenance", href: "/preventive-maintenance" },
  { label: "Truck Accessories", href: "/truck-accessories" },
  { label: "Fleet Vehicles", href: "/fleet-vehicles" },
  { label: "Free Digital Inspection", href: "/digital-inspection" },
  { label: "Auto Shop", href: "/auto-shop" },
  { label: "Collision Services", href: "/collision-services" },
];

const SERVICE_PATHS = [
  "/services",
  "/oil-changes",
  ...getAllServiceSlugs().map((slug) => `/${slug}`),
];

export const MAIN_NAV: NavLink[] = [
  { label: "Home", href: "/", match: ["/"] },
  {
    label: "Services",
    href: "/services",
    match: SERVICE_PATHS,
    children: SERVICE_LINKS,
  },
  { label: "About Us", href: "/about", match: ["/about"] },
  { label: "Testimonials", href: "/reviews", match: ["/reviews"] },
  { label: "Blog", href: "/blog", match: ["/blog"] },
  { label: "FAQs", href: "/faqs", match: ["/faqs"] },
  { label: "Gallery", href: "/gallery", match: ["/gallery"] },
  { label: "Contact Us", href: "/contact", match: ["/contact"] },
];

export function isNavActive(pathname: string, item: NavLink): boolean {
  if (!item.match?.length) return false;
  return item.match.some(
    (m) => pathname === m || (m !== "/" && pathname.startsWith(m + "/"))
  );
}

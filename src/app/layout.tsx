import type { Metadata, Viewport } from "next";
import { GhHeaderScroll } from "@/components/GhHeaderScroll";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import {
  localBusinessSchema,
  websiteSchema,
} from "@/lib/structured-data";
import { SITE_OG_IMAGE, SITE_OG_IMAGE_ALT } from "@/lib/site-info";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

const siteTitle = "Auto & Diesel Repair in Nixa, MO | Gearhaven";
const siteDescription =
  "Trusted auto and diesel repair in Nixa, MO for cars, trucks, and fleets. Honest recommendations, clear answers, and expert work you can count on.";

const shareImage = {
  url: SITE_OG_IMAGE,
  width: 1920,
  height: 800,
  alt: SITE_OG_IMAGE_ALT,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: "%s | Gearhaven",
  },
  description: siteDescription,
  keywords: [
    "auto repair",
    "diesel repair",
    "fleet services",
    "Nixa MO",
    "Ozarks",
    "Gearhaven Auto",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Gearhaven Auto & Diesel",
    title: siteTitle,
    description: siteDescription,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "noFD78y8_jsHhtJCq2frmQiGtX39Cuf5Cl4LVN2bgvA",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E1720",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <a href="#main-content" className="gh-skip-link">
          Skip to main content
        </a>
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
        <SiteHeader />
        <GhHeaderScroll />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}

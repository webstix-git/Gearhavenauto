import type { Metadata, Viewport } from "next";
import { GhHeaderScroll } from "@/components/GhHeaderScroll";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd } from "@/components/JsonLd";
import { SiteHeader } from "@/components/SiteHeader";
import {
  localBusinessSchema,
  websiteSchema,
} from "@/lib/structured-data";
import { SITE_URL } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Auto & Diesel Repair in Nixa, MO | Gearhaven",
    template: "%s | Gearhaven",
  },
  description:
    "Trusted auto and diesel repair in Nixa, MO for cars, trucks, and fleets. Honest recommendations, clear answers, and expert work you can count on.",
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
    title: "Auto & Diesel Repair in Nixa, MO | Gearhaven",
    description:
      "Trusted auto and diesel repair in Nixa, MO for cars, trucks, and fleets. Honest recommendations, clear answers, and expert work you can count on.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto & Diesel Repair in Nixa, MO | Gearhaven",
    description:
      "Trusted auto and diesel repair in Nixa, MO for cars, trucks, and fleets. Honest recommendations, clear answers, and expert work you can count on.",
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

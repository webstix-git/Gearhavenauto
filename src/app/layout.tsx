import type { Metadata, Viewport } from "next";
import { GhHeaderScroll } from "@/components/GhHeaderScroll";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gearhavenauto.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gearhaven Auto & Diesel",
    template: "%s | Gearhaven Auto & Diesel",
  },
  description:
    "Trusted auto and diesel repair for cars, trucks, and fleets in Nixa and the Ozarks. Honest recommendations, expert work, and clear communication.",
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
    url: siteUrl,
    siteName: "Gearhaven Auto & Diesel",
    title: "Gearhaven Auto & Diesel",
    description:
      "Your vehicle's safe haven. Trusted auto and diesel repair in Nixa and the Ozarks.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gearhaven Auto & Diesel",
    description:
      "Trusted auto and diesel repair for cars, trucks, and fleets in Nixa and the Ozarks.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
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
        <SiteHeader />
        <GhHeaderScroll />
        {children}
      </body>
    </html>
  );
}

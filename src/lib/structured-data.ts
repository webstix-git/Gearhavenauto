import type { BlogPost } from "@/data/blog-types";
import type { ServicePageData } from "@/data/service-pages";
import { SERVICE_LINKS } from "@/data/site-nav";
import {
  SITE_EMAIL,
  SITE_FACEBOOK_URL,
  SITE_MAPS_URL,
  SITE_PHONE,
} from "@/lib/site-info";
import { absoluteUrl, SITE_URL } from "@/lib/site-url";

export type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": ORG_ID,
    name: "Gearhaven Auto & Diesel",
    alternateName: "Gearhaven",
    url: SITE_URL,
    logo: absoluteUrl("/images/asset-0-a596b110.png"),
    image: absoluteUrl("/images/car-workshop.jpg"),
    description:
      "Full-service auto and diesel repair shop in Nixa, Missouri, serving cars, trucks, fleets, and diesel pickups across the Ozarks.",
    telephone: `+1-${SITE_PHONE}`,
    email: SITE_EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1556 N Commercial Rd.",
      addressLocality: "Nixa",
      addressRegion: "MO",
      postalCode: "65714",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.0742,
      longitude: -93.2941,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Nixa" },
      { "@type": "City", name: "Springfield" },
      { "@type": "City", name: "Ozark" },
      { "@type": "City", name: "Republic" },
      { "@type": "City", name: "Bolivar" },
      { "@type": "AdministrativeArea", name: "Southwest Missouri" },
    ],
    hasMap: SITE_MAPS_URL,
    sameAs: [SITE_FACEBOOK_URL],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+1-${SITE_PHONE}`,
      contactType: "customer service",
      email: SITE_EMAIL,
      areaServed: "US",
      availableLanguage: "English",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto & Diesel Services",
      itemListElement: SERVICE_LINKS.filter((l) => l.href !== "/services").map(
        (link) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: link.label,
            url: absoluteUrl(link.href),
          },
        })
      ),
    },
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "Gearhaven Auto & Diesel",
    description:
      "Trusted auto and diesel repair in Nixa, MO for cars, trucks, and fleets.",
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function webPageSchema(options: {
  path: string;
  name: string;
  description: string;
}): JsonLd {
  const url = absoluteUrl(options.path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: options.name,
    description: options.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(data: ServicePageData): JsonLd {
  const url = absoluteUrl(`/${data.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: data.breadcrumbLabel,
    description: data.metaDescription,
    url,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Southwest Missouri",
    },
    serviceType: data.breadcrumbLabel,
  };
}

export function namedServiceSchema(options: {
  path: string;
  name: string;
  description: string;
  serviceType: string;
}): JsonLd {
  const url = absoluteUrl(options.path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: options.name,
    description: options.description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Southwest Missouri",
    },
    serviceType: options.serviceType,
  };
}

export function blogPostingSchema(post: BlogPost): JsonLd {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.metaDescription,
    image: absoluteUrl(post.image),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: SITE_URL,
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: post.category,
    inLanguage: "en-US",
  };
}

export type FaqItem = { question: string; answer: string };

export const SITE_FAQS: FaqItem[] = [
  {
    question: "Do you work on gas vehicles?",
    answer:
      "Yes. While we're known for diesel expertise, we service most makes and models of cars, trucks, SUVs, and light-duty commercial vehicles.",
  },
  {
    question: "Do you work on diesel trucks?",
    answer:
      "Absolutely. Diesel repair remains one of our specialties, including Cummins, Duramax, and Power Stroke platforms.",
  },
  {
    question: "Do you service fleet vehicles?",
    answer:
      "Yes. We work with businesses throughout Southwest Missouri to provide maintenance, diagnostics, and repair services that help minimize downtime.",
  },
  {
    question: "Do you perform Missouri State Inspections?",
    answer: "Yes. Contact us to schedule your inspection.",
  },
  {
    question: "Do you offer digital vehicle inspections?",
    answer:
      "Yes. We provide detailed inspections with photos and explanations so you can clearly understand your vehicle's condition and recommended repairs.",
  },
  {
    question: "Do you work on tuned or deleted diesel trucks?",
    answer:
      "We can service many tuned or modified vehicles. However, we do not perform emissions deletes or remove federally required emissions equipment.",
  },
  {
    question: "Do you work on RVs?",
    answer: "No, RV service falls outside what our shop is equipped for.",
  },
  {
    question: "Do you work on semi trucks?",
    answer:
      "No. We focus on passenger vehicles, light-duty trucks, diesel pickups, and fleet vehicles.",
  },
  {
    question: "Do you work on golf carts, ATVs, or powersports vehicles?",
    answer:
      "No. Our shop specializes in automotive and light-duty truck repair.",
  },
  {
    question: "Do you work with extended warranties?",
    answer:
      "Yes. We work with many third-party and aftermarket warranty providers to help simplify the repair process.",
  },
  {
    question: "How much does a diagnostic cost?",
    answer:
      "Diagnostic pricing depends on the concern and vehicle. Contact our team and we'll explain the process and provide an estimate before work begins.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We proudly serve customers from Nixa, Ozark, Springfield, Republic, Highlandville, Bolivar, and communities throughout Southwest Missouri.",
  },
];

export function faqPageSchema(faqs: FaqItem[] = SITE_FAQS): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function contactPageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${absoluteUrl("/contact-us")}#webpage`,
    url: absoluteUrl("/contact-us"),
    name: "Contact Us",
    description:
      "Call, email, or request an appointment with Gearhaven Auto & Diesel in Nixa, MO.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: {
      "@type": "AutoRepair",
      "@id": ORG_ID,
      telephone: `+1-${SITE_PHONE}`,
      email: SITE_EMAIL,
    },
  };
}

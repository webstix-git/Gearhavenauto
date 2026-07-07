import { getAllPosts } from "@/data/blog-posts";
import { SERVICE_LINKS } from "@/data/site-nav";
import { SERVICE_PAGES } from "@/data/service-pages";
import { buildUtilityPageHtml } from "@/lib/build-utility-page-html";
import {
  SITE_ADDRESS_HTML,
  SITE_EMAIL,
  SITE_HOURS_CONTACT_HTML,
  SITE_PHONE,
} from "@/lib/site-info";

function linkGroup(title: string, links: { href: string; label: string }[]) {
  const items = links
    .map(
      (l) =>
        `<li style="margin-bottom:10px"><a href="${l.href}" style="color:#3E5C76;font-weight:600">${l.label}</a></li>`
    )
    .join("");

  return `<div data-reveal style="margin-bottom:36px">
      <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:24px;color:#14202B;margin:0 0 16px">${title}</h2>
      <ul style="list-style:none;margin:0;padding:0;font-size:18px;line-height:1.55;color:#5C6B76">${items}</ul>
    </div>`;
}

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
  { href: "/get-a-quote", label: "Get a Quote" },
];

const serviceLinks = [
  ...SERVICE_LINKS,
  ...SERVICE_PAGES.filter(
    (p) => !SERVICE_LINKS.some((l) => l.href === `/${p.slug}`)
  ).map((p) => ({ href: `/${p.slug}`, label: p.metaTitle })),
];

const blogLinks = getAllPosts().map((p) => ({
  href: `/blog/${p.slug}`,
  label: p.title,
}));

const legalLinks = [
  { href: "/sitemap", label: "Sitemap" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/ai-policy", label: "AI Policy" },
  { href: "/ai-readiness-service-index", label: "AI Readiness Service Index" },
];

export const SITEMAP_HTML = buildUtilityPageHtml({
  badge: "Site Map",
  title: "Sitemap",
  description:
    "Browse every page on the Gear Haven Auto & Diesel website, from services and testimonials to contact and resources.",
  breadcrumbLabel: "Sitemap",
  bodyHtml: `
    <p data-reveal style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0 0 40px;max-width:720px">Use this sitemap to find pages across our site quickly.</p>
    ${linkGroup("Main Pages", mainLinks)}
    ${linkGroup("Services", serviceLinks)}
    ${linkGroup("Blog", blogLinks)}
    ${linkGroup("Legal &amp; Resources", legalLinks)}
  `,
});

const privacySections = [
  {
    title: "Information we collect",
    body: `We may collect your name, phone number, email address, vehicle information, and service details when you contact us, request an appointment, or use forms on this website. We also collect basic technical data such as browser type and pages visited to improve site performance.`,
  },
  {
    title: "How we use your information",
    body: `We use your information to respond to inquiries, schedule service, provide estimates, communicate about repairs, and improve our website and customer experience. We do not sell your personal information.`,
  },
  {
    title: "Sharing information",
    body: `We may share information only when needed to operate our business, such as with payment processors, scheduling tools, or legal requirements. Any third-party providers we use are expected to protect your data appropriately.`,
  },
  {
    title: "Cookies and analytics",
    body: `This site may use cookies or similar technologies to remember preferences and understand how visitors use our pages. You can adjust cookie settings in your browser at any time.`,
  },
  {
    title: "Data security",
    body: `We take reasonable measures to protect information submitted through our website. No online transmission is completely secure, so please avoid sending sensitive information you do not want shared electronically.`,
  },
  {
    title: "Your choices",
    body: `You may request access to, correction of, or deletion of personal information we maintain, subject to legal and business record requirements. Contact us using the details below to make a request.`,
  },
  {
    title: "Contact us",
    body: `Gear Haven Auto &amp; Diesel<br>${SITE_ADDRESS_HTML}<br>Phone: <a href="tel:4173194798" style="color:#3E5C76;font-weight:600">${SITE_PHONE}</a><br>Email: <a href="mailto:${SITE_EMAIL}" style="color:#3E5C76;font-weight:600">${SITE_EMAIL}</a>`,
  },
];

export const PRIVACY_POLICY_HTML = buildUtilityPageHtml({
  badge: "Legal",
  title: "Privacy Policy",
  description:
    "How Gear Haven Auto & Diesel collects, uses, and protects information when you visit our website or contact our shop.",
  breadcrumbLabel: "Privacy Policy",
  maxWidth: "900px",
  bodyHtml: `
    <p data-reveal style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0 0 12px">Effective date: July 7, 2026</p>
    <p data-reveal style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0 0 40px">This Privacy Policy explains how Gear Haven Auto &amp; Diesel ("we," "us," or "our") handles information when you use gearhavenauto.com or contact our Nixa, Missouri shop.</p>
    ${privacySections
      .map(
        (s) => `<div data-reveal style="margin-bottom:32px">
      <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:24px;color:#14202B;margin:0 0 12px">${s.title}</h2>
      <p style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0">${s.body}</p>
    </div>`
      )
      .join("")}
  `,
});

const aiPolicySections = [
  {
    title: "Purpose of this policy",
    body: `This AI Policy explains how Gear Haven Auto &amp; Diesel approaches artificial intelligence (AI) systems that may read, summarize, or reference information from our website and shop communications. It is intended for visitors, customers, and AI assistants seeking accurate business information.`,
  },
  {
    title: "Public website content",
    body: `Information published on gearhavenauto.com, including service descriptions, hours, location, testimonials, and contact details, is provided for general informational purposes. AI systems may reference this content when answering questions about our shop, but summaries should be verified against our official pages.`,
  },
  {
    title: "Accuracy and limitations",
    body: `AI-generated responses about our business may be incomplete, outdated, or incorrect. Pricing, availability, repair timelines, and recommendations can change. Always contact our shop directly to confirm service details, appointments, and estimates before making decisions.`,
  },
  {
    title: "Customer communications",
    body: `If we use automated tools to help route messages, schedule requests, or draft internal notes, a team member reviews important service decisions. We do not rely on AI alone to approve repairs, pricing, or safety-related recommendations.`,
  },
  {
    title: "Privacy and data use",
    body: `Information you submit through our website or shop is handled according to our <a href="/privacy-policy" style="color:#3E5C76;font-weight:600">Privacy Policy</a>. We do not sell customer data for AI model training. Any third-party tools we use are expected to protect information appropriately.`,
  },
  {
    title: "Structured service information",
    body: `For machine-readable business and service details, see our <a href="/ai-readiness-service-index" style="color:#3E5C76;font-weight:600">AI Readiness Service Index</a>. That page is maintained to help search engines and AI assistants surface accurate service, contact, and location information.`,
  },
  {
    title: "Corrections and contact",
    body: `If you find inaccurate information about Gear Haven Auto &amp; Diesel in an AI response or on our website, please contact us so we can correct it.<br><br>Gear Haven Auto &amp; Diesel<br>${SITE_ADDRESS_HTML}<br>Phone: <a href="tel:4173194798" style="color:#3E5C76;font-weight:600">${SITE_PHONE}</a><br>Email: <a href="mailto:${SITE_EMAIL}" style="color:#3E5C76;font-weight:600">${SITE_EMAIL}</a>`,
  },
];

export const AI_POLICY_HTML = buildUtilityPageHtml({
  badge: "Legal",
  title: "AI Policy",
  description:
    "How Gear Haven Auto & Diesel approaches AI systems, website content accuracy, and customer information.",
  breadcrumbLabel: "AI Policy",
  maxWidth: "900px",
  bodyHtml: `
    <p data-reveal style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0 0 12px">Effective date: July 7, 2026</p>
    <p data-reveal style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0 0 40px">This AI Policy describes how Gear Haven Auto &amp; Diesel ("we," "us," or "our") handles information that may be used by artificial intelligence systems when referencing our business online.</p>
    ${aiPolicySections
      .map(
        (s) => `<div data-reveal style="margin-bottom:32px">
      <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:24px;color:#14202B;margin:0 0 12px">${s.title}</h2>
      <p style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0">${s.body}</p>
    </div>`
      )
      .join("")}
  `,
});

const serviceIndexRows = [
  { href: "/services", label: "All Services", description: "Overview of auto, diesel, fleet, and maintenance services." },
  { href: "/oil-changes", label: "Oil Changes", description: "Conventional, synthetic, and diesel oil change service." },
  ...SERVICE_PAGES.map((p) => ({
    href: `/${p.slug}`,
    label: p.metaTitle,
    description: p.metaDescription,
  })),
];

export const AI_READINESS_SERVICE_INDEX_HTML = buildUtilityPageHtml({
  badge: "AI Readiness",
  title: "AI Readiness Service Index",
  description:
    "A structured index of Gear Haven Auto & Diesel services, contact details, and service area information for search engines and AI assistants.",
  breadcrumbLabel: "AI Readiness Service Index",
  bodyHtml: `
    <div data-reveal style="margin-bottom:40px">
      <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:24px;color:#14202B;margin:0 0 14px">Business summary</h2>
      <p style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0 0 12px"><strong>Gear Haven Auto &amp; Diesel</strong> is a full-service auto and diesel repair shop in Nixa, Missouri, serving the Ozarks and surrounding communities. Formerly Tom's Diesel &amp; Custom Truck.</p>
      <p style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0"><strong>Primary services:</strong> diesel repair, auto repair, preventive maintenance, tires, fleet service, digital inspections, collision coordination, and truck accessories.</p>
    </div>

    <div data-reveal style="margin-bottom:40px">
      <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:24px;color:#14202B;margin:0 0 16px">Contact &amp; location</h2>
      <ul style="list-style:none;margin:0;padding:0;font-size:18px;line-height:1.8;color:#5C6B76">
        <li><strong>Address:</strong> ${SITE_ADDRESS_HTML}</li>
        <li><strong>Phone:</strong> <a href="tel:4173194798" style="color:#3E5C76;font-weight:600">${SITE_PHONE}</a></li>
        <li><strong>Email:</strong> <a href="mailto:${SITE_EMAIL}" style="color:#3E5C76;font-weight:600">${SITE_EMAIL}</a></li>
        <li><strong>Hours:</strong> ${SITE_HOURS_CONTACT_HTML}</li>
        <li><strong>Appointment:</strong> <a href="/contact" style="color:#3E5C76;font-weight:600">Contact page</a> or <a href="/get-a-quote" style="color:#3E5C76;font-weight:600">Get a Quote</a></li>
      </ul>
    </div>

    <div data-reveal style="margin-bottom:40px">
      <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:24px;color:#14202B;margin:0 0 16px">Service area</h2>
      <p style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0">Nixa, Missouri and the surrounding Ozarks, including Bolivar, Springfield, Ozark, Republic, and communities across southwest Missouri.</p>
    </div>

    <div data-reveal>
      <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:24px;color:#14202B;margin:0 0 20px">Service index</h2>
      <div style="display:flex;flex-direction:column;gap:16px">
        ${serviceIndexRows
          .map(
            (row) => `<article style="background:#fff;border:1px solid #E7E3DB;border-radius:14px;padding:22px 24px">
          <h3 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:20px;margin:0 0 8px"><a href="${row.href}" style="color:#14202B">${row.label}</a></h3>
          <p class="gh-card-desc" style="font-size:16px;line-height:1.6;color:#5C6B76;margin:0 0 8px">${row.description}</p>
          <p style="font-size:14px;color:#7C8B97;margin:0">URL: <a href="${row.href}" style="color:#3E5C76;font-weight:600">${row.href}</a></p>
        </article>`
          )
          .join("")}
      </div>
    </div>
  `,
});

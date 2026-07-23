import { SITE_COPYRIGHT_HTML } from "./site-info";

export const FOOTER_LEGAL_LINKS = [
  { href: "/sitemap", label: "Sitemap" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/ai-policy", label: "AI Policy" },
  { href: "/ai-readiness-service-index", label: "AI Readiness Service Index" },
] as const;

const FOOTER_PIPE =
  '<span aria-hidden="true" style="color:#C5D0DA;padding:0 2px">|</span>';

export function buildFooterBottomBarHtml(
  maxWidth = "1240px",
  linkClass = "gh-footer-legal-link"
): string {
  const linkItems = FOOTER_LEGAL_LINKS.map(
    (l) => `<a href="${l.href}" class="${linkClass}">${l.label}</a>`
  );

  const items = [
    `<span>${SITE_COPYRIGHT_HTML}</span>`,
    ...linkItems,
  ].join(FOOTER_PIPE);

  return `    <div style="border-top:1px solid rgba(255,255,255,.08)">
      <div class="gh-footer-bottom" style="max-width:${maxWidth};margin:0 auto;padding:20px 28px;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:10px;font-size:13px;color:#C5D0DA;text-align:center">
        ${items}
      </div>
    </div>`;
}

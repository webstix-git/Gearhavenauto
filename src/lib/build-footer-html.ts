import {
  SITE_ADDRESS_HTML,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_TEL,
} from "./site-info";
import { GH_ICON_EMAIL, GH_ICON_LOCATION, GH_ICON_PHONE } from "./gh-icons";
import { buildFooterBottomBarHtml } from "./footer-legal";

export type FooterLink = { href: string; label: string; className: string };

export type FooterOptions = {
  maxWidth?: string;
  servicesLinks: FooterLink[];
  companyLinks: FooterLink[];
  contactHoverClass: string;
};

export function buildGetInTouchHtml(contactHoverClass: string): string {
  return `<div style="display:flex;flex-direction:column;gap:14px;font-size:14.5px">
          <div style="display:flex;align-items:flex-start;gap:12px">
            ${GH_ICON_LOCATION()}
            <span style="line-height:1.5;color:#8FA0AD">${SITE_ADDRESS_HTML}</span>
          </div>
          <a href="tel:${SITE_PHONE_TEL}" style="display:flex;align-items:flex-start;gap:12px;color:#fff;font-weight:600;text-decoration:none" class="${contactHoverClass}">
            ${GH_ICON_PHONE()}
            <span>${SITE_PHONE}</span>
          </a>
          <a href="mailto:${SITE_EMAIL}" style="display:flex;align-items:flex-start;gap:12px;color:#8FA0AD;text-decoration:none" class="${contactHoverClass}">
            ${GH_ICON_EMAIL()}
            <span>${SITE_EMAIL}</span>
          </a>
        </div>`;
}

function linkList(links: FooterLink[]): string {
  return links
    .map(
      (l) =>
        `<a href="${l.href}" class="${l.className}">${l.label}</a>`
    )
    .join("\n          ");
}

export function buildFooterHtml(options: FooterOptions): string {
  const maxWidth = options.maxWidth ?? "1240px";

  return `  <!-- FOOTER -->
  <footer style="background:#0E1720;color:#8FA0AD">
    <div class="gh-footer-grid" style="max-width:${maxWidth};margin:0 auto;padding:60px 28px 32px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px">
      <div>
        <img src="/images/asset-0-a596b110.png" alt="Gear Haven Auto and Diesel" style="height:90px;width:auto;margin-bottom:18px">
        <p class="gh-footer-desc" style="font-size:14px;line-height:1.6;margin:0 0 18px;max-width:280px">Full-service auto &amp; diesel repair proudly serving Nixa and the Ozarks. Honest work, clear answers, treated like family.</p>
        <div style="font-size:13px;color:#5E6E7B">Formerly Tom's Diesel &amp; Custom Truck</div>
      </div>
      <div>
        <div style="color:#fff;font-weight:700;font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'">Services</div>
        <div class="gh-footer-services" style="display:flex;flex-direction:column;gap:10px;font-size:14.5px">
          ${linkList(options.servicesLinks)}
        </div>
      </div>
      <div>
        <div style="color:#fff;font-weight:700;font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'">Company</div>
        <div style="display:flex;flex-direction:column;gap:10px;font-size:14.5px">
          ${linkList(options.companyLinks)}
        </div>
      </div>
      <div>
        <div style="color:#fff;font-weight:700;font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'">Get in touch</div>
        ${buildGetInTouchHtml(options.contactHoverClass)}
      </div>
    </div>
${buildFooterBottomBarHtml(maxWidth)}
  </footer>`;
}

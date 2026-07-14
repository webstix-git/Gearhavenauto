import { buildFooterBottomBarHtml } from "./footer-legal";
import { buildFooterFollowUsHtml, buildGetInTouchHtml } from "./build-footer-html";

const BREADCRUMB_CHEVRON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A8B2BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>`;

const DEFAULT_SERVICES_LINKS = `
          <a href="/auto-shop" class="gh-footer-legal-link">Auto Repair &amp; Maintenance</a>
          <a href="/auto-shop" class="gh-footer-legal-link">Diesel Repair</a>
          <a href="/tires" class="gh-footer-legal-link">Tires &amp; Alignments</a>
          <a href="/fleet-vehicles" class="gh-footer-legal-link">Fleet Services</a>
          <a href="/digital-inspection" class="gh-footer-legal-link">Free Digital Inspection</a>`;

const DEFAULT_COMPANY_LINKS = `
          <a href="/about" class="gh-footer-legal-link">About Us</a>
          <a href="/reviews" class="gh-footer-legal-link">Reviews</a>
          <a href="/blog" class="gh-footer-legal-link">Blog</a>
          <a href="/gallery" class="gh-footer-legal-link">Gallery</a>
          <a href="/faqs" class="gh-footer-legal-link">FAQs</a>
          <a href="/contact" class="gh-footer-legal-link">Contact Us</a>`;

export type UtilityPageOptions = {
  badge: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
  bodyHtml: string;
  maxWidth?: string;
};

export function buildUtilityPageHtml(options: UtilityPageOptions): string {
  const contentMax = options.maxWidth ?? "1240px";

  return `<div style="min-height:100vh;overflow-x:hidden">

  <section id="top" style="position:relative;background:#0E1720;overflow:hidden">
    <div id="gh-sentinel" style="position:absolute;top:0;left:0;width:1px;height:70px;pointer-events:none"></div>
    <div style="position:absolute;inset:0;background:linear-gradient(135deg,#14202B 0%,#2C4257 55%,#3E5C76 100%)"></div>
    <div style="position:relative;max-width:1240px;margin:0 auto;padding:200px 28px 88px" class="gh-hero-inner gh-utility-hero-inner">
      <div style="max-width:760px">
        <div data-reveal style="display:inline-flex;align-items:center;gap:9px;background:rgba(109,157,197,.18);border:1px solid rgba(109,157,197,.45);color:#CFE0EE;font-weight:600;font-size:13.5px;letter-spacing:.4px;text-transform:uppercase;padding:8px 15px;border-radius:100px;margin-bottom:26px">
          <span style="width:7px;height:7px;border-radius:50%;background:#6D9DC5"></span>${options.badge}
        </div>
        <h1 data-reveal style="font-family:'Bricolage Grotesque';font-weight:700;font-size:52px;line-height:1.06;letter-spacing:-1.4px;color:#fff;margin:0 0 18px">${options.title}</h1>
        <p data-reveal style="font-size:18px;line-height:1.6;color:#CBD6E0;font-weight:500;margin:0;max-width:640px">${options.description}</p>
      </div>
    </div>
  </section>

  <nav aria-label="Breadcrumb" class="gh-breadcrumb" style="background:#F6F4F0;border-bottom:1px solid #E7E4DD">
    <div style="max-width:1240px;margin:0 auto;padding:14px 28px;display:flex;align-items:center;gap:10px;font-size:14.5px;color:#5C6B76">
      <a href="/" style="color:#3E5C76;font-weight:600">Home</a>
      ${BREADCRUMB_CHEVRON}
      <span style="color:#14202B;font-weight:600">${options.breadcrumbLabel}</span>
    </div>
  </nav>

  <section class="gh-section-pad" style="max-width:${contentMax};margin:0 auto;padding:80px 28px 48px">
    ${options.bodyHtml}
  </section>

  <footer style="background:#0E1720;color:#8FA0AD">
    <div class="gh-footer-grid" style="max-width:1240px;margin:0 auto;padding:60px 28px 32px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px">
      <div>
        <img src="/images/asset-0-a596b110.png" alt="Gearhaven Auto and Diesel" style="height:90px;width:auto;margin-bottom:18px">
        <p class="gh-footer-desc" style="font-size:14px;line-height:1.6;margin:0 0 18px;max-width:280px">Full-service auto &amp; diesel repair proudly serving Nixa and the Ozarks. Honest work, clear answers, treated like family.</p>
        ${buildFooterFollowUsHtml()}
      </div>
      <div>
        <div style="color:#fff;font-weight:700;font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'">Services</div>
        <div class="gh-footer-services" style="display:flex;flex-direction:column;gap:10px;font-size:14.5px">${DEFAULT_SERVICES_LINKS}
        </div>
      </div>
      <div>
        <div style="color:#fff;font-weight:700;font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'">Company</div>
        <div style="display:flex;flex-direction:column;gap:10px;font-size:14.5px">${DEFAULT_COMPANY_LINKS}
        </div>
      </div>
      <div>
        <div style="color:#fff;font-weight:700;font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'">Get in touch</div>
        ${buildGetInTouchHtml("gh-footer-legal-link")}
      </div>
    </div>
${buildFooterBottomBarHtml("1240px")}
  </footer>

</div>`;
}

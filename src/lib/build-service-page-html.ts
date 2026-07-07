import type { ServicePageData } from "@/data/service-pages";
import { buildFooterBottomBarHtml } from "./footer-legal";
import { SITE_ADDRESS_HTML } from "./site-info";
import {
  BREADCRUMB_CHEVRON,
  CHECK_ICON,
  PHONE_CTA_ICON,
  SERVICE_ICONS,
} from "@/lib/service-page-icons";

function icon(name: string) {
  return SERVICE_ICONS[name] ?? SERVICE_ICONS.wrench;
}

function statBlock(stats: ServicePageData["why"]["stats"]) {
  return stats
    .map((s, i) => {
      const divider =
        i < stats.length - 1
          ? '<div style="width:1px;background:#E7E4DD"></div>'
          : "";
      return `<div><div style="font-family:'Bricolage Grotesque';font-weight:800;font-size:26px;color:#14202B">${s.value}</div><div style="font-size:14px;color:#7C8B97">${s.label}</div></div>${divider}`;
    })
    .join("");
}

function includedCards(items: ServicePageData["included"]["items"]) {
  return items
    .map(
      (item) => `
        <div data-reveal style="background:#F6F4F0;border:1px solid #E7E3DB;border-radius:16px;padding:28px">
          <span style="display:grid;place-items:center;width:50px;height:50px;border-radius:13px;background:linear-gradient(135deg,#3E5C76,#2C4257);color:#fff;margin-bottom:18px">${icon(item.icon)}</span>
          <h3 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:19px;margin:0 0 8px;color:#14202B">${item.title}</h3>
          <p class="gh-card-desc" style="font-size:16px;line-height:1.6;color:#5C6B76;margin:0">${item.description}</p>
        </div>`
    )
    .join("");
}

function signItems(items: string[]) {
  return items
    .map(
      (text) =>
        `<div style="display:flex;align-items:center;gap:12px;font-size:18px;color:#3D4B56;font-weight:500">${CHECK_ICON}${text}</div>`
    )
    .join("");
}

function processSteps(steps: ServicePageData["process"]["steps"]) {
  return steps
    .map((step, i) => {
      return `
          <div style="display:flex;gap:16px;align-items:flex-start"><span style="flex:none;display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:#3E5C76;color:#fff;font-family:'Bricolage Grotesque';font-weight:700;font-size:15px">${i + 1}</span><div><div style="font-weight:700;font-size:16.5px;color:#14202B;margin-bottom:2px">${step.title}</div><div style="font-size:18px;line-height:1.55;color:#5C6B76">${step.description}</div></div></div>`;
    })
    .join("");
}

function optionsSection(data: ServicePageData) {
  if (!data.options) return "";
  const desc = data.options.description
    ? `<p style="font-size:18px;line-height:1.6;color:#5C6B76;margin:0">${data.options.description}</p>`
    : "";
  const cols = data.options.items.length <= 3 ? 3 : 4;
  const cards = data.options.items
    .map(
      (item) => `
      <div data-reveal style="background:#fff;border:1px solid #E7E3DB;border-top:4px solid #3E5C76;border-radius:16px;padding:30px 26px">
        <h3 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:20px;margin:0 0 8px;color:#14202B">${item.title}</h3>
        <p class="gh-card-desc" style="font-size:16px;line-height:1.6;color:#5C6B76;margin:0">${item.description}</p>
      </div>`
    )
    .join("");

  return `
  <section style="max-width:1240px;margin:0 auto;padding:92px 28px">
    <div data-reveal style="max-width:620px;margin-bottom:48px">
      <div style="display:inline-flex;align-items:center;gap:9px;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#3E5C76;margin-bottom:16px"><span style="width:26px;height:2px;background:#6D9DC5"></span>${data.options.label}</div>
      <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:40px;line-height:1.08;letter-spacing:-1px;margin:0 0 12px;color:#14202B">${data.options.title}</h2>
      ${desc}
    </div>
    <div class="gh-grid-${cols === 4 ? "4" : "3"}" style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:20px">
      ${cards}
    </div>
  </section>`;
}

export function buildServicePageHtml(data: ServicePageData): string {
  return `<div class="gh-service-page" style="min-height:100vh;overflow-x:hidden">

  <!-- HERO -->
  <section id="top" style="position:relative;background:#0E1720;overflow:hidden">
    <div id="gh-sentinel" style="position:absolute;top:0;left:0;width:1px;height:70px;pointer-events:none"></div>
    <div style="position:absolute;inset:0;overflow:hidden">
      <img src="${data.hero.image}" alt="${data.hero.imageAlt}" style="width:100%;height:100%;object-fit:cover;animation:gh-kenburns 22s ease-in-out infinite alternate">
    </div>
    <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(14,23,32,.95) 0%,rgba(20,32,45,.86) 50%,rgba(20,32,45,.55) 100%)"></div>
    <div class="gh-hero-inner" style="position:relative;max-width:1240px;margin:0 auto;padding:216px 28px 104px">
      <div style="max-width:730px">
        <h1 data-reveal style="font-family:'Bricolage Grotesque';font-weight:700;font-size:58px;line-height:1.04;letter-spacing:-1.6px;color:#fff;margin:0 0 22px">${data.hero.title}</h1>
        <p data-reveal style="font-size:19.5px;line-height:1.55;color:#CBD6E0;font-weight:500;margin:0 0 34px;max-width:600px">${data.hero.description}</p>
        <div data-reveal style="display:flex;gap:14px;flex-wrap:wrap">
          <a href="${data.hero.ctaHref}" class="gh-btn-solid" style="display:inline-flex;align-items:center;gap:10px;background:rgb(61, 109, 146);color:#fff;font-weight:700;font-size:16.5px;padding:16px 30px;border-radius:9px;box-shadow:0 8px 20px -8px rgba(61,109,146,.45)">${data.hero.ctaLabel}</a>
          <a href="tel:4173194798" class="gh-btn-outline" style="display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.35);color:#fff;font-weight:700;font-size:16.5px;padding:16px 30px;border-radius:9px">Call 417-319-4798</a>
        </div>
      </div>
    </div>
  </section>
  <!-- BREADCRUMBS -->
  <nav aria-label="Breadcrumb" class="gh-breadcrumb" style="background:#F6F4F0;border-bottom:1px solid #E7E4DD">
    <div style="max-width:1240px;margin:0 auto;padding:14px 28px;display:flex;align-items:center;gap:10px;font-size:14.5px;color:#5C6B76">
      <a href="/" style="color:#3E5C76;font-weight:600">Home</a>
      ${BREADCRUMB_CHEVRON}
      <a href="/services" style="color:#3E5C76;font-weight:600">Services</a>
      ${BREADCRUMB_CHEVRON}
      <span style="color:#14202B;font-weight:600">${data.breadcrumbLabel}</span>
    </div>
  </nav>

  <!-- WHY IT MATTERS -->
  <section style="max-width:1240px;margin:0 auto;padding:92px 28px" class="gh-section-pad">
    <div class="gh-grid-asymmetric" style="display:grid;grid-template-columns:1.05fr .95fr;gap:60px;align-items:center">
      <div data-reveal>
        <div style="display:inline-flex;align-items:center;gap:9px;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#3E5C76;margin-bottom:16px"><span style="width:26px;height:2px;background:#6D9DC5"></span>${data.why.label}</div>
        <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:40px;line-height:1.08;letter-spacing:-1px;margin:0 0 20px;color:#14202B">${data.why.title}</h2>
        <p style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0 0 16px">${data.why.paragraphs[0]}</p>
        <p style="font-size:18px;line-height:1.65;color:#5C6B76;margin:0 0 26px">${data.why.paragraphs[1]}</p>
        <div style="display:flex;gap:30px;flex-wrap:wrap">
          ${statBlock(data.why.stats)}
        </div>
      </div>
      <div data-reveal style="position:relative">
        <img src="${data.why.image}" alt="${data.why.imageAlt}" style="width:100%;height:460px;object-fit:cover;border-radius:18px;box-shadow:0 30px 60px -30px rgba(20,32,45,.55)">
      </div>
    </div>
  </section>

  <!-- WHAT'S INCLUDED -->
  <section style="background:#fff;border-top:1px solid #EAE7E0;border-bottom:1px solid #EAE7E0">
    <div style="max-width:1240px;margin:0 auto;padding:88px 28px">
      <div data-reveal style="max-width:620px;margin-bottom:48px">
        <div style="display:inline-flex;align-items:center;gap:9px;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#3E5C76;margin-bottom:16px"><span style="width:26px;height:2px;background:#6D9DC5"></span>${data.included.label}</div>
        <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:40px;line-height:1.08;letter-spacing:-1px;margin:0;color:#14202B">${data.included.title}</h2>
      </div>
      <div class="gh-grid-3" style="display:grid;grid-template-columns:repeat(3,1fr);gap:22px">
        ${includedCards(data.included.items)}
      </div>
    </div>
  </section>

  ${optionsSection(data)}

  <!-- SIGNS + PROCESS -->
  <section style="background:#F1EDE6;border-top:1px solid #E6E2DA;border-bottom:1px solid #E6E2DA">
    <div class="gh-section-pad gh-grid-2" style="max-width:1240px;margin:0 auto;padding:88px 28px;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start">
      <div data-reveal>
        <div style="display:inline-flex;align-items:center;gap:9px;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#3E5C76;margin-bottom:16px"><span style="width:26px;height:2px;background:#6D9DC5"></span>${data.signs.label}</div>
        <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:32px;line-height:1.1;letter-spacing:-.8px;margin:0 0 22px;color:#14202B">${data.signs.title}</h2>
        <div style="display:flex;flex-direction:column;gap:14px">
          ${signItems(data.signs.items)}
        </div>
      </div>
      <div data-reveal>
        <div style="display:inline-flex;align-items:center;gap:9px;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#3E5C76;margin-bottom:16px"><span style="width:26px;height:2px;background:#6D9DC5"></span>${data.process.label}</div>
        <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:32px;line-height:1.1;letter-spacing:-.8px;margin:0 0 24px;color:#14202B">${data.process.title}</h2>
        <div style="display:flex;flex-direction:column;gap:20px">
          ${processSteps(data.process.steps)}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section id="contact" style="background:#2C4257;color:#fff;position:relative;overflow:hidden">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 80% 20%,rgba(62,92,118,.7),transparent 60%)"></div>
    <div data-reveal style="position:relative;max-width:900px;margin:0 auto;padding:86px 28px;text-align:center">
      <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:44px;line-height:1.06;letter-spacing:-1.2px;margin:0 0 16px">${data.cta.title}</h2>
      <p style="font-size:18px;line-height:1.6;color:#C6D2DD;margin:0 auto 32px;max-width:540px">${data.cta.description}</p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;justify-content:center;align-items:center">
        <a href="tel:4173194798" style="display:inline-flex;align-items:center;gap:11px;background:rgb(61, 109, 146);color:#fff;font-weight:700;font-size:18px;padding:17px 30px;border-radius:10px" class="gh-cta-phone gh-btn-solid gh-hover-svc">
          ${PHONE_CTA_ICON}
          417-319-4798
        </a>
        <a href="/contact" style="display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.35);color:#fff;font-weight:700;font-size:16.5px;padding:16px 28px;border-radius:10px" class="gh-btn-outline">Request Appointment</a>
        <a href="/services#top" style="display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.1);border:1.5px solid rgba(255,255,255,.35);color:#fff;font-weight:700;font-size:16.5px;padding:16px 28px;border-radius:10px" class="gh-btn-outline">All Services</a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer style="background:#0E1720;color:#8FA0AD">
    <div class="gh-footer-grid" style="max-width:1240px;margin:0 auto;padding:60px 28px 32px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px">
      <div>
        <img src="/images/asset-0-a596b110.png" alt="Gear Haven Auto and Diesel" style="height:90px;width:auto;margin-bottom:18px">
        <p class="gh-footer-desc" style="font-size:14px;line-height:1.6;margin:0 0 18px;max-width:280px">Full-service auto &amp; diesel repair proudly serving Nixa and the Ozarks. Honest work, clear answers, treated like family.</p>
        <div style="font-size:13px;color:#5E6E7B">Formerly Tom's Diesel &amp; Custom Truck</div>
      </div>
      <div>
        <div style="color:#fff;font-weight:700;font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'">Services</div>
        <div class="gh-footer-services" style="display:flex;flex-direction:column;gap:10px;font-size:14.5px">
          <a href="/oil-changes" class="gh-hover-svc">Oil Changes</a>
          <a href="/auto-shop" class="gh-hover-svc">Auto Shop</a>
          <a href="/tires" class="gh-hover-svc">Tires &amp; Alignments</a>
          <a href="/fleet-vehicles" class="gh-hover-svc">Fleet Services</a>
          <a href="/digital-inspection" class="gh-hover-svc">Free Digital Inspection</a>
        </div>
      </div>
      <div>
        <div style="color:#fff;font-weight:700;font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'">Company</div>
        <div style="display:flex;flex-direction:column;gap:10px;font-size:14.5px">
          <a href="/about" class="gh-hover-svc">About Us</a>
          <a href="/about#team" class="gh-hover-svc">Our Team</a>
          <a href="/reviews" class="gh-hover-svc">Reviews</a>
          <a href="/faqs" class="gh-hover-svc">FAQ</a>
          <a href="/contact" class="gh-hover-svc">Contact Us</a>
        </div>
      </div>
      <div>
        <div style="color:#fff;font-weight:700;font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'">Get in touch</div>
        <div style="display:flex;flex-direction:column;gap:14px;font-size:14.5px">
          <div style="display:flex;align-items:flex-start;gap:12px">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span style="line-height:1.5;color:#8FA0AD">${SITE_ADDRESS_HTML}</span>
          </div>
          <a href="tel:4173194798" style="display:flex;align-items:flex-start;gap:12px;color:#fff;font-weight:600;text-decoration:none" class="gh-hover-svc">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>417-319-4798</span>
          </a>
          <a href="mailto:office@gearhaven.com" style="display:flex;align-items:flex-start;gap:12px;color:#8FA0AD;text-decoration:none" class="gh-hover-svc">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg>
            <span>office@gearhaven.com</span>
          </a>
        </div>
      </div>
    </div>
${buildFooterBottomBarHtml("1240px")}
  </footer>

</div>`;
}

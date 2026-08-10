import { MONTHLY_PROMO, type MonthlyPromo } from "@/data/monthly-promo";
import { PHONE_CTA_ICON } from "@/lib/service-page-icons";

export function buildMonthlyPromoHtml(
  promo: MonthlyPromo = MONTHLY_PROMO,
): string {
  if (!promo.active) return "";

  return `
  <!-- MONTHLY PROMO -->
  <section id="${promo.id}" class="gh-monthly-promo" style="background:#F6F4F0;border-top:1px solid #E7E4DD;border-bottom:1px solid #E7E4DD">
    <div class="gh-section-pad" style="max-width:1320px;margin:0 auto;padding:40px 28px">
      <div data-reveal class="gh-diesel-banner gh-grid-asymmetric gh-monthly-promo-banner" style="position:relative;display:grid;grid-template-columns:1.1fr .9fr;border-radius:22px;overflow:hidden;background:#12202D;box-shadow:0 34px 64px -34px rgba(20,32,45,.55)">
        <div class="gh-monthly-promo-copy" style="padding:42px 44px 46px;display:flex;flex-direction:column;justify-content:center">
          <div style="display:inline-flex;align-items:center;gap:9px;align-self:flex-start;background:rgba(109,157,197,.18);border:1px solid rgba(109,157,197,.45);color:#ffffff;font-weight:600;font-size:13px;letter-spacing:.4px;text-transform:uppercase;padding:7px 14px;border-radius:100px;margin-bottom:18px">
            <span style="width:7px;height:7px;border-radius:50%;background:#6D9DC5"></span>${promo.badge}
          </div>
          <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:36px;line-height:1.08;letter-spacing:-.8px;color:#fff;margin:0 0 14px">${promo.headline}</h2>
          <p style="font-size:17px;line-height:1.6;color:#E8F0F7;margin:0 0 10px">${promo.description}</p>
          <p style="font-size:14px;line-height:1.5;color:#8FA0AD;margin:0 0 26px">${promo.finePrint}</p>
          <div>
            <a href="${promo.ctaHref}" class="gh-btn-solid gh-cta-phone" style="display:inline-flex;align-items:center;gap:10px;background:rgb(61, 109, 146);color:#fff;font-weight:700;font-size:15.5px;padding:14px 24px;border-radius:9px;box-shadow:0 8px 20px -8px rgba(61,109,146,.45)">${PHONE_CTA_ICON}${promo.ctaLabel}</a>
          </div>
        </div>
        <div style="position:relative;min-height:300px">
          <img src="${promo.image}" alt="${promo.imageAlt}" style="width:100%;height:100%;object-fit:cover;display:block">
          <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(18,32,45,.7) 0%,rgba(18,32,45,.35) 32%,rgba(18,32,45,.1) 58%,rgba(18,32,45,0) 78%)"></div>
        </div>
      </div>
    </div>
  </section>`;
}

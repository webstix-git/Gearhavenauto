const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src");

const HOURS_WEEKDAY = "Monday &ndash; Friday, 8:00 AM &ndash; 5:00 PM";
const HOURS_WEEKDAY_PLAIN = "Monday – Friday, 8:00 AM – 5:00 PM";
const HOURS_WEEKEND_HTML = "Saturday &amp; Sunday: Closed";
const HOURS_CONTACT = `${HOURS_WEEKDAY}<br>${HOURS_WEEKEND_HTML}`;
const ADDRESS_HTML = "1556 N Commercial Rd<br>Nixa, MO 65714";
const ADDRESS_INLINE = "1556 N Commercial Rd, Nixa, MO 65714";
const COPYRIGHT = "© 2026 Gear Haven Auto &amp; Diesel. All rights reserved.";

const ICON_PIN = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
const ICON_PHONE = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
const ICON_EMAIL = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 6L2 7"></path></svg>`;

function getInTouchHtml(hoverClass) {
  return `<div style="display:flex;flex-direction:column;gap:14px;font-size:14.5px">
          <div style="display:flex;align-items:flex-start;gap:12px">
            ${ICON_PIN}
            <span style="line-height:1.5;color:#8FA0AD">${ADDRESS_HTML}</span>
          </div>
          <a href="tel:4173194798" style="display:flex;align-items:flex-start;gap:12px;color:#fff;font-weight:600;text-decoration:none" class="${hoverClass}">
            ${ICON_PHONE}
            <span>417-319-4798</span>
          </a>
          <a href="mailto:office@gearhaven.com" style="display:flex;align-items:flex-start;gap:12px;color:#8FA0AD;text-decoration:none" class="${hoverClass}">
            ${ICON_EMAIL}
            <span>office@gearhaven.com</span>
          </a>
        </div>`;
}

function patchContent(text) {
  let out = text;

  // Footer description 14px
  out = out.replace(
    /font-size:14\.5px;line-height:1\.6;margin:0 0 18px;max-width:280px/g,
    "font-size:14px;line-height:1.6;margin:0 0 18px;max-width:280px"
  );

  // Footer column titles 18px
  out = out.replace(
    /font-size:15px;margin-bottom:16px;font-family:'Bricolage Grotesque'/g,
    "font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'"
  );

  // Copyright year
  out = out.replace(
    /© 2025 Gear Haven Auto &amp; Diesel\. All rights reserved\./g,
    COPYRIGHT
  );

  // Hours – contact cards
  out = out.replace(
    /Mon - Fri · 8:00a - 5:00p/g,
    HOURS_WEEKDAY
  );
  out = out.replace(
    /Saturday &amp; Sunday · Closed/g,
    HOURS_WEEKEND_HTML
  );

  // Hours – home contact section
  out = out.replace(
    /Monday - Friday, 8:00a - 5:00p<br>Saturday &amp; Sunday · Closed/g,
    HOURS_CONTACT
  );

  // Hours – footer shorthand variants
  out = out.replace(/Mon - Fri · 8a - 5p/g, HOURS_WEEKDAY);
  out = out.replace(/Mon - Fri, 8a - 5p/g, HOURS_WEEKDAY);

  // Address – single-line visit cards
  out = out.replace(
    /(<div style="font-family:'Bricolage Grotesque';font-weight:700;font-size:19px;color:#14202B">)1556 N Commercial Rd, Nixa, MO 65714(<\/div>)/g,
    `$1${ADDRESS_HTML}$2`
  );

  return out;
}

function patchGetInTouch(text) {
  // Legacy footer block without icons
  const legacy = /<div style="display:flex;flex-direction:column;gap:12px;font-size:14\.5px">\s*<a href="tel:4173194798"[^>]*class="([^"]+)"[^>]*>417-319-4798<\/a>\s*<span>office@gearhaven\.com<\/span>\s*<span style="line-height:1\.5">1556 N Commercial Rd<br>Nixa, MO 65714<\/span>\s*<span style="color:#5E6E7B">[^<]*<\/span>\s*<\/div>/g;

  let out = text.replace(legacy, (_, hoverClass) => getInTouchHtml(hoverClass));

  return out;
}

const files = [
  path.join(ROOT, "generated", "contact-content.ts"),
  path.join(ROOT, "generated", "get-a-quote-content.ts"),
  path.join(ROOT, "generated", "reviews-content.ts"),
  path.join(ROOT, "generated", "about-content.ts"),
  path.join(ROOT, "generated", "page-content.ts"),
  path.join(ROOT, "generated", "services-content.ts"),
  path.join(ROOT, "generated", "oil-changes-content.ts"),
  path.join(ROOT, "generated", "faqs-content.ts"),
  path.join(ROOT, "generated", "gallery-content.ts"),
  path.join(ROOT, "lib", "build-service-page-html.ts"),
];

for (const file of files) {
  let text = fs.readFileSync(file, "utf8");
  text = patchContent(text);
  text = patchGetInTouch(text);
  fs.writeFileSync(file, text);
  console.log("Patched", path.relative(path.join(__dirname, ".."), file));
}

console.log("Done.");

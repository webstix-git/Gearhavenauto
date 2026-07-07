const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src");

function patchFile(rel, fn) {
  const fp = path.join(root, rel);
  const before = fs.readFileSync(fp, "utf8");
  const after = fn(before);
  if (after !== before) {
    fs.writeFileSync(fp, after);
    console.log("patched", rel);
  }
}

const iconSpan =
  /<span style="display:grid;place-items:center;width:42px;height:42px;border-radius:10px;background:#EEF2F5;color:#3E5C76"><svg[\s\S]*?<\/svg>\s*<\/span>\s*/g;

patchFile("generated/page-content.ts", (s) =>
  s
    .replace(
      /<a href="#contact" style="background:rgba\(255,255,255,\.08\);border:1\.5px solid rgba\(255,255,255,\.35\);color:#fff;font-weight:700;font-size:16\.5px;padding:16px 30px;border-radius:9px" class="gh-hover-6">Request an Estimate<\/a>/,
      `<a href="/get-a-quote" class="gh-btn-solid" style="display:inline-flex;align-items:center;gap:10px;background:rgb(61, 109, 146);color:#fff;font-weight:700;font-size:16.5px;padding:16px 30px;border-radius:9px;box-shadow:0 8px 20px -8px rgba(61,109,146,.45)">Request an Estimate</a>`
    )
    .replace(iconSpan, "")
    .replace(/<div style="display:flex;align-items:center;gap:11px;margin-bottom:12px">\s*<h3/g, '<div style="margin-bottom:12px"><h3')
    .replace(/Monday - \x93Friday · 8:00a  - \x93 5:00p/g, "Monday - Friday, 8:00a - 5:00p")
    .replace(/,\s{2,}/g, ", ")
    .replace(/\s{2,}-\s{2,}/g, " - ")
);

patchFile("generated/get-a-quote-content.ts", (s) =>
  s
    .replace("export const CONTACT_HTML", "export const GET_A_QUOTE_HTML")
    .replace(
      /<span style="width:7px;height:7px;border-radius:50%;background:#6D9DC5"><\/span>Get in Touch/,
      '<span style="width:7px;height:7px;border-radius:50%;background:#6D9DC5"></span>Get a Quote'
    )
    .replace(
      /<h1 data-reveal style="font-family:'Bricolage Grotesque';font-weight:700;font-size:58px;line-height:1\.04;letter-spacing:-1\.6px;color:#fff;margin:0 0 22px">Let's get you<br>back on the road\.<\/h1>/,
      `<h1 data-reveal style="font-family:'Bricolage Grotesque';font-weight:700;font-size:58px;line-height:1.04;letter-spacing:-1.6px;color:#fff;margin:0 0 22px">Request a<br>free estimate.</h1>`
    )
    .replace(
      /We'll get right back to you with honest answers ,  no pressure, no runaround\./,
      "Tell us about your vehicle and what you need. We will get back to you with a clear, honest estimate."
    )
    .replace(
      /<span style="color:#14202B;font-weight:600">Contact Us<\/span>/,
      '<span style="color:#14202B;font-weight:600">Get a Quote</span>'
    )
    .replace(
      /<h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:26px;margin:0 0 6px;color:#14202B">Request an appointment<\/h2>/,
      '<h2 style="font-family:\'Bricolage Grotesque\';font-weight:700;font-size:26px;margin:0 0 6px;color:#14202B">Request a quote</h2>'
    )
    .replace(
      /Tell us a bit about your vehicle and what's going on\. We'll follow up to get you scheduled\./,
      "Share a few details about your vehicle and the work you need. We will follow up with pricing and next steps."
    )
    .replace(/,\s{2,}/g, ", ")
    .replace(/\s{2,}-\s{2,}/g, " - ")
);

const copyFiles = [
  "generated/contact-content.ts",
  "generated/about-content.ts",
  "generated/faqs-content.ts",
  "generated/gallery-content.ts",
  "generated/oil-changes-content.ts",
  "generated/reviews-content.ts",
  "generated/services-content.ts",
  "data/blog-posts.ts",
  "data/service-pages.ts",
];

for (const rel of copyFiles) {
  patchFile(rel, (s) =>
    s.replace(/,\s{2,}/g, ", ").replace(/\s{2,}-\s{2,}/g, " - ")
  );
}

patchFile("components/blog/BlogIndexPage.tsx", (s) =>
  s.replace(
    "from your visit — written to help you make confident decisions",
    "from your visit, written to help you make confident decisions"
  )
);

patchFile("lib/build-service-page-html.ts", (s) =>
  s.replace(/Mon–Fri · 8a–5p/g, "Mon - Fri, 8a - 5p").replace(/—/g, ", ")
);

patchFile("components/blog/SiteChrome.tsx", (s) =>
  s
    .replace(/Mon–Fri · 8a–5p/g, "Mon - Fri, 8a - 5p")
    .replace(/find in plain language — no pressure, no surprises\./g, "find in plain language, no pressure, no surprises.")
);

const metaFiles = [
  ["app/layout.tsx", "Your vehicle's safe haven — trusted", "Your vehicle's safe haven. Trusted"],
  ["app/services/page.tsx", "Nixa, MO — maintenance", "Nixa, MO. Maintenance"],
  ["app/gallery/page.tsx", "Diesel — shop work", "Diesel. Shop work"],
  ["app/faqs/page.tsx", "Nixa, MO — vehicles", "Nixa, MO. Vehicles"],
  ["app/about/page.tsx", "Diesel — our story", "Diesel. Our story"],
];

for (const [rel, from, to] of metaFiles) {
  patchFile(rel, (s) => s.replace(from, to));
}

console.log("done");

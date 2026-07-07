const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src");

const FOOTER_BOTTOM = (maxWidth) => `    <div style="border-top:1px solid rgba(255,255,255,.08)">
      <div class="gh-footer-bottom" style="max-width:${maxWidth};margin:0 auto;padding:20px 28px;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:20px;font-size:13px;color:#5E6E7B;text-align:center">
        <a href="/sitemap" class="gh-footer-legal-link">Sitemap</a><a href="/privacy-policy" class="gh-footer-legal-link">Privacy Policy</a><a href="/ai-readiness-service-index" class="gh-footer-legal-link">AI Readiness Service Index</a>
        <span>© 2026 Gear Haven Auto &amp; Diesel. All rights reserved.</span>
      </div>
    </div>`;

const pattern =
  /    <div style="border-top:1px solid rgba\(255,255,255,.08\)">\s*<div style="max-width:\d+px;[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*(?=\s*<\/footer>)/g;

const files = [
  path.join(ROOT, "generated", "page-content.ts"),
  path.join(ROOT, "generated", "contact-content.ts"),
  path.join(ROOT, "generated", "get-a-quote-content.ts"),
  path.join(ROOT, "generated", "reviews-content.ts"),
  path.join(ROOT, "generated", "about-content.ts"),
  path.join(ROOT, "generated", "services-content.ts"),
  path.join(ROOT, "generated", "oil-changes-content.ts"),
  path.join(ROOT, "generated", "faqs-content.ts"),
  path.join(ROOT, "generated", "gallery-content.ts"),
];

for (const file of files) {
  let text = fs.readFileSync(file, "utf8");
  const updated = text.replace(pattern, (_, maxWidth) => FOOTER_BOTTOM(maxWidth));
  if (updated !== text) {
    fs.writeFileSync(file, updated);
    console.log("Updated footer:", path.relative(path.join(__dirname, ".."), file));
  } else {
    console.log("No match:", path.relative(path.join(__dirname, ".."), file));
  }
}

console.log("Done.");

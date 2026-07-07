const fs = require("fs");
const path = require("path");
const FOOTER_PIPE =
  '<span aria-hidden="true" style="color:#5E6E7B;padding:0 2px">|</span>';
const COPYRIGHT =
  "<span>© 2026 Gear Haven Auto &amp; Diesel. All rights reserved.</span>";
const LINKS = [
  '<a href="/sitemap" class="gh-footer-legal-link">Sitemap</a>',
  '<a href="/privacy-policy" class="gh-footer-legal-link">Privacy Policy</a>',
  '<a href="/ai-policy" class="gh-footer-legal-link">AI Policy</a>',
  '<a href="/ai-readiness-service-index" class="gh-footer-legal-link">AI Readiness Service Index</a>',
];
const newInner = [COPYRIGHT, ...LINKS].join(FOOTER_PIPE);

const dir = path.join(__dirname, "..", "src", "generated");
const oldPatterns = [
  /<a href="\/sitemap"[\s\S]*?<span>© 2026 Gear Haven Auto &amp; Diesel\. All rights reserved\.<\/span>/,
  /<span>© 2026 Gear Haven Auto &amp; Diesel\. All rights reserved\.<\/span>[\s\S]*?<a href="\/ai-readiness-service-index"[\s\S]*?>AI Readiness Service Index<\/a>/,
];

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith("-content.ts"))) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, "utf8");
  let changed = false;
  for (const pattern of oldPatterns) {
    if (pattern.test(content)) {
      content = content.replace(pattern, newInner);
      changed = true;
      break;
    }
  }
  if (changed) {
    fs.writeFileSync(fp, content);
    console.log("patched", file);
  }
}

console.log("done");

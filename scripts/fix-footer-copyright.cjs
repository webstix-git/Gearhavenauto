const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src");
const COPYRIGHT = "© 2026 Gear Haven Auto &amp; Diesel. All rights reserved.";

const FOOTER_BARS = [
  {
    file: "generated/contact-content.ts",
    maxWidth: "1240px",
    classes: ["gh-hover-442", "gh-hover-443", "gh-hover-444"],
    backHref: "#top",
  },
  {
    file: "generated/get-a-quote-content.ts",
    maxWidth: "1240px",
    classes: ["gh-hover-442", "gh-hover-443", "gh-hover-444"],
    backHref: "#top",
  },
  {
    file: "generated/reviews-content.ts",
    maxWidth: "1240px",
    classes: ["gh-hover-349", "gh-hover-350", "gh-hover-351"],
    backHref: "#top",
  },
  {
    file: "generated/about-content.ts",
    maxWidth: "1240px",
    classes: ["gh-hover-122", "gh-hover-123", "gh-hover-124"],
    backHref: "#top",
  },
  {
    file: "generated/services-content.ts",
    maxWidth: "1240px",
    classes: ["gh-hover-447", "gh-hover-448", "gh-hover-449"],
    backHref: "#top",
  },
  {
    file: "generated/oil-changes-content.ts",
    maxWidth: "1240px",
    classes: ["gh-hover-412", "gh-hover-413", "gh-hover-414"],
    backHref: "#top",
  },
  {
    file: "generated/faqs-content.ts",
    maxWidth: "1240px",
    classes: ["gh-hover-319", "gh-hover-320", "gh-hover-321"],
    backHref: "#top",
  },
  {
    file: "generated/gallery-content.ts",
    maxWidth: "1240px",
    classes: ["gh-hover-379", "gh-hover-380", "gh-hover-381"],
    backHref: "#top",
  },
  {
    file: "lib/build-service-page-html.ts",
    maxWidth: "1240px",
    classes: ["gh-hover-svc", "gh-hover-svc", "gh-hover-svc"],
    backHref: "#top",
  },
];

function footerBar({ maxWidth, classes, backHref }) {
  const [privacy, terms, serving] = classes;
  return `    <div style="border-top:1px solid rgba(255,255,255,.08)">
      <div style="max-width:${maxWidth};margin:0 auto;padding:20px 28px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:13px;color:#5E6E7B">
        <div>${COPYRIGHT}</div>
        <div style="display:flex;gap:20px"><a href="#" class="${privacy}">Privacy</a><a href="#" class="${terms}">Terms</a><a href="${backHref}" class="${serving}">Serving Nixa &amp; the Ozarks</a></div>
      </div>
    </div>`;
}

for (const cfg of FOOTER_BARS) {
  const fp = path.join(ROOT, cfg.file);
  let text = fs.readFileSync(fp, "utf8");

  if (text.includes("All rights reserved")) {
    console.log("Skip (has copyright):", cfg.file);
    continue;
  }

  text = text.replace(
    /(\s*)<\/footer>/,
    `\n${footerBar(cfg)}\n$1</footer>`
  );

  fs.writeFileSync(fp, text);
  console.log("Restored copyright bar:", cfg.file);
}

console.log("Done.");

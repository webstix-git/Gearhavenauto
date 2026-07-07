const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..");
const HTML_FILE = path.join(
  ROOT,
  "Gear Haven Auto & Diesel - Option1-standalone.html"
);
const PUBLIC_DIR = path.join(ROOT, "public", "images");
const OUT_DIR = path.join(ROOT, "src", "generated");

fs.mkdirSync(PUBLIC_DIR, { recursive: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

const html = fs.readFileSync(HTML_FILE, "utf8");

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
const fontStyles = styleMatch ? styleMatch[1] : "";

const bodyStart = html.indexOf('<div style="min-height:100vh');
const scriptStart = html.indexOf("<script>", bodyStart);
if (bodyStart === -1 || scriptStart === -1) {
  console.error("Could not find main content boundaries");
  process.exit(1);
}

const sliceBeforeScript = html.slice(bodyStart, scriptStart).trimEnd();
const bodyEnd = sliceBeforeScript.lastIndexOf("</div>") + bodyStart;
if (bodyEnd < bodyStart) {
  console.error("Could not find closing root div");
  process.exit(1);
}

let bodyHtml = html.slice(bodyStart, bodyEnd + 6);

let imageIndex = 0;
const imageMap = new Map();

bodyHtml = bodyHtml.replace(
  /src="data:image\/(png|jpeg|jpg|webp|gif);base64,([^"]+)"/g,
  (_, ext, data) => {
    const normalizedExt = ext === "jpeg" ? "jpg" : ext;
    if (!imageMap.has(data)) {
      const hash = crypto.createHash("md5").update(data).digest("hex").slice(0, 8);
      const filename = `asset-${imageIndex++}-${hash}.${normalizedExt}`;
      imageMap.set(data, filename);
      fs.writeFileSync(
        path.join(PUBLIC_DIR, filename),
        Buffer.from(data, "base64")
      );
    }
    return `src="/images/${imageMap.get(data)}"`;
  }
);

bodyHtml = bodyHtml.replace(/data-reveal=""/g, "data-reveal");

const hoverRules = [];
let hoverCounter = 0;

bodyHtml = bodyHtml.replace(/style-hover="([^"]*)"/g, (_, styles) => {
  const className = `gh-hover-${hoverCounter++}`;
  const cssProps = styles
    .split(";")
    .filter(Boolean)
    .map((s) => {
      const colon = s.indexOf(":");
      const prop = s.slice(0, colon).trim();
      const val = s.slice(colon + 1).trim();
      return `  ${prop}: ${val};`;
    })
    .join("\n");
  hoverRules.push(`.${className}:hover {\n${cssProps}\n}`);
  return `class="${className}"`;
});

const escapedHtml = bodyHtml
  .replace(/\\/g, "\\\\")
  .replace(/`/g, "\\`")
  .replace(/\$\{/g, "\\${");

fs.writeFileSync(
  path.join(OUT_DIR, "page-content.ts"),
  `// Auto-generated from standalone HTML — do not edit manually\nexport const PAGE_HTML = \`${escapedHtml}\`;\n`
);

fs.writeFileSync(path.join(OUT_DIR, "fonts.css"), fontStyles);
fs.writeFileSync(path.join(OUT_DIR, "hover.css"), hoverRules.join("\n\n"));

console.log(`Extracted ${imageMap.size} images`);
console.log(`Generated ${hoverRules.length} hover rules`);
console.log(`Body HTML length: ${bodyHtml.length}`);

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const zlib = require("zlib");

const ABOUT_FILE = path.join(
  "C:",
  "Users",
  "DELL",
  "Downloads",
  "Gear Haven Auto & Diesel - About.html"
);
const ROOT = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public", "images");
const OUT_DIR = path.join(ROOT, "src", "generated");

fs.mkdirSync(PUBLIC_DIR, { recursive: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

const html = fs.readFileSync(ABOUT_FILE, "utf8");

const manifestMatch = html.match(
  /<script type="__bundler\/manifest">([\s\S]*?)<\/script>/
);
const templateMatch = html.match(
  /<script type="__bundler\/template">([\s\S]*?)<\/script>/
);

if (!manifestMatch || !templateMatch) {
  console.error("Could not find bundler manifest/template");
  process.exit(1);
}

const manifest = JSON.parse(manifestMatch[1]);
let template = JSON.parse(templateMatch[1]);

const assetMap = {};
for (const [uuid, entry] of Object.entries(manifest)) {
  const bytes = Buffer.from(entry.data, "base64");
  const finalBytes = entry.compressed ? zlib.gunzipSync(bytes) : bytes;
  const hash = crypto.createHash("md5").update(finalBytes).digest("hex").slice(0, 8);
  const ext = entry.mime?.split("/")[1]?.replace("jpeg", "jpg") || "bin";
  const filename = `about-${hash}.${ext}`;
  fs.writeFileSync(path.join(PUBLIC_DIR, filename), finalBytes);
  assetMap[uuid] = `/images/${filename}`;
}

let pageHtml = template;
for (const [uuid, url] of Object.entries(assetMap)) {
  pageHtml = pageHtml.split(uuid).join(url);
}

// Extract inner page content from x-dc template
const bodyStart = pageHtml.indexOf('<div style="min-height:100vh');
if (bodyStart === -1) {
  // try alternate root
  const alt = pageHtml.indexOf("<div style=");
  console.log("bodyStart alt", alt, pageHtml.slice(alt, alt + 200));
  process.exit(1);
}

const scriptStart = pageHtml.indexOf("<script>", bodyStart);
const sliceEnd =
  scriptStart === -1
    ? pageHtml.lastIndexOf("</div>")
    : pageHtml.lastIndexOf("</div>", scriptStart - 1);

let bodyHtml = pageHtml.slice(bodyStart, sliceEnd + 6);

bodyHtml = bodyHtml.replace(/data-reveal=""/g, "data-reveal");
bodyHtml = bodyHtml.replace(/src="data:image\/[^"]+"/g, (m) => m); // should be resolved

const hoverRules = [];
let hoverCounter = 100;
bodyHtml = bodyHtml.replace(/style-hover="([^"]*)"/g, (_, styles) => {
  const className = `gh-hover-${hoverCounter++}`;
  const cssProps = styles
    .split(";")
    .filter(Boolean)
    .map((s) => {
      const colon = s.indexOf(":");
      return `  ${s.slice(0, colon).trim()}: ${s.slice(colon + 1).trim()};`;
    })
    .join("\n");
  hoverRules.push(`.${className}:hover {\n${cssProps}\n}`);
  return `class="${className}"`;
});

// Write preview for inspection
fs.writeFileSync(path.join(OUT_DIR, "about-preview.html"), bodyHtml);

const escaped = bodyHtml
  .replace(/\\/g, "\\\\")
  .replace(/`/g, "\\`")
  .replace(/\$\{/g, "\\${");

fs.writeFileSync(
  path.join(OUT_DIR, "about-content.ts"),
  `// Auto-generated from About.html\nexport const ABOUT_HTML = \`${escaped}\`;\n`
);

const existingHover = fs.readFileSync(path.join(OUT_DIR, "hover.css"), "utf8");
fs.writeFileSync(
  path.join(OUT_DIR, "hover.css"),
  existingHover + "\n\n/* About page hovers */\n" + hoverRules.join("\n\n")
);

console.log("Assets:", Object.keys(assetMap).length);
console.log("Body length:", bodyHtml.length);
console.log("Hover rules:", hoverRules.length);

// Print section markers
for (const m of bodyHtml.matchAll(/<!-- ([^-]+) -->/g)) {
  console.log("Section:", m[1]);
}

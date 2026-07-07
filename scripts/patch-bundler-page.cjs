const fs = require("fs");
const path = require("path");

const prefix = process.argv[2];
const breadcrumbLabel = process.argv[3];
const heroEndMarker = process.argv[4] || "  <!-- FAQ BODY -->";

if (!prefix || !breadcrumbLabel) {
  console.error(
    "Usage: node patch-bundler-page.cjs <prefix> <breadcrumb-label> [hero-end-marker]"
  );
  process.exit(1);
}

const ROOT = path.join(__dirname, "..");
const contentFile = path.join(ROOT, "src", "generated", `${prefix}-content.ts`);
const hoverFile = path.join(ROOT, "src", "generated", "hover.css");
const exportName = `${prefix.toUpperCase()}_HTML`.replace(/-/g, "_");

let content = fs.readFileSync(contentFile, "utf8");

function steelBlue(html) {
  return html
    .replace(/#E0A32E/g, "#6D9DC5")
    .replace(/#F0C877/g, "#CFE0EE")
    .replace(/#C6871A/g, "#3D6D92")
    .replace(/#EFB447/g, "#2C4257")
    .replace(/rgba\(224,163,46,\.14\)/g, "rgba(109,157,197,.18)")
    .replace(/rgba\(224,163,46,\.4\)/g, "rgba(109,157,197,.45)")
    .replace(/rgba\(224,163,46,\.6\)/g, "rgba(61,109,146,.55)")
    .replace(/rgba\(224,163,46,\.8\)/g, "rgba(61,109,146,.7)")
    .replace(/rgba\(224,163,46,\.9\)/g, "rgba(61,109,146,.85)");
}

content = steelBlue(content);

content = content.replace(/Gear Haven Home\.dc\.html#top/g, "/");
content = content.replace(/Gear Haven Home\.dc\.html#inspection/g, "/#inspection");
content = content.replace(/Gear Haven Home\.dc\.html#reviews/g, "/reviews");
content = content.replace(/Gear Haven Home\.dc\.html#contact/g, "/#contact");
content = content.replace(/Gear Haven Home\.dc\.html/g, "/");
content = content.replace(/Gear Haven About\.dc\.html#team/g, "/about#team");
content = content.replace(/Gear Haven About\.dc\.html#top/g, "/about");
content = content.replace(/Gear Haven About\.dc\.html/g, "/about");
content = content.replace(/Gear Haven Services\.dc\.html#(\w+)/g, "/services#$1");
content = content.replace(/Gear Haven Services\.dc\.html#top/g, "/services");
content = content.replace(/Gear Haven Services\.dc\.html/g, "/services");
content = content.replace(/Gear Haven FAQ\.dc\.html#top/g, "/faqs");
content = content.replace(/Gear Haven FAQ\.dc\.html/g, "/faqs");
content = content.replace(/Gear Haven Reviews\.dc\.html#top/g, "/reviews");
content = content.replace(/Gear Haven Reviews\.dc\.html/g, "/reviews");
content = content.replace(/Gear Haven Testimonials\.dc\.html#top/g, "/reviews");
content = content.replace(/Gear Haven Testimonials\.dc\.html/g, "/reviews");
content = content.replace(/Gear Haven Contact\.dc\.html#top/g, "/contact");
content = content.replace(/Gear Haven Contact\.dc\.html/g, "/contact");
content = content.replace(/Gear Haven Gallery\.dc\.html#top/g, "/gallery");
content = content.replace(/Gear Haven Gallery\.dc\.html/g, "/gallery");
content = content.replace(/Gear Haven Oil Changes\.dc\.html#top/g, "/oil-changes");
content = content.replace(/Gear Haven Oil Changes\.dc\.html/g, "/oil-changes");

content = content.replace(/onsubmit="\{\{ onSubmit \}\}"/g, "");
content = content.replace(
  /margin-top:4px;background:#6D9DC5;color:#14202B;font-family:'Hanken Grotesk',sans-serif;font-weight:700;font-size:16\.5px;border:none;padding:16px;border-radius:10px;cursor:pointer;box-shadow:0 12px 26px -12px rgba\(61,109,146,\.7\)/g,
  "margin-top:4px;background:rgb(61, 109, 146);color:#fff;font-family:'Hanken Grotesk',sans-serif;font-weight:700;font-size:16.5px;border:none;padding:16px;border-radius:10px;cursor:pointer;box-shadow:0 12px 26px -12px rgba(61,109,146,.7)"
);

content = content.replace(
  new RegExp(`/images/${prefix}-1f2162ee\\.png`, "g"),
  "/images/asset-0-a596b110.png"
);

content = content.replace(
  /background:#6D9DC5;color:#14202B;font-weight:700;font-size:15px;padding:12px 24px;border-radius:8px;white-space:nowrap;box-shadow:0 8px 20px -8px rgba\(61,109,146,\.55\)"/g,
  'background:rgb(61, 109, 146);color:#fff;font-weight:700;font-size:15px;padding:12px 24px;border-radius:8px;white-space:nowrap;box-shadow:0 8px 20px -8px rgba(61,109,146,.55)" class="gh-btn-solid"'
);

content = content.replace(
  /background:#6D9DC5;color:#14202B;font-weight:700;font-size:18px;padding:17px 30px;border-radius:10px"/g,
  'background:rgb(61, 109, 146);color:#fff;font-weight:700;font-size:18px;padding:17px 30px;border-radius:10px" class="gh-btn-solid"'
);

content = content.replace(/\n\n  <!-- HEADER -->[\s\S]*?<\/header>\n/, "\n");

const breadcrumbs = `
  <!-- BREADCRUMBS -->
  <nav aria-label="Breadcrumb" class="gh-breadcrumb" style="background:#F6F4F0;border-bottom:1px solid #E7E4DD">
    <div style="max-width:1240px;margin:0 auto;padding:14px 28px;display:flex;align-items:center;gap:10px;font-size:14.5px;color:#5C6B76">
      <a href="/" style="color:#3E5C76;font-weight:600">Home</a>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A8B2BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
      <span style="color:#14202B;font-weight:600">${breadcrumbLabel}</span>
    </div>
  </nav>
`;

if (!content.includes('aria-label="Breadcrumb"')) {
  content = content.replace(
    /  <\/section>\r?\n\r?\n  /,
    `  </section>${breadcrumbs}\n\n  `,
    1
  );
}

content = content.replace(/open=""/g, "open");

fs.writeFileSync(contentFile, content);

let hover = fs.readFileSync(hoverFile, "utf8");
const section = `/* ${prefix} page hovers */`;
if (hover.includes(section)) {
  const start = hover.indexOf(section);
  const next = hover.indexOf("\n\n/* ", start + section.length);
  const end = next === -1 ? hover.length : next;
  hover = steelBlue(hover.slice(0, start)) + steelBlue(hover.slice(start, end)) + hover.slice(end);
  fs.writeFileSync(hoverFile, hover);
}

console.log(`Patched ${prefix}-content.ts (${exportName})`);

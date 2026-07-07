const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const servicesFile = path.join(ROOT, "src", "generated", "services-content.ts");
const hoverFile = path.join(ROOT, "src", "generated", "hover.css");
const homeFile = path.join(ROOT, "src", "generated", "page-content.ts");
const aboutFile = path.join(ROOT, "src", "generated", "about-content.ts");

let content = fs.readFileSync(servicesFile, "utf8");

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
content = content.replace(/Gear Haven Home\.dc\.html#reviews/g, "/#reviews");
content = content.replace(/Gear Haven Home\.dc\.html/g, "/");
content = content.replace(/Gear Haven About\.dc\.html#team/g, "/about#team");
content = content.replace(/Gear Haven About\.dc\.html#top/g, "/about");
content = content.replace(/Gear Haven About\.dc\.html/g, "/about");

content = content.replace(/\/images\/services-1f2162ee\.png/g, "/images/asset-0-a596b110.png");

content = content.replace(
  'href="/about" style="padding:6px 0;border-bottom:2px solid transparent;color:#fff"',
  'href="/about" style="padding:6px 0;border-bottom:2px solid transparent;color:#fff"'
);
content = content.replace(
  'href="#top" style="padding:6px 0;border-bottom:2px solid #6D9DC5;color:#6D9DC5">Services</a>',
  'href="/services#top" style="padding:6px 0;border-bottom:2px solid #6D9DC5;color:#6D9DC5">Services</a>'
);

content = content.replace(
  'href="#diesel" style="padding:6px 0;border-bottom:2px solid transparent;color:#fff"',
  'href="/services#diesel" style="padding:6px 0;border-bottom:2px solid transparent;color:#fff"'
);
content = content.replace(
  'href="#fleet" style="padding:6px 0;border-bottom:2px solid transparent;color:#fff"',
  'href="/services#fleet" style="padding:6px 0;border-bottom:2px solid transparent;color:#fff"'
);
content = content.replace(
  'href="\/#inspection" style="padding:6px 0;border-bottom:2px solid transparent;color:#fff"',
  'href="/#inspection" style="padding:6px 0;border-bottom:2px solid transparent;color:#fff"'
);

content = content.replace(
  /(<a href="#contact" style="background:rgb\(61, 109, 146\);color:#fff;font-weight:700;font-size:15px;padding:12px 24px;border-radius:8px;white-space:nowrap;box-shadow:0 8px 20px -8px rgba\(61,109,146,\.55\)") class="[^"]*">Schedule Service)/,
  '$1 class="gh-hover-205 gh-btn-solid">Schedule Service'
);

content = content.replace(
  /background:#6D9DC5;color:#14202B;font-weight:700;font-size:18px;padding:17px 30px;border-radius:10px" class="gh-hover-214"/,
  'background:rgb(61, 109, 146);color:#fff;font-weight:700;font-size:18px;padding:17px 30px;border-radius:10px" class="gh-hover-214 gh-btn-solid"'
);

const breadcrumbs = `
  <!-- BREADCRUMBS -->
  <nav aria-label="Breadcrumb" class="gh-breadcrumb" style="background:#F6F4F0;border-bottom:1px solid #E7E4DD">
    <div style="max-width:1240px;margin:0 auto;padding:14px 28px;display:flex;align-items:center;gap:10px;font-size:14.5px;color:#5C6B76">
      <a href="/" style="color:#3E5C76;font-weight:600">Home</a>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A8B2BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
      <span style="color:#14202B;font-weight:600">Services</span>
    </div>
  </nav>
`;

if (!content.includes('aria-label="Breadcrumb"')) {
  content = content.replace(
    /  <\/section>\n\n  <!-- QUICK JUMP CHIPS -->/,
    `  </section>${breadcrumbs}\n\n  <!-- QUICK JUMP CHIPS -->`
  );
}

fs.writeFileSync(servicesFile, content);

let hover = fs.readFileSync(hoverFile, "utf8");
const hoverStart = hover.indexOf("/* services page hovers */");
if (hoverStart !== -1) {
  hover = steelBlue(hover.slice(0, hoverStart)) + steelBlue(hover.slice(hoverStart));
  hover = hover.replace(
    /\.gh-hover-205:hover \{[\s\S]*?\}/,
    `.gh-hover-205:hover {
  background: #2C4257;
  color: #fff;
  transform: translateY(-1px);
}`
  );
  hover = hover.replace(
    /\.gh-hover-214:hover \{[\s\S]*?\}/,
    `.gh-hover-214:hover {
  transform: translateY(-2px);
}`
  );
  fs.writeFileSync(hoverFile, hover);
}

let home = fs.readFileSync(homeFile, "utf8");
home = home.replace(
  'href="#care" style="padding:6px 0;border-bottom:2px solid transparent;color:#fff"',
  'href="/services" style="padding:6px 0;border-bottom:2px solid transparent;color:#fff"'
);
home = home.replace(/href="#care"/g, 'href="/services"');
fs.writeFileSync(homeFile, home);

let about = fs.readFileSync(aboutFile, "utf8");
about = about.replace('href="/#care"', 'href="/services"');
fs.writeFileSync(aboutFile, about);

console.log("Services page patched: links, breadcrumbs, steel blue");

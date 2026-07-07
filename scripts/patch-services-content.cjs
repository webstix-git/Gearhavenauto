const fs = require("fs");
const path = require("path");

const fp = path.join(__dirname, "..", "src", "generated", "services-content.ts");
let c = fs.readFileSync(fp, "utf8");

function steel(html) {
  return html
    .replace(/#E0A32E/g, "#6D9DC5")
    .replace(/#F0C877/g, "#CFE0EE")
    .replace(/#C6871A/g, "#3D6D92")
    .replace(/#EFB447/g, "#2C4257")
    .replace(/rgba\(224,163,46,\.14\)/g, "rgba(109,157,197,.18)")
    .replace(/rgba\(224,163,46,\.4\)/g, "rgba(109,157,197,.45)")
    .replace(/rgba\(224,163,46,\.6\)/g, "rgba(61,109,146,.55)")
    .replace(/rgba\(224,163,46,\.8\)/g, "rgba(61,109,146,.7)")
    .replace(/rgba\(224,163,46,\.9\)/g, "rgba(61,109,146,.85)")
    .replace(/rgba\(224,163,46,\.16\)/g, "rgba(109,157,197,.18)");
}

c = steel(c);
c = c.replace(/Gear Haven Home\.dc\.html#inspection/g, "/digital-inspection");
c = c.replace(/Gear Haven Home\.dc\.html#reviews/g, "/reviews");
c = c.replace(/Gear Haven Home\.dc\.html/g, "/");
c = c.replace(/Gear Haven About\.dc\.html#team/g, "/about#team");
c = c.replace(/Gear Haven About\.dc\.html#top/g, "/about");
c = c.replace(/Gear Haven About\.dc\.html/g, "/about");
c = c.replace(/\/images\/services-1f2162ee\.png/g, "/images/asset-0-a596b110.png");
c = c.replace(
  'background:#6D9DC5;color:#14202B;font-weight:700;font-size:18px;padding:17px 30px;border-radius:10px" class="gh-hover-434"',
  'background:rgb(61, 109, 146);color:#fff;font-weight:700;font-size:18px;padding:17px 30px;border-radius:10px" class="gh-hover-434 gh-btn-solid"'
);
c = c.replace(/href="#contact"/g, 'href="/contact"');
c = c.replace(
  'href="#auto" class="gh-hover-436"',
  'href="/auto-shop" class="gh-hover-436"'
);
c = c.replace(
  'href="#tires" class="gh-hover-438"',
  'href="/tires" class="gh-hover-438"'
);
c = c.replace(
  'href="#fleet" class="gh-hover-439"',
  'href="/fleet-vehicles" class="gh-hover-439"'
);
c = c.replace('href="#" class="gh-hover-444"', 'href="/blog" class="gh-hover-444"');

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

if (!c.includes('aria-label="Breadcrumb"')) {
  c = c.replace(
    /  <\/section>\n\n  <!-- QUICK JUMP CHIPS -->/,
    `  </section>${breadcrumbs}\n\n  <!-- QUICK JUMP CHIPS -->`
  );
}

fs.writeFileSync(fp, c);
console.log("services-content patched");

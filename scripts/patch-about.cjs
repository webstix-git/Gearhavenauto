const fs = require("fs");
const path = require("path");

const aboutFile = path.join(__dirname, "..", "src", "generated", "about-content.ts");
let content = fs.readFileSync(aboutFile, "utf8");

// Fix internal navigation links
content = content.replace(/Gear Haven Home\.dc\.html/g, "/");
content = content.replace(/href="\/#top"/g, 'href="/"');
content = content.replace(
  'href="/" style="display:flex;align-items:center"',
  'href="/" style="display:flex;align-items:center"'
);

// Use main site logo for consistency
content = content.replace(/\/images\/about-1f2162ee\.png/g, "/images/asset-0-a596b110.png");

// Breadcrumbs below hero banner
const breadcrumbs = `
  <!-- BREADCRUMBS -->
  <nav aria-label="Breadcrumb" class="gh-breadcrumb" style="background:#F6F4F0;border-bottom:1px solid #E7E4DD">
    <div style="max-width:1240px;margin:0 auto;padding:14px 28px;display:flex;align-items:center;gap:10px;font-size:14.5px;color:#5C6B76">
      <a href="/" style="color:#3E5C76;font-weight:600">Home</a>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A8B2BB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>
      <span style="color:#14202B;font-weight:600">About Us</span>
    </div>
  </nav>
`;

if (!content.includes("aria-label=\"Breadcrumb\"")) {
  content = content.replace(
    /  <\/section>\n\n  <!-- MISSION \/ STORY -->/,
    `  </section>${breadcrumbs}\n\n  <!-- MISSION / STORY -->`
  );
}

fs.writeFileSync(aboutFile, content);

// Update home page About links
const homeFile = path.join(__dirname, "..", "src", "generated", "page-content.ts");
let home = fs.readFileSync(homeFile, "utf8");
home = home.replace(/href="#about"/g, 'href="/about"');
fs.writeFileSync(homeFile, home);

console.log("About page patched with breadcrumbs and fixed links");

const fs = require("fs");
const path = require("path");

const STROKE = 1.75;

function ghIcon(inner, { size = 24, color = "currentColor", strokeWidth = STROKE, style = "" } = {}) {
  const styleAttr = style ? ` style="${style}"` : "";
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${styleAttr}>${inner}</svg>`;
}

const ICON_LOCATION = ghIcon(
  '<path d="M12 21s6-5.2 6-10.5a6 6 0 1 0-12 0C6 15.8 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.2"/>',
  { size: 18, color: "#3D6D92", style: "flex:none;margin-top:2px" }
);

const ICON_PHONE = ghIcon(
  '<path d="M6.6 4.2h2.2c.5 0 .9.3 1 .8l.5 2.4a1 1 0 0 1-.3 1l-1.4 1.4a13.5 13.5 0 0 0 5.8 5.8l1.4-1.4a1 1 0 0 1 1-.3l2.4.5c.5.1.8.5.8 1v2.2a1.8 1.8 0 0 1-1.8 1.8C9.8 19.2 4.8 14.2 4.8 6.6A1.8 1.8 0 0 1 6.6 4.2z"/>',
  { size: 18, color: "#3D6D92", style: "flex:none;margin-top:2px" }
);

const ICON_EMAIL = ghIcon(
  '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="m3 8 9 6.2L21 8"/>',
  { size: 18, color: "#3D6D92", style: "flex:none;margin-top:2px" }
);

const ICON_CHECK_16 = ghIcon('<path d="M5.5 12.2 9.8 16.5 18.5 7.8"/>', {
  size: 16,
  color: "#6D9DC5",
  strokeWidth: 2.25,
});

const ICON_CHECK_18 = ghIcon('<path d="M5.5 12.2 9.8 16.5 18.5 7.8"/>', {
  size: 18,
  color: "#6D9DC5",
  strokeWidth: 2.25,
});

const replacements = [
  [
    /<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"><\/path><circle cx="12" cy="10" r="3"><\/circle><\/svg>/g,
    ICON_LOCATION,
  ],
  [
    /<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><path d="M22 16\.92v3a2 2 0 0 1-2\.18 2 19\.79 19\.79 0 0 1-8\.63-3\.07 19\.5 19\.5 0 0 1-6-6 19\.79 19\.79 0 0 1-3\.07-8\.67A2 2 0 0 1 4\.11 2h3a2 2 0 0 1 2 1\.72c\.13\.96\.36 1\.9\.7 2\.81a2 2 0 0 1-\.45 2\.11L8\.09 9\.91a16 16 0 0 0 6 6l1\.27-1\.27a2 2 0 0 1 2\.11-\.45c\.9\.34 1\.85\.57 2\.81\.7A2 2 0 0 1 22 16\.92z"><\/path><\/svg>/g,
    ICON_PHONE,
  ],
  [
    /<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px"><rect x="2" y="4" width="20" height="16" rx="2"><\/rect><path d="m22 7-10 6L2 7"><\/path><\/svg>/g,
    ICON_EMAIL,
  ],
  [
    /<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6D9DC5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"><\/path><\/svg>/g,
    ICON_CHECK_16,
  ],
  [
    /<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D9DC5" stroke-width="2\.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"><\/path><\/svg>/g,
    ICON_CHECK_18,
  ],
  [
    /<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6D9DC5" stroke-width="2\.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"><\/path><\/svg>/g,
    ICON_CHECK_18,
  ],
  [
    /<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"><\/path><circle cx="12" cy="10" r="3"><\/circle>/g,
    '<path d="M12 21s6-5.2 6-10.5a6 6 0 1 0-12 0C6 15.8 12 21 12 21z"></path><circle cx="12" cy="10.5" r="2.2"></circle>',
  ],
  [
    /<path d="M22 16\.92v3a2 2 0 0 1-2\.18 2 19\.79 19\.79 0 0 1-8\.63-3\.07 19\.5 19\.5 0 0 1-6-6 19\.79 19\.79 0 0 1-3\.07-8\.67A2 2 0 0 1 4\.11 2h3a2 2 0 0 1 2 1\.72c\.13\.96\.36 1\.9\.7 2\.81a2 2 0 0 1-\.45 2\.11L8\.09 9\.91a16 16 0 0 0 6 6l1\.27-1\.27a2 2 0 0 1 2\.11-\.45c\.9\.34 1\.85\.57 2\.81\.7A2 2 0 0 1 22 16\.92z"><\/path>/g,
    '<path d="M6.6 4.2h2.2c.5 0 .9.3 1 .8l.5 2.4a1 1 0 0 1-.3 1l-1.4 1.4a13.5 13.5 0 0 0 5.8 5.8l1.4-1.4a1 1 0 0 1 1-.3l2.4.5c.5.1.8.5.8 1v2.2a1.8 1.8 0 0 1-1.8 1.8C9.8 19.2 4.8 14.2 4.8 6.6A1.8 1.8 0 0 1 6.6 4.2z"></path>',
  ],
  [
    /<rect x="2" y="4" width="20" height="16" rx="2"><\/rect><path d="m22 7-10 6L2 7"><\/path>/g,
    '<rect x="3" y="5.5" width="18" height="13" rx="2"></rect><path d="m3 8 9 6.2L21 8"></path>',
  ],
];

const dir = path.join(__dirname, "..", "src", "generated");
for (const file of fs.readdirSync(dir).filter((f) => f.endsWith("-content.ts"))) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, "utf8");
  let changed = false;
  for (const [pattern, value] of replacements) {
    if (pattern.test(content)) {
      content = content.replace(pattern, value);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(fp, content);
    console.log("patched", file);
  }
}

console.log("done");

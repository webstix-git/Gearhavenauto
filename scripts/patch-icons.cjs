const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "src", "generated", "page-content.ts");
let html = fs.readFileSync(file, "utf8");

// Hero trust strip — wrap bare SVGs
html = html.replace(
  /(<div style="display:flex;align-items:center;gap:12px;color:#DCE4EC">\s*)<svg width="26"/g,
  '$1<span class="gh-ai-icon gh-ai-icon--hero"><svg width="22"'
);
html = html.replace(
  /(<\/svg>)(\s*<div><div style="font-family:'Bricolage Grotesque';font-weight:700;font-size:18px;color:#fff">(?:8 Years|Cars · Trucks · Diesel|Family-First))/g,
  "$1</span>$2"
);

// Care cards
html = html.replace(
  /<span style="display:grid;place-items:center;width:42px;height:42px;border-radius:10px;background:#EEF2F5;color:#3E5C76">/g,
  '<span class="gh-ai-icon gh-ai-icon--soft">'
);

// Why choose cards
html = html.replace(
  /<span style="display:grid;place-items:center;width:48px;height:48px;border-radius:12px;background:rgba\(62,92,118,.35\);border:1px solid rgba\(143,176,206,.25\);color:#CFE0EE;margin-bottom:16px">/g,
  '<span class="gh-ai-icon gh-ai-icon--dark" style="margin-bottom:16px">'
);

// Service grid icons
html = html.replace(
  /<div style="flex:none;display:grid;place-items:center;width:50px;height:50px;border-radius:13px;background:linear-gradient\(135deg,#3E5C76,#2C4257\);color:#fff;box-shadow:0 10px 20px -12px rgba\(62,92,118,.8\)">/g,
  '<div class="gh-ai-icon gh-ai-icon--service">'
);

// Inspection checklist icons
html = html.replace(
  /(<div style="display:flex;align-items:center;gap:11px;font-size:15\.5px;color:#DCE4EC">)<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0A32E"/g,
  '$1<span class="gh-ai-icon gh-ai-icon--check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"'
);
html = html.replace(
  /(<path d="M20 6 9 17l-5-5"><\/path><\/svg>)(<\/div>)/g,
  "$1</span>$2"
);

// Footer contact icons
html = html.replace(
  /(<div style="display:flex;align-items:flex-start;gap:12px">\s*)<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92"/g,
  '$1<span class="gh-ai-icon gh-ai-icon--footer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"'
);
html = html.replace(
  /(<circle cx="12" cy="10" r="3"><\/circle><\/svg>)(\s*<span style="line-height:1\.5;color:#8FA0AD">)/g,
  "$1</span>$2"
);

html = html.replace(
  /(<a href="tel:4173194798"[^>]*>\s*)<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92"/g,
  '$1<span class="gh-ai-icon gh-ai-icon--footer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"'
);
html = html.replace(
  /(<path d="M22 16\.92v3a2 2 0 0 1-2\.18 2[^"]*"><\/path><\/svg>)(\s*<span>417-319-4798<\/span>)/g,
  "$1</span>$2"
);

html = html.replace(
  /(<a href="mailto:office@gearhaven.com"[^>]*>\s*)<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92"/g,
  '$1<span class="gh-ai-icon gh-ai-icon--footer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"'
);
html = html.replace(
  /(<path d="m22 7-10 6L2 7"><\/path><\/svg>)(\s*<span>office@gearhaven.com<\/span>)/g,
  "$1</span>$2"
);

// Contact section info card icons - find pattern in contact section
html = html.replace(
  /stroke="#3D6D92"/g,
  'stroke="currentColor"'
);

fs.writeFileSync(file, html);
console.log("Icon classes patched");

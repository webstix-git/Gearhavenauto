const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "src", "generated", "page-content.ts");
let html = fs.readFileSync(file, "utf8");

// Hero trust strip
html = html.replace(
  /<span class="gh-ai-icon gh-ai-icon--hero"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"/g,
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6D9DC5" stroke-width="1.8"'
);
html = html.replace(
  /(<path d="m9 12 2 2 4-4"><\/path><\/svg>)<\/span>/g,
  "$1"
);
html = html.replace(
  /(<circle cx="16\.5" cy="16\.5" r="2"><\/circle><\/svg>)<\/span>/g,
  "$1"
);
html = html.replace(
  /(<path d="M16 3\.13a4 4 0 0 1 0 7\.75"><\/path><\/svg>)<\/span>/g,
  "$1"
);

// Care cards
html = html.replace(
  /<span class="gh-ai-icon gh-ai-icon--soft">\s*/g,
  '<span style="display:grid;place-items:center;width:42px;height:42px;border-radius:10px;background:#EEF2F5;color:#3E5C76">'
);

// Why choose
html = html.replace(
  /<span class="gh-ai-icon gh-ai-icon--dark" style="margin-bottom:16px">\s*/g,
  '<span style="display:grid;place-items:center;width:48px;height:48px;border-radius:12px;background:rgba(62,92,118,.35);border:1px solid rgba(143,176,206,.25);color:#CFE0EE;margin-bottom:16px">'
);

// Service grid
html = html.replace(
  /<div class="gh-ai-icon gh-ai-icon--service">\s*/g,
  '<div style="flex:none;display:grid;place-items:center;width:50px;height:50px;border-radius:13px;background:linear-gradient(135deg,#3E5C76,#2C4257);color:#fff;box-shadow:0 10px 20px -12px rgba(62,92,118,.8)">'
);

// Inspection checklist
html = html.replace(
  /<span class="gh-ai-icon gh-ai-icon--check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"/g,
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E0A32E"'
);
html = html.replace(
  /(<path d="M20 6 9 17l-5-5"><\/path><\/svg>)<\/span>/g,
  "$1"
);

// Footer contact
html = html.replace(
  /<span class="gh-ai-icon gh-ai-icon--footer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px">/g,
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D6D92" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none;margin-top:2px">'
);
html = html.replace(
  /(<circle cx="12" cy="10" r="3"><\/circle><\/svg>)<\/span>/g,
  "$1"
);
html = html.replace(
  /(<path d="M22 16\.92v3a2 2 0 0 1-2\.18 2[^"]*"><\/path><\/svg>)<\/span>/g,
  "$1"
);
html = html.replace(
  /(<path d="m22 7-10 6L2 7"><\/path><\/svg>)<\/span>/g,
  "$1"
);

fs.writeFileSync(file, html);
console.log("Icons reverted");

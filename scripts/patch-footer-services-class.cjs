const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "src", "generated");
const from =
  `        <div style="color:#fff;font-weight:700;font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'">Services</div>\n        <div style="display:flex;flex-direction:column;gap:10px;font-size:14.5px">`;
const to =
  `        <div style="color:#fff;font-weight:700;font-size:18px;margin-bottom:16px;font-family:'Bricolage Grotesque'">Services</div>\n        <div class="gh-footer-services" style="display:flex;flex-direction:column;gap:10px;font-size:14.5px">`;

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith("-content.ts"))) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, "utf8");
  if (!content.includes(from)) continue;
  content = content.replaceAll(from, to);
  fs.writeFileSync(fp, content);
  console.log("patched", file);
}

console.log("done");

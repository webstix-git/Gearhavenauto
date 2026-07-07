const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "src", "generated");
const from =
  '<p style="font-size:14px;line-height:1.6;margin:0 0 18px;max-width:280px">Full-service';
const to =
  '<p class="gh-footer-desc" style="font-size:14px;line-height:1.6;margin:0 0 18px;max-width:280px">Full-service';

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith("-content.ts"))) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, "utf8");
  if (!content.includes(from)) continue;
  content = content.replaceAll(from, to);
  fs.writeFileSync(fp, content);
  console.log("patched", file);
}

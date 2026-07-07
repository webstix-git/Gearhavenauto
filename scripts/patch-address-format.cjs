const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src", "generated");
const files = fs.readdirSync(ROOT).filter((f) => f.endsWith("-content.ts"));

const replacements = [
  [
    /1556 N Commercial Rd<br>Nixa, MO 65714/g,
    "1556 N Commercial Rd.<br>Nixa, MO 65714",
  ],
  [
    /1556 N Commercial Rd, Nixa, MO 65714, serving/g,
    "1556 N Commercial Rd.<br>Nixa, MO 65714, serving",
  ],
];

let total = 0;
for (const file of files) {
  const fp = path.join(ROOT, file);
  let content = fs.readFileSync(fp, "utf8");
  let changed = false;
  for (const [from, to] of replacements) {
    if (from.test(content)) {
      content = content.replace(from, to);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(fp, content);
    total++;
    console.log("patched", file);
  }
}
console.log("done", total, "files");

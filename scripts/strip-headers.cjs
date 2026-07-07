const fs = require("fs");
const path = require("path");

const files = [
  "page-content.ts",
  "about-content.ts",
  "services-content.ts",
];

const dir = path.join(__dirname, "..", "src", "generated");

for (const file of files) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, "utf8");

  content = content.replace(
    /\n\n  <!-- HEADER[\s\S]*?<\/header>\n/,
    "\n"
  );

  fs.writeFileSync(fp, content);
  console.log("Stripped header from", file);
}

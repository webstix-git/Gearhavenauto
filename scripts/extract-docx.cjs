const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const src = process.argv[2];
const dest = path.join(__dirname, "..", ".tmp-collision-docx");

if (!src || !fs.existsSync(src)) {
  console.error("Usage: node extract-docx.cjs <path-to-docx>");
  process.exit(1);
}

if (fs.existsSync(dest)) fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });

const zipCopy = path.join(dest, "source.zip");
fs.copyFileSync(src, zipCopy);

execSync(
  `powershell -NoProfile -Command "Expand-Archive -LiteralPath '${zipCopy.replace(/'/g, "''")}' -DestinationPath '${dest.replace(/'/g, "''")}' -Force"`,
  { stdio: "inherit" }
);
fs.unlinkSync(zipCopy);

const xml = fs.readFileSync(path.join(dest, "word/document.xml"), "utf8");
const text = xml
  .replace(/<w:tab[^>]*\/>/g, "\t")
  .replace(/<w:br[^>]*\/>/g, "\n")
  .replace(/<\/w:p>/g, "\n")
  .replace(/<[^>]+>/g, "")
  .replace(/&amp;/g, "&")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/\n{3,}/g, "\n\n")
  .trim();

console.log(text);

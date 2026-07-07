const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src");
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fp);
    else if (/\.(ts|tsx|css)$/.test(entry.name)) files.push(fp);
  }
}

walk(path.join(root, "generated"));
walk(path.join(root, "data"));
files.push(path.join(root, "app", "globals.css"));

function clean(text) {
  return text
    .replace(/\u2013\u0080\u0094/g, ", ")
    .replace(/\u2013\u0080\u008d/g, " - ")
    .replace(/\u2013\u0080/g, " - ")
    .replace(/\u0080\u0094/g, "")
    .replace(/\u0080\u008d/g, "")
    .replace(/\u2014/g, ", ")
    .replace(/\u2013/g, " - ")
    .replace(/font-style:\s*italic/gi, "font-style:normal")
    .replace(/<em>/g, "<span>")
    .replace(/<\/em>/g, "</span>")
    .replace(/<i>/g, "<span>")
    .replace(/<\/i>/g, "</span>")
    .replace(/ , /g, ", ")
}

for (const fp of files) {
  const before = fs.readFileSync(fp, "utf8");
  const after = clean(before);
  if (after !== before) {
    fs.writeFileSync(fp, after);
    console.log("cleaned", path.relative(root, fp));
  }
}

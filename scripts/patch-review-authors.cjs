const fs = require("fs");
const path = require("path");

const fp = path.join(__dirname, "..", "src", "generated", "reviews-content.ts");
let s = fs.readFileSync(fp, "utf8");

s = s.replace(
  /<div><div style="font-weight:700;font-size:15px;color:#14202B">([^<]+)<\/div><div style="font-size:12\.5px;color:#8A96A1">Google review<\/div><\/div>/g,
  '<div class="gh-review-author"><span style="font-weight:700;font-size:15px;color:#14202B">$1</span><span style="font-size:12.5px;color:#8A96A1">Google review</span></div>'
);

fs.writeFileSync(fp, s);
console.log("updated reviews author layout");

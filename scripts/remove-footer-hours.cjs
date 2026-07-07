const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src");
const files = [
  "generated/page-content.ts",
  "generated/contact-content.ts",
  "generated/get-a-quote-content.ts",
  "generated/reviews-content.ts",
  "generated/about-content.ts",
  "generated/services-content.ts",
  "generated/oil-changes-content.ts",
  "generated/faqs-content.ts",
  "generated/gallery-content.ts",
];

const hours =
  /\s*<span style="color:#5E6E7B;padding-left:30px">Monday &ndash; Friday, 8:00 AM &ndash; 5:00 PM<\/span>/g;

for (const f of files) {
  const fp = path.join(root, f);
  let t = fs.readFileSync(fp, "utf8");
  if (hours.test(t)) {
    t = t.replace(hours, "");
    fs.writeFileSync(fp, t);
    console.log("removed hours:", f);
  }
}

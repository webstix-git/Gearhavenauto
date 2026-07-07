const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "src", "generated", "page-content.ts");
let lines = fs.readFileSync(file, "utf8").split(/\r?\n/);

// Remove broken protect lines (junk after first flex-wrap div)
const junkIdx = lines.findIndex(
  (l) =>
    l.includes('flex-wrap:wrap">') &&
    l.includes("relationship") &&
    l.includes("</h2>")
);
if (junkIdx !== -1) {
  // remove junk line + next 2 duplicate paragraphs
  lines.splice(junkIdx, 3);
  console.log("Removed protect junk at line", junkIdx + 1);
}

const content = lines.join("\n");

const stars = Array(5)
  .fill(
    '<svg width="17" height="17" viewBox="0 0 24 24" fill="#E0A32E"><path d="M12 2l3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9L12 2z"></path></svg>'
  )
  .join("");

const reviews = [
  {
    initials: "CG",
    name: "Carly Garrett",
    text:
      "I can't say enough good things. They were more than helpful getting my truck in right away and getting it diagnosed! When you depend on your vehicle for your own job a quick turn around is what you need. I dropped off my truck on Monday evening and was back in it on Wednesday afternoon! They did an excellent job!!! Will highly recommend them to everyone! Not only did they diagnose the problem I dropped it off for but looked at the whole truck to make sure it was running like it needed to be. Greatly appreciated their attention to detail. Just shows that they care!",
  },
  {
    initials: "SB",
    name: "Sharena Blunt",
    text:
      "Everyone here is amazing! Very knowledgeable and they get it done the right way! It's hard to trust anyone with your vehicle but I would definitely trust them with any of mine they went above and beyond to get both of mine fixed. All the staff is amazing! I highly recommend this place to anyone who needs anything done to their vehicle.",
  },
  {
    initials: "PM",
    name: "Paul Must",
    text:
      "I had the pleasure of working with them recently, and I couldn't be happier with the service. From the moment I walked in, the staff was friendly, knowledgeable, and ready to help. They took the time to explain the issue with my vehicle in detail and offered a fair, transparent estimate. The repair was completed quickly and at a reasonable cost. What really stood out was the professionalism and honesty—it's rare to find a mechanic you can trust. I highly recommend to anyone looking for reliable and top-notch service!",
  },
];

const reviewCards = reviews
  .map(
    (r) => `        <div data-reveal style="background:#F6F4F0;border:1px solid #E7E4DD;border-radius:16px;padding:30px 28px">
          <div style="display:flex;gap:2px;margin-bottom:16px">${stars}</div>
          <p style="font-size:16px;line-height:1.6;color:#2E3D48;margin:0 0 22px;font-weight:500">"${r.text}"</p>
          <div style="display:flex;align-items:center;gap:12px">
            <div style="width:42px;height:42px;border-radius:50%;background:#3E5C76;color:#fff;display:grid;place-items:center;font-weight:700;font-family:'Bricolage Grotesque'">${r.initials}</div>
            <div><div style="font-weight:700;font-size:15px">${r.name}</div><div style="font-size:13px;color:#7C8B97">Five stars</div></div>
          </div>
        </div>`
  )
  .join("\n");

let html = content;
const gridMarker = '      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">';
const testimonialsIdx = html.indexOf("<!-- TESTIMONIALS -->");
const gridStart = html.indexOf(gridMarker, testimonialsIdx);
const ctaMarker = '      <div data-reveal style="text-align:center;margin-top:36px">';
const gridEnd = html.indexOf(ctaMarker, gridStart);

if (gridStart === -1 || gridEnd === -1) {
  console.error("gridStart", gridStart, "gridEnd", gridEnd);
  process.exit(1);
}

html =
  html.slice(0, gridStart) +
  `${gridMarker}\n${reviewCards}\n      </div>\n` +
  html.slice(gridEnd);

html = html.replace(
  /<a href="#" style="display:inline-flex;align-items:center;gap:9px;color:#3E5C76;font-weight:700;font-size:16px" class="gh-hover-24">[\s\S]*?<\/a>\s*\n\s*<div style="font-size:13px;color:#A8B2BB;margin-top:8px">Reviews shown are examples[\s\S]*?<\/div>/,
  `<a href="#" style="display:inline-flex;align-items:center;gap:9px;background:#3E5C76;color:#fff;font-weight:700;font-size:16px;padding:14px 28px;border-radius:9px" class="gh-hover-24">Read More Reviews
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>`
);

fs.writeFileSync(file, html);
console.log("All fixes applied");

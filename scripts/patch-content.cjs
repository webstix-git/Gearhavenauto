const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "src", "generated", "page-content.ts");
let html = fs.readFileSync(file, "utf8");

// Hero: remove badge and update copy
html = html.replace(
  /        <div data-reveal style="display:inline-flex;align-items:center;gap:9px;background:rgba\(224,163,46,.14\)[^]*?Nixa, Missouri · Serving the Ozarks\n        <\/div>\n/,
  ""
);
html = html.replace(
  /Your Vehicle's<br>Safe Haven/,
  "Your Vehicle's Safe Haven"
);
html = html.replace(
  /<p data-reveal style="font-size:20px;line-height:1.5;color:#CBD6E0;font-weight:500;margin:0 0 16px;max-width:560px">Trusted auto &amp; diesel repair[^<]*<\/p>/,
  '<p data-reveal style="font-size:20px;line-height:1.5;color:#CBD6E0;font-weight:500;margin:0 0 16px;max-width:600px">Trusted Auto &amp; Diesel Repair for Cars, Trucks &amp; Fleets in Nixa, Missouri</p>'
);
html = html.replace(
  /<p data-reveal style="font-size:16\.5px;line-height:1\.6;color:#9BAAB7;margin:0 0 34px;max-width:540px">No pressure\. No surprises\.[^<]*<\/p>/,
  `<p data-reveal style="font-size:18px;line-height:1.6;color:#9BAAB7;margin:0 0 16px;max-width:600px">Whether you're maintaining a family SUV, diagnosing a check engine light, repairing a work truck, or managing an entire fleet, Gear Haven Auto &amp; Diesel delivers honest recommendations, expert repairs, and clear communication every step of the way.</p>
        <p data-reveal style="font-size:18px;line-height:1.6;color:#9BAAB7;margin:0 0 34px;max-width:600px">We believe vehicle repair should be straightforward. No pressure. No surprises. Just quality work from a team that genuinely cares about keeping you safe and on the road.</p>`
);

// Protect Your Investment
html = html.replace(
  /        <div style="font-size:13px;font-weight:700;letter-spacing:1\.5px;text-transform:uppercase;color:#3E5C76;margin-bottom:12px">Protect Your Investment<\/div>\n        <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:40px;line-height:1\.1;letter-spacing:-1px;margin:0 0 18px">More than a repair[^<]*<\/h2>\n        <p style="font-size:17px;line-height:1\.65;color:#5C6B76;margin:0 0 16px">Your vehicle is one of the biggest investments you make\. At Gear Haven[^<]*<\/p>\n        <p style="font-size:17px;line-height:1\.65;color:#5C6B76;margin:0 0 26px">We're proud to call Nixa home\.[^<]*<\/p>/,
  `        <h2 style="font-family:'Bricolage Grotesque';font-weight:700;font-size:40px;line-height:1.1;letter-spacing:-1px;margin:0 0 18px">Protect Your Investment</h2>
        <p style="font-size:17px;line-height:1.65;color:#5C6B76;margin:0 0 16px">Your vehicle is one of the biggest investments you make.</p>
        <p style="font-size:17px;line-height:1.65;color:#5C6B76;margin:0 0 16px">At Gear Haven Auto &amp; Diesel, we don't just repair vehicles. We help you maintain them, understand them, and get the most life possible out of them.</p>
        <p style="font-size:17px;line-height:1.65;color:#5C6B76;margin:0 0 26px">Our goal is simple: help you avoid costly breakdowns, make informed decisions, and stay safe on the road.</p>`
);

const stars =
  '<svg width="17" height="17" viewBox="0 0 24 24" fill="#E0A32E"><path d="M12 2l3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9L12 2z"></path></svg>'.repeat(
    5
  );

const review1 = `        <div data-reveal style="background:#F6F4F0;border:1px solid #E7E4DD;border-radius:16px;padding:30px 28px">
          <div style="display:flex;gap:2px;margin-bottom:16px">${stars}</div>
          <p style="font-size:16px;line-height:1.6;color:#2E3D48;margin:0 0 22px;font-weight:500">"I can't say enough good things. They were more than helpful getting my truck in right away and getting it diagnosed! When you depend on your vehicle for your own job a quick turn around is what you need. I dropped off my truck on Monday evening and was back in it on Wednesday afternoon! They did an excellent job!!! Will highly recommend them to everyone! Not only did they diagnose the problem I dropped it off for but looked at the whole truck to make sure it was running like it needed to be. Greatly appreciated their attention to detail. Just shows that they care!"</p>
          <div style="display:flex;align-items:center;gap:12px">
            <div style="width:42px;height:42px;border-radius:50%;background:#3E5C76;color:#fff;display:grid;place-items:center;font-weight:700;font-family:'Bricolage Grotesque'">CG</div>
            <div><div style="font-weight:700;font-size:15px">Carly Garrett</div><div style="font-size:13px;color:#7C8B97">Five stars</div></div>
          </div>
        </div>`;

const review2 = `        <div data-reveal style="background:#F6F4F0;border:1px solid #E7E4DD;border-radius:16px;padding:30px 28px">
          <div style="display:flex;gap:2px;margin-bottom:16px">${stars}</div>
          <p style="font-size:16px;line-height:1.6;color:#2E3D48;margin:0 0 22px;font-weight:500">"Everyone here is amazing! Very knowledgeable and they get it done the right way! It's hard to trust anyone with your vehicle but I would definitely trust them with any of mine they went above and beyond to get both of mine fixed. All the staff is amazing! I highly recommend this place to anyone who needs anything done to their vehicle."</p>
          <div style="display:flex;align-items:center;gap:12px">
            <div style="width:42px;height:42px;border-radius:50%;background:#3E5C76;color:#fff;display:grid;place-items:center;font-weight:700;font-family:'Bricolage Grotesque'">SB</div>
            <div><div style="font-weight:700;font-size:15px">Sharena Blunt</div><div style="font-size:13px;color:#7C8B97">Five stars</div></div>
          </div>
        </div>`;

const review3 = `        <div data-reveal style="background:#F6F4F0;border:1px solid #E7E4DD;border-radius:16px;padding:30px 28px">
          <div style="display:flex;gap:2px;margin-bottom:16px">${stars}</div>
          <p style="font-size:16px;line-height:1.6;color:#2E3D48;margin:0 0 22px;font-weight:500">"I had the pleasure of working with them recently, and I couldn't be happier with the service. From the moment I walked in, the staff was friendly, knowledgeable, and ready to help. They took the time to explain the issue with my vehicle in detail and offered a fair, transparent estimate. The repair was completed quickly and at a reasonable cost. What really stood out was the professionalism and honesty—it's rare to find a mechanic you can trust. I highly recommend to anyone looking for reliable and top-notch service!"</p>
          <div style="display:flex;align-items:center;gap:12px">
            <div style="width:42px;height:42px;border-radius:50%;background:#3E5C76;color:#fff;display:grid;place-items:center;font-weight:700;font-family:'Bricolage Grotesque'">PM</div>
            <div><div style="font-weight:700;font-size:15px">Paul Must</div><div style="font-size:13px;color:#7C8B97">Five stars</div></div>
          </div>
        </div>`;

html = html.replace(
  /      <div style="display:grid;grid-template-columns:repeat\(3,1fr\);gap:24px">[\s\S]*?      <\/div>\n      <div data-reveal style="text-align:center;margin-top:36px">/,
  `      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">\n${review1}\n${review2}\n${review3}\n      </div>\n      <div data-reveal style="text-align:center;margin-top:36px">`
);

html = html.replace(
  /        <a href="#" style="display:inline-flex;align-items:center;gap:9px;color:#3E5C76;font-weight:700;font-size:16px" class="gh-hover-24">Read more reviews on Google[\s\S]*?<\/a>\n        <div style="font-size:13px;color:#A8B2BB;margin-top:8px">Reviews shown are examples[^<]*<\/div>/,
  `        <a href="#" style="display:inline-flex;align-items:center;gap:9px;background:#3E5C76;color:#fff;font-weight:700;font-size:16px;padding:14px 28px;border-radius:9px" class="gh-hover-24">Read More Reviews
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>`
);

fs.writeFileSync(file, html);
console.log("Patched page-content.ts");

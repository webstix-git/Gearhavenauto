const fs = require("fs");
const path = require("path");

const followBlock = `        <div class="gh-footer-social" style="display:flex;align-items:center;gap:10px">
          <span style="font-size:14px;color:#8FA0AD">Follow Us On</span>
          <a href="https://www.facebook.com/people/GearHaven/61591811460065/" target="_blank" rel="noopener noreferrer" aria-label="Follow Gearhaven on Facebook" class="gh-footer-social-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="#3D6D92" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
        </div>`;

const old = `<p class="gh-footer-desc" style="font-size:14px;line-height:1.6;margin:0 0 18px;max-width:280px">Full-service auto &amp; diesel repair proudly serving Nixa and the Ozarks. Honest work, clear answers, treated like family.</p>
      </div>`;

const neu = `<p class="gh-footer-desc" style="font-size:14px;line-height:1.6;margin:0 0 18px;max-width:280px">Full-service auto &amp; diesel repair proudly serving Nixa and the Ozarks. Honest work, clear answers, treated like family.</p>
${followBlock}
      </div>`;

const dir = path.join(__dirname, "..", "src", "generated");

for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith("-content.ts")) continue;
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, "utf8");
  if (c.includes("gh-footer-social")) {
    console.log("skip", f);
    continue;
  }
  if (!c.includes(old)) {
    console.log("no match", f);
    continue;
  }
  c = c.replace(old, neu);
  fs.writeFileSync(p, c);
  console.log("patched", f);
}

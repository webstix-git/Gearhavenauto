const fs = require("fs");
const path = require("path");

function addClass(content, search, className) {
  if (content.includes(`class="${className}"`)) return content;
  return content.split(search).join(search.replace("<div ", `<div class="${className}" `));
}

function addClassSection(content, search, className) {
  if (content.includes(`class="${className}"`)) return content;
  return content.split(search).join(
    search.replace("<section ", `<section class="${className}" `)
  );
}

const dir = path.join(__dirname, "..", "src", "generated");

const rules = [
  {
    test: /display:grid;grid-template-columns:1\.4fr 1fr 1fr 1fr;gap:40px/,
    replace:
      'class="gh-footer-grid" style="display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px',
    before: '<div style="max-width:',
  },
  {
    test: /display:grid;grid-template-columns:repeat\(3,1fr\)/,
    replace:
      'class="gh-grid-3" style="display:grid;grid-template-columns:repeat(3,1fr)',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:repeat\(4,1fr\)/,
    replace:
      'class="gh-grid-4" style="display:grid;grid-template-columns:repeat(4,1fr)',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1fr 1fr;gap:11px 24px/,
    replace:
      'class="gh-service-list-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:11px 24px',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1fr 1fr;gap:16px/,
    replace:
      'class="gh-form-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:16px',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1fr 1fr;gap:26px/,
    replace:
      'class="gh-service-categories" style="display:grid;grid-template-columns:1fr 1fr;gap:26px',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1fr 1fr;gap:56px/,
    replace:
      'class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;gap:56px',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1fr 1fr;gap:64px/,
    replace:
      'class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;gap:64px',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1fr 1fr;gap:20px/,
    replace:
      'class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;gap:20px',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1fr 1fr;align-items:stretch/,
    replace:
      'class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;align-items:stretch',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1fr 1fr;align-items:start/,
    replace:
      'class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;align-items:start',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1fr 1fr;align-items:center/,
    replace:
      'class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;align-items:center',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1\.05fr \.95fr/,
    replace:
      'class="gh-grid-asymmetric" style="display:grid;grid-template-columns:1.05fr .95fr',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1\.1fr \.9fr/,
    replace:
      'class="gh-grid-asymmetric" style="display:grid;grid-template-columns:1.1fr .9fr',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1fr 1\.05fr/,
    replace:
      'class="gh-grid-asymmetric" style="display:grid;grid-template-columns:1fr 1.05fr',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1\.05fr 1fr/,
    replace:
      'class="gh-grid-asymmetric" style="display:grid;grid-template-columns:1.05fr 1fr',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:\.95fr 1\.05fr/,
    replace:
      'class="gh-grid-asymmetric" style="display:grid;grid-template-columns:.95fr 1.05fr',
    before: "<div ",
  },
  {
    test: /display:grid;grid-template-columns:1fr 1fr;min-height:520px/,
    replace:
      'class="gh-map-split" style="display:grid;grid-template-columns:1fr 1fr;min-height:520px',
    before: "<div ",
  },
];

const sectionRules = [
  { search: 'padding:92px 28px', className: "gh-section-pad" },
  { search: 'padding:88px 28px', className: "gh-section-pad" },
  { search: 'padding:90px 28px', className: "gh-section-pad" },
];

const heroRules = [
  { search: 'padding:240px 28px 108px', className: "gh-hero-inner" },
  { search: 'padding:216px 28px 104px', className: "gh-hero-inner" },
  { search: 'padding:214px 28px 102px', className: "gh-hero-inner" },
  { search: 'padding:200px 28px 88px', className: "gh-hero-inner gh-utility-hero-inner" },
];

const bannerRules = [
  {
    search:
      'data-reveal style="position:relative;display:grid;grid-template-columns:1.05fr .95fr',
    className: "gh-diesel-banner",
  },
];

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith("-content.ts"))) {
  const fp = path.join(dir, file);
  let content = fs.readFileSync(fp, "utf8");
  let changed = false;

  for (const rule of rules) {
    const needle = `<div style="max-width:`;
    if (rule.before === "<div " && content.includes(rule.replace.split('"')[0])) {
      // already patched
      continue;
    }
    const from = `<div style="${rule.replace.includes("gh-footer-grid") ? "" : ""}`;
    const oldSnippet = rule.replace.replace(/^class="[^"]+" style="/, "");
    const oldFull = `<div style="${oldSnippet}`;
    if (content.includes(oldFull) && !content.includes(rule.replace.split('"')[0])) {
      content = content.replaceAll(oldFull, `<div ${rule.replace}`);
      changed = true;
    }
  }

  // Simpler pass: direct replacements
  const direct = [
    [
      '<div style="max-width:1240px;margin:0 auto;padding:60px 28px 32px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px',
      '<div class="gh-footer-grid" style="max-width:1240px;margin:0 auto;padding:60px 28px 32px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px',
    ],
    [
      '<div style="max-width:1320px;margin:0 auto;padding:60px 28px 32px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px',
      '<div class="gh-footer-grid" style="max-width:1320px;margin:0 auto;padding:60px 28px 32px;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px',
    ],
    [
      '<div style="display:grid;grid-template-columns:repeat(3,1fr)',
      '<div class="gh-grid-3" style="display:grid;grid-template-columns:repeat(3,1fr)',
    ],
    [
      '<div style="display:grid;grid-template-columns:repeat(4,1fr)',
      '<div class="gh-grid-4" style="display:grid;grid-template-columns:repeat(4,1fr)',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:11px 24px',
      '<div class="gh-service-list-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:11px 24px',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px',
      '<div class="gh-form-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:16px',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:26px',
      '<div class="gh-service-categories" style="display:grid;grid-template-columns:1fr 1fr;gap:26px',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:56px',
      '<div class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;gap:56px',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:64px',
      '<div class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;gap:64px',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px',
      '<div class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;gap:20px',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1fr;min-height:520px',
      '<div class="gh-map-split" style="display:grid;grid-template-columns:1fr 1fr;min-height:520px',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1fr;align-items:stretch',
      '<div class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;align-items:stretch',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1fr;align-items:start',
      '<div class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;align-items:start',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1fr;align-items:center',
      '<div class="gh-grid-2" style="display:grid;grid-template-columns:1fr 1fr;align-items:center',
    ],
    [
      '<div style="display:grid;grid-template-columns:1.05fr .95fr',
      '<div class="gh-grid-asymmetric" style="display:grid;grid-template-columns:1.05fr .95fr',
    ],
    [
      '<div style="display:grid;grid-template-columns:1.1fr .9fr',
      '<div class="gh-grid-asymmetric" style="display:grid;grid-template-columns:1.1fr .9fr',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1.05fr',
      '<div class="gh-grid-asymmetric" style="display:grid;grid-template-columns:1fr 1.05fr',
    ],
    [
      '<div style="display:grid;grid-template-columns:1.05fr 1fr',
      '<div class="gh-grid-asymmetric" style="display:grid;grid-template-columns:1.05fr 1fr',
    ],
    [
      '<div style="display:grid;grid-template-columns:.95fr 1.05fr',
      '<div class="gh-grid-asymmetric" style="display:grid;grid-template-columns:.95fr 1.05fr',
    ],
    [
      '<div style="display:grid;grid-template-columns:1fr 1fr;min-height:520px',
      '<div class="gh-map-split" style="display:grid;grid-template-columns:1fr 1fr;min-height:520px',
    ],
    [
      '<div style="position:relative;max-width:1320px;margin:0 auto;padding:88px 28px;display:grid;grid-template-columns:1.1fr .9fr',
      '<div class="gh-section-pad gh-grid-asymmetric" style="position:relative;max-width:1320px;margin:0 auto;padding:88px 28px;display:grid;grid-template-columns:1.1fr .9fr',
    ],
  ];

  for (const [from, to] of direct) {
    if (content.includes(from) && !content.includes(to)) {
      content = content.replaceAll(from, to);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(fp, content);
    console.log("patched", file);
  }
}

console.log("done");

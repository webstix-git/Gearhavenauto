import type { BlogPost } from "./blog-types";

function article(...blocks: string[]) {
  return blocks.join("\n");
}

const posts: BlogPost[] = [
  {
    slug: "check-engine-light-common-causes", title:
      "Why Is My Check Engine Light On? Common Causes and What to Do Next", excerpt:
      "A lit check engine light doesn't always mean disaster, but ignoring it can turn a small issue into an expensive repair. Here's what Missouri drivers should know.", category: "Diagnostics", author: "Gearhaven", publishedAt: "2026-07-07", readTime: "6 min read", image: "/images/asset-3-2597b98e.jpg", content: article(
      `<p class="gh-lead">That amber engine icon on your dash is your vehicle's way of saying something needs attention. The good news: it often points to a fixable problem. The risk: waiting too long can let a minor issue snowball into major damage.</p>`, `<h2>What the check engine light actually means</h2>`, `<p>Modern vehicles monitor dozens of systems, fuel mixture, emissions, ignition, transmission, and more. When a sensor reads something outside normal range, the engine control module stores a diagnostic trouble code (DTC) and turns on the check engine light.</p>`, `<h2>Common causes we see in the shop</h2>`, `<ul>
        <li><strong>Loose or faulty gas cap</strong>, allows fuel vapors to escape and triggers an emissions code</li>
        <li><strong>Worn spark plugs or ignition coils</strong>, cause misfires, rough idle, and reduced fuel economy</li>
        <li><strong>Oxygen sensor failure</strong>, affects fuel trim and emissions; hurts MPG if ignored</li>
        <li><strong>Catalytic converter issues</strong>, often a downstream result of unaddressed misfires</li>
        <li><strong>Mass airflow or EVAP system faults</strong>, common on higher-mileage vehicles</li>
      </ul>`, `<h2>What to do when the light comes on</h2>`, `<p>If the light is steady (not flashing) and the vehicle drives normally, schedule a diagnostic appointment within a few days. A <strong>flashing</strong> check engine light usually indicates an active misfire, reduce load and get it checked promptly to avoid catalytic converter damage.</p>`, `<p>At Gearhaven, we use professional scan tools and live data to pinpoint the root cause, not just replace parts and hope. We'll explain what we find in plain language and give you honest options before any work begins.</p>`, `<p><a href="/contact">Schedule a diagnostic appointment</a> or call us at <a href="tel:4173194798">417-319-4798</a>.</p>`
    ), }, {
    slug: "summer-vehicle-maintenance-missouri", title: "Summer Vehicle Maintenance Checklist for Missouri Drivers", excerpt:
      "Heat, humidity, and long highway trips put extra stress on your vehicle. Use this seasonal checklist to stay ahead of breakdowns.", category: "Seasonal", author: "Gearhaven", publishedAt: "2026-07-07", readTime: "5 min read", image: "/images/asset-4-e6b0a31d.jpg", content: article(
      `<p class="gh-lead">Missouri summers bring 90°+ days, sudden storms, and plenty of road trips. Your cooling system, tires, and A/C work harder than any other season, a little preventative care goes a long way.</p>`, `<h2>Cooling system check</h2>`, `<p>Inspect coolant level and condition. Hoses should be firm, not soft or cracked. If your temperature gauge runs high or you notice sweet-smelling steam, don't wait, overheating can warp heads and destroy engines.</p>`, `<h2>Air conditioning performance</h2>`, `<p>Weak or warm A/C isn't just uncomfortable, it can signal low refrigerant, a failing compressor, or a leak. We test system pressure and inspect for leaks before recommending repairs.</p>`, `<h2>Tires, brakes, and battery</h2>`, `<ul>
        <li>Check tire pressure monthly (heat increases pressure)</li>
        <li>Inspect tread depth and sidewalls for cracking</li>
        <li>Test battery, heat accelerates internal corrosion</li>
        <li>Listen for brake noise; moisture and heat affect pad life</li>
      </ul>`, `<h2>Fluids and filters</h2>`, `<p>Oil, transmission fluid, brake fluid, and cabin air filters all deserve attention before summer travel season. We'll match service intervals to how you actually drive, city, highway, or towing.</p>`, `<p>Stop by for a <a href="/digital-inspection">free digital inspection</a> and we'll build a maintenance plan tailored to your vehicle.</p>`
    ), }, {
    slug: "dealership-vs-independent-repair-shop", title:
      "Dealership vs Independent Repair Shop: Which Is Better for Your Vehicle?", excerpt:
      "Both options have strengths. Here's how to decide based on warranty, cost, expertise, and the kind of relationship you want with your shop.", category: "Maintenance", author: "Gearhaven", publishedAt: "2026-07-07", readTime: "6 min read", image: "/images/asset-5-2a89faa0.jpg", content: article(
      `<p class="gh-lead">There's no one-size-fits-all answer. Dealerships excel in brand-specific recalls and factory tooling; independent shops often win on value, flexibility, and personal service. What matters most is trust and competence.</p>`, `<h2>When a dealership makes sense</h2>`, `<ul>
        <li>Warranty-covered repairs at no cost to you</li>
        <li>Factory recall campaigns and technical service bulletins</li>
        <li>Brand-new models with highly specialized systems</li>
      </ul>`, `<h2>When an independent shop is the better fit</h2>`, `<ul>
        <li>Out-of-warranty vehicles where labor rates matter</li>
        <li>Diesel trucks, many independents specialize deeper than general dealer lanes</li>
        <li>Fleet accounts needing flexible scheduling and consolidated billing</li>
        <li>Drivers who want to talk directly with the technician working on their car</li>
      </ul>`, `<h2>What to look for in any shop</h2>`, `<p>ASE certifications, clear written estimates, photos or digital inspections, and willingness to explain repairs in plain language. At Gearhaven, we treat every vehicle like it belongs to family, because in Nixa, it often does.</p>`, `<p><a href="/about">Learn about our team</a> or <a href="/services">see our full service list</a>.</p>`
    ), },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aMatch = a.category === post.category ? 1 : 0;
      const bMatch = b.category === post.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

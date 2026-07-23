import { buildServicePageHtml } from "@/lib/build-service-page-html";
import { CHECK_ICON } from "@/lib/service-page-icons";

function faqCheckList(items: string[]) {
  return `<div style="display:flex;flex-direction:column;gap:10px">${items
    .map(
      (item) =>
        `<div style="display:flex;align-items:flex-start;gap:10px;font-size:16px;line-height:1.55;color:#5C6B76;font-weight:500">${CHECK_ICON}<span>${item}</span></div>`
    )
    .join("")}</div>`;
}

export type ServicePageData = {
  slug: string;
  breadcrumbLabel: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
    extra?: string;
    ctaLabel: string;
    ctaHref: string;
    hideCta?: boolean;
  };
  why: {
    label: string;
    title: string;
    paragraphs: [string, string];
    extraParagraphs?: string[];
    callout?: {
      title: string;
      ctaLabel: string;
      ctaHref: string;
    };
    stats?: { value: string; label: string }[];
    image: string;
    imageAlt: string;
  };
  included: {
    label: string;
    title: string;
    intro?: string;
    introParagraphs?: string[];
    headerWidth?: number;
    items: { icon: string; title: string; description: string }[];
  };
  options?: {
    label?: string;
    title: string;
    description?: string;
    outro?: string;
    headerWidth?: number;
    layout?: "default" | "split-ticks";
    image?: string;
    imageAlt?: string;
    items: { title: string; description?: string; featured?: boolean }[];
  };
  signs: {
    label?: string;
    title: string;
    intro?: string;
    outro?: string;
    items: string[];
  };
  process: {
    label?: string;
    title: string;
    intro?: string;
    steps: { title: string; description: string }[];
  };
  cta: {
    title: string;
    description: string;
    extra?: string;
    extraParagraphs?: string[];
    align?: "left" | "center";
  };
  sectionLayout?: "default" | "stacked";
  spotlight?: {
    variant: "light" | "dark";
    label: string;
    title: string;
    paragraphs: string[];
    paragraphsAfter?: string[];
    bullets?: string[];
    bulletCards?: { icon: string; title: string }[];
    contentWidth?: number;
    layout?: "default" | "impact-inspection";
    outcomeLabels?: [string, string];
    image?: string;
    imageAlt?: string;
    imagePosition?: "left" | "right";
  }[];
  spotlightAfter?: {
    variant: "light" | "dark";
    label: string;
    title: string;
    paragraphs: string[];
    paragraphsAfter?: string[];
    bullets?: string[];
    bulletCards?: { icon: string; title: string }[];
    contentWidth?: number;
    layout?: "default" | "impact-inspection";
    outcomeLabels?: [string, string];
    image?: string;
    imageAlt?: string;
    imagePosition?: "left" | "right";
  }[];
  faqs?: {
    title: string;
    items: { question: string; answer: string }[];
  };
};

const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: "tires", breadcrumbLabel: "Tires", metaTitle: "Tires & Wheel Alignments", metaDescription:
      "Tire sales, mounting, balancing, rotations, and alignments in Nixa, MO. Get honest sizing advice for cars, trucks, and local fleet vehicles.", hero: {
      image: "/images/gallery-8b2c3473.jpg", imageAlt: "Alignment service at Gearhaven", title: "Tires &amp; alignments,<br>done right.", description:
        "Good tires and a straight alignment keep you safe on Ozarks roads, and save you money by wearing evenly. We'll help you pick the right set and install them properly.", ctaLabel: "Schedule Tire Service", ctaHref: "/contact-us", }, why: {
      label: "Why It Matters", title: "Where rubber meets the road.", paragraphs: [
        "Your tires are the only thing between you and the pavement. Worn tread, low pressure, or a bad alignment don't just feel off, they wear out tires faster, hurt fuel economy, and make stopping harder when you need it most.", "We'll measure tread depth, check pressure, and look at wear patterns before we recommend anything. If you need new rubber, we'll walk you through options that fit how you actually drive, not just the most expensive set on the shelf.", ], stats: [
        { value: "Same-day", label: "most tire installs" }, { value: "Free", label: "pressure check" }, { value: "Cars & trucks", label: "all sizes" }, ], image: "/images/gallery-acc3bedf.jpg", imageAlt: "Tire and wheel service at Gearhaven", }, included: {
      label: "What's Included", title: "Sales, service, and alignment.", items: [
        {
          icon: "tire", title: "Tire sales &amp; sizing", description:
            "We help you find the right size and tread for your vehicle, driving habits, and budget.", }, {
          icon: "wrench", title: "Mount &amp; balance", description:
            "Professional installation so your tires wear evenly and ride smooth from day one.", }, {
          icon: "gauge", title: "Rotation &amp; balancing", description:
            "Regular rotations extend tire life. We balance wheels to cut vibration at highway speed.", }, {
          icon: "check", title: "Tire repair", description:
            "Nail in the tread? We'll tell you honestly if it's fixable or time for a replacement.", }, {
          icon: "tire", title: "Wheel alignments", description:
            "Precision alignment corrects pulling and uneven wear, especially after suspension work.", }, {
          icon: "camera", title: "Free digital inspection", description:
            "Every visit includes photos and plain-language notes on anything worth watching.", }, ], }, options: {
      label: "Tire Options", title: "The right tread for how you drive.", description:
        "Not sure what you need? Tell us where you drive and we'll point you in the right direction.", items: [
        {
          title: "All-Season", description:
            "A solid everyday choice for commuting, errands, and most Missouri weather.", }, {
          title: "Highway &amp; Touring", description:
            "Quiet, long-wearing tires built for lots of miles on Ozarks highways.", }, {
          title: "All-Terrain", description:
            "Extra grip for gravel roads, job sites, and weekend trails without going full mud tire.", }, {
          title: "Commercial &amp; Fleet", description:
            "Heavy-duty options for work trucks and fleet vehicles that earn their keep every day.", featured: true, }, ], }, signs: {
      label: "Signs You're Due", title: "When to come see us", items: [
        "Tread is worn or you can see the wear bars", "The vehicle pulls left or right on a straight road", "Steering wheel vibration at highway speed", "TPMS light is on or tires look low", "Uneven wear on inside or outside edges", ], }, process: {
      label: "How It Works", title: "Simple, start to finish", steps: [
        {
          title: "Call or stop by", description:
            "Tell us your tire size or vehicle, we'll check stock and get you scheduled.", }, {
          title: "Inspect &amp; recommend", description:
            "We look at tread, wear patterns, and alignment before suggesting anything.", }, {
          title: "Install &amp; balance", description:
            "New tires mounted, balanced, and torqued to spec. Alignment if needed.", }, {
          title: "Back on the road", description:
            "You leave knowing your tires are right, pressure is set, and everything was checked.", }, ], }, cta: {
      title: "Need tires or an alignment?", description:
        "Give us a call or request an appointment. We'll give you a straight answer on what you need, and what can wait.", }, }, {
    slug: "preventive-maintenance", breadcrumbLabel: "Preventive Maintenance", metaTitle: "Preventive Maintenance Plans", metaDescription:
      "Preventive maintenance in Nixa, MO for cars, trucks, and diesels. Stay ahead of breakdowns with clear service intervals and no pressure upsells.", hero: {
      image: "/images/oil-changes-8b2c3473.jpg", imageAlt: "Technician performing maintenance at Gearhaven", title: "Stay ahead<br>of breakdowns.", description:
        "A little maintenance now beats a big repair bill later. We'll follow your manufacturer's schedule, or build a plan that fits how hard you actually use your vehicle.", ctaLabel: "Schedule Maintenance", ctaHref: "/contact-us", }, why: {
      label: "Why It Matters", title: "Small service now, big savings later.", paragraphs: [
        "Most expensive repairs start as small problems nobody caught in time. Fluids break down, filters clog, belts crack, and hoses get soft, long before anything leaves you stranded on Highway 160.", "We keep track of what your vehicle needs and when, so you're not guessing based on a sticker in the windshield. We'll tell you what's due now, what can wait, and why, no pressure to fix things that aren't ready.", ], stats: [
        { value: "Factory", label: "schedules followed" }, { value: "Full records", label: "kept on file" }, { value: "Gas &amp; diesel", label: "all covered" }, ], image: "/images/oil-changes-e3bc5573.jpg", imageAlt: "Inside the Gearhaven service bay", }, included: {
      label: "What's Included", title: "The basics that keep you rolling.", items: [
        {
          icon: "gauge", title: "Fluid checks &amp; top-offs", description:
            "Coolant, brake fluid, power steering, washer fluid, checked and topped as needed.", }, {
          icon: "wrench", title: "Filter replacements", description:
            "Air, cabin, and fuel filters changed on schedule so your engine breathes clean.", }, {
          icon: "check", title: "Belts &amp; hoses", description:
            "We inspect for cracks, leaks, and wear before a roadside failure catches you off guard.", }, {
          icon: "bolt", title: "Battery testing", description:
            "Cold Ozarks mornings are hard on batteries. We test and replace before you're stuck.", }, {
          icon: "camera", title: "Digital inspection", description:
            "Photos and notes on brakes, tires, leaks, and anything else we spot under the hood.", }, {
          icon: "calendar", title: "Service reminders", description:
            "We note your next interval so you know when to come back, no guessing required.", }, ], }, options: {
      label: "Maintenance Plans", title: "A plan that fits your vehicle.", description:
        "Every driver is different. We'll match service to your mileage, your commute, and your budget.", items: [
        {
          title: "Factory Schedule", description:
            "Follow the manufacturer's recommended intervals for warranty-friendly care.", }, {
          title: "High-Mileage Plan", description:
            "Extra attention on fluids, seals, and wear items for vehicles past 100k miles.", }, {
          title: "Diesel PM", description:
            "Fuel filters, DEF, and diesel-specific service for Power Stroke, Cummins, and Duramax.", }, {
          title: "Fleet Programs", description:
            "Coordinated maintenance for work trucks and company vehicles, less downtime, more uptime.", featured: true, }, ], }, signs: {
      label: "Signs You're Due", title: "When to come see us", items: [
        "You're past the mileage or month interval on your sticker", "A maintenance or service reminder light is on", "Fluids look dark, low, or you notice a new leak", "The engine idles rough or fuel economy has dropped", "You honestly can't remember the last time it was serviced", ], }, process: {
      label: "How It Works", title: "Simple, start to finish", steps: [
        {
          title: "Tell us about your vehicle", description:
            "Year, make, model, and mileage, we'll pull up what should be due.", }, {
          title: "Inspect &amp; service", description:
            "We handle fluids, filters, and scheduled items, plus a full digital inspection.", }, {
          title: "Honest recommendations", description:
            "We show you what we found and separate must-do from can-wait.", }, {
          title: "Recorded &amp; reminded", description:
            "Service goes on file and we note when you should come back.", }, ], }, cta: {
      title: "Due for maintenance?", description:
        "Don't wait for a warning light. Call or book online, we'll keep your vehicle on schedule without the upsell.", }, }, {
    slug: "truck-accessories", breadcrumbLabel: "Truck Accessories", metaTitle: "Truck Accessories & Upgrades", metaDescription:
      "Truck accessories in Nixa, MO—lift kits, leveling, lighting, wheels, and diesel performance. Installed properly by experienced local technicians.", hero: {
      image: "/images/gallery-b6bb2c4d.jpg", imageAlt: "Truck suspension upgrade at Gearhaven", title: "Build the truck<br>you want.", description:
        "From leveling kits to lighting upgrades, we help Ozarks truck owners get the look and capability they're after, installed properly, not just bolted on.", ctaLabel: "Talk About Your Build", ctaHref: "/contact-us", }, why: {
      label: "Why It Matters", title: "Installed right the first time.", paragraphs: [
        "A lift kit or set of bigger tires changes more than just how your truck looks, it affects alignment, ride quality, braking, and sometimes your warranty. Cutting corners on installation leads to uneven tire wear, vibrations, and headaches down the road.", "We've been building and working on trucks in this community for years, it's in our DNA. We'll talk through what you want, what it'll actually take, and install it so it drives right when you leave the lot.", ], stats: [
        { value: "Lift &amp; level", label: "kits installed" }, { value: "Alignment", label: "after every lift" }, { value: "Diesel &amp; gas", label: "trucks welcome" }, ], image: "/images/gallery-5f2d242d.jpg", imageAlt: "Truck on the lift at Gearhaven", }, included: {
      label: "What We Install", title: "Upgrades done in-house.", items: [
        {
          icon: "truck", title: "Lift &amp; leveling kits", description:
            "Rough Country and other trusted brands, installed and aligned so it rides right.", }, {
          icon: "tire", title: "Wheels &amp; tires", description:
            "We size, mount, and balance the right combo for your truck and how you use it.", }, {
          icon: "bolt", title: "Lighting upgrades", description:
            "LED bars, fog lights, and work lighting wired cleanly, not a rats-nest under the dash.", }, {
          icon: "wrench", title: "Suspension upgrades", description:
            "Shocks, struts, and components that handle Ozarks roads and heavy loads.", }, {
          icon: "gauge", title: "Performance products", description:
            "Banks and other diesel performance upgrades for trucks that work for a living.", }, {
          icon: "check", title: "Post-install inspection", description:
            "Torque checks, alignment, and a road test so you know everything's solid.", }, ], }, options: {
      label: "Popular Upgrades", title: "Start with what matters most.", description:
        "Not sure where to begin? We'll help you prioritize based on your truck and your budget.", items: [
        {
          title: "Leveling Kits", description:
            "Level out the factory rake and make room for slightly bigger tires, great daily-driver mod.", }, {
          title: "Lift Kits", description:
            "More clearance for bigger tires and rougher terrain. We align after every install.", }, {
          title: "Lighting &amp; Electrical", description:
            "See and be seen, work lights, light bars, and auxiliary wiring done clean.", }, {
          title: "Diesel Performance", description:
            "Intakes, exhaust, tuners, and fuel system upgrades for Power Stroke, Cummins, and Duramax.", featured: true, }, ], }, signs: {
      label: "Good Time to Visit", title: "When to come see us", items: [
        "You want bigger tires but need clearance first", "The factory look isn't cutting it anymore", "You need better lighting for early mornings or job sites", "You're towing heavy and the rear end sags", "You bought parts online and want them installed right", ], }, process: {
      label: "How It Works", title: "Simple, start to finish", steps: [
        {
          title: "Tell us your vision", description:
            "What you drive, what you want, and how you use the truck, we'll map out options.", }, {
          title: "Straight quote", description:
            "Parts, labor, and any alignment or extras, no surprises when you pick up.", }, {
          title: "Professional install", description:
            "Installed in our bay, torqued to spec, wired cleanly, and tested on the road.", }, {
          title: "Drive away happy", description:
            "Aligned, inspected, and ready, with notes on break-in and care if needed.", }, ], }, cta: {
      title: "Ready to upgrade your truck?", description:
        "Stop by or give us a call. We'll talk through your build like neighbors, honest advice, fair pricing, solid work.", }, }, {
    slug: "fleet-vehicles", breadcrumbLabel: "Fleet Vehicles", metaTitle: "Fleet Vehicle Maintenance", metaDescription:
      "Fleet maintenance and repair in Nixa, MO. Keep work trucks earning with scheduled service, clear digital records, and responsive shop communication.", hero: {
      image: "/images/gallery-e51e322a.jpg", imageAlt: "Fleet vehicles at Gearhaven", title: "Keep your fleet<br>moving.", description:
        "When your vehicles are down, work stops. We help Ozarks businesses stay on schedule with honest maintenance, fast turnaround, and clear communication.", ctaLabel: "Talk Fleet Service", ctaHref: "/contact-us", }, why: {
      label: "Why It Matters", title: "Downtime costs more than maintenance.", paragraphs: [
        "Every hour a work truck sits in the bay is an hour your crew isn't earning. We get that, because a lot of our customers run businesses right here in Nixa, Springfield, and the surrounding area.", "We'll build a maintenance plan around your vehicles, your schedule, and your budget. You get clear records, digital inspections you can share with your team, and a shop that picks up the phone when something urgent comes up.", ], stats: [
        { value: "Priority", label: "fleet scheduling" }, { value: "Digital", label: "inspection reports" }, { value: "Diesel &amp; gas", label: "fleet ready" }, ], image: "/images/gallery-c2c9d21f.jpg", imageAlt: "Fleet service work at Gearhaven", }, included: {
      label: "What's Included", title: "Built for businesses that run on wheels.", items: [
        {
          icon: "calendar", title: "Scheduled maintenance", description:
            "Oil changes, filters, fluids, and PM intervals tracked so nothing slips through the cracks.", }, {
          icon: "clipboard", title: "Service records", description:
            "History on every vehicle, useful for resale, audits, and knowing what's been done.", }, {
          icon: "camera", title: "Digital inspections", description:
            "Photo reports your drivers and office staff can see, no guessing what we found.", }, {
          icon: "wrench", title: "Repairs &amp; diagnostics", description:
            "From check-engine lights to major mechanical, one shop for maintenance and repair.", }, {
          icon: "truck", title: "Gas &amp; diesel fleets", description:
            "Work vans, pickups, box trucks, and diesel haulers, we handle what you run.", }, {
          icon: "phone", title: "Direct communication", description:
            "Talk to a real person who knows your fleet, not a call center reading a script.", }, ], }, options: {
      label: "Fleet Programs", title: "Scales with your business.", description:
        "Whether you run two trucks or twenty, we'll find a rhythm that keeps you moving.", items: [
        {
          title: "Small Business", description:
            "1 - 5 vehicles, scheduled PM, reminders, and a shop you can count on.", }, {
          title: "Growing Fleet", description:
            "6 - 15 vehicles, coordinated scheduling to spread service and limit downtime.", }, {
          title: "Commercial Diesel", description:
            "Heavy-duty pickups and diesel work trucks with specialized PM and repair.", }, {
          title: "Custom Program", description:
            "Tell us how your operation runs, we'll build a plan around your routes and seasons.", featured: true, }, ], }, signs: {
      label: "Signs You Need Us", title: "When to reach out", items: [
        "Vehicles are missing service deadlines or breaking down unexpectedly", "You don't have clear records of what's been done on each unit", "Drivers are reporting problems but you're not sure what's urgent", "You're adding vehicles and need a reliable shop partner", "Downtime is costing you jobs and you need a faster turnaround", ], }, process: {
      label: "How It Works", title: "Simple, start to finish", steps: [
        {
          title: "Fleet walk-through", description:
            "Tell us what you run, how you use it, and where the pain points are today.", }, {
          title: "Build a schedule", description:
            "We set PM intervals and a plan to spread service so you're never all down at once.", }, {
          title: "Service &amp; report", description:
            "Each visit includes a digital inspection and updated records on file.", }, {
          title: "Stay ahead", description:
            "We flag issues early and prioritize repairs so small problems don't become big ones.", }, ], }, cta: {
      title: "Let's talk about your fleet.", description:
        "Call us or send a message. We'll learn how you operate and show you how we can help keep your vehicles earning.", }, }, {
    slug: "digital-inspection", breadcrumbLabel: "Free Digital Inspection", metaTitle: "Free Digital Vehicle Inspection", metaDescription:
      "Get a free digital inspection in Nixa, MO. Photos, color-coded findings, and plain-language notes—so you see what we see before any repairs begin.", hero: {
      image: "/images/gallery-29e50684.jpg", imageAlt: "Digital vehicle inspection at Gearhaven", title: "See what we see.<br>No surprises.", description:
        "Every service visit includes a free digital inspection, photos, plain-language notes, and an honest look at what's fine, what's worth watching, and what needs attention now.", ctaLabel: "Schedule a Visit", ctaHref: "/contact-us", }, why: {
      label: "Why It Matters", title: "Trust starts with transparency.", paragraphs: [
        "Nobody likes walking into a shop blind and getting hit with a list of repairs they can't see or understand. Our digital inspection puts you in the driver's seat, literally. You get photos of what we're looking at, color-coded by urgency, and notes in plain English.", "There's no pressure to approve anything on the spot. We send the report so you can look it over, ask questions, and decide what makes sense for your budget and timeline. That's how neighbors should treat neighbors.", ], stats: [
        { value: "50+", label: "point inspection" }, { value: "Free", label: "with any service" }, { value: "Photos", label: "you can keep" }, ], image: "/images/gallery-3f402a8e.jpg", imageAlt: "Diesel engine inspection at Gearhaven", }, included: {
      label: "What's Included", title: "A full picture of your vehicle.", items: [
        {
          icon: "camera", title: "Photo documentation", description:
            "We photograph brakes, tires, leaks, belts, and anything else worth showing you.", }, {
          icon: "clipboard", title: "Color-coded report", description:
            "Green means good, yellow means watch it, red means let's talk, simple as that.", }, {
          icon: "check", title: "Plain-language notes", description:
            "No mechanic jargon. We explain what we found and why it matters to you.", }, {
          icon: "phone", title: "Sent to your phone or email", description:
            "Review the report at home, share it with family, or keep it for your records.", }, {
          icon: "shield", title: "Kept on file", description:
            "We save your inspection history so we can track changes visit to visit.", }, {
          icon: "gauge", title: "Brakes, tires &amp; fluids", description:
            "The safety stuff that matters most, checked every time you're in the bay.", }, ], }, options: {
      label: "When to Get One", title: "More than just an oil change add-on.", description:
        "The inspection is free with service, but it's valuable on its own when you need answers.", items: [
        {
          title: "With Any Service", description:
            "Oil change, tire rotation, brake job, you always get the full digital report.", }, {
          title: "Pre-Purchase Check", description:
            "Buying used? We'll inspect it and give you an honest picture before you sign.", }, {
          title: "Second Opinion", description:
            "Got a quote elsewhere that doesn't sit right? We'll look and tell you straight.", }, {
          title: "Fleet Reports", description:
            "Digital inspections for every vehicle in your fleet, shared with your office staff.", featured: true, }, ], }, signs: {
      label: "Good Time to Visit", title: "When to come see us", items: [
        "You're buying a used vehicle and want an honest pre-purchase look", "It's been a while since anyone put eyes on the underside", "A warning light came on and you want to understand what's going on", "You're planning a road trip and want peace of mind", "Another shop quoted work and you want a second opinion", ], }, process: {
      label: "How It Works", title: "Simple, start to finish", steps: [
        {
          title: "Bring it in", description:
            "Schedule any service or ask specifically for an inspection, either way, it's free.", }, {
          title: "We inspect &amp; photograph", description:
            "Our tech goes through 50+ points and documents what they find with photos.", }, {
          title: "You get the report", description:
            "Sent to your phone or email, review it on your own time, no pressure.", }, {
          title: "You decide what's next", description:
            "Approve what makes sense now, plan for later, or just keep the report for your records.", }, ], }, cta: {
      title: "Want to see what's going on under there?", description:
        "Book any service and your digital inspection is on us. Clear photos, honest notes, zero pressure.", }, }, {
    slug: "auto-shop", breadcrumbLabel: "Auto Shop", metaTitle: "Full-Service Auto Shop Repair", metaDescription:
      "Full-service auto repair in Nixa, MO—brakes, diagnostics, cooling, electrical, inspections, and everyday maintenance for cars, SUVs, and light trucks.", hero: {
      image: "/images/services-5f2d242d.jpg", imageAlt: "Vehicle on the lift at Gearhaven", title: "Your local<br>auto shop.", description:
        "From check-engine lights to brake jobs, we're the shop Nixa drivers trust for honest answers and solid work, on daily drivers, family SUVs, and work trucks alike.", ctaLabel: "Schedule Service", ctaHref: "/contact-us", }, why: {
      label: "Why It Matters", title: "One shop for the whole vehicle.", paragraphs: [
        "Your car or SUV is how you get to work, get the kids to school, and get around the Ozarks. When something's off, you need a shop that actually diagnoses the problem, not one that throws parts at it until the light goes away.", "We handle the full range of auto repair and maintenance right here in Nixa. You'll talk to the people working on your vehicle, get a clear explanation of what's wrong, and never feel pushed into work you don't need.", ], stats: [
        { value: "Full-service", label: "auto repair" }, { value: "MO state", label: "inspections" }, { value: "Same shop", label: "gas &amp; diesel" }, ], image: "/images/gallery-b400048d.jpg", imageAlt: "Inside the Gearhaven auto shop", }, included: {
      label: "What We Handle", title: "Repairs and maintenance, done right.", items: [
        {
          icon: "wrench", title: "Oil changes &amp; fluids", description:
            "Routine maintenance that keeps your engine and systems running clean.", }, {
          icon: "gauge", title: "Brakes &amp; suspension", description:
            "Pads, rotors, shocks, struts, and steering components, safety you can feel.", }, {
          icon: "bolt", title: "Diagnostics &amp; electrical", description:
            "Check-engine lights, starting problems, and wiring issues diagnosed properly.", }, {
          icon: "check", title: "Cooling &amp; A/C", description:
            "Overheating, leaks, and climate control, Missouri summers and winters covered.", }, {
          icon: "clipboard", title: "State inspections", description:
            "Missouri safety and emissions inspections done right here, no extra stop.", }, {
          icon: "camera", title: "Free digital inspection", description:
            "Every visit includes photos and notes so you always know what we found.", }, ], }, options: {
      label: "Common Services", title: "Whatever's going on, start here.", description:
        "Not sure what you need? Describe the symptom, we'll figure out the rest together.", items: [
        {
          title: "Maintenance &amp; Fluids", description:
            "Oil changes, filters, tune-ups, and fluid services to stay ahead of problems.", }, {
          title: "Diagnostics &amp; Electrical", description:
            "Warning lights, no-starts, and electrical gremlins tracked down the right way.", }, {
          title: "Steering, Brakes &amp; Suspension", description:
            "The stuff that affects how your vehicle drives, stops, and handles on Ozarks roads.", }, {
          title: "Engine &amp; Transmission", description:
            "When it's more than maintenance, major mechanical repair with honest options.", featured: true, }, ], }, signs: {
      label: "Signs You Need Us", title: "When to come see us", items: [
        "Check-engine or other warning light is on", "Strange noises, squealing, grinding, knocking, or clicking", "Vehicle won't start or struggles to turn over", "Overheating, leaking fluids, or A/C not blowing cold", "Failed or upcoming Missouri state inspection", ], }, process: {
      label: "How It Works", title: "Simple, start to finish", steps: [
        {
          title: "Tell us what's going on", description:
            "Call, book online, or stop by, describe the symptom and we'll take it from there.", }, {
          title: "Diagnose &amp; inspect", description:
            "We find the root cause and send you a digital inspection with photos.", }, {
          title: "Approve before we fix", description:
            "You get a clear estimate. No work starts until you say go.", }, {
          title: "Fixed &amp; explained", description:
            "We do the work, test-drive it, and walk you through what was done and why.", }, ], }, cta: {
      title: "Something not right with your vehicle?", description:
        "Bring it to Gearhaven. We'll diagnose it honestly, explain it clearly, and get you back on the road.", }, }, {
    slug: "collision-services",
    breadcrumbLabel: "Collision Services",
    metaTitle: "Collision Mechanical Repair",
    metaDescription:
      "Post-accident mechanical repair in Nixa, MO. Suspension, steering, brakes, cooling, and alignment—plus help coordinating trusted local body shops.",
    hero: {
      image: "/images/car-workshop.jpg",
      imageAlt: "Gearhaven service bay",
      title: "Collision Repair &amp; Post-Accident Mechanical Repair in Nixa, MO",
      description: "",
      ctaLabel: "Request an Assessment",
      ctaHref: "/contact-us",
      hideCta: true,
    },
    why: {
      label: "Post-Accident Repair",
      title: "Get Back on the Road with Confidence",
      paragraphs: [
        "Accidents can happen anywhere, on I-44 during your morning commute, in a busy parking lot, or on a back road in Christian County. Whether it's a minor fender bender or a more serious collision, the damage to your vehicle isn't always limited to what you can see.",
        "At Gearhaven Auto &amp; Diesel, we specialize in the mechanical repairs that often follow a collision. Our experienced technicians inspect your vehicle for damage to critical systems like the suspension, steering, brakes, cooling system, drivetrain, and wheel alignment to make sure it's safe and reliable before you get back behind the wheel.",
      ],
      extraParagraphs: [
        "While we don't perform paint, body work, or frame straightening, we'll gladly help coordinate those repairs with a trusted local collision repair shop if they're needed. Our goal is to make the process as straightforward as possible while giving you honest answers every step of the way.",
      ],
      callout: {
        title: "Need a collision assessment?",
        ctaLabel: "Request an Appointment Today",
        ctaHref: "/contact-us",
      },
      image: "/images/about-repair-truck.jpg",
      imageAlt: "Truck in the Gearhaven service bay",
    },
    spotlight: [
      {
        variant: "light",
        label: "Why Start Here",
        title: "Why Start with Gearhaven?",
        paragraphs: [
          "After an accident, it's natural to focus on the visible damage. A dented fender, cracked bumper, or broken headlight is easy to spot. What many drivers don't realize is that even a relatively minor collision can affect the parts of your vehicle that keep it driving safely.",
          "A curb strike can throw off your alignment. A low-speed impact can damage suspension or steering components. Even a small front-end collision can affect your radiator, cooling system, or other mechanical parts that aren't immediately visible.",
          "That's where we come in.",
          "Our team focuses on identifying and repairing the mechanical systems that impact your vehicle's safety, performance, and reliability. We'll explain what we find in plain language, answer your questions, and recommend the repairs your vehicle actually needs.",
          "If your vehicle also requires paint, body work, or frame repair, we'll let you know and help connect you with a trusted collision repair partner. By focusing on the mechanical repairs we do best and working alongside experienced body shops when needed, we're able to provide the level of service and attention every customer deserves.",
        ],
        image: "/images/contact-e51e322a.jpg",
        imageAlt: "Gearhaven shop exterior",
        imagePosition: "left",
      },
      {
        variant: "light",
        label: "After a Collision",
        title: "What Happens to a Vehicle After a Collision?",
        layout: "impact-inspection",
        outcomeLabels: ["Our Goal", "Trusted Body Shop Partners"],
        paragraphs: [
          "Not every collision leaves obvious damage.",
          "Even if your vehicle still drives, an impact can affect systems that are designed to work together with tight tolerances. A bent suspension component, damaged steering linkage, cracked radiator, or wheel that's slightly out of alignment may not seem like a major issue today, but it can lead to uneven tire wear, poor handling, additional repairs, or safety concerns over time.",
          "That's why it's important to have your vehicle inspected after an accident, even if the damage appears minor.",
          "At Gearhaven Auto &amp; Diesel, we perform a thorough mechanical inspection to look for both visible and hidden damage. Depending on the type of collision, we may inspect:",
        ],
        bulletCards: [
          { icon: "wrench", title: "Suspension components" },
          { icon: "gauge", title: "Steering components" },
          { icon: "shield", title: "Brake system components" },
          { icon: "gauge", title: "Wheel alignment" },
          { icon: "tire", title: "Wheels and tires" },
          { icon: "bolt", title: "Radiator and cooling system" },
          { icon: "truck", title: "Engine and drivetrain components" },
          { icon: "wrench", title: "Fluid leaks caused by the impact" },
          { icon: "gauge", title: "Dashboard warning lights and related mechanical systems" },
        ],
        paragraphsAfter: [
          "Our goal isn't just to repair what's broken. It's to help restore your vehicle's safety, reliability, and performance so you can drive with confidence.",
          "If we discover your vehicle needs services outside the scope of our shop, such as paint, dent repair, body panel replacement, or frame straightening, we'll explain exactly what we've found and help point you toward a trusted local body shop that can complete those repairs.",
        ],
      },
      {
        variant: "dark",
        label: "Inspection Matters",
        title: "Why a Mechanical Inspection Matters",
        paragraphs: [
          "Some collision damage is easy to see. Other problems don't become noticeable until days or even weeks later.",
          "If your steering wheel feels off-center, your vehicle pulls to one side, you notice new vibrations, or warning lights appear after an accident, those can all be signs of hidden mechanical damage.",
          "A professional inspection can identify issues before they lead to additional wear, reduce the risk of more costly repairs, and help ensure your vehicle is operating the way it was designed to.",
          "Whether you've been in a parking lot accident, a rear-end collision, or a highway crash, our technicians will take the time to inspect your vehicle thoroughly, explain what we find, and help you determine the next steps.",
        ],
        image: "/images/about-8b2c3473.jpg",
        imageAlt: "Technician inspecting a vehicle at Gearhaven",
        imagePosition: "left",
      },
    ],
    spotlightAfter: [
      {
        variant: "light",
        label: "Serving the Ozarks",
        title: "Why Drivers Throughout the Ozarks Choose Gearhaven",
        paragraphs: [
          "When you've been in an accident, you don't just need someone to repair your vehicle. You need someone who will explain what's going on, answer your questions, and help you make informed decisions.",
          "That's the approach we take every day.",
          "Whether you're coming from Nixa, Springfield, Ozark, Republic, Highlandville, or another nearby community, our team is committed to providing clear communication, dependable repairs, and service you can feel good about from start to finish.",
          "If we can complete the repairs in-house, we'll do the work with the same attention to detail we'd expect for our own vehicles. If another specialist is needed, we'll point you in the right direction and work with them to help keep your repair moving forward.",
          "Our goal is simple: to help you get back on the road safely and with confidence.",
        ],
        image: "/images/gallery-a9df4350.jpg",
        imageAlt: "Vehicle service at Gearhaven",
        imagePosition: "right",
      },
    ],
    included: {
      label: "What We Handle",
      title: "Mechanical Collision Repairs You Can Count On",
      headerWidth: 80,
      introParagraphs: [
        "Every accident is different, and so is every repair. Some vehicles need only a mechanical inspection for peace of mind, while others require more extensive repairs before they're safe to drive again.",
        "At Gearhaven Auto &amp; Diesel, we focus on the mechanical systems that are commonly affected by a collision. Our experienced technicians will inspect your vehicle, explain what we find, and recommend the repairs needed to restore safe, dependable performance.",
      ],
      items: [
        {
          icon: "clipboard",
          title: "Collision Damage Assessment",
          description:
            "We'll perform a thorough inspection to identify both visible and hidden mechanical damage caused by the accident. Our goal is to give you a clear understanding of your vehicle's condition before repairs begin.",
        },
        {
          icon: "camera",
          title: "Insurance Documentation",
          description:
            "If you're filing an insurance claim, we'll provide estimates, repair documentation, and photos to help support the process. We're also happy to communicate with your insurance adjuster when needed.",
        },
        {
          icon: "wrench",
          title: "Mechanical Repairs",
          description:
            "From damaged suspension components and steering systems to cooling system repairs and drivetrain issues, we'll complete the mechanical repairs needed to get your vehicle back on the road safely.",
        },
        {
          icon: "tire",
          title: "Wheel Alignments &amp; Suspension Repairs",
          description:
            "Even a relatively minor impact can knock your vehicle out of alignment or damage suspension components. We'll inspect your steering and suspension system and perform the necessary repairs so your vehicle drives the way it should.",
        },
        {
          icon: "check",
          title: "Quality Replacement Parts",
          description:
            "We use OEM or high-quality aftermarket parts whenever possible because dependable repairs begin with dependable components.",
        },
        {
          icon: "phone",
          title: "Coordination with Trusted Body Shops",
          description:
            "If your vehicle needs paint, body work, dent repair, or frame straightening, we'll help coordinate with a trusted local collision repair shop so every part of the repair process is handled by the right specialists.",
        },
      ],
    },
    options: {
      title: "Mechanical Repairs We Commonly Perform After a Collision",
      layout: "split-ticks",
      image: "/images/asset-6-b0d4ecf6.jpg",
      imageAlt: "Engine repair at Gearhaven",
      description:
        "Not every accident causes the same type of damage, but these are some of the mechanical repairs we frequently perform after a vehicle has been involved in a collision:",
      outro:
        "If additional body repairs are needed, we'll help guide you through the next steps and work alongside your preferred collision repair facility whenever possible.",
      items: [
        { title: "Suspension repairs" },
        { title: "Steering system repairs" },
        { title: "Brake system repairs" },
        { title: "Wheel alignments" },
        { title: "Cooling system repairs" },
        { title: "Radiator replacement" },
        { title: "Engine diagnostics" },
        { title: "Drivetrain repairs" },
        { title: "Replacement of damaged mechanical components" },
        { title: "Post-repair safety inspections" },
      ],
    },
    signs: {
      title: "Signs Your Vehicle Should Be Inspected After an Accident",
      intro:
        "Even if your vehicle appears drivable, it's a good idea to have it inspected if you notice any of the following after a collision:",
      outro:
        "If something feels different, trust your instincts. Catching mechanical damage early can help prevent additional wear, improve safety, and reduce the chance of more expensive repairs later.",
      items: [
        "Your steering wheel is no longer centered",
        "The vehicle pulls to one side while driving",
        "You hear new clunks, rattles, or vibrations",
        "Warning lights appear on the dashboard",
        "Fluid is leaking underneath the vehicle",
        "One tire or wheel appears damaged",
        "Your hood, bumper, or fender doesn't line up correctly",
        "The vehicle simply doesn't feel the same as it did before the accident",
        "Your insurance company requests a mechanical inspection or repair estimate",
      ],
    },
    process: {
      title: "Our Collision Repair Process",
      intro:
        "We know dealing with an accident can feel overwhelming. That's why we keep the repair process simple and make sure you know what to expect along the way.",
      steps: [
        {
          title: "Schedule Your Inspection",
          description:
            "Bring your vehicle to our shop, and our technicians will perform a thorough mechanical inspection to evaluate any collision-related damage.",
        },
        {
          title: "Review the Findings",
          description:
            "We'll explain what we found, answer your questions, and provide a written estimate along with any documentation needed for your insurance claim.",
        },
        {
          title: "Complete the Mechanical Repairs",
          description:
            "Our team will repair the mechanical systems affected by the collision, including suspension, steering, brakes, cooling system components, drivetrain repairs, and other related work. If your vehicle also requires paint, body work, or frame repairs, we'll help coordinate those services with a trusted collision repair shop.",
        },
        {
          title: "Final Inspection &amp; Road Test",
          description:
            "Before your vehicle leaves our shop, we'll perform a final inspection and road test to help ensure everything is operating properly and safely.",
        },
      ],
    },
    faqs: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Do you perform paint and body work?",
          answer:
            "<p style=\"margin:0 0 12px\">No. Gearhaven Auto &amp; Diesel specializes in the mechanical side of collision repair. We do not offer paint, dent repair, body panel replacement, or frame straightening.</p><p style=\"margin:0\">If your vehicle needs those services, we're happy to recommend a trusted local collision repair shop and work alongside them to help keep your repairs moving forward.</p>",
        },
        {
          question: "Do you repair frame damage?",
          answer:
            "<p style=\"margin:0 0 12px\">We inspect vehicles for signs of frame or structural damage, but we do not perform frame straightening or structural body repairs.</p><p style=\"margin:0\">If we discover frame damage during your inspection, we'll explain what we found and help direct you to a qualified body shop that specializes in structural repairs.</p>",
        },
        {
          question: "Can you work with my insurance company?",
          answer:
            "<p style=\"margin:0\">Yes. We can provide repair estimates, photos, and documentation to support your insurance claim, and we're happy to communicate with your insurance adjuster when needed. Our goal is to make the mechanical repair process as smooth and straightforward as possible.</p>",
        },
        {
          question: "What collision-related repairs do you perform?",
          answer:
            `<p style="margin:0 0 12px">We repair many of the mechanical systems that are commonly affected by an accident, including:</p>${faqCheckList(["Suspension repairs", "Steering repairs", "Brake system repairs", "Wheel alignments", "Cooling system repairs", "Radiator replacement", "Drivetrain repairs", "Engine diagnostics", "Replacement of damaged mechanical components"])}<p style="margin:12px 0 0">If your vehicle requires cosmetic or structural repairs outside our scope, we'll help connect you with a trusted body shop.</p>`,
        },
        {
          question: "Should I have my vehicle inspected even if it still drives?",
          answer:
            "<p style=\"margin:0 0 12px\">Yes. It's common for vehicles to remain drivable after a collision, even when mechanical damage is present. Steering, suspension, wheel alignment, cooling system components, or brake parts can all be affected without obvious warning signs.</p><p style=\"margin:0\">If your vehicle doesn't feel quite the same after an accident, it's worth having it inspected. Identifying hidden damage early can help prevent additional wear and ensure your vehicle is safe to drive.</p>",
        },
        {
          question: "Can I choose where my vehicle is repaired after an accident?",
          answer:
            "<p style=\"margin:0 0 12px\">In most cases, yes. You have the right to choose the repair shop you trust.</p><p style=\"margin:0\">If your vehicle needs both mechanical repairs and body work, we'll gladly coordinate with your preferred collision repair facility to help make the process as seamless as possible.</p>",
        },
        {
          question: "Why should I choose Gearhaven for collision-related mechanical repairs?",
          answer:
            "<p style=\"margin:0 0 12px\">Because we focus on what we do best. Our technicians specialize in diagnosing and repairing the mechanical systems that affect how your vehicle drives, steers, stops, and performs after an accident. We believe in clear communication, honest recommendations, and repairing your vehicle the right way.</p><p style=\"margin:0\">If another specialist is needed for paint or body work, we'll tell you. We'd rather help you get the right repair than try to be everything to everyone.</p>",
        },
      ],
    },
    cta: {
      title: "Let's Get You Back on the Road",
      description:
        "An accident can leave you with a lot of questions, but finding the right repair shop shouldn't be one of them.",
      extraParagraphs: [
        "Whether you've noticed a new vibration, your steering doesn't feel quite right, or you simply want the peace of mind that comes from a professional inspection, our team is here to help.",
        "We'll take the time to inspect your vehicle, explain what we find, answer your questions, and recommend the repairs needed to get you safely back on the road. If your vehicle requires paint, body work, or frame repairs, we'll help connect you with a trusted collision repair partner so every part of the process is handled by the right experts.",
        "No pressure. No confusing explanations. Just honest advice and quality mechanical repairs from a team that's committed to doing the job right.",
      ],
      align: "left",
    }, },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return SERVICE_PAGES.find((p) => p.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_PAGES.map((p) => p.slug);
}

export function getServicePageHtml(slug: string): string {
  const page = getServicePage(slug);
  if (!page) throw new Error(`Unknown service page: ${slug}`);

  return buildServicePageHtml(page);
}

export { SERVICE_PAGES };

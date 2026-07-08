import { buildServicePageHtml } from "@/lib/build-service-page-html";

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
    ctaLabel: string;
    ctaHref: string;
  };
  why: {
    label: string;
    title: string;
    paragraphs: [string, string];
    stats: { value: string; label: string }[];
    image: string;
    imageAlt: string;
  };
  included: {
    label: string;
    title: string;
    items: { icon: string; title: string; description: string }[];
  };
  options?: {
    label: string;
    title: string;
    description?: string;
    items: { title: string; description: string; featured?: boolean }[];
  };
  signs: {
    label: string;
    title: string;
    items: string[];
  };
  process: {
    label: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  cta: {
    title: string;
    description: string;
  };
};

const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: "tires", breadcrumbLabel: "Tires", metaTitle: "Tires & Alignments", metaDescription:
      "Tire sales, installation, rotation, balancing, and alignments in Nixa, MO. Honest recommendations for cars, trucks, and fleet vehicles.", hero: {
      image: "/images/gallery-8b2c3473.jpg", imageAlt: "Alignment service at Gearhaven", title: "Tires &amp; alignments,<br>done right.", description:
        "Good tires and a straight alignment keep you safe on Ozarks roads, and save you money by wearing evenly. We'll help you pick the right set and install them properly.", ctaLabel: "Schedule Tire Service", ctaHref: "/contact", }, why: {
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
    slug: "preventive-maintenance", breadcrumbLabel: "Preventive Maintenance", metaTitle: "Preventive Maintenance", metaDescription:
      "Scheduled preventive maintenance in Nixa, MO for cars, trucks, and diesels. Stay ahead of breakdowns with honest service intervals.", hero: {
      image: "/images/oil-changes-8b2c3473.jpg", imageAlt: "Technician performing maintenance at Gearhaven", title: "Stay ahead<br>of breakdowns.", description:
        "A little maintenance now beats a big repair bill later. We'll follow your manufacturer's schedule, or build a plan that fits how hard you actually use your vehicle.", ctaLabel: "Schedule Maintenance", ctaHref: "/contact", }, why: {
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
      "Truck accessories and upgrades in Nixa, MO, lift kits, leveling kits, lighting, wheels, suspension, and diesel performance. Installed right.", hero: {
      image: "/images/gallery-b6bb2c4d.jpg", imageAlt: "Truck suspension upgrade at Gearhaven", title: "Build the truck<br>you want.", description:
        "From leveling kits to lighting upgrades, we help Ozarks truck owners get the look and capability they're after, installed properly, not just bolted on.", ctaLabel: "Talk About Your Build", ctaHref: "/contact", }, why: {
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
    slug: "fleet-vehicles", breadcrumbLabel: "Fleet Vehicles", metaTitle: "Fleet Vehicle Service", metaDescription:
      "Fleet maintenance and repair in Nixa, MO. Keep your work trucks and company vehicles on the road with scheduled service and priority scheduling.", hero: {
      image: "/images/gallery-e51e322a.jpg", imageAlt: "Fleet vehicles at Gearhaven", title: "Keep your fleet<br>moving.", description:
        "When your vehicles are down, work stops. We help Ozarks businesses stay on schedule with honest maintenance, fast turnaround, and clear communication.", ctaLabel: "Talk Fleet Service", ctaHref: "/contact", }, why: {
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
    slug: "digital-inspection", breadcrumbLabel: "Free Digital Inspection", metaTitle: "Free Digital Inspection", metaDescription:
      "Free digital vehicle inspections in Nixa, MO. Photos, color-coded reports, and plain-language notes, no pressure, no surprises.", hero: {
      image: "/images/gallery-29e50684.jpg", imageAlt: "Digital vehicle inspection at Gearhaven", title: "See what we see.<br>No surprises.", description:
        "Every service visit includes a free digital inspection, photos, plain-language notes, and an honest look at what's fine, what's worth watching, and what needs attention now.", ctaLabel: "Schedule a Visit", ctaHref: "/contact", }, why: {
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
    slug: "auto-shop", breadcrumbLabel: "Auto Shop", metaTitle: "Auto Shop Services", metaDescription:
      "Full-service auto repair in Nixa, MO, brakes, diagnostics, cooling, electrical, state inspections, and everyday maintenance for cars and SUVs.", hero: {
      image: "/images/services-5f2d242d.jpg", imageAlt: "Vehicle on the lift at Gearhaven", title: "Your local<br>auto shop.", description:
        "From check-engine lights to brake jobs, we're the shop Nixa drivers trust for honest answers and solid work, on daily drivers, family SUVs, and work trucks alike.", ctaLabel: "Schedule Service", ctaHref: "/contact", }, why: {
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
    slug: "collision-services", breadcrumbLabel: "Collision Services", metaTitle: "Collision Services", metaDescription:
      "Collision repair coordination in Nixa, MO. Damage assessment, insurance support, and mechanical repairs to get you back on the road safely.", hero: {
      image: "/images/gallery-a9df4350.jpg", imageAlt: "Vehicle repair at Gearhaven", title: "Get back on<br>the road.", description:
        "Accidents happen, on I-44, in a parking lot, or on a back road in Christian County. We'll assess the damage, help you navigate the process, and get your vehicle safe to drive again.", ctaLabel: "Get an Assessment", ctaHref: "/contact", }, why: {
      label: "Why It Matters", title: "More than body damage.", paragraphs: [
        "After a collision, there's often more going on than what you can see, bent suspension parts, misaligned wheels, damaged steering components, or frame issues that affect how the vehicle handles at speed.", "We'll give you an honest assessment of mechanical and structural damage, help coordinate with your insurance company when needed, and make sure the vehicle is safe before you get back behind the wheel. We'll walk you through every step so you're not guessing.", ], stats: [
        { value: "Honest", label: "damage assessments" }, { value: "Insurance", label: "coordination help" }, { value: "Safety first", label: "every repair" }, ], image: "/images/contact-e51e322a.jpg", imageAlt: "Gearhaven shop exterior", }, included: {
      label: "What We Handle", title: "From assessment to repair.", items: [
        {
          icon: "clipboard", title: "Damage assessment", description:
            "A thorough look at visible and hidden damage, mechanical, structural, and cosmetic.", }, {
          icon: "phone", title: "Insurance coordination", description:
            "We work with your adjuster, provide documentation, and help keep the process moving.", }, {
          icon: "wrench", title: "Mechanical repair", description:
            "Suspension, steering, brakes, and drivetrain damage repaired to safe standards.", }, {
          icon: "tire", title: "Alignment &amp; suspension", description:
            "Post-collision alignment and suspension work so it drives straight and true.", }, {
          icon: "check", title: "Quality parts", description:
            "OEM and quality aftermarket parts, we don't cut corners on safety items.", }, {
          icon: "camera", title: "Documented inspection", description:
            "Photos and notes for your records, your insurance, and your peace of mind.", }, ], }, options: {
      label: "Types of Work", title: "We meet you where you are.", description:
        "Every accident is different. We'll tell you honestly what we can handle in-house and what needs a body shop partner.", items: [
        {
          title: "Minor Damage", description:
            "Bumper covers, brackets, lights, and cosmetic mechanical repairs.", }, {
          title: "Mechanical After Collision", description:
            "Radiator, A/C, suspension, steering, the stuff that affects how it drives.", }, {
          title: "Frame &amp; Suspension", description:
            "Structural and alignment concerns checked and corrected for safe handling.", }, {
          title: "Insurance Claim Support", description:
            "Estimates, photos, and documentation to help your claim go smoothly.", featured: true, }, ], }, signs: {
      label: "After an Accident", title: "When to come see us", items: [
        "Visible damage to bumpers, fenders, lights, or wheels", "Vehicle pulls to one side or steering wheel is off-center", "New noises, vibrations, or fluid leaks after the impact", "Airbag deployed or safety systems triggered", "Insurance needs an estimate or mechanical assessment", ], }, process: {
      label: "How It Works", title: "Simple, start to finish", steps: [
        {
          title: "Bring it in for assessment", description:
            "We'll look at the damage and give you a clear picture of what needs attention.", }, {
          title: "Estimate &amp; documentation", description:
            "Photos, notes, and a written estimate, for you and your insurance if needed.", }, {
          title: "Repair &amp; coordinate", description:
            "We handle mechanical work in-house and coordinate body repair when necessary.", }, {
          title: "Safety check &amp; delivery", description:
            "Alignment, test drive, and a final walkthrough before you take it home.", }, ], }, cta: {
      title: "Had an accident?", description:
        "Call us first. We'll assess the damage honestly, explain your options, and help you get back on the road safely.", }, },
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

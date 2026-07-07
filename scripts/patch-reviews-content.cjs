const fs = require("fs");
const path = require("path");

const STARS =
  '<svg width="90" height="15" viewBox="0 0 90 15" fill="#6D9DC5" style="margin-bottom:14px"><path d="M8 1L9.6 5.4L14.4 5.7L10.7 8.7L11.9 13.4L8 10.8L4.1 13.4L5.3 8.7L1.6 5.7L6.4 5.4Z"></path><path transform="translate(19)" d="M8 1L9.6 5.4L14.4 5.7L10.7 8.7L11.9 13.4L8 10.8L4.1 13.4L5.3 8.7L1.6 5.7L6.4 5.4Z"></path><path transform="translate(38)" d="M8 1L9.6 5.4L14.4 5.7L10.7 8.7L11.9 13.4L8 10.8L4.1 13.4L5.3 8.7L1.6 5.7L6.4 5.4Z"></path><path transform="translate(57)" d="M8 1L9.6 5.4L14.4 5.7L10.7 8.7L11.9 13.4L8 10.8L4.1 13.4L5.3 8.7L1.6 5.7L6.4 5.4Z"></path><path transform="translate(76)" d="M8 1L9.6 5.4L14.4 5.7L10.7 8.7L11.9 13.4L8 10.8L4.1 13.4L5.3 8.7L1.6 5.7L6.4 5.4Z"></path></svg>';

const reviews = [
  {
    name: "Carly Garrett",
    text: `I can't say enough good things. They were more than helpful getting my truck in right away and getting it diagnosed! When you depend on your vehicle for your own job a quick turn around is what you need. I dropped off my truck on Monday evening and was back in it on Wednesday afternoon! They did an excellent job!!! Will highly recommend them to everyone! Not only did they diagnose the problem I dropped it off for but looked at the whole truck to make sure it was running like it needed to be. Greatly appreciated their attention to detail. Just shows that they care!`,
  },
  {
    name: "Sharena Blunt",
    text: `Everyone here is amazing! Very knowledgeable and they get it done the right way! It's hard to trust anyone with your vehicle but I would definitely trust them with any of mine they went above and beyond to get both of mine fixed. All the staff is amazing! I highly recommend this place to anyone who needs anything done to their vehicle.`,
  },
  {
    name: "Paul Must",
    text: `I had the pleasure of working with them recently, and I couldn't be happier with the service. From the moment I walked in, the staff was friendly, knowledgeable, and ready to help. They took the time to explain the issue with my vehicle in detail and offered a fair, transparent estimate. The repair was completed quickly and at a reasonable cost. What really stood out was the professionalism and honesty, it's rare to find a mechanic you can trust. I highly recommend to anyone looking for reliable and top-notch service!`,
  },
  {
    name: "Ryan Boatright",
    text: `Absolutely love dealing with these guys. They always get my truck in, diagnosed, and repaired in record time. They'll shoot you straight and never oversell you. Can't say enough good things about them.`,
  },
  {
    name: "Kayla Phipps",
    text: `Thabelong and Collen did an amazing job with my car. Very blessed to have a great team of workers to analyze and fix everything I needed for my vehicle in such a short time!`,
  },
  {
    name: "Vadim Mustafayev",
    text: `The guys here are awesome! All my experiences have been great! The crew is professional and very knowledgeable in what they do. They are always welcoming, helpful and their shop is always clean. This is the only shop I go to for all automotive and diesel need. I highly recommend them and I'll definitely be back!!`,
  },
  {
    name: "I rebuild Shocks",
    text: `Gavin Buckley and Chet Buckley. Me and my dad have been using these guys for years with 6.7 and 7.3 powerstrokes they're amazing at their job! Get it done in a timely manner and also keep you updated very often! Very easy to talk with and very friendly they never miss diagnose anything, they always find the exact problem. I promise you won't regret taking any diesel here! Thank u guys so much`,
  },
  {
    name: "Tyler Suda",
    text: `Great service! Were able to work me in two separate occasions. One for a broken power steering hose and the other for a routine oil change/fuel filter change. Good pricing. Highly recommend.`,
  },
  {
    name: "Phillip Svyatetskiy",
    text: `Was having problems with my F250 ended up being a fuel injector and they got it done within a few hours very quick and professional process truck runs like a charm now.`,
  },
  {
    name: "Jeremy Simpson",
    text: `They were prompt and professional fixing my Cummins motor.`,
  },
  {
    name: "Adam Hair",
    text: `This place is incredible. The best diesel shop I have found I will most definitely be taking my truck here than anywhere else. Thank you guys.`,
  },
  {
    name: "Eric Stone",
    text: `Really happy with the service I've received. Tab and Collen took great care of me in diagnosing the issue with my Def system.`,
  },
  {
    name: "Justin Mccarty",
    text: `Took my 2021 F-350 to have its service done. Changed oil, fuel filters and got my tires balanced. They were great to work with and were able to work with my schedule.`,
  },
  {
    name: "Zak Wilding",
    text: `The guys here are awesome great work great people I'm definitely going to be using them in the future`,
  },
  {
    name: "Allen Foley",
    text: `Very good shop in and out.`,
  },
  {
    name: "Traci Smith",
    text: `Collen is fantastic! He did the ID/OD on my vehicle and can meet all my vehicle's needs! The garage is clean, busy and friendly. I've planned oil change and tires and the prices are excellent and the service is excellent. They do all types of vehicles, diesel or regular engines. Give them a call- Collen made me feel welcome and comfortable!`,
  },
  {
    name: "Julia T",
    text: `Thank you to Collen and the team for getting my low mile 92 Jeep Wrangler back road worthy! You're the best!`,
  },
  {
    name: "Charles Bart",
    text: `Very pleased with the service and quality of work. Fast turnaround on the truck repair and informative on what repairs were needed. Positive experience, will definitely use again for any of my truck repairs.`,
  },
  {
    name: "Darin Nichols",
    text: `Collen and his team are excellent! I have used them a couple of times now and have been very pleased with the results. They worked me in quickly, quick to diagnosed what I though was the problem, and quickly communicated all concerns and costs. I would recommend them to anyone. Great prices and honest.`,
  },
  {
    name: "Karen Bliss",
    text: `These guys are amazing. Even though they specialize in diesels, they have worked on my car multiple times. So kind, great prices and super honest! I would send anyone to them. Thanks to your amazing crew!!`,
  },
  {
    name: "SR T",
    text: `Great service on my F250! Collen was great to work with, I appreciate it!`,
  },
  {
    name: "Tristan Tanner",
    text: `Outstanding service. Always kept in the loop to changes and time frames will maintenance all my vehicles here.`,
  },
  {
    name: "Thad Reynolds",
    text: `The technicians at the shop were able to quickly identify the issue with my 2013 Duramax - a broken crankshaft. They efficiently replaced the motor with a better one, and now my truck runs smoothly and quietly. I'm impressed with their expertise and professionalism throughout the entire process.`,
  },
  {
    name: "Graham Stinson",
    text: `Both Collen and the other tech that I'm blanking on his name did a great job fixing my 92' Ford F250. Got it in and out in a quick and professional manner.`,
  },
  {
    name: "Dustin Burgess",
    text: `Collen , Thab and the rest of the crew are absolutely amazing. They were able to get my nightmare of truck problems they were able to get me back driving in half the time 10/10 would recommend.`,
  },
  {
    name: "Mark Broadway",
    text: `Outstanding service. What I thought could be expensive was a fuse. In and out in minutes. I'll be back!`,
  },
  {
    name: "Johnny Boy",
    text: `Collen is fantastic to work with, highly recommend.`,
  },
  {
    name: "Kevin Martin",
    text: `Collen handled my fleet trucks very well. He got me in and out in a very timely manner. Awesome service and awesome customer service. Will definitely be using them for much more of my fleet vehicles.`,
  },
  {
    name: "Shawn Rye",
    text: `They have always worked us in and they do great work! I highly recommend them.`,
  },
  {
    name: "James Magdaz",
    text: `Great Professional Repair Center. Quickly becoming my "Go-to" when in need. General maintenance to a/c to diag these guys got it covered. Fair and honest. Definitely will be back.`,
  },
  {
    name: "Matthew Cox",
    text: `Collen was friendly and professional. The team got me taken care of promptly. I will definitely be back for future services.`,
  },
  {
    name: "Ray Holguin",
    text: `Highly recommend Tom's Diesel & Custom Truck. I will only go here from now on for truck work. High integrity, super honest, and quality work. Collen was absolutely awesome and treated us like family. Collen made sure that all work was done to the highest standard and went out of his way to follow up with our repairs and feedback.`,
  },
  {
    name: "Diana Johnson",
    text: `They are the best and have great prices on tires.`,
  },
  {
    name: "Scott Hammond",
    text: `They fixed my engine problems when the dealership told me my diesel engine needed to be replaced with 90,000 miles and 7 years old. Great mechanics, very professional demeanor with everyone. They always see me within 24 hours.`,
  },
  {
    name: "Aaron Robinson",
    text: `Went in for a mvi they were pretty busy but colleen made sure to work me in right then and there and got me taken care! The crew were amazing!`,
  },
  {
    name: "Kaitlyn Willis",
    text: `Top notch shop! Had my brakes checked on my 2011 Acadia guys said I had life left still so no need to replace!! Didn't try to take advantage of me even being a woman!`,
  },
  {
    name: "Misty Chalk",
    text: `Fair Pricing and Knowledgeable mechanics and staff. They got us in and taken care of without any hassle.`,
  },
  {
    name: "Rick Clark",
    text: `These guys are incredible. Knowledge, experience, great attitude and even better customer service. Needed an engine swap in my 05 Ram 3500 and they made the experience stress free. I showed up with a truck load of new parts and they jumped in with both feet. My new mechanic from now on no doubt. Thank you guys for everything ya'll are Rock Stars for sure.`,
  },
  {
    name: "Danny Ford",
    text: `Good place for car repairs. The people there really take the time to diagnose your problem to fix your vehicle right. Highly recommend.`,
  },
  {
    name: "Ethan Davis",
    text: `Had some DEF system issues on my Duramax. They were able to get my truck up and running again. Thanks guys!!`,
  },
  {
    name: "Adrian Fix",
    text: `Friendly people and great service! Highly recommend!`,
  },
  {
    name: "Mark Bosovik",
    text: `Great, fast, fair and professional service. HIGHLY RECOMMEND`,
  },
  {
    name: "Affordable Propane",
    text: `Top notch. Not only quick to diagnose, but quick to repair. Best part, the work is reasonably priced and done correctly. After using multiple places in the past both local and in Springfield, we found ourselves frustrated the work was not getting done correctly. My trucks will be serviced exclusively by them from this point forward!`,
  },
  {
    name: "Jordan Graaf",
    text: `The whole team here is great. I brought my Mercedes Sprinter to them for a service checkup and a CEL. They called and said I needed new NOx sensors and he also let me know that they were covered under a recall. Very friendly and honest. They will be getting all my future business.`,
  },
  {
    name: "Jared Speaks",
    text: `These guys will go the extra mile to make sure you're taken care of. Prices are great, people are friendly, no long wait times.`,
  },
  {
    name: "Tracey Hale",
    text: `Collen & the mechanics are very helpful and friendly. Thanks guys!!`,
  },
];

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");
}

function initials(name, index) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  const first = parts[0][0] || "";
  const last = parts[parts.length - 1][0] || "";
  let init = (first + last).toUpperCase();
  const dupes = reviews.filter((r, i) => {
    const p = r.name.trim().split(/\s+/);
    const f = p[0][0] || "";
    const l = p[p.length - 1][0] || "";
    return (f + l).toUpperCase() === init && i < index;
  });
  if (dupes.length) init = (first + (parts[1]?.[0] || last)).toUpperCase();
  return init.slice(0, 2);
}

function card(review, index) {
  const text = escapeHtml(review.text);
  const name = escapeHtml(review.name);
  const init = initials(review.name, index);
  return `
      <div data-reveal style="break-inside:avoid;background:#fff;border:1px solid #E7E3DB;border-radius:16px;padding:26px;margin-bottom:22px;box-shadow:0 2px 4px rgba(20,32,45,.04)" class="gh-card-review">
        ${STARS}
        <p style="font-size:18px;line-height:1.62;color:#2E3D48;margin:0 0 18px;font-weight:500">"${text}"</p>
        <div style="display:flex;align-items:center;gap:12px"><div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#3E5C76,#2C4257);color:#fff;display:grid;place-items:center;font-weight:700;font-family:'Bricolage Grotesque';font-size:15px">${init}</div><div class="gh-review-author"><span style="font-weight:700;font-size:15px;color:#14202B">${name}</span></div></div>
      </div>`;
}

const masonryHtml = reviews.map((r, i) => card(r, i)).join("\n");

const fp = path.join(__dirname, "..", "src", "generated", "reviews-content.ts");
let file = fs.readFileSync(fp, "utf8");

file = file.replace(
  /<div class="gh-masonry">[\s\S]*?<\/div>\s*<\/section>/,
  `<div class="gh-masonry">\n${masonryHtml}\n\n    </div>\n  </section>`
);

file = file.replace(/46\+<\/div>/, `${reviews.length}+</div>`);

fs.writeFileSync(fp, file);
console.log(`Updated ${reviews.length} reviews in reviews-content.ts`);

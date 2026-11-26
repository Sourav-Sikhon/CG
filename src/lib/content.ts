export const SITE = "https://careguidebd.com";

export const NAV = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Why Care Guide", href: "#why" },
  { label: "Our Team", href: "#leadership" },
  { label: "Careers", href: "#careers" },
  { label: "Blog", href: "#insights" },
];

export const SERVICES = [
  {
    icon: "fa-code",
    img: "/img/icons/code.webp",
    title: "Web Development & DevOps Engineering",
    body: "Engaging websites and SEO services built to grow your digital presence and user interaction.",
    href: `${SITE}/service/web-development/`,
  },
  {
    icon: "fa-bullhorn",
    img: "/img/icons/marketing.webp",
    title: "AI Automation & Digital Marketing",
    body: "Data-driven marketing strategies including SEO, social media, and content to increase visibility.",
    href: `${SITE}/service/digital-marketing/`,
  },
  {
    icon: "fa-headset",
    img: "/img/icons/support.webp",
    title: "Back Office Support Services",
    body: "Reliable back-office teams managing billing, reporting, data entry, and admin coordination tasks.",
    href: `${SITE}/service/back-office-support/`,
  },
  {
    icon: "fa-clapperboard",
    img: "/img/icons/video.webp",
    title: "Creative Image & Video Production",
    body: "Refine your visuals with high-quality editing tailored to your creative, branding, and marketing needs.",
    href: `${SITE}/service/image-video-editing/`,
  },
  {
    icon: "fa-magnifying-glass-chart",
    img: "/img/icons/seo.webp",
    title: "SEO & Content Optimization",
    body: "Optimize your online presence with tailored SEO strategies that drive traffic and boost visibility.",
    href: `${SITE}/service/seo/`,
  },
];

export const PILLARS = [
  { img: "/img/site/icon-healthcare.webp", tone: "blue", title: "Healthcare & Administrative Support", body: "Coordination, documentation, scheduling and operational assistance." },
  { img: "/img/site/icon-office.webp", tone: "orange", title: "Back Office Support", body: "Data processing, billing support, reporting and workflow management." },
  { img: "/img/site/icon-tech.webp", tone: "blue", title: "Digital Technology Services", body: "AI automation, DevOps engineering, web development and software solutions." },
  { img: "/img/site/icon-growth.webp", tone: "orange", title: "Digital Growth Services", body: "SEO, content strategy, marketing and creative execution." },
];

export const STATS = [
  { to: 10, suffix: "k+", unit: "", icon: "fa-regular fa-square-check", tag: "Volume", label: "Monthly Tasks Delivered" },
  { to: 3, suffix: "+", unit: " Years", icon: "fa-solid fa-hourglass-half", tag: "Longevity", label: "Experience" },
  { to: 50, suffix: "+", unit: "", icon: "fa-solid fa-users", tag: "Workforce", label: "Expert Team Members" },
  { to: 99, suffix: "%", unit: "", icon: "fa-solid fa-handshake", tag: "Retention", label: "Client Satisfaction Rate" },
];

export const WHY = [
  { title: "Clear communication", body: "You always know who is doing what, and where it stands." },
  { title: "Reliable support", body: "Steady, accurate delivery so your team can focus on growth." },
  { title: "Ongoing innovation", body: "Better tools and smarter workflows, added as you scale." },
];

export const BARS = [
  { label: "Client Support & Virtual Assistance Efficiency", value: 99 },
  { label: "Back Office & Data Management Accuracy", value: 99 },
  { label: "Creative & Digital Workflow Optimization", value: 99 },
];

export const QUOTE =
  "At Care Guide, we help businesses grow smarter and stronger by transforming their operations into scalable and impactful solutions. Through innovative strategies, cross-functional expertise, and forward-thinking technology, we simplify complexity, enhance brand value, and unlock new opportunities for long-term success.";

export const EVENTS = [
  { src: "/img/site/events-02.webp", caption: "Christmas Party 2024 at Dhaka Regency" },
  { src: "/img/site/events-03.webp", caption: "Christmas Party" },
  { src: "/img/site/events-04.webp", caption: "Christmas Party 2024 at Dhaka Regency" },
  { src: "/img/site/events-05.webp", caption: "Christmas Party" },
  { src: "/img/site/events-06.webp", caption: "Team get-together 2025" },
];

export const REQUIREMENTS = [
  { icon: "fa-graduation-cap", title: "Education Requirement", body: "Minimum Higher Secondary. Bachelor’s/Honors preferred but not mandatory." },
  { icon: "fa-comment-dots", title: "Fluency Requirement", body: "Must be fluent in English. Hindi speaking is a strong advantage." },
  { icon: "fa-briefcase", title: "Experience Needed", body: "Minimum 1 year in BPO/Call Center. Freshers are also welcome." },
  { icon: "fa-star", title: "Key Skills", body: "MS Word/Excel, communication skills, grooming, punctuality, adaptability." },
];

export const POSTS = [
  {
    date: "September 29, 2026",
    title: "Content Writer Jobs in Dhaka, Bangladesh: Build Your SEO Content Career at Care Guide",
    href: `${SITE}/blog/content-writer-jobs-dhaka/`,
  },
  {
    date: "September 29, 2026",
    title: "Cinematographer Jobs in Dhaka, Bangladesh: Build Your Visual Storytelling Career at Care Guide",
    href: `${SITE}/blog/cinematographer-jobs-dhaka/`,
  },
  {
    date: "September 29, 2026",
    title: "Google Ads & PPC Specialist Jobs in Dhaka, Bangladesh: Build Your Performance Marketing Career at Care Guide",
    href: `${SITE}/blog/google-ads-specialist-jobs-dhaka/`,
  },
  {
    date: "September 29, 2026",
    title: "Graphic Designer Jobs in Dhaka, Bangladesh: Build Your Creative Design Career at Care Guide",
    href: `${SITE}/blog/graphic-designer-jobs-dhaka/`,
  },
  {
    date: "September 29, 2026",
    title: "UI/UX Designer Jobs in Dhaka, Bangladesh: Build Your User Experience Design Career at Care Guide",
    href: `${SITE}/blog/ui-ux-designer-jobs-dhaka/`,
  },
];

export const FOOTER = {
  company: [
    { label: "Home", href: SITE + "/" },
    { label: "About Us", href: SITE + "/about/" },
    { label: "Contact Us", href: SITE + "/contact/" },
    { label: "Service", href: SITE + "/service/" },
    { label: "Our Team", href: "#leadership" },
  ],
  service: [
    { label: "Web Development", href: SITE + "/service/web-development/" },
    { label: "Digital Marketing", href: SITE + "/service/digital-marketing/" },
    { label: "Back Office Support", href: SITE + "/service/back-office-support/" },
    { label: "Image/Video Editing", href: SITE + "/service/image-video-editing/" },
    { label: "SEO", href: SITE + "/service/seo/" },
  ],
  policies: [
    { label: "Privacy Policy", href: SITE + "/privacy-policy/" },
    { label: "Terms & Conditions", href: SITE + "/terms-and-conditions/" },
    { label: "Disclaimer", href: SITE + "/disclaimer/" },
  ],
  social: [
    { icon: "fa-facebook-f", label: "Facebook", href: "https://www.facebook.com/CareGuideLLC" },
    { icon: "fa-linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com/company/care-guide-bd/" },
    { icon: "fa-instagram", label: "Instagram", href: "https://www.instagram.com/care.guide.bd/" },
    { icon: "fa-x-twitter", label: "X", href: "https://x.com/" },
  ],
};

export const MARQUEE = [
  "Back Office Support",
  "Healthcare Operations",
  "Virtual Teams",
  "AI Automation",
  "DevOps Engineering",
  "Web Development",
  "SEO & Content",
  "Digital Marketing",
  "Creative Production",
];

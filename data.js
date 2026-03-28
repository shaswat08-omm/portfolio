/**
 * ══════════════════════════════════════════
 *   PORTFOLIO DATA  ·  Edit everything here
 * ══════════════════════════════════════════
 */

const PORTFOLIO_DATA = {

  /* ── PERSONAL INFO ── */
  name:         "Shaswat Swayambu Tripathy",
  logoText:     "PORTFOLIO",
  greeting:     "I AM SHASWAT SWAYAMBU TRIPATHY",
  roles:        ["Graphic Designer", "Web Developer", "Creative Thinker", "Fresher"],
  tagline:      "Crafting pixel-perfect designs & clean web experiences from Bhubaneswar, India.",
  location:     "Bhubaneswar, India",
  email:        "shaswatswayambu08@gmail.com",
  phone:        "+91 7077541907",
  availability: "Open to Opportunities",
  languages:    "English, Odia, Hindi",

  /* ── HERO STATS ── */
  stats: [
    { number: "3+",   label: "Projects Done"   },
    { number: "4+",   label: "Tools Mastered"  },
    { number: "100%", label: "Dedicated"        },
  ],

  /* ── ABOUT SECTION ── */
  aboutTitle: "I am a <span class='highlight'>Graphic Designer</span> & Web Developer",
  aboutBadge: { icon: "<i class='ph ph-paint-brush'></i>", title: "Creative Designer", subtitle: "Graphics & Web Dev" },
  aboutBody: `Hi! I'm Shaswat Swayambu Tripathy, a passionate Graphic Designer and Web Developer
from Bhubaneswar, India. I specialize in creating visually stunning designs using
Figma, Adobe Photoshop, and Adobe Premiere Pro, while also building clean and responsive
web experiences. Currently completing my BCA from Maa Manikeswari University and
eager to bring creative digital solutions to life.`,

  /* ── SKILLS ── */
  skills: [
    { icon: "<i class='ph ph-figma-logo'></i>",   name: "Figma",            level: 95 },
    { icon: "<i class='ph ph-magic-wand'></i>",    name: "Adobe Photoshop",  level: 98 },
    { icon: "<i class='ph ph-code'></i>",          name: "HTML & CSS",       level: 90 },
    { icon: "<i class='ph ph-film-strip'></i>",    name: "Adobe Premiere Pro", level: 95 },
  ],

  /* ── EXPERIENCE ── */
  experience: [
    {
      period:  "2026 – Present",
      role:    "Fresher — Open to Work",
      company: "Actively Seeking First Opportunity",
    },
  ],

  /* ── EDUCATION ── */
  education: [
    {
      period:  "2023 – 2026",
      role:    "BCA — Bachelor of Computer Applications",
      company: "Maa Manikeswari University, Kalahandi",
    },
    {
      period:  "2021 – 2023",
      role:    "12th — Science (CHSE)",
      company: "Pragati Science College, Bhawanipatna, Kalahandi",
    },
  ],

  /* ── PORTFOLIO PROJECTS ── */
  projects: [
    {
      title:   "Online Notes Sharing System",
      tag:     "Web",
      filter:  "web",
      desc:    "A platform for students to upload, share, and access academic notes easily and collaboratively.",
      image:   "assets/sharenotes_project.png",
      demo:    "https://shaswat08-omm.github.io/ShareNotes/",
      code:    "https://github.com/shaswat08-omm/ShareNotes",
    },
    {
      title:   "E-Commerce Webpage",
      tag:     "Web",
      filter:  "web",
      desc:    "A modern e-commerce product page with clean UI, product listings, and call-to-action sections.",
      image:   "assets/ecommerce_project.jpg",
      demo:    "#",
      code:    "#",
    },
    {
      title:   "Online Grocery Marketing",
      tag:     "Design",
      filter:  "design",
      desc:    "A visually engaging grocery marketing webpage designed for online product promotion.",
      image:   "assets/grocery_project.png",
      demo:    "#",
      code:    "#",
    },
  ],

  /* ── BLOG (hidden) ── */
  showBlog: false,
  blog: [],

  /* ── SOCIAL LINKS ── */
  social: {
    github:    "https://github.com/shaswat08-omm",
    linkedin:  "#",
    instagram: "https://instagram.com/__.shaswat_",
  },

  /* ── CONTACT SECTION ── */
  contactDesc: "Have a project, collaboration, or creative idea in mind? I'd love to hear from you — let's build something amazing together!",
};

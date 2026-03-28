/**
 * ══════════════════════════════════════
 *   PORTFOLIO APP JS  ·  Main logic
 * ══════════════════════════════════════
 */

const D = PORTFOLIO_DATA;

/* ── Utility: set text / html ── */
const setText  = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
const setHTML  = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML    = val; };
const setHref  = (id, val) => { const el = document.getElementById(id); if (el) el.href         = val; };
const setAttr  = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };

/* ════════════════════════════════════
   1. INJECT STATIC DATA
   ════════════════════════════════════ */
function injectStaticData() {
  // Nav / Logo
  setText("nav-logo",   D.logoText);
  document.title = `${D.name} | Portfolio`;

  // Hero
  setText("hero-greeting", D.greeting);
  setText("hero-subtitle", D.tagline);

  // Hero stats
  if (D.stats.length >= 3) {
    const ids = ["stat-experience", "stat-projects", "stat-clients"];
    D.stats.forEach((s, i) => {
      const el = document.getElementById(ids[i]);
      if (!el) return;
      el.querySelector(".stat-number").textContent = s.number;
      el.querySelector(".stat-label").textContent  = s.label;
    });
  }

  // About
  setHTML("about-title",  D.aboutTitle);
  setText("about-body",   D.aboutBody);
  // Badge
  const badge = document.getElementById("about-skills-badge");
  if (badge) {
    badge.querySelector("span").innerHTML     = D.aboutBadge.icon;   // innerHTML so <i> tags render
    badge.querySelector("strong").textContent = D.aboutBadge.title;
    badge.querySelector("small").textContent  = D.aboutBadge.subtitle;
  }
  // Info grid
  setText("info-name",         D.name);
  setText("info-email",        D.email);
  setText("info-phone",        D.phone);
  setText("info-location",     D.location);
  setText("info-availability", D.availability);
  setText("info-languages",    D.languages);
  setHref("download-cv-btn",   D.cvFile);

  // Contact section
  setText("contact-desc",         D.contactDesc);
  setText("contact-email-val",    D.email);
  setText("contact-phone-val",    D.phone);
  setText("contact-location-val", D.location);

  // Social links
  setHref("social-github",    D.social.github);
  setHref("social-linkedin",  D.social.linkedin);
  setHref("social-instagram", D.social.instagram);

  // Footer
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  setText("footer-name", D.name);
}

/* ════════════════════════════════════
   2. TYPED TEXT EFFECT
   ════════════════════════════════════ */
function initTyped() {
  const el    = document.querySelector(".typed-text");
  const roles = D.roles;
  let ri = 0, ci = 0, deleting = false;

  function type() {
    const current = roles[ri];
    if (deleting) {
      el.textContent = current.substring(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; setTimeout(type, 500); return; }
      setTimeout(type, 60);
    } else {
      el.textContent = current.substring(0, ci + 1);
      ci++;
      if (ci === current.length) { deleting = true; setTimeout(type, 1800); return; }
      setTimeout(type, 110);
    }
  }
  type();
}

/* ════════════════════════════════════
   3. SKILLS GRID
   ════════════════════════════════════ */
function buildSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  grid.innerHTML = D.skills.map(s => `
    <div class="skill-card fade-up">
      <div class="skill-icon">${s.icon}</div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" data-level="${s.level}"></div>
      </div>
      <div class="skill-level">${s.level}%</div>
    </div>
  `).join("");
}

/* ════════════════════════════════════
   4. TIMELINE (RESUME)
   ════════════════════════════════════ */
function buildTimeline(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = items.map(item => `
    <div class="timeline-item">
      <div class="timeline-period">${item.period}</div>
      <div class="timeline-role">${item.role}</div>
      <div class="timeline-company">${item.company}</div>
    </div>
  `).join("");
}

/* ════════════════════════════════════
   5. PORTFOLIO GRID
   ════════════════════════════════════ */
function buildPortfolio(filter = "all") {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;
  const items = filter === "all" ? D.projects : D.projects.filter(p => p.filter === filter);

  grid.innerHTML = items.map(p => `
    <div class="portfolio-card fade-up" data-filter="${p.filter}">
      <img src="${p.image}" alt="${p.title}" class="portfolio-card-img" onerror="this.src='assets/placeholder.png'"/>
      <div class="portfolio-card-overlay">
        <div class="overlay-links">
          <a href="${p.demo}" class="overlay-link" target="_blank" rel="noopener">Live Demo</a>
          <a href="${p.code}" class="overlay-link ghost" target="_blank" rel="noopener">Source</a>
        </div>
      </div>
      <div class="portfolio-card-body">
        <div class="portfolio-card-tag">${p.tag}</div>
        <div class="portfolio-card-title">${p.title}</div>
        <div class="portfolio-card-desc">${p.desc}</div>
      </div>
    </div>
  `).join("");

  // Re-observe new cards
  observeAll(".fade-up");
}

/* ════════════════════════════════════
   6. BLOG GRID
   ════════════════════════════════════ */
function buildBlog() {
  const grid = document.getElementById("blog-grid");
  if (!grid) return;
  grid.innerHTML = D.blog.map(b => `
    <div class="blog-card fade-up">
      <img src="${b.image}" alt="${b.title}" class="blog-card-img" onerror="this.src='assets/placeholder.png'"/>
      <div class="blog-card-body">
        <div class="blog-card-meta">
          <span class="blog-tag">${b.tag}</span>
          <span class="blog-date">${b.date}</span>
        </div>
        <div class="blog-card-title">${b.title}</div>
        <div class="blog-card-excerpt">${b.excerpt}</div>
        <a href="${b.link}" class="blog-read-more">Read More →</a>
      </div>
    </div>
  `).join("");
}

/* ════════════════════════════════════
   7. FILTER BUTTONS
   ════════════════════════════════════ */
function initFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      buildPortfolio(btn.dataset.filter);
    });
  });
}

/* ════════════════════════════════════
   8. SCROLL ANIMATIONS (IntersectionObserver)
   ════════════════════════════════════ */
let observer;
function observeAll(selector) {
  const els = document.querySelectorAll(selector);
  if (!observer) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          // Animate skill bars if present
          const bar = e.target.querySelector(".skill-bar-fill");
          if (bar) bar.style.width = bar.dataset.level + "%";
        }
      });
    }, { threshold: 0.15 });
  }
  els.forEach(el => observer.observe(el));
}

function initScrollAnimations() {
  // Mark all animatable elements
  document.querySelectorAll(
    ".about-image-col, .about-text-col, .skill-card, .timeline-item, .portfolio-card, .blog-card, .contact-left, .contact-right"
  ).forEach(el => el.classList.add("fade-up"));
  observeAll(".fade-up");
}

/* ════════════════════════════════════
   9. NAVBAR: scroll + active links
   ════════════════════════════════════ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const links  = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);

    // Active section highlighting
    let current = "";
    document.querySelectorAll("section[id]").forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === `#${current}`);
    });
  });

  // Hamburger
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  // Close on link click (mobile)
  links.forEach(l => l.addEventListener("click", () => navLinks.classList.remove("open")));
}

/* ════════════════════════════════════
   10. CONTACT FORM
   ════════════════════════════════════ */
function initContactForm() {
  const form   = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = document.getElementById("form-submit-btn");
    btn.textContent = "Sending…";
    btn.disabled    = true;

    // Simulate send (replace with your backend / EmailJS / Formspree)
    setTimeout(() => {
      status.textContent = "✅ Message sent! I'll get back to you soon.";
      btn.textContent    = "Send Message 🚀";
      btn.disabled       = false;
      form.reset();
      setTimeout(() => { status.textContent = ""; }, 5000);
    }, 1500);
  });
}

/* ════════════════════════════════════
   11. IMAGE FALLBACK PLACEHOLDER
   ════════════════════════════════════ */
function createPlaceholder() {
  // Creates a tiny SVG data URI used as onerror fallback
  // (no external dependency needed)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <rect width="600" height="400" fill="#1e1e1e"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      font-family="sans-serif" font-size="18" fill="#555">Image Coming Soon</text>
  </svg>`;
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url  = URL.createObjectURL(blob);
  document.querySelectorAll("img[onerror]").forEach(img => {
    img.addEventListener("error", () => { img.src = url; }, { once: true });
  });
}

/* ════════════════════════════════════
   INIT
   ════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  injectStaticData();
  initTyped();
  buildSkills();
  buildTimeline("experience-timeline", D.experience);
  buildTimeline("education-timeline",  D.education);
  buildPortfolio("all");
  if (D.showBlog) buildBlog();
  initFilters();
  initScrollAnimations();
  initNavbar();
  initContactForm();
  createPlaceholder();
});

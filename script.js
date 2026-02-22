/* ============================================================
   PORTFOLIO - script.js
   Loads data.json and renders all sections dynamically.
   ============================================================ */

(async function () {

  /* ── LOAD DATA ─────────────────────────────────── */
  let DATA;
  try {
    const res = await fetch('./data.json');
    DATA = await res.json();
  } catch (e) {
    console.error('Could not load data.json:', e);
    return;
  }

  const { personal, techStack, pipeline, ai, projects, education, softSkills } = DATA;

  /* ── HELPERS ────────────────────────────────────── */
  function el(id) { return document.getElementById(id); }
  function qs(sel, ctx = document) { return ctx.querySelector(sel); }

  /* ── NAV LOGO ───────────────────────────────────── */
  el('nav-logo').textContent = personal.name.split(' ')[0] + '.dev';
  document.title = personal.name + ' - Full Stack Developer';

  /* ── HERO ───────────────────────────────────────── */
  el('hero-name').textContent = personal.name;
  el('hero-title').textContent = personal.title;
  el('hero-intro').textContent = personal.intro;
  el('hero-github').href = personal.github;
  el('hero-badge-text').textContent = 'Open for work - Consulting, Teaching, Building';

  /* ── ABOUT ──────────────────────────────────────── */
  el('about-summary').textContent = personal.about;
  el('about-details').innerHTML = [
    { icon: 'fa-solid fa-user', label: 'Name',  value: personal.name },
    { icon: 'fa-solid fa-phone', label: 'Phone', value: personal.phone },
    { icon: 'fa-solid fa-envelope', label: 'Email', value: personal.email, link: `mailto:${personal.email}` },
    { icon: 'fa-brands fa-github', label: 'GitHub', value: personal.github, link: personal.github },
  ].map(d => `
    <div class="detail-row reveal">
      <div class="detail-icon"><i class="${d.icon}"></i></div>
      <div class="detail-info">
        <strong>${d.label}</strong>
        ${d.link
          ? `<a href="${d.link}" target="_blank">${d.value}</a>`
          : `<span>${d.value}</span>`}
      </div>
    </div>
  `).join('');

  el('about-stats').innerHTML = [
    { num: '8+',  label: 'Years of Experience' },
    { num: '30+', label: 'Projects Delivered' },
    { num: '3',   label: 'Cloud Platforms' },
    { num: '7+',  label: 'AI Models Integrated' },
  ].map(s => `
    <div class="stat-item reveal">
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');

  /* ── EDUCATION ────────────────────────────────────── */
  el('education-list').innerHTML = education.map(edu => `
    <div class="edu-card reveal">
      <div class="edu-icon"><i class="fa-solid fa-graduation-cap"></i></div>
      <div class="edu-body">
        <div class="edu-degree">${edu.degree}</div>
        <div class="edu-meta">
          <span class="edu-institution"><i class="fa-solid fa-building-columns"></i> ${edu.institution}</span>
          <span class="edu-period"><i class="fa-regular fa-calendar"></i> ${edu.period}</span>
        </div>
        <p class="edu-desc">${edu.description}</p>
        <div class="edu-highlights">
          ${edu.highlights.map(h => `<span class="edu-tag">${h}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  /* ── TECH STACK ─────────────────────────────────── */
  el('stack-grid').innerHTML = techStack.map((cat, i) => `
    <div class="stack-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="stack-card-header">
        <div class="stack-cat-icon" style="background:${cat.color}18;color:${cat.color}">
          <i class="${cat.icon}"></i>
        </div>
        <span class="stack-cat-name">${cat.category}</span>
      </div>
      <div class="stack-skills">
        ${cat.skills.map(s => `
          <span class="skill-tag">
            <i class="${s.icon}" style="color:${cat.color}"></i>${s.name}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');

  /* ── PIPELINE ───────────────────────────────────── */
  el('pipeline-track').innerHTML = pipeline.map(step => `
    <div class="pipeline-step reveal">
      <div class="pipeline-node">
        <i class="${step.icon}"></i>
        <span class="pipeline-num">${step.step}</span>
      </div>
      <div class="pipeline-step-title">${step.title}</div>
      <div class="pipeline-step-desc">${step.description}</div>
    </div>
  `).join('');

  /* ── AI SECTION ─────────────────────────────────── */
  el('ai-summary').textContent = ai.summary;

  el('ai-models').innerHTML = ai.models.map(m => `
    <li class="reveal"><i class="${m.icon}"></i> ${m.name}</li>
  `).join('');

  el('ai-tools').innerHTML = ai.tools.map(t => `
    <li class="reveal"><i class="${t.icon}"></i> ${t.name}</li>
  `).join('');

  el('ai-usecases').innerHTML = ai.useCases.map(u => `
    <li class="reveal">${u}</li>
  `).join('');

  /* ── PROJECTS ───────────────────────────────────── */
  el('projects-grid').innerHTML = projects.map((p, i) => `
    <div class="project-card ${p.featured ? 'featured' : ''} ${p.wip ? 'wip' : ''} reveal reveal-delay-${(i % 3) + 1}">
      ${p.wip
        ? '<span class="project-badge wip-badge"><i class="fa-solid fa-code-commit"></i> In Progress</span>'
        : p.featured
          ? '<span class="project-badge">Featured</span>'
          : '<span class="project-badge" style="color:var(--text-3);background:var(--bg);border-color:var(--border)">Project</span>'
      }
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.description}</div>
      <div class="project-stack">
        ${p.stack.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      <a href="${p.github}" target="_blank" class="btn btn-outline btn-sm">
        <i class="fa-brands fa-github"></i> View on GitHub
      </a>
    </div>
  `).join('');

  /* ── CONTACT ────────────────────────────────────── */
  el('contact-cards').innerHTML = [
    {
      icon: 'fa-solid fa-phone',
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`
    },
    {
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`
    },
    {
      icon: 'fa-brands fa-github',
      label: 'GitHub',
      value: 'View Profile',
      href: personal.github
    },
  ].map(c => `
    <div class="contact-card reveal">
      <div class="contact-icon"><i class="${c.icon}"></i></div>
      <div class="contact-label">${c.label}</div>
      <div class="contact-value">
        <a href="${c.href}" target="_blank">${c.value}</a>
      </div>
    </div>
  `).join('');

  /* ── FOOTER ─────────────────────────────────────── */
  el('footer-copy').textContent = `© ${new Date().getFullYear()} ${personal.name}. All rights reserved.`;
  el('footer-links').innerHTML = `
    <a href="${personal.github}" target="_blank" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
  `;

  /* ── SOFT SKILLS ───────────────────────────────── */
  el('softskills-grid').innerHTML = softSkills.map((s, i) => `
    <div class="softskill-card reveal reveal-delay-${(i % 3) + 1}">
      <div class="softskill-icon"><i class="${s.icon}"></i></div>
      <div class="softskill-name">${s.name}</div>
      <div class="softskill-desc">${s.desc}</div>
    </div>
  `).join('');

  /* ── AVAILABILITY ────────────────────────────── */
  el('availability-grid').innerHTML = personal.availability.modes.map((m, i) => `
    <div class="avail-card reveal reveal-delay-${(i % 4) + 1}">
      <div class="avail-icon"><i class="${m.icon}"></i></div>
      <div class="avail-label">${m.label}</div>
      <div class="avail-desc">${m.desc}</div>
    </div>
  `).join('');

  /* ─────────────────────────────────────────────────
     NAVBAR - scroll + active link highlighting
  ───────────────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    highlightNav();
  }, { passive: true });

  function highlightNav() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }

  /* ─────────────────────────────────────────────────
     MOBILE NAV TOGGLE
  ───────────────────────────────────────────────── */
  const toggle = el('nav-toggle');
  const linksEl = el('nav-links');

  toggle.addEventListener('click', () => {
    const open = linksEl.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  // close on link click
  linksEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => linksEl.classList.remove('open'));
  });

  /* ─────────────────────────────────────────────────
     SCROLL REVEAL
  ───────────────────────────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // observe all reveal elements (including dynamically created ones)
  function observeReveals() {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
  // slight delay to ensure dynamic content is rendered
  setTimeout(observeReveals, 50);

  /* ─────────────────────────────────────────────────
     SMOOTH SCROLL (for older browsers)
  ───────────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ─────────────────────────────────────────────────
     TYPEWRITER EFFECT - hero name
  ───────────────────────────────────────────────── */
  const nameEl = el('hero-name');
  const fullName = personal.name;
  nameEl.textContent = '';
  nameEl.style.minHeight = '1.2em';

  let i = 0;
  function typeWriter() {
    if (i <= fullName.length) {
      nameEl.textContent = fullName.slice(0, i);
      i++;
      setTimeout(typeWriter, 70);
    }
  }
  setTimeout(typeWriter, 400);

})();

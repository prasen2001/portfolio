const data = window.RESUME_DATA;

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => { element.textContent = value; });
};

const techIcons = {
  "react": `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="1.8" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4.1" fill="none" stroke="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4.1" fill="none" stroke="currentColor" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.1" fill="none" stroke="currentColor" transform="rotate(120 12 12)"/></svg>`,
  "react flow": `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="6" r="2.2" fill="currentColor"/><circle cx="19" cy="6" r="2.2" fill="currentColor"/><circle cx="12" cy="18" r="2.2" fill="currentColor"/><path d="M7 7.2 10.7 16M17 7.2 13.3 16M7.3 6h9.4" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>`,
  "python": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5c-5 0-4.7 2.2-4.7 2.2v3.1h4.8v1H5.4S2 8.4 2 13.7s3 5.1 3 5.1h1.8v-3.3s-.1-3 3-3h5s2.8 0 2.8-2.7V5.3s.4-2.8-5.6-2.8Z" fill="currentColor"/><circle cx="9.5" cy="5.3" r=".8" fill="var(--icon-cut, white)"/><path d="M12 21.5c5 0 4.7-2.2 4.7-2.2v-3.1h-4.8v-1h6.7s3.4.4 3.4-4.9-3-5.1-3-5.1h-1.8v3.3s.1 3-3 3h-5s-2.8 0-2.8 2.7v4.5s-.4 2.8 5.6 2.8Z" fill="currentColor" opacity=".62"/><circle cx="14.5" cy="18.7" r=".8" fill="var(--icon-cut, white)"/></svg>`,
  "flask": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 2.5h6M10 3v6.2L4.3 19a1.7 1.7 0 0 0 1.5 2.5h12.4a1.7 1.7 0 0 0 1.5-2.5L14 9.2V3M7.3 14h9.4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 17h10l1.8 3H5.2Z" fill="currentColor" opacity=".28"/></svg>`,
  "gcp": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.3 18.5h9a4.7 4.7 0 0 0 .2-9.4A6.8 6.8 0 0 0 5 8.4a5.2 5.2 0 0 0 3.3 10.1Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="m5.1 15.7 3.3-3.2M17.4 9.1l-3.1 3.1M8.4 12.5l2.1 2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  "ai agents": `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="5" cy="17.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="19" cy="17.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m10.7 7.2-4.4 8M13.3 7.2l4.4 8M7.5 17.5h9" stroke="currentColor" stroke-width="1.7"/></svg>`,
  "rag": `<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="8" cy="5" rx="5" ry="2.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3 5v7c0 1.3 2.2 2.4 5 2.4 1 0 2-.2 2.8-.5M3 8.5c0 1.3 2.2 2.4 5 2.4 1.1 0 2-.2 2.8-.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="16.3" cy="15.5" r="3.7" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="m19 18.2 2.2 2.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  "node.js": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.5 8 4.7v9.6l-8 4.7-8-4.7V7.2Z" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9.2 9v5.2c0 2 4.6 2.2 4.6 0V8.5h2.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  "typescript": `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="currentColor"/><path d="M6.5 9.2h7M10 9.2v8M14.2 16.7c.6.5 1.3.7 2 .7 1.2 0 2-.6 2-1.5 0-2-3.8-1.2-3.8-3.5 0-1.2 1-2 2.5-2 .8 0 1.5.2 2 .6" fill="none" stroke="var(--icon-cut, white)" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  "aws": `<svg viewBox="0 0 24 24" aria-hidden="true"><text x="3" y="13.5" font-size="8.5" font-weight="800" font-family="Arial, sans-serif" fill="currentColor">AWS</text><path d="M4 16.5c4.8 3 10.8 3.3 16 .3M17.6 15.5l2.4 1.3-.7 2.3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  "postgresql": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 4.7C8 2.5 15.4 2 18 5.3c2.2 2.8 1 8.4-1 11.2-.9 1.2-2.2.8-2.3-.3l-.3-3.5c-.6.4-1.4.7-2.3.7-3.6 0-5.8-2.7-6.3-5.5-.2-1.2-.2-2.3.4-3.2Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M14.3 12.7c2.6-.7 3.4-2.2 2.7-4.4M13.3 8.5c.2 0 .4-.2.4-.4s-.2-.4-.4-.4-.4.2-.4.4.2.4.4.4Z" fill="currentColor"/></svg>`,
  "langchain": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.7 8.2 4.8 5.3a2.2 2.2 0 0 1 3.1-3.1l3.6 3.6M16.3 15.8l2.9 2.9a2.2 2.2 0 0 1-3.1 3.1l-3.6-3.6M8.2 16.3l-2.9 2.9a2.2 2.2 0 0 1-3.1-3.1l3.6-3.6M15.8 7.7l2.9-2.9a2.2 2.2 0 0 1 3.1 3.1l-3.6 3.6M8.8 8.8l6.4 6.4M15.2 8.8l-6.4 6.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  "docker": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 13h15.5c.1 3.9-2.7 7-7.7 7C6.3 20 3.7 17.7 3 13Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M5 10h3v3H5zM8 7h3v3H8zM8 10h3v3H8zM11 10h3v3h-3zM11 7h3v3h-3zM14 10h3v3h-3z" fill="currentColor"/><path d="M18.5 10.5c1.7 0 2.5-.7 3-1.7.3 1.5-.3 3.1-2.8 3.7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  "opencv": `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="6.5" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="7" cy="15.5" r="4" fill="none" stroke="currentColor" stroke-width="2" opacity=".7"/><circle cx="17" cy="15.5" r="4" fill="none" stroke="currentColor" stroke-width="2" opacity=".4"/></svg>`
};

const techIcon = (name) => {
  const key = name.toLowerCase();
  const svg = techIcons[key];
  if (svg) return `<span class="tech-icon tech-${key.replace(/[^a-z0-9]+/g, "-")}">${svg}</span>`;
  const letters = name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase();
  return `<span class="tech-icon tech-monogram" aria-hidden="true">${letters}</span>`;
};

const techBadge = (name, className = "tech-badge") =>
  `<span class="${className}">${techIcon(name)}<span>${name}</span></span>`;

setText("[data-person-name]", data.name);
setText("[data-initials]", data.initials);
setText("[data-availability]", data.availability);
setText("[data-location]", data.location);
setText("[data-focus]", data.focus);
setText("[data-summary]", data.summary);
setText("[data-about-lead]", data.about.lead);
setText("[data-about-body]", data.about.body);
setText("[data-year]", new Date().getFullYear());

document.title = `${data.name} — ${data.title}`;
document.querySelector('meta[name="description"]').content = data.summary;

const tickerItems = [...data.strengths, ...data.strengths]
  .map((item) => `<span class="ticker-item">${item}</span>`)
  .join("");
document.querySelector("[data-ticker]").innerHTML = tickerItems;

document.querySelector("[data-metrics]").innerHTML = data.metrics
  .map(({ value, label }) => `
    <div class="metric reveal">
      <span class="metric-value">${value}</span>
      <span class="metric-label">${label}</span>
    </div>`)
  .join("");

document.querySelector("[data-experience]").innerHTML = data.experience
  .map(({ period, role, company, description, tags }) => `
    <article class="timeline-row reveal">
      <div class="timeline-period">${period}</div>
      <div class="timeline-role"><h3>${role}</h3><p>${company}</p></div>
      <div class="timeline-detail">
        <p>${description}</p>
        <div class="tag-list">${tags.map((tag) => techBadge(tag, "tag")).join("")}</div>
      </div>
    </article>`)
  .join("");

document.querySelector("[data-projects]").innerHTML = data.projects
  .map(({ number, title, description, category, color, link }) => {
    const tag = link !== "#" ? "a" : "article";
    const attributes = link !== "#" ? `href="${link}" target="_blank" rel="noreferrer"` : "";
    return `
    <${tag} class="project-card ${color} reveal" ${attributes}>
      <div class="project-top"><span>${number}</span><span>${category}</span></div>
      <div class="project-copy"><h3>${title}</h3><p>${description}</p></div>
      <span class="project-arrow" aria-hidden="true">↗</span>
    </${tag}>`;
  })
  .join("");

document.querySelector("[data-skills]").innerHTML = data.skills
  .map(({ name, detail, technologies }, index) => `
    <div class="skill">
      <span class="skill-number">0${index + 1}</span>
      <div>
        <h3>${name}</h3><p>${detail}</p>
        <div class="tech-cloud">${technologies.map((tech) => techBadge(tech)).join("")}</div>
      </div>
    </div>`)
  .join("");

document.querySelector("[data-toolbox]").innerHTML = data.toolbox
  .map(({ category, description, technologies }) => `
    <article class="toolbox-group reveal">
      <div class="toolbox-group-heading"><h3>${category}</h3><p>${description}</p></div>
      <div class="toolbox-items">
        ${technologies.map((technology) => `
          <div class="toolbox-item">
            ${techIcon(technology)}
            <span>${technology}</span>
          </div>`).join("")}
      </div>
    </article>`)
  .join("");

document.querySelector("[data-education]").innerHTML = data.education
  .map(({ degree, school, period, location }) => `
    <article class="education-row">
      <div><h3>${degree}</h3><p>${school}</p></div>
      <div class="education-meta"><span>${period}</span><span>${location}</span></div>
    </article>`)
  .join("");

document.querySelector("[data-achievements]").innerHTML = data.achievements
  .map(({ value, title, detail }) => `
    <article class="achievement-card reveal">
      <strong>${value}</strong><h3>${title}</h3><p>${detail}</p>
    </article>`)
  .join("");

const emailLink = document.querySelector("[data-email-link]");
emailLink.href = `mailto:${data.email}`;
emailLink.firstChild.textContent = `${data.email} `;

document.querySelector("[data-socials]").innerHTML = data.socials
  .map(({ label, url }) => `<a href="${url}" ${url !== "#" ? 'target="_blank" rel="noreferrer"' : ""}>${label}</a>`)
  .join("");

if (data.resumeUrl) {
  const resumeLink = document.querySelector("[data-resume-link]");
  resumeLink.hidden = false;
  resumeLink.href = data.resumeUrl;
  document.querySelector("[data-header-resume]").href = data.resumeUrl;
}

document.querySelector("[data-header-email]").href = `mailto:${data.email}`;
const socialByLabel = Object.fromEntries(data.socials.map((social) => [social.label.toLowerCase(), social.url]));
document.querySelector("[data-header-github]").href = socialByLabel.github;
document.querySelector("[data-header-linkedin]").href = socialByLabel.linkedin;

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

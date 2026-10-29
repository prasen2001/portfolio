const data = window.RESUME_DATA;

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => { element.textContent = value; });
};

const techAssets = {
  "react": "assets/icons/tech/react.svg",
  "python": "assets/icons/tech/python.svg",
  "flask": "assets/icons/tech/flask.svg",
  "gcp": "assets/icons/tech/gcp.svg",
  "node.js": "assets/icons/tech/nodejs.svg",
  "typescript": "assets/icons/tech/typescript.svg",
  "javascript": "assets/icons/tech/javascript.svg",
  "java": "assets/icons/tech/java.svg",
  "pytorch": "assets/icons/tech/pytorch.svg",
  "tensorflow": "assets/icons/tech/tensorflow.svg",
  "graphql": "assets/icons/tech/graphql.svg",
  "nestjs": "assets/icons/tech/nestjs.svg",
  "docker": "assets/icons/tech/docker.svg",
  "postgresql": "assets/icons/tech/postgresql.svg",
  "mongodb": "assets/icons/tech/mongodb.svg",
  "redis": "assets/icons/tech/redis.svg",
  "firestore": "assets/icons/tech/firestore.svg",
  "secret manager": "assets/icons/tech/secret-manager.svg",
  "cloud run": "assets/icons/tech/cloud-run.svg",
  "compute engine": "assets/icons/tech/compute-engine.svg",
  "pub/sub": "assets/icons/tech/pubsub.svg",
  "app engine": "assets/icons/tech/app-engine.svg",
  "cloud storage": "assets/icons/tech/cloud-storage.svg",
  "cloud sql": "assets/icons/tech/cloud-sql.svg",
  "cloud tasks": "assets/icons/tech/cloud-tasks.svg",
  "cloud functions": "assets/icons/tech/cloud-functions.svg",
  "pinecone": "assets/icons/tech/pinecone.svg",
  "jinja": "assets/icons/tech/jinja.svg",
  "html": "assets/icons/tech/html5.svg",
  "css": "assets/icons/tech/css3.svg",
  "github actions": "assets/icons/tech/github-actions.svg",
  "nebius ai cloud": "assets/icons/tech/nebius.svg",
  "nvidia h200": "assets/icons/tech/nvidia.svg?v=20261027",
  "openai api": "assets/icons/tech/openai.svg",
  "prisma orm": "assets/icons/tech/prisma.svg",
  "sqlalchemy orm": "assets/icons/tech/sqlalchemy.svg",
  "google gemini": "assets/icons/tech/gemini.svg?v=20261027",
  "anthropic claude": "assets/icons/tech/anthropic.svg",
  "figma": "assets/icons/tech/figma.svg",
  "jira": "assets/icons/tech/jira.svg",
  "docling": "assets/icons/tech/docling.svg",
  "opencv": "assets/icons/tech/opencv.svg",
  "c++": "assets/icons/tech/cplusplus.svg",
  "aws sam": "assets/icons/tech/aws-sam.svg",
  "amazon sqs": "assets/icons/tech/amazon-sqs.svg",
  "ec2": "assets/icons/tech/amazon-ec2.svg",
  "ecs": "assets/icons/tech/amazon-ecs.svg",
  "aws lambda": "assets/icons/tech/aws-lambda.svg",
  "step functions": "assets/icons/tech/aws-step-functions.svg",
  "state machines": "assets/icons/tech/aws-step-functions.svg",
  "eventbridge": "assets/icons/tech/amazon-eventbridge.svg",
  "parameter store": "assets/icons/tech/parameter-store.svg"
};

const techAliases = {
  "hasura": "graphql",
  "llms": "ai agents",
  "microservices": "ai agents",
  "vms": "compute engine",
  "cloud pub/sub": "pub/sub",
  "postgres": "postgresql",
  "pinecone vector db": "pinecone",
  "jinja templates": "jinja",
  "openai / chatgpt": "openai api",
  "docling vlm": "docling"
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
  "java": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 14.2c-3.6 1-1.8 2.2 1.6 2.3 3.7.1 6.1-.8 6.1-.8M8 17.5c-3.8 1.1-1.8 2.6 2.5 2.7 4.6.1 7.2-1 7.2-1M7.5 11.9c0 1.1.5 1.9 1.5 2.3 1.8.7 5 .5 6.6-.2.8-.4 1.2-1.1 1.2-2.1Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M11 11c-2.4-2.6 3.5-3.2.8-6.2M14 10.5c3-2.2-1.1-3.1 1.7-6.9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  "javascript": `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="2" fill="currentColor"/><path d="M11.3 8v7.1c0 2.3-1.4 3-3 2.1M14.1 16.8c.6.5 1.3.8 2.1.8 1.1 0 1.9-.6 1.9-1.5 0-2-3.7-1.2-3.7-3.6 0-1.3 1-2.1 2.6-2.1.7 0 1.4.2 1.9.6" fill="none" stroke="var(--icon-cut, #181817)" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  "pytorch": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5.2a7.3 7.3 0 1 0 5.2 2.1" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><path d="m16.8 3.4 1.7 1.7" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="12" cy="12.5" r="1.3" fill="currentColor"/></svg>`,
  "tensorflow": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 7.2 8-4.5 8 4.5v4.1l-5.7-3.2v13.1l-4.5-2.6V8.1L4 11.3Z" fill="currentColor"/><path d="m12 2.7 8 4.5-4 2.3-4-2.3-4 2.3-4-2.3Z" fill="currentColor" opacity=".65"/></svg>`,
  "graphql": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 7.8 4.5v9L12 21l-7.8-4.5v-9Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 3 4.2 16.5h15.6Zm-7.8 4.5h15.6L12 21Z" fill="none" stroke="currentColor" stroke-width="1.2"/><g fill="currentColor"><circle cx="12" cy="3" r="1.5"/><circle cx="4.2" cy="7.5" r="1.5"/><circle cx="4.2" cy="16.5" r="1.5"/><circle cx="12" cy="21" r="1.5"/><circle cx="19.8" cy="16.5" r="1.5"/><circle cx="19.8" cy="7.5" r="1.5"/></g></svg>`,
  "nestjs": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8 20 6v6.8c0 4.7-3.2 7.4-8 8.4-4.8-1-8-3.7-8-8.4V6Z" fill="currentColor"/><path d="M7.2 16.8V8l9.6 8.8V8" fill="none" stroke="var(--icon-cut, white)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "mongodb": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.2 2.2c3.2 4.1 5 7.4 4.8 10.4-.2 3.5-2 6.2-4.8 8.3-2.9-2.3-5-5-5.1-8.4-.1-3 1.7-6.3 5.1-10.3Z" fill="currentColor"/><path d="M12.2 5.1v16.7" stroke="var(--icon-cut, white)" stroke-width="1.2" opacity=".8"/></svg>`,
  "redis": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 7 9-4 9 4-9 4Z" fill="currentColor"/><path d="m3 11 9 4 9-4M3 15l9 4 9-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="8" cy="7" r="1" fill="var(--icon-cut, white)"/><circle cx="12" cy="5.4" r="1" fill="var(--icon-cut, white)"/></svg>`,
  "firestore": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 18.2 2.2-14 4.7 3.9 2.4-3.2 4.7 13.3-7 3.5Z" fill="currentColor"/><path d="m7.2 4.2 4.7 12.1 2.4-11.4-2.4 3.2Z" fill="var(--icon-cut, white)" opacity=".32"/></svg>`,
  "sql": `<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5.2" rx="7.5" ry="3" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4.5 5.2v6.9c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5.2M4.5 12v6.8c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V12" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>`,
  "c++": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.5 8.3 4.8v9.4L12 21.5l-8.3-4.8V7.3Z" fill="currentColor"/><path d="M11.8 8.2a4 4 0 1 0 0 7.6M13.6 10.5v4M11.6 12.5h4M18.4 10.5v4M16.4 12.5h4" fill="none" stroke="var(--icon-cut, white)" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  "ci/cd": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 7.5a6.4 6.4 0 0 1 9.6-.7L19 8.7M16.5 16.5a6.4 6.4 0 0 1-9.6.7L5 15.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M19 4.5v4.2h-4.2M5 19.5v-4.2h4.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="m10 9 5 3-5 3Z" fill="currentColor"/></svg>`,
  "opencv": `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="6.5" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="7" cy="15.5" r="4" fill="none" stroke="currentColor" stroke-width="2" opacity=".7"/><circle cx="17" cy="15.5" r="4" fill="none" stroke="currentColor" stroke-width="2" opacity=".4"/></svg>`
};

const techIcon = (name) => {
  const requestedKey = name.toLowerCase();
  const key = techAliases[requestedKey] || requestedKey;
  const className = key.replace(/[^a-z0-9]+/g, "-");
  const asset = techAssets[key];
  if (asset) {
    return `<span class="tech-icon tech-${className}"><img src="${asset}" alt="" decoding="async" /></span>`;
  }
  const svg = techIcons[key];
  if (svg) return `<span class="tech-icon tech-${className}">${svg}</span>`;
  const letters = name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase();
  return `<span class="tech-icon tech-monogram" aria-hidden="true">${letters}</span>`;
};

const techBadge = (name, className = "tech-badge") =>
  `<span class="${className}">${techIcon(name)}<span>${name}</span></span>`;

setText("[data-person-name]", data.name);
setText("[data-initials]", data.initials);
setText("[data-availability-degree]", data.availability.degree);
setText("[data-availability-school]", data.availability.school);
setText("[data-availability-status]", data.availability.status);
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
  .map(({ period, role, company, companyUrl, description, tags }) => `
    <article class="timeline-row reveal">
      <div class="timeline-period">${period}</div>
      <div class="timeline-role"><h3>${role}</h3><p>${companyUrl ? `<a href="${companyUrl}" target="_blank" rel="noreferrer">${company} <span aria-hidden="true">↗</span></a>` : company}</p></div>
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
    const visual = color === "blue" ? `
      <div class="automation-visual" aria-hidden="true">
        <svg viewBox="0 0 640 205" preserveAspectRatio="xMidYMid meet">
          <g class="automation-edges">
            <path d="M118 103C146 103 146 53 178 53" />
            <path d="M118 103C146 103 146 153 178 153" />
            <path d="M282 53C318 53 318 103 350 103" />
            <path d="M282 153C318 153 318 103 350 103" />
            <path class="automation-human-edge" d="M402 52V76" />
            <path d="M454 103H510" />
          </g>

          <g class="automation-node automation-node-file" transform="translate(18 76)">
            <rect class="automation-node-shell" width="100" height="54" rx="13" />
            <path class="automation-node-icon" d="M17 14h13l8 8v18H17zm13 0v8h8" />
            <text x="47" y="25">FILE</text><text class="automation-node-sub" x="47" y="39">input</text>
          </g>
          <g class="automation-node automation-node-parse" transform="translate(178 26)">
            <rect class="automation-node-shell" width="104" height="54" rx="13" />
            <path class="automation-node-icon" d="M17 16h20M17 23h16M17 30h12" />
            <text x="47" y="25">PARSE</text><text class="automation-node-sub" x="47" y="39">Docling</text>
          </g>
          <g class="automation-node automation-node-rag" transform="translate(178 126)">
            <rect class="automation-node-shell" width="104" height="54" rx="13" />
            <circle class="automation-node-icon" cx="22" cy="27" r="10" />
            <path class="automation-node-icon" d="m29 34 8 8M18 27h8M22 23v8" />
            <text x="47" y="25">RAG</text><text class="automation-node-sub" x="47" y="39">retrieve</text>
          </g>
          <g class="automation-node automation-node-agent" transform="translate(350 76)">
            <rect class="automation-node-shell" width="104" height="54" rx="13" />
            <circle class="automation-node-icon" cx="25" cy="27" r="11" />
            <path class="automation-node-icon" d="M25 12v5m0 20v5M10 27h5m20 0h5m-4.4-10.6-3.6 3.6m-14 14-3.6 3.6m21.2 0L32 34M18 20l-3.6-3.6" />
            <text x="48" y="25">AGENT</text><text class="automation-node-sub" x="48" y="39">process</text>
          </g>
          <g class="automation-node automation-node-human" transform="translate(350 2)">
            <rect class="automation-node-shell" width="104" height="50" rx="13" />
            <circle class="automation-node-icon" cx="24" cy="17" r="6" />
            <path class="automation-node-icon" d="M13 39c1-8 5-12 11-12s10 4 11 12" />
            <text x="47" y="22">HUMAN</text><text class="automation-node-sub" x="47" y="36">insight</text>
          </g>
          <g class="automation-node automation-node-output" transform="translate(510 76)">
            <rect class="automation-node-shell" width="112" height="54" rx="13" />
            <circle class="automation-output-disc" cx="24" cy="27" r="11" />
            <path class="automation-output-check" d="m18 27 4 4 8-9" />
            <text x="46" y="25">OUTPUT</text><text class="automation-node-sub" x="46" y="39">verified</text>
          </g>

          <circle class="workflow-packet workflow-packet-a" r="4">
            <animateMotion dur="3.6s" repeatCount="indefinite" path="M118 103C146 103 146 53 178 53M178 53H282C318 53 318 103 350 103H454H510" />
          </circle>
          <circle class="workflow-packet workflow-packet-b" r="4">
            <animateMotion dur="3.6s" begin="-1.8s" repeatCount="indefinite" path="M118 103C146 103 146 153 178 153M178 153H282C318 153 318 103 350 103H454H510" />
          </circle>
        </svg>
        <div class="automation-status"><span></span> Live agent workflow <b>Human-in-the-loop enabled</b></div>
      </div>` : color === "healthcare" ? `
      <div class="healthcare-visual" aria-hidden="true">
        <svg class="healthcare-heart-icon" viewBox="0 0 116 96" preserveAspectRatio="xMidYMid meet">
          <g class="healthcare-heart">
            <path d="M50 82C33 69 9 53 9 30 9 14 21 4 36 4c9 0 17 5 22 13C63 9 71 4 80 4c15 0 27 10 27 26 0 23-24 39-41 52l-8 6-8-6Z" />
            <path class="healthcare-heart-cross" d="M52 27h12v10h10v12H64v10H52V49H42V37h10Z" />
          </g>
        </svg>
        <svg class="healthcare-ecg-visual" viewBox="0 0 360 70" preserveAspectRatio="none">
          <g class="healthcare-ecg-track">
            <path class="healthcare-ecg-cycle" transform="translate(-180)" d="M0 38h24c5 0 7-6 12-6s7 6 12 6h18l6 3 8-5 7-28 7 53 8-23h14c7 0 12-12 22-12s15 12 24 12h18" />
            <path class="healthcare-ecg-cycle" d="M0 38h24c5 0 7-6 12-6s7 6 12 6h18l6 3 8-5 7-28 7 53 8-23h14c7 0 12-12 22-12s15 12 24 12h18" />
            <path class="healthcare-ecg-cycle" transform="translate(180)" d="M0 38h24c5 0 7-6 12-6s7 6 12 6h18l6 3 8-5 7-28 7 53 8-23h14c7 0 12-12 22-12s15 12 24 12h18" />
            <path class="healthcare-ecg-cycle" transform="translate(360)" d="M0 38h24c5 0 7-6 12-6s7 6 12 6h18l6 3 8-5 7-28 7 53 8-23h14c7 0 12-12 22-12s15 12 24 12h18" />
            <path class="healthcare-ecg-cycle" transform="translate(540)" d="M0 38h24c5 0 7-6 12-6s7 6 12 6h18l6 3 8-5 7-28 7 53 8-23h14c7 0 12-12 22-12s15 12 24 12h18" />
          </g>
        </svg>
        <div class="healthcare-chips">
          <span>40+ triggers</span>
          <span>100+ filters</span>
        </div>
      </div>` : color === "violet" ? `
      <div class="pulse-monitor-visual" aria-hidden="true">
        <svg viewBox="0 0 420 225" preserveAspectRatio="xMidYMid meet">
          <rect class="pulse-monitor-frame" x="38" y="17" width="344" height="178" rx="15" />
          <rect class="pulse-monitor-screen" x="52" y="31" width="316" height="145" rx="8" />
          <rect class="pulse-camera" x="190" y="8" width="40" height="17" rx="7" />
          <circle class="pulse-camera-lens" cx="210" cy="16.5" r="4" />
          <path class="pulse-camera-guide" d="M205 25 181 52M215 25l24 27" />

          <g class="pulse-person">
            <path class="pulse-person-shoulders" d="M135 176c8-38 31-55 75-55s67 17 75 55Z" />
            <rect class="pulse-person-neck" x="195" y="108" width="30" height="32" rx="12" />
            <ellipse class="pulse-person-face" cx="210" cy="85" rx="37" ry="45" />
            <path class="pulse-person-hair" d="M174 82c-3-29 10-46 35-47 25-1 40 16 38 44-8-5-14-13-18-25-14 14-31 21-51 21Z" />
            <circle class="pulse-person-eye" cx="196" cy="88" r="2" />
            <circle class="pulse-person-eye" cx="224" cy="88" r="2" />
            <path class="pulse-person-mouth" d="M202 105c5 3 11 3 16 0" />
          </g>

          <text class="pulse-roi-label" x="181" y="52">FOREHEAD ROI</text>
          <rect class="pulse-roi" x="183" y="56" width="54" height="23" rx="4" />
          <circle class="pulse-roi-point" cx="210" cy="67.5" r="3" />
          <line class="pulse-scan-line" x1="57" y1="43" x2="363" y2="43" />

          <g class="pulse-reading">
            <text x="289" y="50">PULSE</text>
            <text class="pulse-bpm" x="289" y="70">72</text>
            <text class="pulse-bpm-unit" x="329" y="70">BPM</text>
          </g>
          <path class="pulse-signal" d="M72 150h38l7-5 7 5h18l5 4 6-4 6-24 8 43 8-19h19c8 0 13-11 23-11s16 11 25 11h27l6-4 7 4h56" />
          <path class="pulse-laptop-base" d="M20 195h380l14 14H6Z" />
          <path class="pulse-laptop-detail" d="M174 200h72l-5 5h-62Z" />
        </svg>
        <div class="pulse-monitor-status"><span></span> Camera active <b>Forehead signal → BPM estimate</b></div>
      </div>` : "";
    return `
    <${tag} class="project-card ${color} reveal" ${attributes}>
      <div class="project-top"><span>${number}</span><span>${category}</span></div>
      ${visual}
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

const toolboxRoot = document.querySelector("[data-toolbox]");
const toolboxAccents = ["#2146d9", "#7b4db3", "#078b78", "#d46a2c", "#4285f4", "#990000", "#685078", "#d46a2c"];

toolboxRoot.innerHTML = `
  <div class="toolbox-network-nav" role="tablist" aria-label="Technology categories">
    <p>Explore the stack</p>
    ${data.toolbox.map(({ category }, index) => `
      <button class="toolbox-network-tab" type="button" role="tab" aria-selected="${index === 0}" data-toolbox-tab="${index}">
        <span>${String(index + 1).padStart(2, "0")}</span>${category}
      </button>`).join("")}
    <div class="toolbox-network-progress" aria-hidden="true"><span></span></div>
  </div>
  <div class="toolbox-network-stage" role="tabpanel" aria-live="polite" data-toolbox-stage></div>`;

const toolboxStage = toolboxRoot.querySelector("[data-toolbox-stage]");
const toolboxNav = toolboxRoot.querySelector(".toolbox-network-nav");
const toolboxTabs = [...toolboxRoot.querySelectorAll("[data-toolbox-tab]")];
const toolboxSection = toolboxRoot.closest(".toolbox");
const toolboxPin = toolboxRoot.closest(".toolbox-network-pin");
let activeToolboxIndex = 0;
const toolboxReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
toolboxSection.style.setProperty("--toolbox-scroll-depth", `${(data.toolbox.length - 1) * 38}vh`);

const enableToolboxNodeDragging = () => {
  const canvas = toolboxStage.querySelector(".toolbox-network-canvas");
  const nodes = [...toolboxStage.querySelectorAll(".toolbox-network-node")];
  if (!canvas || !nodes.length) return;

  const positionOf = (node) => ({
    x: Number.parseFloat(node.dataset.x),
    y: Number.parseFloat(node.dataset.y)
  });
  const updateEdges = (nodeIndex) => {
    const position = positionOf(nodes[nodeIndex]);
    const hubEdge = canvas.querySelector(`[data-hub-node="${nodeIndex}"]`);
    if (hubEdge) {
      hubEdge.setAttribute("x2", position.x.toFixed(2));
      hubEdge.setAttribute("y2", position.y.toFixed(2));
    }
  };
  const moveNode = (node, nodeIndex, nextX, nextY) => {
    const bounds = canvas.getBoundingClientRect();
    const minX = (node.offsetWidth / 2 / bounds.width) * 100;
    const maxX = 100 - minX;
    const minY = (node.offsetHeight / 2 / bounds.height) * 100;
    const maxY = 100 - minY;
    const x = Math.min(maxX, Math.max(minX, nextX));
    const y = Math.min(maxY, Math.max(minY, nextY));
    node.dataset.x = x.toFixed(2);
    node.dataset.y = y.toFixed(2);
    node.style.left = `${x}%`;
    node.style.top = `${y}%`;
    updateEdges(nodeIndex);
  };

  nodes.forEach((node, nodeIndex) => {
    let dragging = false;
    const moveFromPointer = (event) => {
      if (!dragging) return;
      const bounds = canvas.getBoundingClientRect();
      moveNode(node, nodeIndex,
        ((event.clientX - bounds.left) / bounds.width) * 100,
        ((event.clientY - bounds.top) / bounds.height) * 100);
    };
    const finishDrag = (event) => {
      if (!dragging) return;
      dragging = false;
      node.classList.remove("is-dragging");
      if (node.hasPointerCapture(event.pointerId)) node.releasePointerCapture(event.pointerId);
    };
    node.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      event.preventDefault();
      dragging = true;
      node.classList.add("is-dragging");
      node.setPointerCapture(event.pointerId);
      moveFromPointer(event);
    });
    node.addEventListener("pointermove", moveFromPointer);
    node.addEventListener("pointerup", finishDrag);
    node.addEventListener("pointercancel", finishDrag);
    node.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
      event.preventDefault();
      const position = positionOf(node);
      const step = event.shiftKey ? 4 : 1.5;
      const deltaX = event.key === "ArrowLeft" ? -step : event.key === "ArrowRight" ? step : 0;
      const deltaY = event.key === "ArrowUp" ? -step : event.key === "ArrowDown" ? step : 0;
      moveNode(node, nodeIndex, position.x + deltaX, position.y + deltaY);
    });
  });
};

const renderToolboxNetwork = (index, { syncNav = true } = {}) => {
  activeToolboxIndex = index;
  const { category, description, technologies } = data.toolbox[index];
  const accent = toolboxAccents[index % toolboxAccents.length];
  const count = technologies.length;
  const radiusX = count > 9 ? 43 : count > 6 ? 40 : 37;
  const radiusY = count > 9 ? 40 : count > 6 ? 37 : 34;
  const positions = technologies.map((_, nodeIndex) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * nodeIndex) / count;
    return {
      x: 50 + Math.cos(angle) * radiusX,
      y: 52 + Math.sin(angle) * radiusY
    };
  });
  const hubEdges = positions.map(({ x, y }, nodeIndex) =>
    `<line class="toolbox-edge toolbox-edge-hub" data-hub-node="${nodeIndex}" x1="50" y1="52" x2="${x.toFixed(2)}" y2="${y.toFixed(2)}" style="--edge-delay:-${(nodeIndex * .14).toFixed(2)}s" />`).join("");

  toolboxRoot.style.setProperty("--network-accent", accent);
  toolboxTabs.forEach((tab, tabIndex) => {
    const selected = tabIndex === index;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  toolboxStage.innerHTML = `
    <div class="toolbox-network-heading">
      <p>${String(index + 1).padStart(2, "0")} / ${String(data.toolbox.length).padStart(2, "0")}</p>
      <h3>${category}</h3>
      <span>${description}</span>
    </div>
    <div class="toolbox-network-canvas">
      <svg class="toolbox-network-edges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        ${hubEdges}
      </svg>
      <div class="toolbox-network-hub">
        <span>${String(count).padStart(2, "0")}</span>
        <strong>Technologies</strong>
        <small>in this category</small>
        <i aria-hidden="true"></i>
      </div>
      ${technologies.map((technology, nodeIndex) => `
        <div class="toolbox-network-node" tabindex="0" aria-label="${technology} node. Drag it or use the arrow keys to reposition it." data-node-index="${nodeIndex}" data-x="${positions[nodeIndex].x.toFixed(2)}" data-y="${positions[nodeIndex].y.toFixed(2)}" style="left:${positions[nodeIndex].x.toFixed(2)}%;top:${positions[nodeIndex].y.toFixed(2)}%;--node-delay:-${(nodeIndex * .27).toFixed(2)}s">
          ${techIcon(technology)}
          <span>${technology}</span>
        </div>`).join("")}
    </div>`;
  enableToolboxNodeDragging();
  if (syncNav) {
    const activeTab = toolboxTabs[index];
    const targetLeft = activeTab.offsetLeft - (toolboxNav.clientWidth - activeTab.offsetWidth) / 2;
    toolboxNav.scrollTo({ left: Math.max(0, targetLeft), behavior: toolboxReducedMotion.matches ? "auto" : "smooth" });
  }
};

const getToolboxScrollMetrics = () => {
  const stickyTop = window.innerWidth <= 560 ? 82 : window.innerWidth <= 900 ? 86 : 96;
  const pinTop = window.scrollY + toolboxPin.getBoundingClientRect().top;
  const pinBottom = pinTop + toolboxPin.offsetHeight;
  const start = pinTop - stickyTop;
  const end = Math.max(start + 1, pinBottom - toolboxRoot.offsetHeight - stickyTop);
  return { start, end, stickyTop };
};

const scrollToToolboxIndex = (index) => {
  if (window.innerWidth <= 560) return;
  const { start, end } = getToolboxScrollMetrics();
  const progress = (index + .5) / data.toolbox.length;
  window.scrollTo({
    top: start + (end - start) * progress,
    behavior: toolboxReducedMotion.matches ? "auto" : "smooth"
  });
};

toolboxTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const nextIndex = Number(tab.dataset.toolboxTab);
    renderToolboxNetwork(nextIndex);
    scrollToToolboxIndex(nextIndex);
  });
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (activeToolboxIndex + direction + data.toolbox.length) % data.toolbox.length;
    renderToolboxNetwork(nextIndex);
    toolboxTabs[nextIndex].focus();
    scrollToToolboxIndex(nextIndex);
  });
});

let toolboxNavScrollFrame = 0;
const updateToolboxFromHorizontalScroll = () => {
  toolboxNavScrollFrame = 0;
  if (window.innerWidth > 560) return;
  const navCenter = toolboxNav.scrollLeft + toolboxNav.clientWidth / 2;
  let closestIndex = 0;
  let closestDistance = Number.POSITIVE_INFINITY;
  toolboxTabs.forEach((tab, index) => {
    const tabCenter = tab.offsetLeft + tab.offsetWidth / 2;
    const distance = Math.abs(tabCenter - navCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  });
  if (closestIndex !== activeToolboxIndex) renderToolboxNetwork(closestIndex, { syncNav: false });
};
toolboxNav.addEventListener("scroll", () => {
  if (!toolboxNavScrollFrame) toolboxNavScrollFrame = requestAnimationFrame(updateToolboxFromHorizontalScroll);
}, { passive: true });

let toolboxScrollFrame = 0;
const updateToolboxFromScroll = () => {
  toolboxScrollFrame = 0;
  if (window.innerWidth <= 560) {
    toolboxRoot.classList.remove("is-pinned", "is-complete");
    toolboxRoot.style.removeProperty("top");
    toolboxRoot.style.removeProperty("left");
    toolboxRoot.style.removeProperty("width");
    return;
  }
  const { start, end, stickyTop } = getToolboxScrollMetrics();
  const progress = Math.min(1, Math.max(0, (window.scrollY - start) / (end - start)));
  const nextIndex = Math.min(data.toolbox.length - 1, Math.floor(progress * data.toolbox.length));
  toolboxRoot.style.setProperty("--toolbox-scroll-progress", progress.toFixed(4));
  const isPinned = window.scrollY >= start && window.scrollY <= end;
  const isComplete = window.scrollY > end;
  toolboxRoot.classList.toggle("is-pinned", isPinned);
  toolboxRoot.classList.toggle("is-complete", isComplete);
  if (isPinned) {
    const pinBounds = toolboxPin.getBoundingClientRect();
    toolboxRoot.style.top = `${stickyTop}px`;
    toolboxRoot.style.left = `${pinBounds.left}px`;
    toolboxRoot.style.width = `${pinBounds.width}px`;
  } else {
    toolboxRoot.style.removeProperty("top");
    toolboxRoot.style.removeProperty("left");
    toolboxRoot.style.removeProperty("width");
  }
  if (nextIndex !== activeToolboxIndex) renderToolboxNetwork(nextIndex);
};
const requestToolboxScrollUpdate = () => {
  if (!toolboxScrollFrame) toolboxScrollFrame = requestAnimationFrame(updateToolboxFromScroll);
};
window.addEventListener("scroll", requestToolboxScrollUpdate, { passive: true });
window.addEventListener("resize", requestToolboxScrollUpdate);
renderToolboxNetwork(0);
requestToolboxScrollUpdate();

document.querySelector("[data-education]").innerHTML = data.education
  .map(({ degree, institutions, detail, period, location }) => `
    <article class="education-row">
      <div>
        <h3>${degree}</h3>
        <p class="education-institutions">
          ${institutions.map(({ name, url }) => `<a href="${url}" target="_blank" rel="noreferrer">${name} <span aria-hidden="true">↗</span></a>`).join('<span class="education-separator" aria-hidden="true">·</span>')}
          ${detail ? `<span class="education-separator" aria-hidden="true">·</span><span>${detail}</span>` : ""}
        </p>
      </div>
      <div class="education-meta"><span>${period}</span><span>${location}</span></div>
    </article>`)
  .join("");

document.querySelector("[data-achievements]").innerHTML = data.achievements
  .map(({ value, title, detail, certificateDetail, certificateUrl }) => `
    <article class="achievement-card reveal">
      <div class="achievement-rank" aria-label="National rank ${value.replace("#", "")}">
        <svg class="achievement-medal" viewBox="0 0 64 74" aria-hidden="true">
          <path class="achievement-medal-ribbon ribbon-left" d="M13 3h17l6 32-15 8z" />
          <path class="achievement-medal-ribbon ribbon-right" d="M34 3h17L43 43l-15-8z" />
          <circle class="achievement-medal-disc" cx="32" cy="49" r="20" />
          <path class="achievement-medal-star" d="m32 36 3.8 7.7 8.5 1.2-6.1 6 1.4 8.4-7.6-4-7.6 4 1.4-8.4-6.1-6 8.5-1.2z" />
        </svg>
        <div class="achievement-rank-copy">
          <span>National rank</span>
          <strong class="achievement-rank-value">${value}</strong>
        </div>
      </div>
      <h3>${title}</h3><p>${detail}</p>
      <p class="achievement-certificate-detail">${certificateDetail}</p>
      <a class="achievement-certificate-link" href="${certificateUrl}" target="_blank" rel="noreferrer">
        View certificate <span aria-hidden="true">↗</span>
      </a>
    </article>`)
  .join("");

document.querySelector("[data-certifications]").innerHTML = data.certifications
  .map(({ title, issuer, description, url }, index) => `
    <a class="certification-card reveal" href="${url}" target="_blank" rel="noreferrer">
      <div class="certification-card-top">
        <span>0${index + 1}</span>
        <span>View PDF ↗</span>
      </div>
      <div class="certification-card-body">
        <p>${issuer}</p>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    </a>`)
  .join("");

const emailLink = document.querySelector("[data-email-link]");
emailLink.href = `mailto:${data.email}`;
emailLink.firstChild.textContent = `${data.email} `;

document.querySelector("[data-socials]").innerHTML = data.socials
  .map(({ label, url }) => {
    const iconName = label.toLowerCase();
    return `<a href="${url}" aria-label="${label}" ${url !== "#" ? 'target="_blank" rel="noreferrer"' : ""}>
      <img src="assets/icons/social/${iconName}-white.svg" alt="" aria-hidden="true" />
      <span>${label}</span>
    </a>`;
  })
  .join("");

if (data.resumeUrl) {
  const resumeLink = document.querySelector("[data-resume-link]");
  resumeLink.hidden = false;
  resumeLink.href = data.resumeUrl;
  const headerResumeLink = document.querySelector("[data-header-resume]");
  headerResumeLink.hidden = false;
  headerResumeLink.href = data.resumeUrl;
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

const initHeroSpatialBackground = () => {
  const canvas = document.querySelector("[data-hero-spatial]");
  const context = canvas?.getContext("2d");
  if (!canvas || !context) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const palette = [[33, 70, 217], [7, 139, 120], [153, 0, 0], [184, 128, 0]];
  let width = 0;
  let height = 0;
  let points = [];
  let targetTiltX = 0;
  let targetTiltY = 0;
  let tiltX = 0;
  let tiltY = 0;
  let animationFrame = 0;
  let active = true;

  const createPoints = () => {
    const count = width < 700 ? 28 : 52;
    points = Array.from({ length: count }, (_, index) => ({
      x: (Math.random() - .5) * width * .95,
      y: (Math.random() - .5) * height * .82,
      z: Math.random() * 560 - 240,
      size: 1.5 + Math.random() * 2.8,
      color: palette[index % palette.length]
    }));
  };

  const resize = () => {
    const nextWidth = Math.max(1, Math.round(window.innerWidth));
    const nextHeight = Math.max(1, Math.round(window.innerHeight));
    if (nextWidth === width && nextHeight === height) return;
    width = nextWidth;
    height = nextHeight;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    createPoints();
    if (reducedMotion.matches) render(0);
  };

  const project = (point, time) => {
    const rotationY = tiltY + time * .000035;
    const rotationX = tiltX - .08;
    const cosY = Math.cos(rotationY);
    const sinY = Math.sin(rotationY);
    const cosX = Math.cos(rotationX);
    const sinX = Math.sin(rotationX);
    const xAfterY = point.x * cosY - point.z * sinY;
    const zAfterY = point.x * sinY + point.z * cosY;
    const yAfterX = point.y * cosX - zAfterY * sinX;
    const zAfterX = point.y * sinX + zAfterY * cosX;
    const depth = 650 + zAfterX;
    if (depth < 90) return null;
    const scale = 520 / depth;
    return {
      x: width * .58 + xAfterY * scale,
      y: height * .5 + yAfterX * scale,
      scale,
      depth: zAfterX
    };
  };

  const drawOrbitalCore = (time) => {
    const centerX = width * .72;
    const centerY = height * .38;
    const phase = time * .00018 + tiltY * 2.5;
    const rings = [
      { radiusX: 112, radiusY: 28, rotation: phase, color: "rgba(33,70,217,.28)" },
      { radiusX: 92, radiusY: 38, rotation: phase + Math.PI / 2.7, color: "rgba(7,139,120,.34)" },
      { radiusX: 72, radiusY: 48, rotation: phase - Math.PI / 2.2, color: "rgba(153,0,0,.2)" }
    ];
    context.save();
    context.lineWidth = 1.25;
    rings.forEach((ring, index) => {
      context.strokeStyle = ring.color;
      context.beginPath();
      context.ellipse(centerX, centerY, ring.radiusX, ring.radiusY, ring.rotation, 0, Math.PI * 2);
      context.stroke();
      const nodePhase = phase * (index % 2 ? -1.3 : 1.1) + index * 1.9;
      const cosine = Math.cos(nodePhase);
      const sine = Math.sin(nodePhase);
      const nodeX = centerX + ring.radiusX * cosine * Math.cos(ring.rotation) - ring.radiusY * sine * Math.sin(ring.rotation);
      const nodeY = centerY + ring.radiusX * cosine * Math.sin(ring.rotation) + ring.radiusY * sine * Math.cos(ring.rotation);
      const [red, green, blue] = palette[index];
      context.shadowColor = `rgba(${red},${green},${blue},.62)`;
      context.shadowBlur = 15;
      context.fillStyle = `rgba(${red},${green},${blue},.82)`;
      context.beginPath();
      context.arc(nodeX, nodeY, 3.5 + index, 0, Math.PI * 2);
      context.fill();
    });
    const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 32);
    glow.addColorStop(0, "rgba(7,139,120,.32)");
    glow.addColorStop(1, "rgba(7,139,120,0)");
    context.fillStyle = glow;
    context.beginPath();
    context.arc(centerX, centerY, 32, 0, Math.PI * 2);
    context.fill();
    context.restore();
  };

  const render = (time) => {
    tiltX += (targetTiltX - tiltX) * .045;
    tiltY += (targetTiltY - tiltY) * .045;
    context.clearRect(0, 0, width, height);
    drawOrbitalCore(time);

    const projected = points.map((point) => ({ point, screen: project(point, time) })).filter(({ screen }) => screen);
    const connectionLimit = width < 700 ? 145 : 190;
    for (let first = 0; first < projected.length; first += 1) {
      for (let second = first + 1; second < projected.length; second += 1) {
        const a = projected[first];
        const b = projected[second];
        const dx = a.point.x - b.point.x;
        const dy = a.point.y - b.point.y;
        const dz = a.point.z - b.point.z;
        const distance = Math.hypot(dx, dy, dz);
        if (distance > connectionLimit) continue;
        const alpha = (1 - distance / connectionLimit) * .28;
        context.strokeStyle = `rgba(33, 70, 217, ${alpha})`;
        context.lineWidth = .75;
        context.beginPath();
        context.moveTo(a.screen.x, a.screen.y);
        context.lineTo(b.screen.x, b.screen.y);
        context.stroke();
      }
    }

    projected.sort((a, b) => b.screen.depth - a.screen.depth).forEach(({ point, screen }) => {
      const radius = Math.max(.7, point.size * screen.scale);
      const [red, green, blue] = point.color;
      context.save();
      context.shadowColor = `rgba(${red}, ${green}, ${blue}, .42)`;
      context.shadowBlur = 14;
      context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${Math.min(.92, .58 + screen.scale * .3)})`;
      context.beginPath();
      context.arc(screen.x, screen.y, radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
  };

  const animate = (time) => {
    animationFrame = 0;
    if (!active || document.hidden || reducedMotion.matches) return;
    render(time);
    animationFrame = requestAnimationFrame(animate);
  };

  const start = () => {
    if (!animationFrame && active && !document.hidden && !reducedMotion.matches) {
      animationFrame = requestAnimationFrame(animate);
    }
  };

  window.addEventListener("pointermove", (event) => {
    targetTiltY = (event.clientX / width - .5) * .24;
    targetTiltX = (event.clientY / height - .5) * -.14;
  });
  window.addEventListener("resize", resize);
  document.addEventListener("visibilitychange", start);
  reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      render(0);
    } else {
      start();
    }
  });

  resize();
  if (reducedMotion.matches) render(0);
  else start();
};

initHeroSpatialBackground();

// js/ui/panels.js

let overlay;
let closeBtn;
let overlayBody;

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  backend: ["Node.js", "Express", "REST APIs"],
  tools: ["Git", "Docker", "Linux"],
  soft: ["Teamwork", "Communication", "Problem Solving"]
};

const projects = [
  {
    title: "Verbesserte Portfolio Website",
    desc: "Neue Portfolio Website, weg vom Standard Design Stil",
    tech: ["JavaScript", "HTML", "CSS", "Github"],
    link: "#"
  },
  {
    title: "Food Tracking App",
    desc: "App zur Übersicht welche Lebensmittel noch im Haushalt sind",
    tech: ["JavaScript", "HTML", "CSS", "PHP", "MySQL", "Github"],
    link: "#"
  },
    {
    title: "Portfolio Website",
    desc: "Verbesserte eigene Website mit integriertem 'Kot' Game",
    tech: ["JavaScript", "HTML", "CSS", "Github"],
    link: "assets/links/website2/index.html"
  },
  {
    title: "'Kot' Game 2024",
    desc: "kleines 1-Level Platformer Game",
    tech: ["JavaScript", "HTML", "CSS", "Github"],
    link: "#"
  },
  {
    title: "Erste eigene Website 2024",
    desc: "Eine erste eigene Website in schlichtem Look",
    tech: ["JavaSript", "HTML", "CSS"],
    link: "#"
  }
];

const panelRenderers = {
  contact: () => `
    <h2>Contact</h2>
    <p>Schreib mir gerne, wenn du Fragen hast oder mit mir arbeiten willst.</p>
    <div class="contact-buttons">
      <a href="mailto:deine.mail@example.com" class="btn">E-Mail</a>
      <a href="https://linkedin.com/in/deinprofil" target="_blank" class="btn outline">LinkedIn</a>
      <a href="https://github.com/Flowdi" target="_blank" class="btn outline">GitHub</a>
    </div>
  `,

  experience: () => `
    <h2>Experience</h2>
    <div class="timeline">
      <div class="timeline-item">
        <h3>Jobtitel @ Firma</h3>
        <span class="time">2023 – heute</span>
        <p>Kurzbeschreibung deiner Aufgaben und Highlights.</p>
      </div>
      <div class="timeline-item">
        <h3>Frühere Rolle @ Firma</h3>
        <span class="time">2021 – 2023</span>
        <p>Ein paar Stichpunkte zu Technologien, Verantwortung, etc.</p>
      </div>
    </div>
  `,

  skills: () => `
    <h2>Skills</h2>
    ${renderSkillGroup("Frontend", skills.frontend)}
    ${renderSkillGroup("Backend", skills.backend)}
    ${renderSkillGroup("Tools", skills.tools)}
    ${renderSkillGroup("Soft Skills", skills.soft)}
  `,

  projects: () => `
    <h2>Projects</h2>
    <div class="project-grid">
      ${projects.map(renderProjectCard).join("")}
    </div>
  `,

  certificates: () => `
    <h2>Certificates</h2>
    <ul class="cert-list">
      <li><strong>Example Cert 1</strong> – Issuer · 2023</li>
      <li><strong>Example Cert 2</strong> – Issuer · 2022</li>
    </ul>
  `,

  about: () => `
    <h2>About Me</h2>
    <p>Kurzer Text über dich, wer du bist, was dich motiviert und worauf du Bock hast.</p>
    <p>Du kannst hier auch ein paar persönliche Fun Facts oder deine Richtung schreiben (z.B. "Ich liebe es, UI, Animation und sauberen Code zu verbinden.").</p>
  `
};

// kleine Helper-Funktionen für die Templates
function renderSkillGroup(title, items) {
  return `
    <div class="skill-group">
      <h3>${title}</h3>
      <div class="skill-chips">
        ${items.map(i => `<span class="chip">${i}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderProjectCard(project) {
  return `
    <div class="project-card">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <div class="tags">
        ${project.tech.map(t => `<span class="chip">${t}</span>`).join("")}
      </div>
      ${project.link ? `<a href="${project.link}" target="_blank" class="btn small">View</a>` : ""}
    </div>
  `;
}

// Init & Steuerfunktionen
export function initPanels() {
  overlay = document.getElementById("overlay");
  closeBtn = document.getElementById("overlayClose");
  overlayBody = document.getElementById("overlayBody");

  if (!overlay || !overlayBody) {
    console.warn("initPanels: Overlay-Elemente nicht gefunden");
    return;
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closePanel);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closePanel();
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closePanel();
  });
}

export function openPanel(id) {
  if (!overlay || !overlayBody) return;

  const renderer = panelRenderers[id];
  if (!renderer) {
    console.warn(`openPanel: Kein Renderer für Panel "${id}" definiert`);
    return;
  }

  overlayBody.innerHTML = renderer();
  overlay.classList.add("open");
}

export function closePanel() {
  if (!overlay || !overlayBody) return;

  overlay.classList.remove("open");
  overlayBody.innerHTML = "";
}

// js/ui/panels.js

let overlay;
let closeBtn;
let overlayBody;

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "PHP basics"],
  backend: ["Node.js", "Express", "REST APIs", "MySQl", "PostgreSQL"],
  tools: ["Git & Github", "VS Code", "Postman", "Docker", "Linux basics"],
  soft: ["Teamwork", "Communication", "Problem Solving", "eigenständiges Arbeiten", "crativity"],
  progress: ["Python - aktuell Lern- & Übungsprojekte", "PHP - Aufbau solider Backend Kenntnisse"]
};

const projects = [
  {
    title: "Verbesserte Portfolio Website",
    desc: "Neue Portfolio Website, weg vom Standard Design Stil - Die Seite auf der Sie sich gerade befinden",
    tech: ["JavaScript", "HTML", "CSS", "Github"],
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
    link: "assets/links/kotgame/index.html"
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
      <a href="https://github.com/Flowdi" target="_blank" class="btn outline">GitHub</a>
      <a href="https://linkedin.com/in/deinprofil" target="_blank" class="btn outline">LinkedIn</a>
      <a href="mailto:deine.mail@example.com" class="btn">E-Mail</a>
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
    ${renderSkillGroup("Skills in Progress", skills.progress)}
  `,

  projects: () => `
    <h2>Projects</h2>
    <div class="project-grid">
      ${projects.map(renderProjectCard).join("")}
    </div>
  `,

certificates: () => `
  <h2>Certificates</h2>

  <div class="cert-section">

    <h3 class="cert-title">Earned Certificates</h3>

    <div class="cert-grid">

      <!-- FreeCodeCamp JS -->
      <div class="cert-card">
        <div class="cert-badge">
          <img src="assets/certificates/fcc-js.png" alt="JavaScript Certification">
        </div>

        <div class="cert-info">
          <h4>JavaScript Algorithms & Data Structures</h4>
          <span class="issuer">freeCodeCamp</span>
          <span class="year">2024</span>
        </div>

        <div class="cert-actions">
          <a href="#" class="btn small">View</a>
          <a href="#" class="btn small outline">Verify</a>
        </div>
      </div>


      <!-- FreeCodeCamp Responsive -->
      <div class="cert-card">
        <div class="cert-badge">
          <img src="assets/certificates/fcc-responsive.png" alt="Responsive Web Design">
        </div>

        <div class="cert-info">
          <h4>Responsive Web Design</h4>
          <span class="issuer">freeCodeCamp</span>
          <span class="year">2024</span>
        </div>

        <div class="cert-actions">
          <a href="#" class="btn small">View</a>
          <a href="#" class="btn small outline">Verify</a>
        </div>
      </div>

    </div>



    <!-- IN PROGRESS -->
    <h3 class="cert-title">In Progress</h3>

    <div class="cert-grid">

      <div class="cert-card in-progress">
        <div class="cert-badge placeholder">
          <span>Coming Soon</span>
        </div>

        <div class="cert-info">
          <h4>Fullstack Development</h4>
          <span class="issuer">Udemy</span>
          <span class="year">2025</span>
        </div>

        <div class="cert-status in-progress-status">
          In Progress
        </div>
      </div>

      <div class="cert-card in-progress">
        <div class="cert-badge placeholder">
          <span>Coming Soon</span>
        </div>

        <div class="cert-info">
          <h4>MySQL Database Certification</h4>
          <span class="issuer">Udemy</span>
          <span class="year">2025</span>
        </div>

        <div class="cert-status in-progress-status">
          In Progress
        </div>
      </div>

    </div>



    <!-- FUTURE -->
    <h3 class="cert-title">Upcoming</h3>

    <div class="cert-grid">

      <div class="cert-card upcoming">
        <div class="cert-badge placeholder">
          <span>IHK</span>
        </div>

        <div class="cert-info">
          <h4>Fachinformatiker Anwendungsentwicklung</h4>
          <span class="issuer">IHK</span>
          <span class="year">2026</span>
        </div>

        <div class="cert-status upcoming-status">
          July 2026
        </div>
      </div>

    </div>

  </div>
`,

  about: () => `
    <h2>About Me</h2>
    <p>Ich bin angehender Fachinformatiker für Anwendungsentwicklung (IHK-Abschluss Juli 2026) mit Leidenschaft für sauberen Code, moderne Webentwicklung und kreative User Interfaces. </p><br>
    <p>Mein Weg in die IT begann schon früh mit Technikbegeisterung und Gaming – heute setze ich eigene Projekte um und vertiefe mein Wissen kontinuierlich, u. a. durch Zertifikate in JavaScript, MySQL und Fullstack-Development.</p><br><p>Abseits des Bildschirms verbringe ich gerne Zeit in der Natur, gehe wandern oder betreibe Sport – und sammle neue kreative Impulse.</p>
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

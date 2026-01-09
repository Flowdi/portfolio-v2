// js/ui/panels.js
import { tPanel } from "../i18n/bilingual.js";

let overlay;
let closeBtn;
let overlayBody;

let currentPanelId = null;

/* =========================================
   Panel Renderers
========================================= */

const panelRenderers = {
  contact: () => {
    const t = tPanel("contact");
    const introHtml = toParagraphHtml(t.intro);

    return `
      <h2>${t.title}</h2>
      <p>${introHtml}</p>

      <div class="contact-buttons">
        <a href="https://github.com/Flowdi" target="_blank" rel="noopener" class="btn outline">
          ${t.buttons.github}
        </a>
        <a href="https://linkedin.com/in/deinprofil" target="_blank" rel="noopener" class="btn outline">
          ${t.buttons.linkedin}
        </a>
        <a href="https://www.xing.com/profile/deinprofil" target="_blank" rel="noopener" class="btn outline">
          ${t.buttons.xing}
        </a>
        <a href="mailto:deine.mail@example.com" class="btn">
          ${t.buttons.email}
        </a>
      </div>
    `;
  },

  experience: () => {
    const t = tPanel("experience");

    return `
      <h2>${t.title}</h2>
      <div class="timeline">
        ${t.items
          .map(
            (item) => `
          <div class="timeline-item">
            <h3>${item.heading}</h3>
            <span class="time">${item.time}</span>
            <p>${item.text}</p>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  },

  skills: () => {
    const t = tPanel("skills");

    return `
      <h2>${t.title}</h2>
      ${t.groups.map((g) => renderSkillGroup(g.title, g.items)).join("")}
    `;
  },

  projects: () => {
    const t = tPanel("projects");

    return `
      <h2>${t.title}</h2>
      <div class="project-grid">
        ${t.items.map(p => renderProjectCard(p, t)).join("")}
      </div>

      <div class="project-viewer" hidden>
        <button class="btn outline small project-viewer-back">Back</button>
        <iframe class="project-frame"></iframe>
      </div>
    `;
  },


certificates: () => {
  const t = tPanel("certificates");

  const earnedHtml = t.items.earned.map((c) => `
    <div class="cert-card">
      <div class="cert-badge">
        <img src="${c.img}" alt="${escapeHtml(c.title)}">
      </div>

      <div class="cert-info">
        <h4>${escapeHtml(c.title)}</h4>
        <span class="issuer">${escapeHtml(c.issuer)}</span>
        <span class="year">${escapeHtml(c.year)}</span>
      </div>

      <div class="cert-actions">
        <a href="#" class="btn small"
           data-action="cert-view"
           data-cert-id="${c.id}">
          ${t.buttons.view}
        </a>
        <a href="${c.verifyUrl || "#"}"
           class="btn small outline"
           target="_blank" rel="noopener">
          ${t.buttons.verify}
        </a>
      </div>
    </div>
  `).join("");

  const progressHtml = t.items.progress.map((c) => `
    <div class="cert-card in-progress">
      <div class="cert-badge placeholder"><span>Coming Soon</span></div>

      <div class="cert-info">
        <h4>${escapeHtml(c.title)}</h4>
        <span class="issuer">${escapeHtml(c.issuer)}</span>
        <span class="year">${escapeHtml(c.year)}</span>
      </div>

      <div class="cert-status in-progress-status">
        ${escapeHtml(c.status)}
      </div>
    </div>
  `).join("");

  const upcomingHtml = t.items.upcoming.map((c) => `
    <div class="cert-card upcoming">
      <div class="cert-badge placeholder"><span>${escapeHtml(c.issuer)}</span></div>

      <div class="cert-info">
        <h4>${escapeHtml(c.title)}</h4>
        <span class="issuer">${escapeHtml(c.issuer)}</span>
        <span class="year">${escapeHtml(c.year)}</span>
      </div>

      <div class="cert-status upcoming-status">
        ${escapeHtml(c.status)}
      </div>
    </div>
  `).join("");

  // Viewer + Liste in einem Panel: viewer ist zunächst hidden
  return `
    <h2>${t.title}</h2>

    <div class="cert-viewer" id="certViewer" aria-hidden="true">
      <div class="cert-viewer-top">
        <button class="btn small outline" data-action="cert-back">
          ${t.buttons.back}
        </button>

        <div class="cert-viewer-meta">
          <div class="cert-viewer-kicker">${t.viewer.headline}</div>
          <div class="cert-viewer-title" id="certViewerTitle"></div>
          <div class="cert-viewer-sub" id="certViewerSub"></div>
        </div>

        <a class="btn small" id="certViewerVerify" href="#" target="_blank" rel="noopener">
          ${t.viewer.verifyHint}
        </a>
      </div>

      <div class="cert-viewer-media">
        <img id="certViewerImg" alt="">
      </div>
    </div>

    <div class="cert-list" id="certList">
      <div class="cert-section">
        <h3 class="cert-title">${t.sections.earned}</h3>
        <div class="cert-grid">${earnedHtml}</div>

        <h3 class="cert-title">${t.sections.progress}</h3>
        <div class="cert-grid">${progressHtml}</div>

        <h3 class="cert-title">${t.sections.upcoming}</h3>
        <div class="cert-grid">${upcomingHtml}</div>
      </div>
    </div>
  `;
},


  about: () => {
  const t = tPanel("about");

  return `
    <h2>${t.title}</h2>

    <div class="about-layout">
      <div class="about-image">
        <img src="assets/images/about-me.jpg" alt="">
      </div>

      <div class="about-text">
        ${t.paragraphs.map(p => `<p>${p}</p>`).join("")}
      </div>
    </div>
  `;
},

};

/* =========================================
   Helper functions (Templates)
========================================= */

function renderSkillGroup(title, items) {
  return `
    <div class="skill-group">
      <h3>${title}</h3>
      <div class="skill-chips">
        ${items.map((i) => `<span class="chip">${escapeHtml(i)}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderProjectCard(project, t) {
  return `
    <div class="project-card" data-project="${project.id}">
      
      ${project.preview ? `
        <div class="project-preview">
          <img src="${project.preview}" alt="">
        </div>
      ` : ""}

      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.desc}</p>

        <div class="tags">
          ${project.tech.map(t => `<span class="chip">${t}</span>`).join("")}
        </div>

        ${project.url ? `
          <button class="btn small project-view-btn" data-url="${project.url}">
            ${t.viewLabel}
          </button>
        ` : ""}
      </div>

    </div>
  `;
}


// Wandelt "\n\n" zu <br><br> um, lässt normalen Text so wie er ist
function toParagraphHtml(text) {
  if (!text) return "";
  return escapeHtml(text).replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");
}

// Mini-escape, damit dir kein HTML “kaputt” geht, wenn du mal Sonderzeichen im Text hast
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function afterRender(panelId) {
  if (panelId === "certificates") {
    initCertificatesInteractions();
  }
}

function initCertificatesInteractions() {
  // Event Delegation: einmal pro Render – vorherige Listener sicher entfernen
  overlayBody.onclick = (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    const action = btn.dataset.action;
    if (action === "cert-view") {
      e.preventDefault();
      const certId = btn.dataset.certId;
      openCertificateViewer(certId);
    }

    if (action === "cert-back") {
      e.preventDefault();
      closeCertificateViewer();
    }
  };
}

function openCertificateViewer(certId) {
  const t = tPanel("certificates");
  const cert = (t.items.earned || []).find((c) => c.id === certId);
  if (!cert) return;

  const viewer = overlayBody.querySelector("#certViewer");
  const list = overlayBody.querySelector("#certList");
  const img = overlayBody.querySelector("#certViewerImg");
  const title = overlayBody.querySelector("#certViewerTitle");
  const sub = overlayBody.querySelector("#certViewerSub");
  const verify = overlayBody.querySelector("#certViewerVerify");

  if (!viewer || !list || !img || !title || !sub || !verify) return;

  img.src = cert.img;
  img.alt = cert.title;

  title.textContent = cert.title;
  sub.textContent = `${cert.issuer} • ${cert.year}`;

  verify.href = cert.verifyUrl || "#";
  verify.style.display = cert.verifyUrl && cert.verifyUrl !== "#" ? "inline-block" : "none";

  viewer.classList.add("open");
  viewer.setAttribute("aria-hidden", "false");

  list.classList.add("hidden");
}

function closeCertificateViewer() {
  const viewer = overlayBody.querySelector("#certViewer");
  const list = overlayBody.querySelector("#certList");
  if (!viewer || !list) return;

  viewer.classList.remove("open");
  viewer.setAttribute("aria-hidden", "true");
  list.classList.remove("hidden");
}

/* =========================================
   Init & Control functions
========================================= */

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

  currentPanelId = id;
  overlayBody.innerHTML = renderer();
  bindProjectView();

  overlay.classList.add("open");

  afterRender(id);
}

function bindProjectView() {
  const viewer = document.querySelector(".project-viewer");
  const frame = viewer?.querySelector(".project-frame");
  const backBtn = viewer?.querySelector(".project-viewer-back");

  document.querySelectorAll(".project-view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      frame.src = btn.dataset.url;
      viewer.hidden = false;
      document.querySelector(".project-grid").style.display = "none";
    });
  });

  backBtn?.addEventListener("click", () => {
    frame.src = "";
    viewer.hidden = true;
    document.querySelector(".project-grid").style.display = "";
  });
}


export function refreshCurrentPanel() {
  if (!overlay || !overlayBody || !currentPanelId) return;

  const renderer = panelRenderers[currentPanelId];
  if (!renderer) return;

  overlayBody.innerHTML = renderer();
  afterRender(currentPanelId);
}


export function closePanel() {
  if (!overlay || !overlayBody) return;

  overlay.classList.remove("open");
  overlayBody.innerHTML = "";
  currentPanelId = null;
}

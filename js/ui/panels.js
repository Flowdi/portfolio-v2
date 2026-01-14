// js/ui/panels.js
import { tPanel, tRepo } from "../i18n/bilingual.js";

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
      <h2>${escapeHtml(t.title)}</h2>
      <p>${introHtml}</p>

      <div class="contact-buttons">
        <a href="https://github.com/Flowdi" target="_blank" rel="noopener" class="btn outline">
          ${escapeHtml(t.buttons.github)}
        </a>
        <a href="https://linkedin.com/in/deinprofil" target="_blank" rel="noopener" class="btn outline">
          ${escapeHtml(t.buttons.linkedin)}
        </a>
        <a href="https://www.xing.com/profile/deinprofil" target="_blank" rel="noopener" class="btn outline">
          ${escapeHtml(t.buttons.xing)}
        </a>
        <a href="mailto:deine.mail@example.com" class="btn">
          ${escapeHtml(t.buttons.email)}
        </a>
      </div>
    `;
  },

  experience: () => {
    const t = tPanel("experience");

    return `
      <h2>${escapeHtml(t.title)}</h2>
      <div class="timeline">
        ${(t.items || [])
          .map(
            (item) => `
              <div class="timeline-item">
                <h3>${escapeHtml(item.heading)}</h3>
                <span class="time">${escapeHtml(item.time)}</span>
                <p>${escapeHtml(item.text)}</p>
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
      <h2>${escapeHtml(t.title)}</h2>
      ${(t.groups || []).map((g) => renderSkillGroup(g.title, g.items)).join("")}
    `;
  },

  projects: () => {
    const t = tPanel("projects");

    return `
      <h2>${escapeHtml(t.title)}</h2>

      <div class="project-grid">
        ${(t.items || []).map((p) => renderProjectCard(p, t)).join("")}
      </div>

      <div class="project-viewer" hidden>
        <div class="project-viewer-bar">
          <button class="btn outline small project-viewer-back">Back</button>
          <button class="btn outline small project-open-btn">${escapeHtml(t.openLabel)}</button>
        </div>

        <iframe class="project-frame" title="Project Preview"></iframe>
      </div>
    `;
  },

  certificates: () => {
    const t = tPanel("certificates");

    const earnedHtml = (t.items.earned || [])
      .map(
        (c) => `
        <div class="cert-card">
          <div class="cert-badge">
            <img src="${escapeAttr(c.img)}" alt="${escapeAttr(c.title)}">
          </div>

          <div class="cert-info">
            <h4>${escapeHtml(c.title)}</h4>
            <span class="issuer">${escapeHtml(c.issuer)}</span>
            <span class="year">${escapeHtml(c.year)}</span>
          </div>

          <div class="cert-actions">
            <a href="#"
              class="btn small"
              data-action="cert-view"
              data-cert-id="${escapeAttr(c.id)}">
              ${escapeHtml(t.buttons.view)}
            </a>

            ${
              c.verifyUrl && c.verifyUrl !== "#"
                ? `
                <a href="${escapeAttr(c.verifyUrl)}"
                  class="btn small outline"
                  target="_blank" rel="noopener">
                  ${escapeHtml(t.buttons.verify)}
                </a>
              `
                : ""
            }
          </div>
        </div>
      `
      )
      .join("");

    const progressHtml = (t.items.progress || [])
      .map(
        (c) => `
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
      `
      )
      .join("");

    const upcomingHtml = (t.items.upcoming || [])
      .map(
        (c) => `
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
      `
      )
      .join("");

    return `
      <h2>${escapeHtml(t.title)}</h2>

      <div class="cert-viewer" id="certViewer" aria-hidden="true">
        <div class="cert-viewer-top">
          <button class="btn small outline" data-action="cert-back">
            ${escapeHtml(t.buttons.back)}
          </button>

          <div class="cert-viewer-meta">
            <div class="cert-viewer-kicker">${escapeHtml(t.viewer.headline)}</div>
            <div class="cert-viewer-title" id="certViewerTitle"></div>
            <div class="cert-viewer-sub" id="certViewerSub"></div>
          </div>

          <div class="cert-nav">
            <button class="btn small outline" data-action="cert-prev" aria-label="Previous">‹</button>
            <button class="btn small outline" data-action="cert-next" aria-label="Next">›</button>
            <a class="btn small" id="certViewerVerify" href="#" target="_blank" rel="noopener">
              ${escapeHtml(t.viewer.verifyHint)}
            </a>
          </div>
        </div>

        <div class="cert-viewer-media" id="certViewerMedia">
          <img id="certViewerImg" alt="">
        </div>
      </div>

      <div class="cert-lightbox" id="certLightbox" aria-hidden="true">
        <div class="cert-lightbox-inner">
          <img id="certLightboxImg" alt="">
        </div>
      </div>

      <div class="cert-list" id="certList">
        <div class="cert-section">
          <h3 class="cert-title">${escapeHtml(t.sections.earned)}</h3>
          <div class="cert-grid">${earnedHtml}</div>

          <h3 class="cert-title">${escapeHtml(t.sections.progress)}</h3>
          <div class="cert-grid">${progressHtml}</div>

          <h3 class="cert-title">${escapeHtml(t.sections.upcoming)}</h3>
          <div class="cert-grid">${upcomingHtml}</div>
        </div>
      </div>
    `;
  },

  about: () => {
    const t = tPanel("about");

    return `
      <h2>${escapeHtml(t.title)}</h2>

      <div class="about-layout">
        <div class="about-image">
          <img src="assets/images/about-me.jpg" alt="">
        </div>

        <div class="about-text">
          ${(t.paragraphs || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
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
      <h3>${escapeHtml(title)}</h3>
      <div class="skill-chips">
        ${(items || []).map((i) => `<span class="chip">${escapeHtml(i)}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderProjectCard(project, t) {
  const hasUrl = !!project.url;

  // Repo automatisch aus i18n resolver
  const repoUrl = project.repoId ? tRepo(project.repoId) : null;
  const hasRepo = !!repoUrl;

  const primaryLabel = project.type === "game" ? t.playLabel : t.viewLabel;

  return `
    <div class="project-card" data-project="${escapeAttr(project.id || "")}">
      ${project.preview ? `
        <div class="project-preview">
          <img src="${escapeAttr(project.preview)}" alt="">
        </div>
      ` : ""}

      <div class="project-body">
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.desc)}</p>

        ${project.built ? `
          <p class="project-meta">
            <span class="meta-label">${escapeHtml(t.builtLabel)}</span>
            ${escapeHtml(project.built)}
          </p>
        ` : ""}

        ${project.learned ? `
          <p class="project-meta">
            <span class="meta-label">${escapeHtml(t.learnedLabel)}</span>
            ${escapeHtml(project.learned)}
          </p>
        ` : ""}

        <div class="tags">
          ${(project.tech || []).map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`).join("")}
        </div>

        <div class="project-actions">
          ${hasUrl ? `
            <button class="btn small project-view-btn" data-url="${escapeAttr(project.url)}">
              ${escapeHtml(primaryLabel)}
            </button>
          ` : ""}

          ${hasRepo ? `
            <a class="btn small outline" href="${escapeAttr(repoUrl)}" target="_blank" rel="noopener">
              ${escapeHtml(t.repoLabel)}
            </a>
          ` : ""}
        </div>
      </div>
    </div>
  `;
}

// Wandelt "\n\n" zu <br><br> um
function toParagraphHtml(text) {
  if (!text) return "";
  return escapeHtml(text).replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");
}

// Escape für HTML-Textnodes
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Escape für Attribute (href, src, data-*)
function escapeAttr(str) {
  return escapeHtml(str).replaceAll("`", "&#096;");
}

/* =========================================
   Panel lifecycle & bindings
========================================= */

function afterRender(panelId) {
  if (panelId === "projects") bindProjectView();
  if (panelId === "certificates") initCertificatesInteractions();
  if (panelId === "about") protectAboutImage();
}

function protectAboutImage() {
  const img = overlayBody?.querySelector(".about-image img");
  if (!img) return;

  img.setAttribute("draggable", "false");
  img.addEventListener("dragstart", (e) => e.preventDefault());
  img.addEventListener("contextmenu", (e) => e.preventDefault());
}

function bindProjectView() {
  const viewer = overlayBody.querySelector(".project-viewer");
  const frame = viewer?.querySelector(".project-frame");
  const backBtn = viewer?.querySelector(".project-viewer-back");
  const openBtn = viewer?.querySelector(".project-open-btn");
  const grid = overlayBody.querySelector(".project-grid");

  if (!viewer || !frame || !grid) return;

  overlayBody.querySelectorAll(".project-view-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      frame.src = btn.dataset.url;
      viewer.hidden = false;
      grid.style.display = "none";
    });
  });

  backBtn?.addEventListener("click", () => {
    frame.src = "";
    viewer.hidden = true;
    grid.style.display = "";
  });

  openBtn?.addEventListener("click", () => {
    const url = frame?.src;
    if (url) window.open(url, "_blank", "noopener");
  });
}

/* ===== Certificates interactions (no leaks) ===== */

let certKeydownHandler = null;
let certClickHandler = null;

function initCertificatesInteractions() {
  const t = tPanel("certificates");
  const earned = t.items.earned || [];
  let currentIndex = -1;

  const viewer = overlayBody.querySelector("#certViewer");
  const list = overlayBody.querySelector("#certList");

  const media = overlayBody.querySelector("#certViewerMedia");
  const img = overlayBody.querySelector("#certViewerImg");
  const title = overlayBody.querySelector("#certViewerTitle");
  const sub = overlayBody.querySelector("#certViewerSub");
  const verify = overlayBody.querySelector("#certViewerVerify");

  const lightbox = overlayBody.querySelector("#certLightbox");
  const lightboxImg = overlayBody.querySelector("#certLightboxImg");

  if (!viewer || !list || !media || !img || !title || !sub || !verify || !lightbox || !lightboxImg) return;

  // Remove previous handlers (important for refresh/re-render)
  if (certClickHandler) overlayBody.removeEventListener("click", certClickHandler);
  if (certKeydownHandler) document.removeEventListener("keydown", certKeydownHandler);

  function setLoading(isLoading) {
    media.classList.toggle("is-loading", isLoading);
  }

  function showViewerAt(index) {
    if (index < 0 || index >= earned.length) return;
    currentIndex = index;

    const cert = earned[currentIndex];

    setLoading(true);

    title.textContent = cert.title;
    sub.textContent = `${cert.issuer} • ${cert.year}`;

    verify.href = cert.verifyUrl || "#";
    verify.style.display = cert.verifyUrl && cert.verifyUrl !== "#" ? "inline-flex" : "none";

    img.onload = () => setLoading(false);
    img.onerror = () => setLoading(false);
    img.src = cert.img;
    img.alt = cert.title;

    viewer.classList.add("open");
    viewer.setAttribute("aria-hidden", "false");
    list.classList.add("hidden");
  }

  function openViewerById(certId) {
    const idx = earned.findIndex((c) => c.id === certId);
    if (idx === -1) return;
    showViewerAt(idx);
  }

  function closeViewer() {
    viewer.classList.remove("open");
    viewer.setAttribute("aria-hidden", "true");
    list.classList.remove("hidden");
    currentIndex = -1;
  }

  function openLightbox() {
    if (currentIndex < 0) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
  }

  function next() {
    if (earned.length === 0) return;
    showViewerAt((currentIndex + 1) % earned.length);
  }

  function prev() {
    if (earned.length === 0) return;
    showViewerAt((currentIndex - 1 + earned.length) % earned.length);
  }

  // prevent drag + context menu (best-effort)
  [img, lightboxImg].forEach((el) => {
    el.setAttribute("draggable", "false");
    el.addEventListener("dragstart", (e) => e.preventDefault());
    el.addEventListener("contextmenu", (e) => e.preventDefault());
  });

  overlayBody.querySelectorAll(".cert-badge img").forEach((thumb) => {
    thumb.setAttribute("draggable", "false");
    thumb.addEventListener("dragstart", (e) => e.preventDefault());
    thumb.addEventListener("contextmenu", (e) => e.preventDefault());
  });

  certClickHandler = (e) => {
    const actionEl = e.target.closest("[data-action]");
    if (actionEl) {
      const action = actionEl.dataset.action;

      if (action === "cert-view") {
        e.preventDefault();
        openViewerById(actionEl.dataset.certId);
        return;
      }
      if (action === "cert-back") {
        e.preventDefault();
        closeViewer();
        return;
      }
      if (action === "cert-next") {
        e.preventDefault();
        next();
        return;
      }
      if (action === "cert-prev") {
        e.preventDefault();
        prev();
        return;
      }
    }

    if (e.target === img) {
      openLightbox();
      return;
    }

    if (e.target.closest("#certLightbox")) {
      closeLightbox();
    }
  };

  certKeydownHandler = (e) => {
    const overlayOpen = overlay?.classList.contains("open");
    if (!overlayOpen) return;

    if (e.key === "Escape") {
      if (lightbox.classList.contains("open")) {
        closeLightbox();
        return;
      }
      if (viewer.classList.contains("open")) {
        closeViewer();
        return;
      }
      return;
    }

    if (viewer.classList.contains("open")) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
  };

  overlayBody.addEventListener("click", certClickHandler);
  document.addEventListener("keydown", certKeydownHandler);
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

  closeBtn?.addEventListener("click", closePanel);

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
  overlay.classList.add("open");
  afterRender(id);
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

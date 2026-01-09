import { map } from "../util/math.js";
import { tOrbitLabel } from "../i18n/bilingual.js";

// Konstante Orbit-Parameter
const orbitRadius = 260;
const orbitSpeedBase = 0.0009;

// Orbit Items
const data = [
  { id: "contact",      img: "assets/images/contact.png" },
  { id: "experience",   img: "assets/images/experience.png" },
  { id: "skills",       img: "assets/images/skills.png" },
  { id: "projects",     img: "assets/images/projects.png" },
  { id: "certificates", img: "assets/images/certificates.png" },
  { id: "about",        img: "assets/images/about.png" }
];


let orbitItems = [];
let orbitRotation = 0;
let onSelect = null;

/**
 * Initialisiert das Orbit UI und erzeugt die klickbaren Orbit-Items.
 * 
 * @param {HTMLElement} orbitContainer - DOM-Element, in das die Orbit-Items eingefügt werden
 * @param {(id: string) => void} onItemSelect - Callback, der beim Klick auf ein Icon aufgerufen wird.
 */

export function initOrbit(orbitContainer, onItemSelect) {
  if (!orbitContainer) {
    console.warn("initOrbit: orbitContainer ist null/undefined");
    return;
  }

  orbitItems = [];
  orbitRotation = 0;
  onSelect = onItemSelect || null;

  data.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "orbit-item";
el.innerHTML = `
  <div class="orbit-item-inner">
    <div class="orbit-wobble">
      <div class="icon">
        <img src="${item.img}" alt="">
      </div>
      <div class="label">${tOrbitLabel(item.id)}</div>
    </div>
  </div>
`;



    el.addEventListener("click", () => {
      if (onSelect) onSelect(item.id);
    });

    orbitContainer.appendChild(el);

    orbitItems.push({
      el,
      id: item.id, // 👈 wichtig für spätere Updates
      angle: (i / data.length) * Math.PI * 2
    });
  });
}


/**
 * Aktualisiert Position, Skalierung und Layer-Reihenfolge der Orbit-Icons
 * basierend auf dem aktuellen Geschwindigkeitsfaktor der Szene.
 * 
 * @param {number} speedFactor - 1 = normal speed, >1 = boosted speed
 */
export function updateOrbit(speedFactor) {

  if (orbitItems.length === 0) return;

  orbitRotation += orbitSpeedBase * speedFactor;

  orbitItems.forEach(o => {
    const a = o.angle + orbitRotation;
    const x = Math.sin(a) * orbitRadius;
    const y = Math.cos(a) * orbitRadius * 0.35;

    const scale = map(y, -orbitRadius, orbitRadius, 0.6, 1.35);

    o.el.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    o.el.style.zIndex = Math.floor(scale * 1000);

    if (scale > 1.15) {
      o.el.classList.add("active");
    } else {
      o.el.classList.remove("active");
    }
  });
}

/**
 * Aktualisiert die Orbit Labels für die Sprachoptionen
 */
export function refreshOrbitLabels() {
  orbitItems.forEach((o) => {
    const labelEl = o.el.querySelector(".label");
    if (labelEl) {
      labelEl.textContent = tOrbitLabel(o.id);
    }
  });
}

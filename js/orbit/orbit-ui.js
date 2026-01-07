import { map } from "../util/math.js";

// Konstante Orbit-Parameter
const orbitRadius = 260;
const orbitSpeedBase = 0.0005;

// Orbit Items
const data = [
  { id: "contact",      label: "Contact",      img: "assets/images/contact.png" },
  { id: "experience",   label: "Developer Journey",   img: "assets/images/experience.png" },
  { id: "skills",       label: "Skills",       img: "assets/images/skills.png" },
  { id: "projects",     label: "Projects",     img: "assets/images/projects.png" },
  { id: "certificates", label: "Certificates", img: "assets/images/certificates.png" },
  { id: "about",        label: "About Me",     img: "assets/images/about.png" }
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
      <div class="icon">
        <img src="${item.img}" alt="${item.label}">
      </div>
      <div class="label">${item.label}</div>
    `;

    el.addEventListener("click", () => {
      if (onItemSelect) onItemSelect(item.id);
    });

    orbitContainer.appendChild(el);

    orbitItems.push({
      el,
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

import { initBoostControls } from "./input/controls.js";
import { initOrbit, updateOrbit, refreshOrbitLabels } from "./orbit/orbit-ui.js";
import { initStars, drawStars } from "./background/stars.js";
import { initNebula, drawNebula } from "./background/nebula.js";
import { initMeteors, drawMeteors } from "./background/meteors.js";
import { initBoostCore, drawBoostCore } from "./boost/boost-core.js";
import { initPanels, openPanel, refreshCurrentPanel } from "./ui/panels.js";
import { setLang } from "./i18n/bilingual.js";
import { tUI } from "./i18n/bilingual.js";

/**
 * PANELS
 */
initPanels();   // Overlay & Panel-System initialising

const overlay = document.getElementById("overlay");
const overlayInner = document.querySelector(".overlay-inner");

function isPanelMotionAllowed() {
  return false;
}

if (overlay && overlayInner) {
  overlay.addEventListener("mousemove", (e) => {
    if (!overlay.classList.contains("open")) return;
    if (!isPanelMotionAllowed()) return;

    const rect = overlayInner.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 10;
    const rotateX = (0.5 - y) * 10;

    overlayInner.style.setProperty("--tiltX", `${rotateX}deg`);
    overlayInner.style.setProperty("--tiltY", `${rotateY}deg`);
  });

  overlay.addEventListener("mouseleave", () => {
    overlayInner.style.setProperty("--tiltX", `0deg`);
    overlayInner.style.setProperty("--tiltY", `0deg`);
  });
}


/**
 * Language Switching
 */
function initLanguageSwitch() {
  const buttons = document.querySelectorAll(".lang-switch button");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLang(lang);

      // Button-UI update
      buttons.forEach((b) => {
        b.classList.toggle("active", b === btn);
      });

      // Panels new render
      refreshCurrentPanel();

      updateBoostHint();

      // set Orbit-Labels new
      refreshOrbitLabels();
    });
  });
}


// Language Switch activate NOW
initLanguageSwitch();

/* ORBIT */
const orbit = document.getElementById("orbit");
initOrbit(orbit, (pageId) => {
  openPanel(pageId);
});

/* CANVAS SETUP */
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w * DPR;
  canvas.height = h * DPR;
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}

window.addEventListener("resize", resize);
resize();

/* GLOBAL SPEED CONTROL */
let speedFactor = 1;
let targetSpeed = 1;

/* BACKGROUND MODULES INITIALISING */
initStars(w, h);
initNebula(w, h);
initMeteors(() => ({ w, h }));

/* BOOST CORE */
const boostCanvas = document.getElementById("boostCore");
initBoostCore(boostCanvas);

/* CONTROLS */
const starBtn = document.getElementById("starBtn");
const boostHint = document.getElementById("boostHint");

function updateBoostHint() {
  if (boostHint) {
    boostHint.textContent = tUI("boostHint");
  }
}

updateBoostHint();


function setTargetSpeedFn(v) {
  targetSpeed = v;
}

initBoostControls(starBtn, boostHint, setTargetSpeedFn);

/* MAIN LOOP */
function animate() {
  ctx.clearRect(0, 0, w, h);

  const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
  bgGrad.addColorStop(0, "rgb(2, 8, 23)");
  bgGrad.addColorStop(1, "rgb(3, 15, 35)");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  speedFactor += (targetSpeed - speedFactor) * 0.05;

  drawNebula(ctx);
  drawStars(ctx, speedFactor, w);
  drawMeteors(ctx, speedFactor);
  updateOrbit(speedFactor);
  drawBoostCore(speedFactor);

  requestAnimationFrame(animate);
}
animate();

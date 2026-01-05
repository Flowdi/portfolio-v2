let boostCanvas;
let bctx;
let bw, bh;

const coreParticles = [];
const coreParticleCount = 220;
let corePulse = 0;

// Canvas an Größe anpassen
function resizeBoost() {
  if (!boostCanvas) return;
  const size = 180;
  bw = boostCanvas.width = size * window.devicePixelRatio;
  bh = boostCanvas.height = size * window.devicePixelRatio;
  boostCanvas.style.width = size + "px";
  boostCanvas.style.height = size + "px";
}

// 3D-Rotation
function rotate3D(p, angleX, angleY, angleZ) {
  let x = p.x, y = p.y, z = p.z;

  let y1 = y * Math.cos(angleX) - z * Math.sin(angleX);
  let z1 = y * Math.sin(angleX) + z * Math.cos(angleX);
  y = y1; z = z1;

  let x1 = x * Math.cos(angleY) + z * Math.sin(angleY);
  let z2 = -x * Math.sin(angleY) + z * Math.cos(angleY);
  x = x1; z = z2;

  let x2 = x * Math.cos(angleZ) - y * Math.sin(angleZ);
  let y2 = x * Math.sin(angleZ) + y * Math.cos(angleZ);
  x = x2; y = y2;

  return { x, y, z };
}

export function initBoostCore(canvasElement) {
  boostCanvas = canvasElement;
  if (!boostCanvas) {
    console.warn("initBoostCore: canvasElement fehlt");
    return;
  }

  bctx = boostCanvas.getContext("2d");
  resizeBoost();
  window.addEventListener("resize", resizeBoost);

  // Partikel erzeugen
  coreParticles.length = 0;
  for (let i = 0; i < coreParticleCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = Math.pow(Math.random(), 1.8) * 45;

    coreParticles.push({
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta),
      z: r * Math.cos(phi),
      size: 1 + Math.random() * 1.5,
      twinkleSpeed: 0.5 + Math.random() * 1.0,
      angleOffset: Math.random() * Math.PI * 2
    });
  }
}

export function drawBoostCore(speedFactor) {
  if (!bctx) return;

  bctx.clearRect(0, 0, bw, bh);

  const cx = bw / 2;
  const cy = bh / 2;

  corePulse += 0.003 + speedFactor * 0.006;

  const angleX = corePulse * 0.08;
  const angleY = corePulse * 0.06;
  const angleZ = corePulse * 0.04;

  bctx.save();
  bctx.globalCompositeOperation = "lighter";

  const sphereRadius = 70;

  // Halo
  const haloGrad = bctx.createRadialGradient(
    cx, cy, sphereRadius * 0.7,
    cx, cy, sphereRadius * 1.3
  );
  haloGrad.addColorStop(0, "rgba(0, 200, 255, 0.35)");
  haloGrad.addColorStop(0.5, "rgba(0, 150, 255, 0.18)");
  haloGrad.addColorStop(1, "rgba(0, 80, 200, 0)");
  bctx.fillStyle = haloGrad;
  bctx.beginPath();
  bctx.arc(cx, cy, sphereRadius * 1.3, 0, Math.PI * 2);
  bctx.fill();

  // Inner Glow
  const innerGrad = bctx.createRadialGradient(
    cx, cy, 0,
    cx, cy, sphereRadius * 0.9
  );
  innerGrad.addColorStop(0, "rgba(255,255,255,0.95)");
  innerGrad.addColorStop(0, "rgba(255,255,255,0.95)");
  innerGrad.addColorStop(0.25, "rgba(180,220,255,0.8)");
  innerGrad.addColorStop(0.6, "rgba(40,140,255,0.5)");
  innerGrad.addColorStop(1, "rgba(0,40,120,0.0)");
  bctx.fillStyle = innerGrad;
  bctx.beginPath();
  bctx.arc(cx, cy, sphereRadius * 0.9, 0, Math.PI * 2);
  bctx.fill();

  // Partikel
  for (const p of coreParticles) {
    const pos = rotate3D(p, angleX, angleY, angleZ);

    const perspective = 220 / (220 + pos.z);
    const x2d = cx + pos.x * perspective;
    const y2d = cy + pos.y * perspective;

    const baseSize = p.size * 0.7;
    const size =
      baseSize *
      (0.85 + 0.25 * Math.sin(corePulse * p.twinkleSpeed + p.angleOffset));

    const twinkle =
      0.55 + 0.45 * Math.sin(corePulse * p.twinkleSpeed * 2 + p.angleOffset);
    const alpha = 0.3 + 0.5 * twinkle;

    const grad = bctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 2.2);
    grad.addColorStop(0, `rgba(255,255,255,${alpha})`);
    grad.addColorStop(0.4, `rgba(210,230,255,${alpha * 0.6})`);
    grad.addColorStop(1, "rgba(210,230,255,0)");

    bctx.fillStyle = grad;
    bctx.beginPath();
    bctx.arc(x2d, y2d, size, 0, Math.PI * 2);
    bctx.fill();
  }

  bctx.restore();
}

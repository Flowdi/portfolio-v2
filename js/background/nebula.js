// js/background/nebula.js

const nebulaColors = [220, 250, 280];
let nebulae = [];
let canvasWidth = 0;
let canvasHeight = 0;

export function initNebula(w, h) {
  canvasWidth = w;
  canvasHeight = h;

  nebulae = Array.from({ length: 5 }, (_, i) => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 400 + 260,
    // viel langsamere Bewegung
    dx: (Math.random() - 0.5) * 0.005,
    dy: (Math.random() - 0.5) * 0.005,
    hue: nebulaColors[i % nebulaColors.length]
  }));
}

// speedFactor lassen wir als Parameter zu, falls du später doch damit spielen willst,
// aber wir benutzen ihn hier nicht mehr.
export function drawNebula(ctx, speedFactor) {
  ctx.save();
  ctx.globalCompositeOperation = "lighter";

  // konstanter Blur, unabhängig von speedFactor
  ctx.filter = "blur(80px)";

  nebulae.forEach(n => {
    // gaaaanz langsam bewegen, ohne Boost-Einfluss
    n.x += n.dx;
    n.y += n.dy;

    // Wrap, damit der Nebel nie „verschwindet“
    const w = canvasWidth;
    const h = canvasHeight;

    if (n.x < -n.r) n.x = w + n.r;
    if (n.x > w + n.r) n.x = -n.r;
    if (n.y < -n.r) n.y = h + n.r;
    if (n.y > h + n.r) n.y = -n.r;

    // stärkeres Alpha, damit der Nebel dauerhaft sichtbar bleibt
    ctx.fillStyle = `hsla(${n.hue},70%,55%,0.08)`;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}


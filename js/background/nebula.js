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
    dx: (Math.random() - 0.5) * 0.005,
    dy: (Math.random() - 0.5) * 0.005,
    hue: nebulaColors[i % nebulaColors.length]
  }));
}

export function drawNebula(ctx, speedFactor) {
  ctx.save();
  ctx.globalCompositeOperation = "lighter";

  ctx.filter = "blur(80px)";

  nebulae.forEach(n => {
    n.x += n.dx;
    n.y += n.dy;

    const w = canvasWidth;
    const h = canvasHeight;

    if (n.x < -n.r) n.x = w + n.r;
    if (n.x > w + n.r) n.x = -n.r;
    if (n.y < -n.r) n.y = h + n.r;
    if (n.y > h + n.r) n.y = -n.r;

    ctx.fillStyle = `hsla(${n.hue},70%,55%,0.08)`;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}


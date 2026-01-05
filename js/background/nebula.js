// js/background/nebula.js

const nebulaColors = [220, 250, 280];
let nebulae = [];
let canvasWidth = 0;
let canvasHeight = 0;

/**
 * 
 * @param {number} width - aktuelle Canvasbreite
 * @param {number} height - aktuelle Canvashöhe
 */

export function initNebula(width, height) {
  canvasWidth = width;
  canvasHeight = height;

  nebulae = Array.from({ length: 5 }, (_, i) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 400 + 260,
    dx: (Math.random() - 0.5) * 0.005,
    dy: (Math.random() - 0.5) * 0.005,
    hue: nebulaColors[i % nebulaColors.length]
  }));
}

/**
 * Rendert den Nebel im Hintergrund damit dieser nicht einfach nur schwarz ist
 * @param {CanvasRenderingContext2D} ctx - 2D Rendering Context des Canvas
 * @param {number} speedFactor - Geschwindigkeit der Nebelbewegung
 */

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


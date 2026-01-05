let stars = [];

/**
 * 
 * @param {number} width - initialisiert die Sterne im Hintergrund
 * @param {number} height - initialisiert die Sterne im Hintergrund
 */
export function initStars(width, height) {
  stars = Array.from({ length: 320 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.4,
    s: Math.random() * 0.4 + 0.2
  }));
}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx - 2D Rendering Context des Canvas
 * @param {number} speedFactor - Faktor, wie schnell Sterne fliegen (1 = normal)
 * @param {number} width - aktuelle Canvasbreite zum Reset bei Randüberschreitung
 * @param {number} height - aktuelle Canvashöhe
 */
export function drawStars(ctx, speedFactor, width, height) {
  ctx.save();
  ctx.fillStyle = "white";

  stars.forEach(s => {
    s.x -= s.s * speedFactor * 1.5;
    if (s.x < 0) s.x = width;

    ctx.globalAlpha = Math.min(1, speedFactor * 0.4);
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}

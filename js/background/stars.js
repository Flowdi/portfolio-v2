let stars = [];

/**
 * 
 * @param {number} width - initialises the stars in the background
 * @param {number} height - initialises the stars in the background
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
 * @param {CanvasRenderingContext2D} ctx - 2D rendering context of the canvas
 * @param {number} speedFactor - factor, how fast the stars move(1 = normal)
 * @param {number} width - current canvas width
 * @param {number} height - current canvas height
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

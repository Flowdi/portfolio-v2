let stars = [];

export function initStars(w, h) {
  stars = Array.from({ length: 320 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.4,
    s: Math.random() * 0.4 + 0.2
  }));
}

export function drawStars(ctx, speedFactor, w) {
  ctx.save();
  ctx.fillStyle = "white";

  stars.forEach(s => {
    s.x -= s.s * speedFactor * 1.5;
    if (s.x < 0) s.x = w;

    ctx.globalAlpha = Math.min(1, speedFactor * 0.4);
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}

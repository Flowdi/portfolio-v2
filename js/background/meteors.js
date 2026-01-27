let meteors = [];
let getSize = () => ({ width: 0, height: 0 });

/**
 * Renders the size of the meteors
 * @param {number} sizeProvider 
 */

export function initMeteors(sizeProvider) {
  getSize = sizeProvider;

  setInterval(() => {
    const { width, height } = getSize();
    meteors.push({
      x: Math.random() * width,
      y: Math.random() * height * 0.4,
      vx: Math.random() * 8 + 8,
      vy: Math.random() * 3 + 3,
      life: 0
    });
  }, 5000);
}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx - renders the meteors that appear in the background
 * @param {number} speedFactor - renders the speed of the meteors
 */
export function drawMeteors(ctx, speedFactor) {
  ctx.save();
  ctx.globalCompositeOperation = "lighter";

  for (let i = meteors.length - 1; i >= 0; i--) {
    const m = meteors[i];

    ctx.strokeStyle = "rgba(255,255,255,0.8)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(
      m.x - m.vx * speedFactor * 3,
      m.y - m.vy * speedFactor * 3
    );
    ctx.stroke();

    m.x += m.vx * speedFactor;
    m.y += m.vy * speedFactor;
    m.life++;

    if (m.life > 60) {
      meteors.splice(i, 1);
    }
  }

  ctx.restore();
}


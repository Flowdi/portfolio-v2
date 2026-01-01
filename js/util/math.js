export function map(v, a1, a2, b1, b2) {
  return b1 + (b2 - b1) * (v - a1) / (a2 - a1);
}

// Polarización, interferencia y difracción (intensidades relativas).

// Ley de Malus en cadena: la luz no polarizada pierde la mitad en el primer polarizador.
export function malus(I0, angulos, { polarizada = false, angulo0 = 0 } = {}) {
  let I = I0, eje = angulo0;
  angulos.forEach((a, i) => {
    I = i === 0 && !polarizada ? I / 2 : I * Math.cos(a - eje) ** 2;
    eje = a;
  });
  return I;
}

// N rendijas de ancho a separadas d, luz λ, ángulo θ. Con N = 1 es la rendija simple.
export function intensidadRendijas(theta, { N = 2, d, a = 0, lambda }) {
  const s = Math.sin(theta);
  const beta = (Math.PI * a * s) / lambda;
  const difr = a ? (Math.abs(beta) < 1e-9 ? 1 : (Math.sin(beta) / beta) ** 2) : 1;
  if (N === 1) return difr;
  const fi = (Math.PI * d * s) / lambda;
  const den = Math.sin(fi);
  const inter = Math.abs(den) < 1e-9 ? 1 : (Math.sin(N * fi) / (N * den)) ** 2;
  return inter * difr;
}

// Posiciones en la pantalla (aproximación de ángulos chicos)
export const yMaximo = (m, lambda, L, d) => (m * lambda * L) / d;
export const yMinimoDoble = (m, lambda, L, d) => ((m + 0.5) * lambda * L) / d;
export const yMinimoSimple = (m, lambda, L, a) => (m * lambda * L) / a;
// Bragg: 2d sen θ = mλ
export const bragg = (d, theta, m = 1) => (2 * d * Math.sin(theta)) / m;

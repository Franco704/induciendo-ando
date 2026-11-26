// Circuitos: transitorios RC, RL, LC y RLC; corriente alterna con impedancias; red resistiva por nodos.

export const serie = (...r) => r.reduce((a, b) => a + b, 0);
export const paralelo = (...r) => 1 / r.reduce((a, b) => a + 1 / b, 0);
// Capacitores: al revés que las resistencias
export const capSerie = (...c) => paralelo(...c);
export const capParalelo = (...c) => serie(...c);

// Carga de un RC con fuente ε desde capacitor descargado
export const rcCarga = (eps, R, C, t) => {
  const tau = R * C, e = Math.exp(-t / tau);
  return { q: C * eps * (1 - e), i: (eps / R) * e, vC: eps * (1 - e), vR: eps * e, tau };
};
// Descarga desde q0
export const rcDescarga = (q0, R, C, t) => {
  const tau = R * C, e = Math.exp(-t / tau);
  return { q: q0 * e, i: -(q0 / tau) * e, vC: (q0 / C) * e, tau };
};

// Establecimiento y caída de corriente en un RL
export const rlSubida = (eps, R, L, t) => {
  const tau = L / R, e = Math.exp(-t / tau);
  return { i: (eps / R) * (1 - e), vL: eps * e, vR: eps * (1 - e), tau };
};
export const rlBajada = (i0, R, L, t) => ({ i: i0 * Math.exp((-R * t) / L), tau: L / R });

// LC ideal y RLC subamortiguado a partir de Q0 en el capacitor
export function rlcLibre(Q0, R, L, C, t) {
  const w0 = 1 / Math.sqrt(L * C);
  const a = R / (2 * L);
  const wd = Math.sqrt(Math.max(w0 * w0 - a * a, 0));
  if (wd === 0) return { q: Q0 * (1 + a * t) * Math.exp(-a * t), w0, wd, a, i: -Q0 * a * a * t * Math.exp(-a * t) };
  const q = Q0 * Math.exp(-a * t) * Math.cos(wd * t);
  const i = -Q0 * Math.exp(-a * t) * (a * Math.cos(wd * t) + wd * Math.sin(wd * t));
  return { q, i, w0, wd, a, uC: (q * q) / (2 * C), uL: (L * i * i) / 2 };
}
export const rCritica = (L, C) => 2 * Math.sqrt(L / C);

// Corriente alterna, RLC serie con fuente de amplitud V y frecuencia angular w
export function rlcSerie({ R = 0, L = 0, C = Infinity, V, w }) {
  const XL = w * L;
  const XC = Number.isFinite(C) ? 1 / (w * C) : 0;
  const X = XL - XC;
  const Z = Math.hypot(R, X);
  const I = V / Z;
  const fi = Math.atan2(X, R); // > 0: la tensión adelanta a la corriente (inductivo)
  return { XL, XC, X, Z, I, fi, VR: I * R, VL: I * XL, VC: I * XC, fp: R / Z, w0: Number.isFinite(C) && L ? 1 / Math.sqrt(L * C) : NaN };
}
// Potencia media con valores eficaces
export const potenciaMedia = (Vef, Ief, fi) => Vef * Ief * Math.cos(fi);

// Red resistiva por análisis nodal. ramas: [{ a, b, R, fem }] donde fem empuja de a hacia b.
// El nodo 0 es tierra. Devuelve potenciales de nodo y corriente por rama (de a hacia b).
export function resolverRed(nNodos, ramas) {
  const n = nNodos - 1;
  const A = Array.from({ length: n }, () => new Array(n).fill(0));
  const b = new Array(n).fill(0);
  for (const { a, b: c, R, fem = 0 } of ramas) {
    const g = 1 / R;
    // Corriente de a hacia c: (Va − Vc + fem)·g
    if (a) { A[a - 1][a - 1] += g; b[a - 1] -= fem * g; }
    if (c) { A[c - 1][c - 1] += g; b[c - 1] += fem * g; }
    if (a && c) { A[a - 1][c - 1] -= g; A[c - 1][a - 1] -= g; }
  }
  const V = [0, ...gaussSolve(A, b)];
  const I = ramas.map(({ a, b: c, R, fem = 0 }) => (V[a] - V[c] + fem) / R);
  return { V, I };
}

function gaussSolve(A, b) {
  const n = b.length, M = A.map((fila, i) => [...fila, b[i]]);
  for (let i = 0; i < n; i++) {
    let p = i;
    for (let k = i + 1; k < n; k++) if (Math.abs(M[k][i]) > Math.abs(M[p][i])) p = k;
    [M[i], M[p]] = [M[p], M[i]];
    for (let k = i + 1; k < n; k++) {
      const f = M[k][i] / M[i][i];
      for (let j = i; j <= n; j++) M[k][j] -= f * M[i][j];
    }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = M[i][n];
    for (let j = i + 1; j < n; j++) s -= M[i][j] * x[j];
    x[i] = s / M[i][i];
  }
  return x;
}

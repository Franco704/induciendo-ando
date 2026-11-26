import { K, EPS0 } from './constantes.js';

// Cargas puntuales en el plano: { q, x, y } (q en C, posiciones en m).

export function campo(cargas, x, y) {
  let ex = 0, ey = 0;
  for (const c of cargas) {
    const dx = x - c.x, dy = y - c.y, r2 = dx * dx + dy * dy;
    if (r2 < 1e-12) return [NaN, NaN];
    const k = (K * c.q) / (r2 * Math.sqrt(r2));
    ex += k * dx;
    ey += k * dy;
  }
  return [ex, ey];
}

export function potencial(cargas, x, y) {
  let v = 0;
  for (const c of cargas) v += (K * c.q) / Math.hypot(x - c.x, y - c.y);
  return v;
}

// Fuerza neta sobre la carga i (Coulomb y superposición).
export function fuerzaSobre(cargas, i) {
  const otras = cargas.filter((_, k) => k !== i);
  const [ex, ey] = campo(otras, cargas[i].x, cargas[i].y);
  return [cargas[i].q * ex, cargas[i].q * ey];
}

// Energía potencial del sistema: suma sobre pares.
export function energiaSistema(cargas) {
  let u = 0;
  for (let i = 0; i < cargas.length; i++)
    for (let j = i + 1; j < cargas.length; j++)
      u += (K * cargas[i].q * cargas[j].q) / Math.hypot(cargas[i].x - cargas[j].x, cargas[i].y - cargas[j].y);
  return u;
}

// Líneas de campo: nacen en las cargas positivas (o llegan a las negativas si no hay positivas),
// en cantidad proporcional a |q| y se integran con RK4 siguiendo la dirección de E.
export function lineasDeCampo(cargas, { porUnidad = 8, paso = 0.02, maxPasos = 900, limite = 10 } = {}) {
  const qMax = Math.max(...cargas.map((c) => Math.abs(c.q)), 1e-30);
  const hayPositivas = cargas.some((c) => c.q > 0);
  const lineas = [];
  for (const c of cargas) {
    if ((hayPositivas && c.q <= 0) || (!hayPositivas && c.q >= 0)) continue;
    const signo = c.q > 0 ? 1 : -1;
    const n = Math.max(4, Math.round((porUnidad * Math.abs(c.q)) / qMax) * 2);
    const r0 = paso * 2.5;
    for (let k = 0; k < n; k++) {
      const a = (2 * Math.PI * (k + 0.5)) / n;
      lineas.push(integrarLinea(cargas, [c.x + r0 * Math.cos(a), c.y + r0 * Math.sin(a)], signo, paso, maxPasos, limite));
    }
  }
  return lineas;
}

function dir(cargas, x, y, signo) {
  const [ex, ey] = campo(cargas, x, y);
  const n = Math.hypot(ex, ey);
  return n ? [(signo * ex) / n, (signo * ey) / n] : [0, 0];
}

function integrarLinea(cargas, p, signo, h, maxPasos, limite) {
  const pts = [p];
  let [x, y] = p;
  for (let i = 0; i < maxPasos; i++) {
    const k1 = dir(cargas, x, y, signo);
    const k2 = dir(cargas, x + (h / 2) * k1[0], y + (h / 2) * k1[1], signo);
    const k3 = dir(cargas, x + (h / 2) * k2[0], y + (h / 2) * k2[1], signo);
    const k4 = dir(cargas, x + h * k3[0], y + h * k3[1], signo);
    x += (h / 6) * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]);
    y += (h / 6) * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]);
    if (!Number.isFinite(x) || Math.abs(x) > limite || Math.abs(y) > limite) break;
    pts.push([x, y]);
    // La línea termina al llegar a otra carga
    if (cargas.some((c) => Math.hypot(x - c.x, y - c.y) < h * 1.5)) break;
  }
  return pts;
}

// Campo de distribuciones con simetría (ley de Gauss). r en m.
export const gauss = {
  // Esfera aislante de radio a con carga Q uniforme en volumen
  esferaMaciza: (Q, a, r) => (r < a ? (K * Q * r) / a ** 3 : (K * Q) / r ** 2),
  // Esfera conductora o cascarón: toda la carga en la superficie
  cascaron: (Q, a, r) => (r < a ? 0 : (K * Q) / r ** 2),
  // Línea o cilindro conductor de radio a con λ por unidad de longitud
  linea: (lambda, r, a = 0) => (r < a ? 0 : lambda / (2 * Math.PI * EPS0 * r)),
  // Plano infinito con densidad σ
  plano: (sigma) => sigma / (2 * EPS0),
};

// Flujo de un campo uniforme a través de una superficie plana de área A cuyo normal forma θ con E.
export const flujoUniforme = (E, A, theta) => E * A * Math.cos(theta);

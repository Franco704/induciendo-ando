import { MU0 } from './constantes.js';

// Campo de un hilo recto infinito a distancia r
export const campoHilo = (I, r) => (MU0 * I) / (2 * Math.PI * r);
// Centro de una espira circular y de un arco de ángulo θ
export const campoEspira = (I, R, N = 1) => (MU0 * N * I) / (2 * R);
export const campoArco = (I, R, theta) => (MU0 * I * theta) / (4 * Math.PI * R);
export const campoSolenoide = (n, I, Km = 1) => Km * MU0 * n * I;
export const campoToroide = (N, I, r, Km = 1) => (Km * MU0 * N * I) / (2 * Math.PI * r);
// Fuerza por unidad de longitud entre conductores paralelos (atracción si las corrientes van en el mismo sentido)
export const fuerzaParalelos = (I1, I2, d) => (MU0 * I1 * I2) / (2 * Math.PI * d);

// Movimiento de una carga en B uniforme
export const radioCiclotron = (m, v, q, B) => (m * v) / (Math.abs(q) * B);
export const periodoCiclotron = (m, q, B) => (2 * Math.PI * m) / (Math.abs(q) * B);

// Campo en el plano de hilos perpendiculares al plano: [{ x, y, I }] con I > 0 saliendo de la hoja.
export function campoDeHilos(hilos, x, y) {
  let bx = 0, by = 0;
  for (const h of hilos) {
    const dx = x - h.x, dy = y - h.y, r2 = dx * dx + dy * dy;
    if (r2 < 1e-12) return [NaN, NaN];
    const k = (MU0 * h.I) / (2 * Math.PI * r2);
    // ẑ × r̂: B gira en sentido antihorario alrededor de una corriente saliente
    bx += -k * dy;
    by += k * dx;
  }
  return [bx, by];
}

// Integración de la fuerza de Lorentz F = q(E + v × B) con Boris (conserva la energía en B puro).
export function trayectoria({ q, m, r0, v0, E = [0, 0, 0], B = [0, 0, 0], dt, pasos }) {
  const pts = [r0.slice()];
  let r = r0.slice(), v = v0.slice();
  const k = (q * dt) / (2 * m);
  for (let i = 0; i < pasos; i++) {
    const vm = v.map((c, j) => c + k * E[j]);
    const t = B.map((b) => k * b);
    const t2 = t[0] ** 2 + t[1] ** 2 + t[2] ** 2;
    const vp = suma(vm, cruz(vm, t));
    const s = t.map((c) => (2 * c) / (1 + t2));
    const vplus = suma(vm, cruz(vp, s));
    v = vplus.map((c, j) => c + k * E[j]);
    r = r.map((c, j) => c + v[j] * dt);
    pts.push(r.slice());
  }
  return pts;
}

export const cruz = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const suma = (a, b) => a.map((c, i) => c + b[i]);

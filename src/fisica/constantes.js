// Constantes en unidades del SI, con los valores que usa la cátedra.
export const K = 8.99e9; // 1/(4πε0), N·m²/C²
export const EPS0 = 8.854e-12; // C²/(N·m²)
export const MU0 = 4 * Math.PI * 1e-7; // T·m/A
export const E = 1.602e-19; // carga elemental, C
export const ME = 9.109e-31; // masa del electrón, kg
export const MP = 1.673e-27; // masa del protón, kg
export const C = 2.998e8; // velocidad de la luz, m/s
export const G = 9.8; // m/s²
export const R = 8.314; // J/(mol·K)
export const SIGMA = 5.67e-8; // Stefan-Boltzmann, W/(m²·K⁴)
export const CAL = 4.186; // J por caloría

// Número con coma decimal y cifras significativas, como se escribe en los parciales: 4,82·10⁷
const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
export function num(v, cifras = 3) {
  if (!Number.isFinite(v)) return '—';
  if (v === 0) return '0';
  const exp = Math.floor(Math.log10(Math.abs(v)));
  if (exp >= -2 && exp < 5) return String(+v.toPrecision(cifras)).replace('.', ',');
  const m = (v / 10 ** exp).toPrecision(cifras).replace('.', ',');
  return `${m}·10${String(exp).replace(/./g, (c) => SUP[c])}`;
}

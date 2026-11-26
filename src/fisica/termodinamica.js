import { R } from './constantes.js';

// Calorimetría con cambio de fase del agua. Cuerpos: { m (g), T (°C), c (cal/g°C) } y opcional { hielo: true }.
// Datos por defecto del agua: c_hielo = 0,5, c_agua = 1, Lf = 80 cal/g. Devuelve el estado de equilibrio.
export function equilibrioAguaHielo({ agua = [], hielo = [], otros = [] }, { cHielo = 0.5, cAgua = 1, Lf = 80 } = {}) {
  // Calor que cede todo lo caliente hasta 0 °C y calor que necesita el hielo para llegar a 0 °C y fundirse
  const cede0 = agua.reduce((s, a) => s + a.m * cAgua * a.T, 0) + otros.reduce((s, o) => s + o.m * o.c * o.T, 0);
  const calentarHielo = hielo.reduce((s, h) => s + h.m * cHielo * -h.T, 0);
  const fundir = hielo.reduce((s, h) => s + h.m * Lf, 0);
  const mAgua = agua.reduce((s, a) => s + a.m, 0), mHielo = hielo.reduce((s, h) => s + h.m, 0);
  const capOtros = otros.reduce((s, o) => s + o.m * o.c, 0);

  if (cede0 >= calentarHielo + fundir) {
    // Todo líquido: balance final por encima de 0 °C
    const T = (cede0 - calentarHielo - fundir) / ((mAgua + mHielo) * cAgua + capOtros);
    return { T, hieloFinal: 0, aguaFinal: mAgua + mHielo };
  }
  if (cede0 >= calentarHielo) {
    const fundida = (cede0 - calentarHielo) / Lf;
    return { T: 0, hieloFinal: mHielo - fundida, aguaFinal: mAgua + fundida };
  }
  // Todo el agua se congela y aún sobra frío: todo sólido por debajo de 0 °C
  const congelar = mAgua * Lf;
  if (cede0 + congelar >= calentarHielo) {
    const congelada = (calentarHielo - cede0) / Lf;
    return { T: 0, hieloFinal: mHielo + congelada, aguaFinal: mAgua - congelada };
  }
  const capSolido = (mAgua + mHielo) * cHielo + capOtros;
  const T = -(calentarHielo - cede0 - congelar) / capSolido;
  return { T, hieloFinal: mAgua + mHielo, aguaFinal: 0 };
}

// Procesos de gas ideal: trabajo hecho POR el gas, calor recibido y ΔU (convención de la cátedra: Q = ΔU + W)
export function proceso(tipo, { n, T1, T2: T2dado, V1, V2, P1, cv = 1.5 * R, gamma }) {
  const g = gamma ?? (cv + R) / cv;
  switch (tipo) {
    case 'isobarico': {
      const P = P1 ?? (n * R * T1) / V1, T2 = (T1 * V2) / V1;
      const W = P * (V2 - V1), dU = n * cv * (T2 - T1);
      return { W, dU, Q: dU + W, T2, P2: P };
    }
    case 'isotermico': {
      const W = n * R * T1 * Math.log(V2 / V1);
      return { W, dU: 0, Q: W, T2: T1, P2: (n * R * T1) / V2 };
    }
    case 'isocorico': {
      const dU = n * cv * (T2dado - T1);
      return { W: 0, dU, Q: dU, T2: T2dado, P2: (n * R * T2dado) / V1 };
    }
    case 'adiabatico': {
      const T2 = T1 * (V1 / V2) ** (g - 1);
      const dU = n * cv * (T2 - T1);
      return { W: -dU, dU, Q: 0, T2, P2: (n * R * T2) / V2 };
    }
    default:
      throw new Error(`Proceso desconocido: ${tipo}`);
  }
}

// Dilatación
export const dilatacionLineal = (L0, alfa, dT) => L0 * alfa * dT;
export const dilatacionVolumen = (V0, beta, dT) => V0 * beta * dT;

// Transferencia de calor
export const conduccion = (k, A, dT, L) => (k * A * dT) / L; // W
export const radiacion = (e, A, T, Tamb = 0) => e * 5.67e-8 * A * (T ** 4 - Tamb ** 4);
// Pared compuesta: capas [{ k, L }] en serie
export const conduccionSerie = (A, dT, capas) => (A * dT) / capas.reduce((s, c) => s + c.L / c.k, 0);

// Máquinas
export const rendimientoCarnot = (Tc, Tf) => 1 - Tf / Tc;
export const copCarnot = (Tc, Tf) => Tf / (Tc - Tf);

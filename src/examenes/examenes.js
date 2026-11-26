// Todos los exámenes resueltos en una sola lista, con nombre legible y bloque temático de cada ítem.
import { FINALES } from './finales.js';
import { PARCIALES_TOMADOS } from './parciales.js';

const nombreParcial = (p) => {
  const pre = p.id.startsWith('pp') ? 'Pre-' : p.id.startsWith('rp') ? 'Recuperatorio del ' : '';
  const cual = p.parcial === 1 ? 'primer parcial' : 'segundo parcial';
  return `${pre}${pre ? cual : cual[0].toUpperCase() + cual.slice(1)} del ${p.fecha}`;
};

export const EXAMENES = [
  ...FINALES.map((f) => ({ ...f, tipo: 'final', nombre: f.fecha.startsWith('Final') ? f.fecha : `Final del ${f.fecha}` })),
  ...PARCIALES_TOMADOS.map((p) => ({ ...p, tipo: `parcial${p.parcial}`, nombre: nombreParcial(p), nota: p.detalle })),
];

export const examenPorId = (id) => EXAMENES.find((e) => e.id === id);

// Los ítems de todos los exámenes que se estudian en un módulo
export const itemsDeModulo = (id) => EXAMENES.flatMap((e) => e.items.filter((i) => i.tema === id).map((i) => ({ ...i, examen: e })));

// Bloques del final actual: electricidad (TP 1 a 8), electromagnetismo (TP 9 a 17) y termodinámica (TP 18 y 19)
export const BLOQUES = [
  { id: 'electricidad', titulo: 'Electricidad', tps: [1, 8] },
  { id: 'termodinamica', titulo: 'Termodinámica', tps: [18, 19] },
  { id: 'electromagnetismo', titulo: 'Electromagnetismo', tps: [9, 17] },
];
export const bloqueDe = (tema) => {
  const tp = +tema.slice(1);
  return BLOQUES.find((b) => tp >= b.tps[0] && tp <= b.tps[1]).id;
};

// Cuántas veces apareció cada módulo en los exámenes, de más a menos
export function rankingTemas(tipo = null) {
  const cuenta = {};
  for (const e of EXAMENES) {
    if (tipo && e.tipo !== tipo) continue;
    for (const i of e.items) cuenta[i.tema] = (cuenta[i.tema] || 0) + 1;
  }
  return Object.entries(cuenta).map(([id, veces]) => ({ id, veces })).sort((a, b) => b.veces - a.veces);
}

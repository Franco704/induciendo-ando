import { equilibrioAguaHielo } from '../../fisica/termodinamica.js';
import { num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Agua caliente y hielo en un calorímetro ideal (no pierde calor). Lo que cede uno lo absorbe el otro: $\sum Q=0$. El gráfico muestra la temperatura de cada parte en función del calor intercambiado: el hielo sube hasta $0\,^\circ$C, se queda en una **meseta** mientras se funde y recién después sigue subiendo.`,
  observa: [
    'Siempre conviene calcular primero cuánto calor hace falta para llevar el hielo a 0 °C y para fundirlo, y compararlo con lo que el agua puede ceder hasta 0 °C.',
    'Si no alcanza para fundir todo, la mezcla queda a 0 °C con hielo flotando: la incógnita pasa a ser la masa que se fundió.',
    'Valores por defecto: el final de noviembre de 2026 (600 g a 15 °C y 50 g a −18 °C): da 7,0 °C.',
  ],
  montar(m) {
    let ma = 600, Ta = 15, mh = 50, Th = -18;
    const G = m.lienzo({ x: [0, 1], y: [-0.25, 1.05], proporcional: false, etiqueta: 'Temperatura en función del calor intercambiado' });
    G.canvas.classList.add('lienzo--medio');
    m.panel.append(
      m.deslizador({ etiqueta: 'Agua (g)', min: 50, max: 1000, paso: 10, valor: ma, formato: (x) => x.toFixed(0), alCambiar: (x) => { ma = x; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'Temperatura del agua (°C)', min: 1, max: 100, paso: 1, valor: Ta, formato: (x) => x.toFixed(0), alCambiar: (x) => { Ta = x; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'Hielo (g)', min: 0, max: 600, paso: 5, valor: mh, formato: (x) => x.toFixed(0), alCambiar: (x) => { mh = x; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'Temperatura del hielo (°C)', min: -40, max: 0, paso: 1, valor: Th, formato: (x) => x.toFixed(0), alCambiar: (x) => { Th = x; G.redibujar(); } }),
      m.h('p', { class: 'sim__leyenda' }, m.h('span', { style: { color: 'var(--calor)' } }, m.h('i'), 'agua que cede'), m.h('span', { style: { color: 'var(--frio)' } }, m.h('i'), 'hielo que absorbe')));
    // Temperatura de una sustancia después de intercambiar q calorías (q > 0 la calienta), con fusión a 0 °C
    const curva = (m0, T0, signo) => (q) => {
      let T = T0, resto = q;
      const pasos = signo > 0 ? [[0.5, 0], [null, 80], [1, Infinity]] : [[1, 0], [null, 80], [0.5, -Infinity]];
      for (const [c, hasta] of pasos) {
        if (c === null) { const usado = Math.min(resto, m0 * hasta); resto -= usado; if (resto <= 0) return 0; continue; }
        const lim = m0 * c * Math.abs(hasta - T);
        if (!Number.isFinite(lim) || resto <= lim) return T + (signo * resto) / (m0 * c);
        resto -= lim; T = hasta;
      }
      return T;
    };
    G.alDibujar((l) => {
      const e = equilibrioAguaHielo({ agua: [{ m: ma, T: Ta }], hielo: mh ? [{ m: mh, T: Th }] : [] });
      // Calor que cede el agua: lo que la lleva de Ta al estado final
      const Q = e.T > 0 ? ma * (Ta - e.T) : e.aguaFinal >= ma ? ma * Ta : e.T === 0 ? ma * Ta + (ma - e.aguaFinal) * 80 : ma * Ta + ma * 80 + ma * 0.5 * -e.T;
      const Qmax = Math.max(Q, 1) * 1.15;
      const Tmax = Math.max(Ta, 5) * 1.05, Tmin = Math.min(Th, -5) * 1.05;
      const px = (q) => q / Qmax, py = (T) => (T - Tmin) / (Tmax - Tmin) - 0.2;
      l.trazo([[0, py(0)], [1, py(0)]], { color: l.c.cuadricula, guiones: [4, 4] });
      l.texto('0 °C', [0, py(0)], { dy: -4, color: l.c.tintaSuave, tam: 11 });
      const agua = curva(ma, Ta, -1), hielo = curva(mh, Th, 1);
      const muestras = (f) => Array.from({ length: 301 }, (_, k) => [px((Q * k) / 300), py(f((Q * k) / 300))]);
      l.trazo(muestras(agua), { color: l.c.calor, ancho: 2.5 });
      if (mh) l.trazo(muestras(hielo), { color: l.c.frio, ancho: 2.5 });
      l.punto([px(Q), py(e.T)], { color: l.c.tinta });
      l.texto('Q →', [0.95, py(Tmin)], { color: l.c.tintaSuave, tam: 11, dy: -4 });
      m.leer(
        m.dato('Temperatura final', `${num(e.T)} °C`),
        m.dato('Hielo que queda', `${num(e.hieloFinal)} g`),
        m.dato('Agua líquida al final', `${num(e.aguaFinal)} g`),
        m.dato('Calor intercambiado', `${num(Math.abs(Q))} cal = ${num(Math.abs(Q) * 4.186)} J`));
    });
  },
};

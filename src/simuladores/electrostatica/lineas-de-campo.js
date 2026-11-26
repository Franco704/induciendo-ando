import { lineasDeCampo, campo } from '../../fisica/electrostatica.js';
import { num } from '../../fisica/constantes.js';

const r = String.raw;
const CONFIGS = [
  ['dipolo', 'Dipolo (+q y −q)', [{ q: 1, x: -0.8, y: 0 }, { q: -1, x: 0.8, y: 0 }]],
  ['iguales', 'Dos positivas iguales', [{ q: 1, x: -0.8, y: 0 }, { q: 1, x: 0.8, y: 0 }]],
  ['distintas', '+2q y −q', [{ q: 2, x: -0.8, y: 0 }, { q: -1, x: 0.8, y: 0 }]],
  ['tres', 'Tres cargas (+, −, +)', [{ q: 1, x: 0, y: 1 }, { q: -1, x: 0, y: 0 }, { q: 1, x: 0, y: -1 }]],
];

export default {
  resumen: r`Las líneas de campo nacen en las cargas positivas y mueren en las negativas; en cada punto, $\vec E$ es tangente a la línea. Su **densidad** indica la intensidad. Arrastrá las cargas y tocá cualquier punto vacío para medir el campo (cargas de 1 nC, distancias en metros).`,
  observa: [
    'La cantidad de líneas que salen de una carga es proporcional a su valor: con +2q y −q, la mitad de las líneas de la positiva se van al infinito.',
    'Entre dos cargas iguales hay un punto donde el campo es cero: las líneas se esquivan y nunca se cruzan.',
    'Lejos del par, un dipolo se parece a nada (el campo cae como 1/r³) y dos cargas iguales se parecen a una sola carga 2q.',
  ],
  montar(m) {
    const L = m.lienzo({ x: [-2.2, 2.2], y: [-1.8, 1.8], etiqueta: 'Líneas de campo de una configuración de cargas' });
    let cargas = CONFIGS[0][2].map((c) => ({ ...c })), lineas = [], tomada = null, sonda = null;
    const recalcular = () => { lineas = lineasDeCampo(cargas, { porUnidad: 8, limite: 5 }); L.redibujar(); };
    m.panel.append(m.selector({ etiqueta: 'Configuración', opciones: CONFIGS.map(([v, t]) => [v, t]), valor: 'dipolo', alCambiar: (v) => { cargas = CONFIGS.find((c) => c[0] === v)[2].map((c) => ({ ...c })); sonda = null; recalcular(); } }));
    L.alDibujar((l) => {
      for (const ln of lineas) {
        l.trazo(ln, { color: l.c.elec, ancho: 1.3 });
        const k = Math.floor(ln.length / 2);
        if (ln.length > 14) {
          const dx = ln[k + 1][0] - ln[k][0], dy = ln[k + 1][1] - ln[k][1], d = Math.hypot(dx, dy) || 1;
          l.flecha(ln[k], [(0.1 * dx) / d, (0.1 * dy) / d], { color: l.c.elec, ancho: 1.3, cabeza: 7 });
        }
      }
      if (sonda) {
        const [ex, ey] = campo(cargas.map((c) => ({ ...c, q: c.q * 1e-9 })), ...sonda);
        const e = Math.hypot(ex, ey);
        if (e) l.flecha(sonda, [(0.35 * ex) / e, (0.35 * ey) / e], { color: l.c.mag, ancho: 2.5, cabeza: 10 });
        l.punto(sonda, { color: l.c.mag, radio: 4 });
        m.leer(m.dato('|E| en el punto tocado', `${num(e)} N/C`), m.dato('Dirección', `${(((Math.atan2(ey, ex) * 180) / Math.PI) + 360).toFixed(0) % 360}°`));
      } else m.leer(m.dato('Tocá un punto vacío', 'para medir E'));
      cargas.forEach((c) => l.carga([c.x, c.y], c.q, { radio: 9 + 3 * Math.abs(c.q) }));
    });
    L.alPuntero(([x, y], e) => {
      if (e.type === 'pointerdown') tomada = cargas.find((c) => Math.hypot(c.x - x, c.y - y) < 0.25) || null;
      if (tomada) {
        tomada.x = Math.max(-2, Math.min(2, x));
        tomada.y = Math.max(-1.6, Math.min(1.6, y));
        if (!cargas.some((c) => c !== tomada && Math.hypot(c.x - tomada.x, c.y - tomada.y) < 0.2)) recalcular();
      } else { sonda = [x, y]; L.redibujar(); }
    });
    recalcular();
  },
};

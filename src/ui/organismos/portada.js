import { h } from '../atomos/h.js';
import { Lienzo2D } from '../../graficos/lienzo2d.js';
import { lineasDeCampo, campo } from '../../fisica/electrostatica.js';
import { num } from '../../fisica/constantes.js';

// Un dipolo que se puede tocar: la idea con la que arranca la materia. Las líneas crecen una vez al cargar;
// después siguen a las cargas cuando el usuario las arrastra.
export function portada({ titulo, bajada, acciones }) {
  const lectura = h('p', { class: 'portada__lectura' });
  const lienzo = h('div', { class: 'portada__escena' });
  const raiz = h('section', { class: 'portada' },
    h('div', { class: 'portada__texto' },
      h('h1', { class: 'portada__titulo' }, titulo),
      h('p', { class: 'portada__bajada' }, bajada),
      h('div', { class: 'portada__acciones' }, acciones)),
    h('figure', { class: 'portada__figura' }, lienzo,
      h('figcaption', { class: 'portada__pie' }, 'Arrastrá las cargas. Las líneas salen de la positiva y llegan a la negativa; donde se juntan, el campo es más intenso.', lectura)));

  const L = new Lienzo2D(lienzo, { x: [-3, 3], y: [-2.2, 2.2], etiqueta: 'Líneas de campo de una carga positiva y una negativa que se pueden arrastrar' });
  const cargas = [{ q: 1e-9, x: -1.1, y: 0.15 }, { q: -1e-9, x: 1.1, y: -0.15 }];
  let lineas = lineasDeCampo(cargas, { porUnidad: 9, limite: 6 });
  let progreso = matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 0, id = 0, tomada = null;

  L.alDibujar((l) => {
    const c = l.c;
    for (const ln of lineas) {
      const n = Math.max(2, Math.round(ln.length * progreso));
      l.trazo(ln.slice(0, n), { color: c.elec, ancho: 1.4 });
      // Una punta de flecha en el medio de cada línea para que se lea el sentido
      const k = Math.floor(n / 2);
      if (n > 12 && ln[k + 1]) {
        const dx = ln[k + 1][0] - ln[k][0], dy = ln[k + 1][1] - ln[k][1], d = Math.hypot(dx, dy) || 1;
        l.flecha(ln[k], [(0.12 * dx) / d, (0.12 * dy) / d], { color: c.elec, ancho: 1.4, cabeza: 8 });
      }
    }
    for (const q of cargas) {
      l.carga([q.x, q.y], q.q, { radio: 13 });
    }
  });
  const crecer = () => {
    progreso = Math.min(1, progreso + 0.025);
    L.redibujar();
    if (progreso < 1) id = requestAnimationFrame(crecer);
  };
  if (progreso < 1) id = requestAnimationFrame(crecer);

  const mostrar = ([x, y]) => {
    const [ex, ey] = campo(cargas, x, y);
    lectura.textContent = Number.isFinite(ex) ? `Bajo el dedo: |E| = ${num(Math.hypot(ex, ey))} N/C (cargas de 1 nC, distancias en metros)` : '';
  };
  L.alPuntero(([x, y], e) => {
    if (e.type === 'pointerdown') tomada = cargas.find((q) => Math.hypot(q.x - x, q.y - y) < 0.45) || null;
    if (tomada) {
      tomada.x = Math.max(-2.7, Math.min(2.7, x));
      tomada.y = Math.max(-1.9, Math.min(1.9, y));
      if (Math.hypot(cargas[0].x - cargas[1].x, cargas[0].y - cargas[1].y) < 0.4) return;
      lineas = lineasDeCampo(cargas, { porUnidad: 9, limite: 6 });
      progreso = 1;
      L.redibujar();
    } else mostrar([x, y]);
  });

  raiz.destruir = () => { cancelAnimationFrame(id); L.destruir(); };
  return raiz;
}

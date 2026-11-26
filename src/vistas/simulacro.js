import { h } from '../ui/atomos/h.js';
import { boton } from '../ui/atomos/controles.js';
import { pregunta } from '../ui/moleculas/moleculas.js';
import { modulosDe, cargarModulo, MODULOS, PARCIALES } from '../temario/indice.js';
import { EXAMENES, BLOQUES, bloqueDe } from '../examenes/examenes.js';
import { itemExamen } from './examenes.js';
import { progreso } from '../nucleo/almacen.js';

const barajar = (xs) => xs.map((x) => [Math.random(), x]).sort((a, b) => a[0] - b[0]).map(([, x]) => x);

// Simulacro de preguntas: del parcial elegido, o solo las que fallaste.
export function vistaSimulacro(raiz, { n }, { almacen }) {
  const falladas = n === 'falladas';
  const parcial = PARCIALES[+n - 1];
  if (!falladas && !parcial) { raiz.append(h('p', { class: 'vacio' }, 'Ese simulacro no existe. Elegí el del primer o el del segundo parcial.')); return; }
  document.title = 'Simulacro · Induciendo Ando';
  const lista = h('div', { class: 'simulacro__preguntas' });
  const marcador = h('p', { class: 'cuestionario__marcador', 'aria-live': 'polite' });
  raiz.append(h('div', { class: 'pagina', dataset: { parcial: parcial?.n || 1 } },
    h('header', { class: 'pagina__cabecera' },
      h('h1', { class: 'pagina__titulo' }, falladas ? 'Repaso de las que fallaste' : `Simulacro del ${parcial.titulo.toLowerCase()}`),
      h('p', { class: 'pagina__bajada' }, falladas
        ? 'Las preguntas que respondiste mal la última vez. Cuando las aciertes, salen de esta lista.'
        : 'Diez preguntas al azar de los módulos del parcial, mezcladas con las de opción múltiple de los exámenes. Respondé sin mirar la teoría y fijate dónde flojeás.')),
    marcador, lista,
    h('div', { class: 'simulacro__acciones' }, boton('Otra tanda', () => armar(), { variante: 'primario', icono: 'reiniciar' }),
      !falladas && h('a', { class: 'boton boton--fantasma', href: '#/simulacro/falladas' }, h('span', {}, 'Repasar las que fallé')))));

  let banco = [];
  const mods = falladas ? MODULOS : modulosDe(+n);
  Promise.all(mods.map((m) => cargarModulo(m.id))).then((cargados) => {
    const deExamenes = EXAMENES.flatMap((e) => e.items.filter((i) => i.tipo === 'opcion').map((i) => ({ ...i, examen: e })))
      .map((i) => ({ id: `${i.examen.id}-${i.n}`, p: i.enunciado, opciones: i.opciones, ok: i.ok, por: i.resolucion, modulo: MODULOS.find((m) => m.id === i.tema) }))
      .filter((q) => mods.includes(q.modulo));
    banco = [...cargados.flatMap((m) => (m.preguntas || []).map((q) => ({ ...q, modulo: m }))), ...deExamenes];
    armar();
  });

  function armar() {
    const ids = new Set(progreso.falladas(almacen.leer()));
    const fuente = falladas ? banco.filter((q) => ids.has(q.id)) : banco;
    const tanda = barajar(fuente).slice(0, 10);
    let bien = 0, hechas = 0;
    const contar = () => marcador.replaceChildren(h('strong', {}, `${bien}/${hechas}`), h('span', {}, `de ${tanda.length} preguntas`));
    contar();
    lista.replaceChildren(...(tanda.length ? tanda.map((q) => h('div', { class: 'simulacro__item' },
      h('a', { class: 'simulacro__origen', href: `#/modulo/${q.modulo.id}?s=teoria` }, `TP ${q.modulo.tp}: ${q.modulo.titulo}`),
      pregunta(q, { alResponder: (ok) => { hechas++; bien += ok; contar(); progreso.responder(almacen, q.id, ok); } })))
      : [h('p', { class: 'vacio' }, falladas ? 'No tenés preguntas falladas. Hacé un simulacro de parcial para sumar práctica.' : 'Todavía no hay preguntas cargadas.')]));
  }
}

// Simulacro de final con el formato actual: tres bloques, cada uno con un tema de teoría y una aplicación.
export function vistaSimulacroFinal(raiz) {
  document.title = 'Simulacro de final · Induciendo Ando';
  const cuerpo = h('div', {});
  const pool = EXAMENES.flatMap((e) => e.items.filter((i) => i.tipo !== 'opcion').map((i) => ({ ...i, examen: e })));
  function armar() {
    cuerpo.replaceChildren(...BLOQUES.map((b, k) => {
      const delBloque = barajar(pool.filter((i) => bloqueDe(i.tema) === b.id));
      const teoria = delBloque.find((i) => i.tipo === 'teoria');
      const aplicacion = delBloque.find((i) => i.tipo === 'practica');
      return h('section', { class: 'bloque' },
        h('h2', { class: 'bloque__titulo' }, `${k + 1}. ${b.titulo}`),
        [teoria, aplicacion].filter(Boolean).map((it, j) => h('div', { class: 'simulacro__item' },
          h('p', { class: 'simulacro__origen' }, `${j ? 'Aplicación' : 'Teoría'}, tomada en: ${it.examen.nombre}`),
          itemExamen({ ...it, n: `${k + 1}${'ab'[j]}` }))));
    }));
  }
  raiz.append(h('div', { class: 'pagina', dataset: { parcial: 3 } },
    h('header', { class: 'pagina__cabecera' },
      h('h1', { class: 'pagina__titulo' }, 'Simulacro de final'),
      h('p', { class: 'pagina__bajada' }, 'Tres bloques como en el final de noviembre de 2026: electricidad, termodinámica y electromagnetismo. En cada uno, un tema de teoría para desarrollar con definiciones, unidades y gráficos, y una aplicación numérica. Escribí todo en papel y después compará con la resolución.')),
    cuerpo,
    h('div', { class: 'simulacro__acciones' }, boton('Armar otro simulacro', armar, { variante: 'primario', icono: 'reiniciar' }))));
  armar();
}

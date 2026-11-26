import { h } from '../ui/atomos/h.js';
import { tex, enLinea } from '../ui/atomos/matematica.js';
import { FORMULARIO, CONSTANTES } from '../estudio/formulario.js';
import { moduloPorId } from '../temario/indice.js';

export function vistaFormulario(raiz) {
  document.title = 'Hoja de fórmulas · Induciendo Ando';
  raiz.append(h('div', { class: 'pagina' },
    h('header', { class: 'pagina__cabecera' },
      h('h1', { class: 'pagina__titulo' }, 'Hoja de fórmulas'),
      h('p', { class: 'pagina__bajada' }, 'Lo que conviene tener a mano para resolver los prácticos, ordenado por TP. En la teoría del final te van a pedir de dónde sale cada fórmula y en qué unidades se mide cada magnitud: para eso está la teoría de cada módulo.')),
    h('section', { class: 'formulario' },
      h('h2', { class: 'formulario__titulo' }, 'Constantes'),
      h('dl', { class: 'formulario__lista' }, CONSTANTES.map(([nombre, f]) => [h('dt', {}, enLinea(nombre)), h('dd', {}, tex(f, { bloque: true }))]))),
    FORMULARIO.map((g) => {
      const m = moduloPorId(g.modulo);
      return h('section', { class: 'formulario', dataset: { parcial: m.parcial } },
        h('h2', { class: 'formulario__titulo' }, h('a', { href: `#/modulo/${m.id}` }, `TP ${m.tp}: ${m.titulo}`)),
        h('dl', { class: 'formulario__lista' }, g.formulas.map(([nombre, f]) => [
          h('dt', {}, enLinea(nombre)), h('dd', {}, tex(f, { bloque: true }))])));
    })));
}

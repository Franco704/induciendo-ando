import { h } from '../ui/atomos/h.js';
import { marcoSimulador } from '../ui/organismos/simulador.js';
import { SIMULADORES, cargarSimulador } from '../simuladores/indice.js';
import { MODULOS, PARCIALES } from '../temario/indice.js';
import { progreso } from '../nucleo/almacen.js';

const modulosQueUsan = (id) => MODULOS.filter((m) => m.labs.includes(id));

export function vistaSimuladores(raiz, _p, { almacen }) {
  document.title = 'Simuladores · Induciendo Ando';
  const hechos = almacen.leer().labs;
  raiz.append(h('div', { class: 'pagina' },
    h('header', { class: 'pagina__cabecera' },
      h('h1', { class: 'pagina__titulo' }, 'Simuladores'),
      h('p', { class: 'pagina__bajada' }, 'Lo que en el pizarrón es una flecha quieta, acá se mueve. Arrastrá las cargas, cerrá el interruptor, cambiá la frecuencia y mirá qué pasa con los números: son los mismos que calculás en los prácticos.')),
    PARCIALES.map((p) => h('section', { class: 'catalogo', dataset: { parcial: p.n } },
      h('h2', { class: 'catalogo__titulo' }, p.tema),
      h('ul', { class: 'catalogo__lista' },
        Object.entries(SIMULADORES).filter(([, l]) => l.parcial === p.n).map(([id, l]) =>
          h('li', {}, h('a', { class: 'catalogo__item', href: `#/simulador/${id}` },
            h('span', { class: 'catalogo__nombre' }, l.titulo),
            h('span', { class: 'catalogo__tps' }, modulosQueUsan(id).map((m) => `TP ${m.tp}`).join(', ')),
            hechos[id] && h('span', { class: 'chip chip--eje' }, 'abierto')))))))));
}

export function vistaSimulador(raiz, { id }, { almacen }) {
  let marco = null, vivo = true;
  cargarSimulador(id).then((sim) => {
    if (!vivo) return;
    if (!sim) { raiz.append(h('p', { class: 'vacio' }, 'Ese simulador no existe. Elegí uno del catálogo.')); return; }
    document.title = `${sim.titulo} · Induciendo Ando`;
    progreso.marcarLab(almacen, id);
    marco = marcoSimulador(sim);
    const mods = modulosQueUsan(id);
    raiz.append(h('div', { class: 'pagina pagina--ancha', dataset: { parcial: sim.parcial } },
      h('p', { class: 'modulo__contexto' }, h('a', { href: '#/simuladores' }, 'Simuladores')),
      marco,
      mods.length && h('p', { class: 'pagina__relacion' }, 'Se usa en ', mods.map((m, i) => [i ? ', ' : '', h('a', { href: `#/modulo/${m.id}?s=simulador` }, `TP ${m.tp}: ${m.titulo}`)]), '.')));
  });
  return () => { vivo = false; marco?.destruir(); };
}

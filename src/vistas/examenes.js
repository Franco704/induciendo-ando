import { h } from '../ui/atomos/h.js';
import { texto } from '../ui/atomos/matematica.js';
import { boton, chip } from '../ui/atomos/controles.js';
import { pregunta } from '../ui/moleculas/moleculas.js';
import { EXAMENES, examenPorId } from '../examenes/examenes.js';
import { moduloPorId } from '../temario/indice.js';

const TIPOS = { teoria: 'Teoría', practica: 'Práctica', opcion: 'Opción múltiple' };

// Ítem de examen con la resolución oculta hasta que la pidas. Los de opción múltiple se responden ahí mismo.
export function itemExamen(it, { abierto = false } = {}) {
  const m = moduloPorId(it.tema);
  let cuerpo;
  if (it.tipo === 'opcion') {
    cuerpo = pregunta({ id: `ex-${it.n}`, p: it.enunciado, opciones: it.opciones, ok: it.ok, por: it.resolucion });
  } else {
    const res = h('div', { class: 'item-examen__resolucion prosa', hidden: !abierto }, texto(it.resolucion));
    const ver = boton(abierto ? 'Ocultar resolución' : 'Ver resolución', () => {
      res.hidden = !res.hidden;
      ver.querySelector('span').textContent = res.hidden ? 'Ver resolución' : 'Ocultar resolución';
    });
    cuerpo = [h('div', { class: 'item-examen__enunciado prosa' }, texto(it.enunciado)), ver, res];
  }
  return h('article', { class: 'item-examen', id: `item-${it.n}`, dataset: { parcial: m?.parcial } },
    h('header', { class: 'item-examen__cabecera' },
      h('span', { class: 'item-examen__n' }, it.n),
      chip(TIPOS[it.tipo]),
      m && h('a', { class: 'chip chip--eje', href: `#/modulo/${m.id}` }, `TP ${m.tp}: ${m.titulo}`)),
    cuerpo,
    it.lab && h('a', { class: 'enlace-lab', href: `#/simulador/${it.lab}` }, 'Verlo en el simulador'));
}

const aviso = (e) => e.regional && h('aside', { class: 'nota' }, h('p', {}, h('strong', {}, 'Aviso: '), `este examen es de la regional ${e.regional}, no de la UTN-FRT. Sirve para practicar, pero el formato y el recorte de temas pueden no coincidir con los de Tucumán.`));

const lista = (examenes) => h('ul', { class: 'lista-finales' }, examenes.map((e) =>
  h('li', {}, h('a', { class: 'lista-finales__item', href: `#/examen/${e.id}` },
    h('span', { class: 'lista-finales__fecha' }, e.tipo === 'final' ? e.fecha : e.nombre),
    h('span', { class: 'lista-finales__temas' }, temas(e) + (e.regional ? ` · regional ${e.regional}` : ''))))));

const temas = (e) => {
  const tps = [...new Set(e.items.map((i) => moduloPorId(i.tema)?.tp))].sort((a, b) => a - b);
  return `${e.items.length} ${e.items.length === 1 ? 'ítem' : 'ítems'} · TP ${tps.join(', ')}`;
};

export function vistaExamenes(raiz, { consulta }) {
  document.title = 'Exámenes resueltos · Induciendo Ando';
  const grupo = (tipo) => EXAMENES.filter((e) => e.tipo === tipo);
  raiz.append(h('div', { class: 'pagina' },
    h('header', { class: 'pagina__cabecera' },
      h('h1', { class: 'pagina__titulo' }, 'Exámenes resueltos'),
      h('div', { class: 'prosa pagina__bajada' }, texto(`Finales desde 2010 y parciales desde 2018, transcriptos de las fotos y resueltos paso a paso. El final actual tiene **tres bloques** (electricidad, termodinámica y electromagnetismo) y cada uno pide un tema de **teoría** desarrollado y una **aplicación** numérica. Antes se tomaba un cuestionario de opción múltiple que restaba por error. Al final de la lista hay un modelo de final de la **regional Buenos Aires** (UTN-FRBA), marcado como tal.`))),
    h('section', { class: 'bloque', id: 'finales' },
      h('h2', { class: 'bloque__titulo' }, 'Finales'),
      lista(grupo('final'))),
    h('section', { class: 'bloque', id: 'segundo', dataset: { parcial: 2 } },
      h('h2', { class: 'bloque__titulo' }, 'Segundo parcial'),
      h('p', { class: 'bloque__bajada' }, 'En algunas comisiones (2K2 en 2026) la magnetostática se tomó en el segundo parcial y no en el primero; los ítems están igual, cada uno enlazado a su TP.'),
      lista(grupo('parcial2'))),
    h('section', { class: 'bloque', id: 'primero', dataset: { parcial: 1 } },
      h('h2', { class: 'bloque__titulo' }, 'Primer parcial'),
      h('p', { class: 'bloque__bajada' }, 'La comisión 2K2 incluyó calorimetría en el primer parcial de 2025.'),
      lista(grupo('parcial1')))));
  const ancla = consulta.get('s');
  if (ancla) requestAnimationFrame(() => document.getElementById(ancla)?.scrollIntoView());
}

export function vistaExamen(raiz, { id, consulta }) {
  const e = examenPorId(id);
  if (!e) { raiz.append(h('p', { class: 'vacio' }, 'No encontré ese examen. Volvé a la lista de exámenes resueltos.')); return; }
  document.title = `${e.nombre} · Induciendo Ando`;
  raiz.append(h('div', { class: 'pagina', dataset: { parcial: e.tipo === 'final' ? 3 : e.parcial } },
    h('p', { class: 'modulo__contexto' }, h('a', { href: '#/examenes' }, 'Exámenes resueltos')),
    h('h1', { class: 'pagina__titulo' }, e.nombre),
    aviso(e),
    e.nota && h('p', { class: 'pagina__bajada' }, e.nota),
    e.items.map((it) => itemExamen(it, { abierto: consulta.get('i') === it.n }))));
  const i = consulta.get('i');
  if (i) requestAnimationFrame(() => document.getElementById(`item-${i}`)?.scrollIntoView());
}

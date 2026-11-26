import { h, svg, ICONOS } from '../ui/atomos/h.js';
import { filaModulo } from '../ui/moleculas/moleculas.js';
import { portada } from '../ui/organismos/portada.js';
import { PARCIALES, MODULOS, modulosDe, moduloPorId } from '../temario/indice.js';
import { EXAMENES, rankingTemas } from '../examenes/examenes.js';
import { OTRAS_GUIAS } from '../estudio/otras-guias.js';

const enlaceBoton = (href, texto, variante = 'primario', icono = null) =>
  h('a', { class: `boton boton--${variante}`, href }, icono && svg(ICONOS[icono], { tam: 18 }), h('span', {}, texto));

export function vistaInicio(raiz, _params, { almacen }) {
  const s = almacen.leer();
  const final = s.modo === 'final';
  const hero = portada(final
    ? {
      titulo: 'Física II, para rendir el final',
      bajada: 'El final tiene tres bloques: electricidad, termodinámica y electromagnetismo, cada uno con teoría y una aplicación. Acá están los finales y parciales tomados, resueltos, un simulacro con ese formato y simuladores para entender lo que no se ve.',
      acciones: [enlaceBoton('#/simulacro/final', 'Hacer un simulacro', 'primario', 'examen'), enlaceBoton('#/examenes', 'Ver exámenes resueltos', 'secundario')],
    }
    : {
      titulo: 'Física II, campo por campo',
      bajada: 'Teoría de la cátedra, los 19 trabajos prácticos y simuladores para ver lo que en el pizarrón cuesta imaginar: líneas de campo, flujo, circuitos que se cargan, órbitas, fasores, ondas y calor.',
      acciones: [enlaceBoton(siguiente(s), s.leidos.m01 ? 'Seguir donde dejé' : 'Empezar por el TP 1', 'primario'), enlaceBoton('#/simuladores', 'Ir a los simuladores', 'secundario', 'onda')],
    });

  raiz.append(hero, final ? cuerpoFinal(s) : cuerpoCursada(s), agradecimiento(), otrasGuias());
  return () => hero.destruir();
}

function siguiente(s) {
  const pendiente = MODULOS.find((m) => !s.leidos[m.id]);
  return `#/modulo/${pendiente?.id || 'm01'}`;
}

function cuerpoCursada(s) {
  return h('div', { class: 'inicio__parciales' },
    PARCIALES.map((p) => {
      const mods = modulosDe(p.n);
      return h('section', { class: 'parcial', dataset: { parcial: p.n }, 'aria-labelledby': `parcial-${p.n}` },
        h('header', { class: 'parcial__cabecera' },
          h('p', { class: 'parcial__tema' }, p.tema),
          h('h2', { class: 'parcial__titulo', id: `parcial-${p.n}` }, p.titulo),
          h('p', { class: 'parcial__descripcion' }, p.descripcion),
          h('div', { class: 'parcial__acciones' },
            enlaceBoton(`#/simulacro/${p.n}`, 'Simulacro de preguntas', 'secundario'),
            enlaceBoton(`#/examenes?s=${p.n === 1 ? 'primero' : 'segundo'}`, 'Parciales resueltos', 'fantasma'))),
        h('div', { class: 'parcial__ruta' }, mods.map((m) => filaModulo(m, { leido: s.leidos[m.id] }))));
    }));
}

function cuerpoFinal() {
  const ranking = rankingTemas();
  const max = ranking[0]?.veces || 1;
  const finales = EXAMENES.filter((e) => e.tipo === 'final');
  return h('div', { class: 'inicio__final' },
    h('section', { class: 'bloque' },
      h('h2', { class: 'bloque__titulo' }, 'Lo que más se toma'),
      h('p', { class: 'bloque__bajada' }, `Cuántas veces apareció cada TP en los ${EXAMENES.length} exámenes recopilados (${finales.length} finales y ${EXAMENES.length - finales.length} parciales). Tocá un tema para estudiarlo.`),
      h('ol', { class: 'ranking' }, ranking.slice(0, 10).map(({ id, veces }) => {
        const m = moduloPorId(id);
        return h('li', { class: 'ranking__fila', dataset: { parcial: m.parcial } },
          h('a', { href: `#/modulo/${id}` }, h('span', { class: 'ranking__tp' }, `TP ${m.tp}`), h('span', { class: 'ranking__nombre' }, m.titulo)),
          h('span', { class: 'ranking__barra', style: { '--p': veces / max }, 'aria-hidden': 'true' }),
          h('span', { class: 'ranking__veces' }, `${veces}`));
      }))),
    h('section', { class: 'bloque' },
      h('h2', { class: 'bloque__titulo' }, 'Finales tomados'),
      h('ul', { class: 'lista-finales' }, finales.map((f) =>
        h('li', {}, h('a', { class: 'lista-finales__item', href: `#/examen/${f.id}` },
          h('span', { class: 'lista-finales__fecha' }, f.fecha),
          h('span', { class: 'lista-finales__temas' }, temasDe(f))))))));
}

const temasDe = (f) => [...new Set(f.items.map((i) => moduloPorId(i.tema)?.titulo))].slice(0, 4).join(', ');

// El material de esta guía lo juntó Ana Paula Lopez: clases, TP, cuestionarios, parciales y finales.
const agradecimiento = () =>
  h('section', { class: 'gracias', 'aria-labelledby': 'gracias' },
    h('h2', { class: 'gracias__titulo', id: 'gracias' }, 'Gracias, Ana Paula'),
    h('p', { class: 'gracias__texto' },
      'Todo lo que hay en esta guía existe porque ', h('strong', {}, 'Ana Paula Lopez'),
      ' recopiló el material de la materia: las clases y los resúmenes de cada unidad, los diecinueve trabajos prácticos con sus respuestas, los cuestionarios del aula virtual, los informes de laboratorio y las fotos de más de cuarenta parciales y finales. Sin ese trabajo paciente no habría ejercicios resueltos ni simulacros. Gracias.'));

// Las demás guías de la UTN, separadas por año de la carrera.
const otrasGuias = () =>
  h('section', { class: 'otras-guias', 'aria-labelledby': 'otras-guias' },
    h('h2', { class: 'bloque__titulo', id: 'otras-guias' }, 'También probá'),
    OTRAS_GUIAS.map(({ anio, guias }) => [
      h('h3', { class: 'otras-guias__anio' }, anio),
      h('ul', { class: 'otras-guias__lista' }, guias.map(([nombre, materia, slug]) =>
        h('li', { class: 'otras-guias__item' },
          h('a', { class: 'otras-guias__sitio', href: `https://franco704.github.io/${slug}/`, target: '_blank', rel: 'noopener' },
            h('strong', {}, nombre), h('span', {}, materia)),
          h('a', { class: 'otras-guias__repo', href: `https://github.com/Franco704/${slug}`, target: '_blank', rel: 'noopener', 'aria-label': `Repositorio de ${nombre}` }, 'repositorio')))),
    ]));

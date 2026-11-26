import { h } from '../ui/atomos/h.js';
import { reproductor } from '../ui/moleculas/video.js';
import { VIDEOS } from '../estudio/videos.js';
import { moduloPorId } from '../temario/indice.js';

export function vistaVideos(raiz) {
  document.title = 'Videos · Induciendo Ando';
  raiz.append(h('div', { class: 'pagina' },
    h('header', { class: 'pagina__cabecera' },
      h('h1', { class: 'pagina__titulo' }, 'Videos'),
      h('p', { class: 'pagina__bajada' }, 'Animaciones cortas, sin sonido y con subtítulos en pantalla, para ver una idea en movimiento antes de leer la teoría. Cada una también aparece en su módulo.')),
    h('div', { class: 'videos' }, VIDEOS.map((v) => {
      const m = moduloPorId(v.modulo);
      return h('section', { class: 'videos__item', dataset: { parcial: m.parcial } },
        h('a', { class: 'videos__modulo', href: `#/modulo/${m.id}` }, `TP ${m.tp}: ${m.titulo}`),
        reproductor(v));
    }))));
}

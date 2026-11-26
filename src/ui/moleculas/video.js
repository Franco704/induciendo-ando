import { h } from '../atomos/h.js';

// Video con portada; no descarga nada hasta que se reproduce (preload="none").
export const reproductor = (v) =>
  h('figure', { class: 'video' },
    h('video', { class: 'video__medio', controls: true, preload: 'none', playsinline: true, poster: `videos/${v.archivo}.jpg`, 'aria-label': v.titulo },
      h('source', { src: `videos/${v.archivo}.mp4`, type: 'video/mp4' })),
    h('figcaption', { class: 'video__pie' }, h('strong', {}, v.titulo), h('span', {}, v.resumen)));

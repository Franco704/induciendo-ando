import { h, svg, ICONOS } from '../atomos/h.js';
import { texto, tex } from '../atomos/matematica.js';
import * as controles from '../atomos/controles.js';
import { Lienzo2D } from '../../graficos/lienzo2d.js';

// Marco común de todo simulador (Template Method): el marco arma la estructura, maneja el ciclo de vida
// y libera lo que el simulador creó; cada simulador solo implementa montar(m).
// Contrato del simulador: { id, titulo, resumen, observa: [md], montar(m) -> (() => void)? }
// Coma decimal en todo número que se muestra (los toFixed de JavaScript usan punto)
export const coma = (v) => String(v).replace(/(\d)\.(\d)/g, '$1,$2');

export function marcoSimulador(lab, { compacto = false } = {}) {
  const vista = h('div', { class: 'lab__vista' });
  const panel = h('div', { class: 'lab__controles' });
  const lectura = h('div', { class: 'lab__lectura', 'aria-live': 'polite' });
  const raiz = h('section', { class: ['lab', compacto && 'lab--compacto'], 'aria-label': `Simulador: ${lab.titulo}` },
    !compacto && h('header', { class: 'lab__cabecera' },
      h('h3', { class: 'lab__titulo' }, svg(ICONOS.lab, { tam: 20 }), lab.titulo),
      lab.resumen && h('div', { class: 'prosa lab__resumen' }, texto(lab.resumen))),
    h('div', { class: 'lab__cuerpo' },
      vista,
      h('div', { class: 'lab__panel' }, panel, lectura,
        lab.observa?.length && h('details', { class: 'lab__observa', open: !compacto },
          h('summary', {}, 'Qué observar'),
          h('ul', {}, lab.observa.map((o) => h('li', {}, texto(o))))))));

  const recursos = [];
  const m = {
    vista, panel, h, tex, texto, ...controles,
    // Los gráficos que pide el laboratorio quedan registrados para liberarlos al salir.
    lienzo(opciones) { const l = new Lienzo2D(vista, opciones); recursos.push(l); return l; },
    // Bucle de animación con tiempo real (s). Se detiene solo al salir; con movimiento reducido avanza solo al pedirlo.
    animar(paso) {
      let id = 0, previo = 0, corriendo = true;
      const cuadro = (t) => {
        const dt = previo ? Math.min((t - previo) / 1000, 0.05) : 0;
        previo = t;
        if (corriendo) paso(dt);
        id = requestAnimationFrame(cuadro);
      };
      id = requestAnimationFrame(cuadro);
      const ctl = { destruir: () => cancelAnimationFrame(id), pausar: () => { corriendo = false; }, seguir: () => { corriendo = true; previo = 0; }, get corriendo() { return corriendo; } };
      recursos.push(ctl);
      return ctl;
    },
    quieto: matchMedia('(prefers-reduced-motion: reduce)').matches,
    leer(...nodos) { lectura.replaceChildren(...nodos.flat().filter((x) => x != null && x !== false)); },
    dato(etiqueta, valor) { return h('div', { class: 'dato' }, h('span', { class: 'dato__etiqueta' }, etiqueta), h('span', { class: 'dato__valor' }, coma(valor))); },
  };

  let limpiar = null;
  const montado = (async () => {
    try {
      limpiar = await lab.montar(m);
    } catch (e) {
      console.error(e);
      vista.replaceChildren(h('p', { class: 'lab__falla' }, 'Este simulador no pudo arrancar. Recargá la página; si sigue fallando, probá con otro navegador.'));
    }
  })();

  raiz.destruir = async () => {
    await montado;
    limpiar?.();
    recursos.forEach((r) => r.destruir());
  };
  return raiz;
}

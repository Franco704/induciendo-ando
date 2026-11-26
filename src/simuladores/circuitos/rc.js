import { num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Un capacitor se carga a través de una resistencia y después se descarga. La tensión del capacitor no puede saltar: crece y cae en forma **exponencial** con constante de tiempo $\tau=RC$. La animación recorre 5τ en unos 5 segundos, sea cual sea τ.`,
  observa: [
    r`En $t=\tau$ el capacitor llegó al $63\,\%$ de su carga; en $5\tau$, al $99{,}3\,\%$.`,
    'Al cerrar, la corriente arranca en ε/R como si el capacitor fuera un cable; al final vale cero como si fuera un corte.',
    'Durante la carga, la batería entrega Cε² y el capacitor se queda con la mitad: la otra mitad se disipa en R, valga lo que valga R.',
  ],
  montar(m) {
    let R = 1e6, C = 5e-6, eps = 30, modo = 'carga', t = 0, q0 = 0;
    const tau = () => R * C;
    const L = m.lienzo({ x: [0, 5], y: [-1.15, 1.15], proporcional: false, etiqueta: 'Tensión del capacitor y corriente en función del tiempo' });
    L.canvas.classList.add('lienzo--medio');
    const estado = (tt) => {
      const e = Math.exp(-tt / tau());
      if (modo === 'carga') { const q = C * eps + (q0 - C * eps) * e; return { q, i: (eps - q / C) / R }; }
      const q = q0 * e; return { q, i: -q / (R * C) };
    };
    const cambiar = (nuevo) => { q0 = estado(t).q; modo = nuevo; t = 0; };
    m.panel.append(
      m.h('div', { class: 'lab__botones' },
        m.boton('Cargar', () => cambiar('carga'), { variante: 'primario' }),
        m.boton('Descargar', () => cambiar('descarga')),
        m.boton('Reiniciar', () => { q0 = 0; modo = 'carga'; t = 0; }, { variante: 'fantasma', icono: 'reiniciar' })),
      m.deslizador({ etiqueta: 'R (MΩ)', min: 0.1, max: 5, paso: 0.1, valor: R / 1e6, alCambiar: (x) => { q0 = estado(t).q; t = 0; R = x * 1e6; } }),
      m.deslizador({ etiqueta: 'C (µF)', min: 1, max: 20, paso: 0.5, valor: C * 1e6, formato: (x) => x.toFixed(1), alCambiar: (x) => { q0 = estado(t).q * (x * 1e-6) / C; t = 0; C = x * 1e-6; } }),
      m.deslizador({ etiqueta: 'ε (V)', min: 1, max: 50, paso: 1, valor: eps, formato: (x) => x.toFixed(0), alCambiar: (x) => { q0 = estado(t).q; t = 0; eps = x; } }),
      m.h('p', { class: 'sim__leyenda' }, m.h('span', { style: { color: 'var(--elec)' } }, m.h('i'), 'v_C / ε'), m.h('span', { style: { color: 'var(--mag)' } }, m.h('i'), 'i / (ε/R)')));
    L.alDibujar((l) => {
      l.ejes({ marcas: false });
      for (let k = 1; k <= 5; k++) l.texto(`${k}τ`, [k, 0], { dy: 14, alinear: 'center', color: l.c.tintaSuave, tam: 11 });
      const vc = [], ii = [];
      for (let s = 0; s <= Math.min(t / tau(), 5); s += 0.01) {
        const e = estado(s * tau());
        vc.push([s, e.q / C / eps]);
        ii.push([s, (e.i * R) / eps]);
      }
      l.trazo([[0, 1], [5, 1]], { color: l.c.cuadricula, guiones: [4, 4] });
      l.trazo(vc, { color: l.c.elec, ancho: 2.5 });
      l.trazo(ii, { color: l.c.mag, ancho: 2.5 });
      const e = estado(t);
      m.leer(
        m.dato('τ = RC', `${num(tau())} s`),
        m.dato('t', `${num(t)} s = ${(t / tau()).toFixed(2)} τ`),
        m.dato('Carga q', `${num(e.q * 1e6)} µC`),
        m.dato('Tensión v_C', `${num(e.q / C)} V`),
        m.dato('Corriente i', `${num(e.i * 1e6)} µA`),
        m.dato('Energía en C', `${num((e.q * e.q) / (2 * C) * 1e3)} mJ`));
    });
    m.animar((dt) => {
      if (t / tau() >= 5) return;
      t = Math.min(5 * tau(), t + (m.quieto ? 5 * tau() : dt * tau()));
      L.redibujar();
    });
  },
};

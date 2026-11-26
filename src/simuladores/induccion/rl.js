import { num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Al cerrar el interruptor, la bobina se opone al **cambio** de corriente con una fem $-L\frac{di}{dt}$: la corriente no salta, crece con constante de tiempo $\tau=L/R$. Al abrirlo (con un camino que la deje circular), cae igual de suave. La animación recorre 5τ en unos 5 segundos.`,
  observa: [
    'Justo al cerrar, toda la tensión de la fuente está en la bobina y nada en la resistencia: la bobina actúa como un corte.',
    'Al final, la bobina ideal no tiene tensión: actúa como un cable y la corriente vale ε/R.',
    r`La energía guardada en el campo magnético es $\frac12Li^2$; al cortar, esa energía se disipa en la resistencia.`,
  ],
  montar(m) {
    let R = 50, Lh = 1.25e-3, eps = 35, modo = 'sube', t = 0, i0 = 0;
    const tau = () => Lh / R;
    const G = m.lienzo({ x: [0, 5], y: [-0.15, 1.15], proporcional: false, etiqueta: 'Corriente y tensión en la bobina en función del tiempo' });
    G.canvas.classList.add('lienzo--medio');
    const estado = (tt) => {
      const e = Math.exp(-tt / tau()), If = modo === 'sube' ? eps / R : 0;
      const i = If + (i0 - If) * e;
      return { i, vL: modo === 'sube' ? eps - i * R : -i * R };
    };
    const cambiar = (nuevo) => { i0 = estado(t).i; modo = nuevo; t = 0; };
    m.panel.append(
      m.h('div', { class: 'lab__botones' },
        m.boton('Cerrar', () => cambiar('sube'), { variante: 'primario' }),
        m.boton('Abrir', () => cambiar('baja')),
        m.boton('Reiniciar', () => { i0 = 0; modo = 'sube'; t = 0; }, { variante: 'fantasma', icono: 'reiniciar' })),
      m.deslizador({ etiqueta: 'R (Ω)', min: 5, max: 200, paso: 1, valor: R, formato: (x) => x.toFixed(0), alCambiar: (x) => { i0 = estado(t).i; t = 0; R = x; } }),
      m.deslizador({ etiqueta: 'L (mH)', min: 0.1, max: 10, paso: 0.05, valor: Lh * 1e3, alCambiar: (x) => { i0 = estado(t).i; t = 0; Lh = x * 1e-3; } }),
      m.deslizador({ etiqueta: 'ε (V)', min: 1, max: 50, paso: 1, valor: eps, formato: (x) => x.toFixed(0), alCambiar: (x) => { i0 = estado(t).i; t = 0; eps = x; } }),
      m.h('p', { class: 'sim__leyenda' }, m.h('span', { style: { color: 'var(--mag)' } }, m.h('i'), 'i / (ε/R)'), m.h('span', { style: { color: 'var(--elec)' } }, m.h('i'), '|v_L| / ε')));
    G.alDibujar((l) => {
      l.ejes({ marcas: false });
      for (let k = 1; k <= 5; k++) l.texto(`${k}τ`, [k, 0], { dy: 14, alinear: 'center', color: l.c.tintaSuave, tam: 11 });
      l.trazo([[0, 0.5], [5, 0.5]], { color: l.c.cuadricula, guiones: [3, 5] });
      const ii = [], vv = [];
      for (let s = 0; s <= Math.min(t / tau(), 5); s += 0.01) {
        const e = estado(s * tau());
        ii.push([s, (e.i * R) / eps]);
        vv.push([s, Math.abs(e.vL) / eps]);
      }
      l.trazo(ii, { color: l.c.mag, ancho: 2.5 });
      l.trazo(vv, { color: l.c.elec, ancho: 2.5 });
      const e = estado(t);
      m.leer(
        m.dato('τ = L/R', `${num(tau())} s`),
        m.dato('Media corriente en', `${num(tau() * Math.LN2)} s (τ·ln 2)`),
        m.dato('Corriente i', `${num(e.i * 1e3)} mA`),
        m.dato('Tensión en la bobina', `${num(e.vL)} V`),
        m.dato('Energía ½Li²', `${num(0.5 * Lh * e.i * e.i * 1e6)} µJ`));
    });
    m.animar((dt) => {
      if (t / tau() >= 5) return;
      t = Math.min(5 * tau(), t + (m.quieto ? 5 * tau() : dt * tau()));
      G.redibujar();
    });
  },
};

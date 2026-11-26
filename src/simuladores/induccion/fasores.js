import { rlcSerie } from '../../fisica/circuitos.js';
import { num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Un RLC serie con fuente de amplitud $V$. Cada tensión es un **fasor** que gira con $\omega$: $V_R$ en fase con la corriente, $V_L$ adelantada $90^\circ$ y $V_C$ atrasada $90^\circ$. La fuente es la suma vectorial. Abajo, la amplitud de corriente en función de $\omega$: el pico es la **resonancia**.`,
  observa: [
    r`En resonancia $X_L=X_C$, los fasores de L y C se cancelan, $Z=R$ y la corriente está en fase con la tensión.`,
    'Las tensiones en L y en C pueden ser mucho mayores que la de la fuente; lo que no puede superarla es V_R.',
    'Por debajo de la resonancia el circuito es capacitivo (la corriente adelanta); por encima, inductivo (la corriente atrasa).',
  ],
  montar(m) {
    let R = 240, Lh = 0.12, C = 7.3e-6, f = 400, fase = 0;
    const V = 155 * Math.SQRT2;
    const F = m.lienzo({ x: [-1.2, 1.2], y: [-1.2, 1.2], etiqueta: 'Diagrama de fasores de un RLC serie' });
    const G = m.lienzo({ x: [0, 3], y: [0, 1.1], proporcional: false, etiqueta: 'Curva de resonancia: corriente en función de la frecuencia' });
    G.canvas.classList.add('lienzo--bajo');
    m.panel.append(
      m.deslizador({ etiqueta: 'Frecuencia f (Hz)', min: 20, max: 600, paso: 1, valor: f, formato: (x) => x.toFixed(0), alCambiar: (x) => { f = x; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'R (Ω)', min: 10, max: 500, paso: 5, valor: R, formato: (x) => x.toFixed(0), alCambiar: (x) => { R = x; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'L (H)', min: 0.02, max: 0.5, paso: 0.005, valor: Lh, formato: (x) => x.toFixed(3), alCambiar: (x) => { Lh = x; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'C (µF)', min: 1, max: 30, paso: 0.1, valor: C * 1e6, formato: (x) => x.toFixed(1), alCambiar: (x) => { C = x * 1e-6; G.redibujar(); } }),
      m.h('p', { class: 'sim__leyenda' },
        m.h('span', { style: { color: 'var(--tinta-suave)' } }, m.h('i'), 'V_R'), m.h('span', { style: { color: 'var(--mas)' } }, m.h('i'), 'V_L'),
        m.h('span', { style: { color: 'var(--menos)' } }, m.h('i'), 'V_C'), m.h('span', { style: { color: 'var(--elec)' } }, m.h('i'), 'V fuente'), m.h('span', { style: { color: 'var(--mag)' } }, m.h('i'), 'I')));
    F.alDibujar((l) => {
      const s = rlcSerie({ R, L: Lh, C, V, w: 2 * Math.PI * f });
      const esc = 1 / Math.max(V, s.VL, s.VC, s.VR);
      const u = (ang, mod) => [mod * esc * Math.cos(ang), mod * esc * Math.sin(ang)];
      // La corriente gira con ωt; las tensiones, desplazadas respecto de ella
      const aI = fase, c = l.c;
      l.trazo(Array.from({ length: 121 }, (_, k) => [Math.cos((k * Math.PI) / 60), Math.sin((k * Math.PI) / 60)]), { color: c.cuadricula, ancho: 1 });
      const pR = u(aI, s.VR), pL = u(aI + Math.PI / 2, s.VL), pC = u(aI - Math.PI / 2, s.VC);
      l.flecha([0, 0], pR, { color: c.tintaSuave, ancho: 3 });
      l.flecha(pR, pL, { color: c.mas, ancho: 3 });
      l.flecha([pR[0] + pL[0], pR[1] + pL[1]], pC, { color: c.menos, ancho: 3 });
      l.flecha([0, 0], u(aI + s.fi, V), { color: c.elec, ancho: 3.5 });
      l.flecha([0, 0], [0.45 * Math.cos(aI), 0.45 * Math.sin(aI)], { color: c.mag, ancho: 2 });
      // Proyección vertical = valor instantáneo
      const vInst = V * Math.sin(aI + s.fi);
      l.trazo([[1.12, 0], [1.12, vInst * esc]], { color: c.elec, ancho: 5 });
      m.leer(
        m.dato('X_L = ωL', `${num(s.XL)} Ω`),
        m.dato('X_C = 1/ωC', `${num(s.XC)} Ω`),
        m.dato('Z', `${num(s.Z)} Ω`),
        m.dato('Fase φ (V respecto de I)', `${((s.fi * 180) / Math.PI).toFixed(1)}°, ${Math.abs(s.fi) < 0.01 ? 'resonancia' : s.fi > 0 ? 'inductivo' : 'capacitivo'}`),
        m.dato('I eficaz', `${num(s.I / Math.SQRT2)} A`),
        m.dato('Potencia media', `${num(((s.I / Math.SQRT2) ** 2) * R)} W`),
        m.dato('f de resonancia', `${num(s.w0 / (2 * Math.PI))} Hz`));
    });
    G.alDibujar((l) => {
      const w0 = 1 / Math.sqrt(Lh * C), Imax = V / R;
      l.ejes({ marcas: false });
      const pts = [];
      for (let k = 0.02; k <= 3; k += 0.005) pts.push([k, rlcSerie({ R, L: Lh, C, V, w: k * w0 }).I / Imax]);
      l.trazo(pts, { color: l.c.mag, ancho: 2.5 });
      const k = (2 * Math.PI * f) / w0;
      l.punto([Math.min(k, 3), rlcSerie({ R, L: Lh, C, V, w: 2 * Math.PI * f }).I / Imax], { color: l.c.elec });
      l.texto('ω₀', [1, 0], { dy: 14, alinear: 'center', color: l.c.tintaSuave });
      l.texto('I / I_máx', [0.05, 1.03], { color: l.c.tintaSuave, tam: 11 });
    });
    m.animar((dt) => {
      if (!m.quieto) fase += dt * 1.2;
      F.redibujar();
    });
  },
};

import { rlcLibre, rCritica } from '../../fisica/circuitos.js';
import { num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Un capacitor cargado se conecta a una bobina. La energía pasa del campo eléctrico del capacitor ($\frac{q^2}{2C}$) al magnético de la bobina ($\frac12Li^2$) y vuelve, como un resorte: $\omega=\frac1{\sqrt{LC}}$. Con resistencia, cada ida y vuelta pierde un poco y la oscilación se apaga.`,
  observa: [
    'Cuando el capacitor está descargado la corriente es máxima: toda la energía está en la bobina.',
    r`Con $R$ chica, la amplitud cae como $e^{-Rt/2L}$ (la curva punteada). Con $R\ge2\sqrt{L/C}$ ya no oscila: amortiguamiento crítico o sobreamortiguado.`,
    'La energía se reparte por igual (mitad en cada uno) a 1/8 del período: q = Q/√2.',
  ],
  montar(m) {
    let Lh = 25e-3, C = 7.5e-9, R = 0, t = 0;
    const Q0 = 9e-8;
    const G = m.lienzo({ x: [0, 4], y: [-1.15, 1.15], proporcional: false, etiqueta: 'Carga del capacitor en función del tiempo' });
    G.canvas.classList.add('lienzo--medio');
    m.panel.append(
      m.deslizador({ etiqueta: 'L (mH)', min: 5, max: 100, paso: 1, valor: Lh * 1e3, formato: (x) => x.toFixed(0), alCambiar: (x) => { Lh = x * 1e-3; t = 0; } }),
      m.deslizador({ etiqueta: 'C (nF)', min: 1, max: 20, paso: 0.5, valor: C * 1e9, formato: (x) => x.toFixed(1), alCambiar: (x) => { C = x * 1e-9; t = 0; } }),
      m.deslizador({ etiqueta: 'R (Ω)', min: 0, max: 6000, paso: 10, valor: R, formato: (x) => x.toFixed(0), alCambiar: (x) => { R = x; t = 0; } }));
    G.alDibujar((l) => {
      const T = 2 * Math.PI * Math.sqrt(Lh * C);
      l.ejes({ marcas: false });
      for (let k = 1; k <= 4; k++) l.texto(`${k}T`, [k, 0], { dy: 14, alinear: 'center', color: l.c.tintaSuave, tam: 11 });
      const pts = [], env = [];
      for (let s = 0; s <= 4; s += 0.005) {
        pts.push([s, rlcLibre(Q0, R, Lh, C, s * T).q / Q0]);
        env.push([s, Math.exp((-R * s * T) / (2 * Lh))]);
      }
      if (R > 0) l.trazo(env, { color: l.c.tintaSuave, guiones: [4, 4], ancho: 1.2 });
      l.trazo(pts.filter(([s]) => s <= t / T), { color: l.c.elec, ancho: 2.5 });
      const e = rlcLibre(Q0, R, Lh, C, t);
      const uC = (e.q * e.q) / (2 * C), uL = 0.5 * Lh * e.i * e.i, U0 = (Q0 * Q0) / (2 * C);
      // Barras de energía a la derecha
      const x0 = 3.55, alto = 1.8;
      l.rect(x0, -0.9, 0.16, alto * (uC / U0), { relleno: l.c.elec });
      l.rect(x0 + 0.22, -0.9, 0.16, alto * (uL / U0), { relleno: l.c.mag });
      l.texto('U_C', [x0 + 0.08, -0.9], { dy: 14, alinear: 'center', tam: 11 });
      l.texto('U_L', [x0 + 0.3, -0.9], { dy: 14, alinear: 'center', tam: 11 });
      m.leer(
        m.dato('ω₀ = 1/√(LC)', `${num(e.w0)} rad/s`),
        m.dato('Período T', `${num(T)} s`),
        R > 0 && m.dato('R crítica 2√(L/C)', `${num(rCritica(Lh, C))} Ω`),
        m.dato('Carga q', `${num(e.q * 1e9)} nC`),
        m.dato('Corriente i', `${num(e.i * 1e3)} mA`),
        m.dato('Energía total', `${num((uC + uL) * 1e9)} nJ`));
    });
    m.animar((dt) => {
      const T = 2 * Math.PI * Math.sqrt(Lh * C);
      if (t >= 4 * T) return;
      t = Math.min(4 * T, t + (m.quieto ? 4 * T : (dt * T) / 1.5));
      G.redibujar();
    });
  },
};

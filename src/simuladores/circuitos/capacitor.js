import { EPS0, num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Un capacitor de placas de $100\ \text{cm}^2$ separadas $1$ mm se carga a $100$ V. Después se mete un dieléctrico de a poco. Lo que pasa depende de si la batería **sigue conectada** ($V$ fijo) o se **desconectó** antes ($Q$ fijo). El dieléctrico ocupa una fracción del área: son dos capacitores en paralelo, $C=\frac{\varepsilon_0A}{d}\left[(1-f)+\kappa f\right]$.`,
  observa: [
    'Conectado: V no cambia, C crece y la batería entrega más carga. La energía almacenada aumenta.',
    'Desconectado: Q queda atrapada, C crece y V baja. La energía disminuye: el capacitor "chupa" al dieléctrico hacia adentro.',
    r`El campo entre placas es $V/d$ en ambas zonas. En el dieléctrico aparece carga inducida en sus caras, $\sigma_i=\sigma\left(1-\frac1\kappa\right)$, que reduce el campo.`,
  ],
  montar(m) {
    const A = 0.01, d = 1e-3, V0 = 100, C0 = (EPS0 * A) / d, Q0 = C0 * V0;
    let f = 0, kappa = 4, conectado = true;
    const L = m.lienzo({ x: [-1.2, 1.2], y: [-0.75, 0.75], etiqueta: 'Capacitor de placas con un dieléctrico que entra de costado' });
    L.canvas.classList.add('lienzo--medio');
    m.panel.append(
      m.selector({ etiqueta: 'Batería', opciones: [['si', 'Conectada (V fijo)'], ['no', 'Desconectada (Q fijo)']], valor: 'si', alCambiar: (v) => { conectado = v === 'si'; L.redibujar(); } }),
      m.deslizador({ etiqueta: 'Fracción con dieléctrico f', min: 0, max: 1, paso: 0.01, valor: f, alCambiar: (v) => { f = v; L.redibujar(); } }),
      m.deslizador({ etiqueta: 'Constante dieléctrica κ', min: 1, max: 10, paso: 0.1, valor: kappa, formato: (v) => v.toFixed(1), alCambiar: (v) => { kappa = v; L.redibujar(); } }));
    L.alDibujar((l) => {
      const c = l.c, C = C0 * ((1 - f) + kappa * f);
      const Q = conectado ? C * V0 : Q0, V = Q / C, E = V / d;
      const sigInd = kappa * EPS0 * E * (1 - 1 / kappa);
      const x0 = -1, x1 = 1, xd = x1 - 2 * f; // el dieléctrico entra desde la derecha
      l.rect(x0, 0.32, 2, 0.06, { relleno: c.mas });
      l.rect(x0, -0.38, 2, 0.06, { relleno: c.menos });
      if (f > 0) l.rect(xd, -0.32, x1 - xd, 0.64, { relleno: c.mag, borde: c.mag, ancho: 1.5 });
      // Flechas de campo: cuantas más, más intenso (la densidad es proporcional a E)
      const n = Math.max(2, Math.round(E / 2.5e4));
      for (let k = 0; k < n; k++) {
        const x = x0 + ((k + 0.5) * 2) / n;
        l.flecha([x, 0.28], [0, -0.56], { color: x > xd && f > 0 ? c.papel : c.elec, ancho: 1.6, cabeza: 7 });
      }
      // Cargas libres en las placas (más densas donde está el dieléctrico)
      for (let k = 0; k < 14; k++) {
        const x = x0 + ((k + 0.5) * 2) / 14;
        l.texto('+', [x, 0.42], { color: c.mas, alinear: 'center', tam: x > xd && f > 0 ? 16 : 12 });
        l.texto('−', [x, -0.52], { color: c.menos, alinear: 'center', tam: x > xd && f > 0 ? 16 : 12 });
      }
      if (f > 0.05) l.texto(`κ = ${kappa.toFixed(1)}`, [(xd + x1) / 2, -0.02], { color: c.papel, alinear: 'center', contorno: false });
      l.texto(conectado ? 'V fijo: 100 V' : 'Q fijo', [-1.15, 0.62], { color: c.tintaSuave });
      m.leer(
        m.dato('Capacidad C', `${num(C * 1e12)} pF`),
        m.dato('Carga Q', `${num(Q * 1e9)} nC`),
        m.dato('Tensión V', `${num(V)} V`),
        m.dato('Campo E entre placas', `${num(E)} V/m`),
        m.dato('Energía U = ½CV²', `${num(0.5 * C * V * V * 1e6)} µJ`),
        f > 0 && m.dato('σ inducida en el dieléctrico', `${num(sigInd * 1e6)} µC/m²`));
    });
  },
};

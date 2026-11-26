import { gauss } from '../../fisica/electrostatica.js';
import { K, num } from '../../fisica/constantes.js';

const r = String.raw;
const CASOS = {
  maciza: { nombre: 'Esfera aislante maciza', E: (Q, a, x) => gauss.esferaMaciza(Q, a, x), enc: (Q, a, x) => (x < a ? Q * (x / a) ** 3 : Q) },
  conductora: { nombre: 'Esfera conductora (o cascarón)', E: (Q, a, x) => gauss.cascaron(Q, a, x), enc: (Q, a, x) => (x < a ? 0 : Q) },
  hueca: { nombre: 'Esfera + cascarón conductor (b = 2a, c = 3a)', E: (Q, a, x) => (x < a || (x > 2 * a && x < 3 * a) ? 0 : (K * Q) / (x * x)), enc: (Q, a, x) => (x < a || (x > 2 * a && x < 3 * a) ? 0 : Q) },
};

export default {
  resumen: r`Elegí una distribución con simetría esférica y mové el radio $r$ de la superficie gaussiana (el círculo punteado). Por simetría $E$ es igual en toda la superficie, así que $E\cdot4\pi r^2=Q_{enc}/\varepsilon_0$. Abajo, la gráfica $E(r)$.`,
  observa: [
    r`Dentro de la esfera maciza, $E$ crece **lineal** con $r$: la carga encerrada crece como $r^3$ y el área como $r^2$.`,
    'En un conductor la carga se va a la superficie y adentro E = 0. Con el cascarón, dentro del metal también E = 0: por eso la superficie interior se carga con −Q.',
    'Afuera, todas dan lo mismo que una carga puntual: la gaussiana solo "ve" la carga encerrada.',
  ],
  montar(m) {
    let caso = 'maciza', rg = 0.6;
    const a = 0.3, Q = 1e-9;
    const dib = m.lienzo({ x: [-1.2, 1.2], y: [-1.2, 1.2], etiqueta: 'Distribución de carga y superficie gaussiana' });
    const graf = m.lienzo({ x: [0, 1.2], y: [0, 1.15], proporcional: false, etiqueta: 'Gráfica del campo en función del radio' });
    graf.canvas.classList.add('lienzo--bajo');
    m.panel.append(
      m.selector({ etiqueta: 'Distribución', opciones: Object.entries(CASOS).map(([k, c]) => [k, c.nombre]), valor: caso, alCambiar: (v) => { caso = v; todo(); } }),
      m.deslizador({ etiqueta: 'Radio de la gaussiana r (m)', min: 0.02, max: 1.15, paso: 0.01, valor: rg, alCambiar: (v) => { rg = v; todo(); } }));
    const todo = () => { dib.redibujar(); graf.redibujar(); };
    dib.alDibujar((l) => {
      const c = l.c;
      const circ = (R) => Array.from({ length: 121 }, (_, i) => [R * Math.cos((i * Math.PI) / 60), R * Math.sin((i * Math.PI) / 60)]);
      if (caso === 'hueca') {
        // El metal del cascarón: un anillo gris entre 2a y 3a, con −Q adentro y +Q afuera
        l.trazo(circ(3 * a), { color: c.mas, ancho: 3, relleno: c.tintaSuave, opacidad: 0.25 });
        l.trazo(circ(2 * a), { color: c.menos, ancho: 3, relleno: c.papel });
      }
      if (caso === 'maciza') l.trazo(circ(a), { color: c.mas, relleno: c.mas, opacidad: 0.25 });
      else l.trazo(circ(a), { color: c.mas, ancho: 4, relleno: c.tintaSuave, opacidad: 0.25 });
      l.trazo(circ(rg), { color: c.elec, ancho: 2, guiones: [6, 5] });
      const E = CASOS[caso].E(Q, a, rg);
      if (E > 1e-9) for (let k = 0; k < 8; k++) {
        const t = (k * Math.PI) / 4, len = 0.08 + 0.22 * Math.min(1, E / CASOS[caso].E(Q, a, a + 1e-6));
        l.flecha([rg * Math.cos(t), rg * Math.sin(t)], [len * Math.cos(t), len * Math.sin(t)], { color: c.elec, ancho: 2 });
      }
      m.leer(
        m.dato('Carga encerrada', `${num(CASOS[caso].enc(Q, a, rg) * 1e9)} nC (de 1 nC)`),
        m.dato('Flujo Φ = Q_enc/ε₀', `${num(CASOS[caso].enc(Q, a, rg) / 8.854e-12)} N·m²/C`),
        m.dato('E en la gaussiana', `${num(E)} N/C`));
    });
    graf.alDibujar((l) => {
      const f = (x) => CASOS[caso].E(Q, a, x) / CASOS.maciza.E(Q, a, a);
      l.ejes({ marcas: false });
      const pts = [];
      for (let x = 0.002; x <= 1.2; x += 0.002) pts.push([x, f(x)]);
      l.trazo(pts, { color: l.c.elec, ancho: 2.5 });
      l.trazo([[rg, 0], [rg, 1.1]], { color: l.c.tintaSuave, guiones: [4, 4] });
      l.punto([rg, f(rg)], { color: l.c.mag });
      l.texto('E(r)', [0.02, 1.05], { color: l.c.tintaSuave });
      l.texto('r', [1.15, 0.05], { color: l.c.tintaSuave });
      l.texto('a', [a, 0], { dy: 14, alinear: 'center', color: l.c.tintaSuave });
    });
  },
};

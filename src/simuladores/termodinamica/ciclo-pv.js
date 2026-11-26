import { proceso } from '../../fisica/termodinamica.js';
import { R, num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Un mol de gas ideal parte de $1$ atm y $300$ K y llega a otro volumen por un proceso. El **trabajo** que hace el gas es el área bajo la curva en el diagrama $p$–$V$ (sombreada); el primer principio reparte el calor: $Q=\Delta U+W$.`,
  observa: [
    'Isotérmico: ΔU = 0 y todo el calor que entra sale como trabajo.',
    'Adiabático: Q = 0. Si el gas se expande, hace trabajo a costa de su energía interna y se enfría; la curva cae más empinada que la isoterma.',
    'Isocórico: no hay área, W = 0. Isobárico: el área es un rectángulo, W = pΔV.',
  ],
  montar(m) {
    let tipo = 'isotermico', V2 = 44.8, gas = 'mono', T2iso = 600;
    const n = 1, T1 = 300, V1 = 0.0224;
    const G = m.lienzo({ x: [0, 70], y: [0, 3.2], proporcional: false, etiqueta: 'Diagrama presión-volumen de un proceso' });
    G.canvas.classList.add('lienzo--medio');
    const dV = m.deslizador({ etiqueta: 'Volumen final (L)', min: 8, max: 65, paso: 0.2, valor: V2, formato: (x) => x.toFixed(1), alCambiar: (x) => { V2 = x; G.redibujar(); } });
    const dT = m.deslizador({ etiqueta: 'Temperatura final (K)', min: 100, max: 900, paso: 5, valor: T2iso, formato: (x) => x.toFixed(0), alCambiar: (x) => { T2iso = x; G.redibujar(); } });
    dT.hidden = true;
    m.panel.append(
      m.selector({ etiqueta: 'Proceso', opciones: [['isotermico', 'Isotérmico'], ['isobarico', 'Isobárico'], ['adiabatico', 'Adiabático'], ['isocorico', 'Isocórico']], valor: tipo, alCambiar: (x) => { tipo = x; dV.hidden = x === 'isocorico'; dT.hidden = x !== 'isocorico'; G.redibujar(); } }),
      m.selector({ etiqueta: 'Gas', opciones: [['mono', 'Monoatómico (γ = 5/3)'], ['di', 'Diatómico (γ = 7/5)']], valor: gas, alCambiar: (x) => { gas = x; G.redibujar(); } }),
      dV, dT);
    G.alDibujar((l) => {
      const cv = gas === 'mono' ? 1.5 * R : 2.5 * R, P1 = (n * R * T1) / V1;
      const V2m = V2 / 1000;
      const res = tipo === 'isocorico' ? proceso('isocorico', { n, T1, T2: T2iso, V1, cv }) : proceso(tipo, { n, T1, V1, V2: V2m, cv });
      const atm = (p) => p / 101325, L = (v) => v * 1000;
      const curva = [];
      const g = (cv + R) / cv;
      if (tipo === 'isocorico') curva.push([L(V1), atm(P1)], [L(V1), atm(res.P2)]);
      else for (let k = 0; k <= 200; k++) {
        const v = V1 + ((V2m - V1) * k) / 200;
        const p = tipo === 'isotermico' ? (n * R * T1) / v : tipo === 'isobarico' ? P1 : P1 * (V1 / v) ** g;
        curva.push([L(v), atm(p)]);
      }
      // Isoterma de referencia a 300 K
      const iso = [];
      for (let v = 8; v <= 68; v += 0.5) iso.push([v, atm((n * R * T1) / (v / 1000))]);
      l.ejes({ marcas: true });
      l.trazo(iso, { color: l.c.cuadricula, guiones: [4, 4] });
      if (tipo !== 'isocorico') l.trazo([...curva, [curva.at(-1)[0], 0], [curva[0][0], 0]], { color: null, relleno: l.c.mag, opacidad: 0.18, cerrar: true });
      l.trazo(curva, { color: l.c.mag, ancho: 3 });
      l.punto(curva[0], { color: l.c.tinta, texto: '1' });
      l.punto(curva.at(-1), { color: l.c.mag, texto: '2' });
      l.texto('p (atm)', [1, 3.05], { color: l.c.tintaSuave, tam: 11 });
      l.texto('V (L)', [66, 0.12], { color: l.c.tintaSuave, tam: 11 });
      m.leer(
        m.dato('Trabajo del gas W', `${num(res.W)} J`),
        m.dato('ΔU = n c_v ΔT', `${num(res.dU)} J`),
        m.dato('Calor recibido Q', `${num(res.Q)} J`),
        m.dato('Temperatura final', `${num(res.T2)} K`),
        m.dato('Presión final', `${num(atm(res.P2))} atm`));
    });
  },
};

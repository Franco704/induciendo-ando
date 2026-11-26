import { malus } from '../../fisica/optica.js';

const r = String.raw;
const rad = (g) => (g * Math.PI) / 180;

export default {
  resumen: r`La luz atraviesa hasta tres polarizadores. Cada uno deja pasar solo la componente del campo paralela a su eje: $I=I_0\cos^2\phi$ (**Malus**), donde $\phi$ es el ángulo entre la polarización que llega y su eje. Si la luz llega sin polarizar, el primero deja pasar la mitad.`,
  observa: [
    'Dos polarizadores cruzados (0° y 90°) no dejan pasar nada.',
    r`Poné uno a $45^\circ$ **entre** los cruzados: ¡vuelve a pasar luz! Pasa $\frac{I_0}{2}\cos^2 45^\circ\cos^2 45^\circ=\frac{I_0}{8}$.`,
    'El TP 17 ej. 1 pide el del medio a 62°: pasa el 8,5 % de la luz incidente.',
  ],
  montar(m) {
    const ang = [0, 62, 90];
    let usados = 3, polarizada = false;
    const L = m.lienzo({ x: [0, 10], y: [-2, 2], proporcional: false, etiqueta: 'Haz de luz que atraviesa polarizadores' });
    L.canvas.classList.add('lienzo--medio');
    const angs = ang.map((a, i) => m.deslizador({ etiqueta: `Eje del polarizador ${i + 1} (°)`, min: 0, max: 180, paso: 1, valor: a, formato: (x) => x.toFixed(0), alCambiar: (x) => { ang[i] = x; L.redibujar(); } }));
    m.panel.append(
      m.selector({ etiqueta: 'Luz que llega', opciones: [['no', 'No polarizada'], ['si', 'Polarizada vertical']], valor: 'no', alCambiar: (x) => { polarizada = x === 'si'; L.redibujar(); } }),
      m.selector({ etiqueta: 'Polarizadores', opciones: [['1', 'Uno'], ['2', 'Dos'], ['3', 'Tres']], valor: '3', alCambiar: (x) => { usados = +x; angs.forEach((d, i) => { d.hidden = i >= usados; }); L.redibujar(); } }),
      ...angs);
    L.alDibujar((l) => {
      const c = l.c, xs = [2.5, 5, 7.5].slice(0, usados);
      const intens = [1];
      for (let i = 0; i < usados; i++) intens.push(malus(1, ang.slice(0, i + 1).map(rad), { polarizada, angulo0: rad(90) }));
      const tramos = [0, ...xs, 10];
      for (let i = 0; i < tramos.length - 1; i++) {
        const I = intens[i];
        l.rect(tramos[i], -0.35, tramos[i + 1] - tramos[i], 0.7, { relleno: c.acento3, opacidad: 0.08 + 0.7 * I });
        // Dirección de oscilación del campo en ese tramo
        const eje = i === 0 ? (polarizada ? 90 : null) : ang[i - 1];
        const xm = (tramos[i] + tramos[i + 1]) / 2;
        if (eje === null) for (const g of [0, 45, 90, 135]) l.trazo([[xm - 0.3 * Math.cos(rad(g)), -0.3 * 1.4 * Math.sin(rad(g)) + 1.2], [xm + 0.3 * Math.cos(rad(g)), 0.3 * 1.4 * Math.sin(rad(g)) + 1.2]], { color: c.elec, ancho: 2 });
        else if (I > 1e-4) l.trazo([[xm - 0.4 * Math.sqrt(I) * Math.cos(rad(eje)), 1.2 - 0.56 * Math.sqrt(I) * Math.sin(rad(eje))], [xm + 0.4 * Math.sqrt(I) * Math.cos(rad(eje)), 1.2 + 0.56 * Math.sqrt(I) * Math.sin(rad(eje))]], { color: c.elec, ancho: 3 });
        l.texto(`${(100 * I).toFixed(1)} %`, [xm, -0.7], { alinear: 'center', tam: 12 });
      }
      xs.forEach((x, i) => {
        l.rect(x - 0.12, -1.4, 0.24, 2.8, { relleno: c.tintaSuave, opacidad: 0.35 });
        const a = rad(ang[i]);
        l.trazo([[x - 0.45 * Math.cos(a), -1.75 - 0.25 * Math.sin(a)], [x + 0.45 * Math.cos(a), -1.75 + 0.25 * Math.sin(a)]], { color: c.tinta, ancho: 2.5 });
        l.texto(`${ang[i]}°`, [x, -1.95], { alinear: 'center', tam: 11, dy: 12 });
      });
      m.leer(intens.slice(1).map((I, i) => m.dato(`Después del polarizador ${i + 1}`, `${(100 * I).toFixed(2)} % de I₀`)));
    });
  },
};

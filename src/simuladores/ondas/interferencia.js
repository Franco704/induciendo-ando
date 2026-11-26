import { intensidadRendijas } from '../../fisica/optica.js';
import { num } from '../../fisica/constantes.js';

const r = String.raw;

// Color aproximado de una longitud de onda visible (nm)
export function colorDe(nm) {
  let R = 0, G = 0, B = 0;
  if (nm < 440) { R = (440 - nm) / 60; B = 1; } else if (nm < 490) { G = (nm - 440) / 50; B = 1; } else if (nm < 510) { G = 1; B = (510 - nm) / 20; } else if (nm < 580) { R = (nm - 510) / 70; G = 1; } else if (nm < 645) { R = 1; G = (645 - nm) / 65; } else R = 1;
  return `rgb(${Math.round(R * 255)}, ${Math.round(G * 255)}, ${Math.round(B * 255)})`;
}

export default {
  resumen: r`Luz de longitud de onda $\lambda$ atraviesa $N$ rendijas de ancho $a$ separadas $d$ y llega a una pantalla a distancia $L$. Hay **máximo** donde la diferencia de camino entre rendijas vecinas es un número entero de longitudes de onda: $d\operatorname{sen}\theta=m\lambda$. El ancho de cada rendija agrega la envolvente de difracción, con mínimos en $a\operatorname{sen}\theta=m\lambda$.`,
  observa: [
    'Con más rendijas, los máximos principales quedan en el mismo lugar pero se vuelven mucho más finos: así funciona una red de difracción.',
    r`Si $d$ es múltiplo de $a$, algunos máximos de interferencia caen justo en un mínimo de difracción y desaparecen (órdenes faltantes).`,
    'Con luz roja las franjas se separan más que con azul: y = mλL/d.',
  ],
  montar(m) {
    let N = 2, d = 0.25e-3, a = 0.05e-3, lambda = 589e-9, Lp = 2;
    const G = m.lienzo({ x: [-0.03, 0.03], y: [-0.08, 1.12], proporcional: false, etiqueta: 'Intensidad sobre la pantalla en función de la posición' });
    G.canvas.classList.add('lienzo--medio');
    m.panel.append(
      m.selector({ etiqueta: 'Rendijas', opciones: [['1', '1'], ['2', '2'], ['3', '3'], ['5', '5'], ['10', '10']], valor: '2', alCambiar: (x) => { N = +x; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'λ (nm)', min: 400, max: 700, paso: 1, valor: 589, formato: (x) => x.toFixed(0), alCambiar: (x) => { lambda = x * 1e-9; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'Separación d (mm)', min: 0.05, max: 1, paso: 0.01, valor: d * 1e3, alCambiar: (x) => { d = x * 1e-3; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'Ancho a (mm, 0 = muy angostas)', min: 0, max: 0.2, paso: 0.005, valor: a * 1e3, formato: (x) => x.toFixed(3), alCambiar: (x) => { a = x * 1e-3; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'Distancia a la pantalla L (m)', min: 0.5, max: 4, paso: 0.1, valor: Lp, formato: (x) => x.toFixed(1), alCambiar: (x) => { Lp = x; G.redibujar(); } }));
    G.alDibujar((l) => {
      const color = colorDe(lambda * 1e9), pts = [];
      const I = (y) => intensidadRendijas(Math.atan(y / Lp), { N, d, a: N === 1 && !a ? 0.05e-3 : a, lambda });
      for (let k = 0; k <= 1200; k++) { const y = -0.03 + (0.06 * k) / 1200; pts.push([y, I(y)]); }
      // Franja de la pantalla vista de frente
      for (let k = 0; k < 400; k++) {
        const y = -0.03 + (0.06 * k) / 400;
        l.rect(y, -0.075, 0.06 / 400 + 1e-6, 0.06, { relleno: color, opacidad: Math.min(1, I(y)) });
      }
      l.trazo(pts, { color: l.c.tinta, ancho: 1.8 });
      [-0.02, -0.01, 0.01, 0.02].forEach((y) => l.texto(`${y * 1000} mm`, [y, 0], { dy: -6, alinear: 'center', color: l.c.tintaSuave, tam: 10 }));
      const ancho = N === 1 ? (a || 0.05e-3) : d;
      const y1 = (lambda * Lp) / ancho;
      m.leer(
        N > 1 ? m.dato('Separación entre máximos λL/d', `${num(y1 * 1000)} mm`) : m.dato('Primer mínimo λL/a', `${num(y1 * 1000)} mm`),
        N > 1 && a > 0 && m.dato('Primer cero de difracción λL/a', `${num(((lambda * Lp) / a) * 1000)} mm`),
        m.dato('Ángulo del primer orden', `${num((Math.asin(Math.min(1, lambda / ancho)) * 180) / Math.PI)}°`));
    });
  },
};

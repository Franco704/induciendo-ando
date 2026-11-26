import { resolverRed } from '../../fisica/circuitos.js';
import { num } from '../../fisica/constantes.js';
import { cable, resistor, bateria, corriente } from './esquema.js';

const r = String.raw;

// Tres ramas en paralelo entre el nodo de arriba (1) y el de abajo (0): ε1 + R1, R3 y ε2 + R2.
export default {
  resumen: r`El circuito clásico de dos mallas. Con un solo nodo incógnita alcanza: la tensión $V$ entre los nodos sale de $\sum I=0$, y cada corriente de su rama. Cambiá fem y resistencias y mirá cómo se invierten las corrientes.`,
  observa: [
    r`Si una corriente da negativa, el sentido supuesto era el contrario: el método no falla, solo lo avisa el signo.`,
    r`La potencia que entregan las fuentes ($\varepsilon I$) es igual a la que disipan las resistencias ($I^2R$): conservación de la energía.`,
    'Con ε2 grande, la fuente de la izquierda puede terminar absorbiendo energía (se carga, como la batería descargada del ejercicio de los cables pasacorriente).',
  ],
  montar(m) {
    const v = { e1: 12, e2: 6, R1: 2, R2: 4, R3: 6 };
    const L = m.lienzo({ x: [-0.4, 2.4], y: [-0.25, 1.25], etiqueta: 'Circuito de dos mallas con sus corrientes' });
    L.canvas.classList.add('lienzo--medio');
    const desl = (k, etiqueta, min, max, paso) => m.deslizador({ etiqueta, min, max, paso, valor: v[k], formato: (x) => x.toFixed(1), alCambiar: (x) => { v[k] = x; L.redibujar(); } });
    m.panel.append(desl('e1', 'ε₁ (V)', 0, 24, 0.5), desl('e2', 'ε₂ (V)', 0, 24, 0.5), desl('R1', 'R₁ (Ω)', 0.5, 20, 0.5), desl('R2', 'R₂ (Ω)', 0.5, 20, 0.5), desl('R3', 'R₃ (Ω)', 0.5, 20, 0.5));
    L.alDibujar((l) => {
      // Ramas de abajo (0) hacia arriba (1); la fem empuja de 0 a 1
      const { V, I } = resolverRed(2, [
        { a: 0, b: 1, R: v.R1, fem: v.e1 },
        { a: 0, b: 1, R: v.R3 },
        { a: 0, b: 1, R: v.R2, fem: v.e2 },
      ]);
      cable(l, [[0, 1], [2, 1]]);
      cable(l, [[0, 0], [2, 0]]);
      bateria(l, [0, 0], [0, 0.45], { positivo: 'b', etiqueta: `ε₁ = ${v.e1} V` });
      resistor(l, [0, 0.45], [0, 1], { etiqueta: `R₁ = ${v.R1} Ω` });
      resistor(l, [1, 0], [1, 1], { etiqueta: `R₃ = ${v.R3} Ω` });
      bateria(l, [2, 0], [2, 0.45], { positivo: 'b', etiqueta: `ε₂ = ${v.e2} V` });
      resistor(l, [2, 0.45], [2, 1], { etiqueta: `R₂ = ${v.R2} Ω` });
      [[0, 1], [1, 1], [2, 1], [1, 0]].forEach((p) => l.punto(p, { radio: 4 }));
      corriente(l, [-0.12, 0.8], [0, 1], I[0]);
      corriente(l, [0.88, 0.25], [0, 1], I[1]);
      corriente(l, [1.88, 0.8], [0, 1], I[2]);
      const Pf = v.e1 * I[0] + v.e2 * I[2], Pr = I[0] ** 2 * v.R1 + I[1] ** 2 * v.R3 + I[2] ** 2 * v.R2;
      m.leer(
        m.dato('I₁ (sube por ε₁)', `${num(I[0])} A`),
        m.dato('I₃ (sube por R₃)', `${num(I[1])} A`),
        m.dato('I₂ (sube por ε₂)', `${num(I[2])} A`),
        m.dato('V arriba − V abajo', `${num(V[1])} V`),
        m.dato('Potencia de las fuentes', `${num(Pf)} W`),
        m.dato('Potencia en resistencias', `${num(Pr)} W`));
    });
  },
};

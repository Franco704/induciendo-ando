import { num } from '../../fisica/constantes.js';

const r = String.raw;

// TP 15, ejercicio 5: 1,2 MW enviados a 7 km por dos cables de 0,05 Ω/km.
export default {
  resumen: r`Un transformador ideal conserva la potencia: $\frac{V_2}{V_1}=\frac{N_2}{N_1}=\frac{I_1}{I_2}$. Por eso se eleva la tensión para transmitir: con la misma potencia, la corriente baja y las pérdidas en los cables, $I^2R$, caen con el **cuadrado** de la relación de vueltas.`,
  observa: [
    'Con 1200 V se pierde más de la mitad de la potencia en los cables; elevando 100 veces, la pérdida baja 10 000 veces.',
    'Un elevador sube la tensión pero baja la corriente en la misma proporción: no "crea" energía.',
    'Con corriente continua no hay flujo variable y el transformador no funciona: por eso la red es alterna.',
  ],
  montar(m) {
    let P = 1.2e6, V = 1200, rel = 1, Rkm = 0.05, km = 7;
    const L = m.lienzo({ x: [0, 10], y: [0, 4], proporcional: false, etiqueta: 'Transformador elevador, línea de transmisión y pérdidas' });
    L.canvas.classList.add('lienzo--medio');
    m.panel.append(
      m.deslizador({ etiqueta: 'Relación de vueltas N₂/N₁', min: 1, max: 200, paso: 1, valor: rel, formato: (x) => x.toFixed(0), alCambiar: (x) => { rel = x; L.redibujar(); } }),
      m.deslizador({ etiqueta: 'Tensión del generador (V)', min: 220, max: 13200, paso: 20, valor: V, formato: (x) => x.toFixed(0), alCambiar: (x) => { V = x; L.redibujar(); } }),
      m.deslizador({ etiqueta: 'Potencia generada (MW)', min: 0.1, max: 3, paso: 0.1, valor: P / 1e6, formato: (x) => x.toFixed(1), alCambiar: (x) => { P = x * 1e6; L.redibujar(); } }));
    L.alDibujar((l) => {
      const c = l.c, Rlinea = 2 * Rkm * km;
      const V2 = V * rel, I2 = P / V2, Pperd = Math.min(P, I2 * I2 * Rlinea);
      // Núcleo y bobinas
      l.rect(0.6, 0.8, 2.4, 2.4, { borde: c.tintaSuave, ancho: 10 });
      const bobina = (x, n, color) => { for (let k = 0; k < n; k++) l.trazo([[x - 0.35, 1.1 + (k * 1.8) / n], [x + 0.35, 1.25 + (k * 1.8) / n]], { color, ancho: 2.5 }); };
      bobina(0.6, 5, c.elec);
      bobina(3.0, Math.min(18, 4 + Math.round(Math.log2(rel) * 2)), c.mag);
      l.texto('N₁', [0.6, 3.5], { alinear: 'center' });
      l.texto('N₂', [3.0, 3.5], { alinear: 'center' });
      // Línea: su grosor es la corriente; el color se apaga con la pérdida
      const grosor = Math.max(1.5, Math.min(14, (I2 / 1000) * 14));
      l.trazo([[3.4, 2.6], [9.4, 2.6]], { color: c.error, ancho: grosor });
      l.trazo([[3.4, 1.4], [9.4, 1.4]], { color: c.error, ancho: grosor });
      l.texto(`${km} km de línea, ${Rlinea.toFixed(1)} Ω en total`, [6.4, 2.0], { alinear: 'center', color: c.tintaSuave, tam: 12 });
      l.rect(9.4, 1.2, 0.5, 1.6, { relleno: c.ok, opacidad: Math.max(0.15, 1 - Pperd / P) });
      l.texto('pueblo', [9.65, 1.0], { alinear: 'center', tam: 11, color: c.tintaSuave });
      m.leer(
        m.dato('Tensión de transmisión', `${num(V2)} V`),
        m.dato('Corriente en la línea', `${num(I2)} A`),
        m.dato('Pérdida I²R', `${num(Pperd)} W (${((100 * Pperd) / P).toFixed(rel > 20 ? 4 : 1)} %)`),
        m.dato('Llega al pueblo', `${num(P - Pperd)} W`));
    });
  },
};

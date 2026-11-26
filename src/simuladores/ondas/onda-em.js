import { C, MU0, num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Una onda plana viaja en $+x$. El campo eléctrico oscila en el eje $y$ (azul) y el magnético en el eje $z$ (violeta, dibujado en perspectiva). Están **en fase**, son perpendiculares entre sí y a la propagación, y siempre $E=cB$.`,
  observa: [
    r`$\vec E\times\vec B$ apunta hacia donde viaja la onda: es la dirección del vector de Poynting.`,
    r`La intensidad depende del cuadrado de la amplitud: duplicar $E_{max}$ cuadruplica $I=\frac{E_{max}^2}{2\mu_0c}$.`,
    'Para la luz del Sol (1350 W/m²) el campo eléctrico vale unos 1000 V/m y el magnético apenas 3 µT.',
  ],
  montar(m) {
    let E0 = 1010, ciclos = 2, fase = 0;
    const L = m.lienzo({ x: [-0.6, 4.4], y: [-1.5, 1.5], proporcional: false, etiqueta: 'Campos eléctrico y magnético de una onda electromagnética' });
    L.canvas.classList.add('lienzo--medio');
    m.panel.append(
      m.deslizador({ etiqueta: 'Amplitud E_máx (V/m)', min: 10, max: 2000, paso: 10, valor: E0, formato: (x) => x.toFixed(0), alCambiar: (x) => { E0 = x; } }),
      m.deslizador({ etiqueta: 'Longitudes de onda visibles', min: 1, max: 4, paso: 0.5, valor: ciclos, formato: (x) => x.toFixed(1), alCambiar: (x) => { ciclos = x; } }));
    L.alDibujar((l) => {
      const c = l.c, k = (2 * Math.PI * ciclos) / 4, a = 0.55 + 0.4 * (E0 / 2000);
      // Perspectiva oblicua: el eje z se dibuja inclinado hacia abajo a la izquierda
      const pz = (z) => [-0.35 * z, -0.45 * z];
      l.flecha([0, 0], [4.2, 0], { color: c.tintaSuave, ancho: 1.5 });
      l.texto('x', [4.25, 0.1], { color: c.tintaSuave });
      l.flecha([0, 0], [0, 1.35], { color: c.tintaSuave, ancho: 1 });
      l.texto('y', [0.08, 1.35], { color: c.tintaSuave });
      l.flecha([0, 0], pz(1.4), { color: c.tintaSuave, ancho: 1 });
      l.texto('z', pz(1.5), { color: c.tintaSuave });
      const Ept = [], Bpt = [];
      for (let x = 0; x <= 4; x += 0.02) {
        const s = Math.sin(k * x - fase);
        Ept.push([x, a * s]);
        const [dx, dy] = pz(a * s);
        Bpt.push([x + dx, dy]);
      }
      for (let x = 0; x <= 4; x += 0.2) {
        const s = Math.sin(k * x - fase);
        l.trazo([[x, 0], [x, a * s]], { color: c.elec, ancho: 1 });
        const [dx, dy] = pz(a * s);
        l.trazo([[x, 0], [x + dx, dy]], { color: c.mag, ancho: 1 });
      }
      l.trazo(Ept, { color: c.elec, ancho: 2.5 });
      l.trazo(Bpt, { color: c.mag, ancho: 2.5 });
      const B0 = E0 / C, I = (E0 * E0) / (2 * MU0 * C);
      m.leer(
        m.dato('E_máx', `${num(E0)} V/m`),
        m.dato('B_máx = E/c', `${num(B0)} T`),
        m.dato('Intensidad I = E²/(2µ₀c)', `${num(I)} W/m²`),
        m.dato('Presión de radiación (absorbe)', `${num(I / C)} Pa`),
        m.dato('Energía eléctrica = magnética', 'cada una, la mitad'));
    });
    m.animar((dt) => { if (!m.quieto) fase += dt * 3; L.redibujar(); });
  },
};

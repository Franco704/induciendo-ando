import { num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Una barra conductora desliza sobre dos rieles unidos por una resistencia, en un campo $\vec B$ entrante. Al moverse, el área del circuito cambia y con ella el flujo: aparece una fem $\varepsilon=B\ell v$ y una corriente que, por **Lenz**, se opone al cambio. Esa corriente en el campo genera una fuerza que frena la barra.`,
  observa: [
    'Si la barra se aleja (el área crece), la corriente circula en sentido antihorario: su campo sale de la pantalla y compensa el flujo entrante que aumenta.',
    'Invertí la velocidad: la corriente se invierte y la fuerza magnética vuelve a oponerse al movimiento. Siempre frena.',
    r`La potencia que hace el agente externo, $Fv$, es exactamente la que se disipa en la resistencia, $I^2R$.`,
  ],
  montar(m) {
    let B = 0.5, ell = 0.4, v = 2, R = 2, x = 0.3;
    const L = m.lienzo({ x: [-0.15, 1.65], y: [-0.25, 0.65], etiqueta: 'Barra que se desliza sobre rieles en un campo magnético' });
    L.canvas.classList.add('lienzo--medio');
    m.panel.append(
      m.deslizador({ etiqueta: 'Velocidad de la barra (m/s)', min: -3, max: 3, paso: 0.1, valor: v, formato: (k) => k.toFixed(1), alCambiar: (k) => { v = k; } }),
      m.deslizador({ etiqueta: 'B (T)', min: 0.05, max: 1.5, paso: 0.05, valor: B, alCambiar: (k) => { B = k; } }),
      m.deslizador({ etiqueta: 'Largo de la barra ℓ (m)', min: 0.1, max: 0.5, paso: 0.01, valor: ell, alCambiar: (k) => { ell = k; } }),
      m.deslizador({ etiqueta: 'Resistencia R (Ω)', min: 0.5, max: 10, paso: 0.5, valor: R, formato: (k) => k.toFixed(1), alCambiar: (k) => { R = k; } }));
    L.alDibujar((l) => {
      const c = l.c;
      for (let px = 0.05; px < 1.6; px += 0.12) for (let py = -0.18; py < 0.62; py += 0.12) l.texto('×', [px, py], { color: c.cuadricula, alinear: 'center', dy: 4, contorno: false });
      l.rect(0, 0, x, ell, { relleno: c.elec, opacidad: 0.12 });
      l.trazo([[1.6, 0], [0, 0], [0, ell], [1.6, ell]], { color: c.tinta, ancho: 2 });
      // Resistencia en el lado izquierdo (zigzag)
      const zz = [[0, 0]];
      for (let k = 1; k < 8; k++) zz.push([k % 2 ? -0.05 : 0.05, (ell * k) / 8]);
      zz.push([0, ell]);
      l.trazo([[0, 0], [0, ell]], { color: c.papel, ancho: 4 });
      l.trazo(zz, { color: c.tinta, ancho: 2 });
      l.rect(x - 0.015, -0.04, 0.03, ell + 0.08, { relleno: c.acento3 });
      const fem = B * ell * v, I = fem / R, F = B * I * ell;
      if (Math.abs(v) > 0.01) {
        l.flecha([x, ell + 0.12], [0.2 * Math.sign(v), 0], { color: c.tinta, ancho: 2.5 });
        l.texto('v', [x + 0.1 * Math.sign(v), ell + 0.16], { alinear: 'center' });
        // Corriente: antihoraria si el área crece (v > 0); por la barra sube
        const s = Math.sign(v);
        l.flecha([x + 0.04, ell / 2 - 0.06 * s], [0, 0.12 * s], { color: c.mag, ancho: 3, cabeza: 10 });
        l.flecha([x / 2 + 0.06 * s, ell], [-0.12 * s, 0], { color: c.mag, ancho: 3, cabeza: 10 });
        l.flecha([x / 2 - 0.06 * s, 0], [0.12 * s, 0], { color: c.mag, ancho: 3, cabeza: 10 });
        l.flecha([x, ell / 2], [-0.22 * s * Math.min(1, Math.abs(F) / 0.3 + 0.3), 0], { color: c.error, ancho: 2.5 });
        l.texto('F magnética', [x - 0.12 * s, ell / 2 - 0.08], { color: c.error, alinear: 'center', tam: 11 });
      }
      m.leer(
        m.dato('Flujo Φ = B·ℓ·x', `${num(B * ell * x)} Wb`),
        m.dato('fem = Bℓv', `${num(Math.abs(fem))} V`),
        m.dato('Corriente', `${num(Math.abs(I))} A, ${v > 0 ? 'antihoraria' : v < 0 ? 'horaria' : '—'}`),
        m.dato('Fuerza que frena = BIℓ', `${num(Math.abs(F))} N`),
        m.dato('Potencia Fv = I²R', `${num(Math.abs(F * v))} W`));
    });
    m.animar((dt) => {
      if (!m.quieto) {
        x += v * dt * 0.15;
        if (x > 1.55) x = 0.1;
        if (x < 0.1) x = 1.55;
      }
      L.redibujar();
    });
  },
};

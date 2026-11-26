import { R, num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Un mol de gas ideal en un cilindro con pistón. Las partículas se mueven más rápido cuanto mayor es la temperatura ($v_{rms}\propto\sqrt T$) y la **presión** es el efecto de sus choques contra las paredes. Todo se resume en $pV=nRT$.`,
  observa: [
    'A temperatura constante, achicar el volumen a la mitad duplica la presión (Boyle): hay el doble de choques por segundo en cada cm².',
    'A volumen constante, duplicar la temperatura absoluta (en kelvin, no en °C) duplica la presión.',
    'Un gas real se aparta de este modelo a presiones altas o temperaturas bajas, cerca de licuarse.',
  ],
  montar(m) {
    let T = 300, V = 0.0224, n = 1;
    const L = m.lienzo({ x: [0, 1.6], y: [0, 1], proporcional: false, etiqueta: 'Gas ideal en un cilindro con pistón' });
    L.canvas.classList.add('lienzo--medio');
    m.panel.append(
      m.deslizador({ etiqueta: 'Temperatura (K)', min: 50, max: 900, paso: 5, valor: T, formato: (x) => x.toFixed(0), alCambiar: (x) => { T = x; } }),
      m.deslizador({ etiqueta: 'Volumen (L)', min: 5, max: 40, paso: 0.1, valor: V * 1000, formato: (x) => x.toFixed(1), alCambiar: (x) => { V = x / 1000; } }),
      m.deslizador({ etiqueta: 'Moles n', min: 0.25, max: 2, paso: 0.05, valor: n, alCambiar: (x) => { n = x; } }));
    const parts = Array.from({ length: 80 }, () => ({ x: Math.random(), y: Math.random(), a: Math.random() * 2 * Math.PI }));
    let golpes = 0, ritmo = 0;
    L.alDibujar((l) => {
      const c = l.c, ancho = 0.1 + 1.3 * (V / 0.04);
      const visibles = Math.round(40 * n);
      l.rect(0.05, 0.1, ancho, 0.8, { relleno: c.calor, opacidad: Math.min(0.35, T / 2600) });
      l.trazo([[0.05 + ancho + 0.02, 0.1], [0.05, 0.1], [0.05, 0.9], [0.05 + ancho + 0.02, 0.9]], { color: c.tinta, ancho: 3 });
      l.rect(0.05 + ancho, 0.1, 0.03, 0.8, { relleno: c.tintaSuave });
      l.rect(0.08 + ancho, 0.47, 0.5, 0.06, { relleno: c.tintaSuave });
      parts.slice(0, visibles).forEach((p) => l.punto([0.07 + p.x * (ancho - 0.04), 0.12 + p.y * 0.76], { color: c.elec, radio: 3, borde: false }));
      const P = (n * R * T) / V;
      m.leer(
        m.dato('Presión p = nRT/V', `${num(P / 1000)} kPa (${num(P / 101325)} atm)`),
        m.dato('v_rms (aire, 29 g/mol)', `${num(Math.sqrt((3 * R * T) / 0.029))} m/s`),
        m.dato('Energía interna (monoatómico) 3/2 nRT', `${num(1.5 * n * R * T)} J`),
        m.dato('Choques contra el pistón', `${ritmo.toFixed(0)} por segundo en pantalla`));
    });
    let reloj = 0;
    m.animar((dt) => {
      const vel = 0.25 * Math.sqrt(T / 300), ancho = 0.1 + 1.3 * (V / 0.04);
      if (!m.quieto) for (const p of parts) {
        p.x += (Math.cos(p.a) * vel * dt) / (ancho / 1.4);
        p.y += Math.sin(p.a) * vel * dt;
        if (p.x > 1) { p.x = 1; p.a = Math.PI - p.a; golpes++; }
        if (p.x < 0) { p.x = 0; p.a = Math.PI - p.a; }
        if (p.y > 1 || p.y < 0) { p.y = Math.max(0, Math.min(1, p.y)); p.a = -p.a; }
      }
      reloj += dt;
      if (reloj > 1) { ritmo = golpes / reloj * (n); golpes = 0; reloj = 0; }
      L.redibujar();
    });
  },
};

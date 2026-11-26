import { E, ME, num } from '../../fisica/constantes.js';

const r = String.raw;

// Modelo de Drude para un alambre de cobre de 1 m y 1 mm² con n = 8,5·10²⁸ electrones/m³.
export default {
  resumen: r`Los electrones libres se mueven al azar a más de $10^6$ m/s y chocan con la red. El campo les suma, entre choque y choque, una pequeña velocidad media en contra de $\vec E$: la **velocidad de deriva** $v_d=\frac{eE\tau}{m}$. En la animación la deriva está exagerada un millón de veces para que se vea.`,
  observa: [
    r`Con 1 V sobre 1 m de cobre, $v_d$ es de milímetros por segundo: la luz prende al instante porque el **campo** se establece en todo el cable casi a la velocidad de la luz, no porque los electrones viajen rápido.`,
    'Al calentar el metal, la red vibra más, los choques son más frecuentes (τ baja) y la resistividad sube.',
    'Los electrones derivan en contra del campo: la corriente convencional va en el sentido de E.',
  ],
  montar(m) {
    const n = 8.5e28, A = 1e-6, Lw = 1, rho20 = 1.72e-8, alfa = 3.9e-3;
    let V = 1, T = 20;
    const tau = () => ME / (n * E * E * rho20 * (1 + alfa * (T - 20)));
    const L = m.lienzo({ x: [0, 4], y: [0, 1], proporcional: false, etiqueta: 'Electrones a la deriva dentro de un conductor' });
    L.canvas.classList.add('lienzo--bajo');
    m.panel.append(
      m.deslizador({ etiqueta: 'Tensión entre extremos (V)', min: 0, max: 5, paso: 0.1, valor: V, formato: (v) => v.toFixed(1), alCambiar: (v) => { V = v; } }),
      m.deslizador({ etiqueta: 'Temperatura (°C)', min: -100, max: 400, paso: 5, valor: T, formato: (v) => v.toFixed(0), alCambiar: (v) => { T = v; } }));
    const iones = [];
    for (let i = 0; i < 9; i++) for (let j = 0; j < 3; j++) iones.push([0.25 + i * 0.44, 0.22 + j * 0.28]);
    const electrones = Array.from({ length: 40 }, () => ({ x: Math.random() * 4, y: 0.08 + Math.random() * 0.84, vx: 0, vy: 0, t: 0 }));
    const sortear = (e) => { const a = Math.random() * 2 * Math.PI, s = 0.9 + Math.random() * 0.6; e.vx = s * Math.cos(a); e.vy = s * Math.sin(a); };
    electrones.forEach(sortear);
    let fase = 0;
    const dibujar = () => L.redibujar();
    L.alDibujar((l) => {
      const c = l.c;
      l.rect(0, 0, 4, 1, { relleno: c.papel });
      const agit = 0.012 * (1 + (T + 100) / 250);
      iones.forEach(([x, y], i) => l.punto([x + agit * Math.sin(fase * 9 + i), y + agit * Math.cos(fase * 7 + i * 2)], { color: c.tintaSuave, radio: 6, borde: false }));
      electrones.forEach((e) => l.punto([e.x, e.y], { color: c.menos, radio: 3.2, borde: false }));
      if (V > 0) l.flecha([1.6, 1.05], [0.8, 0], { color: c.elec, ancho: 2 });
      const Ecampo = V / Lw, vd = (E * Ecampo * tau()) / ME, rho = rho20 * (1 + alfa * (T - 20));
      const I = n * E * vd * A;
      m.leer(
        m.dato('Campo E = V/L', `${num(Ecampo)} V/m`),
        m.dato('Tiempo libre medio τ', `${num(tau())} s`),
        m.dato('Velocidad de deriva', `${num(vd * 1000)} mm/s`),
        m.dato('Resistividad ρ', `${num(rho)} Ω·m`),
        m.dato('Corriente I = nevA', `${num(I)} A`));
    });
    m.animar((dt) => {
      if (m.quieto) return;
      fase += dt;
      const deriva = -0.25 * V * (tau() / 2.5e-14); // hacia la izquierda: contra el campo
      const choque = 0.35 * (1 + (T + 100) / 300);
      for (const e of electrones) {
        e.x += (e.vx + deriva) * dt * 0.6;
        e.y += e.vy * dt * 0.6;
        if (Math.random() < choque * dt * 6) sortear(e);
        if (e.y < 0.05 || e.y > 0.95) e.vy *= -1;
        if (e.x < 0) e.x += 4;
        if (e.x > 4) e.x -= 4;
      }
      dibujar();
    });
  },
};

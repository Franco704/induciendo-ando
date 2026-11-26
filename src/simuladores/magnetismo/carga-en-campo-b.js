import { E, ME, MP, num } from '../../fisica/constantes.js';
import { radioCiclotron, periodoCiclotron } from '../../fisica/magnetismo.js';

const r = String.raw;
const PARTICULAS = {
  proton: { nombre: 'Protón', q: E, m: MP },
  deuteron: { nombre: 'Deuterón', q: E, m: 3.344e-27 },
  alfa: { nombre: 'Partícula alfa', q: 2 * E, m: 6.64e-27 },
  electron: { nombre: 'Electrón', q: -E, m: ME },
};

export default {
  resumen: r`El campo $\vec B$ es **entrante** (las cruces). La fuerza $q\vec v\times\vec B$ es siempre perpendicular a la velocidad: no cambia la rapidez, solo la dirección. En **selector** se agrega un campo eléctrico hacia abajo: solo pasa derecho la partícula con $v=E/B$.`,
  observa: [
    r`El período $T=\frac{2\pi m}{|q|B}$ no depende de la velocidad: más rápido, círculo más grande, mismo tiempo por vuelta.`,
    'Un electrón con la misma velocidad gira para el otro lado y con un radio 1836 veces menor: casi no se ve en esta escala.',
    'En el selector, si subís la velocidad por encima de E/B, gana la fuerza magnética y la partícula se curva hacia arriba.',
  ],
  montar(m) {
    let tipo = 'proton', v = 2e6, B = 0.1, modo = 'orbita', Ecampo = 2e5, t = 0;
    const L = m.lienzo({ x: [-0.3, 0.3], y: [-0.3, 0.3], etiqueta: 'Trayectoria de una partícula cargada en un campo magnético entrante' });
    const reiniciar = () => { t = 0; };
    m.panel.append(
      m.selector({ etiqueta: 'Modo', opciones: [['orbita', 'Órbita'], ['selector', 'Selector de velocidades']], valor: modo, alCambiar: (x) => { modo = x; reiniciar(); } }),
      m.selector({ etiqueta: 'Partícula', opciones: Object.entries(PARTICULAS).map(([k, p]) => [k, p.nombre]), valor: tipo, alCambiar: (x) => { tipo = x; reiniciar(); } }),
      m.deslizador({ etiqueta: 'Velocidad (10⁶ m/s)', min: 0.2, max: 4, paso: 0.05, valor: v / 1e6, alCambiar: (x) => { v = x * 1e6; reiniciar(); } }),
      m.deslizador({ etiqueta: 'B (T)', min: 0.02, max: 0.5, paso: 0.01, valor: B, alCambiar: (x) => { B = x; reiniciar(); } }),
      m.deslizador({ etiqueta: 'E del selector (10⁵ V/m)', min: 0, max: 10, paso: 0.1, valor: Ecampo / 1e5, formato: (x) => x.toFixed(1), alCambiar: (x) => { Ecampo = x * 1e5; reiniciar(); } }));

    // Posición en el instante t: entra por la izquierda en (−0,28; 0) moviéndose hacia +x
    const posicion = (tt) => {
      const p = PARTICULAS[tipo], w = (p.q * B) / p.m; // ω con signo
      if (modo === 'orbita') {
        // v × B con B = −ẑ: para q > 0 la fuerza inicial apunta a +y (gira en sentido antihorario)
        const R = v / w;
        return [-0.28 + R * Math.sin(w * tt), R * (1 - Math.cos(w * tt))];
      }
      // Selector: E = −ŷ; deriva E×B más giro (solución analítica del cicloide)
      const vd = Ecampo / B, u = v - vd;
      const R = u / w;
      return [-0.28 + vd * tt + R * Math.sin(w * tt), R * (1 - Math.cos(w * tt))];
    };
    L.alDibujar((l) => {
      const c = l.c, p = PARTICULAS[tipo];
      for (let x = -0.27; x < 0.3; x += 0.06) for (let y = -0.27; y < 0.3; y += 0.06) l.texto('×', [x, y], { color: c.cuadricula, alinear: 'center', dy: 4, tam: 13, contorno: false });
      if (modo === 'selector') {
        l.rect(-0.3, 0.12, 0.6, 0.01, { relleno: c.mas });
        l.rect(-0.3, -0.13, 0.6, 0.01, { relleno: c.menos });
        for (let x = -0.25; x < 0.3; x += 0.1) l.flecha([x, 0.1], [0, -0.06], { color: c.elec, ancho: 1.2, cabeza: 6 });
      }
      const T = periodoCiclotron(p.m, p.q, B);
      const pts = [];
      const tMax = modo === 'orbita' ? Math.min(t, T) : t;
      for (let s = 0; s <= tMax; s += T / 400) { const q = posicion(s); if (Math.abs(q[0]) > 0.32 || Math.abs(q[1]) > 0.32) break; pts.push(q); }
      l.trazo(pts, { color: c.mag, ancho: 2.5 });
      const ahora = pts.at(-1) || [-0.28, 0];
      l.punto(ahora, { color: p.q > 0 ? c.mas : c.menos, radio: 6 });
      const rr = radioCiclotron(p.m, v, p.q, B);
      m.leer(
        m.dato('Radio r = mv/|q|B', `${num(rr * 100)} cm`),
        m.dato('Período T = 2πm/|q|B', `${num(T)} s`),
        m.dato('Fuerza magnética |q|vB', `${num(Math.abs(p.q) * v * B)} N`),
        modo === 'selector' && m.dato('Velocidad que pasa derecho E/B', `${num(Ecampo / B)} m/s`),
        m.dato('Trabajo de la fuerza magnética', '0 J (siempre ⟂ a v)'));
    });
    m.animar((dt) => {
      const p = PARTICULAS[tipo], T = periodoCiclotron(p.m, p.q, B);
      t += m.quieto ? T : (dt * T) / 3;
      if (modo === 'selector' && t > 4 * T) t = 0;
      L.redibujar();
    });
  },
};

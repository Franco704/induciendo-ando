import { fuerzaSobre } from '../../fisica/electrostatica.js';
import { num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Tres cargas puntuales en un plano de $2\times2$ m. Cada flecha es la fuerza **neta** sobre una carga: la suma vectorial de lo que le hacen las otras dos (superposición). Arrastrá las cargas y cambiá sus valores.`,
  observa: [
    r`Si duplicás la distancia entre dos cargas, la fuerza entre ellas baja a la **cuarta parte**: $F\propto1/r^2$.`,
    'Las fuerzas que se hacen dos cargas son iguales y opuestas (tercera ley), aunque las cargas sean distintas.',
    r`Buscá el punto de equilibrio del TP 1: con $+8$ nC y $-14$ nC, una tercera carga queda en equilibrio **afuera** del par, del lado de la carga menor.`,
  ],
  montar(m) {
    const L = m.lienzo({ x: [-1, 1], y: [-1, 1], etiqueta: 'Tres cargas y la fuerza neta sobre cada una' });
    const cargas = [{ q: 2e-6, x: -0.5, y: 0.3 }, { q: -3e-6, x: 0.45, y: 0.35 }, { q: 1e-6, x: 0, y: -0.45 }];
    const nombres = ['q₁', 'q₂', 'q₃'];
    let tomada = null;
    cargas.forEach((c, i) => m.panel.append(m.deslizador({
      etiqueta: `${nombres[i]} (µC)`, min: -5, max: 5, paso: 0.5, valor: c.q * 1e6, formato: (v) => v.toFixed(1),
      alCambiar: (v) => { c.q = (v || 0.5) * 1e-6; L.redibujar(); },
    })));
    L.alDibujar((l) => {
      l.ejes();
      const fuerzas = cargas.map((_, i) => fuerzaSobre(cargas, i));
      const maxF = Math.max(...fuerzas.map(([fx, fy]) => Math.hypot(fx, fy)));
      fuerzas.forEach(([fx, fy], i) => {
        const f = Math.hypot(fx, fy);
        if (!f) return;
        // Largo de la flecha en escala logarítmica: así se ven las fuerzas chicas y las grandes
        const largo = 0.12 + 0.28 * Math.max(0, 1 + Math.log10(f / maxF) / 3);
        l.flecha([cargas[i].x, cargas[i].y], [(fx / f) * largo, (fy / f) * largo], { color: l.c.mag, ancho: 2.5, cabeza: 11 });
      });
      cargas.forEach((c, i) => { l.carga([c.x, c.y], c.q); l.texto(nombres[i], [c.x, c.y], { dx: 15, dy: -12 }); });
      m.leer(fuerzas.map(([fx, fy], i) => m.dato(`|F| sobre ${nombres[i]}`, `${num(Math.hypot(fx, fy))} N, ${((Math.atan2(fy, fx) * 180) / Math.PI + 360).toFixed(0) % 360}°`)));
    });
    L.alPuntero(([x, y], e) => {
      if (e.type === 'pointerdown') tomada = cargas.find((c) => Math.hypot(c.x - x, c.y - y) < 0.12) || null;
      if (!tomada) return;
      tomada.x = Math.max(-0.95, Math.min(0.95, x));
      tomada.y = Math.max(-0.95, Math.min(0.95, y));
      if (cargas.some((c) => c !== tomada && Math.hypot(c.x - tomada.x, c.y - tomada.y) < 0.06)) return;
      L.redibujar();
    });
  },
};

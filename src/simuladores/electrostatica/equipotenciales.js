import { potencial, campo, lineasDeCampo } from '../../fisica/electrostatica.js';
import { num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Las curvas son **equipotenciales** (cortes de superficies de igual $V$), dibujadas cada el mismo salto de potencial. Las líneas tenues son las de campo: siempre las cruzan en ángulo recto. Tocá dos puntos para calcular el trabajo de llevar una carga de $+1$ nC de uno al otro.`,
  observa: [
    'Donde las equipotenciales están juntas el campo es intenso: E es el ritmo con que cambia V (E = −dV/dx).',
    r`El trabajo del campo de A a B es $q(V_A-V_B)$: no depende del camino. Moverse sobre una misma equipotencial no cuesta nada.`,
    'Con el dipolo, la mediatriz es la equipotencial V = 0 aunque el campo allí no sea cero.',
  ],
  montar(m) {
    let signo2 = -1, puntos = [];
    const L = m.lienzo({ x: [-2, 2], y: [-1.6, 1.6], etiqueta: 'Equipotenciales y líneas de campo de dos cargas' });
    const cargas = () => [{ q: 1e-9, x: -0.7, y: 0 }, { q: signo2 * 1e-9, x: 0.7, y: 0 }];
    m.panel.append(m.selector({ etiqueta: 'Segunda carga', opciones: [['-1', 'Negativa (dipolo)'], ['1', 'Positiva']], valor: '-1', alCambiar: (v) => { signo2 = +v; puntos = []; L.redibujar(); } }));
    L.alDibujar((l) => {
      const cs = cargas();
      for (const ln of lineasDeCampo(cs, { porUnidad: 7, limite: 4 })) l.trazo(ln, { color: l.c.cuadricula, ancho: 1 });
      const niveles = [];
      for (let k = -8; k <= 8; k++) if (k) niveles.push(k * 4);
      niveles.push(0);
      l.contornos((x, y) => potencial(cs, x, y), niveles, {
        colores: (k) => (niveles[k] > 0 ? l.c.mas : niveles[k] < 0 ? l.c.menos : l.c.tintaSuave), ancho: 1.5, resolucion: 140, salto: 30,
      });
      cs.forEach((c) => l.carga([c.x, c.y], c.q));
      puntos.forEach((p, i) => { l.punto(p, { color: l.c.mag, radio: 5 }); l.texto(i ? 'B' : 'A', p, { dx: 8, dy: -8, color: l.c.mag }); });
      const datos = puntos.map((p, i) => m.dato(`V en ${i ? 'B' : 'A'}`, `${num(potencial(cs, ...p))} V`));
      if (puntos.length === 2) {
        const W = 1e-9 * (potencial(cs, ...puntos[0]) - potencial(cs, ...puntos[1]));
        datos.push(m.dato('Trabajo del campo A → B (q = +1 nC)', `${num(W)} J`));
        const [ex, ey] = campo(cs, ...puntos[1]);
        datos.push(m.dato('|E| en B', `${num(Math.hypot(ex, ey))} N/C`));
      }
      m.leer(datos.length ? datos : [m.dato('Tocá un punto', 'para fijar A, después B')]);
    });
    L.alPuntero((p, e) => {
      if (e.type !== 'pointerdown') return;
      puntos = puntos.length >= 2 ? [p] : [...puntos, p];
      L.redibujar();
    });
  },
};

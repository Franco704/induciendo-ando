import { campoDeHilos, fuerzaParalelos } from '../../fisica/magnetismo.js';
import { num } from '../../fisica/constantes.js';

const r = String.raw;

export default {
  resumen: r`Hilos largos perpendiculares a la pantalla: el punto ($\odot$) es corriente **saliente** y la cruz ($\otimes$) **entrante**. Las flechitas muestran la dirección de $\vec B$ (todas del mismo largo). Arrastrá los hilos y tocá un punto vacío para medir el campo. Cada hilo lleva $|I|$ amperes; distancias en metros.`,
  observa: [
    'Alrededor de un hilo solo, B forma circunferencias: regla de la mano derecha con el pulgar en el sentido de la corriente.',
    r`Con corrientes **iguales y del mismo sentido**, entre los hilos los campos se restan y hay un punto con $B=0$; los hilos se **atraen**.`,
    'Con corrientes opuestas, entre los hilos los campos se suman y los hilos se repelen.',
  ],
  montar(m) {
    let I1 = 10, I2 = 10, sonda = null, tomado = null;
    const hilos = [{ x: -0.5, y: 0, I: I1 }, { x: 0.5, y: 0, I: I2 }];
    const L = m.lienzo({ x: [-1.5, 1.5], y: [-1.1, 1.1], etiqueta: 'Campo magnético de dos corrientes rectas perpendiculares a la pantalla' });
    m.panel.append(
      m.deslizador({ etiqueta: 'I₁ (A, + saliente)', min: -20, max: 20, paso: 1, valor: I1, formato: (x) => x.toFixed(0), alCambiar: (x) => { hilos[0].I = x; L.redibujar(); } }),
      m.deslizador({ etiqueta: 'I₂ (A, + saliente)', min: -20, max: 20, paso: 1, valor: I2, formato: (x) => x.toFixed(0), alCambiar: (x) => { hilos[1].I = x; L.redibujar(); } }));
    L.alDibujar((l) => {
      const activos = hilos.filter((h) => h.I);
      if (activos.length) l.campo((x, y) => campoDeHilos(activos, x, y), { densidad: 22, color: l.c.elec });
      hilos.forEach((h, i) => {
        l.punto([h.x, h.y], { color: l.c.papel, radio: 13 });
        l.trazo(Array.from({ length: 41 }, (_, k) => [h.x + 0.075 * Math.cos((k * Math.PI) / 20), h.y + 0.075 * Math.sin((k * Math.PI) / 20)]), { color: l.c.tinta, ancho: 2 });
        if (h.I > 0) l.punto([h.x, h.y], { color: l.c.tinta, radio: 3.5, borde: false });
        else if (h.I < 0) l.texto('×', [h.x, h.y], { alinear: 'center', dy: 6, tam: 18, contorno: false });
        l.texto(`I${i ? '₂' : '₁'}`, [h.x, h.y], { dx: 16, dy: -14 });
      });
      const d = Math.hypot(hilos[0].x - hilos[1].x, hilos[0].y - hilos[1].y);
      const F = fuerzaParalelos(Math.abs(hilos[0].I), Math.abs(hilos[1].I), d);
      const datos = [
        m.dato('Separación', `${num(d)} m`),
        m.dato('Fuerza por metro entre hilos', hilos[0].I * hilos[1].I === 0 ? '0' : `${num(F)} N/m, ${hilos[0].I * hilos[1].I > 0 ? 'atracción' : 'repulsión'}`),
      ];
      if (sonda) {
        const [bx, by] = campoDeHilos(hilos.filter((h) => h.I), ...sonda);
        l.punto(sonda, { color: l.c.mag, radio: 5 });
        datos.unshift(m.dato('|B| en el punto tocado', `${num(Math.hypot(bx, by) * 1e6)} µT`));
      }
      m.leer(datos);
    });
    L.alPuntero(([x, y], e) => {
      if (e.type === 'pointerdown') tomado = hilos.find((h) => Math.hypot(h.x - x, h.y - y) < 0.15) || null;
      if (tomado) {
        tomado.x = Math.max(-1.4, Math.min(1.4, x));
        tomado.y = Math.max(-1, Math.min(1, y));
        if (Math.hypot(hilos[0].x - hilos[1].x, hilos[0].y - hilos[1].y) < 0.15) return;
      } else sonda = [x, y];
      L.redibujar();
    });
  },
};

import { conduccionSerie } from '../../fisica/termodinamica.js';
import { num } from '../../fisica/constantes.js';

const r = String.raw;
const MATERIALES = { vidrio: ['Vidrio', 0.8], aire: ['Aire quieto', 0.024], ladrillo: ['Ladrillo', 0.6], tergopol: ['Telgopor', 0.035], acero: ['Acero', 50.2], madera: ['Madera', 0.12] };

export default {
  resumen: r`Una pared de $1\ \text m^2$ con dos capas en serie. En estado estacionario el **mismo** flujo de calor $H$ atraviesa ambas, así que la temperatura cae más en la capa que más aísla. Cada capa es una resistencia térmica $\frac{L}{kA}$ y se suman como resistencias en serie.`,
  observa: [
    'En un doble vidriado casi toda la caída de temperatura ocurre en la capa de aire: es la que más resiste.',
    r`Dentro de cada capa el perfil es una recta: su pendiente es el gradiente $\frac{dT}{dx}=-\frac{H}{kA}$.`,
    'Duplicar el espesor de una capa aislante reduce el flujo, pero no a la mitad: la otra capa también resiste.',
  ],
  montar(m) {
    let m1 = 'vidrio', m2 = 'aire', L1 = 4, L2 = 10, Tc = 20, Tf = -5;
    const G = m.lienzo({ x: [-2, 22], y: [-12, 32], proporcional: false, etiqueta: 'Perfil de temperatura a través de una pared de dos capas' });
    G.canvas.classList.add('lienzo--medio');
    const opciones = Object.entries(MATERIALES).map(([k, [nombre, kk]]) => [k, `${nombre} (k = ${kk})`]);
    m.panel.append(
      m.selector({ etiqueta: 'Capa 1', opciones, valor: m1, alCambiar: (x) => { m1 = x; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'Espesor capa 1 (mm)', min: 1, max: 100, paso: 1, valor: L1, formato: (x) => x.toFixed(0), alCambiar: (x) => { L1 = x; G.redibujar(); } }),
      m.selector({ etiqueta: 'Capa 2', opciones, valor: m2, alCambiar: (x) => { m2 = x; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'Espesor capa 2 (mm)', min: 1, max: 100, paso: 1, valor: L2, formato: (x) => x.toFixed(0), alCambiar: (x) => { L2 = x; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'Temperatura interior (°C)', min: 0, max: 40, paso: 1, valor: Tc, formato: (x) => x.toFixed(0), alCambiar: (x) => { Tc = x; G.redibujar(); } }),
      m.deslizador({ etiqueta: 'Temperatura exterior (°C)', min: -20, max: 10, paso: 1, valor: Tf, formato: (x) => x.toFixed(0), alCambiar: (x) => { Tf = x; G.redibujar(); } }));
    G.alDibujar((l) => {
      const k1 = MATERIALES[m1][1], k2 = MATERIALES[m2][1], A = 1;
      const H = conduccionSerie(A, Tc - Tf, [{ k: k1, L: L1 / 1000 }, { k: k2, L: L2 / 1000 }]);
      const Tm = Tc - (H * (L1 / 1000)) / (k1 * A);
      // Escala horizontal: la pared ocupa de 0 a 20 en el dibujo, proporcional a los espesores
      const tot = L1 + L2, x1 = (20 * L1) / tot;
      l.rect(0, -12, x1, 44, { relleno: l.c.elec, opacidad: 0.12 });
      l.rect(x1, -12, 20 - x1, 44, { relleno: l.c.mag, opacidad: 0.12 });
      l.trazo([[0, 0], [20, 0]], { color: l.c.cuadricula, guiones: [4, 4] });
      l.texto('0 °C', [20, 0], { dx: 4, dy: 4, color: l.c.tintaSuave, tam: 11 });
      l.trazo([[-2, Tc], [0, Tc], [x1, Tm], [20, Tf], [22, Tf]], { color: l.c.calor, ancho: 3 });
      l.punto([x1, Tm], { color: l.c.tinta, texto: `${Tm.toFixed(1)} °C` });
      l.texto(MATERIALES[m1][0], [x1 / 2, 30], { alinear: 'center', tam: 12 });
      l.texto(MATERIALES[m2][0], [(x1 + 20) / 2, 30], { alinear: 'center', tam: 12 });
      m.leer(
        m.dato('Flujo de calor H', `${num(H)} W`),
        m.dato('Pérdida en una hora', `${num(H * 3600)} J`),
        m.dato('Temperatura en la interfaz', `${num(Tm)} °C`),
        m.dato('Resistencia térmica total', `${num((L1 / 1000) / k1 + (L2 / 1000) / k2)} K/W`));
    });
  },
};

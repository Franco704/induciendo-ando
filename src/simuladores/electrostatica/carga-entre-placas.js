import { E, ME, MP, num } from '../../fisica/constantes.js';

const r = String.raw;

// TP 2, ejercicio 7: un electrón entra entre placas de 2,00 cm de largo y 1,00 cm de separación.
export default {
  resumen: r`Una partícula entra entre dos placas con velocidad horizontal $v_0$. El campo uniforme la acelera solo en vertical ($a=qE/m$), así que describe una **parábola**, igual que un proyectil. Fuera de las placas el campo es nulo y sale en línea recta.`,
  observa: [
    r`Con los valores del TP 2 (ej. 7), un electrón a $1{,}60\cdot10^6$ m/s roza la placa superior con $E=364$ N/C.`,
    'Cambiá a protón con el mismo campo: se desvía hacia abajo unas 1800 veces menos. La masa es la que manda.',
    'La gravedad no aparece: para un electrón en 364 N/C, la fuerza eléctrica es unas 10¹³ veces el peso.',
  ],
  montar(m) {
    const largo = 0.02, sep = 0.01;
    let particula = 'electron', Ecampo = 364, v0 = 1.6e6;
    const L = m.lienzo({ x: [-0.004, 0.036], y: [-0.009, 0.009], proporcional: false, etiqueta: 'Trayectoria de una carga entre placas paralelas' });
    L.canvas.classList.add('lienzo--bajo');
    m.panel.append(
      m.selector({ etiqueta: 'Partícula', opciones: [['electron', 'Electrón'], ['proton', 'Protón']], valor: particula, alCambiar: (v) => { particula = v; L.redibujar(); } }),
      m.deslizador({ etiqueta: 'Campo E (N/C, hacia abajo)', min: 0, max: 2000, paso: 1, valor: Ecampo, formato: (v) => v.toFixed(0), alCambiar: (v) => { Ecampo = v; L.redibujar(); } }),
      m.deslizador({ etiqueta: 'v₀ (10⁶ m/s)', min: 0.5, max: 4, paso: 0.05, valor: v0 / 1e6, alCambiar: (v) => { v0 = v * 1e6; L.redibujar(); } }));
    L.alDibujar((l) => {
      const q = particula === 'electron' ? -E : E, masa = particula === 'electron' ? ME : MP;
      // E apunta hacia −y: la aceleración vertical es q(−E)/m
      const ay = (q * -Ecampo) / masa;
      l.rect(0, sep / 2, largo, 0.0006, { relleno: l.c.mas });
      l.rect(0, -sep / 2 - 0.0006, largo, 0.0006, { relleno: l.c.menos });
      for (let x = 0.002; x < largo; x += 0.004) l.flecha([x, 0.0035], [0, -0.006], { color: l.c.elec, ancho: 1, cabeza: 6 });
      const pts = [];
      let choca = null;
      for (let t = 0; ; t += largo / v0 / 200) {
        const x = v0 * t;
        if (x > 0.036) break;
        const dentro = x <= largo;
        const tSal = Math.min(t, largo / v0);
        let y = 0.5 * ay * tSal * tSal + (dentro ? 0 : ay * tSal * (t - tSal));
        if (dentro && Math.abs(y) >= sep / 2) { choca = x; pts.push([x, Math.sign(y) * sep / 2]); break; }
        pts.push([x, y]);
      }
      l.trazo([[-0.004, 0], [0, 0]], { color: l.c.tintaSuave, guiones: [4, 4] });
      l.trazo(pts, { color: l.c.mag, ancho: 2.5 });
      l.punto([0, 0], { color: q < 0 ? l.c.menos : l.c.mas, radio: 5 });
      const tPlaca = largo / v0;
      const ySal = 0.5 * ay * tPlaca * tPlaca;
      m.leer(
        m.dato('Aceleración', `${num(Math.abs(ay))} m/s², hacia ${ay > 0 ? 'arriba' : 'abajo'}`),
        m.dato('Tiempo entre placas', `${num(tPlaca)} s`),
        choca ? m.dato('Choca con una placa en x =', `${num(choca * 100)} cm`) : m.dato('Desvío al salir', `${num(Math.abs(ySal) * 1000)} mm`),
        m.dato('Fuerza eléctrica / peso', num((E * Ecampo) / (masa * 9.8))));
    });
  },
};

import { num } from '../../fisica/constantes.js';

const r = String.raw;
const MATERIALES = { acero: ['Acero', 1.2e-5], aluminio: ['Aluminio', 2.4e-5], cobre: ['Cobre', 1.7e-5], vidrio: ['Vidrio', 0.9e-5], invar: ['Invar', 0.09e-5] };

// Densidad del agua entre 0 y 12 °C (kg/m³), con el máximo a 3,98 °C
const densidadAgua = (T) => 1000 * (1 - ((T - 3.98) ** 2 * 6.8e-6));

export default {
  resumen: r`Dos varillas del mismo largo inicial $L_0=1$ m se calientan juntas. Cada una se alarga $\Delta L=\alpha L_0\Delta T$ con su propio coeficiente. En la vista **agua** se ve la anomalía: entre $0$ y $4\,^\circ$C el agua se **contrae** al calentarse.`,
  observa: [
    'El alargamiento real es de décimas de milímetro: el dibujo lo exagera 300 veces para que se vea.',
    'El aluminio se dilata el doble que el acero: soldadas, forman una lámina bimetálica que se curva (así funciona un termostato).',
    'A 4 °C el agua tiene su densidad máxima: por eso los lagos se congelan de arriba hacia abajo.',
  ],
  montar(m) {
    let A = 'acero', B = 'aluminio', dT = 100, vista = 'varillas';
    const L = m.lienzo({ x: [-0.1, 1.5], y: [-0.2, 1.1], proporcional: false, etiqueta: 'Dilatación de dos varillas o densidad del agua' });
    L.canvas.classList.add('lienzo--medio');
    const opciones = Object.entries(MATERIALES).map(([k, [n]]) => [k, n]);
    m.panel.append(
      m.selector({ etiqueta: 'Vista', opciones: [['varillas', 'Varillas'], ['agua', 'Agua de 0 a 12 °C']], valor: vista, alCambiar: (x) => { vista = x; L.redibujar(); } }),
      m.selector({ etiqueta: 'Varilla de arriba', opciones, valor: A, alCambiar: (x) => { A = x; L.redibujar(); } }),
      m.selector({ etiqueta: 'Varilla de abajo', opciones, valor: B, alCambiar: (x) => { B = x; L.redibujar(); } }),
      m.deslizador({ etiqueta: 'ΔT (°C)', min: -100, max: 300, paso: 1, valor: dT, formato: (x) => x.toFixed(0), alCambiar: (x) => { dT = x; L.redibujar(); } }));
    L.alDibujar((l) => {
      const c = l.c;
      if (vista === 'agua') {
        l.ejes({ marcas: false });
        const pts = [];
        for (let T = 0; T <= 12; T += 0.05) pts.push([0.05 + (T / 12) * 1.35, 0.05 + ((densidadAgua(T) - 999.6) / 0.45) * 0.95]);
        l.trazo(pts, { color: c.frio, ancho: 2.5 });
        l.punto([0.05 + (3.98 / 12) * 1.35, 0.05 + ((1000 - 999.6) / 0.45) * 0.95], { color: c.calor, texto: 'máximo a 4 °C' });
        l.texto('ρ (kg/m³)', [0, 1.05], { color: c.tintaSuave, tam: 11 });
        l.texto('T (°C) →', [1.25, -0.12], { color: c.tintaSuave, tam: 11 });
        m.leer(m.dato('ρ a 0 °C', `${num(densidadAgua(0), 6)} kg/m³`), m.dato('ρ a 4 °C', `${num(densidadAgua(3.98), 6)} kg/m³`), m.dato('β entre 0 y 4 °C', 'negativo'));
        return;
      }
      const exag = 300;
      const barra = (k, y) => {
        const [nombre, alfa] = MATERIALES[k], dL = alfa * 1 * dT;
        l.rect(0, y, 1, 0.12, { relleno: c.tintaSuave, opacidad: 0.25 });
        l.rect(0, y, 1 + dL * exag, 0.12, { relleno: dT >= 0 ? c.calor : c.frio, opacidad: 0.55 });
        l.texto(`${nombre}: α = ${num(alfa)} °C⁻¹`, [0, y + 0.12], { dy: -6, tam: 12 });
        return dL;
      };
      l.rect(-0.08, 0.1, 0.08, 0.8, { relleno: c.tinta });
      const dA = barra(A, 0.6), dB = barra(B, 0.2);
      l.trazo([[1, 0.05], [1, 0.95]], { color: c.tintaSuave, guiones: [4, 4] });
      m.leer(
        m.dato(`ΔL ${MATERIALES[A][0].toLowerCase()}`, `${num(dA * 1000)} mm`),
        m.dato(`ΔL ${MATERIALES[B][0].toLowerCase()}`, `${num(dB * 1000)} mm`),
        m.dato('Diferencia', `${num(Math.abs(dA - dB) * 1000)} mm`));
    });
  },
};

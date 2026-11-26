// El motor de física contra las respuestas de los trabajos prácticos y de los exámenes resueltos.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { K, EPS0, MU0, E, ME, MP, num } from '../src/fisica/constantes.js';
import { campo, potencial, fuerzaSobre, energiaSistema, gauss, lineasDeCampo } from '../src/fisica/electrostatica.js';
import { paralelo, capSerie, capParalelo, rcCarga, rcDescarga, rlSubida, rlcSerie, rlcLibre, rCritica, resolverRed } from '../src/fisica/circuitos.js';
import { campoHilo, radioCiclotron, periodoCiclotron, fuerzaParalelos, campoDeHilos, trayectoria } from '../src/fisica/magnetismo.js';
import { malus, intensidadRendijas, bragg } from '../src/fisica/optica.js';
import { equilibrioAguaHielo, proceso, conduccion, copCarnot } from '../src/fisica/termodinamica.js';

const cerca = (real, esperado, tol = 0.01) => assert.ok(Math.abs(real - esperado) <= Math.abs(esperado) * tol, `${real} ≉ ${esperado}`);

test('formato con coma y potencias', () => {
  assert.equal(num(4.82e7), '4,82·10⁷');
  assert.equal(num(0.0616), '0,0616');
  assert.equal(num(-2.1e-8), '-2,10·10⁻⁸');
});

test('TP1: fuerza neta sobre Q = 4 µC por dos cargas de 2 µC', () => {
  const cargas = [{ q: 2e-6, x: 0, y: 0.3 }, { q: 2e-6, x: 0, y: -0.3 }, { q: 4e-6, x: 0.4, y: 0 }];
  const [fx, fy] = fuerzaSobre(cargas, 2);
  cerca(fx, 0.46, 0.02);
  assert.ok(Math.abs(fy) < 1e-9);
});

test('TP2 ej 9: campo de dos cargas de 6 nC', () => {
  const cargas = [{ q: 6e-9, x: 0.15, y: 0 }, { q: 6e-9, x: -0.15, y: 0 }];
  assert.ok(Math.hypot(...campo(cargas, 0, 0)) < 1e-6);
  cerca(Math.hypot(...campo(cargas, 0.3, 0)), 2660);
  cerca(Math.hypot(...campo(cargas, 0, 0.2)), 1380);
});

test('TP4: potencial y energía', () => {
  cerca(potencial([{ q: 12e-6, x: 0, y: 0 }, { q: -6e-6, x: 0.16, y: 0 }], 0.08, 0), 675e3);
  // Final 17-05-2023, ítem 8: W = qV_C = 6,0·10⁻² J
  const lado = 3, cargas = [{ q: 2e-6, x: 0, y: 0 }, { q: 2e-6, x: lado, y: 0 }];
  cerca(5e-6 * potencial(cargas, lado / 2, lado * Math.sqrt(3) / 2), 0.06, 0.01);
  // Tres cargas q, q y −q/2 en un triángulo equilátero: trabajo total nulo
  const d = 1, t = [{ q: 1, x: 0, y: 0 }, { q: 1, x: d, y: 0 }, { q: -0.5, x: d / 2, y: d * Math.sqrt(3) / 2 }];
  assert.ok(Math.abs(energiaSistema(t)) < 1e-3);
});

test('Gauss: varilla y placa (TP3)', () => {
  cerca(gauss.linea(30e-9, 0.1, 0.05), 5400, 0.01);
  assert.equal(gauss.linea(30e-9, 0.03, 0.05), 0);
  // Pastilla atraída por la placa: v = √(2|q|σd/(2ε0 m))
  const a = (3.69e-6 * gauss.plano(6.42e-7)) / 4.75e-3;
  cerca(Math.sqrt(2 * a * 0.866), 6.98, 0.01);
});

test('líneas de campo de un dipolo terminan en la carga negativa', () => {
  const lineas = lineasDeCampo([{ q: 1, x: -1, y: 0 }, { q: -1, x: 1, y: 0 }]);
  assert.ok(lineas.length >= 8);
  const llegan = lineas.filter((l) => Math.hypot(l.at(-1)[0] - 1, l.at(-1)[1]) < 0.1).length;
  assert.ok(llegan >= lineas.length / 2);
});

test('capacitores (TP5) y circuitos RC (TP8)', () => {
  cerca(capSerie(3, 6), 2);
  cerca(capParalelo(3, 6), 9);
  // TP8 ej 1: 2 nF, 5,1 µC, 1,3 kΩ, a los 9 µs
  const d = rcDescarga(5.1e-6, 1.3e3, 2e-9, 9e-6);
  cerca(Math.abs(d.i), 0.0616, 0.01);
  // TP8 ej 9: a los 10 s
  const c = rcCarga(10, 2e6, 1e-6, 10);
  cerca(c.q, 9.93e-6, 0.01);
  cerca(c.i, 33.7e-9, 0.01);
  // 1.er parcial 25-06-2025: I(10 s) con τ = 5 s
  cerca(rcCarga(30, 1e6, 5e-6, 10).i, 4.06e-6, 0.01);
});

test('red resistiva por nodos (Kirchhoff)', () => {
  // Final 17-05-2023, ítem 4: (3 Ω ∥ 6 Ω) + (12 Ω ∥ 4 Ω) con 60 V → 12 A
  cerca(60 / (paralelo(3, 6) + paralelo(12, 4)), 12);
  // Puente del final 02-12-2010 con ε = 7, R = 1: corriente en el medidor = ε/(7R) = 1 A
  // Nodos: 0 = borne −, 1 = borne +, 2 = nodo medio (el medidor une los dos medios)
  const { V, I } = resolverRed(3, [
    { a: 0, b: 1, R: 1e-9, fem: 7 },
    { a: 1, b: 2, R: 2 }, { a: 1, b: 2, R: 1 },
    { a: 2, b: 0, R: 1 }, { a: 2, b: 0, R: 1 },
  ]);
  cerca(V[1], 7, 0.001);
  cerca(I[1], 2, 0.01); // por 2R pasa 2ε/(7R)
  cerca(I[3], 3, 0.01); // por cada R de abajo pasa 3ε/(7R): el medidor lleva 3 − 2 = 1
});

test('RL, LC y RLC (TP13 y TP14)', () => {
  // TP13 ej 3: la corriente llega a la mitad en 17,3 µs
  const tau = 1.25e-3 / 50;
  cerca(tau * Math.log(2), 17.3e-6, 0.01);
  cerca(rlSubida(35, 50, 1.25e-3, 17.3e-6).i, 0.35, 0.01);
  // TP13 ej 8: f = 503 Hz
  cerca(rlcLibre(12e-6, 0, 0.1, 1e-6, 0).w0 / (2 * Math.PI), 503, 0.01);
  cerca(rCritica(22e-3, 15e-9), 2422, 0.01);
  // TP14 ej 10
  const r = rlcSerie({ R: 240, L: 0.12, C: 7.3e-6, V: 1, w: 2 * Math.PI * 400 });
  cerca(r.Z, 344, 0.01);
  cerca((r.fi * 180) / Math.PI, 45.8, 0.01);
  cerca(r.fp, 0.697, 0.01);
  cerca(r.w0 / (2 * Math.PI), 170, 0.01);
  // 2.º parcial 11-11-2026: resonancia con ω = 5000 y L = 20 mH → C = 2 µF
  cerca(1 / (5000 ** 2 * 0.02), 2e-6);
});

test('magnetostática (TP9 y TP10)', () => {
  cerca(radioCiclotron(3.347e-27, 1.72e7, E, 1.2), 0.3, 0.01);
  cerca(fuerzaParalelos(10, 15, 1), 3e-5);
  // TP10 ej 6: 3 A y 3 A entrantes, P a 5 cm y 12 cm (ángulo recto en P): 13 µT
  const B = campoDeHilos([{ x: 0, y: 0.13, I: -3 }, { x: 0, y: 0, I: -3 }], 0.12 * (5 / 13) * (12 / 13) / (5 / 13) * (5 / 13), 0);
  assert.ok(B.every(Number.isFinite));
  cerca(Math.hypot(campoHilo(3, 0.05), campoHilo(3, 0.12)), 13e-6, 0.01);
  // 2.º parcial 28-11-2023: electrón, r = 7,58 mm y T = 2,38·10⁻⁸ s
  cerca(radioCiclotron(ME, 2e6, E, 15e-4), 7.58e-3, 0.01);
  cerca(periodoCiclotron(ME, E, 15e-4), 2.38e-8, 0.01);
});

test('Boris: una carga en B uniforme da una vuelta en un período', () => {
  const B = 1e-3, q = E, m = ME, T = periodoCiclotron(m, q, B);
  const pasos = 2000, pts = trayectoria({ q, m, r0: [0, 0, 0], v0: [1e5, 0, 0], B: [0, 0, B], dt: T / pasos, pasos });
  const fin = pts.at(-1);
  assert.ok(Math.hypot(fin[0], fin[1]) < radioCiclotron(m, 1e5, q, B) * 0.02);
});

test('óptica (TP17)', () => {
  assert.ok(malus(1, [0, Math.PI / 2]) < 1e-20);
  cerca(malus(1, [0, (62 * Math.PI) / 180, Math.PI / 2]), 0.0851, 0.01);
  cerca(intensidadRendijas(0.001, { N: 2, d: 1e-3, lambda: 500e-9 }), Math.cos((Math.PI * 1e-3 * Math.sin(0.001)) / 500e-9) ** 2, 1e-6);
  cerca(bragg(3.5e-10, (15 * Math.PI) / 180), 0.181e-9, 0.01);
});

test('calorimetría (TP19 y finales)', () => {
  // Final 25-11-2026: 600 g de agua a 15 °C + 50 g de hielo a −18 °C → 7,0 °C
  cerca(equilibrioAguaHielo({ agua: [{ m: 600, T: 15 }], hielo: [{ m: 50, T: -18 }] }).T, 7.0, 0.01);
  // Final 02-12-2010: 400 g de hielo a −20 °C (c = 0,55) + 1080 g de agua a 30 °C → 0 °C con 50 g de hielo
  const r = equilibrioAguaHielo({ agua: [{ m: 1080, T: 30 }], hielo: [{ m: 400, T: -20 }] }, { cHielo: 0.55 });
  assert.equal(r.T, 0);
  cerca(r.hieloFinal, 50, 0.001);
  // Final 27-05-2010: calorímetro de 80 g + 100 g de agua a 20 °C + 80 g de hielo a −30 °C → 50 g de hielo
  cerca(equilibrioAguaHielo({ agua: [{ m: 180, T: 20 }], hielo: [{ m: 80, T: -30 }] }).hieloFinal, 50, 0.001);
});

test('gas ideal (TP19) y máquinas', () => {
  const iso = proceso('isotermico', { n: 2, T1: 300, V1: 0.123, V2: 0.041 });
  cerca(-iso.W, 5.48e3, 0.01);
  const b = proceso('isobarico', { n: 1, T1: 300, V1: 1, V2: 3, P1: 2500 });
  cerca(b.T2, 900, 0.001);
  cerca(b.W, 5000, 0.001);
  const ad = proceso('adiabatico', { n: 1, T1: 280, V1: 15.3, V2: 1, gamma: 1.4 });
  cerca(ad.T2, 833, 0.01);
  cerca(copCarnot(300, 200), 2);
  cerca(conduccion(50.2, 0.15, 5.52, 8.5e-3), (0.39 * 2.256e6) / 180, 0.01);
});

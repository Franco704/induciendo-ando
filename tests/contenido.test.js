// Estructura del contenido: módulos completos, referencias que existen y fórmulas que cierran.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MODULOS, cargarModulo } from '../src/temario/indice.js';
import { SIMULADORES } from '../src/simuladores/indice.js';
import { EXAMENES } from '../src/examenes/examenes.js';
import { FORMULARIO } from '../src/estudio/formulario.js';
import { VIDEOS } from '../src/estudio/videos.js';

const modulos = await Promise.all(MODULOS.map((m) => cargarModulo(m.id)));
const ids = new Set(MODULOS.map((m) => m.id));

// Fórmulas balanceadas: cuenta los $ que no están escapados
const dolaresImpares = (s) => (String(s).replace(/\\\$/g, '').match(/\$/g) || []).length % 2 === 1;
const textos = (m) => [m.intro, ...(m.teoria || []).map((t) => t.texto), ...(m.ejercicios || []).flatMap((e) => [e.enunciado, ...(e.pasos || []), e.respuesta]), ...(m.preguntas || []).flatMap((q) => [q.p, q.por, ...q.opciones])];

test('cada módulo tiene teoría, ejercicios y preguntas', () => {
  for (const m of modulos) {
    assert.ok(m.intro, `${m.id} sin intro`);
    assert.ok(m.teoria?.length >= 3, `${m.id}: poca teoría`);
    assert.ok(m.ejercicios?.length >= 5, `${m.id}: pocos ejercicios`);
    assert.ok(m.preguntas?.length >= 6, `${m.id}: pocas preguntas`);
  }
});

test('ninguna fórmula queda abierta', () => {
  for (const m of modulos) for (const t of textos(m)) if (t) assert.ok(!dolaresImpares(t), `${m.id}: $ impar en «${String(t).slice(0, 80)}»`);
  for (const e of EXAMENES) for (const i of e.items) for (const t of [i.enunciado, i.resolucion, ...(i.opciones || [])]) if (t) assert.ok(!dolaresImpares(t), `${e.id} ${i.n}: $ impar`);
});

test('preguntas: ids únicos y respuesta válida', () => {
  const vistos = new Set();
  for (const m of modulos) for (const q of m.preguntas) {
    assert.ok(!vistos.has(q.id), `id repetido ${q.id}`);
    vistos.add(q.id);
    assert.ok(q.ok >= 0 && q.ok < q.opciones.length, `${q.id}: ok fuera de rango`);
    assert.ok(q.por, `${q.id}: falta la explicación`);
  }
});

test('la opción correcta no es casi siempre la más larga', () => {
  const todas = [...modulos.flatMap((m) => m.preguntas), ...EXAMENES.flatMap((e) => e.items.filter((i) => i.tipo === 'opcion'))];
  const larga = todas.filter((q) => q.opciones[q.ok].length === Math.max(...q.opciones.map((o) => o.length))).length;
  assert.ok(larga / todas.length < 0.5, `${larga} de ${todas.length} correctas son la opción más larga`);
});

test('referencias: simuladores, módulos, exámenes y videos existen', () => {
  for (const m of MODULOS) for (const l of m.labs) assert.ok(SIMULADORES[l], `${m.id}: simulador ${l} no existe`);
  for (const m of modulos) for (const e of m.ejercicios) if (e.lab) assert.ok(SIMULADORES[e.lab], `${m.id}: lab ${e.lab}`);
  const exIds = new Set();
  for (const e of EXAMENES) {
    assert.ok(!exIds.has(e.id), `examen repetido ${e.id}`);
    exIds.add(e.id);
    for (const i of e.items) {
      assert.ok(ids.has(i.tema), `${e.id} ${i.n}: tema ${i.tema}`);
      assert.ok(['teoria', 'practica', 'opcion'].includes(i.tipo), `${e.id} ${i.n}: tipo ${i.tipo}`);
      if (i.lab) assert.ok(SIMULADORES[i.lab], `${e.id} ${i.n}: lab ${i.lab}`);
      if (i.tipo === 'opcion') assert.ok(i.ok >= 0 && i.ok < i.opciones.length, `${e.id} ${i.n}: ok`);
      else assert.ok(i.resolucion, `${e.id} ${i.n}: sin resolución`);
    }
  }
  for (const g of FORMULARIO) assert.ok(ids.has(g.modulo), `formulario: ${g.modulo}`);
  for (const v of VIDEOS) assert.ok(ids.has(v.modulo), `video: ${v.modulo}`);
});

test('el simulacro de final tiene teoría y aplicación en los tres bloques', async () => {
  const { BLOQUES, bloqueDe } = await import('../src/examenes/examenes.js');
  const items = EXAMENES.flatMap((e) => e.items);
  for (const b of BLOQUES) {
    assert.ok(items.some((i) => bloqueDe(i.tema) === b.id && i.tipo === 'teoria'), `${b.id} sin teoría`);
    assert.ok(items.some((i) => bloqueDe(i.tema) === b.id && i.tipo === 'practica'), `${b.id} sin práctica`);
  }
});

// Las vistas importan KaTeX desde la CDN y no se cargan en Node: al menos que todo src/ parsee.
test('todo src/ es JavaScript válido', async () => {
  const { readdirSync } = await import('node:fs');
  const { execFileSync } = await import('node:child_process');
  const archivos = readdirSync('src', { recursive: true }).filter((f) => f.endsWith('.js'));
  for (const f of archivos) execFileSync(process.execPath, ['--check', `src/${f}`]);
});

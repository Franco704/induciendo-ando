// Registro de simuladores (Registry + carga perezosa). Para sumar uno: crear el archivo y agregar una línea.
// parcial: 1 = electricidad, 2 = electromagnetismo, ondas y calor (define el color y el grupo en el catálogo).

export const SIMULADORES = {
  coulomb: { titulo: 'Fuerzas entre cargas', parcial: 1, carga: () => import('./electrostatica/coulomb.js') },
  'lineas-de-campo': { titulo: 'Líneas de campo eléctrico', parcial: 1, carga: () => import('./electrostatica/lineas-de-campo.js') },
  'carga-entre-placas': { titulo: 'Una carga entre placas paralelas', parcial: 1, carga: () => import('./electrostatica/carga-entre-placas.js') },
  gauss: { titulo: 'Ley de Gauss: E(r) por simetría', parcial: 1, carga: () => import('./electrostatica/gauss.js') },
  equipotenciales: { titulo: 'Potencial y superficies equipotenciales', parcial: 1, carga: () => import('./electrostatica/equipotenciales.js') },
  capacitor: { titulo: 'Capacitor con dieléctrico', parcial: 1, carga: () => import('./circuitos/capacitor.js') },
  deriva: { titulo: 'Electrones a la deriva', parcial: 1, carga: () => import('./circuitos/deriva.js') },
  kirchhoff: { titulo: 'Un circuito de dos mallas', parcial: 1, carga: () => import('./circuitos/kirchhoff.js') },
  rc: { titulo: 'Carga y descarga de un RC', parcial: 1, carga: () => import('./circuitos/rc.js') },
  'carga-en-campo-b': { titulo: 'Cargas en un campo magnético', parcial: 1, carga: () => import('./magnetismo/carga-en-campo-b.js') },
  'campo-de-corrientes': { titulo: 'Campo de corrientes rectas', parcial: 1, carga: () => import('./magnetismo/campo-de-corrientes.js') },
  faraday: { titulo: 'Fem de movimiento: la barra sobre rieles', parcial: 2, carga: () => import('./induccion/faraday.js') },
  rl: { titulo: 'Corriente en un RL', parcial: 2, carga: () => import('./induccion/rl.js') },
  'rlc-libre': { titulo: 'Oscilaciones LC y RLC', parcial: 2, carga: () => import('./induccion/rlc-libre.js') },
  fasores: { titulo: 'Fasores y resonancia en un RLC', parcial: 2, carga: () => import('./induccion/fasores.js') },
  transformador: { titulo: 'Transformador y transmisión', parcial: 2, carga: () => import('./induccion/transformador.js') },
  'onda-em': { titulo: 'Una onda electromagnética', parcial: 2, carga: () => import('./ondas/onda-em.js') },
  polarizadores: { titulo: 'Polarizadores en cadena', parcial: 2, carga: () => import('./ondas/polarizadores.js') },
  interferencia: { titulo: 'Rendijas: interferencia y difracción', parcial: 2, carga: () => import('./ondas/interferencia.js') },
  dilatacion: { titulo: 'Dilatación térmica', parcial: 2, carga: () => import('./termodinamica/dilatacion.js') },
  'gas-ideal': { titulo: 'Gas ideal en un cilindro', parcial: 2, carga: () => import('./termodinamica/gas-ideal.js') },
  calorimetria: { titulo: 'Calorímetro: agua y hielo', parcial: 2, carga: () => import('./termodinamica/calorimetria.js') },
  'ciclo-pv': { titulo: 'Procesos y ciclos en el diagrama p–V', parcial: 2, carga: () => import('./termodinamica/ciclo-pv.js') },
  conduccion: { titulo: 'Conducción a través de una pared', parcial: 2, carga: () => import('./termodinamica/conduccion.js') },
};

export async function cargarSimulador(id) {
  const meta = SIMULADORES[id];
  if (!meta) return null;
  const lab = (await meta.carga()).default;
  return { id, titulo: meta.titulo, parcial: meta.parcial, ...lab };
}

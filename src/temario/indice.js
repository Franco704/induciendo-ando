// Mapa de la materia. Los metadatos viven acá (livianos) y el contenido de cada módulo se carga al entrar.

export const PARCIALES = [
  {
    n: 1, titulo: 'Primer parcial', tema: 'Electricidad',
    descripcion: 'Carga, campo y ley de Gauss, potencial, capacitores y dieléctricos, corriente y circuitos de corriente continua, fuerza magnética y fuentes de campo magnético.',
  },
  {
    n: 2, titulo: 'Segundo parcial', tema: 'Electromagnetismo, ondas y calor',
    descripcion: 'Inducción e inductancia, circuitos RL, LC y RLC, corriente alterna y transformadores, ecuaciones de Maxwell y ondas, óptica física y termodinámica.',
  },
];

export const UNIDADES = {
  estatica: 'Electrostática',
  capacitores: 'Capacitores y dieléctricos',
  cinetica: 'Electrocinética',
  magnetostatica: 'Magnetostática',
  induccion: 'Inducción magnética y corriente alterna',
  ondas: 'Ecuaciones de Maxwell y ondas electromagnéticas',
  optica: 'Polarización, interferencia y difracción',
  termo: 'Termodinámica',
};

// id = mNN: es la ruta (#/modulo/m09) y la clave del progreso guardado, así que no cambia; archivo = el tema
const ARCHIVOS = {
  m01: 'carga-y-fuerza-electrica', m02: 'campo-electrico', m03: 'ley-de-gauss', m04: 'potencial-electrico',
  m05: 'capacitores-y-dielectricos', m06: 'corriente-y-resistencia', m07: 'circuitos-de-corriente-continua', m08: 'circuitos-rc',
  m09: 'fuerza-magnetica', m10: 'fuentes-de-campo-magnetico', m11: 'ley-de-faraday-y-lenz', m12: 'inductancia',
  m13: 'circuitos-rl-lc-rlc', m14: 'corriente-alterna', m15: 'transformador-y-magnetismo-en-la-materia',
  m16: 'maxwell-y-ondas-electromagneticas', m17: 'polarizacion-interferencia-y-difraccion',
  m18: 'temperatura-dilatacion-y-gases', m19: 'calor-y-primer-principio',
};
const m = (tp, parcial, unidad, titulo, resumen, labs = []) => {
  const id = `m${String(tp).padStart(2, '0')}`;
  return { id, archivo: ARCHIVOS[id], tp, parcial, unidad, titulo, resumen, labs };
};

export const MODULOS = [
  m(1, 1, 'estatica', 'Carga y fuerza eléctrica', 'Ley de Coulomb y superposición', ['coulomb']),
  m(2, 1, 'estatica', 'Campo eléctrico', 'Líneas de campo y cargas que se aceleran', ['lineas-de-campo', 'carga-entre-placas']),
  m(3, 1, 'estatica', 'Ley de Gauss', 'Flujo y simetría: esferas, cilindros y planos', ['gauss']),
  m(4, 1, 'estatica', 'Potencial eléctrico', 'Energía, potencial y equipotenciales', ['equipotenciales']),
  m(5, 1, 'capacitores', 'Capacitores y dieléctricos', 'Capacidad, asociaciones, energía y polarización', ['capacitor']),
  m(6, 1, 'cinetica', 'Corriente y resistencia', 'Velocidad de deriva, ley de Ohm y potencia', ['deriva']),
  m(7, 1, 'cinetica', 'Circuitos de corriente continua', 'Kirchhoff, fem, resistencia interna e instrumentos', ['kirchhoff']),
  m(8, 1, 'cinetica', 'Circuitos RC', 'Carga y descarga de un capacitor', ['rc']),
  m(9, 1, 'magnetostatica', 'Fuerza magnética', 'Lorentz, órbitas, selector de velocidades y torque', ['carga-en-campo-b']),
  m(10, 1, 'magnetostatica', 'Fuentes de campo magnético', 'Biot-Savart, Ampère, hilos, espiras y solenoides', ['campo-de-corrientes']),
  m(11, 2, 'induccion', 'Ley de Faraday y Lenz', 'Fem inducida por flujo variable y fem de movimiento', ['faraday']),
  m(12, 2, 'induccion', 'Inductancia', 'Autoinducción, inductancia mutua y energía magnética', ['rl']),
  m(13, 2, 'induccion', 'Circuitos RL, LC y RLC', 'Transitorios y oscilaciones eléctricas', ['rl', 'rlc-libre']),
  m(14, 2, 'induccion', 'Corriente alterna', 'Reactancias, impedancia, fasores, resonancia y potencia', ['fasores']),
  m(15, 2, 'induccion', 'Transformador y magnetismo en la materia', 'Relación de vueltas, transmisión e imantación', ['transformador']),
  m(16, 2, 'ondas', 'Maxwell y ondas electromagnéticas', 'Corriente de desplazamiento, ondas, Poynting y presión', ['onda-em']),
  m(17, 2, 'optica', 'Polarización, interferencia y difracción', 'Malus, Young, rendijas, redes y Bragg', ['polarizadores', 'interferencia']),
  m(18, 2, 'termo', 'Temperatura, dilatación y gases', 'Escalas, dilatación y gas ideal', ['dilatacion', 'gas-ideal']),
  m(19, 2, 'termo', 'Calor y primer principio', 'Calorimetría, procesos, transferencia de calor y máquinas', ['calorimetria', 'ciclo-pv', 'conduccion']),
];

export const moduloPorId = (id) => MODULOS.find((x) => x.id === id);
export const modulosDe = (parcial) => MODULOS.filter((x) => x.parcial === parcial);

// Carga perezosa del contenido (Virtual Proxy): el primer parcial no descarga el texto del segundo.
export async function cargarModulo(id) {
  const meta = moduloPorId(id);
  if (!meta) return null;
  const carpeta = meta.parcial === 1 ? 'primer-parcial' : 'segundo-parcial';
  const contenido = (await import(`./${carpeta}/${meta.archivo}.js`)).default;
  return { ...meta, ...contenido };
}

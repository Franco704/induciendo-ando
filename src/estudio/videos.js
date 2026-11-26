// Videos animados de la guía, generados por código (scripts/videos/). archivo = videos/<archivo>.mp4 y .jpg (portada).
export const VIDEOS = [
  { archivo: 'campo-electrico', modulo: 'm02', titulo: 'El campo eléctrico y la superposición', resumen: 'De la fuerza de Coulomb al campo: una carga de prueba, las líneas de campo y cómo se suman los aportes de varias cargas.' },
  { archivo: 'ley-de-gauss', modulo: 'm03', titulo: 'Flujo y ley de Gauss', resumen: 'Qué mide el flujo, por qué no depende de la forma de la superficie y cómo la simetría convierte una integral en una cuenta.' },
  { archivo: 'potencial-electrico', modulo: 'm04', titulo: 'Potencial y equipotenciales', resumen: 'El potencial como altura eléctrica: superficies equipotenciales, trabajo y la relación E = −dV/dx.' },
  { archivo: 'capacitor-y-dielectrico', modulo: 'm05', titulo: 'El capacitor y el dieléctrico', resumen: 'Qué pasa con la carga, la tensión y el campo al meter un dieléctrico, con la fuente conectada y desconectada.' },
  { archivo: 'circuito-rc', modulo: 'm08', titulo: 'Carga y descarga de un capacitor', resumen: 'La corriente que se apaga y la tensión que sube: el significado de τ = RC y por qué a las 5τ se considera cargado.' },
  { archivo: 'fuerza-magnetica', modulo: 'm09', titulo: 'Cargas en un campo magnético', resumen: 'La fuerza de Lorentz es perpendicular a la velocidad: círculos, hélices, el selector de velocidades y el espectrómetro.' },
  { archivo: 'campo-de-corrientes', modulo: 'm10', titulo: 'Corrientes que crean campos', resumen: 'El campo circular de un hilo, la regla de la mano derecha y por qué dos corrientes paralelas se atraen.' },
  { archivo: 'faraday-y-lenz', modulo: 'm11', titulo: 'Faraday y Lenz', resumen: 'Un flujo que cambia induce una fem. La barra sobre los rieles, el sentido de la corriente y la fuerza que la frena.' },
  { archivo: 'oscilaciones-lc', modulo: 'm13', titulo: 'Oscilaciones LC y RLC', resumen: 'La energía va y viene entre el capacitor y la bobina; la resistencia la apaga de a poco.' },
  { archivo: 'fasores-y-resonancia', modulo: 'm14', titulo: 'Fasores y resonancia', resumen: 'Vectores que giran para sumar tensiones desfasadas: impedancia, ángulo de fase y la resonancia de un RLC.' },
  { archivo: 'onda-electromagnetica', modulo: 'm16', titulo: 'La onda electromagnética', resumen: 'Campos eléctrico y magnético perpendiculares, en fase, viajando a c. Intensidad y vector de Poynting.' },
  { archivo: 'interferencia-de-young', modulo: 'm17', titulo: 'Interferencia de Young', resumen: 'Dos rendijas, dos caminos: la diferencia de camino decide si hay franja brillante u oscura.' },
  { archivo: 'calor-y-primer-principio', modulo: 'm19', titulo: 'Calor, cambio de fase y primer principio', resumen: 'La curva temperatura-calor del agua, las mesetas de cambio de fase y Q = ΔU + W en un pistón.' },
];

export const videosDeModulo = (id) => VIDEOS.filter((v) => v.modulo === id);

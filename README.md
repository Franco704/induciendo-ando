# Induciendo Ando

Guía de estudio de **Física II (UTN-FRT, 2.º año)**, armada con las clases y los resúmenes de cada unidad, los 19 trabajos prácticos con sus respuestas, los cuestionarios del aula virtual y las fotos de los parciales y finales tomados desde 2010. Sirve para la cursada (por parcial y por TP) y, sobre todo, para preparar el final.

- **Primer parcial (electricidad):** TP 1 a 10. Carga y Coulomb, campo eléctrico, ley de Gauss, potencial, capacitores y dieléctricos, corriente y resistencia, circuitos de corriente continua, circuitos RC, fuerza magnética y fuentes de campo magnético.
- **Segundo parcial (electromagnetismo, ondas y calor):** TP 11 a 19. Faraday y Lenz, inductancia, circuitos RL, LC y RLC, corriente alterna, transformador y magnetismo en la materia, Maxwell y ondas electromagnéticas, polarización, interferencia y difracción, temperatura y gases, calor y primer principio.
- **24 simuladores interactivos:** fuerzas de Coulomb, líneas de campo que se arrastran, una carga entre placas, E(r) por la ley de Gauss, equipotenciales y trabajo, capacitor con dieléctrico (conectado o desconectado), electrones a la deriva, circuito de dos mallas resuelto por nodos, carga y descarga RC, órbitas y selector de velocidades, campo de corrientes rectas, barra sobre rieles (Faraday-Lenz), transitorio RL, oscilaciones LC y RLC, fasores y resonancia, transformador y transmisión, onda electromagnética, polarizadores en cadena, rendijas (interferencia y difracción), dilatación y anomalía del agua, gas ideal, calorímetro con agua y hielo, procesos en el diagrama p–V y conducción a través de una pared.
- **13 videos animados** (sin sonido, con subtítulos), generados por código.
- **48 exámenes resueltos:** 17 finales de la FRT (2010 a noviembre de 2026), un modelo de final de opción múltiple de la regional Buenos Aires (UTN-FRBA, marcado como tal) y 30 parciales, recuperatorios y pre-parciales (2018 a 2026), con 210 ítems resueltos paso a paso y enlazados a su TP.
- **Modo final:** ranking de los temas más tomados y simulacro con el formato actual (tres bloques, electricidad, termodinámica y electromagnetismo, cada uno con un tema de teoría y una aplicación).
- Teoría por TP, 113 ejercicios resueltos de los TP y de los exámenes (los pasos se revelan de a uno), 136 preguntas de autoevaluación más las de opción múltiple de los exámenes, simulacro por parcial, repaso de las falladas y hoja de fórmulas.

Donde la hoja de respuestas de un TP no coincide con el cálculo, la guía lo señala y da la versión correcta (por ejemplo TP 1 ej. 2, TP 5 ej. 8, TP 15 ej. 3 y TP 18 ej. 2).

Sitio en GitHub Pages: [franco704.github.io/induciendo-ando](https://franco704.github.io/induciendo-ando/)

## Gracias

Todo el material de esta guía lo recopiló **Ana Paula Lopez**: las clases y los resúmenes de cada unidad, los trabajos prácticos con sus respuestas, los cuestionarios del aula virtual, los informes de laboratorio y las fotos de más de cuarenta parciales y finales. Sin ese trabajo no habría ejercicios resueltos ni simulacros. Gracias.

## Cómo está hecha

HTML, CSS y JavaScript con módulos ES, sin build. Como los navegadores no cargan módulos desde `file://`, para verla en tu compu levantá un servidor estático en la carpeta (por ejemplo `python3 -m http.server`) y abrí `http://localhost:8000`. KaTeX se carga desde jsDelivr con versión fija. El progreso se guarda en el navegador (clave `induciendo-ando:v1`). Los módulos se identifican por su TP (`#/modulo/m09`): esos ids son las rutas y las claves del progreso.

La estructura cuenta de qué trata la materia (arquitectura *screaming*):

```
src/
  main.js            raíz de composición: conecta almacén, router y vistas
  temario/           índice de la materia y un archivo por TP (primer-parcial/, segundo-parcial/)
  fisica/            la física de la materia en funciones puras y probadas: electrostática, circuitos,
                     magnetismo, óptica y termodinámica
  simuladores/       un archivo por simulador, agrupados por tema, más su registro
  examenes/          finales y parciales resueltos, bloques del final y ranking de temas
  estudio/           hoja de fórmulas, catálogo de videos y otras guías
  vistas/            páginas: inicio, módulo, simuladores, exámenes, simulacros, fórmulas, videos
  ui/                átomos, moléculas y organismos (armazón, portada, marco de los simuladores)
  nucleo/            router por hash y almacén observable del progreso
  graficos/          Lienzo2D: un plano cartesiano sobre canvas que lee los colores del tema
styles/              tokens, base y una hoja por nivel, más la de los simuladores
scripts/videos/      motor de los videos (pycairo + ffmpeg) y el guion de cada uno
videos/              los videos y sus portadas
```

El diseño es *mobile-first*: en el celular todo se alcanza desde el dock inferior (Inicio, Índice, Simular, Simulacro, Repasar) y el cajón con el buscador y el índice de los dos parciales; desde 1024 px el índice queda fijo al costado y las herramientas pasan a la barra superior, y desde 1280 px el índice de secciones de cada módulo queda fijo a la derecha. La portada abre con un dipolo que se puede arrastrar: sus líneas de campo se calculan en vivo con `src/fisica/`. Tipografía: Schibsted Grotesk para títulos e interfaz, Source Serif 4 para la teoría y KaTeX para las fórmulas. Cian para el primer parcial, índigo para el segundo y ocre para el final; rojo y azul solo para el signo de las cargas.

Para sumar un simulador: crear el archivo con `{ resumen, observa, montar(m) }` y agregar una línea en `src/simuladores/indice.js`. El marco común (`ui/organismos/simulador.js`) arma la estructura, da el lienzo y el bucle de animación (que respeta el movimiento reducido) y libera todo al salir.

**Videos.** Para regenerarlos hacen falta Python con pycairo y ffmpeg: `python3 scripts/videos/videos.py` (o el nombre de uno). Cada video es una lista de escenas con su subtítulo.

## Pruebas

```
npm test
```

`tests/fisica.test.js` prueba el motor de física contra las respuestas de los TP y de los exámenes (Coulomb y superposición, Gauss, potencial, RC, red por nodos, RL, LC, RLC en alterna, órbitas, Malus, rendijas, calorimetría con cambio de fase, procesos del gas ideal). `tests/contenido.test.js` revisa que cada módulo tenga teoría, ejercicios y preguntas, que todas las referencias existan, que ninguna fórmula quede abierta, que el simulacro de final tenga teoría y aplicación en los tres bloques y que la opción correcta no sea casi siempre la más larga.

## También probá

### 2.º año

- [Integrando Ando](https://franco704.github.io/integrando-ando/): Análisis Matemático II ([repositorio](https://github.com/Franco704/integrando-ando))
- [Operando Ando](https://franco704.github.io/operando-ando/): Sistemas Operativos ([repositorio](https://github.com/Franco704/operando-ando))

### 3.er año

- [Consultando Ando](https://franco704.github.io/consultando-ando/): Gestión de Datos ([repositorio](https://github.com/Franco704/consultando-ando))
- [Backeando Ando](https://franco704.github.io/backeando-ando/): Desarrollo de Software, backend ([repositorio](https://github.com/Franco704/backeando-ando))
- [Fronteando Ando](https://franco704.github.io/fronteando-ando/): Desarrollo de Software, frontend ([repositorio](https://github.com/Franco704/fronteando-ando))
- [Diseñando Ando](https://franco704.github.io/disenando-ando/): Diseño de Sistemas de Información ([repositorio](https://github.com/Franco704/disenando-ando))
- [Iterando Ando](https://franco704.github.io/iterando-ando/): Matemática Superior ([repositorio](https://github.com/Franco704/iterando-ando))
- [Modulando Ando](https://franco704.github.io/modulando-ando/): Comunicación de Datos ([repositorio](https://github.com/Franco704/modulando-ando))
- [Probando Ando](https://franco704.github.io/probando-ando/): Probabilidad y Estadística ([repositorio](https://github.com/Franco704/probando-ando))
- [Economizando Ando](https://franco704.github.io/economizando-ando/): Economía ([repositorio](https://github.com/Franco704/economizando-ando))

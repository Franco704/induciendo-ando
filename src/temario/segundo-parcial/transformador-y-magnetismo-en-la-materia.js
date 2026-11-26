const r = String.raw;

export default {
  intro: r`El transformador es la aplicación práctica de la inducción mutua: con dos bobinas sobre un núcleo de hierro se sube o baja la tensión alterna casi sin pérdidas. Y el núcleo de hierro funciona porque los materiales ferromagnéticos multiplican el campo: de eso trata la segunda parte del módulo.`,
  teoria: [
    {
      id: 'transformador', titulo: 'El transformador',
      texto: r`Dos bobinas (primario con $N_1$ vueltas, secundario con $N_2$) sobre un núcleo de hierro. La corriente alterna del primario crea un flujo variable que el núcleo conduce casi entero al secundario. Por Faraday, en cada vuelta se induce la misma fem:

$$\frac{V_2}{V_1}=\frac{N_2}{N_1}$$

Si es **ideal** (sin pérdidas), la potencia se conserva: $V_1I_1=V_2I_2$, así que

$$\frac{I_2}{I_1}=\frac{N_1}{N_2}$$

- **Elevador:** $N_2>N_1$, sube la tensión y baja la corriente.
- **Reductor:** $N_2<N_1$, baja la tensión y sube la corriente.
- No funciona con **continua**: sin flujo variable no hay inducción.

**Transmisión de energía:** para enviar una potencia $P$ por una línea de resistencia $R$, la corriente es $I=\frac PV$ y se pierde $I^2R=\frac{P^2R}{V^2}$. Elevar la tensión 100 veces reduce las pérdidas $10\,000$ veces.

**Pérdidas reales:** resistencia de los bobinados (efecto Joule), corrientes de **Foucault** en el núcleo (se reducen laminándolo), **histéresis** del hierro y flujo disperso. Los transformadores grandes superan el $99\,\%$ de rendimiento.`,
    },
    {
      id: 'materia', titulo: 'Magnetismo en la materia',
      texto: r`Los átomos tienen momentos magnéticos (por el giro orbital y el espín de los electrones). En un campo aplicado, el material se **imanta**: aparece una magnetización $\vec M$ (momento magnético por unidad de volumen, en A/m) que suma su propio campo.

$$\vec B=\mu_0(\vec H+\vec M),\qquad\vec M=\chi_m\vec H,\qquad\vec B=K_m\mu_0\vec H=\mu\vec H$$

con $\vec H$ el campo que crean las corrientes ($H=nI$ en un solenoide), $\chi_m$ la susceptibilidad, $K_m=1+\chi_m$ la permeabilidad relativa y $\mu=K_m\mu_0$.

- **Diamagnéticos** ($\chi_m\approx-10^{-5}$, $K_m$ apenas menor que 1): se imantan **en contra** del campo y son repelidos levemente. Cobre, agua, bismuto, superconductores (diamagnetismo perfecto).
- **Paramagnéticos** ($\chi_m\approx+10^{-5}$ a $10^{-3}$): se imantan a favor y son atraídos débilmente. Aluminio, oxígeno. La imantación baja con la temperatura (ley de Curie).
- **Ferromagnéticos** ($K_m$ de cientos a miles): hierro, níquel, cobalto. Sus momentos se alinean por **dominios** y multiplican el campo enormemente. Por encima de la **temperatura de Curie** dejan de serlo.`,
    },
    {
      id: 'histeresis', titulo: 'Histéresis',
      texto: r`En un ferromagnético, $B$ no es proporcional a $H$ y depende de la historia. Al aumentar $H$ desde cero, $B$ crece hasta **saturar** (todos los dominios alineados). Al bajar $H$ a cero queda una **remanencia** $B_r$: el material quedó imantado (así se hacen los imanes permanentes). Para anular $B$ hay que aplicar un campo opuesto, la **coercitividad** $H_c$. Al recorrer el ciclo completo se forma el **lazo de histéresis**.

El **área del lazo** es la energía disipada por unidad de volumen en cada ciclo. Por eso:
- Los núcleos de transformadores y motores usan materiales **blandos** (lazo angosto, poca pérdida).
- Los imanes permanentes y las memorias magnéticas usan materiales **duros** (lazo ancho, gran remanencia).`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 15, ej. 4',
      enunciado: r`Un transformador elevador da $2200$ V eficaces con el primario a $110$ V. a) Si el primario tiene 80 vueltas, ¿cuántas tiene el secundario? b) Si la carga toma $1{,}50$ A, ¿corriente en el primario (ideal)? c) Con rendimiento del $95\,\%$ y $1{,}20$ A en el secundario, ¿corriente en el primario?`,
      pasos: [
        r`**a)** $N_2=N_1\frac{V_2}{V_1}=80\cdot20=1600$.`,
        r`**b)** $I_1=I_2\frac{V_2}{V_1}=1{,}5\cdot20=30{,}0$ A.`,
        r`**c)** $V_1I_1\cdot0{,}95=V_2I_2\Rightarrow I_1=\frac{2200\cdot1{,}2}{110\cdot0{,}95}=25{,}3$ A.`,
      ],
      lab: 'transformador',
    },
    {
      fuente: 'TP 15, ej. 5',
      enunciado: r`Una central produce $1{,}2\cdot10^6$ W que se envían a $7{,}0$ km por dos cables de $5{,}0\cdot10^{-2}\ \Omega$/km. a) Potencia perdida si se transmite a $1200$ V. b) Si se eleva con un transformador 100:1.`,
      pasos: [
        r`$R_{linea}=2\cdot7\cdot0{,}05=0{,}70\ \Omega$.`,
        r`**a)** $I=\frac{1{,}2\cdot10^6}{1200}=1000$ A; $P=I^2R=7{,}0\cdot10^5$ W: más de la mitad se pierde.`,
        r`**b)** A $120$ kV: $I=10$ A; $P=70$ W.`,
      ],
      lab: 'transformador',
    },
    {
      fuente: 'TP 15, ej. 3',
      enunciado: r`Un transformador reductor 13:1 se conecta a $220$ V eficaces y toma $0{,}350$ A. Si es ideal: a) tensión y b) corriente entregadas al cargador. c) Potencia entregada.`,
      pasos: [
        r`**a)** $V_2=\frac{220}{13}=16{,}9$ V.`,
        r`**c)** $P=V_1I_1=220\cdot0{,}35=77{,}0$ W.`,
        r`**b)** $I_2=\frac{P}{V_2}=4{,}55$ A (la hoja del TP da $2{,}48$ A, que no es consistente con $P=77$ W).`,
      ],
    },
    {
      fuente: 'TP 15, ej. 7',
      enunciado: r`Un solenoide largo de $12{,}0$ vueltas/cm tiene núcleo de hierro. Con $0{,}50$ A el campo en el núcleo es $1{,}36$ T. a) Campo aplicado $B_0$. b) $K_m$. c) Imantación M.`,
      pasos: [
        r`**a)** $B_0=\mu_0nI=(4\pi\cdot10^{-7})(1200)(0{,}5)=7{,}54\cdot10^{-4}$ T.`,
        r`**b)** $K_m=\frac{B}{B_0}=1800$.`,
        r`**c)** $M=\frac{B-B_0}{\mu_0}=1{,}08\cdot10^6$ A/m.`,
      ],
    },
    {
      fuente: 'TP 15, ej. 9',
      enunciado: r`Un solenoide de 60 espiras/cm con $0{,}150$ A está enrollado sobre acero al silicio ($K_m=5200$). En el núcleo: a) $B_0$, b) M, c) B.`,
      pasos: [
        r`**a)** $B_0=\mu_0nI=(4\pi\cdot10^{-7})(6000)(0{,}15)=1{,}13\cdot10^{-3}$ T.`,
        r`**b)** $M=\chi_mH=(K_m-1)nI=5199\cdot900=4{,}68\cdot10^6$ A/m.`,
        r`**c)** $B=K_mB_0=5{,}88$ T (en la práctica el hierro satura antes, cerca de 2 T).`,
      ],
    },
  ],
  preguntas: [
    { id: 'm15-q1', p: 'Un transformador ideal elevador 1:10 recibe 220 V y 5 A. En el secundario hay:', opciones: ['2200 V y 50 A', '2200 V y 0,5 A', '22 V y 50 A', '2200 V y 5 A'], ok: 1, por: 'Sube la tensión 10 veces y baja la corriente 10 veces: la potencia se conserva.' },
    { id: 'm15-q2', p: 'Un transformador conectado a una batería de continua:', opciones: ['Funciona igual que en alterna', 'No transforma, porque el flujo no varía', 'Invierte la polaridad de la tensión de salida', 'Funciona mejor, porque no hay histéresis'], ok: 1, por: 'Sin variación de flujo no hay fem inducida en el secundario (salvo un pulso al conectar).' },
    { id: 'm15-q3', p: 'Se transmite energía a alta tensión porque:', opciones: ['Es más segura para quien vive cerca de la línea', 'La corriente es menor y las pérdidas I²R bajan', 'La potencia que llega aumenta con la tensión', 'Los cables son más baratos de aislar'], ok: 1, por: r`$P_{perdida}=\left(\frac PV\right)^2R$.` },
    { id: 'm15-q4', p: 'Un material diamagnético colocado en un campo magnético:', opciones: ['Lo refuerza mucho', 'Lo refuerza levemente', 'Lo debilita levemente', 'Lo anula'], ok: 2, por: r`$K_m$ apenas menor que 1: se imanta en contra del campo.` },
    { id: 'm15-q5', p: 'El área del lazo de histéresis representa:', opciones: ['La imantación máxima al llegar a la saturación', 'La energía disipada por ciclo y por unidad de volumen', 'La permeabilidad relativa del material', 'El campo remanente cuando H vuelve a cero'], ok: 1, por: 'Por eso los núcleos de transformadores usan materiales de lazo angosto.' },
    { id: 'm15-q6', p: 'Por encima de la temperatura de Curie, el hierro:', opciones: ['Se vuelve diamagnético', 'Se vuelve paramagnético', 'Se vuelve superconductor', 'Aumenta su permeabilidad'], ok: 1, por: 'La agitación térmica desordena los dominios.' },
  ],
};

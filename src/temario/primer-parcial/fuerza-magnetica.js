const r = String.raw;

export default {
  intro: r`Una carga en movimiento siente, además de la fuerza eléctrica, una fuerza **magnética** perpendicular a su velocidad. Con ella se explican los espectrómetros de masas, los ciclotrones, los motores eléctricos y el efecto Hall. Es el tema de teoría del bloque de electromagnetismo del final de noviembre de 2026.`,
  teoria: [
    {
      id: 'lorentz', titulo: 'Fuerza de Lorentz',
      texto: r`Sobre una carga $q$ que se mueve con velocidad $\vec v$ en un campo magnético $\vec B$:

$$\vec F=q\,\vec v\times\vec B,\qquad F=|q|vB\operatorname{sen}\theta\qquad[B]=\frac{\text N}{\text{C·m/s}}=\text T\ (\text{tesla})$$

- Es **perpendicular** a $\vec v$ y a $\vec B$: el sentido se obtiene con la regla de la mano derecha para $\vec v\times\vec B$, y se **invierte** si la carga es negativa.
- Si $\vec v\parallel\vec B$, la fuerza es nula. Es máxima si $\vec v\perp\vec B$.
- Como es perpendicular a la velocidad, **no hace trabajo**: no cambia la rapidez ni la energía cinética, solo la dirección.

Con campo eléctrico y magnético: $\vec F=q(\vec E+\vec v\times\vec B)$.

**Unidades:** $1\ \text G\ (\text{gauss})=10^{-4}$ T. El campo terrestre es de unos $50\ \mu$T; un imán de heladera, $\sim10$ mT.

**Flujo magnético:** $\Phi_B=\int\vec B\cdot d\vec A$, en weber (Wb = T·m²). Como no hay monopolos magnéticos, las líneas de $\vec B$ son cerradas y el flujo por toda superficie cerrada es nulo: $\oint\vec B\cdot d\vec A=0$.`,
    },
    {
      id: 'movimiento', titulo: 'Movimiento de cargas en un campo uniforme',
      texto: r`Si $\vec v\perp\vec B$, la fuerza es centrípeta y la carga describe una **circunferencia**:

$$|q|vB=\frac{mv^2}{r}\ \Rightarrow\ r=\frac{mv}{|q|B},\qquad\omega=\frac{|q|B}{m},\qquad T=\frac{2\pi m}{|q|B}$$

El período **no depende de la velocidad** (frecuencia de ciclotrón). Si $\vec v$ forma un ángulo con $\vec B$, la componente paralela sigue sin cambio y la trayectoria es una **hélice** de radio $\frac{mv_\perp}{|q|B}$ y paso $p=v_\parallel T$.

**Selector de velocidades:** con $\vec E$ y $\vec B$ perpendiculares entre sí y a la velocidad, pasan sin desviarse solo las cargas con $qE=qvB$:

$$v=\frac EB$$

**Espectrómetro de masas:** los iones se aceleran con una tensión $V$ ($\frac12mv^2=qV$), pasan por un selector y entran a un campo $B$ donde describen media vuelta. Impactan a una distancia $2r$ del punto de entrada: iones de distinta masa caen en lugares distintos. Con igual velocidad, $r\propto m$; con igual energía, $r\propto\sqrt m$.`,
    },
    {
      id: 'conductores', titulo: 'Fuerza sobre conductores y torque sobre espiras',
      texto: r`Sobre un conductor recto de largo $L$ con corriente $I$ en un campo uniforme:

$$\vec F=I\vec L\times\vec B,\qquad F=ILB\operatorname{sen}\theta$$

Para un conductor de forma cualquiera, $d\vec F=I\,d\vec l\times\vec B$. En un campo **uniforme**, la fuerza sobre un tramo curvo es la misma que sobre el segmento recto que une sus extremos; sobre una espira cerrada la fuerza neta es **cero**.

**Torque sobre una espira** de área $A$, $N$ vueltas y corriente $I$:

$$\vec\mu=NI\vec A,\qquad\vec\tau=\vec\mu\times\vec B,\qquad\tau=NIAB\operatorname{sen}\phi,\qquad U=-\vec\mu\cdot\vec B$$

El torque tiende a alinear $\vec\mu$ (normal según la regla de la mano derecha con la corriente) con $\vec B$. Es el principio del **motor de corriente continua**: el **conmutador** invierte la corriente cada media vuelta para que el torque mantenga el sentido de giro.

**Efecto Hall:** en una cinta con corriente en un campo transversal, los portadores se desvían hacia un costado y aparece una tensión transversal $V_H=v_dBd$. Su signo revela el signo de los portadores y su valor permite calcular $v_d$ y $n$.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 9, ej. 2',
      enunciado: r`Un protón se mueve verticalmente hacia arriba a $4{,}00\cdot10^6$ m/s en un campo de $0{,}400$ T hacia la derecha. ¿Módulo y sentido de la fuerza? ¿Y si fuera un electrón?`,
      pasos: [
        r`$F=evB=(1{,}6\cdot10^{-19})(4\cdot10^6)(0{,}4)=2{,}56\cdot10^{-13}$ N.`,
        r`$\vec v\times\vec B=\hat\jmath\times\hat\imath=-\hat k$: hacia **adentro** de la hoja para el protón.`,
        r`El electrón: mismo módulo, sentido opuesto (saliendo de la hoja).`,
      ],
      lab: 'carga-en-campo-b',
    },
    {
      fuente: 'TP 9, ej. 5',
      enunciado: r`Un deuterón ($3{,}347\cdot10^{-27}$ kg, carga $+e$) describe una circunferencia de $300$ mm en un campo de $1{,}20$ T. ¿Velocidad?`,
      pasos: [
        r`$v=\frac{|q|Br}{m}=\frac{(1{,}6\cdot10^{-19})(1{,}2)(0{,}3)}{3{,}347\cdot10^{-27}}$`,
      ],
      respuesta: r`$1{,}72\cdot10^7$ m/s.`,
      lab: 'carga-en-campo-b',
    },
    {
      fuente: 'TP 9, ej. 6',
      enunciado: r`Un protón entra a $8{,}00\cdot10^6$ m/s formando $30{,}0^\circ$ con un campo de $0{,}150$ T en la dirección x. Describa la trayectoria.`,
      pasos: [
        r`Es una **hélice** con eje paralelo a x. $v_\perp=v\operatorname{sen}30^\circ=4\cdot10^6$ m/s; $v_\parallel=6{,}93\cdot10^6$ m/s.`,
        r`Radio: $r=\frac{mv_\perp}{eB}=\frac{(1{,}67\cdot10^{-27})(4\cdot10^6)}{(1{,}6\cdot10^{-19})(0{,}15)}=0{,}278$ m.`,
        r`Período: $T=\frac{2\pi m}{eB}=4{,}37\cdot10^{-7}$ s. Paso: $p=v_\parallel T=3{,}03$ m.`,
      ],
    },
    {
      fuente: 'TP 9, ej. 9',
      enunciado: r`Un alambre de $50{,}0$ g/m conduce $30{,}0$ A perpendicular a un campo B. ¿Qué B lo mantiene suspendido?`,
      pasos: [r`$ILB=\lambda Lg\Rightarrow B=\frac{\lambda g}{I}=\frac{0{,}05\cdot9{,}8}{30}$`],
      respuesta: r`$16{,}3$ mT.`,
    },
    {
      fuente: 'TP 9, ej. 10',
      enunciado: r`Una bobina de 40 vueltas con $2{,}00$ A está en un campo de $0{,}250$ T. Con los datos de la figura del TP ($\tau=0{,}240$ N·m), verifique el área efectiva y explique cómo girará.`,
      pasos: [
        r`$\tau=NIAB\operatorname{sen}\phi\Rightarrow A\operatorname{sen}\phi=\frac{0{,}24}{40\cdot2\cdot0{,}25}=0{,}012$ m².`,
        r`La bobina gira de modo de alinear su momento magnético $\vec\mu$ (regla de la mano derecha con la corriente) con $\vec B$.`,
      ],
    },
    {
      fuente: 'Final del 25-11-2026, ej. 3',
      enunciado: r`Dos isótopos de carga $+e$ y masas $19{,}91\cdot10^{-27}$ y $21{,}59\cdot10^{-27}$ kg entran a $6{,}70\cdot10^5$ m/s en un campo de $0{,}850$ T perpendicular. Relación de radios y separación de impactos tras media vuelta.`,
      pasos: [
        r`$\frac{r_2}{r_1}=\frac{m_2}{m_1}=1{,}084$.`,
        r`$r_1=\frac{m_1v}{eB}=0{,}0981$ m; $r_2=0{,}1064$ m.`,
        r`Separación $=2(r_2-r_1)$.`,
      ],
      respuesta: r`$\approx1{,}7$ cm.`,
      lab: 'carga-en-campo-b',
    },
  ],
  preguntas: [
    { id: 'm09-q1', p: 'El trabajo que hace la fuerza magnética sobre una carga que da una vuelta completa es:', opciones: ['2πr·qvB', 'qvB·T', 'Cero', 'Depende del signo de la carga'], ok: 2, por: 'La fuerza magnética es siempre perpendicular a la velocidad: nunca hace trabajo.' },
    { id: 'm09-q2', p: 'Si se duplica la velocidad de una carga que gira en un campo uniforme, el período:', opciones: ['Se duplica', 'Se reduce a la mitad', 'No cambia', 'Se cuadruplica'], ok: 2, por: r`$T=\frac{2\pi m}{|q|B}$: el radio se duplica pero la vuelta se recorre en el mismo tiempo.` },
    { id: 'm09-q3', p: 'Una carga se mueve paralela a un campo magnético uniforme. Su trayectoria es:', opciones: ['Una circunferencia perpendicular al campo', 'Una hélice alrededor de las líneas de B', 'Una recta con velocidad constante', 'Una parábola'], ok: 2, por: r`$\vec v\times\vec B=0$: no hay fuerza.` },
    { id: 'm09-q4', p: 'En un selector de velocidades pasan sin desviarse las partículas con:', opciones: ['v = B/E', 'v = E/B', 'v = EB', 'cualquier v si la carga es neutra o positiva'], ok: 1, por: r`$qE=qvB$. No depende de la carga ni de la masa.` },
    { id: 'm09-q5', p: 'La fuerza neta de un campo magnético uniforme sobre una espira cerrada con corriente es:', opciones: ['ILB, en la dirección del campo', 'Cero, aunque puede haber torque', 'NIAB', 'Cero, y tampoco hay torque sobre ella'], ok: 1, por: 'Las fuerzas sobre lados opuestos se cancelan, pero no son colineales: forman un par.' },
    { id: 'm09-q6', p: 'Un electrón y un protón con la misma velocidad entran perpendiculares a un campo B. El radio del electrón es:', opciones: ['Igual, porque las cargas tienen igual módulo', '1836 veces mayor, y gira en el mismo sentido', '1836 veces menor, y gira en sentido opuesto', 'Mayor y gira en el mismo sentido'], ok: 2, por: r`$r=\frac{mv}{|q|B}\propto m$. El signo opuesto invierte el sentido de giro.` },
    { id: 'm09-q7', p: 'Un tesla equivale a:', opciones: ['N/(A·m)', 'N·A/m', 'Wb·m²', 'V·s'], ok: 0, por: r`De $F=ILB$: $B=\frac{F}{IL}$, en N/(A·m). También T = Wb/m².` },
  ],
};

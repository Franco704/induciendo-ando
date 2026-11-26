const r = String.raw;

export default {
  intro: r`Con dos reglas, la de los nodos y la de las mallas, se resuelve cualquier circuito de corriente continua. Este módulo las ordena en un método que no falla, más las asociaciones de resistencias y los instrumentos de medición.`,
  teoria: [
    {
      id: 'asociaciones', titulo: 'Resistencias en serie y en paralelo',
      texto: r`**Serie:** la misma corriente atraviesa todas; las tensiones se suman.

$$R_{eq}=R_1+R_2+\dots$$

**Paralelo:** todas tienen la misma tensión; las corrientes se suman.

$$\frac1{R_{eq}}=\frac1{R_1}+\frac1{R_2}+\dots\qquad\text{(para dos: }R_{eq}=\tfrac{R_1R_2}{R_1+R_2}\text{)}$$

El equivalente en paralelo es **menor** que la menor de las resistencias. Para reducir un circuito se identifican grupos claramente en serie o en paralelo y se van reemplazando, de adentro hacia afuera.

**Divisor de tensión** (serie): $V_1=V\frac{R_1}{R_1+R_2}$. **Divisor de corriente** (paralelo): $I_1=I\frac{R_2}{R_1+R_2}$.`,
    },
    {
      id: 'kirchhoff', titulo: 'Reglas de Kirchhoff',
      texto: r`**Regla de los nodos** (conservación de la carga): la suma de corrientes que entran a un nodo es igual a la suma de las que salen: $\sum I=0$.

**Regla de las mallas** (conservación de la energía): al recorrer cualquier camino cerrado, la suma de las diferencias de potencial es cero: $\sum\Delta V=0$.

**Convención de signos** al recorrer una malla:
- Resistencia recorrida **en el sentido** de la corriente supuesta: $-IR$; en contra: $+IR$.
- Fuente recorrida de $-$ a $+$: $+\varepsilon$; de $+$ a $-$: $-\varepsilon$.

**Método:**
1. Asignar una corriente con un sentido arbitrario a cada rama.
2. Escribir $n-1$ ecuaciones de nodos ($n$ = cantidad de nodos).
3. Escribir tantas ecuaciones de mallas como hagan falta (mallas independientes).
4. Resolver. **Si una corriente da negativa, el sentido real es el opuesto**: no hay que rehacer nada.

**Diferencia de potencial entre dos puntos:** se recorre cualquier camino de a a b sumando los cambios: $V_b-V_a=\sum(\pm\varepsilon)+\sum(\mp IR)$.`,
    },
    {
      id: 'instrumentos', titulo: 'Instrumentos y energía',
      texto: r`- El **amperímetro** se conecta en **serie** y debe tener resistencia casi nula. Ideal: $R=0$.
- El **voltímetro** se conecta en **paralelo** y debe tener resistencia muy grande. Ideal: $R=\infty$ (no desvía corriente).
- Un amperímetro mal conectado en paralelo hace un cortocircuito; un voltímetro en serie corta el circuito.

**Balance de energía:** en todo circuito la potencia que entregan las fuentes es igual a la que disipan las resistencias. Una fuente atravesada por corriente de $+$ a $-$ por dentro **absorbe** energía (se está cargando): es el caso de la batería descargada que se recarga con otra.

**Puente de Wheatstone:** cuatro resistencias en rombo con un galvanómetro en la diagonal. Si $R_1R_4=R_2R_3$ el puente está equilibrado y por el galvanómetro no pasa corriente.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 7 (modelo de dos mallas)',
      enunciado: r`Un circuito tiene tres ramas en paralelo entre dos nodos: $\varepsilon_1=12$ V con $R_1=2\ \Omega$, una resistencia $R_3=6\ \Omega$ sola, y $\varepsilon_2=6$ V con $R_2=4\ \Omega$. Las dos fuentes tienen el positivo hacia el nodo de arriba. Halle las corrientes.`,
      pasos: [
        r`Con un solo nodo incógnita: sea $V$ la tensión del nodo de arriba respecto del de abajo.`,
        r`Corrientes que suben: $I_1=\frac{12-V}{2}$, $I_3=\frac{-V}{6}$, $I_2=\frac{6-V}{4}$.`,
        r`Nodo: $I_1+I_2+I_3=0\Rightarrow6(12-V)+3(6-V)-2V=0\Rightarrow V=\frac{90}{11}=8{,}18$ V.`,
        r`$I_1=1{,}91$ A (sube), $I_2=-0{,}545$ A (baja: la fuente de 6 V se está cargando), $I_3=-1{,}36$ A (baja por $R_3$).`,
        r`Control de potencias: fuentes $12\cdot1{,}91-6\cdot0{,}545=19{,}6$ W; resistencias $1{,}91^2\cdot2+1{,}36^2\cdot6+0{,}545^2\cdot4=19{,}6$ W.`,
      ],
      lab: 'kirchhoff',
    },
    {
      fuente: 'Final del 17-05-2023, ítem 4',
      enunciado: r`Una batería de $60$ V sin resistencia interna alimenta $3\ \Omega\parallel6\ \Omega$ en serie con $12\ \Omega\parallel4\ \Omega$. Corriente en la batería.`,
      pasos: [
        r`$3\parallel6=\frac{18}{9}=2\ \Omega$; $12\parallel4=\frac{48}{16}=3\ \Omega$.`,
        r`$R_{eq}=5\ \Omega$; $I=\frac{60}{5}$`,
      ],
      respuesta: r`$12$ A.`,
    },
    {
      fuente: 'Final del 2-12-2010, ej. 3',
      enunciado: r`Una fem $\varepsilon$ alimenta dos ramas en paralelo: $2R$ arriba y $R$ abajo a la izquierda; $R$ y $R$ a la derecha. Un medidor de resistencia nula une los puntos medios. ¿Qué corriente marca?`,
      pasos: [
        r`El medidor une los nodos medios: arriba quedan $2R\parallel R=\frac23R$ y abajo $R\parallel R=\frac R2$, en serie.`,
        r`$I=\frac{6\varepsilon}{7R}$. Tensión arriba $\frac47\varepsilon$: por $2R$ pasan $\frac{2\varepsilon}{7R}$. Tensión abajo $\frac37\varepsilon$: por cada $R$ de abajo, $\frac{3\varepsilon}{7R}$.`,
        r`En el nodo medio izquierdo entran $\frac{2\varepsilon}{7R}$ y salen $\frac{3\varepsilon}{7R}$: el medidor aporta la diferencia.`,
      ],
      respuesta: r`$I_M=\frac{\varepsilon}{7R}$.`,
    },
    {
      fuente: 'Recuperatorio 01-08-2023, ej. 3',
      enunciado: r`Una fuente tiene $20\ \Omega$ en serie arriba y $20\ \Omega$ abajo; luego $100\ \Omega$ en paralelo con una rama de dos resistencias R en serie. Cada $20\ \Omega$ disipa $0{,}45$ W y la de $100\ \Omega$, $0{,}25$ W. Halle R y la potencia de la fuente.`,
      pasos: [
        r`Por las de $20\ \Omega$ pasa toda la corriente: $I=\sqrt{0{,}45/20}=0{,}15$ A.`,
        r`Por la de $100\ \Omega$: $\sqrt{0{,}25/100}=0{,}05$ A, con $V=5$ V.`,
        r`Por la rama $2R$ van $0{,}10$ A con $5$ V: $2R=50\ \Omega$.`,
        r`$\varepsilon=0{,}15\cdot40+5=11$ V; $P=11\cdot0{,}15$.`,
      ],
      respuesta: r`$R=25\ \Omega$; $P=1{,}65$ W.`,
    },
    {
      fuente: '1.er parcial 06-07-2025, tema 2',
      enunciado: r`Una fem entre A y B alimenta $10\ \Omega$ en serie, luego $8\ \Omega$ en paralelo con la serie $6\ \Omega+2\ \Omega$, y por último $5\ \Omega$ en serie. a) ¿Qué fem hace pasar $2$ A por la de $10\ \Omega$? b) ¿Qué potencia disipa la de $6\ \Omega$? c) Una fuente real, ¿entrega más o menos tensión que una ideal?`,
      pasos: [
        r`El tramo central: $8\parallel(6+2)=8\parallel8=4\ \Omega$. $R_{eq}=10+4+5=19\ \Omega$.`,
        r`**a)** $\varepsilon=IR_{eq}=2\cdot19=38$ V.`,
        r`**b)** Las dos ramas de $8\ \Omega$ son iguales: $1$ A por cada una. $P_6=1^2\cdot6=6$ W.`,
        r`**c)** Menos: $V=\varepsilon-Ir$.`,
      ],
      lab: 'kirchhoff',
    },
  ],
  preguntas: [
    { id: 'm07-q1', p: 'Al resolver por Kirchhoff, una corriente da −2 A. Significa que:', opciones: ['Hay un error de signo en las mallas', 'Su sentido real es opuesto al supuesto', 'La rama no conduce y hay que eliminarla', 'La fuente está mal conectada'], ok: 1, por: 'El signo indica que el sentido supuesto era el contrario; el módulo es correcto.' },
    { id: 'm07-q2', p: 'La regla de las mallas expresa la conservación de:', opciones: ['La carga', 'La energía', 'La corriente', 'La masa'], ok: 1, por: 'Volver al mismo punto implica volver al mismo potencial: el trabajo neto por unidad de carga es cero. La de nodos es conservación de la carga.' },
    { id: 'm07-q3', p: 'Un voltímetro ideal:', opciones: ['Se conecta en serie y tiene R = 0', 'Se conecta en paralelo y tiene R infinita', 'Se conecta en paralelo y tiene R = 0', 'Se conecta en serie y tiene R infinita'], ok: 1, por: 'No debe desviar corriente del elemento que mide.' },
    { id: 'm07-q4', p: 'La resistencia equivalente de varias resistencias en paralelo es:', opciones: ['Mayor que la mayor', 'Menor que la menor', 'El promedio', 'La suma'], ok: 1, por: 'Agregar un camino en paralelo siempre facilita el paso de corriente.' },
    { id: 'm07-q5', p: 'Tres resistencias de 3 Ω, 6 Ω y 3 Ω en paralelo, en serie con 2 Ω, con 10 A en total. La potencia del circuito es:', opciones: ['140 W', '320 W', '1400 W', '120 W'], ok: 1, por: r`$3\parallel6\parallel3=1{,}2\ \Omega$; $R=3{,}2\ \Omega$; $P=I^2R=320$ W.` },
    { id: 'm07-q6', p: 'Una batería atravesada por dentro de su borne + a su borne −:', opciones: ['Entrega energía', 'Absorbe energía (se carga)', 'No intercambia energía', 'Está en cortocircuito'], ok: 1, por: 'La corriente va contra la fem: el resto del circuito le hace trabajo a la batería.' },
  ],
};

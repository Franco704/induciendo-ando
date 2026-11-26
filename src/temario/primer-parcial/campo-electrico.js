const r = String.raw;

export default {
  intro: r`En lugar de pensar que una carga "actúa a distancia" sobre otra, pensamos que cada carga modifica el espacio a su alrededor creando un **campo eléctrico**, y que es ese campo el que empuja a las demás cargas. Así se calcula una vez y sirve para cualquier carga que se coloque después.`,
  teoria: [
    {
      id: 'definicion', titulo: 'Definición y campo de una carga puntual',
      texto: r`El campo eléctrico en un punto es la fuerza por unidad de carga que recibiría una **carga de prueba** $q_0$ positiva colocada allí:

$$\vec E=\frac{\vec F}{q_0}\qquad[E]=\frac{\text N}{\text C}=\frac{\text V}{\text m}$$

La carga de prueba se supone tan chica que no altera la distribución que crea el campo. Conocido $\vec E$, la fuerza sobre cualquier carga es $\vec F=q\vec E$: igual sentido que $\vec E$ si $q>0$ y opuesto si $q<0$.

Para una carga puntual $q$:

$$\vec E=k\frac{q}{r^2}\hat r$$

con $\hat r$ apuntando desde la carga hacia el punto. Si $q>0$ el campo sale de la carga; si $q<0$, apunta hacia ella. **Superposición:** el campo de varias cargas es la suma vectorial de los campos de cada una.`,
    },
    {
      id: 'lineas', titulo: 'Líneas de campo',
      texto: r`Las líneas de campo son una forma de visualizar $\vec E$:

- En cada punto, $\vec E$ es **tangente** a la línea.
- **Salen** de las cargas positivas y **llegan** a las negativas (o van al infinito).
- La cantidad de líneas es proporcional a la carga, y su **densidad** indica la intensidad del campo.
- **Nunca se cruzan:** en cada punto el campo tiene una sola dirección.

En un **campo uniforme** (entre placas paralelas, lejos de los bordes) las líneas son rectas paralelas equiespaciadas.

> Las líneas de campo **no** son trayectorias: una carga que parte del reposo sigue la línea solo si la línea es recta. En general su inercia la aparta.`,
    },
    {
      id: 'distribuciones', titulo: 'Distribuciones continuas de carga',
      texto: r`Si la carga está repartida, se divide en elementos $dq$ y se integra:

$$\vec E=\int k\frac{dq}{r^2}\hat r,\qquad dq=\lambda\,dl\ \ (\text{línea}),\quad dq=\sigma\,dA\ \ (\text{superficie}),\quad dq=\rho\,dV\ \ (\text{volumen})$$

Antes de integrar conviene usar la **simetría** para ver qué componentes se cancelan. Resultados que hay que conocer:

- **Anillo** de radio $a$ y carga $Q$, sobre su eje a distancia $x$: $E_x=\frac{kQx}{(x^2+a^2)^{3/2}}$. En el centro, $E=0$.
- **Varilla infinita:** $E=\frac{\lambda}{2\pi\varepsilon_0r}=\frac{2k\lambda}{r}$.
- **Plano infinito:** $E=\frac{\sigma}{2\varepsilon_0}$, uniforme (no depende de la distancia).
- **Arco** de radio $R$ en su centro: cada elemento aporta $\frac{k\lambda}{R}d\theta$ (lo tomaron en el final de agosto de 2010 con una semicircunferencia mitad positiva y mitad negativa).`,
    },
    {
      id: 'movimiento', titulo: 'Cargas en movimiento en un campo uniforme',
      texto: r`En un campo uniforme la fuerza es constante, así que la aceleración también:

$$\vec a=\frac{q\vec E}{m}$$

Es como un tiro oblicuo con "gravedad" $qE/m$:
- Si la carga parte del reposo, acelera en línea recta: $v^2=2ad$, $d=\frac12at^2$.
- Si entra **perpendicular** al campo con $v_0$, describe una **parábola**: $x=v_0t$, $y=\frac12at^2$.

Para electrones y protones la gravedad es despreciable: en un campo de $1000$ N/C la fuerza eléctrica sobre un electrón es unas $10^{13}$ veces su peso. En cambio, para gotas o esferitas de miligramos el peso sí importa (experimento de Millikan).

**Dipolo eléctrico:** dos cargas $\pm q$ separadas $d$, con momento $\vec p=q\vec d$ (de $-$ a $+$). En un campo uniforme la fuerza neta es nula pero hay un torque $\vec\tau=\vec p\times\vec E$ que lo alinea con el campo; su energía es $U=-\vec p\cdot\vec E$.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 2, ej. 1',
      enunciado: r`Una partícula de $20{,}0$ mg está en un campo descendente uniforme de $2000$ N/C. ¿Cuántos electrones en exceso hay que colocarle para que las fuerzas eléctrica y gravitatoria se equilibren?`,
      pasos: [
        r`El campo apunta hacia abajo y la fuerza debe ir hacia arriba: la carga es **negativa** (por eso son electrones en exceso).`,
        r`$|q|E=mg\Rightarrow|q|=\frac{(20\cdot10^{-6})(9{,}8)}{2000}=9{,}8\cdot10^{-8}$ C.`,
        r`$N=\frac{|q|}{e}=\frac{9{,}8\cdot10^{-8}}{1{,}602\cdot10^{-19}}$`,
      ],
      respuesta: r`$6{,}12\cdot10^{11}$ electrones.`,
    },
    {
      fuente: 'TP 2, ej. 9',
      enunciado: r`Dos cargas de $6{,}00$ nC están en $x=\pm0{,}150$ m. Encuentre el campo en a) el origen, b) $x=0{,}300$ m, d) $(0;\ 0{,}200)$ m.`,
      pasos: [
        r`**a)** En el origen los dos campos son iguales y opuestos: $E=0$.`,
        r`**b)** Distancias $0{,}15$ y $0{,}45$ m, ambos hacia $+x$: $E=k\cdot6\cdot10^{-9}\left(\frac1{0{,}0225}+\frac1{0{,}2025}\right)=2397+266=2660$ N/C, a $0^\circ$.`,
        r`**d)** Cada carga a $0{,}25$ m: $E_1=k\frac{6\cdot10^{-9}}{0{,}0625}=863$ N/C. Las $x$ se cancelan; $E_y=2\cdot863\cdot\frac{0{,}2}{0{,}25}=1380$ N/C, a $90^\circ$.`,
      ],
      respuesta: r`a) $0$; b) $2660$ N/C a $0^\circ$; d) $1380$ N/C a $90^\circ$.`,
      lab: 'lineas-de-campo',
    },
    {
      fuente: 'TP 2, ej. 6',
      enunciado: r`Una gota con carga positiva, de $1{,}00$ g, cae desde el reposo en el vacío desde $5{,}00$ m en un campo vertical uniforme de $1{,}00\cdot10^4$ N/C. Llega al suelo a $21{,}0$ m/s. Determine a) la dirección del campo y b) la carga.`,
      pasos: [
        r`$a=\frac{v^2}{2h}=\frac{441}{10}=44{,}1$ m/s², mayor que $g$: la fuerza eléctrica empuja **hacia abajo**. Con carga positiva, el campo apunta **hacia abajo**.`,
        r`$qE=m(a-g)\Rightarrow q=\frac{(10^{-3})(44{,}1-9{,}8)}{10^4}=3{,}43\cdot10^{-6}$ C.`,
        r`Supuestos: campo uniforme, sin rozamiento con el aire (vacío) y carga constante. El experimento clásico de gotas cargadas es el de **Millikan** (1909), que midió la carga del electrón.`,
      ],
      respuesta: r`a) Hacia abajo; b) $q=3{,}43\ \mu$C.`,
    },
    {
      fuente: 'TP 2, ej. 7',
      enunciado: r`Un electrón entra con $v_0=1{,}60\cdot10^6$ m/s, a mitad de camino entre dos placas de $2{,}00$ cm de largo separadas $1{,}00$ cm, con campo uniforme hacia abajo. a) Si sale rozando la placa superior, ¿cuánto vale E? b) Con un protón a la misma velocidad, ¿golpea alguna placa?`,
      pasos: [
        r`El electrón recibe la fuerza **hacia arriba** (opuesta al campo). Tarda $t=\frac{L}{v_0}=1{,}25\cdot10^{-8}$ s en atravesar.`,
        r`Debe subir $0{,}5$ cm: $0{,}005=\frac12\frac{eE}{m}t^2\Rightarrow E=\frac{2(0{,}005)m}{et^2}=364$ N/C.`,
        r`**b)** El protón baja con $a=\frac{eE}{m_p}=3{,}49\cdot10^{10}$ m/s²: $y=\frac12at^2=2{,}73\cdot10^{-6}$ m. No golpea: casi no se desvía, porque es 1836 veces más pesado.`,
      ],
      respuesta: r`a) $364$ N/C; b) no golpea, baja $2{,}73\ \mu$m.`,
      lab: 'carga-entre-placas',
    },
    {
      fuente: 'TP 2, ej. 5',
      enunciado: r`Una carga de $20{,}0\ \mu$C está $4{,}00$ cm arriba de una carga desconocida $q$. En un punto $1{,}00$ cm arriba de la de $20\ \mu$C el campo es $2{,}20\cdot10^9$ N/C hacia arriba. ¿Cuánto vale $q$?`,
      pasos: [
        r`Campo de la de $20\ \mu$C a $1$ cm: $E_1=\frac{(8{,}99\cdot10^9)(20\cdot10^{-6})}{10^{-4}}=1{,}80\cdot10^9$ N/C hacia arriba.`,
        r`Falta $0{,}40\cdot10^9$ N/C hacia arriba, aportado por $q$ a $5$ cm: un campo hacia arriba desde abajo significa que $q$ **repele**, es positiva.`,
        r`$q=\frac{0{,}40\cdot10^9\cdot(0{,}05)^2}{8{,}99\cdot10^9}$`,
      ],
      respuesta: r`$q=+111\ \mu$C.`,
    },
    {
      fuente: 'Final del 4-08-2010, ej. 2',
      enunciado: r`Una varilla en semicircunferencia de radio $R$ tiene $+Q$ uniforme en la mitad superior y $-Q$ en la inferior. Halle $\vec E$ en el centro.`,
      pasos: [
        r`Cada cuarto tiene $\lambda=\frac{2Q}{\pi R}$; un elemento aporta $dE=\frac{k\lambda}{R}d\theta$.`,
        r`Las componentes horizontales del cuarto positivo y del negativo se cancelan por simetría.`,
        r`Las verticales apuntan hacia abajo en ambos (el positivo empuja, el negativo atrae): cada cuarto da $\frac{k\lambda}{R}$.`,
      ],
      respuesta: r`$\vec E=-\frac{2k\lambda}{R}\hat\jmath=-\frac{Q}{\pi^2\varepsilon_0R^2}\hat\jmath$.`,
    },
  ],
  preguntas: [
    { id: 'm02-q1', p: 'Las líneas del campo eléctrico neto:', opciones: ['Se cruzan donde el campo es nulo', 'Nunca se cruzan', 'Son las trayectorias de las cargas', 'Salen de las cargas negativas'], ok: 1, por: 'En cada punto el campo tiene una sola dirección, así que por cada punto pasa una sola línea.' },
    { id: 'm02-q2', p: r`Dos cargas positivas están separadas $4{,}00$ m y la primera tiene el doble de carga. El punto entre ellas donde $E=0$ está, medido desde la carga mayor, a:`, opciones: ['1,66 m', '2,00 m', '2,34 m', '2,83 m'], ok: 2, por: r`$\frac{2q}{x^2}=\frac{q}{(4-x)^2}\Rightarrow\frac{4-x}{x}=\frac1{\sqrt2}\Rightarrow x=2{,}34$ m: más lejos de la mayor.` },
    { id: 'm02-q3', p: 'Un electrón se deja en reposo en un campo uniforme que apunta hacia +x. El electrón:', opciones: ['Acelera hacia +x', 'Acelera hacia −x', 'Se queda quieto', 'Se mueve a velocidad constante hacia +x'], ok: 1, por: r`$\vec F=q\vec E$ con $q<0$: la fuerza es opuesta al campo.` },
    { id: 'm02-q4', p: r`En el centro de un anillo uniformemente cargado el campo es:`, opciones: [r`$kQ/a^2$`, 'Cero', r`$kQ/(2a^2)$`, 'Infinito'], ok: 1, por: 'Cada elemento de carga tiene uno diametralmente opuesto cuyo campo lo cancela.' },
    { id: 'm02-q5', p: r`El campo de un plano infinito con densidad $\sigma$, a distancia $d$:`, opciones: ['Disminuye como 1/d²', 'Disminuye como 1/d', 'No depende de d', 'Crece con d'], ok: 2, por: r`$E=\frac{\sigma}{2\varepsilon_0}$: uniforme. Por eso entre placas grandes el campo es uniforme.` },
    { id: 'm02-q6', p: 'Un protón y un electrón están en el mismo campo uniforme. Comparando sus aceleraciones:', opciones: ['Son iguales en módulo y en sentido', 'La del protón es 1836 veces mayor', 'La del electrón es 1836 veces mayor, en sentido opuesto', 'La del electrón es mayor y en el mismo sentido'], ok: 2, por: r`Misma fuerza en módulo y sentidos opuestos; $a=F/m$ y $m_p/m_e\approx1836$.` },
    { id: 'm02-q7', p: 'Un dipolo en un campo eléctrico uniforme recibe:', opciones: ['Fuerza neta nula y torque nulo, porque se compensan', 'Fuerza neta nula y un torque que tiende a alinearlo', 'Una fuerza neta en la dirección del campo', 'Una fuerza neta hacia el campo y ningún torque'], ok: 1, por: r`Las fuerzas sobre $+q$ y $-q$ son iguales y opuestas (resultante nula) pero no colineales: $\vec\tau=\vec p\times\vec E$.` },
  ],
};

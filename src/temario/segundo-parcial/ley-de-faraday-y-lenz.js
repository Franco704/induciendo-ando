const r = String.raw;

export default {
  intro: r`Faraday descubrió que un campo magnético **variable** produce corriente. No importa cómo cambie el flujo (el campo crece, la espira gira o se deforma, o se mueve hacia otra zona): siempre aparece una fem. De esta ley salen los generadores, los transformadores y los frenos magnéticos. Es el TP que más aparece en los segundos parciales.`,
  teoria: [
    {
      id: 'faraday', titulo: 'Ley de Faraday',
      texto: r`La fem inducida en un circuito es igual a menos la rapidez de cambio del flujo magnético a través de él:

$$\varepsilon=-N\frac{d\Phi_B}{dt},\qquad\Phi_B=\int\vec B\cdot d\vec A=BA\cos\phi$$

con $N$ la cantidad de vueltas y $\phi$ el ángulo entre $\vec B$ y la **normal** a la espira. El flujo puede cambiar porque cambia:
- **B** (se acerca un imán, cambia la corriente de otra bobina): $\varepsilon=-NA\cos\phi\frac{dB}{dt}$.
- **A** (una barra que desliza, una espira que se deforma).
- **φ** (una espira que gira): si gira con $\omega$ constante, $\Phi=BA\cos\omega t$ y $\varepsilon=NBA\omega\operatorname{sen}\omega t$: es un **generador** de corriente alterna.

**Fem media:** $\varepsilon_{med}=N\frac{|\Delta\Phi|}{\Delta t}$. Una espira que gira $180^\circ$ en un campo invierte su flujo: $\Delta\Phi=2BA$.

**Corriente y carga inducidas:** $I=\frac{\varepsilon}{R}$; la carga que circula no depende del tiempo que tarde el cambio: $Q=\frac{N\Delta\Phi}{R}$.`,
    },
    {
      id: 'lenz', titulo: 'Ley de Lenz',
      texto: r`El signo menos de Faraday es la **ley de Lenz**: la corriente inducida circula en el sentido en que su propio campo magnético **se opone al cambio** de flujo que la produce.

**Método para el sentido:**
1. ¿Hacia dónde apunta $\vec B$ externo y el flujo **aumenta o disminuye**?
2. Si aumenta, la corriente inducida crea un campo **opuesto**; si disminuye, uno **del mismo sentido** (para compensar).
3. Con la regla de la mano derecha (pulgar en el campo inducido) se obtiene el sentido de la corriente.

Ejemplo: $\vec B$ entrante que crece → campo inducido saliente → corriente **antihoraria**. Si el flujo es constante, aunque sea grande, no hay corriente.

Lenz es la conservación de la energía: si la corriente inducida reforzara el cambio, la energía crecería sola.`,
    },
    {
      id: 'movimiento', titulo: 'Fem de movimiento',
      texto: r`Una barra conductora de largo $\ell$ que se mueve con velocidad $\vec v$ en un campo $\vec B$: sobre sus cargas actúa $q\vec v\times\vec B$, que las separa hasta que el campo eléctrico de la separación la equilibra ($qE=qvB$). Entre sus extremos aparece

$$\varepsilon=\int(\vec v\times\vec B)\cdot d\vec l=B\ell v\qquad(\vec v,\vec B,\vec\ell\text{ perpendiculares})$$

Si el campo no es uniforme a lo largo de la barra hay que **integrar** (final de marzo de 2022: $B=B_0e^{-bx}$).

**Barra sobre rieles con una resistencia R:** $I=\frac{B\ell v}{R}$. La barra con corriente en el campo recibe una fuerza $F=BI\ell=\frac{B^2\ell^2v}{R}$ que **se opone al movimiento** (otra cara de Lenz). Para mantener la velocidad constante, un agente debe hacer la potencia $Fv=\frac{(B\ell v)^2}{R}=I^2R$: toda la energía mecánica se convierte en calor en la resistencia.

**Campo eléctrico inducido.** Un flujo variable crea un campo eléctrico **no conservativo** (sus líneas son cerradas): $\oint\vec E\cdot d\vec l=-\frac{d\Phi_B}{dt}$. Las **corrientes de Foucault** (parásitas) en bloques metálicos son su efecto: frenan y calientan; por eso los núcleos de transformadores se hacen de chapas aisladas.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 11, ej. 1',
      enunciado: r`Un bucle circular de cobre de radio $12{,}0$ cm tiene $3{,}30\cdot10^{-2}\ \Omega$/m. Un campo paralelo a su normal crece de $0$ a $0{,}600$ T en $0{,}450$ s. ¿Energía disipada?`,
      pasos: [
        r`$A=\pi(0{,}12)^2=0{,}0452$ m²; $\varepsilon=\frac{A\Delta B}{\Delta t}=\frac{0{,}0452\cdot0{,}6}{0{,}45}=0{,}0603$ V.`,
        r`$R=3{,}3\cdot10^{-2}\cdot2\pi(0{,}12)=0{,}0249\ \Omega$.`,
        r`$E=\frac{\varepsilon^2}{R}\Delta t=\frac{(0{,}0603)^2}{0{,}0249}\cdot0{,}45$`,
      ],
      respuesta: r`$6{,}57\cdot10^{-2}$ J.`,
    },
    {
      fuente: 'TP 11, ej. 2',
      enunciado: r`Una bobina circular de 25 vueltas y $1{,}00$ m de diámetro tiene su eje en la dirección del campo terrestre de $50{,}0\ \mu$T. En $0{,}200$ s se la hace girar $180^\circ$. ¿Fem media?`,
      pasos: [
        r`Al girar media vuelta el flujo pasa de $+BA$ a $-BA$: $\Delta\Phi=2BA$.`,
        r`$\varepsilon=\frac{2NBA}{\Delta t}=\frac{2\cdot25\cdot50\cdot10^{-6}\cdot\pi(0{,}5)^2}{0{,}2}$`,
      ],
      respuesta: r`$9{,}82$ mV.`,
    },
    {
      fuente: 'TP 11, ej. 4',
      enunciado: r`Una espira rectangular de lados L y W ($L/W=3$) entra con la misma velocidad a una región de campo uniforme, una vez con el lado largo de frente (a) y otra con el corto (b). En (a) la fem media es $0{,}15$ V. ¿Cuánto vale en (b)?`,
      pasos: [
        r`Mientras entra, $\varepsilon=B\ell v$ con $\ell$ el lado que está en el borde.`,
        r`En (a) el lado frontal es $L$; en (b) es $W=L/3$.`,
      ],
      respuesta: r`$0{,}050$ V (aunque tarda tres veces más en entrar, la variación de flujo total es la misma).`,
      lab: 'faraday',
    },
    {
      fuente: 'TP 11, ej. 8',
      enunciado: r`Un auto con una antena vertical de $1{,}20$ m circula a $65{,}0$ km/h. El campo terrestre vale $50{,}0\ \mu$T, hacia el norte y $65{,}0^\circ$ por debajo de la horizontal. a) ¿En qué dirección debe ir para la máxima fem con la punta positiva? b) ¿Cuánto vale?`,
      pasos: [
        r`La antena es vertical: solo cuenta la componente **horizontal** del campo, $B_h=50\cos65^\circ=21{,}1\ \mu$T hacia el norte.`,
        r`$\vec v\times\vec B$ debe apuntar hacia arriba: con $\vec B$ al norte, $\vec v$ hacia el **este** ($\hat{e}\times\hat{n}=+\hat z$).`,
        r`$\varepsilon=B_h\ell v=(21{,}1\cdot10^{-6})(1{,}2)(18{,}06)$`,
      ],
      respuesta: r`Hacia el este; $4{,}58\cdot10^{-4}$ V.`,
    },
    {
      fuente: 'TP 11, ej. 10',
      enunciado: r`Una lamparita de $60{,}0$ W y $240\ \Omega$ está conectada a una varilla de $0{,}600$ m que desliza sobre rieles en un campo de $0{,}400$ T. ¿Cuánto debe recorrer la varilla para que la lámpara quede encendida medio segundo?`,
      pasos: [
        r`$\varepsilon=\sqrt{PR}=\sqrt{60\cdot240}=120$ V.`,
        r`$v=\frac{\varepsilon}{B\ell}=\frac{120}{0{,}4\cdot0{,}6}=500$ m/s.`,
        r`$d=vt=500\cdot0{,}5$`,
      ],
      respuesta: r`$250$ m: una fem útil por movimiento exige velocidades y campos grandes.`,
      lab: 'faraday',
    },
    {
      fuente: 'TP 11, ej. 6',
      enunciado: r`Una espira está en un campo uniforme entrante. ¿Sentido de la corriente inducida si a) B aumenta, b) B disminuye, c) B es constante?`,
      pasos: [
        r`**a)** El flujo entrante crece: el campo inducido debe salir; corriente **antihoraria**.`,
        r`**b)** El flujo entrante decrece: el campo inducido refuerza el entrante; corriente **horaria**.`,
        r`**c)** Sin variación de flujo no hay fem: $I=0$.`,
      ],
    },
  ],
  preguntas: [
    { id: 'm11-q1', p: 'Una espira está en un campo magnético muy intenso pero constante, y no se mueve. La fem inducida es:', opciones: ['Grande, porque el campo es intenso', 'Cero', 'Proporcional a B', 'Depende del área'], ok: 1, por: 'Faraday depende de la variación del flujo, no de su valor.' },
    { id: 'm11-q2', p: 'La ley de Lenz es consecuencia de la conservación de:', opciones: ['La carga', 'La energía', 'La cantidad de movimiento', 'El flujo'], ok: 1, por: 'Si la corriente inducida favoreciera el cambio, se generaría energía de la nada.' },
    { id: 'm11-q3', p: 'Una barra desliza sobre rieles en un campo uniforme. La fuerza magnética sobre la barra:', opciones: ['La acelera', 'Se opone a su velocidad', 'Es perpendicular a los rieles y al plano', 'Es nula'], ok: 1, por: r`$I\vec\ell\times\vec B$ apunta siempre contra el movimiento: es un freno magnético.` },
    { id: 'm11-q4', p: 'Una espira gira 180° en un campo uniforme en un tiempo Δt. La fem media es:', opciones: ['BA/Δt', '2NBA/Δt', 'Cero, porque vuelve al mismo plano', 'NBA·ω'], ok: 1, por: r`El flujo pasa de $+BA$ a $-BA$. A los 360° sí volvería al flujo inicial y la fem media sería cero.` },
    { id: 'm11-q5', p: 'El campo eléctrico inducido por un flujo magnético variable:', opciones: ['Es conservativo, como el electrostático', 'Tiene líneas cerradas y no es conservativo', 'Es nulo dentro de los conductores', 'Solo existe donde hay un conductor cerrado'], ok: 1, por: r`$\oint\vec E\cdot d\vec l=-\frac{d\Phi_B}{dt}\neq0$: el trabajo en un camino cerrado no es nulo.` },
    { id: 'm11-q6', p: r`Una bobina de 50 vueltas con su normal a 30° del campo; B sube de 200 a 600 mT en 0,400 s y se inducen 80,0 mV. El largo total del alambre (bobina cuadrada) es:`, opciones: ['8,60 m', '4,30 m', '272 m', '1,85 m'], ok: 0, por: r`$A=\frac{0{,}08\cdot0{,}4}{50\cdot0{,}4\cdot\cos30^\circ}=1{,}85\cdot10^{-3}$ m², lado $4{,}3$ cm, $50\cdot4\cdot0{,}043$ m.` },
    { id: 'm11-q7', p: 'Los núcleos de los transformadores se hacen de chapas finas aisladas para:', opciones: ['Aumentar la inductancia del primario', 'Reducir las corrientes de Foucault', 'Aumentar el flujo disperso', 'Bajar el costo y el peso del núcleo'], ok: 1, por: 'El aislante entre chapas corta los caminos de las corrientes parásitas, que disipan energía y calientan el núcleo.' },
  ],
};

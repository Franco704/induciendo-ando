const r = String.raw;

export default {
  intro: r`Toda la materia arranca acá: la carga eléctrica y la fuerza entre cargas. La **ley de Coulomb** es una ley de cuadrado inverso como la de la gravedad, pero puede atraer o repeler y es muchísimo más intensa. Con ella y el principio de **superposición** se resuelven todos los problemas del TP 1.`,
  teoria: [
    {
      id: 'carga', titulo: 'Carga eléctrica',
      texto: r`La carga es una propiedad de la materia que viene en dos signos: cargas del mismo signo se repelen y de signo contrario se atraen. Sus propiedades:

- **Se conserva:** en un sistema aislado la carga total no cambia; al frotar, la carga solo pasa de un cuerpo a otro.
- **Está cuantizada:** toda carga es un múltiplo entero de la carga elemental $e=1{,}602\cdot10^{-19}$ C. Un electrón tiene $-e$, un protón $+e$.
- Su unidad es el **coulomb** (C). Un coulomb es muchísimo: en la práctica se usan $\mu$C ($10^{-6}$) y nC ($10^{-9}$).

**Conductores y aislantes.** En un conductor (metales) hay electrones libres que se mueven por todo el material; en un aislante las cargas quedan donde se ponen. Un cuerpo se carga por **frotamiento**, por **contacto** (al tocar un cuerpo cargado se reparten las cargas; dos esferas idénticas terminan con la mitad de la suma) o por **inducción** (se acerca un cuerpo cargado, se conecta a tierra y se corta la conexión antes de alejarlo).

> En 1 kg de carbono hay $4{,}82\cdot10^7$ C de carga positiva en los núcleos (TP 1, ej. 1): la materia es neutra porque la carga negativa de los electrones la compensa casi exactamente.`,
    },
    {
      id: 'coulomb', titulo: 'Ley de Coulomb',
      texto: r`La fuerza entre dos cargas puntuales en reposo es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia:

$$F=k\frac{|q_1q_2|}{r^2},\qquad k=\frac{1}{4\pi\varepsilon_0}=8{,}99\cdot10^9\ \frac{\text{N·m}^2}{\text C^2},\qquad\varepsilon_0=8{,}85\cdot10^{-12}\ \frac{\text C^2}{\text{N·m}^2}$$

Está dirigida a lo largo de la recta que une las cargas: repulsiva si tienen el mismo signo y atractiva si no. En forma vectorial, la fuerza de 1 sobre 2 es $\vec F_{12}=k\frac{q_1q_2}{r^2}\hat r_{12}$, con $\hat r_{12}$ apuntando de 1 hacia 2.

- Cumple la **tercera ley de Newton**: la fuerza de 1 sobre 2 es igual y opuesta a la de 2 sobre 1, aunque las cargas sean distintas.
- **Cuadrado inverso:** si la distancia se reduce a $\frac18$, la fuerza se multiplica por $64$ (TP 1, ej. 5).
- En un medio material de permitividad $\varepsilon=\kappa\varepsilon_0$ la fuerza se reduce $\kappa$ veces: la máxima es en el vacío.

Comparada con la gravedad, la fuerza eléctrica entre dos protones es unas $10^{36}$ veces mayor.`,
    },
    {
      id: 'superposicion', titulo: 'Superposición y método de resolución',
      texto: r`Si hay varias cargas, la fuerza sobre una de ellas es la **suma vectorial** de las fuerzas que le hace cada una de las otras, calculadas como si estuvieran solas:

$$\vec F_{neta}=\sum_i\vec F_i$$

**Método:**
1. Dibujar las cargas y elegir ejes.
2. Para cada par, calcular el **módulo** con Coulomb (con valores absolutos de las cargas).
3. Determinar la **dirección y sentido** por los signos (atracción o repulsión) y descomponer en $x$ e $y$.
4. Sumar componentes y obtener módulo y ángulo: $F=\sqrt{F_x^2+F_y^2}$, $\theta=\operatorname{arctg}\frac{F_y}{F_x}$ (cuidando el cuadrante).

**Equilibrio de una tercera carga** sobre la recta de dos cargas:
- Si las dos cargas son del **mismo signo**, el punto de equilibrio está **entre** ellas, más cerca de la menor.
- Si son de **signo contrario**, está **afuera**, del lado de la carga de **menor** valor absoluto.

**Péndulos eléctricos:** la esfera cuelga en equilibrio con su peso, la tensión del hilo y la fuerza eléctrica horizontal: $\operatorname{tg}\theta=\frac{F_e}{mg}$.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 1, ej. 2',
      enunciado: r`Una partícula alfa tiene dos protones y dos neutrones. ¿Cuál es la fuerza de repulsión entre dos partículas alfa separadas $2{,}00$ mm?`,
      pasos: [
        r`Cada partícula alfa tiene $q=2e=3{,}20\cdot10^{-19}$ C (los neutrones no tienen carga).`,
        r`$F=k\frac{q^2}{r^2}=\frac{(8{,}99\cdot10^9)(3{,}20\cdot10^{-19})^2}{(2{,}00\cdot10^{-3})^2}$`,
      ],
      respuesta: r`$F=2{,}30\cdot10^{-22}$ N con $2{,}00$ mm. La respuesta del TP, $2{,}30\cdot10^{-10}$ N, corresponde a una separación de $2{,}00$ **nm**: la fuerza crece $10^{12}$ veces al dividir la distancia por $10^6$.`,
      lab: 'coulomb',
    },
    {
      fuente: 'TP 1, ej. 4',
      enunciado: r`Dos cargas de $2{,}00\ \mu$C están en $(0;\ 0{,}300)$ m y $(0;\ -0{,}300)$ m. ¿Cuál es la fuerza neta sobre $Q=4{,}00\ \mu$C ubicada en $(0{,}400;\ 0)$ m?`,
      pasos: [
        r`Distancia de cada carga a $Q$: $r=\sqrt{0{,}4^2+0{,}3^2}=0{,}500$ m.`,
        r`Módulo de cada fuerza: $F=\frac{(8{,}99\cdot10^9)(2\cdot10^{-6})(4\cdot10^{-6})}{0{,}25}=0{,}288$ N, ambas repulsivas.`,
        r`Por simetría, las componentes $y$ se cancelan. Las $x$ suman: $2F\cos\alpha$ con $\cos\alpha=\frac{0{,}4}{0{,}5}=0{,}8$.`,
        r`$F_x=2\cdot0{,}288\cdot0{,}8=0{,}46$ N.`,
      ],
      respuesta: r`$\vec F=0{,}46\ \hat\imath$ N.`,
      lab: 'coulomb',
    },
    {
      fuente: 'TP 1, ej. 3',
      enunciado: r`Una esfera aislante de $8{,}00\cdot10^{-2}$ kg y carga $0{,}600\ \mu$C cuelga de un hilo. Una carga de $-0{,}900\ \mu$C se mantiene a $0{,}150$ m directamente a su derecha. Encuentre a) el ángulo $\theta$ del hilo con la vertical y b) la tensión.`,
      pasos: [
        r`Fuerza eléctrica (atractiva, hacia la derecha): $F=\frac{(8{,}99\cdot10^9)(0{,}6\cdot10^{-6})(0{,}9\cdot10^{-6})}{0{,}15^2}=0{,}216$ N.`,
        r`Peso: $mg=0{,}08\cdot9{,}8=0{,}784$ N.`,
        r`Equilibrio: $\operatorname{tg}\theta=\frac{F}{mg}=0{,}275\Rightarrow\theta=15{,}4^\circ$.`,
        r`$T=\sqrt{F^2+(mg)^2}=0{,}813$ N.`,
      ],
      respuesta: r`$\theta=15{,}4^\circ$, $T=0{,}813$ N.`,
    },
    {
      fuente: 'TP 1, ej. 8',
      enunciado: r`Una carga de $+8{,}00$ nC está $40{,}0$ mm a la izquierda de una de $-14{,}0$ nC. ¿Dónde debe colocarse una tercera carga para que la fuerza neta sobre ella sea cero?`,
      pasos: [
        r`Signos contrarios: el equilibrio está **afuera** del par, del lado de la carga menor (la de $8$ nC), es decir a la izquierda.`,
        r`Sea $x$ la distancia a la carga de $8$ nC: $\frac{8}{x^2}=\frac{14}{(x+40)^2}$.`,
        r`$\frac{x+40}{x}=\sqrt{\frac{14}{8}}=1{,}323\Rightarrow x=\frac{40}{0{,}323}=124$ mm.`,
        r`El resultado no depende del valor ni del signo de la tercera carga.`,
      ],
      respuesta: r`A $124$ mm a la izquierda de la carga de $+8{,}00$ nC.`,
      lab: 'coulomb',
    },
    {
      fuente: 'TP 1, ej. 9',
      enunciado: r`Dos cargas $-Q_0$ y $-4Q_0$ están separadas $\ell$. Pueden moverse libremente pero no lo hacen por una tercera carga cercana. ¿Cuál debe ser la tercera carga y dónde está para que las tres estén en equilibrio?`,
      pasos: [
        r`Para que las dos negativas no se escapen, la tercera debe atraerlas: es **positiva** y está **entre** ellas.`,
        r`Equilibrio de la tercera: $\frac{Q_0}{x^2}=\frac{4Q_0}{(\ell-x)^2}\Rightarrow\ell-x=2x\Rightarrow x=\frac\ell3$ desde $-Q_0$.`,
        r`Equilibrio de $-Q_0$: la atracción de $q$ compensa la repulsión de $-4Q_0$: $\frac{q}{(\ell/3)^2}=\frac{4Q_0}{\ell^2}\Rightarrow q=\frac49Q_0$.`,
      ],
      respuesta: r`$q=+\frac49Q_0$, a $\frac13\ell$ de $-Q_0$.`,
    },
    {
      fuente: 'TP 1, ej. 10',
      enunciado: r`Dos esferas de $3{,}00$ g cuelgan del mismo punto con hilos de seda de $80{,}0$ mm. ¿Qué carga hay que dar a cada una para que queden separadas $50{,}0$ mm?`,
      pasos: [
        r`Cada hilo se aparta un ángulo con $\operatorname{sen}\theta=\frac{25}{80}=0{,}3125$, así que $\operatorname{tg}\theta=0{,}329$.`,
        r`Fuerza eléctrica necesaria: $F=mg\operatorname{tg}\theta=(0{,}003)(9{,}8)(0{,}329)=9{,}67\cdot10^{-3}$ N.`,
        r`$F=k\frac{q^2}{r^2}\Rightarrow q=r\sqrt{\frac Fk}=0{,}05\sqrt{\frac{9{,}67\cdot10^{-3}}{8{,}99\cdot10^9}}$`,
      ],
      respuesta: r`$q=51{,}8$ nC en cada esfera.`,
    },
  ],
  preguntas: [
    { id: 'm01-q1', p: r`Dos cargas separadas $d$ se ejercen una fuerza $F$. Si se triplica una de las cargas y la distancia se reduce a la tercera parte, la nueva fuerza es:`, opciones: ['3F', '9F', '27F', 'F/3'], ok: 2, por: r`$F'=k\frac{3q_1q_2}{(d/3)^2}=3\cdot9\,F=27F$.` },
    { id: 'm01-q2', p: r`Una esfera con $+3{,}0$ mC toca a otra idéntica con $-9{,}0$ mC y se separan. ¿Qué carga queda en cada una?`, opciones: ['−6,0 mC', '−3,0 mC', '+3,0 mC', '−12 mC'], ok: 1, por: r`Al ser idénticas se reparten la carga total por mitades: $\frac{3-9}{2}=-3{,}0$ mC.` },
    { id: 'm01-q3', p: 'Un protón y un electrón están a cierta distancia. Comparadas las fuerzas que se ejercen:', opciones: ['El protón ejerce más fuerza porque tiene más masa', 'El electrón recibe más fuerza porque es más liviano', 'Las fuerzas tienen igual módulo y sentidos opuestos', 'Las dos fuerzas apuntan en el mismo sentido'], ok: 2, por: r`Tercera ley de Newton: $|\vec F_{12}|=|\vec F_{21}|$. Lo que es distinto es la **aceleración**, porque las masas son distintas.` },
    { id: 'm01-q4', p: 'Dos cargas de distinto signo están fijas. Un punto de la recta que las une donde una tercera carga quedaría en equilibrio está:', opciones: ['Entre ellas, más cerca de la mayor', 'Entre ellas, en el punto medio', 'Afuera, del lado de la carga de menor módulo', 'Afuera, del lado de la carga de mayor módulo'], ok: 2, por: 'Entre ellas las dos fuerzas apuntan para el mismo lado. Afuera se oponen, y para compensar a la mayor hay que estar más cerca de la menor.' },
    { id: 'm01-q5', p: r`Dos cargas iguales sumergidas en un fluido con $\kappa=500$ se ejercen una fuerza. Respecto del vacío a la misma distancia, la fuerza:`, opciones: ['Es 500 veces mayor', 'Es 500 veces menor', 'Es la misma', 'Es √500 veces menor'], ok: 1, por: r`En un medio $F=\frac{1}{4\pi\kappa\varepsilon_0}\frac{q_1q_2}{r^2}$: la máxima fuerza se da en el vacío.` },
    { id: 'm01-q6', p: 'Una barra cargada se acerca a una esfera metálica neutra sin tocarla. La esfera:', opciones: ['No siente fuerza porque es neutra', 'Es atraída por la barra', 'Es repelida por la barra', 'Se carga con el mismo signo que la barra'], ok: 1, por: 'La barra induce una separación de cargas: las de signo opuesto quedan más cerca y la atracción gana a la repulsión. Por eso un peine frotado levanta papelitos.' },
    { id: 'm01-q7', p: r`¿Cuántos electrones hay en una carga de $-1{,}0$ nC?`, opciones: ['6,2·10⁹', '1,6·10¹⁰', '6,2·10¹⁸', '1,6·10⁻¹⁰'], ok: 0, por: r`$N=\frac{10^{-9}}{1{,}602\cdot10^{-19}}=6{,}2\cdot10^9$.` },
  ],
};

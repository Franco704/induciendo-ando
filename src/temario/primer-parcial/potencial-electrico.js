const r = String.raw;

export default {
  intro: r`El campo eléctrico es conservativo, así que se le puede asociar una **energía potencial**, y dividiéndola por la carga, un **potencial**: un número en cada punto del espacio, como la altura en un mapa topográfico. Es mucho más fácil de calcular que el campo (es un escalar) y de él se recupera el campo. En los finales es el tema de teoría más pedido de electricidad.`,
  teoria: [
    {
      id: 'energia', titulo: 'Energía potencial eléctrica',
      texto: r`Como la fuerza eléctrica es conservativa, el trabajo que hace al mover una carga de $a$ a $b$ no depende del camino y se escribe como una diferencia de energía potencial: $W_{a\to b}=U_a-U_b=-\Delta U$.

Para dos cargas puntuales, tomando $U=0$ cuando están infinitamente alejadas:

$$U=k\frac{q_1q_2}{r}$$

- Si las cargas tienen el **mismo signo**, $U>0$: hubo que hacer trabajo para acercarlas.
- Si tienen **signo contrario**, $U<0$: el sistema se arma solo y libera energía.

**Energía de un sistema de cargas:** es el trabajo para traerlas una por una desde el infinito; se suma sobre **todos los pares**, sin repetir:

$$U=k\sum_{i<j}\frac{q_iq_j}{r_{ij}}$$

Si el trabajo neto para armar el sistema es cero, $U=0$ (TP 4, ej. 4: con $q$, $q$ y $Q$ en un triángulo equilátero, $Q=-\frac q2$).`,
    },
    {
      id: 'potencial', titulo: 'Potencial eléctrico',
      texto: r`El potencial en un punto es la energía potencial por unidad de carga, o el trabajo por unidad de carga que hace un **agente externo** para traer una carga de prueba desde el infinito, lentamente:

$$V=\frac{U}{q_0}\qquad[V]=\frac{\text J}{\text C}=\text V\ (\text{volt})$$

**Diferencia de potencial** (lo que mide un voltímetro):

$$V_b-V_a=-\int_a^b\vec E\cdot d\vec l$$

Para una carga puntual: $V=k\frac qr$. Para varias, se suman **escalares** (con su signo): $V=k\sum\frac{q_i}{r_i}$.

**Trabajo y energía:** el trabajo del campo al mover $q$ de $a$ a $b$ es $W=q(V_a-V_b)$. Una carga **positiva** se mueve espontáneamente hacia potenciales **menores**; una negativa, hacia mayores.

**Electrón-volt:** energía que gana un electrón al atravesar 1 V: $1\ \text{eV}=1{,}602\cdot10^{-19}$ J.

> **Potencial no es energía potencial.** $V$ es una propiedad del punto (existe aunque no haya carga ahí); $U=qV$ es la energía de una carga colocada en ese punto. El TP 4 empieza pidiendo esta diferencia.`,
    },
    {
      id: 'campo-y-potencial', titulo: 'Del potencial al campo y equipotenciales',
      texto: r`El campo es menos el gradiente del potencial:

$$\vec E=-\nabla V,\qquad E_x=-\frac{\partial V}{\partial x}$$

El campo apunta hacia donde el potencial **disminuye** más rápido. En un **campo uniforme**, $\Delta V=-Ed$ (con $d$ medido en la dirección del campo): por eso $E$ se puede expresar en V/m.

**Superficies equipotenciales:** lugares donde $V$ es constante.
- Son **perpendiculares** a las líneas de campo en todo punto.
- Moverse sobre una equipotencial no cuesta trabajo.
- Carga puntual: esferas concéntricas; campo uniforme: planos perpendiculares al campo; línea infinita: cilindros coaxiales.
- Un conductor en equilibrio es un volumen equipotencial.

**Línea infinita:** $V(r)=\frac{\lambda}{2\pi\varepsilon_0}\ln\frac{r_0}{r}$. No se puede tomar $V(\infty)=0$ porque la carga se extiende hasta el infinito: se elige una referencia $r_0$ finita (pregunta clásica del final).

**Esfera conductora** de radio $R$: afuera $V=\frac{kQ}{r}$; adentro, constante $V=\frac{kQ}{R}$.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 4, ej. 1',
      enunciado: r`Dos cargas de $+12{,}0$ y $-6{,}00\ \mu$C están separadas $160$ mm. ¿Cuál es el potencial en el punto medio A? ¿En qué punto B entre ellas el potencial es cero?`,
      pasos: [
        r`$V_A=k\frac{12-6}{0{,}08}\cdot10^{-6}=(8{,}99\cdot10^9)\frac{6\cdot10^{-6}}{0{,}08}=6{,}75\cdot10^5$ V.`,
        r`Para $V=0$ entre ellas, a distancia $x$ de la positiva: $\frac{12}{x}=\frac{6}{0{,}16-x}\Rightarrow x=0{,}107$ m.`,
      ],
      respuesta: r`$V_A=675$ kV; B a $10{,}7$ cm de la carga de $+12\ \mu$C.`,
      lab: 'equipotenciales',
    },
    {
      fuente: 'TP 4, ej. 2',
      enunciado: r`Dos placas grandes separadas $80{,}0$ mm tienen una diferencia de potencial de $800$ kV. ¿Qué fuerza actúa sobre un electrón en el punto medio? ¿Qué energía cinética gana al ir de la placa de bajo potencial a la de alto?`,
      pasos: [
        r`$E=\frac{V}{d}=\frac{8\cdot10^5}{0{,}08}=10^7$ V/m. $F=eE=1{,}60\cdot10^{-12}$ N (uniforme: igual en todo punto).`,
        r`$\Delta K=|q|\Delta V=(1{,}6\cdot10^{-19})(8\cdot10^5)=1{,}28\cdot10^{-13}$ J $=800$ keV.`,
      ],
      respuesta: r`$1{,}60\cdot10^{-12}$ N; $1{,}28\cdot10^{-13}$ J.`,
    },
    {
      fuente: 'TP 4, ej. 4',
      enunciado: r`Tres cargas, al principio muy alejadas, se colocan en los vértices de un triángulo equilátero de lado $d$. Dos valen $q$. Si el trabajo neto para armar el arreglo es cero, ¿cuánto vale la tercera?`,
      pasos: [
        r`$U=\frac kd(q\cdot q+qQ+qQ)=0$`,
        r`$q^2+2qQ=0\Rightarrow Q=-\frac q2$.`,
      ],
      respuesta: r`$Q=-q/2$.`,
    },
    {
      fuente: 'TP 4, ej. 5',
      enunciado: r`Un campo de $325$ V/m apunta hacia $-y$. A está en $(-0{,}200;\ -0{,}300)$ m y B en $(0{,}400;\ 0{,}500)$ m. Calcule $V_B-V_A$.`,
      pasos: [
        r`$V_B-V_A=-\int_A^B\vec E\cdot d\vec l$ con $\vec E=-325\,\hat\jmath$.`,
        r`Solo cuenta el desplazamiento en $y$: $\Delta y=0{,}8$ m. $V_B-V_A=-(-325)(0{,}8)$`,
        r`Subir contra un campo que apunta hacia abajo es ir a mayor potencial.`,
      ],
      respuesta: r`$V_B-V_A=+260$ V.`,
      lab: 'equipotenciales',
    },
    {
      fuente: 'TP 4, ej. 8',
      enunciado: r`Una carga $q=+7{,}20\cdot10^{-8}$ C está rodeada por una equipotencial A de radio $1{,}80$ m. Una carga de prueba $q_0=+4{,}50\cdot10^{-11}$ C se mueve de A a una equipotencial B, con trabajo $W_{AB}=-8{,}10\cdot10^{-9}$ J. Encuentre $r_B$.`,
      pasos: [
        r`$W_{AB}=q_0(V_A-V_B)\Rightarrow V_A-V_B=\frac{-8{,}1\cdot10^{-9}}{4{,}5\cdot10^{-11}}=-180$ V.`,
        r`$V_A=\frac{kq}{1{,}8}=360$ V, así que $V_B=540$ V.`,
        r`$r_B=\frac{kq}{V_B}=\frac{647{,}3}{540}$`,
        r`Trabajo del campo negativo: la carga positiva se acercó a la fuente positiva.`,
      ],
      respuesta: r`$r_B=1{,}20$ m.`,
    },
    {
      fuente: 'TP 4, ej. 6',
      enunciado: r`En un relámpago $V_{nube}-V_{suelo}=1{,}20\cdot10^9$ V y se transfieren $-25{,}0$ C del suelo a la nube. a) ¿Cuánto trabajo hace la fuerza eléctrica? b) Si acelerara un auto de $1100$ kg desde el reposo, ¿qué velocidad alcanzaría?`,
      pasos: [
        r`$W=q(V_{suelo}-V_{nube})=(-25)(-1{,}2\cdot10^9)=3{,}00\cdot10^{10}$ J. Positivo: la carga negativa va espontáneamente hacia el potencial mayor.`,
        r`$v=\sqrt{\frac{2W}{m}}=\sqrt{\frac{6\cdot10^{10}}{1100}}=7{,}39\cdot10^3$ m/s.`,
      ],
      respuesta: r`a) $3{,}00\cdot10^{10}$ J; b) $7{,}39$ km/s.`,
    },
  ],
  preguntas: [
    { id: 'm04-q1', p: r`¿Cuánto trabajo debe hacer un agente externo para llevar un electrón a un punto $2{,}0\cdot10^6$ V **más alto** de potencial, sin cambiar su velocidad?`, opciones: ['+3,2·10⁻¹³ J', '−3,2·10⁻¹³ J', 'Cero', '+2,0·10⁶ J'], ok: 1, por: r`$W_{ext}=q\Delta V=(-1{,}6\cdot10^{-19})(2\cdot10^6)$. El electrón "cae" hacia potenciales altos solo: hay que frenarlo.` },
    { id: 'm04-q2', p: r`La energía potencial de dos electrones separados $5{,}0\cdot10^{-8}$ m es:`, opciones: ['4,61·10⁻²¹ J', '−4,61·10⁻²¹ J', '9,22·10⁻²¹ J', '2,88·10⁻²¹ J'], ok: 0, por: r`$U=\frac{ke^2}{r}=4{,}61\cdot10^{-21}$ J, positiva: igual signo.` },
    { id: 'm04-q3', p: 'Un protón se suelta en un campo uniforme de 850 N/C hacia +x. Después de recorrer 2,50 m, su energía potencial:', opciones: ['Aumentó 340 aJ', 'Disminuyó 340 aJ', 'No cambió', 'Disminuyó 2125 J'], ok: 1, por: r`$\Delta U=-qEd=-(1{,}6\cdot10^{-19})(850)(2{,}5)=-3{,}4\cdot10^{-16}$ J: la carga positiva se mueve a favor del campo y pierde energía potencial.` },
    { id: 'm04-q4', p: 'Las superficies equipotenciales y las líneas de campo:', opciones: ['Son paralelas', 'Son perpendiculares', 'Forman 45°', 'No tienen relación'], ok: 1, por: 'Si el campo tuviera componente sobre la equipotencial, mover una carga sobre ella costaría trabajo.' },
    { id: 'm04-q5', p: 'En el punto medio entre dos cargas iguales y opuestas:', opciones: ['V = 0 y E = 0', 'V = 0 y E ≠ 0', 'V ≠ 0 y E = 0', 'V ≠ 0 y E ≠ 0'], ok: 1, por: r`Los potenciales se cancelan ($kq/r-kq/r$) pero los campos apuntan los dos hacia la negativa y se suman.` },
    { id: 'm04-q6', p: 'En el punto medio entre dos cargas positivas iguales:', opciones: ['V = 0 y E = 0', 'V = 0 y E ≠ 0', 'V ≠ 0 y E = 0', 'V ≠ 0 y E ≠ 0'], ok: 2, por: 'Los campos se cancelan, pero los potenciales (escalares positivos) se suman. Saber V en un punto no dice nada de E.' },
    { id: 'm04-q7', p: r`A cierta distancia de una carga puntual, $E=465$ V/m y $V=3000$ V. La distancia es:`, opciones: ['0,155 m', '6,45 m', '1,39·10⁶ m', '41,6 m'], ok: 1, por: r`$\frac VE=\frac{kq/r}{kq/r^2}=r$.` },
    { id: 'm04-q8', p: 'Una carga negativa liberada en una región con campo eléctrico se mueve hacia:', opciones: ['Potenciales menores', 'Potenciales mayores', 'Una equipotencial', 'Donde E es menor'], ok: 1, por: r`$U=qV$ con $q<0$: minimizar $U$ es ir a mayor $V$.` },
  ],
};

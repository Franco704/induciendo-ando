const r = String.raw;

export default {
  intro: r`Hasta acá las cargas estaban quietas. Ahora se mueven: hay **corriente**. Este módulo explica qué es la corriente a nivel microscópico (electrones que derivan lentamente), de dónde sale la ley de Ohm y cuánta energía se disipa. Del modelo de Drude sale una pregunta de teoría que se tomó en un final reciente.`,
  teoria: [
    {
      id: 'corriente', titulo: 'Corriente y densidad de corriente',
      texto: r`La corriente es la carga que atraviesa una sección por unidad de tiempo:

$$I=\frac{dQ}{dt}\qquad[I]=\frac{\text C}{\text s}=\text A\ (\text{ampere})$$

Por convención, su sentido es el del movimiento de las cargas **positivas**; en un metal los portadores son electrones, que se mueven al revés.

**Modelo microscópico.** Si hay $n$ portadores de carga $q$ por unidad de volumen moviéndose con velocidad media $v_d$ (velocidad de **deriva**) por un conductor de sección $A$:

$$I=nqv_dA,\qquad J=\frac IA=nqv_d\qquad[J]=\frac{\text A}{\text m^2}$$

En el cobre $n\approx8{,}5\cdot10^{28}$ electrones/m³, y con corrientes comunes $v_d$ es de fracciones de **milímetro por segundo**. La lamparita prende enseguida porque el campo se establece en todo el cable casi a la velocidad de la luz y empuja a la vez a todos los electrones que ya estaban ahí.

**Capacidad de una batería:** se da en A·h (carga). Una de 70 A·h a 12 V guarda $70\cdot12=840$ W·h.`,
    },
    {
      id: 'ohm', titulo: 'Resistividad y ley de Ohm',
      texto: r`En muchos materiales la densidad de corriente es proporcional al campo:

$$\vec J=\sigma\vec E,\qquad\rho=\frac1\sigma\qquad[\rho]=\Omega\cdot\text m$$

Para un conductor de largo $L$ y sección $A$ ($E=V/L$, $J=I/A$) resulta la **ley de Ohm**:

$$V=IR,\qquad R=\rho\frac{L}{A}\qquad[R]=\frac{\text V}{\text A}=\Omega$$

- $R$ crece con el largo y baja con la sección. Si un alambre se **estira** al triple manteniendo el volumen, la sección baja al tercio y $R$ se multiplica por **9** (TP 6, ej. 2).
- La ley de Ohm **no es universal**: vale para materiales **óhmicos** (metales a temperatura constante), en los que $R$ no depende de $V$. Un diodo o una lámpara de gas no la cumplen.

**Variación con la temperatura:** $\rho=\rho_0\left[1+\alpha(T-T_0)\right]$. En los metales $\alpha>0$ (la resistencia sube al calentarse); en los semiconductores baja.

Valores típicos a 20 °C: plata $1{,}5\cdot10^{-8}$, cobre $1{,}72\cdot10^{-8}$, aluminio $2{,}8\cdot10^{-8}$, tungsteno $5{,}6\cdot10^{-8}$, nicromo $1{,}5\cdot10^{-6}\ \Omega$m.`,
    },
    {
      id: 'drude', titulo: 'Teoría de conducción metálica (Drude)',
      texto: r`Los electrones libres se mueven al azar a unos $10^6$ m/s y chocan con los iones de la red. Con un campo aplicado, entre dos choques cada electrón se acelera con $a=\frac{eE}{m}$. Si $\tau$ es el **tiempo libre medio** entre choques y tras cada choque la velocidad es aleatoria:

$$v_d=a\tau=\frac{eE\tau}{m}$$

$$J=nev_d=\frac{ne^2\tau}{m}E\ \Rightarrow\ \sigma=\frac{ne^2\tau}{m},\qquad\rho=\frac{m}{ne^2\tau}$$

Como $\sigma$ no depende de $E$, el modelo **explica la ley de Ohm**. Al calentar el metal la red vibra más, $\tau$ disminuye y $\rho$ aumenta.`,
    },
    {
      id: 'potencia', titulo: 'Potencia y fem',
      texto: r`Una carga $dq$ que baja una diferencia de potencial $V$ entrega $V\,dq$. Por unidad de tiempo:

$$P=VI=I^2R=\frac{V^2}{R}\qquad[P]=\text W$$

En una resistencia esa energía se convierte en calor (**efecto Joule**).

**Fuerza electromotriz.** Una fuente (pila, batería, generador) hace trabajo no electrostático para llevar las cargas de su borne negativo al positivo. La **fem** $\varepsilon$ es ese trabajo por unidad de carga, en volts. Una fuente real tiene una **resistencia interna** $r$:

$$V_{ab}=\varepsilon-Ir$$

La tensión en bornes baja cuanto más corriente entrega. Potencia que entrega a la carga: $P=VI=\varepsilon I-I^2r$.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 6, ej. 5',
      enunciado: r`Un alambre de $5{,}80$ m y $2{,}00$ mm de diámetro lleva $750$ mA con $22{,}0$ mV entre sus extremos. Si $v_d=1{,}70\cdot10^{-5}$ m/s, halle a) R, b) ρ, c) J, d) E y e) n.`,
      pasos: [
        r`**a)** $R=\frac VI=\frac{0{,}022}{0{,}75}=0{,}0293\ \Omega$.`,
        r`**b)** $A=\pi(10^{-3})^2=3{,}14\cdot10^{-6}$ m²; $\rho=\frac{RA}{L}=1{,}59\cdot10^{-8}\ \Omega$m (cobre).`,
        r`**c)** $J=\frac IA=2{,}39\cdot10^5$ A/m².`,
        r`**d)** $E=\frac VL=3{,}79\cdot10^{-3}$ V/m.`,
        r`**e)** $n=\frac{J}{ev_d}=\frac{2{,}39\cdot10^5}{(1{,}6\cdot10^{-19})(1{,}7\cdot10^{-5})}=8{,}8\cdot10^{28}$ m⁻³.`,
      ],
      lab: 'deriva',
    },
    {
      fuente: 'TP 6, ej. 3',
      enunciado: r`Con $1{,}00$ g de cobre se quiere hacer un alambre uniforme de $0{,}500\ \Omega$ usando todo el material. ¿Largo y diámetro? ($\rho=1{,}72\cdot10^{-8}\ \Omega$m, densidad $8{,}96$ g/cm³)`,
      pasos: [
        r`Volumen: $V=\frac{1}{8{,}96}=0{,}1116\ \text{cm}^3=1{,}116\cdot10^{-7}$ m³, y $V=LA$.`,
        r`$R=\rho\frac LA=\rho\frac{L^2}{V}\Rightarrow L=\sqrt{\frac{RV}\rho}=\sqrt{\frac{0{,}5\cdot1{,}116\cdot10^{-7}}{1{,}72\cdot10^{-8}}}=1{,}80$ m.`,
        r`$A=\frac VL=6{,}2\cdot10^{-8}$ m² $\Rightarrow d=2{,}8\cdot10^{-4}$ m.`,
      ],
      respuesta: r`$L\approx1{,}8$ m, $d\approx280\ \mu$m.`,
    },
    {
      fuente: 'TP 6, ej. 4',
      enunciado: r`Un carrete tiene $75{,}0$ m de alambre; con una batería pasa $2{,}40$ A. Después de cortar pedazos, con la misma batería pasa $3{,}10$ A. ¿Cuánto alambre queda?`,
      pasos: [
        r`Con la misma tensión, $I\propto\frac1R\propto\frac1L$: $L_2=L_1\frac{I_1}{I_2}$.`,
        r`$L_2=75\cdot\frac{2{,}40}{3{,}10}$`,
      ],
      respuesta: r`$58{,}1$ m.`,
    },
    {
      fuente: 'TP 6, ej. 6',
      enunciado: r`Una batería de $15{,}0$ V de fem entrega $20{,}0$ W a una carga R y su tensión en bornes es $11{,}6$ V. a) ¿Cuánto vale R? b) ¿Y la resistencia interna?`,
      pasos: [
        r`$I=\frac{P}{V}=\frac{20}{11{,}6}=1{,}72$ A.`,
        r`**a)** $R=\frac VI=6{,}73\ \Omega$.`,
        r`**b)** $r=\frac{\varepsilon-V}{I}=\frac{3{,}4}{1{,}72}=1{,}97\ \Omega$.`,
      ],
    },
    {
      fuente: 'TP 6, ej. 10',
      enunciado: r`Una varilla de sección cuadrada de $3{,}00$ mm de lado tiene $25{,}0$ cm de un material con $\rho=4{,}00\cdot10^{-3}\ \Omega$m y $40{,}0$ cm de otro con $\rho=6{,}00\cdot10^{-3}\ \Omega$m. ¿Resistencia de punta a punta?`,
      pasos: [
        r`$A=9\cdot10^{-6}$ m². Los dos tramos están en serie.`,
        r`$R_1=\frac{(4\cdot10^{-3})(0{,}25)}{9\cdot10^{-6}}=111\ \Omega$; $R_2=\frac{(6\cdot10^{-3})(0{,}40)}{9\cdot10^{-6}}=267\ \Omega$.`,
      ],
      respuesta: r`$R=378\ \Omega$.`,
    },
    {
      fuente: 'TP 6, ej. 9',
      enunciado: r`Una secadora usa $16{,}0$ A a $240$ V durante $45{,}0$ min. Una computadora usa $2{,}70$ A a $120$ V. Con la energía de la secadora, ¿cuántas horas funciona la computadora?`,
      pasos: [
        r`$E=VIt=240\cdot16\cdot0{,}75$ h $=2880$ W·h.`,
        r`$P_{PC}=120\cdot2{,}7=324$ W; $t=\frac{2880}{324}$`,
      ],
      respuesta: r`$8{,}9$ h.`,
    },
  ],
  preguntas: [
    { id: 'm06-q1', p: 'Un alambre se estira hasta el triple de su longitud sin perder material. Su resistencia:', opciones: ['Se triplica', 'Se multiplica por 9', 'No cambia', 'Se reduce a un tercio'], ok: 1, por: r`El volumen se conserva: la sección baja a $A/3$. $R=\rho\frac{3L}{A/3}=9R_0$.` },
    { id: 'm06-q2', p: 'La velocidad de deriva de los electrones en un cable de cobre con algunos amperes es del orden de:', opciones: ['La velocidad de la luz', '10⁶ m/s', 'Milímetros por segundo', 'Kilómetros por segundo'], ok: 2, por: r`$v_d=\frac{I}{neA}$ con $n\approx10^{29}$ m⁻³ da fracciones de mm/s. Los $10^6$ m/s son la velocidad térmica, que es al azar.` },
    { id: 'm06-q3', p: 'Al aumentar la temperatura de un metal, su resistividad:', opciones: ['Disminuye porque los electrones se mueven más rápido', 'Aumenta porque los choques con la red son más frecuentes', 'No cambia', 'Se anula'], ok: 1, por: r`En el modelo de Drude $\rho=\frac{m}{ne^2\tau}$: más vibración de la red, menor $\tau$.` },
    { id: 'm06-q4', p: 'Dos resistencias R₁ < R₂ en serie con una fuente. ¿Cuál disipa más potencia?', opciones: ['R₁', 'R₂', 'Las dos igual', 'Depende de la fuente'], ok: 1, por: r`En serie la corriente es la misma: $P=I^2R$.` },
    { id: 'm06-q5', p: 'Las mismas dos resistencias R₁ < R₂ ahora en paralelo. ¿Cuál disipa más?', opciones: ['R₁', 'R₂', 'Las dos igual', 'Ninguna'], ok: 0, por: r`En paralelo la tensión es la misma: $P=V^2/R$.` },
    { id: 'm06-q6', p: 'La ley de Ohm (V = IR con R constante):', opciones: ['Vale para cualquier material', 'Vale solo para materiales óhmicos', 'Es una definición de corriente', 'Solo vale en corriente alterna'], ok: 1, por: 'Es una propiedad de ciertos materiales (metales a temperatura constante), no una ley universal.' },
    { id: 'm06-q7', p: 'Una batería real entrega más corriente. Su tensión en bornes:', opciones: ['Aumenta', 'Disminuye', 'No cambia', 'Se iguala a la fem'], ok: 1, por: r`$V=\varepsilon-Ir$: cuanto más corriente, más cae en la resistencia interna.` },
  ],
};

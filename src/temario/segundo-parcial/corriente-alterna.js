const r = String.raw;

export default {
  intro: r`La red eléctrica es alterna: $220$ V eficaces a $50$ Hz en Argentina. En alterna, bobinas y capacitores tienen una "resistencia" que depende de la frecuencia (reactancia) y desfasan la corriente respecto de la tensión. Los **fasores** convierten todo en suma de vectores. Es el TP con más ejercicios en los segundos parciales recientes.`,
  teoria: [
    {
      id: 'eficaces', titulo: 'Valores eficaces',
      texto: r`Una tensión alterna sinusoidal es $v=V_{max}\operatorname{sen}\omega t$, con $\omega=2\pi f$. Su promedio es cero, así que se usa el **valor eficaz** (rms): el valor de continua que disiparía la misma potencia media en una resistencia.

$$V_{ef}=\frac{V_{max}}{\sqrt2},\qquad I_{ef}=\frac{I_{max}}{\sqrt2}$$

Los **instrumentos de alterna miden valores eficaces**: los $220$ V de la red son eficaces, el pico es $311$ V. La potencia media en una resistencia es $P=I_{ef}^2R=\frac{V_{max}I_{max}}{2}$.`,
    },
    {
      id: 'elementos', titulo: 'R, L y C en alterna',
      texto: r`Con una corriente $i=I\operatorname{sen}\omega t$:

- **Resistencia:** $v_R=IR\operatorname{sen}\omega t$. Tensión y corriente **en fase**.
- **Inductor:** $v_L=L\frac{di}{dt}=I\omega L\cos\omega t$. La tensión **adelanta 90°** a la corriente. Su oposición es la **reactancia inductiva** $X_L=\omega L$: crece con la frecuencia (a frecuencia cero, una bobina es un cable).
- **Capacitor:** $v_C=\frac qC=-\frac{I}{\omega C}\cos\omega t$. La tensión **atrasa 90°**. Reactancia capacitiva $X_C=\frac1{\omega C}$: baja con la frecuencia (a frecuencia cero, un capacitor es un corte).

Las reactancias se miden en ohm. Inductor y capacitor ideales **no disipan** potencia media: la toman y la devuelven en cada ciclo.

**Regla para recordar los desfasajes:** "ELI the ICE man": en L la tensión (E) va antes que la corriente (I); en C la corriente va antes que la tensión.`,
    },
    {
      id: 'rlc', titulo: 'RLC serie: impedancia y fasores',
      texto: r`En serie la corriente es la misma en todos los elementos. Cada tensión es un **fasor** (vector que gira con $\omega$): $V_R$ en fase con $I$, $V_L$ a $+90^\circ$, $V_C$ a $-90^\circ$. La tensión de la fuente es la suma **vectorial**, no algebraica:

$$V=\sqrt{V_R^2+(V_L-V_C)^2}=IZ,\qquad Z=\sqrt{R^2+(X_L-X_C)^2},\qquad\operatorname{tg}\varphi=\frac{X_L-X_C}{R}$$

$\varphi$ es lo que la tensión **adelanta** a la corriente:
- $X_L>X_C$: $\varphi>0$, circuito **inductivo**, la corriente atrasa.
- $X_L<X_C$: $\varphi<0$, **capacitivo**, la corriente adelanta.

Las tensiones parciales pueden ser **mayores** que la de la fuente ($V_L$ y $V_C$ se restan entre sí).

**Dos elementos desconocidos:** si la corriente atrasa un ángulo entre $0$ y $90^\circ$, son R y L; si adelanta, R y C. De $Z=\frac VI$: $R=Z\cos\varphi$ y $X=Z\operatorname{sen}\varphi$.`,
    },
    {
      id: 'resonancia', titulo: 'Resonancia y potencia',
      texto: r`La corriente es máxima cuando $X_L=X_C$, es decir a la **frecuencia de resonancia**:

$$\omega_0=\frac1{\sqrt{LC}},\qquad Z=R,\qquad\varphi=0,\qquad I_{max}=\frac VR$$

Así se sintoniza una radio: se ajusta $C$ hasta que la resonancia coincide con la emisora. Si $\frac{X_L}{X_C}=k$, entonces $\frac{\omega}{\omega_0}=\sqrt k$.

**Potencia:** solo la resistencia disipa.

$$P=V_{ef}I_{ef}\cos\varphi=I_{ef}^2R,\qquad\cos\varphi=\frac RZ\ \ (\text{factor de potencia})$$

Potencia reactiva: $Q=I_{ef}^2X$ (var). Potencia aparente: $S=V_{ef}I_{ef}$ (VA), con $S^2=P^2+Q^2$.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 14, ej. 1 y 2',
      enunciado: r`a) $v=60\operatorname{sen}120\pi t$ (V) sobre $20\ \Omega$: ¿qué marca un amperímetro de CA? b) ¿Corriente máxima en un capacitor de $2{,}20\ \mu$F en $220$ V eficaces y $50$ Hz?`,
      pasos: [
        r`**a)** $I_{max}=\frac{60}{20}=3$ A; el amperímetro marca $I_{ef}=\frac{3}{\sqrt2}=2{,}12$ A.`,
        r`**b)** $X_C=\frac{1}{2\pi\cdot50\cdot2{,}2\cdot10^{-6}}=1447\ \Omega$; $I_{max}=\frac{220\sqrt2}{1447}=215$ mA.`,
      ],
    },
    {
      fuente: 'TP 14, ej. 5',
      enunciado: r`Un circuito con dos elementos desconocidos, conectado a $120$ V y $60$ Hz, toma $5{,}60$ A con un atraso de $65{,}0^\circ$ respecto del voltaje. ¿Qué elementos son y cuánto valen?`,
      pasos: [
        r`La corriente **atrasa** un ángulo menor que 90°: resistencia e **inductor**.`,
        r`$Z=\frac{120}{5{,}6}=21{,}4\ \Omega$; $R=Z\cos65^\circ=9{,}06\ \Omega$; $X_L=Z\operatorname{sen}65^\circ=19{,}4\ \Omega$.`,
        r`$L=\frac{X_L}{2\pi\cdot60}=51{,}5$ mH.`,
      ],
      respuesta: r`R y L: $9{,}1\ \Omega$ y $52$ mH.`,
      lab: 'fasores',
    },
    {
      fuente: 'TP 14, ej. 7',
      enunciado: r`$R=200\ \Omega$ y $L=0{,}400$ H en serie con una fuente de $30{,}0$ V de amplitud y $\omega=250$ rad/s. a) Impedancia. b) Amplitud de corriente. c) Amplitudes en R y en L. d) Ángulo de fase.`,
      pasos: [
        r`$X_L=\omega L=100\ \Omega$. **a)** $Z=\sqrt{200^2+100^2}=224\ \Omega$.`,
        r`**b)** $I=\frac{30}{224}=0{,}134$ A. **c)** $V_R=26{,}8$ V, $V_L=13{,}4$ V (suman más de 30 V: se suman como vectores).`,
        r`**d)** $\varphi=\operatorname{arctg}\frac{100}{200}=+26{,}6^\circ$: la tensión adelanta.`,
      ],
      lab: 'fasores',
    },
    {
      fuente: 'TP 14, ej. 8',
      enunciado: r`En un RLC serie con $60$ Hz se miden $V_R=60{,}0$ V, $V_L=100$ V y $V_C=160$ V. ¿Tensión total y ángulo de fase?`,
      pasos: [
        r`$V=\sqrt{60^2+(100-160)^2}=84{,}9$ V.`,
        r`$\operatorname{tg}\varphi=\frac{100-160}{60}=-1\Rightarrow\varphi=-45^\circ$ (capacitivo).`,
      ],
    },
    {
      fuente: 'TP 14, ej. 10',
      enunciado: r`$L=0{,}120$ H, $R=240\ \Omega$ y $C=7{,}30\ \mu$F en serie llevan $0{,}450$ A eficaces a $400$ Hz. a) Ángulo de fase y factor de potencia. b) Z. c) Tensión eficaz de la fuente. d) Potencia media. e) Potencia en C y en L. f) Frecuencia de resonancia.`,
      pasos: [
        r`$X_L=2\pi\cdot400\cdot0{,}12=302\ \Omega$; $X_C=\frac{1}{2\pi\cdot400\cdot7{,}3\cdot10^{-6}}=54{,}5\ \Omega$.`,
        r`**a)** $\operatorname{tg}\varphi=\frac{247{,}1}{240}\Rightarrow\varphi=45{,}8^\circ$; $\cos\varphi=0{,}697$.`,
        r`**b)** $Z=\sqrt{240^2+247{,}1^2}=344\ \Omega$. **c)** $V=0{,}45\cdot344=155$ V.`,
        r`**d)** $P=I^2R=0{,}45^2\cdot240=48{,}6$ W. **e)** Cero en ambos.`,
        r`**f)** $f_0=\frac{1}{2\pi\sqrt{LC}}=170$ Hz.`,
      ],
      lab: 'fasores',
    },
    {
      fuente: '2.º parcial 11-11-2026, ej. 2',
      enunciado: r`En un RLC serie $I_{max}=9{,}00$ A y $V_{max}=180$ V, y la corriente adelanta $37{,}0^\circ$. a) Resistencia. b) $X_L-X_C$.`,
      pasos: [
        r`$Z=20\ \Omega$. **a)** $R=Z\cos37^\circ=16{,}0\ \Omega$.`,
        r`**b)** La corriente adelanta: capacitivo, $X_L-X_C=-Z\operatorname{sen}37^\circ=-12{,}0\ \Omega$.`,
      ],
    },
  ],
  preguntas: [
    { id: 'm14-q1', p: 'En un inductor ideal en alterna, la tensión respecto de la corriente:', opciones: ['Está en fase', 'Adelanta 90°', 'Atrasa 90°', 'Adelanta 180°'], ok: 1, por: r`$v_L=L\frac{di}{dt}$: la derivada del seno es el coseno, adelantado 90°.` },
    { id: 'm14-q2', p: 'Si se duplica la frecuencia, la reactancia capacitiva:', opciones: ['Se duplica', 'Se reduce a la mitad', 'No cambia', 'Se cuadruplica'], ok: 1, por: r`$X_C=\frac{1}{\omega C}$.` },
    { id: 'm14-q3', p: 'En resonancia de un RLC serie:', opciones: ['La impedancia es máxima y la corriente, mínima', 'La impedancia es igual a R y la corriente está en fase con la tensión', 'La corriente es cero porque L y C se compensan', 'Las tensiones en la bobina y en el capacitor son nulas'], ok: 1, por: r`$X_L=X_C$: los fasores de L y C se cancelan, pero cada uno puede ser grande.` },
    { id: 'm14-q4', p: 'Un voltímetro de alterna conectado a una fuente de 100 V pico marca:', opciones: ['100 V', '141 V', '70,7 V', '50 V'], ok: 2, por: r`Mide el eficaz: $\frac{100}{\sqrt2}$.` },
    { id: 'm14-q5', p: 'En un RLC serie la potencia media la disipa:', opciones: ['Solo la resistencia', 'La bobina', 'El capacitor', 'Los tres por igual'], ok: 0, por: 'L y C ideales almacenan y devuelven energía en cada ciclo.' },
    { id: 'm14-q6', p: 'Un circuito tiene corriente adelantada respecto de la tensión. Es:', opciones: ['Inductivo', 'Capacitivo', 'Resistivo puro', 'Está en resonancia'], ok: 1, por: 'En un capacitor la corriente va antes que la tensión.' },
    { id: 'm14-q7', p: r`En un RLC serie la razón $X_L/X_C$ es 5,36 y la resonancia es a 225 Hz. La frecuencia del generador es:`, opciones: ['1206 Hz', '521 Hz', '42 Hz', '97 Hz'], ok: 1, por: r`$\frac{X_L}{X_C}=\omega^2LC=\left(\frac{\omega}{\omega_0}\right)^2$: $f=225\sqrt{5{,}36}$.` },
  ],
};

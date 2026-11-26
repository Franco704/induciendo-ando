const r = String.raw;

export default {
  intro: r`Un capacitor en un circuito no se carga al instante: la resistencia limita la corriente y todo evoluciona en forma **exponencial**, con una escala de tiempo $\tau=RC$. La deducción de las ecuaciones de carga es pregunta de teoría de final (vale 3 puntos en el cuestionario reciente).`,
  teoria: [
    {
      id: 'carga', titulo: 'Carga de un capacitor',
      texto: r`Al cerrar el interruptor en un circuito con fem $\varepsilon$, resistencia $R$ y capacitor $C$ descargado, la regla de las mallas da

$$\varepsilon-iR-\frac qC=0,\qquad i=\frac{dq}{dt}$$

Es una ecuación diferencial de variables separables:

$$\frac{dq}{C\varepsilon-q}=\frac{dt}{RC}\ \Rightarrow\ \int_0^q\frac{dq'}{C\varepsilon-q'}=\int_0^t\frac{dt'}{RC}\ \Rightarrow\ \ln\frac{C\varepsilon}{C\varepsilon-q}=\frac{t}{RC}$$

$$q(t)=C\varepsilon\left(1-e^{-t/RC}\right),\qquad i(t)=\frac{\varepsilon}{R}e^{-t/RC}$$

$$v_C=\varepsilon\left(1-e^{-t/RC}\right),\qquad v_R=\varepsilon\,e^{-t/RC}$$

- En $t=0$ el capacitor se comporta como un **cable** (tensión nula, corriente máxima $\varepsilon/R$).
- Para $t\to\infty$ se comporta como un **corte** (corriente nula, tensión $\varepsilon$).
- En todo instante $v_R+v_C=\varepsilon$.`,
    },
    {
      id: 'tau', titulo: 'Constante de tiempo',
      texto: r`$\tau=RC$ se mide en **segundos** ($\Omega\cdot\text F=\frac{\text V}{\text A}\cdot\frac{\text C}{\text V}=\text s$).

- En $t=\tau$ la carga llegó al $1-e^{-1}=63{,}2\,\%$ del máximo y la corriente cayó al $36{,}8\,\%$.
- En $2\tau$: $86{,}5\,\%$; en $3\tau$: $95\,\%$; en $5\tau$: $99{,}3\,\%$. En la práctica se dice que a las $5\tau$ está cargado.
- Una resistencia o un capacitor más grandes hacen el proceso más **lento**.

Para despejar tiempos se toma logaritmo: si la carga debe llegar a una fracción $f$ del máximo, $t=-\tau\ln(1-f)$.`,
    },
    {
      id: 'descarga', titulo: 'Descarga y energía',
      texto: r`Si un capacitor con carga $Q_0$ se conecta a una resistencia (sin fuente): $iR+\frac qC=0$, y

$$q(t)=Q_0e^{-t/RC},\qquad i(t)=-\frac{Q_0}{RC}e^{-t/RC}$$

El signo menos indica que la corriente sale de la placa positiva (la carga disminuye). La corriente máxima, al conectar, es $\frac{Q_0}{RC}=\frac{V_0}{R}$.

**Energía.** La energía guardada es $U=\frac{q^2}{2C}$: como $q\propto e^{-t/\tau}$, la energía cae como $e^{-2t/\tau}$ (el doble de rápido). Para que quede la mitad de la energía, $q=\frac{Q_0}{\sqrt2}$.

**Balance de la carga:** la fuente entrega $Q\varepsilon=C\varepsilon^2$; el capacitor se queda con $\frac12C\varepsilon^2$ y la **otra mitad se disipa en la resistencia**, cualquiera sea su valor.

**Régimen estacionario** en circuitos con capacitores: por los capacitores no circula corriente; se resuelve el circuito sacándolos, y la tensión de cada capacitor es la que queda entre sus bornes.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 8, ej. 1',
      enunciado: r`Un capacitor de $2{,}00$ nF con carga inicial de $5{,}10\ \mu$C se descarga a través de $1{,}30$ kΩ. a) ¿Corriente a los $9{,}00\ \mu$s? b) ¿Carga a los $8{,}00\ \mu$s? c) ¿Corriente máxima?`,
      pasos: [
        r`$\tau=RC=(1300)(2\cdot10^{-9})=2{,}60\ \mu$s.`,
        r`**c)** $I_{max}=\frac{Q_0}{\tau}=\frac{5{,}1\cdot10^{-6}}{2{,}6\cdot10^{-6}}=1{,}96$ A.`,
        r`**a)** $i=-1{,}96\,e^{-9/2{,}6}=-61{,}6$ mA.`,
        r`**b)** $q=5{,}10\,e^{-8/2{,}6}=0{,}235\ \mu$C.`,
      ],
      lab: 'rc',
    },
    {
      fuente: 'TP 8, ej. 2',
      enunciado: r`Un marcapasos envía 81 pulsos por minuto. El capacitor se descarga a través de $1{,}80\cdot10^6\ \Omega$ y se envía un pulso cada vez que pierde el $63{,}2\,\%$ de su carga. ¿Cuál es la capacidad?`,
      pasos: [
        r`Perder el $63{,}2\,\%$ es quedar con $e^{-1}$: ocurre en $t=\tau$.`,
        r`$\tau=\frac{60}{81}=0{,}741$ s; $C=\frac{\tau}{R}=\frac{0{,}741}{1{,}8\cdot10^6}$`,
      ],
      respuesta: r`$C=4{,}12\cdot10^{-7}$ F.`,
    },
    {
      fuente: 'TP 8, ej. 3',
      enunciado: r`$C=1{,}50\cdot10^{-5}$ F, $R=980\ \Omega$, $\varepsilon=18{,}0$ V. Se carga durante $10{,}0$ ms y luego se descarga. a) Carga al cambiar el interruptor. b) Tensiones en R y C en ese instante. c) Justo después de pasar a descarga. d) Carga $10{,}0$ ms después.`,
      pasos: [
        r`$\tau=14{,}7$ ms. **a)** $q=C\varepsilon(1-e^{-10/14{,}7})=270\,\mu\text C\cdot0{,}494=133\ \mu$C.`,
        r`**b)** $v_C=\frac qC=8{,}87$ V; $v_R=18-8{,}87=9{,}13$ V.`,
        r`**c)** Sin fuente, la resistencia queda en paralelo con el capacitor: ambos con $8{,}87$ V.`,
        r`**d)** $q=133\,e^{-10/14{,}7}=67{,}4\ \mu$C.`,
      ],
      lab: 'rc',
    },
    {
      fuente: 'TP 8, ej. 6',
      enunciado: r`$R=850\ \Omega$ se conecta a un capacitor de $4{,}62\ \mu$F con $8{,}10$ mC. a) Energía inicial. b) Potencia en R justo después de conectar. c) Potencia en R cuando la energía bajó a la mitad.`,
      pasos: [
        r`**a)** $U=\frac{Q^2}{2C}=\frac{(8{,}1\cdot10^{-3})^2}{2\cdot4{,}62\cdot10^{-6}}=7{,}10$ J.`,
        r`**b)** $V_0=\frac QC=1753$ V; $P=\frac{V_0^2}{R}=3616$ W.`,
        r`**c)** Mitad de energía: $V=\frac{V_0}{\sqrt2}$, así que $P=\frac{V^2}{R}=\frac{3616}{2}=1808$ W.`,
      ],
    },
    {
      fuente: 'TP 8, ej. 9',
      enunciado: r`RC serie con $C=1{,}00\ \mu$F, $R=2{,}00\cdot10^6\ \Omega$ y $\varepsilon=10{,}0$ V. A los $10{,}0$ s de cerrar: a) carga, b) corriente, c) rapidez con que se almacena energía en C, d) potencia de la batería.`,
      pasos: [
        r`$\tau=2$ s, $e^{-5}=6{,}74\cdot10^{-3}$.`,
        r`**a)** $q=10\ \mu\text C(1-e^{-5})=9{,}93\ \mu$C. **b)** $i=5\ \mu\text A\cdot e^{-5}=33{,}7$ nA.`,
        r`**c)** $\frac{dU}{dt}=\frac qCi=9{,}93\cdot33{,}7\cdot10^{-9}=334$ nW. **d)** $P=\varepsilon i=337$ nW.`,
        r`La diferencia ($3$ nW) es lo que disipa la resistencia: $i^2R$.`,
      ],
    },
    {
      fuente: 'Final del 23-09-2010, ej. 3',
      enunciado: r`$E=40$ V alimenta $R_1=30\ \Omega$ en serie con $R_2=50\ \Omega$, y en paralelo $R_3=15\ \Omega$ en serie con $R_4=25\ \Omega$. Un capacitor de $20\ \mu$F está en paralelo con $R_4$. En régimen estacionario: corrientes y carga.`,
      pasos: [
        r`En estacionario no pasa corriente por el capacitor.`,
        r`$I_{12}=\frac{40}{80}=0{,}5$ A; $I_{34}=\frac{40}{40}=1$ A.`,
        r`$V_C=V_{R4}=25$ V; $q=20\cdot25=500\ \mu$C.`,
      ],
    },
  ],
  preguntas: [
    { id: 'm08-q1', p: 'Justo después de cerrar el interruptor en un RC con el capacitor descargado:', opciones: ['La corriente es cero', 'La corriente es ε/R', 'La tensión del capacitor es ε', 'La carga es máxima'], ok: 1, por: 'La tensión del capacitor no puede saltar: arranca en cero y toda la fem cae en R.' },
    { id: 'm08-q2', p: 'En un RC, en t = τ el capacitor alcanzó:', opciones: ['El 50 % de su carga final', 'El 63,2 % de su carga final', 'El 36,8 % de su carga final', 'El 99 % de su carga final'], ok: 1, por: r`$1-e^{-1}=0{,}632$. El $36{,}8\,\%$ es lo que **queda** de corriente.` },
    { id: 'm08-q3', p: 'La unidad de τ = RC es:', opciones: ['Ω·F (no simplifica)', 'Segundos', 'Hertz', 'Coulombs'], ok: 1, por: r`$\Omega\cdot\text F=\frac{\text V}{\text A}\cdot\frac{\text C}{\text V}=\frac{\text C}{\text A}=\text s$.` },
    { id: 'm08-q4', p: 'Mientras se carga un capacitor desde cero, la energía que entrega la fuente es:', opciones: ['Igual a la almacenada', 'El doble de la almacenada', 'La mitad de la almacenada', 'Depende de R'], ok: 1, por: r`La fuente entrega $C\varepsilon^2$, el capacitor guarda $\frac12C\varepsilon^2$ y R disipa el resto, valga lo que valga R.` },
    { id: 'm08-q5', p: 'Si se duplica la resistencia de un RC, el tiempo de carga:', opciones: ['Se reduce a la mitad', 'Se duplica', 'No cambia', 'Se cuadruplica'], ok: 1, por: r`$\tau=RC$ es proporcional a R.` },
    { id: 'm08-q6', p: 'En régimen estacionario de corriente continua, un capacitor se comporta como:', opciones: ['Un cortocircuito', 'Un circuito abierto', 'Una resistencia R', 'Una fuente ideal'], ok: 1, por: 'Cargado, no circula corriente por él; su tensión la fija el resto del circuito.' },
    { id: 'm08-q7', p: 'Durante la descarga, la energía del capacitor cae a la mitad cuando:', opciones: ['t = τ', 't = τ·ln2', 't = (τ/2)·ln2', 't = 2τ'], ok: 2, por: r`$U\propto e^{-2t/\tau}$: $e^{-2t/\tau}=\frac12\Rightarrow t=\frac\tau2\ln2$.` },
  ],
};

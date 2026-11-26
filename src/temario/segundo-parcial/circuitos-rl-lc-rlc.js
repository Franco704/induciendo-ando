const r = String.raw;

export default {
  intro: r`Con bobinas en los circuitos aparecen dos comportamientos nuevos: el **transitorio RL**, que es el "espejo" del RC, y las **oscilaciones** LC, en las que la energía va y viene entre capacitor y bobina como en un resorte. Los ejercicios de RL (hallar L a partir del tiempo en llegar a una fracción de la corriente final) salen en casi todos los parciales y finales.`,
  teoria: [
    {
      id: 'rl', titulo: 'Circuito RL',
      texto: r`Al cerrar el interruptor en un circuito con fem $\varepsilon$, resistencia $R$ e inductancia $L$:

$$\varepsilon-iR-L\frac{di}{dt}=0\ \Rightarrow\ i(t)=\frac\varepsilon R\left(1-e^{-t/\tau}\right),\qquad\tau=\frac LR$$

La corriente **no salta**: arranca en cero (la bobina actúa como un corte) y tiende a $\frac\varepsilon R$ (la bobina ideal termina actuando como un cable). La tensión en la bobina es $v_L=\varepsilon e^{-t/\tau}$.

Al abrir (con un camino para la corriente), cae: $i=I_0e^{-t/\tau}$.

**Hallar L a partir de un dato de tiempo:** si en $t_1$ la corriente llega a la fracción $f$ del valor final, $1-e^{-t_1/\tau}=f$:

$$\tau=\frac{t_1}{-\ln(1-f)},\qquad L=\tau R$$

- Mitad: $\tau\ln2$. Un tercio: $\tau\ln\frac32$. $75\,\%$: $\tau\ln4$. $5\,\%$ de diferencia: $3\tau$; $1\,\%$: $4{,}6\tau$; $0{,}1\,\%$: $6{,}9\tau$.
- La **energía** $\frac12Li^2$ llega a la mitad de su máximo cuando $i=\frac{I}{\sqrt2}$, más tarde que la corriente a la mitad.
- $R$ es la resistencia **total** de la malla (incluida la de la bobina).`,
    },
    {
      id: 'lc', titulo: 'Oscilaciones LC',
      texto: r`Un capacitor cargado con $Q$ se conecta a una bobina ideal: $L\frac{di}{dt}+\frac qC=0$ con $i=\frac{dq}{dt}$, es decir

$$\frac{d^2q}{dt^2}+\frac{1}{LC}q=0\ \Rightarrow\ q(t)=Q\cos(\omega t+\phi),\qquad\omega=\frac1{\sqrt{LC}}$$

Es la misma ecuación que un resorte: $L$ hace de masa (inercia) y $\frac1C$ de constante elástica. La energía total se conserva y pasa de un lado al otro:

$$\frac{q^2}{2C}+\frac12Li^2=\frac{Q^2}{2C}=\frac12LI_{max}^2\ \Rightarrow\ I_{max}=\omega Q$$

- Cuando el capacitor está descargado, la corriente es máxima.
- La energía se reparte por mitades cuando $q=\frac{Q}{\sqrt2}$, a $\frac T8$ del inicio.
- Se usa para **sintonizar** radios: con $C$ variable se elige la frecuencia $f=\frac1{2\pi\sqrt{LC}}$.`,
    },
    {
      id: 'rlc', titulo: 'Circuito RLC: oscilaciones amortiguadas',
      texto: r`Con resistencia, parte de la energía se disipa en cada ciclo:

$$L\frac{d^2q}{dt^2}+R\frac{dq}{dt}+\frac qC=0$$

Si $R<2\sqrt{\frac LC}$ (**subamortiguado**):

$$q(t)=Qe^{-Rt/2L}\cos(\omega't),\qquad\omega'=\sqrt{\frac1{LC}-\frac{R^2}{4L^2}}$$

La amplitud decae con $e^{-Rt/2L}$; la energía, con $e^{-Rt/L}$ (el doble de rápido). Con amortiguamiento débil, la amplitud de la corriente cae a la mitad en $t=\frac{2L}{R}\ln2=0{,}693\frac{2L}{R}$, y la energía a la mitad en $0{,}347\frac{2L}{R}$.

Si $R=2\sqrt{\frac LC}$: **amortiguamiento crítico**, vuelve a cero lo más rápido posible sin oscilar. Si $R$ es mayor: **sobreamortiguado**, vuelve más lento y sin oscilar.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 13, ej. 1',
      enunciado: r`Una resistencia de $15{,}0\ \Omega$ y una bobina están en serie con $6{,}30$ V. $2{,}00$ ms después de abrir el interruptor (con un camino para la corriente), la corriente bajó a $0{,}210$ A. a) L. b) τ. c) ¿Después de cuántas τ la corriente está a menos del $5\,\%$, $1\,\%$ y $0{,}1\,\%$ del máximo al cerrar?`,
      pasos: [
        r`$I_0=\frac{6{,}3}{15}=0{,}420$ A; $0{,}210$ es la mitad: $2$ ms $=\tau\ln2$.`,
        r`**b)** $\tau=\frac{2}{0{,}693}=2{,}88$ ms. **a)** $L=\tau R=43{,}3$ mH.`,
        r`**c)** $e^{-t/\tau}=0{,}05\Rightarrow t=3{,}0\tau$; $0{,}01\Rightarrow4{,}6\tau$; $0{,}001\Rightarrow6{,}9\tau$.`,
      ],
      lab: 'rl',
    },
    {
      fuente: 'TP 13, ej. 3',
      enunciado: r`$35{,}0$ V, $50{,}0\ \Omega$ y $1{,}25$ mH en serie. a) ¿Cuándo llega la corriente a la mitad de su máximo? b) ¿Cuándo llega la energía a la mitad de la máxima?`,
      pasos: [
        r`$\tau=\frac{1{,}25\cdot10^{-3}}{50}=25\ \mu$s.`,
        r`**a)** $t=\tau\ln2=17{,}3\ \mu$s.`,
        r`**b)** $U=\frac12Li^2$ es la mitad si $i=\frac{I}{\sqrt2}$: $1-e^{-t/\tau}=0{,}707\Rightarrow t=\tau\ln\frac{1}{0{,}293}=30{,}7\ \mu$s.`,
      ],
      lab: 'rl',
    },
    {
      fuente: 'Final del 2-03-2022, ej. 8',
      enunciado: r`Una bobina de resistencia $5\ \Omega$ en serie con $15\ \Omega$ y una fuente ideal. A los $8{,}5$ ms de cerrar, la corriente llega al $75\,\%$ de su valor final. ¿L?`,
      pasos: [r`$\tau=\frac{8{,}5}{\ln4}=6{,}13$ ms; $R_{total}=20\ \Omega$; $L=\tau R$.`],
      respuesta: r`$0{,}123$ H.`,
      lab: 'rl',
    },
    {
      fuente: 'TP 13, ej. 5',
      enunciado: r`Un capacitor de $7{,}50$ nF cargado a $12{,}0$ V se conecta a una bobina; el período es $8{,}60\cdot10^{-5}$ s. Calcule a) L, b) carga máxima, c) energía total, d) corriente máxima.`,
      pasos: [
        r`**a)** $T=2\pi\sqrt{LC}\Rightarrow L=\frac{T^2}{4\pi^2C}=25{,}0$ mH.`,
        r`**b)** $Q=CV=9{,}00\cdot10^{-8}$ C. **c)** $U=\frac12CV^2=5{,}40\cdot10^{-7}$ J.`,
        r`**d)** $I_{max}=\omega Q=\frac{2\pi}{T}Q=6{,}58$ mA.`,
      ],
      lab: 'rlc-libre',
    },
    {
      fuente: 'TP 13, ej. 7',
      enunciado: r`Un capacitor de $425$ pF cargado a $135$ V se conecta a un inductor de $175$ mH. a) Frecuencia. b) Corriente pico. c) Energía máxima en la bobina.`,
      pasos: [
        r`**a)** $f=\frac{1}{2\pi\sqrt{LC}}=\frac{1}{2\pi\sqrt{0{,}175\cdot425\cdot10^{-12}}}=18{,}5$ kHz.`,
        r`**b)** $I=\omega Q=(2\pi\cdot18\,500)(425\cdot10^{-12}\cdot135)=6{,}65$ mA.`,
        r`**c)** $U=\frac12CV^2=3{,}87\ \mu$J.`,
      ],
    },
    {
      fuente: 'TP 13, ej. 10',
      enunciado: r`$C=15{,}0$ nF, $L=22{,}0$ mH y $R=75{,}0\ \Omega$. a) Frecuencia de oscilación. b) Tiempo hasta que la amplitud baja al $10\,\%$. c) R para amortiguamiento crítico.`,
      pasos: [
        r`**a)** $\omega'\approx\frac1{\sqrt{LC}}=5{,}5\cdot10^4$ rad/s (la corrección por R es mínima).`,
        r`**b)** $e^{-Rt/2L}=0{,}1\Rightarrow t=\frac{2L}{R}\ln10=1{,}35$ ms.`,
        r`**c)** $R=2\sqrt{\frac LC}=2\sqrt{\frac{0{,}022}{15\cdot10^{-9}}}=2{,}42$ kΩ.`,
      ],
      lab: 'rlc-libre',
    },
  ],
  preguntas: [
    { id: 'm13-q1', p: 'Justo después de cerrar el interruptor en un RL serie:', opciones: ['La corriente es ε/R porque la bobina es un cable', 'La corriente es cero y toda la fem está en la bobina', 'La tensión en R es ε y en la bobina es cero', 'La bobina no tiene tensión'], ok: 1, por: 'La bobina se opone al cambio brusco de corriente.' },
    { id: 'm13-q2', p: 'La constante de tiempo de un RL es:', opciones: ['RL', 'L/R', 'R/L', '√(LC)'], ok: 1, por: r`$[L/R]=\frac{\text{V·s/A}}{\text{V/A}}=\text s$.` },
    { id: 'm13-q3', p: 'En un circuito LC ideal, cuando la carga del capacitor es cero:', opciones: ['La corriente es cero', 'La corriente es máxima', 'La energía total es cero', 'La bobina tiene tensión máxima'], ok: 1, por: 'Toda la energía está en la bobina: ½LI² máxima.' },
    { id: 'm13-q4', p: 'Si se cuadruplica la capacidad en un LC, la frecuencia:', opciones: ['Se cuadruplica', 'Se duplica', 'Se reduce a la mitad', 'No cambia'], ok: 2, por: r`$\omega=\frac1{\sqrt{LC}}$.` },
    { id: 'm13-q5', p: 'Un RLC deja de oscilar cuando:', opciones: ['R = 0', 'R ≥ 2√(L/C)', 'L = C', 'R = √(LC)'], ok: 1, por: 'Por encima del valor crítico el sistema vuelve al equilibrio sin oscilar.' },
    { id: 'm13-q6', p: 'Un RL alcanza el tercio de su corriente final en 0,3 s. Con R = 50 Ω, L vale:', opciones: ['15 H', '37 H', '27 H', '0,74 H'], ok: 1, por: r`$\tau=\frac{0{,}3}{\ln1{,}5}=0{,}740$ s y $L=\tau R$. Se tomó en tres parciales distintos.` },
  ],
};

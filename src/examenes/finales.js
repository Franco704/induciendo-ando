// Finales de Física II (UTN-FRT) transcriptos de las fotos de la carpeta "Finales" y resueltos.
// tema = módulo donde se estudia; tipo = teoria | practica | opcion.
const r = String.raw;

export const FINALES = [
  {
    id: 'f-2026-11-25', fecha: '25 de noviembre de 2026',
    nota: 'El formato actual: tres bloques (electricidad, termodinámica y electromagnetismo), cada uno con un tema de teoría y una aplicación.',
    items: [
      {
        n: '1a', tema: 'm04', tipo: 'teoria',
        enunciado: r`**Electricidad.** Campo eléctrico. Potencial eléctrico. Definición y unidades.`,
        resolucion: r`**Campo eléctrico.** Es la fuerza por unidad de carga que sentiría una carga de prueba $q_0$ positiva (y tan chica que no altere a las demás) colocada en el punto:

$$\vec E=\frac{\vec F}{q_0}\qquad[\vec E]=\frac{\text N}{\text C}=\frac{\text V}{\text m}$$

Para una carga puntual $\vec E=k\frac{q}{r^2}\hat r$, y para varias se suman vectorialmente (superposición). Las líneas de campo salen de las cargas positivas y llegan a las negativas; su densidad indica la intensidad.

**Potencial eléctrico.** Es la energía potencial por unidad de carga, o el trabajo por unidad de carga que hace un agente externo para traer $q_0$ lentamente desde el infinito hasta el punto:

$$V=\frac{U}{q_0}\qquad V_b-V_a=-\int_a^b\vec E\cdot d\vec l\qquad[V]=\frac{\text J}{\text C}=\text V\ (\text{volt})$$

Para una carga puntual $V=k\frac{q}{r}$ (es un escalar: se suma sin componentes). La relación inversa es $\vec E=-\nabla V$: el campo apunta hacia donde el potencial **baja** más rápido y es perpendicular a las superficies equipotenciales.`,
      },
      {
        n: '1b', tema: 'm02', tipo: 'practica', lab: 'lineas-de-campo',
        enunciado: r`Una pequeña esfera de masa $0{,}100$ g y carga $0{,}100\ \mu$C está sujeta al extremo de un hilo de $10{,}0$ cm. El otro extremo está atado a una placa metálica vertical cargada que genera un campo eléctrico uniforme de $5000$ N/C. ¿Qué ángulo forma el hilo con la vertical?`,
        resolucion: r`Sobre la esfera actúan el peso $mg$ (abajo), la fuerza eléctrica $qE$ (horizontal, perpendicular a la placa) y la tensión $T$ del hilo. En equilibrio:

$$T\cos\theta=mg,\qquad T\operatorname{sen}\theta=qE\ \Rightarrow\ \operatorname{tg}\theta=\frac{qE}{mg}$$

$$\operatorname{tg}\theta=\frac{(1{,}00\cdot10^{-7})(5000)}{(1{,}00\cdot10^{-4})(9{,}8)}=\frac{5{,}0\cdot10^{-4}}{9{,}8\cdot10^{-4}}=0{,}510\ \Rightarrow\ \theta\approx27{,}0^\circ$$

El largo del hilo no interviene: solo fija dónde queda la esfera.`,
      },
      {
        n: '2a', tema: 'm19', tipo: 'teoria',
        enunciado: r`**Termodinámica.** Formas de propagación del calor. Desarrolle dos de ellas.`,
        resolucion: r`El calor se propaga por **conducción**, **convección** y **radiación**.

**Conducción.** Transferencia de energía por choques entre partículas vecinas (y, en metales, por electrones libres), sin movimiento macroscópico de materia. Ley de Fourier para una barra o pared de área $A$ y espesor $L$:

$$H=\frac{dQ}{dt}=-kA\frac{dT}{dx}=kA\frac{T_c-T_f}{L}\qquad[H]=\text W,\ [k]=\frac{\text W}{\text m\cdot\text K}$$

**Convección.** Transferencia por movimiento del propio fluido: el fluido caliente es menos denso, sube y es reemplazado por fluido frío (natural) o lo mueve un ventilador o una bomba (forzada). Se modela con $H=hA\,\Delta T$, donde $h$ depende del fluido y de la geometría.

**Radiación.** Emisión de ondas electromagnéticas (no necesita medio: así llega el calor del Sol). Ley de Stefan-Boltzmann:

$$H=e\sigma AT^4,\qquad H_{neta}=e\sigma A\left(T^4-T_{amb}^4\right),\quad\sigma=5{,}67\cdot10^{-8}\ \frac{\text W}{\text m^2\text K^4}$$

con $T$ en kelvin y $0\le e\le1$ la emisividad.`,
      },
      {
        n: '2b', tema: 'm19', tipo: 'practica', lab: 'calorimetria',
        enunciado: r`Se tienen $600$ g de agua a $15\,^\circ$C y $1$ atm en un calorímetro adiabático. a) ¿Cuál es el estado final si se añaden $50$ g de hielo a $-18\,^\circ$C? b) ¿Qué masa de hielo a $-18\,^\circ$C debe añadirse a los $600$ g de agua a $15\,^\circ$C para que el estado final de la mezcla sea hielo a $0\,^\circ$C? Datos: $c_{hielo}=0{,}50$ cal/g°C, $L_f=80$ cal/g, $c_{agua}=1{,}0$ cal/g°C. Desprecie el calorímetro.`,
        resolucion: r`**a)** Primero se compara qué hace falta para fundir todo el hielo con lo que puede ceder el agua al llegar a $0\,^\circ$C:

- Calentar el hielo hasta $0\,^\circ$C: $50\cdot0{,}5\cdot18=450$ cal.
- Fundirlo: $50\cdot80=4000$ cal. Total: $4450$ cal.
- El agua, al enfriarse hasta $0\,^\circ$C, cede $600\cdot1\cdot15=9000$ cal.

Como $9000>4450$, todo el hielo se funde y la temperatura final queda por encima de $0\,^\circ$C:

$$600(15-T)=450+4000+50\,T\ \Rightarrow\ 650\,T=4550\ \Rightarrow\ T=7{,}0\,^\circ\text C$$

Estado final: $650$ g de agua líquida a $7{,}0\,^\circ$C.

**b)** Para que al final todo sea hielo a $0\,^\circ$C, el agua debe enfriarse hasta $0\,^\circ$C **y congelarse**: cede $600\cdot15+600\cdot80=57\,000$ cal. Todo eso lo absorbe el hielo agregado al calentarse de $-18$ a $0\,^\circ$C:

$$m\cdot0{,}5\cdot18=57\,000\ \Rightarrow\ m\approx6{,}33\ \text{kg}$$

> Si la consigna se leyera como "que el estado final quede a $0\,^\circ$C" (agua y hielo coexistiendo), alcanza con que el hielo absorba los $9000$ cal sin fundirse: $9m=9000$, $m=1000$ g como mínimo.`,
      },
      {
        n: '3a', tema: 'm09', tipo: 'teoria', lab: 'carga-en-campo-b',
        enunciado: r`**Electromagnetismo.** Fuerzas sobre partículas cargadas en presencia de un campo magnético uniforme. Trayectorias posibles.`,
        resolucion: r`Sobre una carga $q$ con velocidad $\vec v$ en un campo $\vec B$ actúa la **fuerza de Lorentz** magnética:

$$\vec F=q\,\vec v\times\vec B,\qquad |\vec F|=|q|vB\operatorname{sen}\theta$$

Es perpendicular a $\vec v$ y a $\vec B$, así que **no hace trabajo**: cambia la dirección de la velocidad, nunca su módulo (la energía cinética se conserva).

Trayectorias en un campo uniforme:
- **$\vec v\parallel\vec B$:** $F=0$, movimiento rectilíneo uniforme.
- **$\vec v\perp\vec B$:** la fuerza es centrípeta y la carga describe una **circunferencia**: $|q|vB=\frac{mv^2}{r}\Rightarrow r=\frac{mv}{|q|B}$, con período $T=\frac{2\pi m}{|q|B}$ que no depende de la velocidad (principio del ciclotrón).
- **Ángulo cualquiera:** la componente paralela se mantiene y la perpendicular gira: la trayectoria es una **hélice** de radio $\frac{mv_\perp}{|q|B}$ y paso $v_\parallel T$.

Si además hay un campo eléctrico, $\vec F=q(\vec E+\vec v\times\vec B)$; con $E=vB$ cruzados la carga no se desvía (selector de velocidades).`,
      },
      {
        n: '3b', tema: 'm09', tipo: 'practica', lab: 'carga-en-campo-b',
        enunciado: r`Dos isótopos de un elemento, con una sola carga positiva y masas $19{,}91\cdot10^{-27}$ kg y $21{,}59\cdot10^{-27}$ kg, se aceleran hasta $6{,}70\cdot10^{5}$ m/s. Luego ingresan juntos en una región con un campo magnético uniforme de $0{,}850$ T perpendicular a la velocidad. Determine la relación entre los radios de las trayectorias y la separación entre los puntos de incidencia cuando recorren media circunferencia.`,
        resolucion: r`Con la misma carga, velocidad y campo, el radio es proporcional a la masa:

$$r=\frac{mv}{qB}\ \Rightarrow\ \frac{r_2}{r_1}=\frac{m_2}{m_1}=\frac{21{,}59}{19{,}91}=1{,}084$$

$$r_1=\frac{(19{,}91\cdot10^{-27})(6{,}70\cdot10^{5})}{(1{,}60\cdot10^{-19})(0{,}850)}=0{,}0981\ \text m,\qquad r_2=0{,}1064\ \text m$$

Después de media vuelta cada ión impacta a un diámetro del punto de entrada, así que la separación es

$$\Delta=2r_2-2r_1=2(0{,}1064-0{,}0981)\approx1{,}66\cdot10^{-2}\ \text m\approx1{,}7\ \text{cm}$$

Así funciona el espectrómetro de masas.`,
      },
    ],
  },
  {
    id: 'f-2023-05-17', fecha: '17 de mayo de 2023',
    nota: 'Primera parte: cuestionario de 10 ítems; cada correcta suma 1, cada incorrecta resta 1 y no responder vale 0. Hay que sumar 6 para pasar a la segunda parte.',
    items: [
      { n: '1', tema: 'm02', tipo: 'opcion', enunciado: r`La intensidad de campo eléctrico $E$ en cualquier punto se define como:`, opciones: ['La cantidad de líneas de campo que atraviesan una superficie', 'La fuerza eléctrica sobre una carga puntual colocada en ese punto dividida por la carga', 'La energía potencial de una carga puntual en ese punto dividida por la carga', r`$E=KQ/r^2$`, 'La densidad lineal de carga sobre la permitividad del vacío'], ok: 1, resolucion: r`Es la definición: $\vec E=\vec F/q_0$. La opción $KQ/r^2$ es el **resultado** para una carga puntual, no la definición; energía sobre carga es el potencial.` },
      { n: '2', tema: 'm04', tipo: 'opcion', enunciado: r`En un punto de un campo eléctrico, la energía potencial eléctrica de una carga puntual $q$ es igual:`, opciones: [r`Al producto de la carga por el campo eléctrico`, 'Al trabajo necesario para llevar la carga desde el infinito hasta el punto', 'A la fuerza sobre la carga dividida por la carga', 'Al producto de la fuerza por el desplazamiento', 'A la energía cinética que tendrá la carga en ese punto'], ok: 1, resolucion: r`$U=W_{\infty\to P}$ hecho por un agente externo a velocidad constante (con referencia $U=0$ en el infinito).` },
      { n: '3', tema: 'm09', tipo: 'opcion', enunciado: r`Dentro de un campo magnético $B$, una carga puntual en movimiento:`, opciones: ['En cualquier caso recibe una fuerza del campo', 'Si recibe fuerza, ésta es paralela a la velocidad', 'Recibe una fuerza de módulo independiente de la dirección de v respecto de B', 'Recibe una fuerza perpendicular al plano formado por B y v', 'Recibe una fuerza independiente del valor de la carga'], ok: 3, resolucion: r`$\vec F=q\vec v\times\vec B$ es perpendicular a $\vec v$ y a $\vec B$. Si $\vec v\parallel\vec B$ la fuerza es nula, y el módulo depende de $\operatorname{sen}\theta$ y de $q$.` },
      { n: '4', tema: 'm07', tipo: 'opcion', enunciado: r`Una batería de $60{,}0$ V sin resistencia interna alimenta dos pares de resistencias en serie: $3{,}00\ \Omega$ en paralelo con $6{,}00\ \Omega$, y $12{,}0\ \Omega$ en paralelo con $4{,}00\ \Omega$. ¿Cuál es la corriente en la batería?`, opciones: ['3,00 A', '12,0 A', '15,0 A', '10,0 A', '4,00 A'], ok: 1, resolucion: r`$3\parallel6=2\ \Omega$ y $12\parallel4=3\ \Omega$; en serie $R_{eq}=5\ \Omega$ e $I=60/5=12{,}0$ A.` },
      { n: '5', tema: 'm14', tipo: 'opcion', enunciado: r`En un circuito RLC serie alimentado con una fuente de tensión alterna sinusoidal:`, opciones: ['La corriente es alterna sinusoidal solo en resonancia', 'La corriente máxima es la eficaz dividida por raíz de dos', 'La corriente es alterna sinusoidal y está en fase con la tensión (φ = 0) solo en resonancia', 'La corriente máxima no depende de la amplitud de la tensión', 'La corriente instantánea es constante'], ok: 2, resolucion: r`La corriente siempre es sinusoidal de la misma frecuencia; el desfase $\operatorname{tg}\varphi=(X_L-X_C)/R$ se anula solo cuando $X_L=X_C$. Además $I_{max}=\sqrt2\,I_{ef}$.` },
      { n: '6', tema: 'm19', tipo: 'opcion', lab: 'conduccion', enunciado: r`Una olla con base de acero de $8{,}50$ mm de espesor y área de $0{,}150\ \text m^2$ descansa en una estufa caliente. El agua de la olla está a $100\,^\circ$C y se evaporan $0{,}390$ kg cada $3{,}00$ min. Calcule la temperatura de la superficie inferior de la olla ($k_{acero}=50{,}2$ W/m·K, $L_v=2{,}26\cdot10^6$ J/kg).`, opciones: ['95,4 °C', '120,3 °C', '115,0 °C', '105,5 °C', '130,2 °C'], ok: 3, resolucion: r`$H=\frac{mL_v}{t}=\frac{0{,}390\cdot2{,}26\cdot10^6}{180}=4{,}90\cdot10^3$ W. $\Delta T=\frac{HL}{kA}=\frac{4900\cdot0{,}0085}{50{,}2\cdot0{,}150}=5{,}5$ K, así que $T=105{,}5\,^\circ$C.` },
      { n: '7', tema: 'm13', tipo: 'opcion', lab: 'rl', enunciado: r`En un circuito RL serie alimentado con una fuente de tensión continua $V$ a través de un interruptor:`, opciones: ['La corriente instantánea aumenta linealmente con el tiempo', 'La corriente instantánea disminuye linealmente', 'La corriente final, mucho tiempo después de cerrar, es V/R', 'La corriente inicial (t = 0) es V/R', 'La corriente final es cero'], ok: 2, resolucion: r`$i(t)=\frac VR\left(1-e^{-Rt/L}\right)$: arranca en cero (la bobina se opone al cambio) y tiende exponencialmente a $V/R$.` },
      { n: '8', tema: 'm04', tipo: 'opcion', lab: 'equipotenciales', enunciado: r`A, B y C son los vértices de un triángulo equilátero de $3$ m de lado. En A y B hay cargas de $+2\ \mu$C. ¿Cuánto trabajo se necesita para traer una carga de $+5\ \mu$C desde el infinito hasta C?`, opciones: ['5,0·10⁻⁴ J', '3,5·10⁻⁴ J', '6,0·10⁻² J', '4,2·10⁻⁴ J', '1,0·10⁻³ J'], ok: 2, resolucion: r`$V_C=2\cdot\frac{(9\cdot10^9)(2\cdot10^{-6})}{3}=1{,}2\cdot10^4$ V; $W=qV_C=(5\cdot10^{-6})(1{,}2\cdot10^4)=6{,}0\cdot10^{-2}$ J.` },
      { n: '9', tema: 'm03', tipo: 'opcion', lab: 'gauss', enunciado: r`Una coraza esférica conductora pequeña (radios $a$ y $b$) es concéntrica con una grande (radios $c$ y $d$). La pequeña tiene carga total $+2q$ y la grande $+4q$. ¿Cuál es correcta?`, opciones: ['La superficie interna de la pequeña tiene +2q', 'La superficie externa de la pequeña tiene −2q', 'La superficie interna de la grande tiene +2q', 'La superficie externa de la grande tiene +6q', 'La superficie interna de la grande tiene −4q'], ok: 3, resolucion: r`Dentro de un conductor $E=0$. La pequeña no encierra carga: interna $0$, externa $+2q$. La grande debe encerrar carga neta nula con una gaussiana dentro del metal: interna $-2q$, externa $4q+2q=+6q$.` },
      { n: '10', tema: 'm10', tipo: 'opcion', lab: 'campo-de-corrientes', enunciado: r`Para dos conductores rectos, paralelos, muy largos, con corrientes, se cumple que:`, opciones: ['Se atraen si tienen corrientes en sentidos contrarios', 'La fuerza entre ellos es proporcional al producto de sus corrientes', 'La fuerza entre ellos no depende de la separación', 'El que lleva más corriente recibe la fuerza más grande', 'La fuerza entre ellos obedece a la ley de Faraday'], ok: 1, resolucion: r`$\frac FL=\frac{\mu_0I_1I_2}{2\pi d}$: proporcional al producto e inversamente proporcional a la distancia. Se atraen con corrientes en el mismo sentido y las fuerzas son iguales y opuestas (tercera ley).` },
    ],
  },
  {
    id: 'f-cuestionario-rc', fecha: 'Final reciente (cuestionario teórico)',
    nota: 'Puntaje: 1a) 3 puntos, 1b) 0,5, 2) 1,5, 3) 1,5, 4) 3,5.',
    items: [
      {
        n: '1a', tema: 'm08', tipo: 'teoria', lab: 'rc',
        enunciado: r`Demuestre las ecuaciones de la carga $q$, la corriente $i$, la diferencia de potencial en el capacitor $v_C$ y en el resistor $v_R$ en el proceso de **carga** de un circuito RC serie en CC. Grafíquelas.`,
        resolucion: r`Al cerrar el interruptor, la regla de las mallas de Kirchhoff da

$$\varepsilon-iR-\frac qC=0,\qquad i=\frac{dq}{dt}\ \Rightarrow\ \frac{dq}{dt}=\frac{C\varepsilon-q}{RC}$$

Separando variables con $q(0)=0$:

$$\int_0^q\frac{dq'}{C\varepsilon-q'}=\int_0^t\frac{dt'}{RC}\ \Rightarrow\ -\ln\frac{C\varepsilon-q}{C\varepsilon}=\frac t{RC}$$

$$q(t)=C\varepsilon\left(1-e^{-t/RC}\right)$$

Derivando y dividiendo:

$$i(t)=\frac{\varepsilon}{R}e^{-t/RC},\qquad v_C=\frac qC=\varepsilon\left(1-e^{-t/RC}\right),\qquad v_R=iR=\varepsilon e^{-t/RC}$$

**Gráficas:** $q$ y $v_C$ crecen desde cero y tienden asintóticamente a $C\varepsilon$ y $\varepsilon$; $i$ y $v_R$ arrancan en $\varepsilon/R$ y $\varepsilon$ y caen exponencialmente a cero. En todo instante $v_R+v_C=\varepsilon$.`,
      },
      {
        n: '1b', tema: 'm08', tipo: 'teoria', lab: 'rc',
        enunciado: r`Explique el significado físico del parámetro $\tau_C$. ¿Cómo afecta al circuito? ¿En qué unidad se mide?`,
        resolucion: r`$\tau=RC$ es la **constante de tiempo**: el tiempo en que la carga llega al $63{,}2\,\%$ de su valor final ($1-e^{-1}$), o en que la corriente cae al $36{,}8\,\%$. Mide qué tan rápido responde el circuito: con $R$ o $C$ más grandes, la carga es más lenta. En la práctica, después de $5\tau$ el capacitor está cargado (más del $99\,\%$). Se mide en **segundos**: $\Omega\cdot\text F=\frac{\text V}{\text A}\cdot\frac{\text C}{\text V}=\frac{\text C}{\text C/\text s}=\text s$.`,
      },
      {
        n: '2', tema: 'm18', tipo: 'teoria', lab: 'dilatacion',
        enunciado: r`Determine la ecuación que describe la expansión lineal de una varilla de longitud $L_0$ cuando la temperatura cambia $\Delta T$; identifique sus componentes y grafique.`,
        resolucion: r`Para cambios moderados de temperatura, el alargamiento es proporcional a la longitud inicial y al cambio de temperatura:

$$\Delta L=\alpha L_0\,\Delta T\qquad\Rightarrow\qquad L=L_0\left(1+\alpha\,\Delta T\right)$$

- $\Delta L$: variación de longitud (m).
- $L_0$: longitud a la temperatura de referencia (m).
- $\Delta T$: variación de temperatura (K o °C, son iguales para diferencias).
- $\alpha$: coeficiente de dilatación lineal del material (K⁻¹), del orden de $10^{-5}$.

La gráfica $L$ vs. $T$ es una recta de ordenada $L_0$ y pendiente $\alpha L_0$. Para áreas y volúmenes: $\Delta A\approx2\alpha A_0\Delta T$ y $\Delta V=\beta V_0\Delta T$ con $\beta\approx3\alpha$.`,
      },
      {
        n: '3', tema: 'm18', tipo: 'teoria',
        enunciado: r`Explique el comportamiento anómalo del agua.`,
        resolucion: r`Casi todas las sustancias se dilatan al calentarse. El agua, entre $0$ y $4\,^\circ$C, se **contrae** al calentarse: su volumen es mínimo y su densidad máxima ($1000$ kg/m³) a unos $4\,^\circ$C. En ese intervalo el coeficiente $\beta$ es **negativo**; por encima de $4\,^\circ$C vuelve a ser positivo.

La causa son los puentes de hidrógeno: cerca de la congelación las moléculas forman estructuras abiertas, parecidas a las del hielo, que ocupan más lugar. Por eso el hielo flota (es menos denso que el agua) y los lagos se congelan de arriba hacia abajo: el agua a $4\,^\circ$C, más densa, queda en el fondo y protege la vida acuática.`,
      },
      {
        n: '4', tema: 'm06', tipo: 'teoria', lab: 'deriva',
        enunciado: r`Demuestre la expresión de la conductividad eléctrica de un conductor a partir de la teoría de conducción metálica. Explique. Grafique.`,
        resolucion: r`**Modelo de Drude.** Los electrones libres se mueven al azar a gran velocidad y chocan con los iones de la red. Con un campo $\vec E$, entre choque y choque cada electrón se acelera con $\vec a=-\frac{e\vec E}{m}$. Si $\tau$ es el tiempo libre medio entre choques y después de cada choque la velocidad es aleatoria (promedio cero), la velocidad media adquirida es la **velocidad de deriva**:

$$\vec v_d=\vec a\,\tau=-\frac{e\tau}{m}\vec E$$

La densidad de corriente, con $n$ electrones por unidad de volumen:

$$\vec J=-ne\vec v_d=\frac{ne^2\tau}{m}\vec E\ \Rightarrow\ \vec J=\sigma\vec E,\qquad \sigma=\frac{ne^2\tau}{m},\qquad\rho=\frac1\sigma=\frac{m}{ne^2\tau}$$

Como $\sigma$ no depende de $E$, el modelo explica la **ley de Ohm**. Al subir la temperatura, la red vibra más, los choques son más frecuentes, $\tau$ baja y la resistividad crece: $\rho\approx\rho_0[1+\alpha(T-T_0)]$. La gráfica $J$ vs. $E$ es una recta de pendiente $\sigma$; $\rho$ vs. $T$ es aproximadamente lineal en los metales.`,
      },
    ],
  },
  {
    id: 'f-2022-03-02', fecha: '2 de marzo de 2022',
    nota: 'Condición mínima de aprobación: 5 ítems resueltos correctamente.',
    items: [
      {
        n: '1', tema: 'm19', tipo: 'practica',
        enunciado: r`Un pistón cilíndrico rígido y adiabático contiene $n=1$ mol de un gas ideal. El émbolo tiene un área $A=10\ \text{cm}^2$ y comprime un resorte de constante $k=10\,000$ N/m en $0{,}03$ m. El volumen del cilindro es $V_0=10\,000\ \text{cm}^3$ y el sistema está en equilibrio. a) Calcule la temperatura $T_0$ del gas. b) Afuera del cilindro hay vacío. Si se desconecta el émbolo del resorte de modo que el gas se expande hasta duplicar su volumen, calcule la nueva presión y la variación de energía interna. Desprecie el rozamiento.`,
        resolucion: r`**a)** Del otro lado del émbolo hay vacío, así que solo el resorte equilibra al gas:

$$P_0=\frac{kx}{A}=\frac{10\,000\cdot0{,}03}{10\cdot10^{-4}}=3{,}0\cdot10^5\ \text{Pa}$$

$$T_0=\frac{P_0V_0}{nR}=\frac{(3{,}0\cdot10^5)(0{,}010)}{1\cdot8{,}314}\approx361\ \text K$$

**b)** El gas se expande contra el vacío: **expansión libre**. No hay fuerza exterior que vencer, así que $W=0$; el cilindro es adiabático, así que $Q=0$. Por el primer principio $\Delta U=Q-W=0$, y en un gas ideal $U$ depende solo de $T$: la temperatura no cambia. Con $T$ constante y el volumen duplicado:

$$P=\frac{P_0}{2}=1{,}5\cdot10^5\ \text{Pa},\qquad\Delta U=0$$`,
      },
      {
        n: '2', tema: 'm03', tipo: 'practica',
        enunciado: r`Un anillo de densidad lineal uniforme $\lambda_1=20\ \mu$C/m y radio $R=2$ m está en el plano $XY$ con centro en el origen. Una línea infinita con $\lambda_2=-3\ \mu$C/m, perpendicular al plano $XY$ (paralela al eje $Z$), corta al eje $y$ en $(0;\,1{,}5R;\,0)$. Calcule el vector desplazamiento eléctrico en el origen.`,
        resolucion: r`**Anillo:** en su centro cada elemento de carga tiene un compañero diametralmente opuesto que anula su campo: $\vec E_1=0$.

**Línea infinita:** por Gauss, $D=\frac{|\lambda|}{2\pi r}$ (el desplazamiento no depende de $\varepsilon_0$), con $r=1{,}5R=3$ m:

$$D=\frac{3\cdot10^{-6}}{2\pi\cdot3}=1{,}59\cdot10^{-7}\ \frac{\text C}{\text m^2}$$

Como la línea es negativa, el campo apunta **hacia** ella, es decir hacia $+y$:

$$\vec D=1{,}59\cdot10^{-7}\ \hat\jmath\ \ \text{C/m}^2$$`,
      },
      {
        n: '3', tema: 'm05', tipo: 'practica', lab: 'capacitor',
        enunciado: r`Una esfera conductora maciza de radio $R_1=10$ cm está rodeada por un cascarón conductor concéntrico de radio interno $R_2=20$ cm y externo $R_3=21$ cm. El espacio entre ambos está lleno de un dieléctrico de permitividad relativa $\varepsilon_r=2$. Calcule la densidad superficial de carga de polarización en $R_2$ cuando se conectan los conductores a una pila de $24$ V, con el positivo en el cascarón.`,
        resolucion: r`Es un capacitor esférico con dieléctrico:

$$C=4\pi\varepsilon_0\varepsilon_r\frac{R_1R_2}{R_2-R_1}=4\pi(8{,}85\cdot10^{-12})(2)\frac{0{,}1\cdot0{,}2}{0{,}1}=4{,}45\cdot10^{-11}\ \text F$$

$$Q=CV=1{,}07\cdot10^{-9}\ \text C$$

La superficie interna del cascarón ($R_2$) lleva $+Q$ libre:

$$\sigma_{libre}=\frac{Q}{4\pi R_2^2}=2{,}13\cdot10^{-9}\ \frac{\text C}{\text m^2}$$

El dieléctrico en contacto con esa superficie se polariza con carga de signo **opuesto**:

$$\sigma_p=-\sigma_{libre}\left(1-\frac1{\varepsilon_r}\right)=-1{,}06\cdot10^{-9}\ \frac{\text C}{\text m^2}$$`,
      },
      {
        n: '5', tema: 'm10', tipo: 'practica', lab: 'campo-de-corrientes',
        enunciado: r`Un conductor largo lleva una corriente continua $I=14$ A. En una porción se bifurca en dos semicircunferencias de centro C y radio $R=40$ cm, de distinta sección, de modo que la corriente se divide en $I_1$ e $I_2$. El campo en C es $B=5\ \mu\text T\ \hat k$. Calcule $I_1$ e $I_2$ ($\mu_0=4\pi\cdot10^{-7}$ T·m/A).`,
        resolucion: r`Los tramos rectos apuntan al centro C ($d\vec l\parallel\vec r$), así que no aportan. Cada semicircunferencia da $B=\frac{\mu_0I}{4R}$, pero en sentidos **opuestos** (una corriente gira horario y la otra antihorario respecto de C):

$$B=\frac{\mu_0(I_1-I_2)}{4R}\ \Rightarrow\ I_1-I_2=\frac{4RB}{\mu_0}=\frac{4\cdot0{,}4\cdot5\cdot10^{-6}}{4\pi\cdot10^{-7}}=6{,}37\ \text A$$

Con $I_1+I_2=14$ A: $I_1\approx10{,}2$ A e $I_2\approx3{,}8$ A. La que va por arriba en la figura es la mayor, porque el campo neto sale ($+\hat k$).`,
      },
      {
        n: '6', tema: 'm09', tipo: 'practica',
        enunciado: r`Un circuito en el plano $XY$, en régimen estacionario y en el vacío, está en un campo magnético uniforme $\vec B=B(-\hat\imath)$. Datos: $\varepsilon=12$ V, $R_{total}=1{,}2\ \Omega$, $L=0{,}8$ m, $B=450$ mT. El tramo NS es paralelo al eje $X$ y SM al eje $Y$ (de longitud $L$). Halle la fuerza que el campo ejerce sobre el tramo curvo MN.`,
        resolucion: r`La corriente es $I=\varepsilon/R=10$ A. Para un conductor de cualquier forma en un campo **uniforme**, la fuerza es la misma que sobre el segmento recto que une sus extremos:

$$\vec F=I\,\vec L_{MN}\times\vec B$$

La componente de $\vec L_{MN}$ paralela a $X$ no aporta ($\hat\imath\times\hat\imath=0$). Solo cuenta el desnivel en $Y$, que es $L=0{,}8$ m:

$$|\vec F|=ILB=10\cdot0{,}8\cdot0{,}45=3{,}6\ \text N$$

dirigida según $\pm\hat k$: con la corriente recorriendo el tramo en sentido $+\hat\jmath$, $\hat\jmath\times(-\hat\imath)=+\hat k$.`,
      },
      {
        n: '7', tema: 'm11', tipo: 'practica', lab: 'faraday',
        enunciado: r`La barra conductora RS, de longitud $L=1{,}5$ m, es paralela al eje $X$ y se traslada en el plano $XY$ con velocidad constante $\vec V=V\hat\jmath$. El extremo R está en $x_R=0{,}2$ m. El campo magnético es constante en el tiempo pero varía con $x$: $\vec B=B_0e^{-bx}\hat k$, con $B_0=30$ mT, $b=8\ \text m^{-1}$ y $V=5$ m/s. a) Halle el módulo de la fem inducida en la barra. b) Justifique su polaridad.`,
        resolucion: r`**a)** Como el campo no es uniforme a lo largo de la barra, se integra la fem de movimiento:

$$\varepsilon=\int_R^S(\vec V\times\vec B)\cdot d\vec l=\int_{0{,}2}^{1{,}7}VB_0e^{-bx}dx=\frac{VB_0}{b}\left(e^{-1{,}6}-e^{-13{,}6}\right)$$

$$\varepsilon=\frac{5\cdot0{,}030}{8}\cdot0{,}202=3{,}8\cdot10^{-3}\ \text V$$

**b)** Sobre las cargas libres actúa $q\vec V\times\vec B$, con $\hat\jmath\times\hat k=+\hat\imath$: los positivos se acumulan en el extremo de mayor $x$. **S es el polo positivo** y R el negativo.`,
      },
      {
        n: '8', tema: 'm13', tipo: 'practica', lab: 'rl',
        enunciado: r`Una bobina de resistencia propia $R_L=5\ \Omega$ se conecta en serie con un resistor $R_R=15\ \Omega$, una fuente ideal de fem $\varepsilon$ y un interruptor abierto. En $t_0=0$ se cierra el interruptor y en $t_1=8{,}5$ ms la corriente alcanza el $75\,\%$ de su valor estacionario. Determine la inductancia $L$.`,
        resolucion: r`$i(t)=I_\infty\left(1-e^{-t/\tau}\right)$ con $\tau=L/R_{total}$ y $R_{total}=20\ \Omega$.

$$0{,}75=1-e^{-t_1/\tau}\ \Rightarrow\ \tau=\frac{t_1}{\ln4}=\frac{8{,}5\cdot10^{-3}}{1{,}386}=6{,}13\cdot10^{-3}\ \text s$$

$$L=\tau R_{total}=6{,}13\cdot10^{-3}\cdot20\approx0{,}123\ \text H$$`,
      },
    ],
  },
  {
    id: 'f-2017-03-20', fecha: '20 de marzo de 2017',
    nota: 'Para aprobar: un ejercicio completo (obligatorio el 2 o el 3) y al menos el 50 % de otro.',
    items: [
      { n: '1', tema: 'm19', tipo: 'teoria', enunciado: r`Enuncie los mecanismos de propagación del calor, detallando los modelos matemáticos empleados para su análisis. ¿En qué unidades del SI se miden las magnitudes físicas involucradas?`, resolucion: r`Conducción (Fourier, $H=kA\frac{\Delta T}{L}$), convección ($H=hA\Delta T$) y radiación (Stefan-Boltzmann, $H=e\sigma AT^4$). Unidades: $H$ en W, $k$ en W/(m·K), $h$ en W/(m²·K), $A$ en m², $T$ en K, $\sigma=5{,}67\cdot10^{-8}$ W/(m²·K⁴), $e$ adimensional. Ver el desarrollo completo en el final del 25-11-2026, ítem 2a.` },
      { n: '2', tema: 'm04', tipo: 'teoria', lab: 'equipotenciales', enunciado: r`Defina potencial eléctrico considerando una carga puntual positiva y grafique las superficies equipotenciales. a) ¿Cuál es la relación con el campo eléctrico? ¿Es una relación lineal? b) ¿Cuál sería la trayectoria que podría hacer una carga de prueba $+q_0$ a través de las superficies equipotenciales para que la carga fuente no efectúe trabajo?`, resolucion: r`$V=k\frac qr$: las equipotenciales de una carga puntual son **esferas** concéntricas (en el plano, circunferencias), más juntas cerca de la carga para saltos iguales de $V$.

**a)** $\vec E=-\nabla V$; en una dimensión $E_r=-\frac{dV}{dr}$. No es lineal: $V\propto1/r$ y $E\propto1/r^2$. Solo en un campo uniforme $V$ varía linealmente con la distancia ($\Delta V=-Ed$). El campo es perpendicular a las equipotenciales y apunta hacia potenciales decrecientes.

**b)** $W=q_0(V_a-V_b)$: es nulo si el movimiento empieza y termina en la **misma** equipotencial, por ejemplo moviéndose sobre una esfera centrada en la carga (siempre perpendicular a $\vec E$). Como la fuerza es conservativa, vale para cualquier camino que vuelva a la misma superficie.` },
      { n: '3', tema: 'm11', tipo: 'teoria', lab: 'faraday', enunciado: r`Mencione la ley de Faraday-Lenz, explicando los principios físicos involucrados en el deslizamiento de una barra conductora de longitud $\ell$ sobre dos rieles conductores fijos, en una zona con campo $\vec B$ uniforme entrante (fem de movimiento). a) Describa el sentido de circulación de la corriente si expandimos y si comprimimos el área encerrada. b) ¿El agente externo que desliza la barra encontraría oposición de alguna fuerza o solo el roce?`, resolucion: r`**Faraday:** $\varepsilon=-\frac{d\Phi_B}{dt}$. **Lenz:** la corriente inducida circula de modo que su campo se opone al **cambio** de flujo. Con la barra a velocidad $v$: $\Phi=B\ell x$, $\varepsilon=B\ell v$, $I=\frac{B\ell v}{R}$. Equivalente: la fuerza $q\vec v\times\vec B$ separa cargas en la barra.

**a)** Con $\vec B$ entrante: si el área **crece**, el flujo entrante aumenta y la corriente induce un campo saliente: circula en sentido **antihorario**. Si el área **se achica**, el flujo entrante disminuye y la corriente refuerza el entrante: sentido **horario**.

**b)** Sí. La barra con corriente $I$ en el campo recibe $\vec F=I\vec\ell\times\vec B$, de módulo $\frac{B^2\ell^2v}{R}$, siempre **opuesta a la velocidad** (otra forma de Lenz). El agente debe hacer potencia $Fv=\frac{(B\ell v)^2}{R}$, que es exactamente la que se disipa en $R$: así se conserva la energía.` },
    ],
  },
  {
    id: 'f-2017-03-08', fecha: '8 de marzo de 2017',
    nota: 'Para aprobar: un ejercicio completo (obligatorio el 2 o el 3) y al menos el 50 % de otro.',
    items: [
      { n: '1', tema: 'm18', tipo: 'teoria', lab: 'dilatacion', enunciado: r`Enuncie las ecuaciones que representan la expansión de los sólidos en función de la temperatura. ¿En qué unidades del SI se miden las magnitudes? a) Describa el comportamiento anómalo del agua (expansión volumétrica en líquidos) en torno a los $4\,^\circ$C. ¿Qué sucede con el coeficiente de dilatación?`, resolucion: r`$\Delta L=\alpha L_0\Delta T$, $\Delta A=2\alpha A_0\Delta T$, $\Delta V=\beta V_0\Delta T$ con $\beta\approx3\alpha$. $L$ en m, $A$ en m², $V$ en m³, $\Delta T$ en K, $\alpha$ y $\beta$ en K⁻¹.

**a)** Entre $0$ y $4\,^\circ$C el agua se contrae al calentarse: $\beta<0$. A $4\,^\circ$C su densidad es máxima y $\beta=0$; por encima vuelve a ser positivo. Ver el desarrollo en el final "cuestionario teórico", ítem 3.` },
      { n: '2', tema: 'm04', tipo: 'teoria', enunciado: r`Defina potencial eléctrico considerando una carga puntual positiva. a) Para un conductor rectilíneo cargado con densidad lineal $\lambda$, ¿cómo podemos calcular el potencial en un punto P a distancia $y$, si $L\gg y$?`, resolucion: r`$V(P)=\frac{W_{\infty\to P}}{q_0}$; para una carga puntual $V=k\frac qr$.

**a)** Con $L\gg y$ el conductor se comporta como una **línea infinita**. Por Gauss (cilindro coaxial de radio $y$): $E=\frac{\lambda}{2\pi\varepsilon_0y}$, radial. El potencial no puede referirse al infinito (la integral diverge porque la carga se extiende hasta el infinito), así que se toma una referencia $V(y_0)=0$:

$$V(y)=-\int_{y_0}^{y}\frac{\lambda}{2\pi\varepsilon_0r}dr=\frac{\lambda}{2\pi\varepsilon_0}\ln\frac{y_0}{y}$$` },
      { n: '3', tema: 'm15', tipo: 'teoria', lab: 'transformador', enunciado: r`Explique los principios físicos del funcionamiento de un transformador de tensiones variables con $N_1$ vueltas en el primario y $N_2$ en el secundario, mencionando las leyes involucradas. a) ¿Se presentan fenómenos de autoinducción e inductancia mutua en las bobinas? ¿Por qué? ¿Afectan al funcionamiento?`, resolucion: r`La corriente **alterna** del primario crea en el núcleo de hierro un flujo variable que, gracias a la alta permeabilidad, atraviesa casi entero al secundario. Por **Faraday** en cada espira se induce la misma fem por vuelta:

$$\varepsilon_1=-N_1\frac{d\Phi}{dt},\ \varepsilon_2=-N_2\frac{d\Phi}{dt}\ \Rightarrow\ \frac{V_2}{V_1}=\frac{N_2}{N_1}$$

Si es ideal (sin pérdidas) la potencia se conserva: $V_1I_1=V_2I_2$, así que $\frac{I_2}{I_1}=\frac{N_1}{N_2}$. Con corriente continua el flujo no varía y no hay inducción.

**a)** Sí: el primario tiene **autoinductancia** (su propio flujo variable induce una fem que limita la corriente en vacío) y entre bobinas hay **inductancia mutua** $M$, que es justamente el mecanismo de transferencia. No son defectos: sin $M$ no hay transformador. Lo que afecta el rendimiento es el flujo disperso (acoplamiento imperfecto), las corrientes de Foucault (por eso el núcleo es laminado) y la histéresis del hierro.` },
    ],
  },
  {
    id: 'f-2016-03-16', fecha: '16 de marzo de 2016',
    nota: 'Para aprobar: un ejercicio completo (obligatorio el 2 o el 3) y al menos el 50 % de otro.',
    items: [
      { n: '1', tema: 'm19', tipo: 'teoria', lab: 'conduccion', enunciado: r`Enuncie los mecanismos de propagación del calor y sus modelos matemáticos. a) Un ventanal de cristal térmico de $A$ m² está construido con dos hojas de vidrio de $x$ mm de espesor separadas por un espacio de aire de $y$ mm. Si el interior está a $T_1$ y el exterior a $T_2$, ¿cómo podemos calcular la pérdida de calor por hora?`, resolucion: r`Ver el ítem 2a del final del 25-11-2026 para los tres mecanismos.

**a)** Las tres capas están en **serie** para el flujo de calor (el mismo $H$ las atraviesa). Cada una aporta una resistencia térmica $\frac{L}{kA}$:

$$H=\frac{A(T_1-T_2)}{\dfrac{x}{k_v}+\dfrac{y}{k_a}+\dfrac{x}{k_v}}$$

con $x$, $y$ en metros. La pérdida en una hora es $Q=H\cdot3600$ s. Como $k_{aire}\approx0{,}024$ W/(m·K) es mucho menor que $k_{vidrio}\approx0{,}8$, casi toda la aislación la pone la capa de aire.` },
      { n: '2', tema: 'm04', tipo: 'teoria', enunciado: r`Defina energía potencial electrostática y deduzca su valor para un arreglo de dos cargas puntuales $+q_1$ y $-2q_1$ separadas $x$ metros. a) ¿Qué sucede con la energía potencial si la carga $q_1$ se aleja $x/2$ metros más de la otra? ¿Aumenta o disminuye? ¿En qué proporción?`, resolucion: r`La energía potencial del sistema es el trabajo que hace un agente externo para armarlo trayendo las cargas desde el infinito. Se trae $+q_1$ (gratis, no hay campo) y luego $-2q_1$ en el potencial de la primera:

$$U=(-2q_1)\,k\frac{q_1}{x}=-\frac{2kq_1^2}{x}$$

Es negativa: las cargas se atraen y el sistema "devuelve" energía al armarse.

**a)** A distancia $\frac32x$: $U'=-\frac{2kq_1^2}{1{,}5x}=\frac23U$. La energía **aumenta** (se hace menos negativa): su módulo baja a $\frac23$. Hubo que hacer trabajo positivo para separarlas, igual a $\Delta U=+\frac{2kq_1^2}{3x}$.` },
      { n: '3', tema: 'm11', tipo: 'teoria', enunciado: r`Mencione la ley de Faraday-Lenz explicando los principios físicos involucrados en el funcionamiento de un motor de corriente continua. a) Explique para qué sirven los conectores (conmutador) sobre el eje de giro de la espira. b) ¿Cuál es el sentido de giro? Grafique la fuerza de Lorentz.`, resolucion: r`En el motor, la espira con corriente $I$ dentro del campo del imán recibe fuerzas $\vec F=I\vec\ell\times\vec B$ en los lados perpendiculares al campo, iguales y opuestas, que forman un **par** $\tau=NIAB\operatorname{sen}\theta$ y la hacen girar. Al girar, el flujo cambia y por **Faraday-Lenz** aparece una **fuerza contraelectromotriz** que se opone a la corriente de la fuente: por eso un motor frenado consume más corriente.

**a)** El **conmutador** (delgas y escobillas) invierte el sentido de la corriente en la espira cada media vuelta, justo cuando el plano pasa por la posición perpendicular al campo. Sin él, el par cambiaría de signo y la espira solo oscilaría.

**b)** Se obtiene con la regla de la mano derecha sobre $I\vec\ell\times\vec B$ en cada lado: el lado con la corriente entrando de un lado sube y el otro baja; el sentido de giro se invierte si se invierte la polaridad de la fuente o el campo.` },
    ],
  },
  {
    id: 'f-2016-03-02', fecha: '2 de marzo de 2016',
    nota: 'Para aprobar: un ejercicio completo (obligatorio el 2 o el 3) y al menos el 50 % de otro.',
    items: [
      { n: '1', tema: 'm19', tipo: 'teoria', lab: 'ciclo-pv', enunciado: r`En un proceso adiabático para un gas ideal, deduzca la fórmula del trabajo, estableciendo las relaciones entre temperatura, volumen y presión.`, resolucion: r`Adiabático: $dQ=0$, así que $dU=-dW$: $nc_v\,dT=-p\,dV$. Con $p=\frac{nRT}{V}$:

$$nc_vdT=-\frac{nRT}{V}dV\ \Rightarrow\ \frac{dT}{T}=-\frac{R}{c_v}\frac{dV}{V}=-(\gamma-1)\frac{dV}{V}$$

usando $c_p-c_v=R$ y $\gamma=\frac{c_p}{c_v}$. Integrando: $TV^{\gamma-1}=\text{cte}$. Reemplazando $T=\frac{pV}{nR}$: $pV^\gamma=\text{cte}$, y también $T^\gamma p^{1-\gamma}=\text{cte}$.

**Trabajo:** $W=\int_{V_1}^{V_2}p\,dV=p_1V_1^\gamma\int V^{-\gamma}dV$:

$$W=\frac{p_1V_1-p_2V_2}{\gamma-1}=nc_v(T_1-T_2)=-\Delta U$$

En una expansión adiabática el gas hace trabajo a costa de su energía interna y se enfría.` },
      { n: '2', tema: 'm09', tipo: 'teoria', enunciado: r`Explique los fenómenos que ocurren cuando electrones que circulan por un conductor laminar de lados $a$, $b$ y $h$ se enfrentan a una zona con un campo magnético $B$ transversal. a) ¿Actúa alguna fuerza de origen eléctrico? ¿Alguna de origen magnético? ¿Dirección y sentido? b) ¿Cómo podemos calcular la $v_d$ de los electrones?`, resolucion: r`Es el **efecto Hall**. Los electrones que derivan con $\vec v_d$ reciben $\vec F_B=-e\vec v_d\times\vec B$ y se acumulan en una de las caras laterales; la cara opuesta queda con defecto de electrones (positiva).

**a)** Primero actúa solo la fuerza **magnética**, transversal a la corriente y al campo. La acumulación de carga crea un campo eléctrico transversal $E_H$ que ejerce una fuerza **eléctrica** opuesta. Se llega al equilibrio cuando se compensan: $eE_H=ev_dB$. Entre las caras aparece la **tensión de Hall** $V_H=E_H\cdot d$, donde $d$ es el ancho transversal.

**b)** Midiendo $V_H$: $v_d=\frac{E_H}{B}=\frac{V_H}{Bd}$. Con $I=nev_dA$ se obtiene además la densidad de portadores $n=\frac{IB}{eV_Ht}$ ($t$ = espesor en la dirección de B), y el signo de $V_H$ revela que los portadores son negativos.` },
      { n: '3', tema: 'm12', tipo: 'teoria', enunciado: r`Explique los fenómenos que ocurren cuando circula corriente por una bobina circular que está a una distancia $d$ de otra bobina por la que no circula corriente. ¿Qué sucede en la segunda? a) Explique la situación si la primera corriente es continua y si es alterna. b) ¿Cómo podemos calcular el coeficiente de inducción mutua?`, resolucion: r`La corriente de la bobina 1 crea un campo cuyas líneas atraviesan en parte la bobina 2: hay un flujo concatenado $N_2\Phi_{21}$ proporcional a $i_1$.

**a)** Con **continua** estacionaria el flujo es constante y en la bobina 2 no se induce nada (solo hay un pulso al conectar o desconectar). Con **alterna** el flujo varía en el tiempo y por Faraday se induce una fem alterna $\varepsilon_2=-M\frac{di_1}{dt}$, desfasada 90° respecto de $i_1$.

**b)** $M=\frac{N_2\Phi_{21}}{i_1}=\frac{N_1\Phi_{12}}{i_2}$ (es simétrico). Depende solo de la geometría, de la posición relativa y del núcleo. Por ejemplo, para una bobina de $N_2$ espiras bien acoplada sobre un solenoide largo: $M=\frac{\mu_0N_1N_2A}{\ell}$. Se mide aplicando $\frac{di_1}{dt}$ conocido y midiendo $\varepsilon_2$.` },
    ],
  },
  {
    id: 'f-2016-02-24', fecha: '24 de febrero de 2016',
    nota: 'Para aprobar: un ejercicio completo (obligatorio el 2 o el 3) y al menos el 50 % de otro.',
    items: [
      { n: '1', tema: 'm19', tipo: 'practica', lab: 'calorimetria', enunciado: r`Defina calor específico y calor latente de fusión, con sus unidades en el SI. b) Si mezclamos en un vaso aislado $0{,}80$ kg de limonada a $24\,^\circ$C con 6 cubitos de hielo (cada uno de $0{,}025$ kg a $-2\,^\circ$C), ¿cuál será la temperatura final? Suponga que la limonada tiene la misma capacidad calorífica que el agua. Esquematice un diagrama de temperatura vs. energía. ($c_{hielo}=2{,}132$ kJ/kg·K; $L_f=334$ kJ/kg; $c_{agua}=4180$ J/kg·K)`, resolucion: r`**Calor específico** $c=\frac{Q}{m\Delta T}$, en J/(kg·K): energía para elevar 1 K un kilogramo. **Calor latente** $L=\frac Qm$, en J/kg: energía para cambiar de fase un kilogramo a temperatura constante.

**b)** Hielo: $m=6\cdot0{,}025=0{,}150$ kg. Calentarlo a $0\,^\circ$C: $0{,}15\cdot2132\cdot2=640$ J; fundirlo: $0{,}15\cdot334\,000=50\,100$ J. La limonada hasta $0\,^\circ$C cede $0{,}8\cdot4180\cdot24=80\,256$ J: alcanza para fundir todo.

$$0{,}8\cdot4180(24-T)=640+50\,100+0{,}15\cdot4180\,T\ \Rightarrow\ T\approx7{,}4\,^\circ\text C$$

En el diagrama $T$–$Q$: el hielo sube de $-2$ a $0$, sigue una meseta horizontal (fusión) y luego sube hasta $7{,}4\,^\circ$C; la limonada baja en línea recta de $24$ a $7{,}4\,^\circ$C.` },
      { n: '2', tema: 'm04', tipo: 'practica', enunciado: r`Defina energía potencial electrostática para dos cargas puntuales de distinto signo a una distancia $d_1$. a) Se tiene una carga fija de $2$ nC. Se trae lentamente otra de $1$ nC desde el infinito hasta ubicarla a $2$ m de la primera. ¿Cuál es el trabajo necesario? ($K=9\cdot10^9$) b) ¿Cómo podemos reducir el potencial eléctrico del arreglo?`, resolucion: r`$U=k\frac{q_1q_2}{d_1}$, negativa si los signos son distintos.

**a)** $W=k\frac{q_1q_2}{r}=\frac{(9\cdot10^9)(2\cdot10^{-9})(1\cdot10^{-9})}{2}=9\cdot10^{-9}$ J.

**b)** Aumentando la separación entre las cargas, reduciendo alguna de ellas, o sumando cargas de signo opuesto cerca del punto donde se evalúa (o conectando a tierra).` },
      { n: '3', tema: 'm10', tipo: 'teoria', lab: 'campo-de-corrientes', enunciado: r`¿Qué efectos físicos se presentan si dos conductores largos por los que circulan corrientes continuas $I_1$ e $I_2$ del mismo sentido se ubican a una distancia $R$ en el mismo plano? Realice los cálculos en forma genérica indicando las leyes requeridas.`, resolucion: r`Cada conductor crea un campo magnético (ley de **Ampère** o de Biot-Savart): a distancia $R$, $B_1=\frac{\mu_0I_1}{2\pi R}$, con líneas circulares alrededor del hilo.

El otro conductor, con corriente en ese campo, recibe la fuerza de **Lorentz** $\vec F=I_2\vec\ell\times\vec B_1$:

$$\frac{F}{\ell}=\frac{\mu_0I_1I_2}{2\pi R}$$

Con corrientes del **mismo sentido** se **atraen**; con sentidos opuestos se repelen. Las fuerzas sobre ambos son iguales y opuestas (tercera ley), aunque las corrientes sean distintas. Esta fuerza definió el ampere hasta 2019.` },
    ],
  },
  {
    id: 'f-2015-05-13', fecha: '13 de mayo de 2015',
    nota: 'Para aprobar: un ejercicio completo (obligatorio el 2 o el 3) y al menos el 50 % de otro.',
    items: [
      { n: '1', tema: 'm19', tipo: 'teoria', lab: 'ciclo-pv', enunciado: r`Enuncie la primera ley de la termodinámica, explicando la relación entre energía interna, trabajo y calor, con la convención de signos. a) Un gas recorre el ciclo 1-2-3: de 1 a 2 una compresión isotérmica ($T_1=T_2$) desde $V_1$ hasta $V_2$; de 2 a 3 una expansión isobárica a $P_2$ hasta $V_1$; de 3 a 1 una isocórica hasta $P_1$. Encuentre el calor y el trabajo netos en forma genérica y sus signos.`, resolucion: r`$\Delta U=Q-W$, con $Q>0$ si el sistema **recibe** calor y $W>0$ si el sistema **hace** trabajo (se expande). $U$ es función de estado; $Q$ y $W$ dependen del camino.

**a)**
- $1\to2$ (isoterma, compresión): $W_{12}=nRT_1\ln\frac{V_2}{V_1}<0$, $\Delta U=0$, $Q_{12}=W_{12}<0$ (cede calor).
- $2\to3$ (isobárica, expansión): $W_{23}=P_2(V_1-V_2)>0$, $Q_{23}=nc_p(T_3-T_2)>0$.
- $3\to1$ (isocórica, baja la presión): $W_{31}=0$, $Q_{31}=nc_v(T_1-T_3)<0$.

En el ciclo $\Delta U=0$ y

$$Q_{neto}=W_{neto}=nRT_1\ln\frac{V_2}{V_1}+P_2(V_1-V_2)>0$$

Es positivo porque el ciclo se recorre en sentido **horario** en el diagrama p–V (la isobárica de arriba está por encima de la isoterma): el área encerrada es el trabajo neto.` },
      { n: '2', tema: 'm03', tipo: 'teoria', lab: 'gauss', enunciado: r`Defina la ley de Gauss y utilícela para calcular el campo eléctrico a una distancia $y$ de una línea de carga infinita con densidad $\lambda$. a) ¿Cómo podemos calcular el potencial en el punto P?`, resolucion: r`**Gauss:** el flujo eléctrico a través de cualquier superficie cerrada es la carga encerrada sobre $\varepsilon_0$:

$$\oint\vec E\cdot d\vec A=\frac{Q_{enc}}{\varepsilon_0}$$

Por simetría el campo de la línea es radial y de módulo constante sobre un cilindro coaxial de radio $y$ y largo $\ell$. Por las tapas no hay flujo ($\vec E\perp d\vec A$):

$$E\cdot2\pi y\ell=\frac{\lambda\ell}{\varepsilon_0}\ \Rightarrow\ E=\frac{\lambda}{2\pi\varepsilon_0y}$$

**a)** $V(y)=-\int_{y_0}^{y}E\,dr=\frac{\lambda}{2\pi\varepsilon_0}\ln\frac{y_0}{y}$, con una referencia $y_0$ finita (con carga infinita no se puede tomar $V(\infty)=0$).` },
      { n: '3', tema: 'm12', tipo: 'teoria', lab: 'rl', enunciado: r`Defina autoinducción magnética $L$ y calcule su valor para un solenoide por el que circula una corriente continua $I$, superados los transitorios. b) ¿Qué sucede en los instantes iniciales con la fem inducida si invertimos el sentido de $I$? c) ¿Cómo se modifica el campo en su interior si introducimos un material diamagnético?`, resolucion: r`**Autoinductancia:** flujo concatenado por la bobina debido a su propia corriente, por unidad de corriente: $L=\frac{N\Phi_B}{I}$, en henry (H = Wb/A). Por Faraday, $\varepsilon=-L\frac{di}{dt}$.

**Solenoide** de $N$ vueltas, largo $\ell$ y sección $A$: $B=\mu_0\frac N\ell I$, $\Phi=BA$:

$$L=\frac{N\cdot\mu_0\frac{N}{\ell}IA}{I}=\frac{\mu_0N^2A}{\ell}$$

**b)** Al invertir la corriente, $\frac{di}{dt}$ es grande y aparece una fem autoinducida que se **opone al cambio** (Lenz): la corriente no puede invertirse instantáneamente y pasa por cero siguiendo un transitorio de constante $\tau=L/R$.

**c)** Un diamagnético tiene $K_m$ apenas **menor que 1** ($\chi_m\approx-10^{-5}$): se imanta en sentido opuesto al campo y $B=K_m\mu_0nI$ **disminuye muy levemente**.` },
    ],
  },
  {
    id: 'f-sin-fecha-a', fecha: 'Final sin fecha (2015-2017)',
    nota: 'Para aprobar: un ejercicio completo (obligatorio el 2 o el 3) y al menos el 50 % de otro.',
    items: [
      { n: '1', tema: 'm19', tipo: 'practica', enunciado: r`Enuncie la segunda ley de la termodinámica (enunciado de Clausius), calculando el coeficiente de rendimiento (CDR) de un refrigerador de Carnot ideal en función de $T_1$ y $T_2$, y en función de $W$ y $Q$. a) ¿Cuál sería el CDR operativo y el máximo de un refrigerador si $T_1=300$ K, $T_2=200$ K, $W=1500$ J y $Q_1=6500$ J?`, resolucion: r`**Clausius:** es imposible un proceso cuyo **único** resultado sea pasar calor de un cuerpo frío a uno caliente. El refrigerador lo logra porque recibe trabajo.

$$\text{CDR}=\frac{Q_2}{W}=\frac{Q_2}{Q_1-Q_2}\qquad\text{Carnot: }\ \text{CDR}_{max}=\frac{T_2}{T_1-T_2}$$

**a)** $Q_2=Q_1-W=5000$ J. CDR operativo $=\frac{5000}{1500}=3{,}33$. Máximo (Carnot) $=\frac{200}{100}=2$.

El operativo **supera** al de Carnot: ese refrigerador es **imposible**, violaría la segunda ley. Es una trampa del enunciado que conviene señalar.` },
      { n: '2', tema: 'm03', tipo: 'teoria', lab: 'gauss', enunciado: r`Defina la ley de Gauss y utilícela para calcular el campo eléctrico a una distancia $y$ de una línea de carga infinita con densidad $\lambda$. a) ¿Cómo podemos calcular el potencial en P?`, resolucion: r`Igual que el final del 13-05-2015, ítem 2: $E=\frac{\lambda}{2\pi\varepsilon_0y}$ y $V(y)=\frac{\lambda}{2\pi\varepsilon_0}\ln\frac{y_0}{y}$.` },
      { n: '3', tema: 'm10', tipo: 'teoria', enunciado: r`Mencione la ley de Ampère para corrientes en un conductor rectilíneo. b) Utilícela para calcular el campo magnético en el interior de un toroide de radio interior $a$ y exterior $b$.`, resolucion: r`**Ampère:** la circulación de $\vec B$ en una curva cerrada es $\mu_0$ por la corriente que la atraviesa: $\oint\vec B\cdot d\vec l=\mu_0I_{enc}$. Para un hilo recto, con una circunferencia de radio $r$: $B\,2\pi r=\mu_0I$, $B=\frac{\mu_0I}{2\pi r}$.

**b)** En el toroide de $N$ vueltas se toma una circunferencia de radio $r$ dentro del núcleo; la atraviesan las $N$ vueltas:

$$B\,2\pi r=\mu_0NI\ \Rightarrow\ B=\frac{\mu_0NI}{2\pi r}\qquad(a<r<b)$$

Fuera del toroide ($r<a$ o $r>b$) la corriente neta encerrada es nula y $B=0$. El campo no es uniforme: es mayor cerca del radio interior.` },
    ],
  },
  {
    id: 'f-sin-fecha-b', fecha: 'Final sin fecha (2016-2017)',
    nota: 'Para aprobar: un ejercicio completo (obligatorio el 2 o el 3) y al menos el 50 % de otro.',
    items: [
      { n: '1', tema: 'm19', tipo: 'practica', lab: 'calorimetria', enunciado: r`Defina calor específico y calor latente de fusión con sus unidades en el SI. a) Si mezclamos en un vaso aislado $0{,}24$ kg de limonada a $33\,^\circ$C con 6 cubitos de hielo de $0{,}025$ kg cada uno a $0\,^\circ$C, ¿cuál será la temperatura final? La limonada tiene la capacidad calorífica del agua. ($L_f=334$ kJ/kg; $c_{agua}=4180$ J/kg·K)`, resolucion: r`Para fundir $0{,}150$ kg de hielo hacen falta $0{,}15\cdot334\,000=50\,100$ J. La limonada, al llegar a $0\,^\circ$C, cede solo $0{,}24\cdot4180\cdot33=33\,106$ J. **No alcanza**: la mezcla queda a $0\,^\circ$C con hielo flotando.

$$m_{fundida}=\frac{33\,106}{334\,000}=0{,}099\ \text{kg}$$

Estado final: $0\,^\circ$C, unos $51$ g de hielo y $339$ g de líquido.` },
      { n: '2', tema: 'm12', tipo: 'practica', lab: 'rl', enunciado: r`Defina autoinducción magnética $L$ y calcule su valor para un solenoide de $N$ vueltas con corriente $I$ y un núcleo de permeabilidad relativa $1500$. a) Un interruptor conecta una batería de CC a una bobina de resistencia interna $5\ \Omega$. Si la corriente estacionaria es de $20$ A y alcanza el $70\,\%$ de su valor $0{,}04$ s después de cerrar, ¿cuál es la autoinductancia?`, resolucion: r`Con núcleo: $L=\frac{K_m\mu_0N^2A}{\ell}=\frac{1500\,\mu_0N^2A}{\ell}$, 1500 veces la del solenoide con aire.

**a)** $0{,}70=1-e^{-t/\tau}\Rightarrow\tau=\frac{0{,}04}{\ln(1/0{,}3)}=\frac{0{,}04}{1{,}204}=0{,}0332$ s. $L=\tau R=0{,}0332\cdot5\approx0{,}166$ H. (La fem de la batería es $20\cdot5=100$ V, aunque no hace falta.)` },
      { n: '3', tema: 'm05', tipo: 'teoria', lab: 'capacitor', enunciado: r`Defina capacitancia para un dispositivo formado por dos placas paralelas conductoras aisladas entre sí. Use la definición para encontrar su valor si cada placa tiene área $A$, se conecta a una fuente $V$ y están separadas $d$ por un dieléctrico con $K=4{,}6$. a) ¿Cómo se calculan la capacitancia equivalente y la carga para 3 capacitores en serie a una fuente $V$? ¿Y en paralelo?`, resolucion: r`$C=\frac QV$, en farad. Entre las placas $E=\frac{\sigma}{K\varepsilon_0}=\frac{Q}{K\varepsilon_0A}$ y $V=Ed$:

$$C=\frac{Q}{\frac{Qd}{K\varepsilon_0A}}=\frac{K\varepsilon_0A}{d}=4{,}6\,\frac{\varepsilon_0A}{d}$$

**a)** **Serie:** todos tienen la misma carga; $\frac1{C_{eq}}=\frac1{C_1}+\frac1{C_2}+\frac1{C_3}$, $Q=C_{eq}V$ y $V_i=\frac Q{C_i}$. **Paralelo:** todos tienen la misma tensión $V$; $C_{eq}=C_1+C_2+C_3$ y $Q_i=C_iV$, con carga total $C_{eq}V$.` },
    ],
  },
  {
    id: 'f-2010-12-02', fecha: '2 de diciembre de 2010',
    nota: 'Condición de aprobación: el 50 % de los problemas 1 y 2 y el 50 % de los problemas 3, 4 y 5.',
    items: [
      { n: '1', tema: 'm19', tipo: 'practica', lab: 'calorimetria', enunciado: r`Un recipiente adiabático contiene $400$ g de hielo a $-20\,^\circ$C. Se agrega una masa de agua a $30\,^\circ$C y, alcanzado el equilibrio, la temperatura final es $0\,^\circ$C con $50$ g de hielo sin derretir. Determine la masa de agua agregada. ($c_{agua}=1$ cal/g°C; $c_{hielo}=0{,}55$ cal/g°C; $L_f=80$ cal/g)`, resolucion: r`Calor absorbido por el hielo: calentar los $400$ g hasta $0\,^\circ$C, $400\cdot0{,}55\cdot20=4400$ cal, y fundir $350$ g, $350\cdot80=28\,000$ cal. Total $32\,400$ cal, todo cedido por el agua al enfriarse de $30$ a $0\,^\circ$C:

$$m\cdot1\cdot30=32\,400\ \Rightarrow\ m=1080\ \text g$$` },
      { n: '2', tema: 'm02', tipo: 'practica', lab: 'lineas-de-campo', enunciado: r`Tres cargas están sobre el eje $x$: $Q_1=-40\ \mu$C en $x=-60$ cm y $Q_2=+40\ \mu$C en $x=-20$ cm. Determine el signo y la magnitud de $Q_3$, ubicada en $x=30$ cm, sabiendo que el campo eléctrico en el origen es cero.`, resolucion: r`En el origen:
- $Q_1$ (negativa, a la izquierda) atrae: su campo apunta a $-x$, de módulo $k\frac{40\,\mu\text C}{0{,}36}$.
- $Q_2$ (positiva, a la izquierda) repele: apunta a $+x$, de módulo $k\frac{40\,\mu\text C}{0{,}04}$, mucho mayor.

Neto de ambas: $+x$, de módulo $k\cdot40\,\mu\text C\left(\frac1{0{,}04}-\frac1{0{,}36}\right)=k\cdot40\,\mu\text C\cdot22{,}2$.

$Q_3$ debe dar un campo hacia $-x$ en el origen estando a la derecha: tiene que **repeler**, así que es **positiva**:

$$\frac{kQ_3}{0{,}09}=k\cdot40\,\mu\text C\cdot22{,}2\ \Rightarrow\ Q_3=+80\ \mu\text C$$` },
      { n: '3', tema: 'm07', tipo: 'practica', lab: 'kirchhoff', enunciado: r`Una fem $\varepsilon$ alimenta dos ramas en paralelo: la izquierda con $2R$ arriba y $R$ abajo; la derecha con $R$ arriba y $R$ abajo. Un medidor M de resistencia nula une los puntos medios de ambas ramas. ¿Cuál es la lectura de M en términos de $\varepsilon$ y $R$?`, resolucion: r`Con M de resistencia nula, los dos puntos medios son un mismo nodo. Arriba quedan $2R\parallel R=\frac23R$ y abajo $R\parallel R=\frac R2$, en serie:

$$I=\frac{\varepsilon}{\frac23R+\frac12R}=\frac{6\varepsilon}{7R}$$

Tensión arriba: $I\cdot\frac23R=\frac47\varepsilon$; por $2R$ pasan $\frac{2\varepsilon}{7R}$ y por la $R$ de arriba a la derecha $\frac{4\varepsilon}{7R}$. Tensión abajo: $\frac37\varepsilon$; por cada $R$ de abajo, $\frac{3\varepsilon}{7R}$.

En el nodo medio izquierdo entran $\frac{2\varepsilon}{7R}$ y salen $\frac{3\varepsilon}{7R}$: la diferencia viene por el medidor, de derecha a izquierda:

$$I_M=\frac{\varepsilon}{7R}$$` },
      { n: '4', tema: 'm12', tipo: 'practica', enunciado: r`Un toroide de $1000$ vueltas de sección cuadrada ($3$ cm de arista) tiene radio interior $10$ cm y exterior $13$ cm. En su eje hay un hilo infinito con corriente $i(t)=10\ \text A\,\operatorname{sen}(31{,}4\ \text s^{-1}t)$. A) Calcule el valor máximo del flujo magnético en el toroide. B) Calcule el coeficiente de inducción mutua de los dos circuitos. C) Calcule la fem inducida entre los terminales del toroide en función del tiempo.`, resolucion: r`El campo del hilo a distancia $r$ es $\frac{\mu_0i}{2\pi r}$ y atraviesa la sección del toroide (alto $h=0{,}03$ m, de $a$ a $b$):

$$\Phi=\int_a^b\frac{\mu_0i}{2\pi r}h\,dr=\frac{\mu_0ih}{2\pi}\ln\frac ba$$

**A)** $\Phi_{max}=(2\cdot10^{-7})(10)(0{,}03)\ln1{,}3=1{,}57\cdot10^{-8}$ Wb por espira ($1{,}57\cdot10^{-5}$ Wb concatenado por las 1000).

**B)** $M=\frac{N\Phi}{i}=\frac{N\mu_0h}{2\pi}\ln\frac ba=1{,}57\cdot10^{-6}$ H.

**C)** $\varepsilon=-M\frac{di}{dt}=-(1{,}57\cdot10^{-6})(10)(31{,}4)\cos(31{,}4t)=-4{,}94\cdot10^{-4}\cos(31{,}4t)$ V.` },
      { n: '5', tema: 'm17', tipo: 'practica', lab: 'interferencia', enunciado: r`Un haz de luz monocromática incide perpendicularmente sobre cuatro rendijas muy estrechas e igualmente espaciadas. Si se cubren las dos centrales, el máximo de cuarto orden se ve bajo un ángulo de $30^\circ$. ¿Bajo qué ángulo se ve el máximo de primer orden si se cubren las dos de los extremos (dejando las dos del centro abiertas)?`, resolucion: r`Sea $d$ la separación entre rendijas vecinas. Cubriendo las centrales quedan la 1 y la 4, separadas $3d$:

$$3d\operatorname{sen}30^\circ=4\lambda\ \Rightarrow\ d=\frac{8\lambda}{3}$$

Cubriendo las extremas quedan la 2 y la 3, separadas $d$:

$$\operatorname{sen}\theta=\frac{\lambda}{d}=\frac38\ \Rightarrow\ \theta\approx22{,}0^\circ$$` },
    ],
  },
  {
    id: 'f-2010-09-23', fecha: '23 de septiembre de 2010',
    nota: 'Condición mínima: el 50 % de los problemas 1, 2 y 3 y el 50 % de los problemas 4 y 5.',
    items: [
      { n: '1', tema: 'm05', tipo: 'practica', lab: 'capacitor', enunciado: r`Un capacitor plano de área $A=300\ \text{cm}^2$ está parcialmente lleno con un dieléctrico de espesor $a=2$ mm y permitividad $\varepsilon_1=3\varepsilon_0$; el resto, de espesor $b=2$ mm, es aire. Está conectado a una fuente de $60$ V. Calcule a) la capacitancia y b) la carga. Se desconecta la fuente y se retira el dieléctrico. Calcule c) la carga, d) la capacitancia, e) la diferencia de potencial y f) el campo entre placas.`, resolucion: r`Las dos capas están en serie: $C=\frac{\varepsilon_0A}{\frac a3+b}$.

**a)** $C=\frac{(8{,}85\cdot10^{-12})(0{,}03)}{0{,}667\cdot10^{-3}+2\cdot10^{-3}}=99{,}6$ pF. **b)** $Q=CV=5{,}97$ nC.

Al desconectar, la carga queda atrapada:
**c)** $Q=5{,}97$ nC. **d)** $C_0=\frac{\varepsilon_0A}{a+b}=66{,}4$ pF. **e)** $V=\frac{Q}{C_0}=90$ V (subió). **f)** $E=\frac Vd=\frac{90}{0{,}004}=2{,}25\cdot10^4$ V/m.` },
      { n: '2', tema: 'm03', tipo: 'practica', lab: 'gauss', enunciado: r`Dentro de una esfera conductora hueca de radio $b=20$ cm con carga $Q_2$ hay una esfera conductora maciza concéntrica de radio $a=5$ cm y carga $Q_1$. En $r_A=10$ cm el campo es $E_A=10\,000$ N/C "hacia afuera" y en $r_B=30$ cm es $E_B=5000$ N/C "hacia adentro". a) Encuentre el signo y la magnitud de la carga de ambas esferas. b) Calcule la diferencia de potencial entre las esferas.`, resolucion: r`**a)** Gauss en $r_A$ encierra solo $Q_1$: $Q_1=\frac{E_Ar_A^2}{k}=\frac{10^4\cdot0{,}01}{8{,}99\cdot10^9}=+11{,}1$ nC (hacia afuera: positiva).

En $r_B$ encierra $Q_1+Q_2$, y el campo entra: $Q_1+Q_2=-\frac{5000\cdot0{,}09}{8{,}99\cdot10^9}=-50{,}1$ nC, así que $Q_2=-61{,}2$ nC.

**b)** Entre las esferas solo actúa $Q_1$: $V_a-V_b=kQ_1\left(\frac1a-\frac1b\right)=(8{,}99\cdot10^9)(11{,}1\cdot10^{-9})(20-5)\approx1500$ V; la interior está a mayor potencial.` },
      { n: '3', tema: 'm08', tipo: 'practica', lab: 'kirchhoff', enunciado: r`En el circuito, una fem $E=40$ V alimenta dos ramas en paralelo: $R_1=30\ \Omega$ en serie con $R_2=50\ \Omega$, y $R_3=15\ \Omega$ en serie con $R_4=25\ \Omega$. Un capacitor $C=20\ \mu$F está conectado en paralelo con $R_4$. Pasado el transitorio, calcule a) las corrientes en cada rama y b) la carga del capacitor.`, resolucion: r`En régimen estacionario por el capacitor no circula corriente.

**a)** $I_{12}=\frac{40}{80}=0{,}5$ A; $I_{34}=\frac{40}{40}=1$ A; por la fuente $1{,}5$ A.

**b)** El capacitor tiene la tensión de $R_4$: $V_C=1\cdot25=25$ V, $q=CV_C=(20\cdot10^{-6})(25)=5{,}0\cdot10^{-4}$ C.` },
      { n: '4', tema: 'm11', tipo: 'practica', lab: 'faraday', enunciado: r`Una espira cuadrada de $50$ cm de lado y resistencia $10\ \Omega$ está en el mismo plano que un conductor recto e indefinido, con su lado más cercano a $75$ cm de él. Por el conductor circula $i(t)=100\ \text A\,\operatorname{sen}(314\ \text s^{-1}t)$. Determine a) el flujo magnético en la espira y b) la fem $e(t)$ inducida.`, resolucion: r`**a)** El campo del hilo varía con la distancia: se integra en franjas de ancho $dr$ y alto $a=0{,}5$ m:

$$\Phi=\int_{0{,}75}^{1{,}25}\frac{\mu_0i}{2\pi r}a\,dr=\frac{\mu_0ia}{2\pi}\ln\frac{1{,}25}{0{,}75}=5{,}11\cdot10^{-6}\operatorname{sen}(314t)\ \text{Wb}$$

**b)** $e=-\frac{d\Phi}{dt}=-1{,}60\cdot10^{-3}\cos(314t)$ V; la corriente inducida tiene amplitud $0{,}16$ mA.` },
      { n: '5', tema: 'm19', tipo: 'practica', lab: 'ciclo-pv', enunciado: r`Un gas ideal monoatómico está a $930$ K, $300$ kPa y ocupa $6$ L. Se comprime isobáricamente hasta $2$ L y luego se expande isotérmicamente hasta su volumen inicial. a) Represente en un diagrama p–V. b) Calcule la presión final. c) Calcule calor, trabajo y variación de energía interna en cada evolución. ($c_v=\frac32R$)`, resolucion: r`$n=\frac{pV}{RT}=\frac{300\,000\cdot0{,}006}{8{,}31\cdot930}=0{,}233$ mol.

**Isobárica** 6 L → 2 L: $T_2=930\cdot\frac26=310$ K. $W=p\Delta V=-1200$ J; $\Delta U=nc_v\Delta T=-1800$ J; $Q=-3000$ J (cede calor).

**Isotérmica** 2 L → 6 L a 310 K: **b)** $p_3=\frac{300\cdot2}{6}=100$ kPa. **c)** $\Delta U=0$; $W=Q=nRT\ln3=p_2V_2\ln3=600\cdot1{,}099=659$ J.` },
    ],
  },
  {
    id: 'f-2010-08-04', fecha: '4 de agosto de 2010',
    nota: 'Condición mínima: el 50 % de los problemas 1, 2 y 3 y el 50 % de los problemas 4 y 5.',
    items: [
      { n: '1', tema: 'm19', tipo: 'practica', lab: 'ciclo-pv', enunciado: r`Dos moles de un gas ideal con $c_v=\frac32R$ están a $27\,^\circ$C y ocupan $20$ L. El gas se expande a presión constante hasta duplicar su volumen y luego adiabáticamente hasta retomar su temperatura inicial. a) Represéntelo en un diagrama p–V y calcule: b) la variación total de energía interna; c) el calor total intercambiado (absorbido o cedido); d) el trabajo total realizado por el gas. ($R=8{,}31$ J/mol·K)`, resolucion: r`$T_1=300$ K. Isobárica de 20 a 40 L: $T_2=600$ K. Adiabática hasta $T_3=300$ K: $V_3=V_2\left(\frac{T_2}{T_3}\right)^{1/(\gamma-1)}=40\cdot2^{1{,}5}=113$ L.

**b)** $T_3=T_1$, así que $\Delta U_{total}=0$.

**c)** Solo la isobárica intercambia calor: $Q=nc_p\Delta T=2\cdot\frac52\cdot8{,}31\cdot300=12\,465$ J, **absorbido**.

**d)** $W=Q-\Delta U=12\,465$ J (isobárica: $nR\Delta T=4986$ J; adiabática: $nc_v\Delta T=7479$ J).` },
      { n: '2', tema: 'm02', tipo: 'practica', enunciado: r`Una varilla delgada en forma de semicircunferencia de radio $R$ está en el plano $XY$. La mitad superior tiene $+Q$ y la inferior $-Q$, uniformemente distribuidas. Determine el vector campo eléctrico en el centro P.`, resolucion: r`Cada cuarto tiene $\lambda=\frac{Q}{\pi R/2}=\frac{2Q}{\pi R}$. Un elemento $dq=\lambda R\,d\theta$ da en el centro $dE=\frac{k\lambda}{R}d\theta$.

Las componentes **horizontales** del cuarto positivo y del negativo se cancelan (uno empuja y el otro atrae, en direcciones simétricas). Las **verticales** se suman: el positivo de arriba empuja hacia abajo y el negativo de abajo atrae hacia abajo. Cada cuarto aporta $\frac{k\lambda}{R}\int_0^{\pi/2}\cos\alpha\,d\alpha=\frac{k\lambda}{R}$:

$$\vec E=-\frac{2k\lambda}{R}\hat\jmath=-\frac{4kQ}{\pi R^2}\hat\jmath=-\frac{Q}{\pi^2\varepsilon_0R^2}\hat\jmath$$

Apunta de la mitad positiva hacia la negativa.` },
      { n: '4', tema: 'm12', tipo: 'practica', enunciado: r`Un toroide de radio interior $a$, exterior $b$ y sección transversal $h^2$ tiene $N$ espiras por las que circula $i$; su núcleo es vacío. Calcule a) el flujo $\Phi_B$ concatenado por la sección transversal y b) el coeficiente de autoinducción $L$.`, resolucion: r`Por Ampère, dentro del toroide $B=\frac{\mu_0Ni}{2\pi r}$.

**a)** $\Phi_B=\int_a^b\frac{\mu_0Ni}{2\pi r}h\,dr=\frac{\mu_0Nih}{2\pi}\ln\frac ba$

**b)** $L=\frac{N\Phi_B}{i}=\frac{\mu_0N^2h}{2\pi}\ln\frac ba$` },
      { n: '5', tema: 'm17', tipo: 'practica', lab: 'interferencia', enunciado: r`Un rayo luminoso ilumina dos rendijas paralelas separadas $0{,}6$ mm. Sobre una pantalla a $35$ cm se recogen las franjas de interferencia. La distancia entre dos franjas oscuras consecutivas es $0{,}26$ mm. a) Realice un diagrama de la experiencia de Young. b) Calcule la longitud de onda de la luz incidente.`, resolucion: r`Las franjas (claras u oscuras) consecutivas están separadas $\Delta y=\frac{\lambda L}{d}$:

$$\lambda=\frac{\Delta y\,d}{L}=\frac{(0{,}26\cdot10^{-3})(0{,}6\cdot10^{-3})}{0{,}35}=4{,}46\cdot10^{-7}\ \text m\approx446\ \text{nm}$$

(violeta-azul).` },
    ],
  },
  {
    id: 'f-2010-07-20', fecha: '20 de julio de 2010',
    nota: 'Condición mínima: el 50 % de los dos primeros problemas y el 50 % de los problemas 3, 4 y 5.',
    items: [
      { n: '1', tema: 'm19', tipo: 'practica', lab: 'ciclo-pv', enunciado: r`Un gas ideal sigue el proceso iaf: en la evolución isobárica ia recibe $Q=11$ kJ y en la isocórica af $Q=12$ kJ. Con $p_i=100$ kPa, $p_f=200$ kPa, $V_i=20$ L, $V_f=60$ L y $U_i=2$ kJ, determine a) la energía interna $U_f$ y b) el trabajo y el calor en la evolución fi (recta de f a i).`, resolucion: r`**a)** $W_{ia}=p_i(V_f-V_i)=100\cdot0{,}04=4$ kJ; $\Delta U_{ia}=11-4=7$ kJ. En af, $W=0$: $\Delta U_{af}=12$ kJ. $U_f=2+7+12=21$ kJ.

**b)** La recta de f a i es una compresión; el trabajo es menos el área del trapecio: $W_{fi}=-\frac{(100+200)\,\text{kPa}}{2}\cdot0{,}04\ \text m^3=-6$ kJ. $\Delta U_{fi}=2-21=-19$ kJ. $Q_{fi}=\Delta U+W=-25$ kJ (cedido).` },
      { n: '2', tema: 'm17', tipo: 'practica', lab: 'interferencia', enunciado: r`Sobre tres rendijas estrechas y equiespaciadas incide luz láser. Cubriendo una de las extremas, el máximo de primer orden está a $1^\circ$ de la normal. Si se cubre la central y se dejan las otras dos, ¿a qué ángulo está el máximo de primer orden?`, resolucion: r`Con una extrema cubierta quedan dos vecinas separadas $d$: $d\operatorname{sen}1^\circ=\lambda$. Cubriendo la central quedan las extremas, separadas $2d$:

$$\operatorname{sen}\theta=\frac{\lambda}{2d}=\frac{\operatorname{sen}1^\circ}{2}\ \Rightarrow\ \theta\approx0{,}5^\circ$$` },
      { n: '3', tema: 'm04', tipo: 'practica', enunciado: r`AB es un plano conductor infinito con $\sigma=1\ \mu\text C/\text m^2$. En el punto Q hay una carga de $-0{,}2\ \mu$C. Calcule el trabajo de las fuerzas del campo para desplazar $+0{,}1\ \mu$C de $P_1$ a $P_2$. $P_1$ está a $d_1=0{,}8$ m del plano; Q está a $d_2=0{,}1$ m debajo de $P_1$; $P_2$ está a $d_3=0{,}4$ m de Q, alejándose del plano.`, resolucion: r`Se suman los trabajos de los dos campos (superposición).

**Plano:** campo uniforme $E=\frac{\sigma}{2\varepsilon_0}=5{,}65\cdot10^4$ V/m alejándose del plano. De $P_1$ a $P_2$ la carga se aleja $0{,}4$ m: $W_1=qE\Delta x=(10^{-7})(5{,}65\cdot10^4)(0{,}4)=2{,}26\cdot10^{-3}$ J.

**Carga Q:** $W_2=q(V_{P1}-V_{P2})=qkQ\left(\frac1{0{,}1}-\frac1{0{,}4}\right)=(10^{-7})(8{,}99\cdot10^9)(-2\cdot10^{-7})(7{,}5)=-1{,}35\cdot10^{-3}$ J (la carga positiva se aleja de la negativa: el campo frena).

**Total:** $W\approx9{,}1\cdot10^{-4}$ J.` },
      { n: '5', tema: 'm11', tipo: 'practica', enunciado: r`Un solenoide de $10$ espiras/cm es recorrido por una corriente de amplitud $I_0=30$ A y $50$ Hz que genera en su interior un campo uniforme. Una bobina de $50$ espiras y $4\ \text{cm}^2$ está en su interior. a) Exprese el campo en función del tiempo. b) Determine la fem inducida en la bobina cuando el ángulo $\beta$ entre los ejes vale $0^\circ$, $45^\circ$ y $90^\circ$.`, resolucion: r`**a)** $B=\mu_0nI=(4\pi\cdot10^{-7})(1000)(30)\operatorname{sen}(100\pi t)=0{,}0377\operatorname{sen}(314t)$ T.

**b)** $\varepsilon=-NA\cos\beta\frac{dB}{dt}=-(50)(4\cdot10^{-4})(0{,}0377)(314)\cos\beta\cos(314t)=-0{,}237\cos\beta\cos(314t)$ V. Amplitudes: $0{,}237$ V con $\beta=0^\circ$; $0{,}167$ V con $45^\circ$; $0$ con $90^\circ$ (el campo no atraviesa la bobina).` },
    ],
  },
  {
    id: 'f-2010-05-27', fecha: '27 de mayo de 2010',
    nota: 'Condición mínima: el 50 % de los tres primeros problemas y el 50 % de los problemas 4 y 5.',
    items: [
      { n: '1', tema: 'm19', tipo: 'practica', lab: 'calorimetria', enunciado: r`En un calorímetro de equivalente en agua $\pi=80$ g que contiene $100$ g de agua a $20\,^\circ$C se introducen $80$ g de hielo a $-30\,^\circ$C. Calcule el estado final (temperatura y, si es la de cambio de estado, las masas en equilibrio). $c_{hielo}=0{,}5$ cal/g°C, $c_{agua}=1$ cal/g°C, $L_f=80$ cal/g.`, resolucion: r`El calorímetro cuenta como $80$ g de agua más: $180$ g a $20\,^\circ$C, que hasta $0\,^\circ$C pueden ceder $3600$ cal.

El hielo necesita $80\cdot0{,}5\cdot30=1200$ cal para llegar a $0\,^\circ$C y $6400$ cal para fundirse. Alcanza para calentarlo pero no para fundirlo todo:

$$m_{fundida}=\frac{3600-1200}{80}=30\ \text g$$

Estado final: $0\,^\circ$C, con $130$ g de agua y $50$ g de hielo.` },
      { n: '3', tema: 'm05', tipo: 'practica', lab: 'capacitor', enunciado: r`Un capacitor de placas planas paralelas separadas $5$ mm y de $2\ \text m^2$ está en el vacío, conectado a $1000$ V. Calcule a) la capacitancia y b) el campo eléctrico. Sin desconectar la fuente se introduce entre las placas un dieléctrico con $\varepsilon_r=2{,}5$. Calcule c) la carga del capacitor y d) el campo en el dieléctrico.`, resolucion: r`**a)** $C_0=\frac{\varepsilon_0A}{d}=\frac{(8{,}85\cdot10^{-12})(2)}{0{,}005}=3{,}54$ nF. **b)** $E_0=\frac Vd=2\cdot10^5$ V/m.

Con la fuente conectada, **V se mantiene**: **c)** $C=\varepsilon_rC_0=8{,}85$ nF y $Q=CV=8{,}85\ \mu$C (la fuente aporta más carga). **d)** $E=\frac Vd=2\cdot10^5$ V/m: no cambia, porque $V$ y $d$ son los mismos.` },
      { n: '5', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`Un circuito RLC serie está alimentado con un generador de CA de $f=400$ Hz y $50$ V eficaces. Con $R=30\ \Omega$, $L=20$ mH y $C=20\ \mu$F calcule: a) la impedancia y la corriente eficaz; b) el diagrama vectorial de tensiones (calculándolas); c) la potencia disipada.`, resolucion: r`$X_L=2\pi fL=50{,}3\ \Omega$; $X_C=\frac1{2\pi fC}=19{,}9\ \Omega$.

**a)** $Z=\sqrt{30^2+(50{,}3-19{,}9)^2}=42{,}7\ \Omega$; $I=\frac{50}{42{,}7}=1{,}17$ A.

**b)** $V_R=35{,}1$ V (en fase con $I$), $V_L=58{,}9$ V (adelanta 90°), $V_C=23{,}3$ V (atrasa 90°). La tensión total adelanta a la corriente $\varphi=\operatorname{arctg}\frac{30{,}4}{30}=45{,}4^\circ$: el circuito es inductivo.

**c)** $P=I^2R=41{,}1$ W.` },
    ],
  },
];

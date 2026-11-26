// Parciales, recuperatorios y pre-parciales de Física II (UTN-FRT), transcriptos de las fotos y resueltos.
// Solo se incluyen los ítems cuya figura se puede describir con palabras sin ambigüedad.
const r = String.raw;

export const PARCIALES_TOMADOS = [
  {
    id: 'p2-2026-11-13-t1', parcial: 2, fecha: '13 de noviembre de 2026', detalle: 'Tema 1, comisión 2K2',
    items: [
      { n: '1', tema: 'm09', tipo: 'practica', lab: 'carga-en-campo-b', enunciado: r`Un electrón penetra normalmente en un campo magnético uniforme de inducción $15\cdot10^{-4}$ T, entrante a la hoja. Su velocidad es de $2\cdot10^6$ m/s hacia arriba. Calcular: a) la fuerza (intensidad y dirección) sobre el electrón; b) el radio de la órbita; c) el tiempo que tarda en recorrerla. ($e=-1{,}6\cdot10^{-19}$ C; $m_e=9{,}1\cdot10^{-31}$ kg)`, resolucion: r`**a)** $F=|q|vB=(1{,}6\cdot10^{-19})(2\cdot10^6)(15\cdot10^{-4})=4{,}8\cdot10^{-16}$ N. Dirección: $\vec v\times\vec B=\hat\jmath\times(-\hat k)=-\hat\imath$; como la carga es negativa, $\vec F$ apunta a $+\hat\imath$ (hacia la derecha).

**b)** $r=\frac{mv}{|q|B}=\frac{(9{,}1\cdot10^{-31})(2\cdot10^6)}{(1{,}6\cdot10^{-19})(15\cdot10^{-4})}=7{,}58\cdot10^{-3}$ m.

**c)** $T=\frac{2\pi m}{|q|B}=\frac{2\pi r}{v}=2{,}38\cdot10^{-8}$ s.` },
      { n: '2', tema: 'm13', tipo: 'practica', lab: 'rl', enunciado: r`Un circuito RL serie se conecta a una fuente DC y la corriente alcanza el tercio de $I_0$ en $0{,}3$ s. Calcule: a) la constante de tiempo; b) la autoinducción $L$, si la resistencia es de $50\ \Omega$.`, resolucion: r`$\frac13=1-e^{-t/\tau}\Rightarrow e^{-t/\tau}=\frac23\Rightarrow\tau=\frac{0{,}3}{\ln1{,}5}=0{,}740$ s. $L=\tau R=37{,}0$ H.` },
      { n: '3', tema: 'm11', tipo: 'practica', lab: 'faraday', enunciado: r`Una bobina de $50$ vueltas de alambre en forma cuadrada está en un campo magnético uniforme; la normal a su plano forma $30^\circ$ con el campo. Cuando el campo aumenta uniformemente de $200\ \mu$T a $600\ \mu$T en $0{,}4$ s, se induce una fem de $80$ mV. ¿Cuál es la longitud total del alambre?`, resolucion: r`$\varepsilon=NA\cos30^\circ\frac{\Delta B}{\Delta t}\Rightarrow A=\frac{0{,}080\cdot0{,}4}{50\cdot400\cdot10^{-6}\cos30^\circ}=1{,}85\ \text m^2$. Lado $\ell=1{,}36$ m; alambre $50\cdot4\ell\approx272$ m.

> En el 2.º parcial de la 2K4 el mismo problema dice $200$ a $600$ **mT**: entonces $A=1{,}85\cdot10^{-3}$ m², lado $4{,}30$ cm y alambre de $8{,}60$ m.` },
      { n: '4', tema: 'm10', tipo: 'practica', lab: 'campo-de-corrientes', enunciado: r`Dos alambres paralelos muy largos llevan $10{,}0$ A (A) y $15{,}0$ A (B) en la misma dirección, a $1{,}0$ m uno del otro. a) ¿Cuál es la magnitud de la fuerza que A ejerce sobre B? b) ¿Y B sobre A? c) Compare y explique con esquemas.`, resolucion: r`**a)** $\frac FL=\frac{\mu_0I_AI_B}{2\pi d}=\frac{(2\cdot10^{-7})(10)(15)}{1}=3{,}0\cdot10^{-5}$ N/m.

**b)** El mismo valor. **c)** Son un par acción-reacción: iguales y opuestas, aunque las corrientes sean distintas. Con corrientes del mismo sentido son de **atracción**.` },
    ],
  },
  {
    id: 'p2-2026-11-13-t2', parcial: 2, fecha: '13 de noviembre de 2026', detalle: 'Tema 2, comisión 2K2',
    items: [
      { n: '1', tema: 'm11', tipo: 'practica', lab: 'faraday', enunciado: r`Una espira cuadrada de cobre de $5{,}0\times5{,}0$ cm tiene su normal paralela a un campo magnético uniforme que varía así: de $0$ a $0{,}05$ s sube linealmente de $0$ a $10$ mT (I); de $0{,}05$ a $0{,}15$ s se mantiene en $10$ mT (II); de $0{,}15$ a $0{,}25$ s baja linealmente a $0$ (III). a) Encuentre la fem inducida en cada intervalo. b) Grafique la fem entre $0$ y $0{,}25$ s.`, resolucion: r`$A=2{,}5\cdot10^{-3}$ m² y $\varepsilon=-A\frac{dB}{dt}$:

- I: $\frac{dB}{dt}=0{,}2$ T/s, $\varepsilon=-5{,}0\cdot10^{-4}$ V.
- II: $B$ constante, $\varepsilon=0$.
- III: $\frac{dB}{dt}=-0{,}1$ T/s, $\varepsilon=+2{,}5\cdot10^{-4}$ V.

La gráfica es escalonada: un escalón de $0{,}5$ mV de un signo, cero, y un escalón de $0{,}25$ mV del signo opuesto (Lenz: la corriente se invierte cuando el flujo pasa de crecer a decrecer).` },
      { n: '2', tema: 'm10', tipo: 'practica', enunciado: r`Un alambre largo conduce $5{,}00$ A hacia arriba. Un electrón viaja paralelo al alambre, a $2{,}00$ cm, con $1{,}50\cdot10^7$ m/s hacia arriba. a) ¿Magnitud y dirección de la fuerza sobre el electrón? b) ¿Y si fuera un protón con la misma velocidad? c) Dibuje las trayectorias.`, resolucion: r`$B=\frac{\mu_0I}{2\pi d}=\frac{(2\cdot10^{-7})(5)}{0{,}02}=5{,}0\cdot10^{-5}$ T.

**a)** $F=evB=(1{,}6\cdot10^{-19})(1{,}5\cdot10^7)(5\cdot10^{-5})=1{,}2\cdot10^{-16}$ N. Un electrón moviéndose en el sentido de $I$ equivale a una corriente **opuesta**: se **aleja** del alambre.

**b)** Protón: misma magnitud, hacia el alambre (corrientes paralelas se atraen).

**c)** Ambos se curvan en arcos; el electrón con radio mucho menor ($m_e\ll m_p$).` },
      { n: '3', tema: 'm13', tipo: 'practica', lab: 'rl', enunciado: r`Un circuito serie tiene una batería de $24$ V, un interruptor, una resistencia de $20\ \Omega$ y un inductor: un solenoide de $30$ cm de largo con $1000$ vueltas y radio $2{,}5$ cm. Después de cerrar, la corriente tarda $0{,}28$ ms en llegar a la mitad de su máximo. a) Encuentre la inductancia. b) Encuentre la tensión en la resistencia cuando la fem inducida es la mitad de su máximo. c) Encuentre la corriente máxima.`, resolucion: r`**a)** $\tau=\frac{0{,}28\cdot10^{-3}}{\ln2}=4{,}04\cdot10^{-4}$ s, $L=\tau R=8{,}1$ mH. (Con la geometría, $\frac{\mu_0N^2\pi r^2}{\ell}=8{,}2$ mH: coinciden.)

**b)** En todo instante $v_R+v_L=24$ V. La fem inducida máxima es $24$ V (al cerrar); a la mitad, $v_L=12$ V y $v_R=12$ V.

**c)** $I_{max}=\frac{24}{20}=1{,}2$ A.` },
      { n: '4', tema: 'm09', tipo: 'practica', enunciado: r`Un alambre con corriente $I=20$ A está perpendicular a un campo magnético $B$. a) Si su densidad lineal es $30$ g/m, ¿cuánto debe valer $B$ para equilibrar su peso? b) Si se agregan $50$ g por metro, ¿cómo variaría la corriente? c) ¿En qué posición hay que colocar el alambre para que no sienta el campo?`, resolucion: r`**a)** $BIL=\lambda Lg\Rightarrow B=\frac{\lambda g}{I}=\frac{0{,}030\cdot9{,}8}{20}=14{,}7$ mT.

**b)** Con $\lambda'=80$ g/m: $I=\frac{\lambda'g}{B}=53{,}3$ A.

**c)** Paralelo al campo: $\vec L\times\vec B=0$.` },
    ],
  },
  {
    id: 'p2-2026-11-13-2k1', parcial: 2, fecha: '13 de noviembre de 2026', detalle: 'Tema 2, comisión 2K1 (2,5 puntos cada ejercicio)',
    items: [
      { n: '1', tema: 'm11', tipo: 'practica', lab: 'faraday', enunciado: r`Una espira de $22$ cm de diámetro está inicialmente perpendicular a un campo de $1{,}5$ T. Gira en $0{,}2$ s y su plano queda paralelo al campo. ¿Cuál es la fem inducida promedio?`, resolucion: r`El flujo pasa de $BA$ a $0$: $\varepsilon=\frac{B\pi r^2}{\Delta t}=\frac{1{,}5\cdot\pi\cdot0{,}11^2}{0{,}2}=0{,}285$ V.` },
      { n: '2', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`¿Cuál es la reactancia de un capacitor de $86\ \mu$F conectado a $22$ kV eficaces y $660$ Hz? a) Determine la corriente eficaz.`, resolucion: r`$X_C=\frac{1}{2\pi fC}=\frac1{2\pi\cdot660\cdot86\cdot10^{-6}}=2{,}80\ \Omega$. **a)** $I_{ef}=\frac{22\,000}{2{,}80}\approx7{,}85\cdot10^3$ A.` },
      { n: '3', tema: 'm15', tipo: 'practica', lab: 'transformador', enunciado: r`El voltaje de salida de un transformador de $S=75$ VA es de $12$ V y la corriente de entrada es de $22$ A. a) ¿Es elevador o reductor? b) ¿Cuál es la relación de transformación?`, resolucion: r`Ideal: $S=V_1I_1=V_2I_2$. $V_1=\frac{75}{22}=3{,}41$ V e $I_2=\frac{75}{12}=6{,}25$ A.

**a)** Como $V_2>V_1$, es **elevador**. **b)** $\frac{N_2}{N_1}=\frac{V_2}{V_1}=\frac{12}{3{,}41}=3{,}52$.` },
      { n: '4', tema: 'm16', tipo: 'teoria', lab: 'onda-em', enunciado: r`Escriba las ecuaciones espacio-temporales del campo eléctrico y del campo magnético de una onda electromagnética y describa las magnitudes físicas y sus unidades. a) ¿Son proporcionales los módulos de los campos? Describa el parámetro que los vincula.`, resolucion: r`Para una onda plana que viaja en $+x$, polarizada con $\vec E$ en $y$:

$$\vec E=E_{max}\cos(kx-\omega t)\,\hat\jmath,\qquad\vec B=B_{max}\cos(kx-\omega t)\,\hat k$$

$E$ en V/m, $B$ en T, $k=\frac{2\pi}\lambda$ número de onda (rad/m), $\omega=2\pi f$ frecuencia angular (rad/s), $x$ en m, $t$ en s. $\vec E$, $\vec B$ y la dirección de propagación son mutuamente perpendiculares y $\vec E\times\vec B$ apunta hacia donde viaja la onda.

**a)** Sí, en todo punto e instante: $E=cB$, con $c=\frac\omega k=\frac1{\sqrt{\mu_0\varepsilon_0}}=3\cdot10^8$ m/s. Están en fase.` },
    ],
  },
  {
    id: 'p2-2026-11-11-2k4', parcial: 2, fecha: '11 de noviembre de 2026', detalle: 'Comisión 2K4 (puntaje por ítem)',
    items: [
      { n: '1', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`(1 punto) Un RLC serie tiene $R=150\ \Omega$, $L=20{,}0$ mH, $V_{max}=20{,}0$ V y $\omega=5000\ \text s^{-1}$. Determine la capacitancia para que la corriente sea máxima.`, resolucion: r`Corriente máxima = resonancia: $X_L=X_C\Rightarrow C=\frac1{\omega^2L}=\frac1{(5000)^2(0{,}020)}=2{,}00\ \mu$F.` },
      { n: '2', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`(2 puntos) En un RLC serie, $I_{max}=9{,}00$ A, $V_{max}=180$ V y la corriente adelanta $37{,}0^\circ$ al voltaje. a) ¿Cuál es la resistencia total? b) Calcule la reactancia $X_L-X_C$.`, resolucion: r`$Z=\frac{180}{9}=20\ \Omega$. **a)** $R=Z\cos37^\circ=16{,}0\ \Omega$. **b)** Si la corriente adelanta, el circuito es capacitivo: $X_L-X_C=-Z\operatorname{sen}37^\circ=-12{,}0\ \Omega$.` },
      { n: '3', tema: 'm12', tipo: 'practica', enunciado: r`(1 punto) Un inductor solenoidal tiene $420$ vueltas, $16{,}0$ cm de longitud y $3{,}00\ \text{cm}^2$ de sección. ¿Qué rapidez uniforme de disminución de la corriente induce una fem de $175\ \mu$V?`, resolucion: r`$L=\frac{\mu_0N^2A}{\ell}=\frac{(4\pi\cdot10^{-7})(420)^2(3\cdot10^{-4})}{0{,}16}=4{,}16\cdot10^{-4}$ H. $\left|\frac{di}{dt}\right|=\frac{\varepsilon}{L}=0{,}421$ A/s.` },
      { n: '4', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`(1 punto) Una fuente $v=100\ \text V\operatorname{sen}(1000t)$ alimenta un RLC serie con $R=400\ \Omega$, $C=5{,}00\ \mu$F y $L=0{,}500$ H. ¿Cuánta energía disipa la resistencia en $600$ s?`, resolucion: r`$X_L=500\ \Omega$, $X_C=200\ \Omega$, $Z=\sqrt{400^2+300^2}=500\ \Omega$, $I_{max}=0{,}2$ A. $P=\frac12I_{max}^2R=8{,}0$ W. $E=Pt=4{,}8\cdot10^3$ J.` },
      { n: '5', tema: 'm14', tipo: 'practica', enunciado: r`(1 punto) Una fuente de CA produce un voltaje máximo de $100$ V y se conecta a un resistor de $24{,}0\ \Omega$. Un amperímetro y un voltímetro de CA ideales miden la corriente y el voltaje del resistor. ¿Qué indica cada uno?`, resolucion: r`Los instrumentos de CA miden valores eficaces: $V_{ef}=\frac{100}{\sqrt2}=70{,}7$ V e $I_{ef}=\frac{70{,}7}{24}=2{,}95$ A.` },
      { n: '6', tema: 'm18', tipo: 'practica', enunciado: r`(1 punto) En una recorrida por la base Marambio, un científico mide la temperatura y comprueba que el valor numérico coincide en las escalas Celsius y Fahrenheit. ¿Cuál fue el valor medido?`, resolucion: r`$T_F=\frac95T_C+32$; con $T_F=T_C=x$: $x=\frac95x+32\Rightarrow x=-40$. Fueron $-40\,^\circ$C $=-40\,^\circ$F.` },
      { n: '7', tema: 'm11', tipo: 'practica', lab: 'faraday', enunciado: r`(2 puntos) Dos rieles paralelos de resistencia despreciable, separados $10{,}0$ cm, están unidos por un resistor de $5{,}00\ \Omega$. Dos varillas de $10{,}0\ \Omega$ y $15{,}0\ \Omega$ deslizan sobre los rieles, una a cada lado del resistor, alejándose de él a $4{,}00$ m/s y $2{,}00$ m/s. Hay un campo de $0{,}0100$ T perpendicular al plano. Determine la corriente en el resistor de $5{,}00\ \Omega$.`, resolucion: r`Cada varilla es una fuente: $\varepsilon_1=B\ell v_1=4{,}0$ mV ($r_1=10\ \Omega$) y $\varepsilon_2=2{,}0$ mV ($r_2=15\ \Omega$). Por $q\vec v\times\vec B$, como se mueven en sentidos opuestos, sus polaridades son **opuestas** respecto de los rieles.

Los tres elementos están en paralelo entre los rieles. Con $V$ la tensión del riel de arriba respecto del de abajo:

$$\frac{V+4}{10}+\frac{V-2}{15}+\frac V5=0\ \Rightarrow\ V=-0{,}727\ \text{mV}$$

$$I=\frac{0{,}727\ \text{mV}}{5\ \Omega}\approx145\ \mu\text A$$` },
      { n: '8', tema: 'm11', tipo: 'practica', enunciado: r`(1 punto) Una bobina de $50$ vueltas en forma de cuadrado está en un campo magnético con su normal a $30{,}0^\circ$. Cuando el campo aumenta uniformemente de $200$ mT a $600$ mT en $0{,}400$ s, se induce una fem de $80{,}0$ mV. ¿Cuál es la longitud total del alambre?`, resolucion: r`$A=\frac{\varepsilon\Delta t}{N\Delta B\cos30^\circ}=\frac{0{,}08\cdot0{,}4}{50\cdot0{,}4\cdot0{,}866}=1{,}85\cdot10^{-3}$ m², lado $4{,}30$ cm, alambre $50\cdot4\cdot0{,}043=8{,}60$ m.` },
    ],
  },
  {
    id: 'pp2-2026-11-04', parcial: 2, fecha: '4 de noviembre de 2026', detalle: 'Pre-segundo parcial, comisión 2K4',
    items: [
      { n: '1', tema: 'm10', tipo: 'practica', enunciado: r`(2 puntos) Un alambre largo porta $5{,}00$ A. Un protón a $4{,}00$ mm del alambre viaja a $1500$ m/s paralelo a él y en el mismo sentido que la corriente. A) Encuentre el campo magnético del alambre en la posición del protón. B) Encuentre la fuerza magnética sobre el protón.`, resolucion: r`**A)** $B=\frac{\mu_0I}{2\pi d}=\frac{(2\cdot10^{-7})(5)}{0{,}004}=2{,}50\cdot10^{-4}$ T, perpendicular al plano alambre-protón (regla de la mano derecha).

**B)** $F=evB=(1{,}6\cdot10^{-19})(1500)(2{,}5\cdot10^{-4})=6{,}0\cdot10^{-20}$ N, **hacia el alambre** (una carga positiva que se mueve con la corriente se comporta como una corriente paralela: atracción).` },
      { n: '2', tema: 'm11', tipo: 'practica', lab: 'faraday', enunciado: r`(2 puntos) Una bobina de $25$ vueltas está enrollada en un marco cuadrado de $1{,}80$ cm de lado; su resistencia total es $0{,}350\ \Omega$. Un campo uniforme perpendicular al plano cambia uniformemente de $0$ a $0{,}500$ T en $0{,}800$ s. A) ¿Cuál es la fem inducida? B) ¿La corriente? C) ¿Su dirección?`, resolucion: r`**A)** $\varepsilon=NA\frac{\Delta B}{\Delta t}=25\cdot(0{,}018)^2\cdot\frac{0{,}5}{0{,}8}=5{,}06$ mV. **B)** $I=\frac{\varepsilon}{R}=14{,}5$ mA. **C)** Por Lenz, crea un campo opuesto al que crece: mirando desde donde apunta $\vec B$, circula en sentido **horario**.` },
      { n: '3', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`(1 punto) Un circuito contiene dos elementos, pero no se sabe si son resistor, bobina o condensador. Conectado a $220$ V y $50{,}0$ Hz, la corriente es de $3{,}60$ A y se retrasa $65{,}0^\circ$ respecto del voltaje. ¿Qué elementos son y cuáles son sus valores?`, resolucion: r`Corriente atrasada un ángulo entre 0° y 90°: hay **resistencia e inductancia**. $Z=\frac{220}{3{,}6}=61{,}1\ \Omega$; $R=Z\cos65^\circ=25{,}8\ \Omega$; $X_L=Z\operatorname{sen}65^\circ=55{,}4\ \Omega\Rightarrow L=\frac{55{,}4}{2\pi\cdot50}=0{,}176$ H.` },
    ],
  },
  {
    id: 'p2-2025-11-28-t3', parcial: 2, fecha: '28 de noviembre de 2025', detalle: 'Tema 3',
    items: [
      { n: '1', tema: 'm09', tipo: 'practica', lab: 'carga-en-campo-b', enunciado: r`Una batería de $150$ V está conectada a dos placas paralelas de $30{,}0\ \text{cm}^2$ separadas $10{,}0$ mm. Un haz de partículas alfa (carga $+2e$, masa $6{,}64\cdot10^{-27}$ kg), acelerado desde el reposo por $1{,}75$ kV, entra entre las placas perpendicular al campo eléctrico. ¿Qué campo magnético (magnitud y dirección) hace falta para que las partículas salgan sin desviarse? Haga un dibujo con velocidad, campos y fuerzas.`, resolucion: r`Velocidad: $\frac12mv^2=qV_{acel}\Rightarrow v=\sqrt{\frac{2(3{,}2\cdot10^{-19})(1750)}{6{,}64\cdot10^{-27}}}=4{,}11\cdot10^5$ m/s.

Campo eléctrico: $E=\frac{150}{0{,}010}=1{,}5\cdot10^4$ V/m.

Selector de velocidades: $qE=qvB\Rightarrow B=\frac Ev=36{,}5$ mT, perpendicular a $\vec v$ y a $\vec E$, orientado de modo que $q\vec v\times\vec B$ sea opuesta a $q\vec E$.` },
      { n: '2', tema: 'm10', tipo: 'practica', lab: 'campo-de-corrientes', enunciado: r`Un alambre recto largo sobre el eje $y$ transporta $I=5{,}00$ A en dirección $-y$. Además hay un campo uniforme $B_0=2{,}0\cdot10^{-6}$ T en $+x$. ¿Cuál es el campo total (magnitud y dirección) en el punto b $(x=1{,}00$ m, $z=0)$ del plano $xz$? Dibuje los campos parciales y el resultante.`, resolucion: r`Campo del alambre en b: $\frac{\mu_0I}{2\pi\cdot1}=1{,}0\cdot10^{-6}$ T. Dirección: $d\vec l\times\hat r=(-\hat\jmath)\times\hat\imath=+\hat k$.

$$\vec B=(2{,}0\,\hat\imath+1{,}0\,\hat k)\cdot10^{-6}\ \text T,\qquad|\vec B|=2{,}24\ \mu\text T$$

formando $26{,}6^\circ$ con el eje $x$, hacia $+z$.` },
      { n: '3', tema: 'm11', tipo: 'practica', enunciado: r`Una bobina plana de $100$ espiras cuadradas de $10{,}0$ cm de lado está en un campo que forma $30^\circ$ con la normal a su plano y varía como $B(t)=0{,}20\ \text T+(2{,}00\cdot10^{-5}\ \text T/\text s^2)\,t^2$. Determine la fem inducida en $t=2{,}0$ s.`, resolucion: r`$\frac{dB}{dt}=2(2\cdot10^{-5})t=8\cdot10^{-5}$ T/s en $t=2$ s. $\varepsilon=NA\cos30^\circ\frac{dB}{dt}=100\cdot0{,}01\cdot0{,}866\cdot8\cdot10^{-5}=6{,}9\cdot10^{-5}$ V. La parte constante del campo no induce nada.` },
      { n: '4', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`Un resistor de $200\ \Omega$, un inductor de $0{,}400$ H y un capacitor de $5{,}00\ \mu$F están en serie con una fuente de CA de frecuencia variable y amplitud $3{,}00$ V. a) ¿A qué frecuencia angular es máxima la corriente? ¿Cuál es su amplitud? b) ¿Cuál es la amplitud a $400$ rad/s? ¿La tensión de la fuente adelanta o atrasa respecto de la corriente?`, resolucion: r`**a)** $\omega_0=\frac1{\sqrt{LC}}=707$ rad/s; $I=\frac VR=15{,}0$ mA.

**b)** $X_L=160\ \Omega$, $X_C=500\ \Omega$, $Z=\sqrt{200^2+340^2}=394\ \Omega$, $I=7{,}6$ mA. Domina el capacitor: la tensión **se atrasa** respecto de la corriente ($\varphi=-59{,}5^\circ$).` },
      { n: '5a', tema: 'm16', tipo: 'practica', lab: 'onda-em', enunciado: r`Un transmisor de FM de $102{,}5$ MHz difunde isotrópicamente $4{,}00$ kW. Un dipolo receptor de $50{,}0$ cm está a $6350$ m. Calcule la amplitud de la fem inducida de un extremo al otro de la antena.`, resolucion: r`$I=\frac{P}{4\pi r^2}=\frac{4000}{4\pi(6350)^2}=7{,}9\cdot10^{-6}$ W/m². $E_{max}=\sqrt{2\mu_0cI}=0{,}0772$ V/m. $\varepsilon=E_{max}\ell=38{,}6$ mV.` },
      { n: '5b', tema: 'm16', tipo: 'practica', lab: 'onda-em', enunciado: r`Una onda EM en el vacío tiene campo magnético $\vec B(x,t)=-(8{,}25\cdot10^{-9}\ \text T)\,\hat\jmath\cos[(1{,}38\cdot10^4\ \text{rad/m})x+\omega t]$. a) ¿En qué dirección viaja? b) ¿Cuál es la frecuencia? c) Escriba $\vec E(x,t)$. d) Dibuje la onda.`, resolucion: r`**a)** El argumento es $kx+\omega t$: viaja en **$-x$**.

**b)** $f=\frac{ck}{2\pi}=\frac{(3\cdot10^8)(1{,}38\cdot10^4)}{2\pi}=6{,}59\cdot10^{11}$ Hz.

**c)** $E_{max}=cB_{max}=2{,}48$ V/m. $\vec E\times\vec B$ debe apuntar a $-\hat\imath$; como $\hat k\times\hat\jmath=-\hat\imath$:

$$\vec E=-(2{,}48\ \text V/\text m)\,\hat k\cos[(1{,}38\cdot10^4)x+\omega t]$$` },
    ],
  },
  {
    id: 'pp2-2025-11-19', parcial: 2, fecha: '19 de noviembre de 2025', detalle: 'Pre-segundo parcial, comisión 2K4',
    items: [
      { n: 'I', tema: 'm11', tipo: 'opcion', enunciado: r`Una espira de $100\ \text{cm}^2$ forma $45^\circ$ con un campo de $1{,}0$ T. Si el campo disminuye proporcionalmente hasta anularse en $2{,}83$ s, la fem inducida es:`, opciones: ['2,5·10⁻³ V', '3,0·10⁻³ V', '4,5·10⁻³ V', '5,0·10⁻³ V', '5,5·10⁻³ V'], ok: 0, resolucion: r`$\varepsilon=\frac{BA\operatorname{sen}45^\circ}{\Delta t}=\frac{1\cdot0{,}01\cdot0{,}707}{2{,}83}=2{,}5$ mV.` },
      { n: 'II', tema: 'm14', tipo: 'opcion', enunciado: r`Un circuito serie con $R=5{,}00\ \Omega$, $L=0{,}200$ H y un condensador se conecta a $30{,}0$ V y $1780$ Hz, que es la frecuencia de resonancia. La capacitancia es:`, opciones: ['20 nF', '30 nF', '40 nF', '50 nF', '60 nF'], ok: 2, resolucion: r`$C=\frac{1}{(2\pi f)^2L}=\frac{1}{(1{,}118\cdot10^4)^2\cdot0{,}2}=40$ nF.` },
      { n: 'III', tema: 'm10', tipo: 'opcion', enunciado: r`Un alambre infinito lleva $4{,}0$ A. Una carga de $1{,}0\ \mu$C se lanza paralela al alambre, a $4{,}0$ cm, con $1{,}0\cdot10^5$ m/s. La fuerza sobre la carga es:`, opciones: ['1 µN', '2 µN', '3 µN', '4 µN', '5 µN'], ok: 1, resolucion: r`$B=\frac{\mu_0I}{2\pi d}=20\ \mu$T; $F=qvB=(10^{-6})(10^5)(2\cdot10^{-5})=2\ \mu$N.` },
      { n: '2', tema: 'm09', tipo: 'practica', lab: 'carga-en-campo-b', enunciado: r`Un electrón con rapidez inicial $1{,}0\cdot10^3$ m/s es acelerado por $1000$ V y luego entra en un campo $B$ perpendicular a su trayectoria, describiendo una circunferencia en $T=2{,}00\cdot10^{-10}$ s. Calcule: a) la rapidez dentro del campo; b) $B$; c) el cambio de cantidad de movimiento al girar media vuelta; d) el trabajo de la fuerza magnética en una vuelta.`, resolucion: r`**a)** $v=\sqrt{v_0^2+\frac{2eV}{m}}=1{,}88\cdot10^7$ m/s (la velocidad inicial es despreciable).

**b)** $B=\frac{2\pi m}{eT}=\frac{2\pi(9{,}1\cdot10^{-31})}{(1{,}6\cdot10^{-19})(2\cdot10^{-10})}=0{,}179$ T.

**c)** Media vuelta invierte la velocidad: $|\Delta\vec p|=2mv=3{,}4\cdot10^{-23}$ kg·m/s.

**d)** $W=0$: la fuerza magnética es siempre perpendicular a la velocidad.` },
      { n: '3', tema: 'm10', tipo: 'practica', lab: 'campo-de-corrientes', enunciado: r`Dos conductores largos paralelos separados $L=50$ cm llevan $I_1=2{,}0$ A e $I_2=4{,}0$ A en sentidos opuestos. a) Campo en $P_1$, a $20$ cm de $I_1$ y entre ambos. b) Explique por qué el punto $P_2$ de campo nulo está por fuera de ambas corrientes, del lado de $I_1$. c) Calcule la distancia $x$ de $P_2$ a $I_1$.`, resolucion: r`**a)** Entre conductores con corrientes opuestas los campos **se suman**: $B=\frac{\mu_0}{2\pi}\left(\frac{2}{0{,}2}+\frac{4}{0{,}3}\right)=2{,}0+2{,}67=4{,}67\ \mu$T, perpendicular al plano.

**b)** Para anularse los campos deben tener sentidos opuestos: eso pasa por fuera del par, y del lado de la corriente menor, para compensar su menor intensidad con la cercanía.

**c)** $\frac{2}{x}=\frac{4}{x+0{,}5}\Rightarrow x=0{,}50$ m.` },
    ],
  },
  {
    id: 'p2-2024-11-14-t1', parcial: 2, fecha: '14 de noviembre de 2024', detalle: 'Comisión 2S1',
    items: [
      { n: '1', tema: 'm09', tipo: 'practica', lab: 'carga-en-campo-b', enunciado: r`(2 puntos) Un electrón de $45{,}0$ keV de energía cinética se mueve en una órbita circular perpendicular a un campo de $0{,}325$ T. a) Halle el radio de la órbita. b) Halle la frecuencia angular y el período.`, resolucion: r`$v=\sqrt{\frac{2K}{m}}=\sqrt{\frac{2(45\,000)(1{,}602\cdot10^{-19})}{9{,}11\cdot10^{-31}}}=1{,}26\cdot10^8$ m/s (en el nivel del curso se usa el cálculo no relativista).

**a)** $r=\frac{mv}{eB}=2{,}20$ mm. **b)** $\omega=\frac{eB}{m}=5{,}72\cdot10^{10}$ rad/s; $T=\frac{2\pi}\omega=1{,}10\cdot10^{-10}$ s.` },
      { n: '2', tema: 'm10', tipo: 'practica', enunciado: r`(3 puntos) Dos alambres paralelos largos cuelgan de cordeles de $4$ cm sujetos a un eje común. Tienen $0{,}0125$ kg/m y conducen la misma corriente en sentidos opuestos. ¿Cuál es la corriente si los cordeles forman $6^\circ$ con la vertical?`, resolucion: r`Por la repulsión, cada alambre se aparta: separación $d=2\cdot0{,}04\operatorname{sen}6^\circ=8{,}36$ mm. Equilibrio por metro: $\frac FL=\lambda g\operatorname{tg}6^\circ=1{,}29\cdot10^{-2}$ N/m.

$$\frac{\mu_0I^2}{2\pi d}=1{,}29\cdot10^{-2}\ \Rightarrow\ I=\sqrt{\frac{1{,}29\cdot10^{-2}\cdot8{,}36\cdot10^{-3}}{2\cdot10^{-7}}}=23{,}2\ \text A$$` },
      { n: '3', tema: 'm12', tipo: 'practica', enunciado: r`(2 puntos) Una bobina de $N_1=150$ vueltas y radio $5{,}00$ cm, con una resistencia de $12{,}0\ \Omega$ conectada, rodea un solenoide de $230$ vueltas/cm y $4{,}50$ cm de radio. La corriente del solenoide cambia uniformemente de $0$ a $2{,}00$ A en $0{,}10$ s. Calcule la corriente inducida en la bobina.`, resolucion: r`El flujo está solo **dentro del solenoide** (área $\pi(0{,}045)^2$), no en toda el área de la bobina.

$\frac{dB}{dt}=\mu_0n\frac{dI}{dt}=(4\pi\cdot10^{-7})(23\,000)(20)=0{,}578$ T/s.

$\varepsilon=N_1\pi r_s^2\frac{dB}{dt}=150\cdot6{,}36\cdot10^{-3}\cdot0{,}578=0{,}552$ V; $I=\frac{0{,}552}{12}=46$ mA.` },
      { n: '4', tema: 'm12', tipo: 'practica', enunciado: r`(1,5 puntos, teoría) Un solenoide largo de $\ell=0{,}50$ m y $A=10{,}0\ \text{cm}^2$ tiene $N_1=1000$ espiras. Una bobina de $N_2=10$ espiras lo rodea concéntricamente. Calcule la inductancia mutua.`, resolucion: r`$M=\frac{N_2\Phi_{21}}{I_1}=\frac{\mu_0N_1N_2A}{\ell}=\frac{(4\pi\cdot10^{-7})(1000)(10)(10^{-3})}{0{,}5}=25{,}1\ \mu$H.` },
      { n: '5', tema: 'm14', tipo: 'practica', enunciado: r`(1,5 puntos) Un voltaje $v=(80{,}0\ \text V)\operatorname{sen}(\omega t)$ se aplica a un resistor de $50{,}0\ \Omega$. Determine la corriente eficaz.`, resolucion: r`$I_{ef}=\frac{V_{max}}{\sqrt2R}=\frac{80}{\sqrt2\cdot50}=1{,}13$ A.` },
    ],
  },
  {
    id: 'p2-2024-11-14-t2', parcial: 2, fecha: '14 de noviembre de 2024', detalle: 'Tema 2 (cinco prácticas de 2 puntos)',
    items: [
      { n: '1', tema: 'm11', tipo: 'practica', enunciado: r`Una bobina circular de $25$ vueltas y $1{,}00$ m de diámetro tiene su eje en la dirección del campo magnético terrestre de $50\ \mu$T. En $0{,}20$ s se la hace girar $180^\circ$. ¿Cuál es la fem promedio generada?`, resolucion: r`El flujo pasa de $+BA$ a $-BA$: $\Delta\Phi=2BA$. $\varepsilon=\frac{2NBA}{\Delta t}=\frac{2\cdot25\cdot50\cdot10^{-6}\cdot0{,}785}{0{,}20}=9{,}82$ mV.` },
      { n: '2', tema: 'm09', tipo: 'practica', lab: 'carga-en-campo-b', enunciado: r`Un electrón describe una semicircunferencia de A a B con rapidez $1{,}41\cdot10^6$ m/s; AB mide $10{,}0$ cm. a) Magnitud y dirección del campo que lo hace seguir esa trayectoria. b) Tiempo de A a B.`, resolucion: r`$r=5{,}0$ cm. **a)** $B=\frac{mv}{er}=\frac{(9{,}11\cdot10^{-31})(1{,}41\cdot10^6)}{(1{,}6\cdot10^{-19})(0{,}05)}=1{,}61\cdot10^{-4}$ T, perpendicular al plano de la órbita (su sentido sale de exigir que $-e\vec v\times\vec B$ apunte al centro). **b)** $t=\frac{\pi r}{v}=1{,}11\cdot10^{-7}$ s.` },
      { n: '3', tema: 'm10', tipo: 'practica', lab: 'campo-de-corrientes', enunciado: r`Dos conductores largos paralelos, separados $40{,}0$ cm, transportan $25{,}0$ A y $75{,}0$ A. Halle todos los puntos donde el campo neto es cero si las corrientes van en el mismo sentido. Grafique.`, resolucion: r`Con el mismo sentido, los campos son opuestos **entre** los conductores. $\frac{25}{x}=\frac{75}{0{,}4-x}\Rightarrow x=0{,}10$ m: la recta paralela a ambos, en su plano, a $10$ cm del de $25$ A.` },
      { n: '5', tema: 'm14', tipo: 'practica', enunciado: r`Una corriente $i=10{,}0\ \text A\operatorname{sen}(\omega t)$ de $50$ Hz atraviesa una bobina de $0{,}10$ H. Determine la expresión del voltaje en la bobina.`, resolucion: r`$v=L\frac{di}{dt}=0{,}10\cdot10\cdot100\pi\cos(100\pi t)=314\cos(100\pi t)$ V: adelanta $90^\circ$ a la corriente.` },
    ],
  },
  {
    id: 'p2-2024-11-19-2k3', parcial: 2, fecha: '19 de noviembre de 2024', detalle: 'Comisión 2K3',
    items: [
      { n: '1', tema: 'm09', tipo: 'practica', lab: 'carga-en-campo-b', enunciado: r`Un protón viaja a $5{,}00\cdot10^8$ cm/s en dirección horizontal, entrando en un capacitor con la placa positiva arriba y la negativa abajo. El campo eléctrico interior vale $300\,000$ V/m. ¿Cuánto debe valer B para que siga en línea recta? ¿Dirección y sentido?`, resolucion: r`$v=5\cdot10^6$ m/s. La fuerza eléctrica empuja al protón hacia abajo; la magnética debe empujarlo hacia arriba con igual módulo: $B=\frac Ev=0{,}060$ T. Si el protón va hacia la derecha, $\hat\imath\times\vec B=+\hat\jmath$ exige $\vec B$ **entrante** ($-\hat k$).` },
      { n: '2', tema: 'm12', tipo: 'practica', enunciado: r`En el instante en que la corriente en un inductor aumenta a razón de $0{,}0640$ A/s, la fem autoinducida es de $0{,}0160$ V. a) ¿Cuál es la inductancia? b) Si es un solenoide de $400$ espiras, ¿cuál es el flujo medio por espira cuando la corriente es de $0{,}720$ A?`, resolucion: r`**a)** $L=\frac{\varepsilon}{di/dt}=0{,}250$ H. **b)** $\Phi=\frac{LI}{N}=\frac{0{,}25\cdot0{,}72}{400}=4{,}50\cdot10^{-4}$ Wb.` },
      { n: '3', tema: 'm16', tipo: 'practica', lab: 'onda-em', enunciado: r`Una estrella está a $20{,}0$ años luz y su potencia es $4{,}00\cdot10^{28}$ W. a) Encuentre la intensidad de su luz en la Tierra. b) Encuentre la amplitud del campo eléctrico y del magnético.`, resolucion: r`$r=20\cdot9{,}46\cdot10^{15}=1{,}89\cdot10^{17}$ m. **a)** $I=\frac{P}{4\pi r^2}=8{,}9\cdot10^{-8}$ W/m². **b)** $E_{max}=\sqrt{2\mu_0cI}=8{,}2\cdot10^{-3}$ V/m; $B_{max}=\frac{E_{max}}c=2{,}7\cdot10^{-11}$ T.` },
      { n: '4', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`Un circuito RLC se usa en una radio para sintonizar una estación de FM de $99{,}7$ MHz. Con $R=12{,}0\ \Omega$ y $L=1{,}40$ mH, ¿qué capacitancia debe usarse?`, resolucion: r`Sintonizar = resonar: $C=\frac{1}{(2\pi f)^2L}=\frac1{(6{,}26\cdot10^8)^2(1{,}4\cdot10^{-3})}=1{,}82\cdot10^{-15}$ F. La resistencia no interviene.` },
      { n: '5', tema: 'm10', tipo: 'practica', lab: 'campo-de-corrientes', enunciado: r`Dos conductores largos paralelos llevan $I_1=I_2=3{,}00$ A hacia la página, separados $13{,}0$ cm. El punto P está a $5{,}00$ cm de $I_1$ y a $12{,}0$ cm de $I_2$. Determine el campo resultante en P.`, resolucion: r`$5^2+12^2=13^2$: el triángulo es rectángulo en P, así que los dos campos (cada uno perpendicular a su radio) son **perpendiculares** entre sí.

$B_1=\frac{\mu_0I}{2\pi(0{,}05)}=12\ \mu$T, $B_2=\frac{\mu_0I}{2\pi(0{,}12)}=5\ \mu$T; $B=\sqrt{12^2+5^2}=13{,}0\ \mu$T.` },
    ],
  },
  {
    id: 'p2-2024-11-2k1', parcial: 2, fecha: 'noviembre de 2024', detalle: 'Comisiones 2S2 y 2K1',
    items: [
      { n: '2', tema: 'm17', tipo: 'practica', lab: 'interferencia', enunciado: r`Luz de $\lambda=680$ nm incide sobre dos rendijas separadas $d$ y genera un tercer máximo a $38$ mm del máximo central. Si la pantalla está a $2{,}6$ m de las rendijas, ¿cuánto vale $d$?`, resolucion: r`$y_3=\frac{3\lambda L}{d}\Rightarrow d=\frac{3(680\cdot10^{-9})(2{,}6)}{0{,}038}=1{,}40\cdot10^{-4}$ m $=0{,}140$ mm.` },
      { n: '3', tema: 'm10', tipo: 'teoria', enunciado: r`¿Qué efectos físicos se presentan si circulan corrientes $I_1$ e $I_2$ de igual sentido en conductores separados una distancia R y ubicados en el mismo plano? Determine campos magnéticos y fuerzas (si las hubiera) con su dirección y sentido, indicando las leyes físicas.`, resolucion: r`Ver el final del 24-02-2016, ítem 3: $B=\frac{\mu_0I}{2\pi R}$ por Ampère y $\frac FL=\frac{\mu_0I_1I_2}{2\pi R}$ de atracción por la fuerza de Lorentz.` },
      { n: '4', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`Un RLC serie se conecta a una línea de $60$ Hz y $120$ V eficaces; la corriente es $I_{ef}=11{,}0$ A y adelanta $45^\circ$ a la tensión. a) Halle la potencia activa. b) ¿Cuánto vale la resistencia? c) Si $L=0{,}05$ H, halle la capacidad $C$.`, resolucion: r`**a)** $P=VI\cos\varphi=120\cdot11\cdot0{,}707=933$ W. **b)** $Z=\frac{120}{11}=10{,}9\ \Omega$; $R=Z\cos45^\circ=7{,}71\ \Omega$. **c)** Capacitivo: $X_C-X_L=7{,}71\ \Omega$; $X_L=2\pi60\cdot0{,}05=18{,}85\ \Omega\Rightarrow X_C=26{,}6\ \Omega$, $C=\frac{1}{2\pi60\cdot26{,}6}=99{,}9\ \mu$F.` },
    ],
  },
  {
    id: 'p2-2023-11-28', parcial: 2, fecha: '28 de noviembre de 2023', detalle: 'Cuatro ejercicios de 2,5 puntos',
    items: [
      { n: '1', tema: 'm12', tipo: 'teoria', enunciado: r`Defina inductancia mutua $M$ y calcule su valor para dos bobinas de $N_1$ y $N_2$ vueltas arrolladas sobre un núcleo de madera de área A, con corriente $I_1$ en la bobina 1 y la 2 conectada a una resistencia R. a) ¿Qué pasa con $M$ y con el flujo si cambiamos el núcleo por un material ferromagnético con $K_r=800$? b) ¿Se vincula con el funcionamiento de un transformador?`, resolucion: r`$M=\frac{N_2\Phi_{21}}{I_1}$. Con el campo de la bobina 1 ($B=\mu_0\frac{N_1}{\ell}I_1$) atravesando toda la 2: $M=\frac{\mu_0N_1N_2A}{\ell}$ (la madera tiene $K_m\approx1$).

**a)** Con $K_r=800$, $B$, el flujo y $M$ se multiplican por **800**.

**b)** Sí: el transformador es un par de bobinas con $M$ grande gracias al núcleo de hierro, que concentra el flujo y lo hace pasar casi entero por el secundario. Ver el final del 08-03-2017, ítem 3.` },
      { n: '3', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`Un generador de CA de $200$ V eficaces y $400$ Hz se conecta en serie con $30\ \Omega$, una bobina de $400$ mH y un condensador de $1\ \mu$F. Determine: a) el módulo y la fase de la impedancia; b) la corriente eficaz; c) la potencia activa y la reactiva.`, resolucion: r`$X_L=2\pi400\cdot0{,}4=1005\ \Omega$; $X_C=\frac1{2\pi400\cdot10^{-6}}=398\ \Omega$.

**a)** $Z=\sqrt{30^2+607^2}=608\ \Omega$; $\varphi=\operatorname{arctg}\frac{607}{30}=87{,}2^\circ$ (casi puramente inductivo). **b)** $I=\frac{200}{608}=0{,}329$ A. **c)** $P=I^2R=3{,}25$ W; $Q=I^2X=65{,}7$ var.` },
      { n: '4', tema: 'm17', tipo: 'practica', lab: 'interferencia', enunciado: r`Un experimento de Young usa luz monocromática. La separación entre ranuras es $0{,}500$ mm y en una pantalla a $3{,}30$ m el primer máximo lateral está a $3{,}40$ mm del centro. a) ¿Cuál es la longitud de onda? b) Calcule la posición del segundo máximo si la pantalla se ubica a $4$ m.`, resolucion: r`**a)** $\lambda=\frac{yd}{L}=\frac{(3{,}4\cdot10^{-3})(5\cdot10^{-4})}{3{,}3}=515$ nm. **b)** $y_2=\frac{2\lambda L}{d}=\frac{2(515\cdot10^{-9})(4)}{5\cdot10^{-4}}=8{,}24$ mm.` },
    ],
  },
  {
    id: 'p2-2023-11-27', parcial: 2, fecha: '27 de noviembre de 2023', detalle: '',
    items: [
      { n: '1', tema: 'm17', tipo: 'practica', lab: 'interferencia', enunciado: r`El experimento de Young se realiza con luz de $589$ nm y una pantalla a $2{,}00$ m. El décimo mínimo se observa a $7{,}26$ mm del máximo central. Determine la separación de las ranuras.`, resolucion: r`Los mínimos están en $d\operatorname{sen}\theta=(m+\frac12)\lambda$; el décimo es $m=9$: $y=\frac{9{,}5\lambda L}{d}\Rightarrow d=\frac{9{,}5(589\cdot10^{-9})(2)}{7{,}26\cdot10^{-3}}=1{,}54$ mm.` },
      { n: '2', tema: 'm10', tipo: 'practica', enunciado: r`Un alambre largo sobre una mesa lleva $1{,}20$ mA. En el vacío, un protón se mueve paralelo al alambre (opuesto a la corriente) a $2{,}30\cdot10^4$ m/s, a una distancia $d$ por encima. Determine $d$ ignorando el campo terrestre.`, resolucion: r`El protón está en equilibrio: la fuerza magnética (repulsiva, porque su "corriente" es opuesta a la del alambre) equilibra el peso.

$$ev\frac{\mu_0I}{2\pi d}=m_pg\ \Rightarrow\ d=\frac{ev\mu_0I}{2\pi m_pg}=\frac{(1{,}6\cdot10^{-19})(2{,}3\cdot10^4)(2\cdot10^{-7})(1{,}2\cdot10^{-3})}{(1{,}67\cdot10^{-27})(9{,}8)}\approx54\ \text m$$

> El problema original del Serway usa $1{,}20\ \mu$A y da $d=5{,}4$ cm.` },
      { n: '3', tema: 'm12', tipo: 'practica', enunciado: r`Dos bobinas están muy cerca. La primera tiene una corriente $I(t)=50\frac{\text A}{\text s}t-5\frac{\text A}{\text s^2}t^2$. En $t=0{,}800$ s la fem en la segunda es $-3{,}20$ V. ¿Cuál es la inductancia mutua?`, resolucion: r`$\frac{dI}{dt}=50-10t=42$ A/s. $\varepsilon_2=-M\frac{dI}{dt}\Rightarrow M=\frac{3{,}20}{42}=76{,}2$ mH.` },
      { n: '4', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`En un RLC serie con frecuencia y tensión fijas, $R=X_L$. Si la separación entre las placas del capacitor se reduce a la mitad, la corriente se duplica. Encuentre la reactancia capacitiva inicial en términos de $R$.`, resolucion: r`Al reducir $d$ a la mitad, $C$ se duplica y $X_C$ pasa a $\frac{X}{2}$. Si la corriente se duplica, $Z$ se reduce a la mitad:

$$R^2+(R-X)^2=4\left[R^2+\left(R-\frac X2\right)^2\right]\ \Rightarrow\ 2R^2-2RX+X^2=8R^2-4RX+X^2\ \Rightarrow\ X_C=3R$$` },
    ],
  },
  {
    id: 'rp2-2023-12-12', parcial: 2, fecha: '12 de diciembre de 2023', detalle: 'Recuperatorio del segundo parcial, 2K2',
    items: [
      { n: '2', tema: 'm15', tipo: 'practica', lab: 'transformador', enunciado: r`Un toroide de $8$ cm de radio medio tiene $800$ vueltas sobre un núcleo de permeabilidad relativa $K_r=1000$, con una corriente de $5$ A. Calcule: a) el campo B en su interior; b) la imantación M.`, resolucion: r`**a)** $B=K_r\frac{\mu_0NI}{2\pi r}=1000\cdot\frac{(4\pi\cdot10^{-7})(800)(5)}{2\pi\cdot0{,}08}=1000\cdot0{,}01=10$ T (valor de examen: un hierro real se satura cerca de 2 T).

**b)** $H=\frac{NI}{2\pi r}=7{,}96\cdot10^3$ A/m; $M=(K_r-1)H=7{,}95\cdot10^6$ A/m.` },
      { n: '4', tema: 'm17', tipo: 'practica', lab: 'interferencia', enunciado: r`Se coloca una pantalla a $40{,}0$ cm de una sola rendija iluminada con luz de $590$ nm. La distancia entre el 2.º y el 4.º mínimo del patrón de difracción es $3{,}00$ mm. ¿Cuál es el ancho de la rendija?`, resolucion: r`Mínimos de una rendija: $y_m=\frac{m\lambda L}{a}$. $y_4-y_2=\frac{2\lambda L}{a}\Rightarrow a=\frac{2(590\cdot10^{-9})(0{,}4)}{3\cdot10^{-3}}=0{,}157$ mm.` },
    ],
  },
  {
    id: 'p2-2022-11-22', parcial: 2, fecha: '22 de noviembre de 2022', detalle: 'Comisión 2K1 (2,5 puntos cada uno)',
    items: [
      { n: '1', tema: 'm09', tipo: 'practica', lab: 'carga-en-campo-b', enunciado: r`Un ión de $1{,}65\cdot10^{-21}$ J de energía cinética, masa $3{,}5\cdot10^{-27}$ kg y carga $+e$ impacta a una distancia D del punto de entrada de un espectrómetro de masas con campo de $1{,}2$ T. a) Calcule D. b) Si fuera un protón, ¿D sería menor, igual o mayor? c) En la zona del campo hay tres trayectorias de iones. Explique a qué se debe.`, resolucion: r`**a)** $v=\sqrt{\frac{2K}{m}}=971$ m/s; $r=\frac{mv}{eB}=1{,}77\cdot10^{-5}$ m; $D=2r=35{,}4\ \mu$m. (El dato de energía es muy chico para un espectrómetro real; el método es el mismo con cualquier valor.)

**b)** Con igual energía, $r=\frac{\sqrt{2mK}}{eB}\propto\sqrt m$: el protón, más liviano, impacta **más cerca**.

**c)** Iones de distinta masa (isótopos) o de distinta carga describen semicírculos de radios distintos: el espectrómetro los separa.` },
      { n: '2', tema: 'm10', tipo: 'practica', lab: 'campo-de-corrientes', enunciado: r`Dos conductores largos paralelos fijos, separados $10$ cm, llevan $30$ A (el de la derecha) y $40$ A (el de la izquierda) en el mismo sentido. a) ¿A qué distancia del conductor de la derecha se anula el campo? b) ¿Qué fuerza recibe un conductor equidistante de ambos con $I=5$ A en sentido contrario?`, resolucion: r`**a)** Entre ambos: $\frac{40}{0{,}1-x}=\frac{30}{x}\Rightarrow x=4{,}29$ cm del de la derecha.

**b)** A $5$ cm de cada uno, con corriente opuesta: ambos lo **repelen**. Del de 40 A: $\frac{(2\cdot10^{-7})(5)(40)}{0{,}05}=8\cdot10^{-4}$ N/m; del de 30 A: $6\cdot10^{-4}$ N/m. Neto $2\cdot10^{-4}$ N/m, alejándose del de 40 A.` },
      { n: '3', tema: 'm11', tipo: 'practica', lab: 'faraday', enunciado: r`Una barra conductora de longitud $l$ se mueve a la derecha con velocidad $v$ constante, perpendicular a un campo $B$ entrante. Se establece en ella un campo eléctrico $E$ hacia abajo. a) ¿Hacia dónde apunta E si la barra se mueve a la izquierda en un campo saliente? b) Con $v=0{,}05$ m/s, $B=4\cdot10^{-3}$ T y $l=0{,}1$ m calcule la fem. c) Explique por qué aparece E y qué leyes intervienen.`, resolucion: r`**a)** $(-\hat\imath)\times(+\hat k)=+\hat\jmath$: igual que antes, los positivos suben y $E$ apunta **hacia abajo**.

**b)** $\varepsilon=Blv=(4\cdot10^{-3})(0{,}1)(0{,}05)=2\cdot10^{-5}$ V.

**c)** La fuerza magnética $q\vec v\times\vec B$ separa cargas hasta que el campo eléctrico de esa separación la equilibra: $qE=qvB$, es decir $E=vB$ y $\varepsilon=El=Blv$. Es la fem de movimiento (Lorentz), coherente con Faraday.` },
      { n: '4', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`Al conectar a una red de $220$ V una bobina y una resistencia de $3\ \Omega$, circula una corriente de $10$ A a $50$ Hz. Deduzca: a) la impedancia de la bobina; b) el coeficiente de autoinducción; c) la ecuación de la corriente.`, resolucion: r`$Z=\frac{220}{10}=22\ \Omega$. **a)** $X_L=\sqrt{22^2-3^2}=21{,}8\ \Omega$. **b)** $L=\frac{21{,}8}{100\pi}=69{,}4$ mH. **c)** $\varphi=\operatorname{arctg}\frac{21{,}8}{3}=82{,}2^\circ$: $i(t)=10\sqrt2\operatorname{sen}(100\pi t-82{,}2^\circ)$ A.` },
    ],
  },
  {
    id: 'p2-2019-11-29', parcial: 2, fecha: '29 de noviembre de 2019', detalle: 'Comisiones 2S1 y 2K1, temas 1 y 2',
    items: [
      { n: 'T1-2', tema: 'm18', tipo: 'practica', lab: 'dilatacion', enunciado: r`El tanque de combustible de un auto se llena con $45$ L de nafta a $10\,^\circ$C. El dueño olvida taparlo y lo deja donde la temperatura es de $40\,^\circ$C. ¿Cuánta nafta se derrama? (desprecie la dilatación del tanque; $\beta_{nafta}=9{,}6\cdot10^{-4}\ ^\circ\text C^{-1}$)`, resolucion: r`$\Delta V=\beta V_0\Delta T=9{,}6\cdot10^{-4}\cdot45\cdot30=1{,}30$ L.` },
      { n: 'T1-3', tema: 'm11', tipo: 'practica', enunciado: r`Un electroimán produce un campo de $1{,}60$ T sobre un área de $0{,}2\ \text m^2$. Alrededor hay una bobina de $200$ vueltas y $20\ \Omega$. La corriente del electroimán baja a cero en $20$ ms. a) ¿Cuál es la fem inducida en la bobina? b) ¿Y la corriente inducida?`, resolucion: r`**a)** $\varepsilon=\frac{NBA}{\Delta t}=\frac{200\cdot1{,}6\cdot0{,}2}{0{,}02}=3{,}2\cdot10^3$ V. **b)** $I=\frac{3200}{20}=160$ A.` },
      { n: 'T2-3', tema: 'm11', tipo: 'practica', lab: 'faraday', enunciado: r`Una barra se desliza sin fricción sobre rieles unidos por $R=6\ \Omega$, en un campo de $2{,}5$ T entrante; la barra mide $l=1{,}20$ m. Calcule: a) la fuerza para moverla a la derecha a $2$ m/s; b) el sentido de la corriente; c) la potencia disipada en el resistor.`, resolucion: r`$\varepsilon=Blv=6$ V; $I=1$ A. **a)** $F=BIl=3$ N (igual y opuesta a la fuerza magnética que la frena). **b)** El flujo entrante crece: la corriente circula en sentido **antihorario**. **c)** $P=I^2R=6$ W $=Fv$.` },
      { n: 'T2-4', tema: 'm14', tipo: 'practica', lab: 'fasores', enunciado: r`Una bobina de $35\ \Omega$ de resistencia y $65$ mH está en serie con un capacitor y una fuente de $200$ V eficaces a $100$ Hz. Si $I_{ef}=4$ A: a) ¿cuál es la capacitancia? b) ¿Cuál es la tensión eficaz en la bobina? c) ¿El factor de potencia?`, resolucion: r`$Z=50\ \Omega$; $|X|=\sqrt{50^2-35^2}=35{,}7\ \Omega$; $X_L=2\pi100\cdot0{,}065=40{,}8\ \Omega$.

**a)** Hay dos soluciones: $X_C=X_L-35{,}7=5{,}1\ \Omega$ ($C=310\ \mu$F) o $X_C=X_L+35{,}7=76{,}6\ \Omega$ ($C=20{,}8\ \mu$F).

**b)** La bobina real tiene $R$ y $X_L$: $V=4\sqrt{35^2+40{,}8^2}=215$ V (más que la fuente: pasa en circuitos con capacitor).

**c)** $\cos\varphi=\frac RZ=0{,}70$.` },
    ],
  },
  {
    id: 'p1-2025-07-06-t1', parcial: 1, fecha: '6 de julio de 2025', detalle: 'Tema 1, comisión 2K2 (en esta comisión el 1.er parcial incluyó calorimetría)',
    items: [
      { n: '1', tema: 'm19', tipo: 'practica', lab: 'calorimetria', enunciado: r`Un recipiente aislado contiene $120$ g de café a $85{,}0\,^\circ$C. Se agrega hielo a $0\,^\circ$C hasta que el equilibrio quede en $50{,}0\,^\circ$C. Después se agrega café a $100\,^\circ$C hasta que el sistema vuelva a $85{,}0\,^\circ$C. Considere el café como agua. a) ¿Cuánto hielo se agregó? b) ¿Cuánto café a $100\,^\circ$C? c) ¿El hielo, al fundirse, cambia su temperatura? Explique.`, resolucion: r`**a)** $120(85-50)=m_h\cdot80+m_h(50-0)\Rightarrow4200=130m_h\Rightarrow m_h=32{,}3$ g.

**b)** Ahora hay $152{,}3$ g a $50\,^\circ$C: $m_c(100-85)=152{,}3(85-50)\Rightarrow m_c=355$ g. Total final $508$ g.

**c)** No: mientras se funde está a $0\,^\circ$C. El calor latente rompe la estructura del sólido sin aumentar la energía cinética media de las moléculas.` },
      { n: '2', tema: 'm03', tipo: 'practica', lab: 'gauss', enunciado: r`Una esfera conductora maciza de radio $R=10$ cm tiene carga $Q=2\ \mu$C. Concéntrica con ella hay un cascarón esférico conductor descargado de radio interior $2R$ y exterior $3R$, aislado. a) Determine la distribución de cargas. b) Determine $E(r)$ en $r<R$, $R<r<2R$, $2R<r<3R$ y $r>3R$ usando Gauss. c) ¿El cascarón puede adquirir carga neta distinta de cero en estas condiciones?`, resolucion: r`**a)** La esfera: $+Q$ en su superficie. El cascarón: $-Q$ en su superficie interior (para que $E=0$ dentro del metal) y $+Q$ en la exterior (su carga neta sigue siendo cero).

**b)** $r<R$: $E=0$. $R<r<2R$: $E=\frac{kQ}{r^2}$. $2R<r<3R$: $E=0$. $r>3R$: $E=\frac{kQ}{r^2}$.

**c)** No: está aislado y la inducción solo **redistribuye** carga. Tendría carga neta si se lo conecta a tierra (se iría la $+Q$ exterior) o si se le transfiere carga.` },
      { n: '4', tema: 'm05', tipo: 'practica', lab: 'capacitor', enunciado: r`Dos capacitores idénticos de $10\ \mu$F se cargan en paralelo con $100$ V. Se desconecta la fuente (sin deshacer la conexión entre ellos) y uno se llena con un dieléctrico de $\kappa=4$. Determine: a) la nueva diferencia de potencial; b) la carga de cada uno; c) ¿la carga que acumula un capacitor depende solo de su geometría?`, resolucion: r`La carga total se conserva: $Q=2\cdot10\cdot100=2$ mC.

**a)** $C_{eq}=40+10=50\ \mu$F; $V=\frac{2\cdot10^{-3}}{50\cdot10^{-6}}=40$ V.

**b)** Con dieléctrico: $40\cdot40=1{,}6$ mC; el otro: $0{,}4$ mC.

**c)** No: $Q=CV$ depende de $C$ (geometría **y** dieléctrico) y de la tensión aplicada.` },
    ],
  },
  {
    id: 'p1-2025-07-06-t2', parcial: 1, fecha: '6 de julio de 2025', detalle: 'Tema 2, comisión 2K2',
    items: [
      { n: '1', tema: 'm19', tipo: 'practica', lab: 'calorimetria', enunciado: r`Un frasco de vidrio de $6{,}00$ g ($c_v=2800$ J/kg·K) contiene $16{,}0$ g de una enzima ($c_e=2250$ J/kg·K). El sistema, a $19{,}5\,^\circ$C, se introduce en un baño de agua con $0{,}120$ kg de hielo en equilibrio. a) ¿Cuánto calor cede el sistema? b) ¿Cuánto hielo se funde? c) Explique por qué la temperatura del baño permanece constante aunque intercambia calor.`, resolucion: r`**a)** $Q=(0{,}006\cdot2800+0{,}016\cdot2250)\cdot19{,}5=52{,}8\cdot19{,}5=1030$ J.

**b)** $m=\frac{1030}{334\,000}=3{,}08$ g.

**c)** Mientras haya hielo y agua juntos, el calor se usa en fundir hielo (cambio de fase a $0\,^\circ$C), no en subir la temperatura. Condición: que no se funda todo el hielo.` },
      { n: '2', tema: 'm02', tipo: 'practica', lab: 'lineas-de-campo', enunciado: r`Dos cargas sobre el eje $x$: $Q_1=20\ \mu$C en $x_1=-60$ cm y $Q_2=40\ \mu$C en $x_2=-20$ cm. a) Determine el signo y la magnitud de $Q_3$ ubicada en $P_3$ $(30;\,40)$ cm, sabiendo que el campo en el origen está dirigido según el eje $Y$. b) Si solo existiese $Q_1$, ¿cuál es el trabajo de la fuerza eléctrica para mover una carga de $-1\ \mu$C desde $P_3$ hasta el origen? ¿Sería positivo? Explique.`, resolucion: r`**a)** En el origen, $Q_1$ y $Q_2$ (positivas, a la izquierda) empujan hacia $+x$: $E_x=k\left(\frac{20\,\mu}{0{,}36}+\frac{40\,\mu}{0{,}04}\right)=9{,}49\cdot10^6$ N/C. $Q_3$ debe anular esa componente. Su dirección hacia el origen es $(-0{,}6;-0{,}8)$ y está a $0{,}5$ m:

$$\frac{kQ_3}{0{,}25}\cdot0{,}6=9{,}49\cdot10^6\ \Rightarrow\ Q_3=+440\ \mu\text C$$

Queda $E_y=-\frac{kQ_3}{0{,}25}0{,}8=-1{,}27\cdot10^7$ N/C: el campo apunta según $-Y$.

**b)** $W=q(V_{P3}-V_O)$ con $V=\frac{kQ_1}{r}$: $r_{P3}=0{,}985$ m y $r_O=0{,}6$ m.

$$W=(-10^{-6})\left(1{,}83\cdot10^5-3{,}00\cdot10^5\right)=+0{,}117\ \text J$$

Positivo: la carga negativa se acerca a la positiva, a favor de la atracción.` },
      { n: '3', tema: 'm07', tipo: 'practica', lab: 'kirchhoff', enunciado: r`Una fem conectada entre A y B alimenta: una resistencia de $10\ \Omega$ en serie, luego un tramo con $8\ \Omega$ en paralelo con la serie de $6\ \Omega$ y $2\ \Omega$, y por último $5\ \Omega$ en serie. a) ¿Qué fem hace pasar $2$ A por la de $10\ \Omega$? b) Calcule la potencia disipada en la de $6\ \Omega$. c) ¿Las fuentes reales tienen más o menos diferencia de potencial que las ideales?`, resolucion: r`$R_{eq}=10+(8\parallel8)+5=19\ \Omega$.

**a)** $\varepsilon=2\cdot19=38$ V. **b)** Las dos ramas de $8\ \Omega$ se reparten $1$ A cada una: $P_6=1^2\cdot6=6$ W.

**c)** **Menos**: la tensión en bornes es $V=\varepsilon-Ir$, y baja cuanto más corriente entregan.` },
      { n: '4', tema: 'm05', tipo: 'practica', lab: 'capacitor', enunciado: r`Las placas de un capacitor tienen $2000\ \text{cm}^2$ y están separadas $0{,}2$ mm. Se conecta a $3000$ V, luego se desconecta y se inserta un dieléctrico; la diferencia de potencial baja a $2000$ V. Calcule: a) la capacitancia y la carga en vacío; b) la capacitancia después de insertar el dieléctrico; c) ¿el campo es mayor o menor después de colocarlo? Explique.`, resolucion: r`**a)** $C_0=\frac{\varepsilon_0A}{d}=8{,}85$ nF; $Q=C_0V=26{,}6\ \mu$C. **b)** Con $Q$ constante: $C=\frac{Q}{2000}=13{,}3$ nF ($\kappa=1{,}5$). **c)** Menor: $E=\frac Vd$ pasa de $1{,}5\cdot10^7$ a $1{,}0\cdot10^7$ V/m, porque las cargas de polarización del dieléctrico crean un campo opuesto.` },
    ],
  },
  {
    id: 'p1-2025-07-06-t3', parcial: 1, fecha: '6 de julio de 2025', detalle: 'Integral, primera parte, tema 3, comisión 2K2',
    items: [
      { n: '1', tema: 'm19', tipo: 'practica', lab: 'calorimetria', enunciado: r`En un recipiente aislado se mezclan aluminio, inicialmente a $100\,^\circ$C, con $100$ g de hielo a $0\,^\circ$C. El equilibrio se alcanza a $32\,^\circ$C, y la gráfica T–Q termina en $11\,200$ cal. Calcule: a) la masa de aluminio; b) el calor que absorbe el hielo; c) ¿en el tramo donde T es constante, no se absorbe energía? Explique. ($c_{Al}=0{,}214$ cal/g°C; $c_{agua}=1$; $L_f=80$ cal/g)`, resolucion: r`**b)** Hielo: fundir $100\cdot80=8000$ cal y calentar el agua a $32\,^\circ$C, $100\cdot32=3200$ cal: $11\,200$ cal.

**a)** $m\cdot0{,}214\cdot(100-32)=11\,200\Rightarrow m=770$ g.

**c)** Sí se absorbe: es el calor latente de fusión. La energía se usa en el cambio de fase, no en subir la temperatura.` },
      { n: '2', tema: 'm05', tipo: 'practica', lab: 'capacitor', enunciado: r`Dos condensadores planos $C_1=8\ \mu$F y $C_2=6\ \mu$F se conectan en serie a $12$ V. a) ¿Cuál es la carga de cada uno? b) ¿Cuál es la energía total? c) Dos condensadores iguales, ¿acumulan más energía en serie o en paralelo?`, resolucion: r`$C_{eq}=\frac{8\cdot6}{14}=3{,}43\ \mu$F. **a)** En serie la carga es la misma: $Q=41{,}1\ \mu$C. **b)** $U=\frac12C_{eq}V^2=0{,}247$ mJ. **c)** En paralelo: $C_{eq}=2C$ frente a $\frac C2$, cuatro veces más energía con la misma tensión.` },
      { n: '3', tema: 'm04', tipo: 'practica', lab: 'equipotenciales', enunciado: r`En los vértices de un cuadrado de lado $a=1$ m hay cargas $q_1=1\ \mu$C, $q_2=-2\ \mu$C, $q_3=3\ \mu$C y $q_4=2\ \mu$C (en ese orden al recorrer el cuadrado). Determine: a) el potencial en el centro; b) la energía potencial del sistema; c) ¿se puede calcular el campo en el centro a partir del potencial? Explique.`, resolucion: r`**a)** Todas a $\frac{a}{\sqrt2}=0{,}707$ m: $V=\frac{k(1-2+3+2)\,\mu\text C}{0{,}707}=5{,}09\cdot10^4$ V.

**b)** Lados (1 m): $q_1q_2+q_2q_3+q_3q_4+q_4q_1=-2-6+6+2=0$. Diagonales ($\sqrt2$ m): $q_1q_3+q_2q_4=3-4=-1$ (en µC²). $U=\frac{k(-10^{-12})}{\sqrt2}=-6{,}36\cdot10^{-3}$ J.

**c)** No con un solo valor: $\vec E=-\nabla V$ necesita saber cómo **varía** $V$ alrededor del punto. Un potencial alto no implica campo alto (en el centro de dos cargas iguales $V\ne0$ y $E=0$).` },
    ],
  },
  {
    id: 'p1-2025-07-06-t4', parcial: 1, fecha: '6 de julio de 2025', detalle: 'Tema 4, comisión 2K2',
    items: [
      { n: '1', tema: 'm19', tipo: 'practica', lab: 'calorimetria', enunciado: r`En un recipiente aislado se añaden $250$ g de hielo a $0{,}00\,^\circ$C a $600$ g de agua a $18{,}0\,^\circ$C. a) ¿Cuál es la temperatura final? b) ¿Cuánto hielo queda en el equilibrio? c) ¿El punto de fusión es el mismo para todos los materiales? ¿De qué depende?`, resolucion: r`El agua hasta $0\,^\circ$C cede $600\cdot18=10\,800$ cal; fundir todo el hielo pide $20\,000$ cal. **a)** $0\,^\circ$C. **b)** Se funden $\frac{10\,800}{80}=135$ g; quedan $115$ g. **c)** No: depende de la sustancia (de la intensidad de sus enlaces) y de la presión.` },
      { n: '2', tema: 'm03', tipo: 'practica', lab: 'gauss', enunciado: r`Un cubo de $30$ cm de lado tiene un vértice en el origen, en un campo uniforme $\vec E=-5\hat\imath+10\hat\jmath+0\hat k$ N/C. a) Halle el flujo en las seis caras y el total. b) Halle la diferencia de potencial entre el vértice del origen y el vértice opuesto. c) ¿Siempre debe haber carga dentro de una superficie cerrada para que exista campo atravesándola?`, resolucion: r`**a)** Área $0{,}09$ m². Cara $x=0$ (normal $-\hat\imath$): $+0{,}45$; cara $x=0{,}3$: $-0{,}45$; cara $y=0$ (normal $-\hat\jmath$): $-0{,}90$; cara $y=0{,}3$: $+0{,}90$; caras $z$: $0$. Total: $0$ N·m²/C.

**b)** $V_O-V_P=\int_O^P\vec E\cdot d\vec l=(-5)(0{,}3)+(10)(0{,}3)=1{,}5$ V.

**c)** No: el campo puede atravesar la superficie entrando por un lado y saliendo por otro; el flujo **neto** es nulo si no hay carga dentro.` },
    ],
  },
  {
    id: 'p1-2025-06-25-2k4', parcial: 1, fecha: '25 de junio de 2025', detalle: 'Comisión 2K4: opción múltiple (4 × 1 punto) y dos ejercicios de 3 puntos',
    items: [
      { n: 'I', tema: 'm01', tipo: 'opcion', lab: 'coulomb', enunciado: r`Dos partículas cargadas se ejercen $2{,}5\cdot10^{-1}$ N separadas $20{,}0$ cm. Si la separación pasa a ser $1/4$ de la inicial, la nueva fuerza es:`, opciones: ['1,0 N', '2,0 N', '3,0 N', '4,0 N', '5,0 N'], ok: 3, resolucion: r`$F\propto\frac1{r^2}$: con $r/4$ la fuerza se multiplica por $16$: $0{,}25\cdot16=4{,}0$ N.` },
      { n: 'II', tema: 'm06', tipo: 'opcion', enunciado: r`Por separado, a $220$ V, una cafetera consume $220$ W y una tostadora $660$ W. Si se conectan ambos en serie a la misma fuente, la corriente es:`, opciones: ['0,75 A', '1,0 A', '3,0 A', '4,0 A', '5,0 A'], ok: 0, resolucion: r`$R=\frac{V^2}{P}$: $220\ \Omega$ y $73{,}3\ \Omega$. En serie: $I=\frac{220}{293{,}3}=0{,}75$ A.` },
      { n: 'III', tema: 'm05', tipo: 'opcion', lab: 'capacitor', enunciado: r`Un capacitor de placas cuadradas separadas $0{,}50$ cm con parafina ($\kappa=2{,}00$) tiene $28{,}0$ pF. El lado de cada placa es:`, opciones: ['6,9 cm', '7,9 cm', '8,9 cm', '9,4 cm', '9,9 cm'], ok: 2, resolucion: r`$\ell^2=\frac{Cd}{\kappa\varepsilon_0}=\frac{(28\cdot10^{-12})(0{,}005)}{2(8{,}854\cdot10^{-12})}=7{,}9\cdot10^{-3}$ m², $\ell=8{,}9$ cm.` },
      { n: 'IV', tema: 'm06', tipo: 'opcion', enunciado: r`El alambre A tiene la misma resistividad, el doble de longitud y la mitad de radio que el B, cuya resistencia es $5{,}0\ \Omega$. En paralelo, la resistencia equivalente es:`, opciones: ['20/9 Ω', '9/20 Ω', '40/9 Ω', '9 Ω', '9/40 Ω'], ok: 2, resolucion: r`$R=\frac{\rho L}{\pi r^2}$: $R_A=5\cdot\frac{2}{(1/2)^2}=40\ \Omega$. Paralelo: $\frac{40\cdot5}{45}=\frac{40}9\ \Omega$.` },
      { n: '2', tema: 'm08', tipo: 'practica', lab: 'rc', enunciado: r`(3 puntos) Un RC serie tiene $R=1{,}00$ MΩ, $C=5{,}00\ \mu$F y $V=30{,}0$ V. Determine: a) la constante de tiempo; b) la carga máxima después de conectar a la batería; c) la corriente en el resistor $10{,}0$ s después.`, resolucion: r`**a)** $\tau=RC=5{,}00$ s. **b)** $Q=CV=150\ \mu$C. **c)** $i=\frac VRe^{-t/\tau}=30\ \mu\text A\cdot e^{-2}=4{,}06\ \mu$A.` },
    ],
  },
  {
    id: 'pp1-2026-06-24', parcial: 1, fecha: '24 de junio de 2026', detalle: 'Pre-primer parcial, comisión 2K4',
    items: [
      { n: '1', tema: 'm06', tipo: 'practica', enunciado: r`Las luces de un auto, que consumen $95{,}0$ W, quedan prendidas por descuido. ¿Cuánto tarda en agotarse una batería de $70{,}0$ Ah si mantiene $12{,}0$ V?`, resolucion: r`Energía: $70\cdot12=840$ Wh. $t=\frac{840}{95}=8{,}84$ h.` },
      { n: '2', tema: 'm07', tipo: 'practica', enunciado: r`Una batería tiene una fem de $15{,}0$ V. Cuando entrega $20{,}0$ W a un resistor de carga R, el voltaje entre sus terminales es de $11{,}6$ V. ¿Cuál es su resistencia interna?`, resolucion: r`$I=\frac PV=\frac{20}{11{,}6}=1{,}72$ A. $r=\frac{\varepsilon-V}{I}=\frac{3{,}4}{1{,}72}=1{,}97\ \Omega$.` },
      { n: '3', tema: 'm06', tipo: 'practica', enunciado: r`Se mantiene $0{,}900$ V entre los extremos de $1{,}50$ m de alambre de tungsteno ($\rho=5{,}60\cdot10^{-8}\ \Omega$m) de $0{,}600\ \text{mm}^2$ de sección. ¿Cuál es la corriente?`, resolucion: r`$R=\frac{\rho L}{A}=\frac{(5{,}6\cdot10^{-8})(1{,}5)}{0{,}6\cdot10^{-6}}=0{,}140\ \Omega$; $I=6{,}43$ A.` },
      { n: '5', tema: 'm05', tipo: 'practica', lab: 'capacitor', enunciado: r`Tres capacitores descargados de $10{,}0$, $20{,}0$ y $30{,}0\ \mu$F se conectan en serie a una batería de $24{,}0$ V. ¿Qué tensión aparece en el de $20\ \mu$F?`, resolucion: r`$C_{eq}=\left(\frac1{10}+\frac1{20}+\frac1{30}\right)^{-1}=5{,}45\ \mu$F; $Q=131\ \mu$C; $V_{20}=\frac{131}{20}=6{,}55$ V.` },
      { n: '6', tema: 'm01', tipo: 'practica', lab: 'coulomb', enunciado: r`Dos esferas de $6{,}50$ g cuelgan de un mismo punto con hilos de seda de $90{,}0$ mm. ¿Qué carga hay que darle a cada una para que queden separadas $55{,}0$ mm?`, resolucion: r`$\operatorname{sen}\theta=\frac{27{,}5}{90}\Rightarrow\operatorname{tg}\theta=0{,}321$. $F=mg\operatorname{tg}\theta=0{,}0204$ N. $q=r\sqrt{\frac Fk}=0{,}055\sqrt{\frac{0{,}0204}{8{,}99\cdot10^9}}=82{,}9$ nC.` },
      { n: '7', tema: 'm09', tipo: 'practica', enunciado: r`Una balanza magnética: una barra conductora horizontal de $60{,}0$ cm, conectada a una batería de $15{,}0$ V con $5{,}00\ \Omega$, está en un campo de $1{,}50$ T. La masa cuelga del centro de la barra y todo su peso lo soporta la fuerza magnética. ¿Cuál es la masa máxima que puede medir?`, resolucion: r`$I=3$ A; $F=BIL=1{,}5\cdot3\cdot0{,}6=2{,}7$ N; $m=\frac Fg=0{,}276$ kg.` },
      { n: '8', tema: 'm06', tipo: 'practica', enunciado: r`Dos alambres de cobre de igual longitud: la resistencia de A es tres veces la de B. ¿Cuál es la relación entre sus radios?`, resolucion: r`$R\propto\frac1{r^2}$: $\frac{r_A}{r_B}=\frac1{\sqrt3}=0{,}577$.` },
    ],
  },
  {
    id: 'p1-2024-07-05-t1', parcial: 1, fecha: '5 de julio de 2024', detalle: 'Tema 1, comisión 2K1',
    items: [
      { n: '1', tema: 'm02', tipo: 'practica', lab: 'carga-entre-placas', enunciado: r`Una gota con carga positiva de $1{,}50$ g cae desde el reposo, en el vacío, desde $6{,}00$ m en un campo eléctrico uniforme vertical de $1{,}00\cdot10^4$ N/C. Llega al suelo a $29{,}4$ m/s. Determine: a) la carga; b) la dirección del campo; c) un gráfico con campo, aceleración, velocidad y fuerzas.`, resolucion: r`$a=\frac{v^2}{2h}=\frac{29{,}4^2}{12}=72{,}0$ m/s² $>g$: la fuerza eléctrica ayuda al peso.

**a)** $qE=m(a-g)\Rightarrow q=\frac{1{,}5\cdot10^{-3}(72{,}0-9{,}8)}{10^4}=9{,}3\ \mu$C. **b)** Con carga positiva y fuerza hacia abajo, el campo apunta **hacia abajo**.` },
      { n: '2', tema: 'm04', tipo: 'practica', lab: 'equipotenciales', enunciado: r`Tres cargas inicialmente muy alejadas se colocan en los vértices de un triángulo equilátero de lado $d$. Una vale $+q$ y otra $+2q$. ¿Cuál es la tercera si el trabajo neto para armar el arreglo es cero?`, resolucion: r`$U=\frac kd(q\cdot2q+qQ+2qQ)=0\Rightarrow2q^2+3qQ=0\Rightarrow Q=-\frac{2q}{3}$.` },
      { n: '3', tema: 'm05', tipo: 'practica', lab: 'capacitor', enunciado: r`$C_1=6{,}0$ mF está en serie con el paralelo de $C_2=4{,}0$ mF y $C_3=2{,}0$ mF, conectados a una fuente de $10$ V. ¿Cuál es la capacidad equivalente? Determine la tensión y la carga de cada capacitor.`, resolucion: r`$C_{23}=6$ mF en serie con $6$ mF: $C_{eq}=3{,}0$ mF. $Q_1=30$ mC, $V_1=5$ V; $V_2=V_3=5$ V; $Q_2=20$ mC, $Q_3=10$ mC.` },
      { n: '5', tema: 'm08', tipo: 'practica', lab: 'rc', enunciado: r`Una resistencia de $2$ MΩ está en serie con un condensador de $1{,}5\ \mu$F inicialmente descargado y una batería de $6{,}0$ V. En $t=\tau$ halle: a) la carga; b) la rapidez con que aumenta la carga; c) la corriente; d) la potencia de la batería; e) la potencia en la resistencia; f) grafique carga, corriente y tensión del condensador en función del tiempo.`, resolucion: r`$\tau=3{,}0$ s. **a)** $q=C\varepsilon(1-e^{-1})=5{,}69\ \mu$C. **b)** y **c)** $\frac{dq}{dt}=i=\frac\varepsilon Re^{-1}=1{,}10\ \mu$A. **d)** $P=\varepsilon i=6{,}62\ \mu$W. **e)** $i^2R=2{,}43\ \mu$W; la diferencia, $4{,}19\ \mu$W, se acumula en el capacitor.` },
    ],
  },
  {
    id: 'p1-2024-07-05-t2', parcial: 1, fecha: '5 de julio de 2024', detalle: 'Tema 2, comisión 2K2',
    items: [
      { n: '1', tema: 'm04', tipo: 'practica', lab: 'equipotenciales', enunciado: r`(2,5 puntos) Dos cargas $q_1=1\ \mu$C y $q_2=3\ \mu$C están separadas $1$ m. Calcule: a) el potencial en el punto medio; b) el trabajo necesario para armar el arreglo.`, resolucion: r`**a)** $V=\frac{k(4\,\mu\text C)}{0{,}5}=7{,}19\cdot10^4$ V. **b)** $W=\frac{kq_1q_2}{d}=2{,}70\cdot10^{-2}$ J.` },
      { n: '2', tema: 'm07', tipo: 'practica', lab: 'kirchhoff', enunciado: r`(2,5 puntos) Las resistencias $R_1=3\ \Omega$, $R_2=6\ \Omega$ y $R_3=3\ \Omega$ están en paralelo, y en serie con $R_4=2\ \Omega$; la corriente total es $10$ A. Determine: a) la resistencia equivalente; b) la potencia que consume el circuito.`, resolucion: r`**a)** $3\parallel6\parallel3=1{,}2\ \Omega$; $R_{eq}=3{,}2\ \Omega$. **b)** $P=I^2R_{eq}=320$ W (la fuente da $32$ V).` },
      { n: '3', tema: 'm06', tipo: 'practica', lab: 'deriva', enunciado: r`(2,5 puntos) Un bloque rectangular de cobre de $10\times20\times40$ cm se conecta a $6{,}0$ V entre dos caras opuestas. ¿Cuál es a) la corriente máxima y b) la mínima? ($\rho_{Cu}=1{,}72\cdot10^{-8}\ \Omega$m)`, resolucion: r`**a)** Máxima con el camino más corto y la sección más grande: $L=0{,}1$, $A=0{,}08$: $R=2{,}15\cdot10^{-8}\ \Omega$, $I=2{,}8\cdot10^8$ A. **b)** Mínima con $L=0{,}4$, $A=0{,}02$: $R=3{,}44\cdot10^{-7}\ \Omega$, $I=1{,}7\cdot10^7$ A.` },
      { n: '4', tema: 'm06', tipo: 'teoria', enunciado: r`(1,25 cada una) a) ¿Cuál es la relación de longitudes entre un conductor de cobre y otro de aluminio de igual resistencia, si $A_{Cu}=\frac12A_{Al}$? ($\rho_{Cu}=1{,}71\cdot10^{-8}$, $\rho_{Al}=2{,}82\cdot10^{-8}\ \Omega$m) b) Si una placa de un condensador se mueve de forma que el área superpuesta se reduce a la mitad, manteniéndose paralelas, ¿cómo cambia la capacitancia?`, resolucion: r`**a)** $\frac{\rho_{Cu}L_{Cu}}{A_{Cu}}=\frac{\rho_{Al}L_{Al}}{A_{Al}}\Rightarrow\frac{L_{Cu}}{L_{Al}}=\frac12\cdot\frac{2{,}82}{1{,}71}=0{,}825$. **b)** $C=\frac{\varepsilon_0A}{d}$: se reduce a la **mitad**.` },
    ],
  },
  {
    id: 'p1-2024-07-04-t1', parcial: 1, fecha: '4 de julio de 2024', detalle: 'Tema 1',
    items: [
      { n: '1', tema: 'm02', tipo: 'practica', enunciado: r`(2,5 puntos) Una gota de agua de $3{,}50\cdot10^{-9}$ kg está suspendida inmóvil por un campo uniforme de $8480$ N/C dirigido hacia arriba. a) ¿La carga en exceso es positiva o negativa? b) ¿Cuántos electrones o protones en exceso tiene?`, resolucion: r`**a)** La fuerza eléctrica debe ir hacia arriba, igual que el campo: carga **positiva**. **b)** $q=\frac{mg}{E}=4{,}04\cdot10^{-12}$ C, es decir $2{,}53\cdot10^7$ protones en exceso (le faltan electrones).` },
      { n: '2', tema: 'm08', tipo: 'practica', lab: 'rc', enunciado: r`(2,5 puntos) Un capacitor de $2$ nF con carga inicial de $5{,}1\ \mu$C se descarga a través de $1{,}3$ kΩ. Calcule: a) la corriente a los $9$ s (en el TP: $9\ \mu$s); b) la corriente máxima.`, resolucion: r`$\tau=RC=2{,}6\ \mu$s. **b)** $I_0=\frac{q_0}{RC}=1{,}96$ A. **a)** A los $9\ \mu$s: $1{,}96e^{-3{,}46}=61{,}6$ mA. A los $9$ **s** ya pasaron millones de constantes de tiempo: la corriente es nula a todo efecto.` },
      { n: '3', tema: 'm08', tipo: 'teoria', enunciado: r`(1,25 cada una) a) $R_1$ y $R_2$ ($R_2>R_1$) en serie a una fuente DC: ¿cuál disipa más? ¿Y en paralelo? b) Una carga está dentro de una gaussiana esférica de radio R. Si se reemplaza por un cubo de lado $2R$, ¿el flujo es mayor o menor? c) Tres capacitores iguales: ¿almacenan más energía en serie o en paralelo? d) En un RC, la energía que entrega la fuente hasta cargar el capacitor, ¿es mayor, menor o igual a la almacenada?`, resolucion: r`**a)** Serie: misma corriente, $P=I^2R$: disipa más $R_2$. Paralelo: misma tensión, $P=\frac{V^2}R$: disipa más $R_1$.

**b)** Igual: $\Phi=\frac{q}{\varepsilon_0}$ no depende de la forma de la superficie.

**c)** En paralelo: $3C$ frente a $\frac C3$, nueve veces más.

**d)** Mayor: la fuente entrega $C\varepsilon^2$ y el capacitor guarda $\frac12C\varepsilon^2$; la otra mitad se disipa en la resistencia, sea cual sea $R$.` },
    ],
  },
  {
    id: 'p1-2023-06-23', parcial: 1, fecha: '23 de junio de 2023', detalle: 'Cuestionario',
    items: [
      { n: '1', tema: 'm04', tipo: 'teoria', enunciado: r`(2 puntos) Dos partículas con cargas positivas $Q$ y $q$ están a una distancia $a$. Siendo la masa de $q$ despreciable, ¿qué trabajo realiza el campo de $Q$ para mover $q$ hasta el infinito?`, resolucion: r`$W=q(V_a-V_\infty)=\frac{kQq}{a}$, positivo: el campo de una carga positiva empuja hacia afuera a otra positiva.` },
      { n: '2', tema: 'm05', tipo: 'practica', lab: 'capacitor', enunciado: r`(1,5 puntos) Un capacitor de placas paralelas de $6{,}00\cdot10^{-3}\ \text m^2$ contiene mica ($\kappa=5$); la distancia entre placas es $8{,}85\cdot10^{-3}$ m y la carga $4{,}00\cdot10^{-8}$ C. Determine: a) la capacitancia; b) la diferencia de potencial; c) el campo entre las placas.`, resolucion: r`**a)** $C=\frac{\kappa\varepsilon_0A}{d}=30{,}0$ pF. **b)** $V=\frac QC=1{,}33\cdot10^3$ V. **c)** $E=\frac Vd=1{,}51\cdot10^5$ V/m.` },
      { n: '3', tema: 'm03', tipo: 'practica', lab: 'gauss', enunciado: r`(2,5 puntos) a) ¿Cuál es el flujo del campo uniforme $\vec E=(4{,}0\hat\jmath+3{,}0\hat k)\cdot10^3$ N/C a través de un círculo de $2{,}0$ m de radio en el plano $xy$? b) Si el campo es $\vec E=cy^2\hat k$ y atraviesa un rectángulo de lados $a$ (en $x$) y $b$ (en $y$) sobre el plano $xy$, determine el flujo.`, resolucion: r`**a)** Solo la componente normal ($z$) atraviesa: $\Phi=3{,}0\cdot10^3\cdot\pi\cdot2^2=3{,}77\cdot10^4$ N·m²/C.

**b)** El campo varía con $y$: $\Phi=\int_0^bcy^2\,a\,dy=\frac{cab^3}{3}$.` },
      { n: '4', tema: 'm06', tipo: 'practica', enunciado: r`(2 puntos) El nicromo tiene resistividad $1{,}50\cdot10^{-6}\ \Omega$m. a) Si el radio del alambre es $0{,}321$ mm, ¿cuál es su resistencia por metro? b) Una tostadora de $1{,}00$ kW a $220$ V usa este alambre: ¿qué longitud hace falta?`, resolucion: r`**a)** $\frac RL=\frac{\rho}{\pi r^2}=4{,}63\ \Omega$/m. **b)** $R=\frac{V^2}P=48{,}4\ \Omega$; $L=10{,}5$ m.` },
      { n: '5', tema: 'm02', tipo: 'practica', enunciado: r`(2 puntos) Una gota de $3{,}00\cdot10^{-12}$ kg está en reposo cerca del suelo en un día de tormenta, con un campo atmosférico de $6{,}00\cdot10^3$ N/C hacia abajo. ¿Cuál es su carga?`, resolucion: r`La fuerza eléctrica debe ir hacia arriba, opuesta al campo: carga **negativa**. $q=-\frac{mg}{E}=-4{,}90\cdot10^{-15}$ C (unos 30 600 electrones en exceso).` },
    ],
  },
  {
    id: 'rp1-2023-08-01', parcial: 1, fecha: '1 de agosto de 2023', detalle: 'Recuperatorio del primer parcial (2,5 puntos cada ejercicio)',
    items: [
      { n: '1', tema: 'm04', tipo: 'practica', lab: 'equipotenciales', enunciado: r`$Q_1=5$ nC y $Q_2=-3$ nC están separadas $35$ cm. Calcule: a) la energía potencial del arreglo; b) el potencial en el punto medio; c) si $Q_2$ se desplaza $10$ cm hacia la positiva, que queda en reposo, ¿cómo varía la energía potencial?`, resolucion: r`**a)** $U=\frac{kQ_1Q_2}{r}=\frac{(9\cdot10^9)(5\cdot10^{-9})(-3\cdot10^{-9})}{0{,}35}=-3{,}86\cdot10^{-7}$ J. **b)** $V=\frac{k(5-3)\,\text{nC}}{0{,}175}=103$ V. **c)** A $0{,}25$ m: $U=-5{,}40\cdot10^{-7}$ J; **disminuye** $1{,}54\cdot10^{-7}$ J (el sistema se acerca a favor de la atracción).` },
      { n: '2', tema: 'm06', tipo: 'practica', enunciado: r`Una barra de cobre de sección rectangular de $2\times8$ mm y $2$ m de largo tiene una caída de potencial de $5$ mV. Con $\rho_{Cu}=1{,}77\cdot10^{-8}\ \Omega$m, halle la corriente.`, resolucion: r`$R=\frac{\rho L}{A}=\frac{(1{,}77\cdot10^{-8})(2)}{16\cdot10^{-6}}=2{,}21\cdot10^{-3}\ \Omega$; $I=\frac{0{,}005}{2{,}21\cdot10^{-3}}=2{,}26$ A.` },
      { n: '3', tema: 'm07', tipo: 'practica', lab: 'kirchhoff', enunciado: r`Una fuente $\varepsilon$ tiene en serie una resistencia de $20\ \Omega$ en cada conductor (una arriba y otra abajo). A continuación, una de $100\ \Omega$ está en paralelo con una rama formada por dos resistencias R en serie. Cada resistencia de $20\ \Omega$ disipa $0{,}45$ W y la de $100\ \Omega$ disipa $0{,}25$ W. a) Calcule R. b) Calcule la potencia que entrega $\varepsilon$.`, resolucion: r`Por las de $20\ \Omega$ pasa toda la corriente: $I=\sqrt{\frac{0{,}45}{20}}=0{,}15$ A. Por la de $100\ \Omega$: $\sqrt{\frac{0{,}25}{100}}=0{,}05$ A, con $V=5$ V.

**a)** Por la rama $2R$ pasan $0{,}10$ A con $5$ V: $2R=50\ \Omega$, $R=25\ \Omega$.

**b)** $\varepsilon=0{,}15\cdot40+5=11$ V; $P=\varepsilon I=1{,}65$ W.` },
      { n: '4', tema: 'm03', tipo: 'teoria', lab: 'gauss', enunciado: r`Mencione la ley de Gauss y defina flujo eléctrico. a) ¿En qué unidades se mide el flujo? b) ¿Dónde se ubican las superficies equipotenciales de una varilla larga conductora cargada positivamente? c) ¿Qué relación tienen con las líneas de campo de la carga fuente? Bosquéjelas.`, resolucion: r`$\Phi_E=\oint\vec E\cdot d\vec A=\frac{Q_{enc}}{\varepsilon_0}$. **a)** N·m²/C (o V·m). **b)** Por simetría son **cilindros coaxiales** con la varilla. **c)** Son perpendiculares a las líneas de campo, que salen radialmente de la varilla; cerca de ella las equipotenciales están más juntas.` },
    ],
  },
  {
    id: 'rp1-2022-07-28', parcial: 1, fecha: '28 de julio de 2022', detalle: 'Recuperatorio del primer parcial, comisión 2K4 (2 puntos cada ítem)',
    items: [
      { n: '1', tema: 'm03', tipo: 'teoria', lab: 'gauss', enunciado: r`Cuatro esferas macizas aislantes tienen la misma carga $Q$ distribuida uniformemente y radios crecientes. a) ¿Cómo son sus densidades volumétricas? b) Un punto P está siempre a la misma distancia del centro; en las dos primeras queda afuera y en las dos últimas adentro. Compare el módulo del campo en P.`, resolucion: r`**a)** $\rho=\frac{Q}{\frac43\pi R^3}$: decrece con el cubo del radio; la más chica es la más densa.

**b)** Si P está afuera, $E=\frac{kQ}{r^2}$: igual en las dos primeras. Si está adentro, $E=\frac{kQr}{R^3}$: menor, y menor cuanto más grande la esfera. Orden: $E_a=E_b>E_c>E_d$.` },
      { n: '2', tema: 'm06', tipo: 'practica', enunciado: r`Se mide la corriente en un alambre de $3{,}6$ m y $3\cdot10^{-5}\ \text m^2$ de sección para distintas tensiones; la gráfica I(mA) vs. V(µV) es una recta que pasa por $6$ mA a $12\ \mu$V. Determine la resistividad.`, resolucion: r`$R=\frac{12\cdot10^{-6}}{6\cdot10^{-3}}=2{,}0\cdot10^{-3}\ \Omega$; $\rho=\frac{RA}{L}=1{,}67\cdot10^{-8}\ \Omega$m (cobre).` },
      { n: '3', tema: 'm05', tipo: 'practica', lab: 'capacitor', enunciado: r`Un capacitor de $5{,}00\ \mu$F y otro de $8{,}00\ \mu$F se conectan en paralelo a $800$ V. a) Halle la carga y el voltaje de cada uno. b) Se desconectan, se separan y se vuelven a conectar entre sí con los bornes de signo opuesto juntos. Halle la carga final y el voltaje.`, resolucion: r`**a)** $V=800$ V; $Q_5=4{,}0$ mC, $Q_8=6{,}4$ mC. **b)** Las cargas opuestas se neutralizan en parte: $Q=6{,}4-4{,}0=2{,}4$ mC repartidos en $13\ \mu$F: $V=185$ V; $Q_5=0{,}92$ mC, $Q_8=1{,}48$ mC.` },
      { n: '4', tema: 'm04', tipo: 'practica', lab: 'equipotenciales', enunciado: r`Una carga de prueba $q=10{,}5$ nC se mueve de A a B. A está a $35{,}5$ cm de $Q=5{,}15\ \mu$C y B a $50{,}6$ cm. Determine: a) $V_{AB}$; b) el trabajo del campo de Q al mover q de A a B.`, resolucion: r`**a)** $V_A-V_B=kQ\left(\frac1{0{,}355}-\frac1{0{,}506}\right)=3{,}89\cdot10^4$ V. **b)** $W=qV_{AB}=4{,}09\cdot10^{-4}$ J (positivo: la carga se aleja de otra del mismo signo).` },
    ],
  },
  {
    id: 'p1-2022-06-23', parcial: 1, fecha: '23 de junio de 2022', detalle: 'Comisión 2K2',
    items: [
      { n: '1', tema: 'm02', tipo: 'practica', lab: 'lineas-de-campo', enunciado: r`(2,5 puntos) Dos cargas iguales $q=1{,}00$ mC están en $(0{,}300;\ 0{,}200)$ m y $(-0{,}300;\ 0{,}200)$ m. Una varilla infinita con $\lambda=3{,}00\ \mu$C/m, paralela al eje $x$, está en $y=-0{,}300$ m. a) Encuentre el campo en el origen. b) ¿Qué fuerza recibiría una carga de prueba $q_0$ en el origen?`, resolucion: r`**Cargas:** cada una a $0{,}361$ m, con $E=\frac{kq}{0{,}13}=6{,}92\cdot10^7$ N/C; las componentes $x$ se cancelan y las $y$ suman $2\cdot6{,}92\cdot10^7\cdot\frac{-0{,}2}{0{,}361}=-7{,}67\cdot10^7$ N/C.

**Varilla:** $E=\frac{\lambda}{2\pi\varepsilon_0(0{,}3)}=1{,}80\cdot10^5$ N/C, alejándose (+y).

**a)** $\vec E=-7{,}65\cdot10^7\,\hat\jmath$ N/C. **b)** $\vec F=q_0\vec E$.` },
      { n: '3', tema: 'm05', tipo: 'practica', lab: 'capacitor', enunciado: r`(2 puntos) Un condensador de $1$ pF con aire se conecta a $12$ V. Sin desconectarlo se introduce mica ($K=5$). a) Calcule la carga adicional que entrega la fuente. b) La variación de energía almacenada.`, resolucion: r`Con la fuente conectada, $V$ fijo. **a)** $\Delta Q=(5-1)(1\,\text{pF})(12)=48$ pC. **b)** $\Delta U=\frac12\Delta C\,V^2=\frac12(4\cdot10^{-12})(144)=2{,}9\cdot10^{-10}$ J (aumenta).` },
      { n: '4', tema: 'm04', tipo: 'teoria', enunciado: r`(3 puntos) a) Defina energía potencial electrostática para $+q_1$ y $-2q_1$ separadas $x$. i) Si $q_1$ se aleja $x/2$ más, ¿la energía crece o decrece? ¿En qué proporción? b) Defina la ley de Ohm. ¿Vale para cualquier material? i) Si se duplica una resistencia conectada a una fuente, ¿qué pasa con la energía que aporta la fuente?`, resolucion: r`**a)** $U=-\frac{2kq_1^2}{x}$; a $1{,}5x$, $U'=\frac23U$: **crece** (se hace menos negativa). Ver el final del 16-03-2016, ítem 2.

**b)** $V=IR$ con $R$ constante: vale para conductores **óhmicos** (metales a temperatura constante), no para diodos, gases o semiconductores. **i)** Con $V$ fija, $P=\frac{V^2}{R}$: la potencia (energía por segundo) se reduce a la **mitad**.` },
    ],
  },
  {
    id: 'p1-2018-06-27', parcial: 1, fecha: '27 de junio de 2018', detalle: 'Comisión 2K1 (2,5 puntos cada ejercicio)',
    items: [
      { n: '1', tema: 'm08', tipo: 'teoria', lab: 'rc', enunciado: r`En un RC serie conectado a una fuente DC hay una etapa transitoria de carga en la que la tensión del capacitor no es constante. Detalle la ecuación de carga temporal y sus parámetros. a) ¿Qué pasa con el tiempo de carga si se coloca una resistencia mayor? b) ¿Cuál es la energía almacenada al terminar el transitorio? c) ¿La energía que entrega la fuente es la misma? ¿Qué pasa en la resistencia?`, resolucion: r`$q(t)=C\varepsilon\left(1-e^{-t/RC}\right)$: $C\varepsilon$ es la carga final y $\tau=RC$ la constante de tiempo (ver el final "cuestionario teórico").

**a)** Aumenta: $\tau=RC$ crece. **b)** $U=\frac12C\varepsilon^2$. **c)** No: la fuente entrega $Q\varepsilon=C\varepsilon^2$, el doble; la otra mitad se disipa en $R$ como calor, cualquiera sea su valor.` },
      { n: '2', tema: 'm02', tipo: 'practica', lab: 'carga-entre-placas', enunciado: r`Entre dos placas separadas $2{,}5$ cm hay un campo uniforme de $6\cdot10^4$ N/C. Para un electrón ($m=9{,}6\cdot10^{-31}$ kg según el examen; $q=1{,}6\cdot10^{-19}$ C) calcule: a) la aceleración al desprenderse de la placa negativa; b) el tiempo en cruzar; c) la aceleración a mitad de camino.`, resolucion: r`**a)** $a=\frac{eE}{m}=\frac{(1{,}6\cdot10^{-19})(6\cdot10^4)}{9{,}6\cdot10^{-31}}=1{,}0\cdot10^{16}$ m/s². **b)** $t=\sqrt{\frac{2d}{a}}=2{,}2$ ns. **c)** La misma: el campo es uniforme.` },
      { n: '4', tema: 'm03', tipo: 'teoria', lab: 'gauss', enunciado: r`Mencione la ley de Gauss y defina flujo eléctrico. a) ¿Unidades del flujo? b) Úsela para calcular el campo de una varilla larga conductora con carga positiva uniforme en un punto P a una distancia $y$ pequeña respecto de su longitud.`, resolucion: r`Ver el final del 13-05-2015, ítem 2: $\Phi$ en N·m²/C y $E=\frac{\lambda}{2\pi\varepsilon_0y}$.` },
    ],
  },
];

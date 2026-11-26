const r = String.raw;

export default {
  intro: r`Si la corriente de una bobina cambia, cambia su propio flujo y se induce una fem en ella misma (**autoinducción**) o en una bobina vecina (**inducción mutua**). La inductancia es para el campo magnético lo que la capacidad es para el eléctrico: mide cuánta energía magnética guarda un componente.`,
  teoria: [
    {
      id: 'mutua', titulo: 'Inductancia mutua',
      texto: r`Si por la bobina 1 circula $i_1$, parte de su campo atraviesa la bobina 2 con un flujo concatenado $N_2\Phi_{21}$ proporcional a $i_1$:

$$M=\frac{N_2\Phi_{21}}{i_1}=\frac{N_1\Phi_{12}}{i_2},\qquad\varepsilon_2=-M\frac{di_1}{dt}\qquad[M]=\frac{\text{Wb}}{\text A}=\text H\ (\text{henry})$$

$M$ es simétrica y depende solo de la geometría, de la posición relativa y del núcleo. Con **corriente continua** estacionaria no hay inducción; con **alterna**, sí.

**Bobina de $N_2$ vueltas sobre un solenoide largo** ($N_1$, largo $\ell$, sección $A$): el campo del solenoide $\mu_0\frac{N_1}{\ell}i_1$ atraviesa la bobina por la sección del **solenoide**:

$$M=\frac{\mu_0N_1N_2A}{\ell}$$

> Si la bobina exterior es más grande que el solenoide, el área que cuenta es la del solenoide: afuera el campo es nulo (parcial de noviembre de 2024).`,
    },
    {
      id: 'auto', titulo: 'Autoinductancia',
      texto: r`El flujo propio de una bobina es proporcional a su corriente:

$$L=\frac{N\Phi_B}{i},\qquad\varepsilon=-L\frac{di}{dt}$$

La fem autoinducida se **opone a los cambios** de corriente (Lenz): una bobina "frena" las variaciones, como una masa frena los cambios de velocidad.

**Solenoide** de $N$ vueltas, largo $\ell$ y sección $A$: $\Phi=BA=\mu_0\frac N\ell iA$, así que

$$L=\frac{\mu_0N^2A}{\ell}=\mu_0n^2A\ell$$

**Toroide** de sección rectangular (alto $h$, radios $a$ y $b$): $\Phi=\int_a^b\frac{\mu_0Ni}{2\pi r}h\,dr$, y

$$L=\frac{\mu_0N^2h}{2\pi}\ln\frac ba$$

Con un núcleo de permeabilidad relativa $K_m$, todo se multiplica por $K_m$.

**Inductores en serie** (sin acoplamiento): $L=L_1+L_2$. **En paralelo:** $\frac1L=\frac1{L_1}+\frac1{L_2}$. Con acoplamiento mutuo en paralelo: $L_{eq}=\frac{L_1L_2-M^2}{L_1+L_2-2M}$.`,
    },
    {
      id: 'energia', titulo: 'Energía magnética',
      texto: r`Para establecer una corriente $I$ en una bobina hay que vencer la fem autoinducida: $dW=Li\,di$. Integrando:

$$U=\frac12LI^2$$

La energía está guardada en el **campo magnético**, con densidad

$$u=\frac{B^2}{2\mu_0}\qquad\left[\frac{\text J}{\text m^3}\right]$$

Comparar con el capacitor: $U=\frac12CV^2$ y $u=\frac12\varepsilon_0E^2$.

**Bobina real:** tiene resistencia $r$. La tensión entre sus bornes es $v=ir+L\frac{di}{dt}$: si la corriente crece, la tensión es mayor que $ir$; si decrece, menor (TP 12/13).`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 12, ej. 2',
      enunciado: r`Un inductor solenoidal de 420 vueltas, $16{,}0$ cm de largo y $3{,}00\ \text{cm}^2$ de sección. ¿Qué rapidez de disminución de la corriente induce $175\ \mu$V?`,
      pasos: [
        r`$L=\frac{\mu_0N^2A}{\ell}=\frac{(4\pi\cdot10^{-7})(420)^2(3\cdot10^{-4})}{0{,}16}=4{,}16\cdot10^{-4}$ H.`,
        r`$\left|\frac{di}{dt}\right|=\frac{\varepsilon}{L}=\frac{175\cdot10^{-6}}{4{,}16\cdot10^{-4}}$`,
      ],
      respuesta: r`$0{,}421$ A/s (se repitió en el 2.º parcial de 2026).`,
    },
    {
      fuente: 'TP 12, ej. 4',
      enunciado: r`Un toroide de 500 espiras, sección $6{,}25\ \text{cm}^2$ y radio medio $4{,}00$ cm. a) Autoinductancia. b) Si la corriente baja uniformemente de $5{,}00$ a $2{,}00$ A en $3{,}00$ ms, ¿fem autoinducida?`,
      pasos: [
        r`**a)** Con el radio medio, $B\approx\frac{\mu_0Ni}{2\pi r}$ uniforme: $L=\frac{\mu_0N^2A}{2\pi r}=\frac{(4\pi\cdot10^{-7})(500)^2(6{,}25\cdot10^{-4})}{2\pi\cdot0{,}04}=7{,}81\cdot10^{-4}$ H.`,
        r`**b)** $\varepsilon=L\frac{\Delta i}{\Delta t}=7{,}81\cdot10^{-4}\cdot\frac{3}{0{,}003}=0{,}781$ V, en el sentido que intenta mantener la corriente.`,
      ],
    },
    {
      fuente: 'TP 12, ej. 5',
      enunciado: r`Una bobina de $L=3{,}10$ H lleva $15{,}0$ A, que baja a cero en $75{,}0$ ms. a) ¿Fem inducida? b) ¿Energía almacenada al principio? c) ¿Potencia media con que se retira?`,
      pasos: [
        r`**a)** $\varepsilon=L\frac{\Delta i}{\Delta t}=3{,}1\cdot\frac{15}{0{,}075}=620$ V.`,
        r`**b)** $U=\frac12LI^2=\frac12\cdot3{,}1\cdot225=349$ J.`,
        r`**c)** $P=\frac{U}{\Delta t}=4{,}65\cdot10^3$ W.`,
      ],
    },
    {
      fuente: 'TP 12, ej. 8',
      enunciado: r`Dos solenoides coaxiales A (400 vueltas) y B (700 vueltas). Con $3{,}50$ A en A hay $300\ \mu$Wb por vuelta en A y $90{,}0\ \mu$Wb por vuelta en B. a) M. b) Autoinductancia de A. c) Fem en B si la corriente en A crece a $0{,}500$ A/s.`,
      pasos: [
        r`**a)** $M=\frac{N_B\Phi_B}{i_A}=\frac{700\cdot90\cdot10^{-6}}{3{,}5}=18{,}0$ mH.`,
        r`**b)** $L_A=\frac{N_A\Phi_A}{i_A}=\frac{400\cdot300\cdot10^{-6}}{3{,}5}=34{,}3$ mH.`,
        r`**c)** $\varepsilon_B=-M\frac{di_A}{dt}=-9{,}00$ mV.`,
      ],
    },
    {
      fuente: '2.º parcial 14-11-2024, ej. 3',
      enunciado: r`Una bobina de 150 vueltas y radio $5{,}00$ cm, cerrada con $12{,}0\ \Omega$, rodea un solenoide de 230 vueltas/cm y $4{,}50$ cm de radio. La corriente del solenoide pasa de $0$ a $2{,}00$ A en $0{,}10$ s. Corriente inducida en la bobina.`,
      pasos: [
        r`Solo hay campo dentro del solenoide: el área es $\pi(0{,}045)^2=6{,}36\cdot10^{-3}$ m².`,
        r`$\frac{dB}{dt}=\mu_0n\frac{di}{dt}=(4\pi\cdot10^{-7})(23\,000)(20)=0{,}578$ T/s.`,
        r`$\varepsilon=150\cdot6{,}36\cdot10^{-3}\cdot0{,}578=0{,}552$ V; $I=\frac{0{,}552}{12}$.`,
      ],
      respuesta: r`$46$ mA.`,
    },
    {
      fuente: '2.º parcial 27-11-2023, ej. 3',
      enunciado: r`Una bobina tiene $I(t)=50t-5t^2$ (A, s). En $t=0{,}800$ s la fem en una bobina vecina es $-3{,}20$ V. ¿M?`,
      pasos: [
        r`$\frac{dI}{dt}=50-10t=42$ A/s.`,
        r`$M=\frac{|\varepsilon|}{dI/dt}=\frac{3{,}2}{42}$`,
      ],
      respuesta: r`$76{,}2$ mH.`,
    },
  ],
  preguntas: [
    { id: 'm12-q1', p: 'La autoinductancia de un solenoide, si se duplica la cantidad de vueltas manteniendo largo y sección:', opciones: ['Se duplica', 'Se cuadruplica', 'No cambia', 'Se reduce a la mitad'], ok: 1, por: r`$L=\frac{\mu_0N^2A}{\ell}$: doble de vueltas da doble de campo y doble de vueltas concatenando ese flujo.` },
    { id: 'm12-q2', p: 'Si la corriente por una bobina es constante (y no nula), la fem autoinducida es:', opciones: ['LI', 'Cero', 'Máxima', '½LI²'], ok: 1, por: r`$\varepsilon=-L\frac{di}{dt}$.` },
    { id: 'm12-q3', p: 'La energía almacenada en una bobina está en:', opciones: ['El alambre', 'El campo magnético', 'El campo eléctrico', 'La resistencia'], ok: 1, por: r`$u=\frac{B^2}{2\mu_0}$ por unidad de volumen.` },
    { id: 'm12-q4', p: r`Una bobina de $0{,}250$ H. ¿Qué fem se autoinduce si la corriente sube a $0{,}0640$ A/s?`, opciones: ['16,0 mV', '3,9 V', '0,250 V', '64 mV'], ok: 0, por: r`$\varepsilon=L\frac{di}{dt}=0{,}25\cdot0{,}064$.` },
    { id: 'm12-q5', p: 'La inductancia mutua entre dos bobinas depende de:', opciones: ['Las corrientes que circulan por cada bobina', 'La geometría, la posición relativa y el núcleo', 'Solo de la resistencia de los bobinados', 'De la frecuencia de la corriente'], ok: 1, por: 'Como la capacidad, es una constante geométrica (y del material).' },
    { id: 'm12-q6', p: 'Se cambia el núcleo de madera de dos bobinas acopladas por hierro con Kr = 800. La inductancia mutua:', opciones: ['No cambia', 'Se multiplica por 800', 'Se divide por 800', 'Se multiplica por √800'], ok: 1, por: 'El núcleo multiplica el campo y el flujo por Kr.' },
  ],
};

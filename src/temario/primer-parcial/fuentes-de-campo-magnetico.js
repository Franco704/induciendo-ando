const r = String.raw;

export default {
  intro: r`Las corrientes crean campos magnéticos. La ley de **Biot-Savart** calcula el campo de cualquier corriente sumando pedacitos; la ley de **Ampère** lo hace en una línea cuando hay simetría (hilo, solenoide, toroide, coaxial). De acá sale la fuerza entre dos conductores paralelos, que es pregunta fija de los exámenes.`,
  teoria: [
    {
      id: 'biot', titulo: 'Ley de Biot-Savart',
      texto: r`Un elemento de corriente $I\,d\vec l$ crea a distancia $r$ un campo

$$d\vec B=\frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^2},\qquad\mu_0=4\pi\cdot10^{-7}\ \frac{\text{T·m}}{\text A}$$

perpendicular a $d\vec l$ y a $\hat r$. Los tramos rectos que apuntan hacia el punto ($d\vec l\parallel\hat r$) no aportan.

Resultados:
- **Hilo recto infinito:** $B=\frac{\mu_0I}{2\pi r}$, en circunferencias alrededor del hilo. Regla de la mano derecha: pulgar en el sentido de la corriente, los dedos dan el sentido de $\vec B$.
- **Hilo semiinfinito**, en un punto frente a su extremo: la mitad, $\frac{\mu_0I}{4\pi r}$.
- **Centro de una espira** circular de radio $R$ y $N$ vueltas: $B=\frac{\mu_0NI}{2R}$.
- **Centro de un arco** de ángulo $\theta$: $B=\frac{\mu_0I\theta}{4\pi R}$ (media espira: $\frac{\mu_0I}{4R}$).
- **Eje de una espira:** $B=\frac{\mu_0IR^2}{2(R^2+x^2)^{3/2}}$.`,
    },
    {
      id: 'ampere', titulo: 'Ley de Ampère',
      texto: r`La circulación de $\vec B$ en cualquier curva cerrada es $\mu_0$ por la corriente que la atraviesa:

$$\oint\vec B\cdot d\vec l=\mu_0I_{enc}$$

Sirve para calcular $B$ cuando hay una curva donde $B$ es constante y tangente:

- **Hilo:** circunferencia de radio $r$: $B\,2\pi r=\mu_0I$.
- **Conductor cilíndrico macizo** de radio $R$ con corriente uniforme: adentro $I_{enc}=I\frac{r^2}{R^2}$, $B=\frac{\mu_0Ir}{2\pi R^2}$; afuera $\frac{\mu_0I}{2\pi r}$.
- **Solenoide** largo con $n$ vueltas por metro: $B=\mu_0nI$ adentro, uniforme; afuera $\approx0$.
- **Toroide** de $N$ vueltas, para $a<r<b$: $B=\frac{\mu_0NI}{2\pi r}$; afuera, cero.
- **Cable coaxial** con corrientes iguales y opuestas: fuera del cable $B=0$.

Con un núcleo de material magnético, $B$ se multiplica por la permeabilidad relativa $K_m$.`,
    },
    {
      id: 'paralelos', titulo: 'Fuerza entre conductores paralelos',
      texto: r`El conductor 1 crea en el 2 un campo $B_1=\frac{\mu_0I_1}{2\pi d}$; el 2, con corriente en ese campo, recibe $F=I_2LB_1$:

$$\frac{F}{L}=\frac{\mu_0I_1I_2}{2\pi d}$$

- Corrientes en el **mismo sentido** se **atraen**; en sentidos opuestos se repelen.
- Las fuerzas sobre ambos son iguales y opuestas (tercera ley), aunque las corrientes sean distintas.
- Hasta 2019 el ampere se definía así: dos conductores a 1 m con 1 A cada uno se atraen con $2\cdot10^{-7}$ N por metro.

**Campo de varios hilos:** se suman vectorialmente. Entre dos hilos con corrientes en el **mismo** sentido los campos se restan y hay un punto de campo nulo entre ellos; con corrientes **opuestas** se suman entre ellos y el punto nulo queda afuera, del lado de la corriente menor.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 10, ej. 1',
      enunciado: r`(I) Un cable con $305$ A está perpendicular a un campo uniforme de $7{,}00\cdot10^{-3}$ T. ¿A qué distancia del cable el campo neto es cero? (II) Dos espiras de una vuelta, de $4{,}0$ cm de radio, con centro común y planos perpendiculares, llevan $1{,}7$ A cada una. ¿Campo en el centro?`,
      pasos: [
        r`**I)** $\frac{\mu_0I}{2\pi r}=7\cdot10^{-3}\Rightarrow r=\frac{(2\cdot10^{-7})(305)}{7\cdot10^{-3}}=8{,}71\cdot10^{-3}$ m, del lado donde el campo del cable es opuesto al uniforme.`,
        r`**II)** Cada espira da $\frac{\mu_0I}{2R}=2{,}67\cdot10^{-5}$ T, y son perpendiculares: $B=\sqrt2\cdot2{,}67\cdot10^{-5}$.`,
      ],
      respuesta: r`I) $8{,}71$ mm; II) $3{,}8\cdot10^{-5}$ T.`,
    },
    {
      fuente: 'TP 10, ej. 3',
      enunciado: r`Dos cables cuelgan de cuerdas de $1{,}2$ m; tienen $0{,}050$ kg/m y corrientes iguales y opuestas. El ángulo entre las cuerdas es $15^\circ$. ¿Cuál es la corriente?`,
      pasos: [
        r`Cada cuerda se aparta $7{,}5^\circ$: $d=2(1{,}2)\operatorname{sen}7{,}5^\circ=0{,}313$ m.`,
        r`Por metro: $\frac FL=\lambda g\operatorname{tg}7{,}5^\circ=0{,}05\cdot9{,}8\cdot0{,}1317=0{,}0645$ N/m.`,
        r`$\frac{\mu_0I^2}{2\pi d}=0{,}0645\Rightarrow I=\sqrt{\frac{0{,}0645\cdot0{,}313}{2\cdot10^{-7}}}$`,
        r`Se repelen porque las corrientes son opuestas; con el mismo sentido se atraerían y se juntarían.`,
      ],
      respuesta: r`$I\approx318$ A (el TP da $320$ A).`,
    },
    {
      fuente: 'TP 10, ej. 6',
      enunciado: r`Dos conductores con $3{,}00$ A hacia la página están separados $13{,}0$ cm. P está a $5{,}00$ cm de uno y a $12{,}0$ cm del otro. Campo en P.`,
      pasos: [
        r`$5^2+12^2=13^2$: el ángulo en P es recto, así que los campos son perpendiculares.`,
        r`$B_1=\frac{(2\cdot10^{-7})(3)}{0{,}05}=12\ \mu$T; $B_2=\frac{(2\cdot10^{-7})(3)}{0{,}12}=5\ \mu$T.`,
      ],
      respuesta: r`$B=13{,}0\ \mu$T (en la figura del TP, $-13{,}0\ \mu\text T\ \hat\jmath$).`,
      lab: 'campo-de-corrientes',
    },
    {
      fuente: 'TP 10, ej. 8',
      enunciado: r`Un coaxial tiene un conductor interior macizo de radio $R_1$ y un tubo de radios $R_2$ y $R_3$, con corrientes $I_0$ iguales y opuestas uniformes. Halle B en las cuatro regiones.`,
      pasos: [
        r`$r<R_1$: $B=\frac{\mu_0I_0r}{2\pi R_1^2}$.`,
        r`$R_1<r<R_2$: $B=\frac{\mu_0I_0}{2\pi r}$.`,
        r`$R_2<r<R_3$: $I_{enc}=I_0\left(1-\frac{r^2-R_2^2}{R_3^2-R_2^2}\right)$, $B=\frac{\mu_0I_{enc}}{2\pi r}$.`,
        r`$r>R_3$: $I_{enc}=0$, $B=0$. El coaxial no "irradia" campo hacia afuera.`,
      ],
    },
    {
      fuente: 'TP 10, ej. 10',
      enunciado: r`Un solenoide de $1400$ vueltas/m lleva $3{,}50$ A. Adentro hay una bobina de 50 vueltas, $1{,}20\cdot10^{-3}$ m² y $0{,}500$ A, con su normal a $90^\circ$ del eje. ¿Torque sobre la bobina?`,
      pasos: [
        r`$B=\mu_0nI=(4\pi\cdot10^{-7})(1400)(3{,}5)=6{,}16\cdot10^{-3}$ T.`,
        r`$\tau=NIAB\operatorname{sen}90^\circ=50\cdot0{,}5\cdot1{,}2\cdot10^{-3}\cdot6{,}16\cdot10^{-3}$`,
      ],
      respuesta: r`$1{,}8\cdot10^{-4}$ N·m.`,
    },
    {
      fuente: '2.º parcial 22-11-2022, ej. 2',
      enunciado: r`Dos conductores paralelos separados $10$ cm llevan $30$ A (derecha) y $40$ A (izquierda) en el mismo sentido. a) ¿Dónde se anula el campo? b) ¿Qué fuerza recibe un conductor equidistante con $5$ A en sentido contrario?`,
      pasos: [
        r`**a)** Entre ambos: $\frac{40}{0{,}1-x}=\frac{30}{x}\Rightarrow x=4{,}29$ cm del de la derecha.`,
        r`**b)** Ambos lo repelen (corriente opuesta). Del de 40 A: $\frac{(2\cdot10^{-7})(5)(40)}{0{,}05}=8\cdot10^{-4}$ N/m; del de 30 A: $6\cdot10^{-4}$ N/m.`,
      ],
      respuesta: r`a) $4{,}29$ cm del de 30 A; b) $2\cdot10^{-4}$ N/m, alejándose del de 40 A.`,
      lab: 'campo-de-corrientes',
    },
  ],
  preguntas: [
    { id: 'm10-q1', p: 'Dos conductores paralelos con corrientes en el mismo sentido:', opciones: ['Se repelen', 'Se atraen', 'No interactúan', 'Se atraen solo si las corrientes son iguales'], ok: 1, por: r`Cada uno está en el campo del otro; $I\vec L\times\vec B$ apunta hacia el otro conductor.` },
    { id: 'm10-q2', p: 'El campo de un hilo recto infinito a distancia r:', opciones: ['Es radial y decrece como 1/r²', 'Forma circunferencias y decrece como 1/r', 'Es paralelo al hilo y vale μ₀I/(2πr)', 'Es uniforme en todo el espacio alrededor'], ok: 1, por: r`$B=\frac{\mu_0I}{2\pi r}$, tangente a circunferencias centradas en el hilo.` },
    { id: 'm10-q3', p: 'Dentro de un solenoide largo ideal, el campo:', opciones: ['Es nulo', 'Es uniforme y vale μ₀nI', 'Decrece desde el eje hacia las paredes', 'Es radial'], ok: 1, por: 'Por Ampère con un rectángulo que entra y sale del solenoide.' },
    { id: 'm10-q4', p: 'Fuera de un cable coaxial con corrientes iguales y opuestas:', opciones: ['B = μ₀I/(2πr)', 'B = 0', 'B se duplica', 'B es uniforme'], ok: 1, por: 'Una circunferencia afuera encierra corriente neta nula.' },
    { id: 'm10-q5', p: 'Dos hilos con corrientes opuestas de 2 A y 4 A. El punto de campo nulo está:', opciones: ['Entre los dos, más cerca del de 2 A', 'Entre los dos, en el medio', 'Afuera, del lado del de 2 A', 'Afuera, del lado del de 4 A'], ok: 2, por: 'Con corrientes opuestas, entre ellos los campos se suman. Afuera se oponen, y hay que estar cerca de la corriente menor para compensar.' },
    { id: 'm10-q6', p: r`El campo en el centro de una espira de radio R con corriente I es:`, opciones: [r`$\mu_0I/(2\pi R)$`, r`$\mu_0I/(2R)$`, r`$\mu_0I/(4R)$`, r`$\mu_0nI$`], ok: 1, por: r`Integrando Biot-Savart sobre la circunferencia: $\frac{\mu_0I}{4\pi R^2}2\pi R$.` },
  ],
};

const r = String.raw;

export default {
  intro: r`Un capacitor guarda carga y energía en el campo eléctrico entre dos conductores. Es el primer "componente" de la materia: aparece en los circuitos RC, en el LC y en la corriente alterna. Los ejercicios típicos son de asociaciones, de energía y de qué pasa al meter un dieléctrico con la fuente conectada o desconectada.`,
  teoria: [
    {
      id: 'capacidad', titulo: 'Capacidad',
      texto: r`Dos conductores con cargas $+Q$ y $-Q$ tienen entre ellos una diferencia de potencial $V$ proporcional a $Q$. La constante de proporcionalidad es la **capacidad**:

$$C=\frac QV\qquad[C]=\frac{\text C}{\text V}=\text F\ (\text{farad})$$

Depende solo de la **geometría** y del material entre los conductores, no de $Q$ ni de $V$. Un farad es enorme: un capacitor de placas de 1 F con separación de 1 mm tendría placas de más de 10 km de lado (TP 5, ej. 1).

**Placas paralelas** (área $A$, separación $d$): el campo entre placas es $E=\frac{\sigma}{\varepsilon_0}=\frac{Q}{\varepsilon_0A}$ y $V=Ed$:

$$C=\frac{\varepsilon_0A}{d}$$

**Esférico** (radios $a<b$): $C=4\pi\varepsilon_0\frac{ab}{b-a}$. **Cilíndrico** (radios $a<b$, largo $L$): $C=\frac{2\pi\varepsilon_0L}{\ln(b/a)}$. Una esfera aislada de radio $R$: $C=4\pi\varepsilon_0R$.`,
    },
    {
      id: 'asociaciones', titulo: 'Asociaciones',
      texto: r`**En paralelo:** todos tienen la **misma tensión** $V$; las cargas se suman.

$$C_{eq}=C_1+C_2+\dots\qquad Q_i=C_iV$$

**En serie:** todos tienen la **misma carga** $Q$ (la que entra a una placa sale de la otra); las tensiones se suman.

$$\frac1{C_{eq}}=\frac1{C_1}+\frac1{C_2}+\dots\qquad V_i=\frac{Q}{C_i}$$

En serie, el de **menor** capacidad se lleva la **mayor** tensión. Es al revés que con las resistencias.

**Capacitores que se reconectan.** Si se desconectan de la fuente y se conectan entre sí, la **carga total se conserva** (con su signo):
- Placas del mismo signo juntas: $Q=Q_1+Q_2$.
- Placas de signo opuesto juntas: $Q=|Q_1-Q_2|$.
Luego quedan en paralelo: $V=\frac{Q}{C_1+C_2}$. En estas reconexiones se **pierde** energía (en calor y radiación de la corriente transitoria).`,
    },
    {
      id: 'energia', titulo: 'Energía almacenada',
      texto: r`Para cargar un capacitor hay que llevar carga de una placa a otra contra la tensión que ya tiene. Integrando $dW=V\,dq=\frac qC dq$:

$$U=\frac{Q^2}{2C}=\frac12CV^2=\frac12QV$$

La energía está en el **campo**: entre placas, $U=\frac12\varepsilon_0E^2\cdot(Ad)$, así que la **densidad de energía** es

$$u=\frac12\varepsilon_0E^2\qquad\left[\frac{\text J}{\text m^3}\right]$$

Con la misma batería, dos capacitores iguales guardan **4 veces** más energía en paralelo que en serie ($2C$ contra $C/2$).`,
    },
    {
      id: 'dielectricos', titulo: 'Dieléctricos',
      texto: r`Un dieléctrico es un aislante. En un campo, sus moléculas se **polarizan**: aparecen cargas inducidas $\pm\sigma_i$ en sus caras que crean un campo opuesto y **reducen** el campo neto:

$$E=\frac{E_0}{\kappa},\qquad C=\kappa C_0,\qquad\sigma_i=\sigma\left(1-\frac1\kappa\right)$$

$\kappa\ge1$ es la constante dieléctrica (aire $\approx1$, papel $3{,}7$, mica $5$, agua $80$, TiO₂ $173$). La permitividad del material es $\varepsilon=\kappa\varepsilon_0$.

**¿Qué pasa al meter el dieléctrico?**

- **Batería conectada ($V$ fijo):** $C\times\kappa$, $Q\times\kappa$ (la fuente aporta más carga), $V$ y $E$ iguales, $U\times\kappa$.
- **Batería desconectada ($Q$ fijo):** $C\times\kappa$, $Q$ igual, $V\div\kappa$, $E\div\kappa$, $U\div\kappa$ (el capacitor atrae al dieléctrico hacia adentro y esa energía sale del campo).

**Desplazamiento eléctrico:** $\vec D=\varepsilon_0\vec E+\vec P$, y en un medio lineal $\vec D=\varepsilon\vec E$. Su ventaja es que la ley de Gauss para $\vec D$ solo involucra la carga **libre**: $\oint\vec D\cdot d\vec A=Q_{libre}$.

**Capacitor con dos dieléctricos:** si están uno arriba del otro (cada uno ocupa parte del espesor) son capacitores en **serie**; si están uno al lado del otro (cada uno ocupa parte del área), en **paralelo**.

**Rigidez dieléctrica:** el campo máximo que soporta un material antes de que salte una chispa (aire: unos $3\cdot10^6$ V/m).`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 5, ej. 2',
      enunciado: r`Un capacitor de aire se carga con una batería de $9{,}00$ V, se desconecta y se duplica la separación entre placas. ¿Cuál es el nuevo voltaje?`,
      pasos: [
        r`Desconectado: $Q$ no cambia. Al duplicar $d$, $C=\frac{\varepsilon_0A}{d}$ se reduce a la mitad.`,
        r`$V=\frac QC$: se duplica.`,
      ],
      respuesta: r`$18{,}0$ V. (El campo $E=V/d$ no cambia: depende solo de $\sigma$.)`,
      lab: 'capacitor',
    },
    {
      fuente: 'TP 5, ej. 3',
      enunciado: r`Placas de $0{,}0340\ \text m^2$ separadas $2{,}00$ mm de aire, con $200$ V. ¿Capacidad, campo y carga?`,
      pasos: [
        r`$C=\frac{\varepsilon_0A}{d}=\frac{(8{,}85\cdot10^{-12})(0{,}034)}{0{,}002}=150$ pF.`,
        r`$E=\frac Vd=1{,}00\cdot10^5$ V/m.`,
        r`$Q=CV=(150\cdot10^{-12})(200)=30{,}1$ nC.`,
      ],
      respuesta: r`$150$ pF; $1{,}00\cdot10^5$ N/C; $30{,}1$ nC.`,
    },
    {
      fuente: 'TP 5, ej. 4',
      enunciado: r`Dos capacitores de $3{,}00$ y $4{,}00\ \mu$F se cargan por separado con $6{,}00$ V. Se desconectan y se unen con la placa negativa de uno a la positiva del otro. ¿Carga final de cada uno?`,
      pasos: [
        r`Cargas iniciales: $18$ y $24\ \mu$C. Al unir placas opuestas, se neutralizan: $Q=24-18=6\ \mu$C.`,
        r`Quedan en paralelo: $V=\frac{6}{7}=0{,}857$ V.`,
        r`$Q_3=3\cdot0{,}857=2{,}57\ \mu$C; $Q_4=4\cdot0{,}857=3{,}43\ \mu$C.`,
      ],
      respuesta: r`$2{,}57\ \mu$C y $3{,}43\ \mu$C (el TP da $2{,}60\ \mu$C redondeando).`,
    },
    {
      fuente: 'TP 5, ej. 7',
      enunciado: r`Dos capacitores en paralelo conectados a una batería almacenan 5 veces más energía que en serie con la misma batería. ¿Cuál es la relación entre sus capacidades?`,
      pasos: [
        r`$\frac{U_p}{U_s}=\frac{C_1+C_2}{\frac{C_1C_2}{C_1+C_2}}=\frac{(C_1+C_2)^2}{C_1C_2}=5$.`,
        r`Con $x=\frac{C_1}{C_2}$: $(x+1)^2=5x\Rightarrow x^2-3x+1=0$.`,
        r`$x=\frac{3\pm\sqrt5}{2}$.`,
      ],
      respuesta: r`$C_1/C_2=2{,}62$ o $0{,}382$ (son la misma pareja, intercambiada).`,
    },
    {
      fuente: 'TP 5, ej. 8',
      enunciado: r`Una oblea de TiO₂ ($\kappa=173$) de $1{,}00\ \text{cm}^2$ y $0{,}100$ mm de espesor forma un capacitor de placas. a) Capacidad. b) Carga con $12{,}0$ V. c) Densidades de carga libre e inducida. d) Campo.`,
      pasos: [
        r`**a)** $C=\frac{\kappa\varepsilon_0A}{d}=\frac{173(8{,}85\cdot10^{-12})(10^{-4})}{10^{-4}}=1{,}53$ nF.`,
        r`**b)** $Q=CV=18{,}4$ nC.`,
        r`**c)** $\sigma=\frac QA=1{,}84\cdot10^{-4}$ C/m²; $\sigma_i=\sigma\left(1-\frac1{173}\right)=1{,}83\cdot10^{-4}$ C/m².`,
        r`**d)** $E=\frac Vd=1{,}2\cdot10^5$ V/m. (La hoja del TP da $694$ V/m, que es $V/d$ dividido otra vez por $\kappa$; con la batería fijando $V$ entre placas a distancia $d$, el campo es $V/d$.)`,
      ],
    },
    {
      fuente: 'TP 5, ej. 9',
      enunciado: r`Un capacitor de $3{,}00\ \mu$F y otro de $6{,}00\ \mu$F se conectan a $12{,}0$ V. ¿Energía total en serie y en paralelo? ¿Y si ambos tienen mica ($\kappa=5$)?`,
      pasos: [
        r`Serie: $C=2\ \mu$F, $U=\frac12(2\cdot10^{-6})(144)=0{,}144$ mJ.`,
        r`Paralelo: $C=9\ \mu$F, $U=0{,}648$ mJ.`,
        r`Con mica todas las capacidades se multiplican por 5, y con $V$ fijo también la energía: $0{,}720$ y $3{,}24$ mJ.`,
      ],
      respuesta: r`$0{,}144$; $0{,}648$; $0{,}720$; $3{,}24$ mJ.`,
    },
  ],
  preguntas: [
    { id: 'm05-q1', p: 'Un capacitor cargado se desconecta de la batería y se le introduce un dieléctrico. Entonces:', opciones: ['Q aumenta y V queda igual', 'Q queda igual y V disminuye', 'Q y V aumentan', 'Q disminuye y V queda igual'], ok: 1, por: r`Desconectado, la carga no tiene a dónde ir. $C$ sube $\kappa$ veces y $V=Q/C$ baja.` },
    { id: 'm05-q2', p: 'Un capacitor sigue conectado a la batería y se le introduce un dieléctrico. La energía almacenada:', opciones: ['Disminuye κ veces', 'No cambia', 'Aumenta κ veces', 'Aumenta κ² veces'], ok: 2, por: r`$U=\frac12CV^2$ con $V$ fijo y $C\times\kappa$.` },
    { id: 'm05-q3', p: 'Dos capacitores en serie conectados a una batería tienen siempre igual:', opciones: ['Tensión', 'Carga', 'Energía', 'Capacidad'], ok: 1, por: 'La carga que entra a una placa sale de la otra: en serie todos tienen la misma carga.' },
    { id: 'm05-q4', p: r`Un capacitor se carga con $9{,}60$ nC al aplicarle $120$ V. La energía almacenada es:`, opciones: ['0,576 µJ', '1,15 µJ', '0,765 µJ', '80 pJ'], ok: 0, por: r`$U=\frac12QV=\frac12(9{,}6\cdot10^{-9})(120)=5{,}76\cdot10^{-7}$ J.` },
    { id: 'm05-q5', p: r`Dos capacitores de placas paralelas al vacío, con igual área A y separaciones $d_1$ y $d_2$, conectados en serie equivalen a uno con:`, opciones: ['Área 2A y separación d₁ + d₂', 'Área A y separación d₁ + d₂', 'Área A/2 y separación d₁ − d₂', 'Área A y separación d₁ − d₂'], ok: 1, por: r`$\frac1C=\frac{d_1}{\varepsilon_0A}+\frac{d_2}{\varepsilon_0A}=\frac{d_1+d_2}{\varepsilon_0A}$: es como apilarlos.` },
    { id: 'm05-q6', p: 'La capacidad de un capacitor depende de:', opciones: ['La carga y la tensión aplicada', 'La geometría y el material entre conductores', 'Solo de la tensión aplicada entre las placas', 'La corriente que lo atraviesa al cargarse'], ok: 1, por: r`$C=Q/V$ es un cociente constante: si $Q$ se duplica, $V$ también.` },
    { id: 'm05-q7', p: r`El campo dentro de un dieléctrico de constante $\kappa$ entre placas con carga fija es:`, opciones: ['κ veces mayor que en vacío', 'Igual que en vacío', 'κ veces menor que en vacío', 'Cero'], ok: 2, por: 'Las cargas de polarización crean un campo opuesto al de las placas.' },
  ],
};

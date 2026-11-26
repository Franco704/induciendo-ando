const r = String.raw;

export default {
  intro: r`El calor es energía en tránsito por diferencia de temperatura. Este módulo junta todo lo que se toma de termodinámica: **calorimetría** con cambios de fase (el problema de agua y hielo está en casi todos los finales), **transferencia de calor**, **primer principio** con los procesos del gas ideal y **máquinas térmicas**. Es el TP más tomado en los exámenes.`,
  teoria: [
    {
      id: 'calor', titulo: 'Calor, calor específico y calor latente',
      texto: r`**Calor específico:** energía para elevar 1 K la temperatura de 1 kg:

$$Q=mc\Delta T\qquad[c]=\frac{\text J}{\text{kg·K}}$$

Agua líquida: $c=4186$ J/kg·K $=1$ cal/g·°C. Hielo: $\approx0{,}5$ cal/g·°C. Capacidad calorífica de un cuerpo: $C=mc$ (J/K). **Equivalente en agua** de un calorímetro: la masa de agua con la misma capacidad calorífica.

**Calor latente:** en un **cambio de fase** la temperatura no cambia; la energía rompe la estructura del sólido o del líquido:

$$Q=\pm mL\qquad[L]=\frac{\text J}{\text{kg}}$$

Agua: fusión $L_f=334$ kJ/kg $=80$ cal/g; vaporización $L_v=2256$ kJ/kg $=540$ cal/g.

**1 cal = 4,186 J** (equivalente mecánico del calor, Joule).`,
    },
    {
      id: 'calorimetria', titulo: 'Calorimetría: el método que no falla',
      texto: r`En un recipiente aislado, lo que ceden unos lo absorben otros: $\sum Q_i=0$ (cada $Q$ con su signo).

**Problemas con hielo y agua** (siempre comparar antes de plantear):
1. Calcular lo que hace falta para llevar el hielo a $0\,^\circ$C: $Q_1=m_hc_h(0-T_h)$.
2. Lo que hace falta para fundirlo todo: $Q_2=m_hL_f$.
3. Lo que puede ceder el agua (y el calorímetro) al llegar a $0\,^\circ$C: $Q_3=m_ac_aT_a$.

- Si $Q_3>Q_1+Q_2$: **todo se funde** y la temperatura final es mayor que 0: $m_ac_a(T_a-T)=Q_1+Q_2+m_hc_aT$.
- Si $Q_1<Q_3<Q_1+Q_2$: queda **hielo y agua a $0\,^\circ$C**; se funde $\frac{Q_3-Q_1}{L_f}$.
- Si $Q_3<Q_1$: el agua empieza a **congelarse**.

Mientras haya hielo y agua juntos, la temperatura se queda en $0\,^\circ$C aunque entre o salga calor (la meseta del gráfico T–Q).`,
    },
    {
      id: 'transferencia', titulo: 'Transferencia de calor',
      texto: r`**Conducción** (Fourier): por choques entre partículas, sin transporte de materia.

$$H=\frac{dQ}{dt}=kA\frac{T_c-T_f}{L}\qquad[k]=\frac{\text W}{\text{m·K}}$$

Cobre $385$, acero $50$, vidrio $0{,}8$, agua $0{,}6$, aire $0{,}024$. **Paredes en serie:** el mismo $H$ atraviesa todas, y se suman las resistencias térmicas $\frac{L}{kA}$: $H=\frac{A\Delta T}{\sum L_i/k_i}$. En una esfera hueca, el área cambia con el radio: se usa $H=-kA(r)\frac{dT}{dr}$.

**Convección:** el fluido se mueve y lleva la energía (natural, por diferencia de densidad, o forzada). $H=hA\Delta T$.

**Radiación** (Stefan-Boltzmann): todo cuerpo emite ondas EM según su temperatura absoluta.

$$H=e\sigma AT^4,\qquad H_{neta}=e\sigma A\left(T^4-T_{amb}^4\right),\qquad\sigma=5{,}67\cdot10^{-8}\ \frac{\text W}{\text m^2\text K^4}$$

**Ley de enfriamiento de Newton:** si la diferencia con el ambiente es chica, $\frac{dT}{dt}=-k(T-T_{amb})$, y la temperatura se acerca exponencialmente a la del ambiente.`,
    },
    {
      id: 'primer-principio', titulo: 'Primer principio',
      texto: r`La energía se conserva: el calor que recibe un sistema se reparte entre aumentar su energía interna y hacer trabajo.

$$Q=\Delta U+W$$

Convención de la cátedra: $Q>0$ si el sistema **recibe** calor; $W>0$ si el sistema **hace** trabajo (se expande).

- $W=\int p\,dV$ es el **área bajo la curva** en el diagrama $p$–$V$. Depende del camino.
- $U$ es una **función de estado**: $\Delta U$ depende solo de los estados inicial y final. Para un gas ideal, $\Delta U=nc_v\Delta T$ en **cualquier** proceso.
- En un **ciclo**, $\Delta U=0$ y $Q_{neto}=W_{neto}$ = área encerrada (positiva si se recorre en sentido horario).

**Procesos del gas ideal** ($c_v=\frac32R$ monoatómico, $\frac52R$ diatómico; $c_p=c_v+R$; $\gamma=\frac{c_p}{c_v}$):
- **Isocórico:** $W=0$, $Q=nc_v\Delta T$.
- **Isobárico:** $W=p\Delta V=nR\Delta T$, $Q=nc_p\Delta T$.
- **Isotérmico:** $\Delta U=0$, $Q=W=nRT\ln\frac{V_2}{V_1}$.
- **Adiabático:** $Q=0$, $W=-\Delta U=\frac{p_1V_1-p_2V_2}{\gamma-1}$, con $pV^\gamma$ y $TV^{\gamma-1}$ constantes.
- **Expansión libre** (contra el vacío): $Q=0$, $W=0$, $\Delta U=0$: la temperatura de un gas ideal no cambia.`,
    },
    {
      id: 'segundo-principio', titulo: 'Segundo principio y máquinas',
      texto: r`**Máquina térmica:** toma $Q_c$ de una fuente caliente, hace trabajo $W$ y cede $Q_f$ a una fría: $W=Q_c-Q_f$.

$$\eta=\frac{W}{Q_c}=1-\frac{Q_f}{Q_c}$$

**Kelvin-Planck:** ninguna máquina cíclica convierte todo el calor en trabajo ($\eta<1$).

**Refrigerador:** con trabajo $W$ saca $Q_f$ de la fuente fría y entrega $Q_c=Q_f+W$ a la caliente. **Clausius:** el calor no pasa solo de un cuerpo frío a uno caliente; hace falta trabajo.

$$\text{COP}=\frac{Q_f}{W}$$

**Carnot** (dos isotermas y dos adiabáticas, reversible): es el máximo posible entre dos temperaturas absolutas:

$$\eta_C=1-\frac{T_f}{T_c},\qquad\text{COP}_C=\frac{T_f}{T_c-T_f}$$

Un dispositivo que supere estos valores viola el segundo principio (trampa del final: COP 3,33 con $T_c=300$ K y $T_f=200$ K, cuyo máximo es 2).

**Entropía:** $\Delta S=\int\frac{dQ_{rev}}{T}$. En un sistema aislado nunca disminuye.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'Final del 25-11-2026, ej. 2b',
      enunciado: r`$600$ g de agua a $15\,^\circ$C en un calorímetro adiabático. ¿Estado final al agregar $50$ g de hielo a $-18\,^\circ$C? ($c_h=0{,}50$, $L_f=80$ cal/g)`,
      pasos: [
        r`$Q_1=50\cdot0{,}5\cdot18=450$ cal; $Q_2=50\cdot80=4000$ cal; $Q_3=600\cdot15=9000$ cal.`,
        r`$Q_3>Q_1+Q_2$: todo se funde. $600(15-T)=4450+50T\Rightarrow T=7{,}0\,^\circ$C.`,
      ],
      respuesta: r`$650$ g de agua a $7{,}0\,^\circ$C.`,
      lab: 'calorimetria',
    },
    {
      fuente: 'TP 19, ej. 3',
      enunciado: r`En un recipiente aislado se agregan $250$ g de hielo a $0\,^\circ$C a $600$ g de agua a $18{,}0\,^\circ$C. a) Temperatura final. b) Hielo que queda.`,
      pasos: [
        r`Fundir todo pide $250\cdot80=20\,000$ cal; el agua puede ceder $600\cdot18=10\,800$ cal.`,
        r`No alcanza: $T=0\,^\circ$C. Se funden $\frac{10\,800}{80}=135$ g.`,
      ],
      respuesta: r`a) $0\,^\circ$C; b) $115$ g de hielo.`,
      lab: 'calorimetria',
    },
    {
      fuente: 'TP 19, ej. 7',
      enunciado: r`$2{,}00$ mol de helio a $300$ K y $0{,}400$ atm se comprimen isotérmicamente a $1{,}20$ atm. a) Volumen final. b) Trabajo sobre el gas. c) Calor.`,
      pasos: [
        r`$V_1=\frac{nRT}{p}=\frac{2\cdot8{,}314\cdot300}{0{,}4\cdot101\,325}=0{,}123$ m³; **a)** $V_2=\frac{V_1}{3}=0{,}0410$ m³.`,
        r`$W_{gas}=nRT\ln\frac{V_2}{V_1}=4988\ln\frac13=-5{,}48$ kJ. **b)** Sobre el gas: $+5{,}48$ kJ.`,
        r`**c)** Isotérmico: $\Delta U=0$, $Q=W_{gas}=-5{,}48$ kJ (cede calor).`,
      ],
      lab: 'ciclo-pv',
    },
    {
      fuente: 'TP 19, ej. 10',
      enunciado: r`Un motor diésel comprime adiabáticamente aire ($\gamma=1{,}40$) desde $280$ K hasta $560\,^\circ$C. ¿Relación de compresión $V_1/V_2$?`,
      pasos: [
        r`$T_1V_1^{\gamma-1}=T_2V_2^{\gamma-1}\Rightarrow\frac{V_1}{V_2}=\left(\frac{T_2}{T_1}\right)^{1/(\gamma-1)}$.`,
        r`$T_2=833$ K: $\left(\frac{833}{280}\right)^{2{,}5}=2{,}975^{2{,}5}$`,
      ],
      respuesta: r`$15{,}3$.`,
    },
    {
      fuente: 'Final del 4-08-2010, ej. 1',
      enunciado: r`$2$ mol de gas ideal monoatómico a $27\,^\circ$C y $20$ L se expanden a presión constante hasta duplicar el volumen y luego adiabáticamente hasta volver a la temperatura inicial. $\Delta U$, Q y W totales.`,
      pasos: [
        r`$T_2=600$ K. Como el estado final tiene $T=300$ K, $\Delta U=0$.`,
        r`Solo la isobárica intercambia calor: $Q=nc_p\Delta T=2\cdot\frac52\cdot8{,}31\cdot300=12\,465$ J.`,
        r`$W=Q-\Delta U=12\,465$ J.`,
      ],
      lab: 'ciclo-pv',
    },
    {
      fuente: 'Final del 17-05-2023, ítem 6',
      enunciado: r`Olla con base de acero de $8{,}50$ mm y $0{,}150$ m²; el agua a $100\,^\circ$C evapora $0{,}390$ kg cada $3$ min. Temperatura de la cara inferior ($k=50{,}2$ W/m·K).`,
      pasos: [
        r`$H=\frac{mL_v}{t}=\frac{0{,}39\cdot2{,}26\cdot10^6}{180}=4{,}9$ kW.`,
        r`$\Delta T=\frac{HL}{kA}=\frac{4900\cdot0{,}0085}{50{,}2\cdot0{,}15}=5{,}5$ K.`,
      ],
      respuesta: r`$105{,}5\,^\circ$C.`,
      lab: 'conduccion',
    },
    {
      fuente: 'Final sin fecha, ítem 1',
      enunciado: r`Un refrigerador opera entre $T_1=300$ K y $T_2=200$ K, con $W=1500$ J y $Q_1=6500$ J cedidos a la fuente caliente. ¿COP operativo y máximo?`,
      pasos: [
        r`$Q_2=Q_1-W=5000$ J. COP $=\frac{5000}{1500}=3{,}33$.`,
        r`Carnot: $\frac{200}{300-200}=2$.`,
        r`El operativo supera al máximo: ese refrigerador es imposible.`,
      ],
    },
  ],
  preguntas: [
    { id: 'm19-q1', p: 'Mientras un trozo de hielo se funde a presión atmosférica, su temperatura:', opciones: ['Aumenta en proporción al calor recibido', 'Se mantiene en 0 °C', 'Disminuye', 'Baja un poco hasta terminar de fundirse'], ok: 1, por: 'El calor latente se usa en el cambio de fase, no en subir la temperatura.' },
    { id: 'm19-q2', p: 'En una expansión isotérmica de un gas ideal:', opciones: ['Q = 0 y el trabajo sale de U', 'ΔU = 0 y Q = W', 'W = 0 y todo el calor va a U', 'ΔU = W'], ok: 1, por: 'U depende solo de T; todo el calor recibido sale como trabajo.' },
    { id: 'm19-q3', p: 'En una expansión adiabática, el gas:', opciones: ['Se calienta', 'Se enfría', 'Mantiene la temperatura', 'Recibe calor'], ok: 1, por: r`$Q=0\Rightarrow\Delta U=-W<0$.` },
    { id: 'm19-q4', p: 'En un ciclo recorrido en sentido horario en el diagrama p–V:', opciones: ['W neto < 0', 'ΔU ≠ 0 porque cambia la temperatura', 'Q neto = W neto > 0', 'Q = 0 y el trabajo es positivo'], ok: 2, por: 'El área encerrada es el trabajo neto; en el ciclo ΔU = 0.' },
    { id: 'm19-q5', p: 'Un gas ideal se expande libremente contra el vacío en un recipiente aislado. Su temperatura:', opciones: ['Baja', 'Sube', 'No cambia', 'Se anula'], ok: 2, por: 'W = 0 (no empuja nada) y Q = 0: ΔU = 0.' },
    { id: 'm19-q6', p: 'El rendimiento de una máquina de Carnot entre 500 K y 300 K es:', opciones: ['60 %', '40 %', '67 %', '100 %'], ok: 1, por: r`$1-\frac{300}{500}$.` },
    { id: 'm19-q7', p: 'La radiación térmica emitida por un cuerpo es proporcional a:', opciones: ['T', 'T²', 'T⁴ (en kelvin)', 'T⁴ (en °C)'], ok: 2, por: 'Ley de Stefan-Boltzmann, siempre con temperatura absoluta.' },
    { id: 'm19-q8', p: 'Una pared de doble vidrio con aire en el medio aísla bien porque:', opciones: ['El vidrio es muy aislante', 'El aire quieto tiene conductividad muy baja', 'El calor no atraviesa dos capas', 'Refleja toda la radiación infrarroja'], ok: 1, por: r`$k_{aire}\approx0{,}024$ contra $0{,}8$ del vidrio: casi toda la resistencia térmica la pone el aire.` },
  ],
};

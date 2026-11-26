const r = String.raw;

export default {
  intro: r`La termodinámica arranca por la temperatura: qué es, cómo se mide y qué le hace a los cuerpos (se dilatan) y a los gases (cambian presión y volumen). En los finales recientes se pide la ecuación de la dilatación lineal con sus componentes y el comportamiento anómalo del agua.`,
  teoria: [
    {
      id: 'temperatura', titulo: 'Temperatura y escalas',
      texto: r`La **temperatura** mide la energía cinética media de las partículas. Dos cuerpos en contacto intercambian calor hasta llegar a la misma temperatura: **equilibrio térmico**. **Ley cero:** si A está en equilibrio con C y B también, A y B están en equilibrio entre sí; por eso funcionan los termómetros.

Escalas (puntos fijos del agua a 1 atm):

$$T_F=\frac95T_C+32,\qquad T_K=T_C+273{,}15$$

- Celsius: fusión $0$, ebullición $100$. Fahrenheit: $32$ y $212$. Kelvin: el cero es el **cero absoluto**, donde la energía cinética sería mínima; no hay temperaturas negativas.
- Una **diferencia** de 1 °C es igual a 1 K y a 1,8 °F.
- Celsius y Fahrenheit coinciden en $-40$ (parcial de 2026).

**Escala arbitraria:** si un termómetro marca $A_f$ y $A_e$ en los puntos de fusión y ebullición y otro $B_f$ y $B_e$, la conversión es lineal: $\frac{T_B-B_f}{B_e-B_f}=\frac{T_A-A_f}{A_e-A_f}$.`,
    },
    {
      id: 'dilatacion', titulo: 'Dilatación térmica',
      texto: r`Al calentarse, las partículas vibran con más amplitud y se separan en promedio. Para cambios moderados de temperatura:

$$\Delta L=\alpha L_0\Delta T\qquad L=L_0(1+\alpha\Delta T)$$

$$\Delta A=2\alpha A_0\Delta T\qquad\Delta V=\beta V_0\Delta T,\quad\beta\approx3\alpha$$

con $\alpha$ el coeficiente de dilatación lineal (K⁻¹): acero $1{,}2\cdot10^{-5}$, aluminio $2{,}4\cdot10^{-5}$, vidrio $0{,}9\cdot10^{-5}$, invar $0{,}09\cdot10^{-5}$.

- Un **agujero** se dilata como si fuera del mismo material que lo rodea: un anillo calentado agranda su diámetro interior.
- **Líquidos en recipientes:** lo que se derrama (o lo que falta) es la diferencia entre la dilatación del líquido y la del recipiente: $\Delta V=(\beta_{liq}-\beta_{rec})V_0\Delta T$.
- **Lámina bimetálica:** dos metales con distinto $\alpha$ soldados se curvan al calentarse (termostatos).
- **Tensión térmica:** si una barra no puede dilatarse, aparece un esfuerzo $\frac FA=-Y\alpha\Delta T$.`,
    },
    {
      id: 'agua', titulo: 'Comportamiento anómalo del agua',
      texto: r`Entre $0$ y $4\,^\circ$C el agua se **contrae** al calentarse ($\beta<0$): su densidad es máxima, $1000$ kg/m³, a unos $3{,}98\,^\circ$C. Por encima de $4\,^\circ$C se dilata como cualquier líquido.

La razón son los puentes de hidrógeno: cerca de la congelación las moléculas forman una estructura abierta, casi la del hielo, que ocupa más volumen. Al congelarse el agua aumenta su volumen cerca de un $9\,\%$: el hielo flota y las cañerías revientan.

**Consecuencia:** en invierno el agua a $4\,^\circ$C, la más densa, queda en el fondo de los lagos; la superficie se congela primero y aísla al resto, que permanece líquido. Así sobrevive la vida acuática.`,
    },
    {
      id: 'gases', titulo: 'Gas ideal',
      texto: r`Un gas ideal cumple la **ecuación de estado**:

$$pV=nRT,\qquad R=8{,}314\ \frac{\text J}{\text{mol·K}}=0{,}0821\ \frac{\text{L·atm}}{\text{mol·K}}$$

con $T$ **siempre en kelvin** y $n=\frac{m}{M}$ los moles. En condiciones normales (PTE: $0\,^\circ$C y 1 atm), un mol ocupa $22{,}4$ L.

Para una masa fija: $\frac{p_1V_1}{T_1}=\frac{p_2V_2}{T_2}$. Casos particulares: Boyle ($T$ constante, $pV$ constante), Charles ($p$ constante, $V\propto T$), Gay-Lussac ($V$ constante, $p\propto T$).

**Modelo cinético:** la presión es el promedio de los choques de las moléculas contra las paredes. Resulta $\frac32kT=\frac12m\overline{v^2}$ por molécula y $v_{rms}=\sqrt{\frac{3RT}{M}}$. La energía interna de un gas ideal monoatómico es $U=\frac32nRT$ y depende **solo** de la temperatura.

Un gas real se aparta del ideal a presiones altas y temperaturas bajas (cerca de licuarse).`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 18, ej. 2',
      enunciado: r`El termómetro A marca $-30{,}0$ °A en la fusión del agua y $+60{,}0$ °A en la ebullición; el B marca $+20{,}0$ °B y $+130$ °B. a) ¿Cuántos °B equivalen a 1 °A? b) ¿Qué marca B si A marca $-40{,}0$ °A?`,
      pasos: [
        r`Entre fusión y ebullición: A recorre $90$ °A y B $110$ °B. **a)** $1$ °A $=\frac{110}{90}=1{,}22$ °B.`,
        r`**b)** $-40$ °A está $10$ °A por debajo de la fusión: $20-10\cdot1{,}22=7{,}8$ °B.`,
      ],
      respuesta: r`a) $1{,}22$ °B; b) $7{,}8$ °B. (La hoja del TP da $105{,}4$ °B, que corresponde a $+40$ °A.)`,
    },
    {
      fuente: 'TP 18, ej. 4',
      enunciado: r`Una tira de acero y una de aluminio, sujetas en un extremo a la misma temperatura; la de acero es $0{,}10\,\%$ más larga. ¿Cuánto hay que calentarlas para que tengan igual longitud?`,
      pasos: [
        r`$L_{Al}(1+\alpha_{Al}\Delta T)=1{,}001\,L_{Al}(1+\alpha_{Ac}\Delta T)$.`,
        r`$\Delta T\approx\frac{0{,}001}{\alpha_{Al}-\alpha_{Ac}}=\frac{0{,}001}{(2{,}3-1{,}2)\cdot10^{-5}}$`,
      ],
      respuesta: r`$\Delta T\approx91\,^\circ$C (con $\alpha_{Al}=2{,}3\cdot10^{-5}$).`,
      lab: 'dilatacion',
    },
    {
      fuente: 'TP 18, ej. 5',
      enunciado: r`Un tanque de acero se llena con $2{,}80$ m³ de etanol a $32{,}0\,^\circ$C. Al enfriarse ambos a $18{,}0\,^\circ$C, ¿cuánto etanol más entra? ($\beta_{et}=75\cdot10^{-5}$, $\beta_{ac}=3{,}6\cdot10^{-5}$ K⁻¹)`,
      pasos: [
        r`Los dos se contraen; lo que se libera es la diferencia: $\Delta V=(\beta_{et}-\beta_{ac})V_0|\Delta T|$.`,
        r`$\Delta V=(75-3{,}6)\cdot10^{-5}\cdot2{,}8\cdot14=2{,}80\cdot10^{-2}$ m³.`,
      ],
      respuesta: r`$28{,}0$ L.`,
    },
    {
      fuente: 'TP 18, ej. 6',
      enunciado: r`Un anillo de acero tiene $4{,}000$ cm de diámetro interior a $20{,}0\,^\circ$C y debe encajar en un eje de cobre de $4{,}003$ cm. ¿A qué temperatura hay que calentar el anillo?`,
      pasos: [
        r`El agujero se dilata como acero: $4{,}000(1+1{,}2\cdot10^{-5}\Delta T)=4{,}003$.`,
        r`$\Delta T=\frac{0{,}003}{4\cdot1{,}2\cdot10^{-5}}=62{,}5\,^\circ$C.`,
      ],
      respuesta: r`$T=82{,}5\,^\circ$C.`,
    },
    {
      fuente: 'TP 18, ej. 8',
      enunciado: r`Un tanque en PTE contiene $28{,}5$ kg de N₂. a) Volumen del tanque. b) Presión si se agregan $25{,}0$ kg más sin cambiar la temperatura.`,
      pasos: [
        r`$n=\frac{28\,500}{28}=1018$ mol. **a)** $V=1018\cdot22{,}4\ \text L=22{,}8$ m³.`,
        r`**b)** A $V$ y $T$ constantes, $p\propto n$: $p=\frac{53{,}5}{28{,}5}\cdot1$ atm.`,
      ],
      respuesta: r`a) $22{,}8$ m³; b) $1{,}88$ atm.`,
      lab: 'gas-ideal',
    },
    {
      fuente: '2.º parcial 29-11-2019, tema 1',
      enunciado: r`El tanque de un auto se llena con $45$ L de nafta a $10\,^\circ$C y se deja destapado donde hace $40\,^\circ$C. ¿Cuánta nafta se derrama? ($\beta=9{,}6\cdot10^{-4}$ °C⁻¹, despreciando el tanque)`,
      pasos: [r`$\Delta V=\beta V_0\Delta T=9{,}6\cdot10^{-4}\cdot45\cdot30$`],
      respuesta: r`$1{,}30$ L.`,
    },
  ],
  preguntas: [
    { id: 'm18-q1', p: 'Un cambio de temperatura de 10 °C equivale a:', opciones: ['10 K', '283 K', '18 K', '50 °F'], ok: 0, por: 'Las diferencias en Celsius y Kelvin son iguales; 283 K sería una temperatura, no un cambio.' },
    { id: 'm18-q2', p: 'Una placa con un agujero se calienta. El agujero:', opciones: ['Se achica', 'Se agranda', 'No cambia', 'Se deforma'], ok: 1, por: 'Se dilata como si estuviera lleno del mismo material.' },
    { id: 'm18-q3', p: 'Entre 0 °C y 4 °C, el agua al calentarse:', opciones: ['Se dilata', 'Se contrae', 'No cambia de volumen', 'Se evapora'], ok: 1, por: 'Es el comportamiento anómalo: β < 0 en ese intervalo.' },
    { id: 'm18-q4', p: 'En la ecuación pV = nRT, la temperatura debe estar en:', opciones: ['°C', 'K', '°F', 'Cualquiera'], ok: 1, por: 'La proporcionalidad es con la temperatura absoluta.' },
    { id: 'm18-q5', p: 'A temperatura constante se reduce el volumen de un gas ideal a la mitad. La presión:', opciones: ['Se reduce a la mitad', 'Se duplica', 'No cambia', 'Se cuadruplica'], ok: 1, por: 'Ley de Boyle: pV constante.' },
    { id: 'm18-q6', p: r`El coeficiente de dilatación volumétrica de un sólido isótropo es aproximadamente:`, opciones: ['α', '2α', '3α', 'α³'], ok: 2, por: r`$(1+\alpha\Delta T)^3\approx1+3\alpha\Delta T$.` },
  ],
};

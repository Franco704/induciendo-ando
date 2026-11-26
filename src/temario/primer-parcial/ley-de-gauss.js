const r = String.raw;

export default {
  intro: r`La ley de Gauss dice algo muy simple: el flujo de campo eléctrico que sale de una superficie cerrada depende **solo** de la carga que hay adentro. Es una de las cuatro ecuaciones de Maxwell, y cuando hay simetría convierte una integral difícil en una cuenta de una línea. En los finales se pide enunciarla y usarla para la línea infinita, la esfera y el plano.`,
  teoria: [
    {
      id: 'flujo', titulo: 'Flujo eléctrico',
      texto: r`El flujo mide cuántas líneas de campo atraviesan una superficie. Para un campo uniforme y una superficie plana de área $A$ cuya normal forma un ángulo $\theta$ con $\vec E$:

$$\Phi_E=\vec E\cdot\vec A=EA\cos\theta\qquad[\Phi_E]=\frac{\text{N·m}^2}{\text C}=\text{V·m}$$

En general, $\Phi_E=\int\vec E\cdot d\vec A$. El vector $d\vec A$ es perpendicular a la superficie; en una superficie **cerrada** apunta hacia **afuera**, así que el flujo saliente es positivo y el entrante negativo.

- Superficie paralela a las líneas ($\theta=90^\circ$): flujo nulo.
- Si el campo forma un ángulo $\alpha$ **con el plano** (no con la normal), $\Phi=EA\operatorname{sen}\alpha$: es un error frecuente (TP 3, ej. 2).`,
    },
    {
      id: 'ley', titulo: 'Ley de Gauss',
      texto: r`El flujo eléctrico a través de cualquier superficie cerrada es igual a la carga neta encerrada dividida por $\varepsilon_0$:

$$\oint\vec E\cdot d\vec A=\frac{Q_{enc}}{\varepsilon_0}$$

- No importa la **forma** ni el **tamaño** de la superficie, ni dónde esté la carga adentro: si se agranda la esfera o se la cambia por un cubo, el flujo es el mismo.
- Las cargas de **afuera** no aportan flujo neto: sus líneas entran y salen.
- Que el flujo neto sea cero **no** implica que el campo sea cero: puede haber campo que entra por un lado y sale por otro.
- El campo $\vec E$ que aparece en la integral es el **total**, el de todas las cargas, de adentro y de afuera.

Vale siempre, pero sirve para **calcular** $E$ solo cuando la simetría permite elegir una superficie gaussiana donde $E$ sea constante y perpendicular (o paralelo) a la superficie.`,
    },
    {
      id: 'aplicaciones', titulo: 'Aplicaciones: esfera, línea y plano',
      texto: r`**Método:** 1) identificar la simetría; 2) elegir la gaussiana (esfera, cilindro coaxial, "pastillero"); 3) calcular el flujo, que queda $E$ por un área; 4) calcular $Q_{enc}$; 5) despejar $E$.

**Carga puntual o esfera con simetría esférica,** gaussiana esférica de radio $r$: $E\cdot4\pi r^2=\frac{Q_{enc}}{\varepsilon_0}$.
- Fuera de cualquier distribución esférica: $E=\frac{kQ}{r^2}$, como si toda la carga estuviera en el centro.
- Dentro de una esfera **aislante** con carga uniforme: $Q_{enc}=Q\frac{r^3}{R^3}$, así que $E=\frac{kQr}{R^3}$, crece linealmente.
- Dentro de un **cascarón** o una esfera conductora: $E=0$.

**Línea infinita o cilindro,** gaussiana cilíndrica de radio $r$ y largo $\ell$ (por las tapas no hay flujo):

$$E\cdot2\pi r\ell=\frac{\lambda\ell}{\varepsilon_0}\ \Rightarrow\ E=\frac{\lambda}{2\pi\varepsilon_0r}$$

**Plano infinito,** pastillero que lo atraviesa (flujo solo por las dos tapas): $2EA=\frac{\sigma A}{\varepsilon_0}\Rightarrow E=\frac{\sigma}{2\varepsilon_0}$.

**Dos placas** con $\pm\sigma$: entre ellas los campos se suman, $E=\frac\sigma{\varepsilon_0}$; afuera se cancelan, $E=0$.`,
    },
    {
      id: 'conductores', titulo: 'Conductores en equilibrio',
      texto: r`En un conductor en equilibrio electrostático las cargas libres ya no se mueven, así que:

1. **El campo dentro del material es cero.**
2. Toda la carga neta está en la **superficie** (una gaussiana dentro del metal encierra carga nula).
3. Justo afuera, el campo es **perpendicular** a la superficie y vale $E=\frac{\sigma}{\varepsilon_0}$.
4. Todo el conductor está al mismo potencial.

**Conductor hueco con una carga $q$ en la cavidad:** en la superficie interior se induce $-q$ (para que $E=0$ dentro del metal) y en la exterior aparece $+q$ más la carga propia del conductor. Ejemplo del final de mayo de 2023: una coraza con $+2q$ dentro de otra con $+4q$; la grande tiene $-2q$ adentro y $+6q$ afuera.

**Jaula de Faraday:** dentro de una cavidad sin cargas el campo es cero aunque afuera haya campos: el conductor apantalla.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 3, ej. 2',
      enunciado: r`Una lámina rectangular de $0{,}400\times0{,}600$ m está en un campo uniforme de $75{,}0$ N/C que forma $20{,}0^\circ$ con el **plano** de la lámina. Encuentre el flujo.`,
      pasos: [
        r`El ángulo con la **normal** es $90^\circ-20^\circ=70^\circ$.`,
        r`$\Phi=EA\cos70^\circ=75\cdot0{,}24\cdot0{,}342$`,
      ],
      respuesta: r`$6{,}16$ N·m²/C.`,
    },
    {
      fuente: 'TP 3, ej. 4',
      enunciado: r`Una carga Q está dentro de una caja. Los flujos por las seis caras son $+1500$, $+2200$, $+4600$, $-1800$, $-3500$ y $-5400$ N·m²/C. ¿Cuánto vale Q?`,
      pasos: [
        r`Flujo neto: $1500+2200+4600-1800-3500-5400=-2400$ N·m²/C.`,
        r`$Q=\varepsilon_0\Phi=(8{,}85\cdot10^{-12})(-2400)$`,
      ],
      respuesta: r`$Q=-2{,}12\cdot10^{-8}$ C.`,
      lab: 'gauss',
    },
    {
      fuente: 'TP 3, ej. 5',
      enunciado: r`Un cascarón cilíndrico de radio $7{,}00$ cm y $240$ cm de largo tiene carga uniforme en su superficie curva. A $19{,}0$ cm del eje (en el punto medio) el campo es $36{,}0$ kN/C. a) ¿Cuál es la carga neta? b) ¿Cuánto vale el campo a $4{,}00$ cm del eje?`,
      pasos: [
        r`Como $240$ cm $\gg19$ cm, se trata como cilindro infinito: $E=\frac{\lambda}{2\pi\varepsilon_0r}$.`,
        r`$\lambda=2\pi\varepsilon_0rE=2\pi(8{,}85\cdot10^{-12})(0{,}19)(36\,000)=3{,}80\cdot10^{-7}$ C/m.`,
        r`$Q=\lambda\ell=3{,}80\cdot10^{-7}\cdot2{,}40$`,
        r`**b)** A $4$ cm se está dentro del cascarón: la gaussiana no encierra carga, $E=0$.`,
      ],
      respuesta: r`a) $+913$ nC; b) $0$.`,
      lab: 'gauss',
    },
    {
      fuente: 'TP 3, ej. 7',
      enunciado: r`Una placa infinita tiene $\sigma=6{,}42\cdot10^{-7}$ C/m². Una pastilla de $4{,}75$ g con $q=-3{,}69\cdot10^{-6}$ C está en reposo a $0{,}866$ m. ¿Con qué rapidez llega a la placa (solo fuerza eléctrica)?`,
      pasos: [
        r`$E=\frac{\sigma}{2\varepsilon_0}=3{,}63\cdot10^4$ N/C, uniforme.`,
        r`$a=\frac{|q|E}{m}=\frac{(3{,}69\cdot10^{-6})(3{,}63\cdot10^4)}{4{,}75\cdot10^{-3}}=28{,}2$ m/s².`,
        r`$v=\sqrt{2ad}=\sqrt{2\cdot28{,}2\cdot0{,}866}$`,
      ],
      respuesta: r`$v=6{,}98$ m/s.`,
    },
    {
      fuente: 'TP 3, ej. 9',
      enunciado: r`Un cascarón esférico conductor tiene radio interior $10{,}0$ cm y exterior $15{,}0$ cm, con una carga puntual de $+3{,}00\ \mu$C en su centro. Se le pone al conductor una carga de $-3{,}00\ \mu$C. a) ¿Dónde se ubica? b) ¿Cuál es el campo dentro y fuera del cascarón?`,
      pasos: [
        r`Dentro del metal $E=0$: una gaussiana en el metal debe encerrar carga nula, así que la superficie **interior** tiene $-3\ \mu$C. Como esa es toda la carga del conductor, la exterior queda en $0$.`,
        r`**Dentro de la cavidad** ($r<10$ cm): solo la carga central, $E=\frac{kq}{r^2}=\frac{2{,}70\cdot10^4}{r^2}$ N/C.`,
        r`**Fuera** ($r>15$ cm): carga encerrada $3-3=0$, $E=0$.`,
      ],
      respuesta: r`a) En la superficie interna. b) $E=2{,}70\cdot10^4/r^2$ N/C adentro; $0$ afuera.`,
    },
    {
      fuente: 'TP 3, ej. 10',
      enunciado: r`Una esfera aislante de radio $a$ tiene carga uniforme $Q$. La rodea una esfera hueca conductora descargada de radios $b$ y $c$. Determine $E(r)$ en las cuatro regiones y la carga inducida por unidad de superficie.`,
      pasos: [
        r`$r<a$: $Q_{enc}=Q\frac{r^3}{a^3}$, $E=\frac{Qr}{4\pi\varepsilon_0a^3}$.`,
        r`$a<r<b$: $E=\frac{Q}{4\pi\varepsilon_0r^2}$.`,
        r`$b<r<c$ (metal): $E=0$. Se induce $-Q$ en $b$ y $+Q$ en $c$.`,
        r`$r>c$: $E=\frac{Q}{4\pi\varepsilon_0r^2}$. Densidades: $\sigma_b=-\frac{Q}{4\pi b^2}$, $\sigma_c=+\frac{Q}{4\pi c^2}$.`,
      ],
      lab: 'gauss',
    },
  ],
  preguntas: [
    { id: 'm03-q1', p: 'Una carga puntual está en el centro de una gaussiana esférica. Si se duplica el radio de la esfera, el flujo:', opciones: ['Se duplica', 'Se reduce a la cuarta parte', 'No cambia', 'Se cuadruplica'], ok: 2, por: r`$\Phi=\frac{Q_{enc}}{\varepsilon_0}$: el campo baja como $1/r^2$ y el área crece como $r^2$.` },
    { id: 'm03-q2', p: 'Una carga puntual está dentro de una gaussiana esférica. Si se la saca afuera, cerca de la superficie, el flujo neto:', opciones: ['No cambia', 'Se hace cero', 'Se duplica', 'Cambia de signo'], ok: 1, por: 'Una carga exterior no encierra: sus líneas entran y salen, con flujo neto nulo.' },
    { id: 'm03-q3', p: 'Un campo uniforme atraviesa un círculo cuya cara es paralela a las líneas de campo. El flujo es:', opciones: ['EA', 'Cero', 'EA/2', '−EA'], ok: 1, por: r`Cara paralela a las líneas significa normal perpendicular al campo: $\cos90^\circ=0$.` },
    { id: 'm03-q4', p: r`Dos placas grandes con $\pm\sigma$. Afuera de las placas el campo vale:`, opciones: [r`$\sigma/\varepsilon_0$`, r`$\sigma/(2\varepsilon_0)$`, 'Cero', r`$2\sigma/\varepsilon_0$`], ok: 2, por: r`Cada placa da $\frac{\sigma}{2\varepsilon_0}$; afuera los campos son opuestos y se cancelan, adentro se suman.` },
    { id: 'm03-q5', p: 'Dentro del material de un conductor en equilibrio electrostático:', opciones: ['El campo es máximo y la carga está en todo el volumen', 'El campo es cero y la carga neta está en la superficie', 'La carga se reparte en todo el volumen', 'El potencial es cero y el campo es radial'], ok: 1, por: 'Si hubiera campo, las cargas libres se moverían. El potencial es constante, no necesariamente cero.' },
    { id: 'm03-q6', p: r`Una varilla con $\lambda=30$ nC/m tiene radio $2$ m. A $1$ m del eje (dentro de la varilla conductora) el campo es:`, opciones: ['540 N/C', '270 N/C', 'Cero', '53,9 N/C'], ok: 2, por: 'En un conductor la carga está en la superficie; una gaussiana de radio menor no encierra carga.' },
    { id: 'm03-q7', p: 'Si el flujo neto a través de una superficie cerrada es cero, entonces:', opciones: ['El campo es cero en toda la superficie', 'No hay carga neta encerrada', 'No hay cargas cerca', 'La superficie es un conductor'], ok: 1, por: 'Solo se puede asegurar que la carga encerrada neta es nula; puede haber campo atravesando la superficie.' },
    { id: 'm03-q8', p: 'Cuatro esferas aislantes con la misma carga Q uniforme y radios crecientes. En un punto a la misma distancia del centro, que queda adentro de las dos más grandes:', opciones: ['El campo es igual en las cuatro porque tienen igual carga', 'El campo es mayor en las más grandes', 'El campo es igual en las dos chicas y menor en las grandes', 'El campo es cero en las dos grandes porque P está adentro'], ok: 2, por: r`Afuera $E=\frac{kQ}{r^2}$, igual. Adentro $E=\frac{kQr}{R^3}$: cuanto más grande la esfera, menos carga encierra la gaussiana.` },
  ],
};

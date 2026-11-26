const r = String.raw;

export default {
  intro: r`La luz es una onda electromagnética, y eso se nota en tres fenómenos que la óptica geométrica no explica: la **polarización** (porque es transversal), la **interferencia** (dos ondas que se suman o se cancelan) y la **difracción** (la onda se abre al pasar por una abertura chica). En los finales aparecen problemas de dos, tres y cuatro rendijas.`,
  teoria: [
    {
      id: 'polarizacion', titulo: 'Polarización',
      texto: r`La dirección de oscilación de $\vec E$ define la polarización. La luz común (del Sol, de una lámpara) es **no polarizada**: $\vec E$ cambia de dirección al azar. Un **polarizador** deja pasar solo la componente paralela a su eje de transmisión.

- Luz no polarizada que atraviesa un polarizador: sale polarizada con la **mitad** de la intensidad, $I=\frac{I_0}2$.
- Luz polarizada que forma un ángulo $\phi$ con el eje del polarizador: **ley de Malus**,

$$I=I_0\cos^2\phi$$

Dos polarizadores cruzados ($90^\circ$) no dejan pasar nada; pero si se intercala un tercero a un ángulo intermedio, vuelve a pasar luz (TP 17, ej. 1).

**Polarización por reflexión:** la luz reflejada en una superficie está totalmente polarizada (paralela a la superficie) cuando el rayo reflejado y el refractado forman $90^\circ$. Ocurre al **ángulo de Brewster**: $\operatorname{tg}\theta_p=\frac{n_b}{n_a}$. Así funcionan los anteojos de sol polarizados.`,
    },
    {
      id: 'young', titulo: 'Interferencia: experimento de Young',
      texto: r`Dos fuentes **coherentes** (misma frecuencia y fase constante) separadas $d$ iluminan una pantalla a distancia $L\gg d$. En un punto a ángulo $\theta$, la diferencia de camino es $d\operatorname{sen}\theta$:

$$\text{Máximos (brillantes): }d\operatorname{sen}\theta=m\lambda\qquad\text{Mínimos (oscuros): }d\operatorname{sen}\theta=\left(m+\tfrac12\right)\lambda$$

con $m=0,\pm1,\pm2\dots$ Para ángulos chicos, $\operatorname{sen}\theta\approx\operatorname{tg}\theta=\frac yL$:

$$y_m=\frac{m\lambda L}{d},\qquad\Delta y=\frac{\lambda L}{d}$$

Las franjas están **equiespaciadas solo para ángulos chicos**. La intensidad es $I=I_0\cos^2\left(\frac{\pi d\operatorname{sen}\theta}{\lambda}\right)$.

> **Cuidado al contar mínimos:** el primero es $m=0$, así que el décimo mínimo es $m=9$, con diferencia de camino $9{,}5\lambda$.

**Lámina en una rendija:** una lámina de espesor $t$ e índice $n$ agrega una diferencia de camino $(n-1)t$. Si el centro queda oscuro, $(n-1)t=\frac\lambda2$.`,
    },
    {
      id: 'redes', titulo: 'Varias rendijas y redes de difracción',
      texto: r`Con $N$ rendijas equiespaciadas, los **máximos principales** siguen en $d\operatorname{sen}\theta=m\lambda$ (todas las ondas en fase), pero se vuelven mucho más **angostos e intensos** ($I\propto N^2$), con $N-2$ máximos secundarios débiles entre cada par.

**Problemas de "tapar rendijas"** (finales de 2010): si se tapan algunas, lo que importa es la separación entre las que quedan abiertas. Con rendijas a distancia $d$, dejar abiertas la primera y la cuarta equivale a dos rendijas separadas $3d$.

**Red de difracción:** miles de rendijas por centímetro ($d=\frac{1}{\text{líneas por metro}}$). Separa con mucha precisión las longitudes de onda: espectroscopía. El orden máximo visible es $m\le\frac d\lambda$.

**Bragg:** los planos de un cristal separados $d$ reflejan rayos X con interferencia constructiva cuando $2d\operatorname{sen}\theta=m\lambda$ ($\theta$ medido desde los planos).`,
    },
    {
      id: 'difraccion', titulo: 'Difracción por una rendija',
      texto: r`Una sola rendija de ancho $a$ produce un máximo central ancho y máximos laterales mucho más débiles. Los **mínimos** están en

$$a\operatorname{sen}\theta=m\lambda\qquad(m=\pm1,\pm2,\dots)$$

¡Ojo!: la fórmula es la misma que la de los **máximos** de Young, pero acá da **mínimos**. El máximo central mide el doble que los laterales: $\frac{2\lambda L}{a}$. Cuanto más angosta la rendija, más se abre el patrón.

En una doble rendija real, el patrón de interferencia queda modulado por la envolvente de difracción de cada rendija: $I=I_0\cos^2\frac{\pi d\operatorname{sen}\theta}{\lambda}\left(\frac{\operatorname{sen}\beta}{\beta}\right)^2$, con $\beta=\frac{\pi a\operatorname{sen}\theta}{\lambda}$. Si un máximo de interferencia cae en un mínimo de difracción, desaparece (orden faltante).

**Resolución:** por difracción, una abertura circular de diámetro $D$ no puede separar objetos con una separación angular menor que $\theta=1{,}22\frac\lambda D$ (criterio de Rayleigh).`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 17, ej. 1',
      enunciado: r`Luz no polarizada incide en dos polarizadores con ejes perpendiculares. a) ¿Qué fracción pasa? b) ¿Y si se intercala un tercero a $62{,}0^\circ$ del primero? c) ¿Y si el tercero se pone delante de los otros dos?`,
      pasos: [
        r`**a)** Pasa $\frac{I_0}2$ por el primero y $\cos^290^\circ=0$ por el segundo: nada.`,
        r`**b)** $\frac12\cos^262^\circ\cos^228^\circ=0{,}5\cdot0{,}220\cdot0{,}780=0{,}0859$.`,
        r`**c)** Si queda adelante, los dos últimos siguen cruzados: $0$.`,
      ],
      respuesta: r`a) $0$; b) $0{,}085\,I_0$; c) $0$.`,
      lab: 'polarizadores',
    },
    {
      fuente: 'TP 17, ej. 6',
      enunciado: r`En un Young con luz de $589$ nm y pantalla a $2{,}00$ m, el décimo mínimo está a $7{,}26$ mm del máximo central. ¿Separación entre ranuras?`,
      pasos: [
        r`El décimo mínimo es $m=9$: $d\operatorname{sen}\theta=9{,}5\lambda$.`,
        r`$d=\frac{9{,}5\lambda L}{y}=\frac{9{,}5(589\cdot10^{-9})(2)}{7{,}26\cdot10^{-3}}$`,
        r`Las franjas están equiespaciadas solo para ángulos chicos (respuesta c del TP).`,
      ],
      respuesta: r`$d=1{,}54$ mm.`,
      lab: 'interferencia',
    },
    {
      fuente: 'TP 17, ej. 8',
      enunciado: r`Una pantalla a $50{,}0$ cm de una rendija iluminada con $690$ nm. La distancia entre el primer y el tercer mínimo es $3{,}00$ mm. ¿Ancho de la rendija?`,
      pasos: [
        r`$y_3-y_1=\frac{2\lambda L}{a}\Rightarrow a=\frac{2(690\cdot10^{-9})(0{,}5)}{3\cdot10^{-3}}$`,
      ],
      respuesta: r`$a=2{,}30\cdot10^{-4}$ m.`,
      lab: 'interferencia',
    },
    {
      fuente: 'TP 17, ej. 9',
      enunciado: r`Una red de $5620$ líneas/cm se usa con luz de $471$ nm. La pantalla está a $0{,}750$ m. ¿Qué ancho mínimo debe tener para que entren todos los máximos principales?`,
      pasos: [
        r`$d=\frac{1}{562\,000}=1{,}78\cdot10^{-6}$ m. $m_{max}=\left\lfloor\frac{d}{\lambda}\right\rfloor=\lfloor3{,}78\rfloor=3$.`,
        r`$\operatorname{sen}\theta_3=\frac{3\lambda}{d}=0{,}794\Rightarrow\theta_3=52{,}6^\circ$ (ángulo grande: no vale $y=m\lambda L/d$).`,
        r`$y_3=L\operatorname{tg}\theta_3=0{,}75\cdot1{,}307=0{,}980$ m; a cada lado.`,
      ],
      respuesta: r`Ancho $\approx1{,}96$ m.`,
    },
    {
      fuente: 'Final del 2-12-2010, ej. 5',
      enunciado: r`Luz monocromática incide sobre cuatro rendijas equiespaciadas. Tapando las dos centrales, el máximo de cuarto orden está a $30^\circ$. ¿Dónde está el de primer orden si se tapan las extremas?`,
      pasos: [
        r`Abiertas la 1 y la 4: separación $3d$. $3d\operatorname{sen}30^\circ=4\lambda\Rightarrow d=\frac83\lambda$.`,
        r`Abiertas la 2 y la 3: separación $d$. $\operatorname{sen}\theta=\frac\lambda d=\frac38$.`,
      ],
      respuesta: r`$\theta\approx22{,}0^\circ$.`,
      lab: 'interferencia',
    },
    {
      fuente: 'TP 17, ej. 5',
      enunciado: r`Una lámina de plástico ($n=1{,}60$) cubre una de las rendijas de una doble rendija iluminada con $586$ nm. El centro de la pantalla queda oscuro. ¿Espesor mínimo?`,
      pasos: [
        r`La lámina agrega una diferencia de camino $(n-1)t$; centro oscuro: $(n-1)t=\frac\lambda2$.`,
        r`$t=\frac{586}{2\cdot0{,}6}$ nm`,
      ],
      respuesta: r`$t=488$ nm.`,
    },
  ],
  preguntas: [
    { id: 'm17-q1', p: 'Luz no polarizada atraviesa un polarizador. La intensidad que sale es:', opciones: ['I₀', 'I₀/2', 'I₀cos²θ', 'Cero'], ok: 1, por: r`El promedio de $\cos^2$ sobre todas las direcciones es $\frac12$.` },
    { id: 'm17-q2', p: 'En el experimento de Young, si se reduce la separación entre rendijas, las franjas:', opciones: ['Se juntan', 'Se separan', 'No cambian', 'Desaparecen'], ok: 1, por: r`$\Delta y=\frac{\lambda L}{d}$.` },
    { id: 'm17-q3', p: 'En la difracción por una rendija, a·senθ = mλ da la posición de:', opciones: ['Los máximos', 'Los mínimos', 'El máximo central', 'Los máximos secundarios'], ok: 1, por: 'Es la misma forma que los máximos de Young, pero en una rendija da los ceros.' },
    { id: 'm17-q4', p: 'Al aumentar la cantidad de rendijas (con la misma separación), los máximos principales:', opciones: ['Se acercan al centro y mantienen su intensidad', 'Se vuelven más angostos e intensos en el mismo lugar', 'Se ensanchan y pierden intensidad', 'Desaparecen todos salvo el máximo central'], ok: 1, por: 'La condición dsenθ = mλ no depende de N; sí el ancho de cada máximo.' },
    { id: 'm17-q5', p: 'Con luz roja en lugar de azul, en la misma doble rendija, las franjas:', opciones: ['Quedan más juntas', 'Quedan más separadas', 'Son iguales', 'Se invierten'], ok: 1, por: 'λ roja (≈ 650 nm) > λ azul (≈ 450 nm).' },
    { id: 'm17-q6', p: 'Para que haya interferencia estable entre dos fuentes, deben ser:', opciones: ['De igual intensidad y del mismo color', 'Coherentes (misma frecuencia y fase constante)', 'Polarizadas en la misma dirección', 'Puntuales y separadas menos que λ'], ok: 1, por: 'Por eso Young usaba una sola fuente dividida en dos rendijas.' },
    { id: 'm17-q7', p: r`Planos de un cristal separados $3{,}50$ Å dan el primer máximo de Bragg a $15^\circ$. La longitud de onda es:`, opciones: ['0,181 nm (rayos X)', '0,906 nm', '181 nm (ultravioleta)', '0,0906 nm'], ok: 0, por: r`$\lambda=2d\operatorname{sen}\theta=2(0{,}35)(0{,}259)$ nm.` },
  ],
};

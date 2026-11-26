const r = String.raw;

export default {
  intro: r`Maxwell completó la ley de Ampère con un término nuevo, la **corriente de desplazamiento**, y con eso las cuatro ecuaciones del electromagnetismo predicen ondas: campos eléctricos y magnéticos que se sostienen mutuamente y viajan a $3\cdot10^8$ m/s. La luz resultó ser eso. En los parciales se piden las ecuaciones de la onda, la intensidad y la fem en una antena.`,
  teoria: [
    {
      id: 'desplazamiento', titulo: 'Corriente de desplazamiento',
      texto: r`Al cargar un capacitor, la corriente llega a una placa pero no atraviesa el espacio entre ellas. Si se aplica Ampère con una superficie que pasa **entre** las placas, $I_{enc}=0$, pero con otra que corta el cable, $I_{enc}=i$: contradicción. Maxwell la resolvió notando que entre las placas el **flujo eléctrico cambia**, y lo sumó como una corriente:

$$i_D=\varepsilon_0\frac{d\Phi_E}{dt}$$

Entre las placas $i_D$ es igual a la corriente de conducción del cable, y crea campo magnético alrededor como si fuera una corriente real. Para un capacitor de placas: $\frac{dE}{dt}=\frac{i}{\varepsilon_0A}$.`,
    },
    {
      id: 'maxwell', titulo: 'Ecuaciones de Maxwell',
      texto: r`En forma integral, en el vacío:

$$\oint\vec E\cdot d\vec A=\frac{Q_{enc}}{\varepsilon_0}\qquad\text{(Gauss eléctrica)}$$

$$\oint\vec B\cdot d\vec A=0\qquad\text{(Gauss magnética: no hay monopolos)}$$

$$\oint\vec E\cdot d\vec l=-\frac{d\Phi_B}{dt}\qquad\text{(Faraday)}$$

$$\oint\vec B\cdot d\vec l=\mu_0\left(i_C+\varepsilon_0\frac{d\Phi_E}{dt}\right)\qquad\text{(Ampère-Maxwell)}$$

La simetría es la clave: un $\vec B$ variable crea $\vec E$ (Faraday) y un $\vec E$ variable crea $\vec B$ (Maxwell). En el vacío, sin cargas, uno sostiene al otro y se propagan como **onda**.`,
    },
    {
      id: 'ondas', titulo: 'Ondas electromagnéticas planas',
      texto: r`Una onda plana sinusoidal que viaja en $+x$:

$$\vec E=E_{max}\cos(kx-\omega t)\,\hat\jmath,\qquad\vec B=B_{max}\cos(kx-\omega t)\,\hat k$$

- $\vec E$ y $\vec B$ son **perpendiculares** entre sí y a la dirección de propagación (onda **transversal**), y están **en fase**.
- $\vec E\times\vec B$ apunta hacia donde viaja la onda. Si el argumento es $kx+\omega t$, viaja hacia $-x$.
- $E=cB$ en todo punto e instante.
- $c=\frac{1}{\sqrt{\mu_0\varepsilon_0}}=3{,}00\cdot10^8$ m/s $=\frac\omega k=\lambda f$, con $k=\frac{2\pi}\lambda$ y $\omega=2\pi f$.

En un material, $v=\frac{c}{n}$ con $n=\sqrt{K_eK_m}$.

**Espectro:** radio (m a km), microondas (cm), infrarrojo, visible ($400$ a $700$ nm), ultravioleta, rayos X (Å) y gamma. Todas son la misma física con distinta frecuencia.`,
    },
    {
      id: 'energia', titulo: 'Energía, Poynting y presión de radiación',
      texto: r`La densidad de energía se reparte por igual entre los dos campos: $u=\frac12\varepsilon_0E^2+\frac{B^2}{2\mu_0}=\varepsilon_0E^2$.

El **vector de Poynting** da la potencia por unidad de área que transporta la onda (dirección y valor):

$$\vec S=\frac{\vec E\times\vec B}{\mu_0}\qquad[S]=\frac{\text W}{\text m^2}$$

Su promedio es la **intensidad**:

$$I=\frac{E_{max}B_{max}}{2\mu_0}=\frac{E_{max}^2}{2\mu_0c}=\frac12\varepsilon_0cE_{max}^2$$

Para una fuente puntual que emite $P$ por igual en todas direcciones: $I=\frac{P}{4\pi r^2}$. Si la fuente es una línea (antena larga), el frente es cilíndrico: $I=\frac{P}{2\pi rL}$.

**Fem en una antena** de largo $\ell$ paralela a $\vec E$: $\varepsilon_{max}=E_{max}\ell$.

**Presión de radiación:** la onda transporta cantidad de movimiento. Sobre una superficie que **absorbe**: $p=\frac Ic$; que **refleja**: $p=\frac{2I}{c}$. Con la luz solar ($1350$ W/m²) la presión es de unos $5\ \mu$Pa: chica, pero alcanza para impulsar velas solares.`,
    },
  ],
  ejercicios: [
    {
      fuente: 'TP 16, ej. 1',
      enunciado: r`Un láser de $1062$ nm emite pulsos de $38{,}0$ ps. ¿Cuántas longitudes de onda hay en un pulso? ¿Cuánto debería durar para contener una sola?`,
      pasos: [
        r`Largo del pulso: $c\,t=(3\cdot10^8)(38\cdot10^{-12})=1{,}14\cdot10^{-2}$ m.`,
        r`$N=\frac{1{,}14\cdot10^{-2}}{1062\cdot10^{-9}}\approx1{,}07\cdot10^4$.`,
        r`Una sola: $t=\frac\lambda c=3{,}54\cdot10^{-15}$ s (femtosegundos: el Nobel 2023 premió pulsos de attosegundos).`,
      ],
    },
    {
      fuente: 'TP 16, ej. 2',
      enunciado: r`a) Una corriente de $2{,}80$ A carga un capacitor de placas cuadradas de $1{,}60$ cm de lado. ¿Rapidez de cambio de E? b) Un capacitor de placas circulares de $2{,}00$ cm de diámetro se carga a $38{,}0$ mC/s. ¿Campo magnético inducido a $10{,}0$ cm del centro?`,
      pasos: [
        r`**a)** $\frac{dE}{dt}=\frac{i}{\varepsilon_0A}=\frac{2{,}8}{(8{,}85\cdot10^{-12})(2{,}56\cdot10^{-4})}=1{,}24\cdot10^{15}$ V/(m·s).`,
        r`**b)** A $10$ cm (fuera de las placas de $1$ cm de radio) toda la corriente de desplazamiento queda encerrada: $B=\frac{\mu_0i_D}{2\pi r}=\frac{(2\cdot10^{-7})(0{,}038)}{0{,}1}=7{,}6\cdot10^{-8}$ T.`,
        r`Una vez cargado, $\frac{d\Phi_E}{dt}=0$ y $B=0$.`,
      ],
    },
    {
      fuente: 'TP 16, ej. 3',
      enunciado: r`Una onda EM de $60{,}0$ Hz viaja en $z$ con $\vec E$ en $x$ y $E_0=2{,}00$ V/m. Escriba $\vec E$ y $\vec B$.`,
      pasos: [
        r`$\omega=2\pi\cdot60=377$ rad/s; $k=\frac\omega c=1{,}26\cdot10^{-6}$ rad/m; $B_0=\frac{E_0}{c}=6{,}67\cdot10^{-9}$ T.`,
        r`$\hat\imath\times\vec B$ debe apuntar a $+\hat k$: $\vec B$ en $+\hat\jmath$.`,
      ],
      respuesta: r`$\vec E=2{,}00\operatorname{sen}(1{,}26\cdot10^{-6}z-377t)\,\hat\imath$ V/m; $\vec B=6{,}67\cdot10^{-9}\operatorname{sen}(1{,}26\cdot10^{-6}z-377t)\,\hat\jmath$ T.`,
      lab: 'onda-em',
    },
    {
      fuente: 'TP 16, ej. 5',
      enunciado: r`La radiación solar llega a la Tierra con $1350$ W/m². Considerándola una sola onda, calcule $E_{max}$ y $B_{max}$.`,
      pasos: [
        r`$E_{max}=\sqrt{2\mu_0cI}=\sqrt{2(4\pi\cdot10^{-7})(3\cdot10^8)(1350)}=1{,}01\cdot10^3$ V/m.`,
        r`$B_{max}=\frac{E_{max}}{c}=3{,}37\cdot10^{-6}$ T.`,
      ],
      lab: 'onda-em',
    },
    {
      fuente: 'TP 16, ej. 6',
      enunciado: r`Una radio AM de $535$ kHz emite isotrópicamente $4{,}00$ kW. Un dipolo de $65{,}0$ cm está a $6436$ m. ¿Amplitud de la fem inducida?`,
      pasos: [
        r`$I=\frac{P}{4\pi r^2}=\frac{4000}{4\pi(6436)^2}=7{,}68\cdot10^{-6}$ W/m².`,
        r`$E_{max}=\sqrt{2\mu_0cI}=0{,}0761$ V/m.`,
        r`$\varepsilon=E_{max}\ell=0{,}0761\cdot0{,}65$`,
      ],
      respuesta: r`$49{,}5$ mV.`,
    },
    {
      fuente: 'TP 16, ej. 9',
      enunciado: r`Un celular emite $0{,}600$ W con una antena de $10{,}0$ cm. a) Suponiendo frente cilíndrico, ¿intensidad media a $4{,}00$ cm? b) Compare con la norma de $0{,}57$ mW/cm².`,
      pasos: [
        r`**a)** $I=\frac{P}{2\pi rL}=\frac{0{,}6}{2\pi(0{,}04)(0{,}1)}=23{,}9$ W/m².`,
        r`**b)** $0{,}57$ mW/cm² $=5{,}70$ W/m²: la exposición supera la norma unas $4{,}2$ veces (con este modelo simplificado).`,
      ],
    },
  ],
  preguntas: [
    { id: 'm16-q1', p: 'En una onda electromagnética en el vacío, los campos E y B:', opciones: ['Están desfasados 90°', 'Están en fase y son perpendiculares', 'Son paralelos entre sí y a la propagación', 'E es transversal y B es longitudinal'], ok: 1, por: r`Oscilan juntos, perpendiculares entre sí y a la propagación, con $E=cB$.` },
    { id: 'm16-q2', p: r`Una onda tiene $\vec B=B_0\,\hat\jmath\cos(kx+\omega t)$. Viaja hacia:`, opciones: ['+x', '−x', '+y', '+z'], ok: 1, por: r`El argumento $kx+\omega t$ se mantiene constante si $x$ disminuye con el tiempo.` },
    { id: 'm16-q3', p: 'Si se duplica la amplitud del campo eléctrico de una onda, la intensidad:', opciones: ['Se duplica', 'Se cuadruplica', 'No cambia', 'Se reduce a la mitad'], ok: 1, por: r`$I\propto E_{max}^2$.` },
    { id: 'm16-q4', p: 'La corriente de desplazamiento entre las placas de un capacitor que se carga:', opciones: ['Es cero', 'Es igual a la corriente en los cables', 'Es mayor que la corriente en los cables', 'Solo existe en alterna'], ok: 1, por: r`$\varepsilon_0\frac{d\Phi_E}{dt}=\varepsilon_0A\frac{d}{dt}\frac{q}{\varepsilon_0A}=\frac{dq}{dt}=i$.` },
    { id: 'm16-q5', p: 'La ecuación de Maxwell que expresa que no hay monopolos magnéticos es:', opciones: ['∮E·dA = Q/ε₀', '∮B·dA = 0', '∮E·dl = −dΦB/dt', '∮B·dl = μ₀i'], ok: 1, por: 'Las líneas de B son cerradas: lo que entra a una superficie cerrada sale.' },
    { id: 'm16-q6', p: 'La presión de radiación sobre una superficie que refleja totalmente es:', opciones: ['I/c', '2I/c', 'Ic', 'Cero'], ok: 1, por: 'Al rebotar, la cantidad de movimiento cambia el doble que al ser absorbida.' },
    { id: 'm16-q7', p: 'La intensidad de una fuente puntual isotrópica a distancia r:', opciones: ['Decrece como 1/r', 'Decrece como 1/r²', 'No depende de r', 'Decrece como 1/r³'], ok: 1, por: r`La potencia se reparte en una esfera de área $4\pi r^2$.` },
  ],
};

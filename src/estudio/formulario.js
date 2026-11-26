// Hoja de fórmulas por módulo: [nombre, LaTeX].
const r = String.raw;

export const CONSTANTES = [
  [r`$k=\frac1{4\pi\varepsilon_0}$`, r`8{,}99\cdot10^9\ \text{N·m}^2/\text C^2`],
  [r`$\varepsilon_0$`, r`8{,}85\cdot10^{-12}\ \text C^2/(\text{N·m}^2)`],
  [r`$\mu_0$`, r`4\pi\cdot10^{-7}\ \text{T·m/A}`],
  [r`$e$`, r`1{,}60\cdot10^{-19}\ \text C`],
  [r`$m_e$, $m_p$`, r`9{,}11\cdot10^{-31}\ \text{kg},\quad1{,}67\cdot10^{-27}\ \text{kg}`],
  [r`$c$`, r`3{,}00\cdot10^8\ \text{m/s}`],
  [r`$R$, $\sigma$`, r`8{,}314\ \text{J/(mol·K)},\quad5{,}67\cdot10^{-8}\ \text{W/(m}^2\text K^4)`],
  ['Agua', r`c=1\ \tfrac{\text{cal}}{\text g\,°\text C}=4186\ \tfrac{\text J}{\text{kg·K}},\ \ c_{hielo}\approx0{,}5,\ \ L_f=80\ \tfrac{\text{cal}}{\text g},\ \ L_v=540\ \tfrac{\text{cal}}{\text g}`],
];

export const FORMULARIO = [
  { modulo: 'm01', formulas: [
    ['Coulomb', r`F=k\frac{|q_1q_2|}{r^2},\qquad\vec F_{12}=k\frac{q_1q_2}{r^2}\hat r_{12}`],
    ['Superposición', r`\vec F_{neta}=\sum_i\vec F_i`],
  ] },
  { modulo: 'm02', formulas: [
    ['Definición', r`\vec E=\frac{\vec F}{q_0}`],
    ['Carga puntual', r`\vec E=k\frac{q}{r^2}\hat r`],
    ['Carga en campo uniforme', r`\vec a=\frac{q\vec E}{m}`],
    ['Dipolo', r`\vec p=q\vec d,\quad\vec\tau=\vec p\times\vec E,\quad U=-\vec p\cdot\vec E`],
  ] },
  { modulo: 'm03', formulas: [
    ['Flujo', r`\Phi_E=\int\vec E\cdot d\vec A=EA\cos\theta`],
    ['Gauss', r`\oint\vec E\cdot d\vec A=\frac{Q_{enc}}{\varepsilon_0}`],
    ['Línea / cilindro', r`E=\frac{\lambda}{2\pi\varepsilon_0r}`],
    ['Plano / conductor', r`E=\frac{\sigma}{2\varepsilon_0},\qquad E_{sup\,conductor}=\frac{\sigma}{\varepsilon_0}`],
    ['Esfera maciza uniforme', r`E=\frac{kQr}{R^3}\ (r<R),\qquad E=\frac{kQ}{r^2}\ (r>R)`],
  ] },
  { modulo: 'm04', formulas: [
    ['Potencial', r`V_b-V_a=-\int_a^b\vec E\cdot d\vec l,\qquad V=k\frac qr`],
    ['Energía y trabajo', r`U=qV,\quad W_{a\to b}=q(V_a-V_b),\quad U_{par}=k\frac{q_1q_2}{r}`],
    ['Campo uniforme', r`\Delta V=-Ed`],
    ['Gradiente', r`\vec E=-\nabla V,\qquad E_x=-\frac{dV}{dx}`],
  ] },
  { modulo: 'm05', formulas: [
    ['Capacidad', r`C=\frac QV,\qquad C_{placas}=\frac{\kappa\varepsilon_0A}{d}`],
    ['Esférico y cilíndrico', r`C=4\pi\varepsilon_0\frac{ab}{b-a},\qquad C=\frac{2\pi\varepsilon_0L}{\ln(b/a)}`],
    ['Asociaciones', r`\frac1{C_s}=\sum\frac1{C_i},\qquad C_p=\sum C_i`],
    ['Energía', r`U=\frac12CV^2=\frac{Q^2}{2C}=\frac12QV,\qquad u=\frac12\varepsilon E^2`],
    ['Dieléctrico', r`E=\frac{E_0}{\kappa},\quad\sigma_i=\sigma\left(1-\frac1\kappa\right),\quad\vec D=\varepsilon_0\vec E+\vec P`],
  ] },
  { modulo: 'm06', formulas: [
    ['Corriente', r`I=\frac{dQ}{dt}=nqv_dA,\qquad J=\frac IA=nqv_d`],
    ['Ohm', r`V=IR,\qquad R=\rho\frac LA,\qquad\vec J=\sigma\vec E`],
    ['Temperatura', r`\rho=\rho_0[1+\alpha(T-T_0)]`],
    ['Drude', r`\sigma=\frac{ne^2\tau}{m}`],
    ['Potencia', r`P=VI=I^2R=\frac{V^2}R`],
  ] },
  { modulo: 'm07', formulas: [
    ['Asociaciones', r`R_s=\sum R_i,\qquad\frac1{R_p}=\sum\frac1{R_i}`],
    ['Fuente real', r`V_{ab}=\varepsilon-Ir`],
    ['Kirchhoff', r`\sum I_{nodo}=0,\qquad\sum\Delta V_{malla}=0`],
  ] },
  { modulo: 'm08', formulas: [
    ['Carga', r`q=C\varepsilon\left(1-e^{-t/RC}\right),\quad i=\frac\varepsilon Re^{-t/RC}`],
    ['Descarga', r`q=Q_0e^{-t/RC},\quad i=-\frac{Q_0}{RC}e^{-t/RC}`],
    ['Constante de tiempo', r`\tau=RC`],
  ] },
  { modulo: 'm09', formulas: [
    ['Lorentz', r`\vec F=q(\vec E+\vec v\times\vec B)`],
    ['Órbita', r`r=\frac{mv}{|q|B},\qquad T=\frac{2\pi m}{|q|B},\qquad\omega=\frac{|q|B}m`],
    ['Selector de velocidades', r`v=\frac EB`],
    ['Conductor', r`\vec F=I\vec L\times\vec B`],
    ['Espira', r`\vec\mu=NI\vec A,\quad\vec\tau=\vec\mu\times\vec B,\quad U=-\vec\mu\cdot\vec B`],
  ] },
  { modulo: 'm10', formulas: [
    ['Biot-Savart', r`d\vec B=\frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^2}`],
    ['Ampère', r`\oint\vec B\cdot d\vec l=\mu_0I_{enc}`],
    ['Hilo, espira, arco', r`B=\frac{\mu_0I}{2\pi r},\quad B_{centro}=\frac{\mu_0NI}{2R},\quad B_{arco}=\frac{\mu_0I\theta}{4\pi R}`],
    ['Solenoide, toroide', r`B=\mu_0nI,\qquad B=\frac{\mu_0NI}{2\pi r}`],
    ['Conductores paralelos', r`\frac FL=\frac{\mu_0I_1I_2}{2\pi d}`],
  ] },
  { modulo: 'm11', formulas: [
    ['Faraday', r`\varepsilon=-N\frac{d\Phi_B}{dt},\qquad\Phi_B=\int\vec B\cdot d\vec A`],
    ['Fem de movimiento', r`\varepsilon=\oint(\vec v\times\vec B)\cdot d\vec l=BLv`],
    ['Generador', r`\varepsilon=NBA\omega\operatorname{sen}\omega t`],
    ['Campo inducido', r`\oint\vec E\cdot d\vec l=-\frac{d\Phi_B}{dt}`],
  ] },
  { modulo: 'm12', formulas: [
    ['Autoinductancia', r`L=\frac{N\Phi_B}{i},\qquad\varepsilon=-L\frac{di}{dt}`],
    ['Solenoide y toroide', r`L=\frac{\mu_0N^2A}{\ell},\qquad L=\frac{\mu_0N^2h}{2\pi}\ln\frac ba`],
    ['Mutua', r`M=\frac{N_2\Phi_{21}}{i_1},\quad\varepsilon_2=-M\frac{di_1}{dt}`],
    ['Energía', r`U=\frac12Li^2,\qquad u=\frac{B^2}{2\mu_0}`],
  ] },
  { modulo: 'm13', formulas: [
    ['RL', r`i=\frac\varepsilon R\left(1-e^{-t/\tau}\right),\quad i=I_0e^{-t/\tau},\quad\tau=\frac LR`],
    ['LC', r`\omega=\frac1{\sqrt{LC}},\quad q=Q\cos(\omega t+\phi)`],
    ['RLC subamortiguado', r`q=Qe^{-Rt/2L}\cos\omega't,\quad\omega'=\sqrt{\frac1{LC}-\frac{R^2}{4L^2}}`],
    ['Amortiguamiento crítico', r`R=2\sqrt{\frac LC}`],
  ] },
  { modulo: 'm14', formulas: [
    ['Eficaces', r`V_{ef}=\frac{V_{max}}{\sqrt2},\qquad I_{ef}=\frac{I_{max}}{\sqrt2}`],
    ['Reactancias', r`X_L=\omega L,\qquad X_C=\frac1{\omega C}`],
    ['Impedancia y fase', r`Z=\sqrt{R^2+(X_L-X_C)^2},\quad\operatorname{tg}\varphi=\frac{X_L-X_C}{R}`],
    ['Resonancia', r`\omega_0=\frac1{\sqrt{LC}},\qquad I_{max}=\frac VR`],
    ['Potencia', r`P=V_{ef}I_{ef}\cos\varphi=I_{ef}^2R,\qquad Q=I_{ef}^2X`],
  ] },
  { modulo: 'm15', formulas: [
    ['Transformador ideal', r`\frac{V_2}{V_1}=\frac{N_2}{N_1}=\frac{I_1}{I_2}`],
    ['Pérdidas en la línea', r`P_{perd}=I^2R_{linea}=\left(\frac{P}{V}\right)^2R_{linea}`],
    ['Materia', r`\vec B=\mu_0(\vec H+\vec M),\quad\vec M=\chi_m\vec H,\quad K_m=1+\chi_m,\quad\mu=K_m\mu_0`],
  ] },
  { modulo: 'm16', formulas: [
    ['Desplazamiento', r`i_D=\varepsilon_0\frac{d\Phi_E}{dt}`],
    ['Maxwell (integrales)', r`\oint\vec E\cdot d\vec A=\frac Q{\varepsilon_0},\ \oint\vec B\cdot d\vec A=0,\ \oint\vec E\cdot d\vec l=-\frac{d\Phi_B}{dt},\ \oint\vec B\cdot d\vec l=\mu_0\left(i+\varepsilon_0\frac{d\Phi_E}{dt}\right)`],
    ['Onda', r`E=cB,\quad c=\frac1{\sqrt{\mu_0\varepsilon_0}}=\lambda f,\quad k=\frac{2\pi}\lambda`],
    ['Poynting e intensidad', r`\vec S=\frac{\vec E\times\vec B}{\mu_0},\quad I=\frac{E_{max}^2}{2\mu_0c}=\frac{P}{4\pi r^2}`],
    ['Presión de radiación', r`p=\frac Ic\ \text{(absorbe)},\qquad p=\frac{2I}c\ \text{(refleja)}`],
  ] },
  { modulo: 'm17', formulas: [
    ['Malus', r`I=I_0\cos^2\phi,\qquad I=\frac{I_0}2\ \text{(no polarizada)}`],
    ['Brewster', r`\operatorname{tg}\theta_p=\frac{n_b}{n_a}`],
    ['Young', r`d\operatorname{sen}\theta=m\lambda,\quad d\operatorname{sen}\theta=\left(m+\tfrac12\right)\lambda,\quad y=\frac{m\lambda L}d`],
    ['Rendija simple (mínimos)', r`a\operatorname{sen}\theta=m\lambda\quad(m\neq0)`],
    ['Red y Bragg', r`d\operatorname{sen}\theta=m\lambda,\qquad2d\operatorname{sen}\theta=m\lambda`],
  ] },
  { modulo: 'm18', formulas: [
    ['Escalas', r`T_F=\tfrac95T_C+32,\qquad T_K=T_C+273{,}15`],
    ['Dilatación', r`\Delta L=\alpha L_0\Delta T,\quad\Delta V=\beta V_0\Delta T,\quad\beta\approx3\alpha`],
    ['Gas ideal', r`pV=nRT,\qquad\frac{p_1V_1}{T_1}=\frac{p_2V_2}{T_2}`],
  ] },
  { modulo: 'm19', formulas: [
    ['Calorimetría', r`Q=mc\Delta T,\qquad Q=\pm mL,\qquad\sum Q_i=0`],
    ['Primer principio', r`Q=\Delta U+W,\quad W=\int p\,dV,\quad\Delta U=nc_v\Delta T`],
    ['Procesos', r`W_{isob}=p\Delta V,\quad W_{isot}=nRT\ln\frac{V_2}{V_1},\quad pV^\gamma=\text{cte}`],
    ['Calores molares', r`c_p-c_v=R,\quad\gamma=\frac{c_p}{c_v},\quad c_v=\tfrac32R\ \text{(monoatómico)}`],
    ['Transferencia', r`H=kA\frac{\Delta T}L,\quad H=hA\Delta T,\quad H=e\sigma AT^4`],
    ['Máquinas', r`\eta=\frac W{Q_c}=1-\frac{Q_f}{Q_c},\quad\eta_C=1-\frac{T_f}{T_c},\quad\text{COP}=\frac{Q_f}W\le\frac{T_f}{T_c-T_f}`],
  ] },
];

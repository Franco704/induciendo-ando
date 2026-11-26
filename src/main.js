// Raíz de composición: el único lugar que conoce todas las piezas y las conecta.
import { crearAlmacen } from './nucleo/almacen.js';
import { crearRouter } from './nucleo/router.js';
import { h } from './ui/atomos/h.js';
import { barraSuperior, navegacion, dock } from './ui/organismos/armazon.js';
import { vistaInicio } from './vistas/inicio.js';
import { vistaModulo } from './vistas/modulo.js';
import { vistaSimuladores, vistaSimulador } from './vistas/simuladores.js';
import { vistaExamenes, vistaExamen } from './vistas/examenes.js';
import { vistaSimulacro, vistaSimulacroFinal } from './vistas/simulacro.js';
import { vistaFormulario } from './vistas/formulario.js';
import { vistaVideos } from './vistas/videos.js';

const TITULO = 'Induciendo Ando · Física II';
const almacen = crearAlmacen();
const ctx = { almacen };

const aplicarTema = ({ tema }) => {
  if (tema === 'auto') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = tema;
};
aplicarTema(almacen.leer());

const nav = navegacion(almacen);
const principal = h('main', { class: 'principal', id: 'contenido', tabindex: '-1' });
const escritorio = matchMedia('(min-width: 1024px)');
// En móvil y tablet el índice es un cajón; en escritorio, una columna fija que no se abre ni se cierra
const menuAbierto = (abrir) => {
  if (escritorio.matches) abrir = false;
  const estaba = nav.dataset.abierta === 'true';
  nav.dataset.abierta = String(abrir);
  nav.inert = !abrir && !escritorio.matches;
  document.querySelectorAll('[aria-controls="nav"]').forEach((b) => b.setAttribute('aria-expanded', String(abrir)));
  document.body.classList.toggle('sin-scroll', abrir);
  if (abrir) enfocarCajon();
  else if (estaba && nav.contains(document.activeElement)) document.querySelector('.boton-menu')?.focus();
};
// Con movimiento reducido, Chrome tarda unos milisegundos en dejar enfocar el cajón recién abierto: se reintenta
function enfocarCajon(intento = 0) {
  const destino = nav.querySelector('.fila-modulo[aria-current="page"], .nav__buscar');
  destino?.focus({ preventScroll: true });
  if (destino && document.activeElement !== destino && intento < 10 && nav.dataset.abierta === 'true') setTimeout(() => enfocarCajon(intento + 1), 30);
}
const alternar = () => menuAbierto(nav.dataset.abierta !== 'true');
const barra = barraSuperior(almacen, { alMenu: alternar });
const accesos = dock(almacen, { alIndice: alternar });
// Elegir un enlace del cajón lo cierra aunque la ruta no cambie
nav.addEventListener('click', (e) => { if (e.target.closest('a')) menuAbierto(false); });
escritorio.addEventListener('change', () => menuAbierto(false));
// Tocar fuera del cajón (sobre el velo) lo cierra
addEventListener('click', (e) => { if (nav.dataset.abierta === 'true' && !nav.contains(e.target) && !e.target.closest('[aria-controls="nav"]')) menuAbierto(false); });

document.body.append(
  h('a', { class: 'saltar', href: '#contenido', onclick: (e) => { e.preventDefault(); principal.focus(); } }, 'Saltar al contenido'),
  barra, nav, principal, accesos);
menuAbierto(false);
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { menuAbierto(false); return; }
  if (e.key === '/' && !e.target.closest('input, textarea, select, [contenteditable]') && !e.altKey && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
    if (!escritorio.matches) menuAbierto(true);
    nav.enfocarBusqueda();
  }
});

// Cada vista recibe (raíz, parámetros, contexto) y puede devolver una función de limpieza.
const con = (vista) => (raiz, params) => vista(raiz, params, ctx);
const router = crearRouter(principal, [
  { patron: '/', vista: con(vistaInicio) },
  { patron: '/modulo/:id', vista: con(vistaModulo) },
  { patron: '/simuladores', vista: con(vistaSimuladores) },
  { patron: '/simulador/:id', vista: con(vistaSimulador) },
  { patron: '/examenes', vista: con(vistaExamenes) },
  { patron: '/examen/:id', vista: con(vistaExamen) },
  { patron: '/simulacro/final', vista: con(vistaSimulacroFinal) },
  { patron: '/simulacro/:n', vista: con(vistaSimulacro) },
  { patron: '/formulario', vista: con(vistaFormulario) },
  { patron: '/videos', vista: con(vistaVideos) },
], {
  alCambiar(ruta) {
    if (ruta === '/') document.title = TITULO;
    menuAbierto(false);
    nav.marcarActual();
    barra.marcarActual();
    accesos.marcarActual();
    if (!location.hash.includes('?')) scrollTo(0, 0);
  },
});

// Cambiar el tema o el modo vuelve a pintar la vista actual (los gráficos leen los colores al dibujarse).
let previo = almacen.leer();
almacen.suscribir((s) => {
  if (s.tema !== previo.tema) { aplicarTema(s); router.iniciar(); }
  else if (s.modo !== previo.modo && (location.hash || '#/') === '#/') router.iniciar();
  previo = s;
});
router.iniciar();

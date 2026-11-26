"""Motor de los videos de la guía: escenas dibujadas con pycairo, subtítulos en pantalla y codificación con ffmpeg.

Cada video es una lista de escenas (duración en segundos, función que dibuja, subtítulo). La función recibe
el lienzo, el progreso p de 0 a 1 dentro de la escena y el tiempo t en segundos.
"""
import math
import subprocess
import cairo

ANCHO, ALTO, FPS = 1280, 720, 30

# Paleta del modo oscuro de la guía
PAPEL = (0.051, 0.082, 0.078)
PAPEL2 = (0.075, 0.125, 0.125)
TINTA = (0.886, 0.925, 0.914)
SUAVE = (0.592, 0.671, 0.651)
CUADRICULA = (0.114, 0.176, 0.169)
ELEC = (0.361, 0.796, 0.878)
MAG = (0.663, 0.612, 1.0)
MAS = (1.0, 0.478, 0.431)
MENOS = (0.471, 0.651, 1.0)
OCRE = (0.886, 0.706, 0.353)
FUENTE = 'Noto Sans'


def suave(p):
    """Curva de aceleración suave (ease in-out) para animaciones."""
    p = max(0.0, min(1.0, p))
    return p * p * (3 - 2 * p)


def tramo(p, a, b):
    """Progreso local entre a y b (0 antes, 1 después)."""
    return max(0.0, min(1.0, (p - a) / (b - a))) if b > a else float(p >= a)


class Lienzo:
    """Contexto cairo con un sistema de coordenadas del mundo (y hacia arriba)."""

    def __init__(self, ctx):
        self.ctx = ctx
        self.mundo(-8, 8, -4.5, 4.5)

    def mundo(self, x0, x1, y0, y1, caja=(0, 0, ANCHO, ALTO - 110)):
        bx, by, bw, bh = caja
        esc = min(bw / (x1 - x0), bh / (y1 - y0))
        self.esc = esc
        self.ox = bx + bw / 2 - esc * (x0 + x1) / 2
        self.oy = by + bh / 2 + esc * (y0 + y1) / 2

    def px(self, x, y):
        return self.ox + self.esc * x, self.oy - self.esc * y

    def fondo(self):
        c = self.ctx
        c.set_source_rgb(*PAPEL)
        c.paint()

    def linea(self, pts, color=TINTA, ancho=3, alfa=1.0, guiones=None, cerrar=False, relleno=None, alfa_relleno=0.25):
        c = self.ctx
        if len(pts) < 2:
            return
        c.new_path()
        c.move_to(*self.px(*pts[0]))
        for p in pts[1:]:
            c.line_to(*self.px(*p))
        if cerrar:
            c.close_path()
        if relleno:
            c.set_source_rgba(*relleno, alfa_relleno)
            c.fill_preserve()
        c.set_source_rgba(*color, alfa)
        c.set_line_width(ancho)
        c.set_line_join(cairo.LINE_JOIN_ROUND)
        c.set_line_cap(cairo.LINE_CAP_ROUND)
        c.set_dash(guiones or [])
        c.stroke()
        c.set_dash([])

    def flecha(self, desde, vec, color=TINTA, ancho=3, cabeza=16, alfa=1.0):
        x0, y0 = self.px(*desde)
        x1, y1 = self.px(desde[0] + vec[0], desde[1] + vec[1])
        largo = math.hypot(x1 - x0, y1 - y0)
        if largo < 1:
            return
        ang = math.atan2(y1 - y0, x1 - x0)
        k = min(cabeza, largo * 0.5)
        c = self.ctx
        c.set_source_rgba(*color, alfa)
        c.set_line_width(ancho)
        c.set_line_cap(cairo.LINE_CAP_ROUND)
        c.move_to(x0, y0)
        c.line_to(x1 - math.cos(ang) * k * 0.6, y1 - math.sin(ang) * k * 0.6)
        c.stroke()
        c.move_to(x1, y1)
        c.line_to(x1 - k * math.cos(ang - 0.42), y1 - k * math.sin(ang - 0.42))
        c.line_to(x1 - k * math.cos(ang + 0.42), y1 - k * math.sin(ang + 0.42))
        c.close_path()
        c.fill()

    def circulo(self, centro, r, color=TINTA, relleno=None, ancho=3, alfa=1.0, guiones=None):
        c = self.ctx
        x, y = self.px(*centro)
        c.new_path()
        c.arc(x, y, r * self.esc, 0, 2 * math.pi)
        if relleno:
            c.set_source_rgba(*relleno, alfa)
            c.fill_preserve()
        if color:
            c.set_source_rgba(*color, alfa)
            c.set_line_width(ancho)
            c.set_dash(guiones or [])
            c.stroke()
            c.set_dash([])
        else:
            c.new_path()

    def punto(self, centro, radio_px=7, color=TINTA, alfa=1.0):
        c = self.ctx
        x, y = self.px(*centro)
        c.set_source_rgba(*color, alfa)
        c.arc(x, y, radio_px, 0, 2 * math.pi)
        c.fill()

    def rect(self, x0, y0, w, h, relleno=None, color=None, ancho=2, alfa=1.0):
        c = self.ctx
        X, Y = self.px(x0, y0 + h)
        c.rectangle(X, Y, w * self.esc, h * self.esc)
        if relleno:
            c.set_source_rgba(*relleno, alfa)
            c.fill_preserve()
        if color:
            c.set_source_rgba(*color, alfa)
            c.set_line_width(ancho)
            c.stroke()
        c.new_path()

    def texto(self, t, pos, tam=30, color=TINTA, alinear='izq', negrita=False, alfa=1.0, pantalla=False):
        c = self.ctx
        c.select_font_face(FUENTE, cairo.FONT_SLANT_NORMAL, cairo.FONT_WEIGHT_BOLD if negrita else cairo.FONT_WEIGHT_NORMAL)
        c.set_font_size(tam)
        ext = c.text_extents(t)
        x, y = pos if pantalla else self.px(*pos)
        if alinear == 'centro':
            x -= ext.x_advance / 2
        elif alinear == 'der':
            x -= ext.x_advance
        c.set_source_rgba(*color, alfa)
        c.move_to(x, y)
        c.show_text(t)
        return ext.x_advance

    def carga(self, centro, signo, r=0.38, alfa=1.0):
        color = MAS if signo > 0 else MENOS
        self.circulo(centro, r, color=None, relleno=color, alfa=alfa)
        x, y = self.px(*centro)
        c = self.ctx
        c.set_source_rgba(*PAPEL, alfa)
        c.set_line_width(max(3, r * self.esc * 0.22))
        d = r * self.esc * 0.5
        c.move_to(x - d, y)
        c.line_to(x + d, y)
        if signo > 0:
            c.move_to(x, y - d)
            c.line_to(x, y + d)
        c.stroke()

    def cruces(self, x0, x1, y0, y1, paso=1.0, color=CUADRICULA, entrante=True, alfa=1.0):
        """Campo perpendicular a la pantalla: cruces (entrante) o puntos (saliente)."""
        y = y0
        while y <= y1 + 1e-9:
            x = x0
            while x <= x1 + 1e-9:
                if entrante:
                    d = 0.12
                    self.linea([(x - d, y - d), (x + d, y + d)], color=color, ancho=2.5, alfa=alfa)
                    self.linea([(x - d, y + d), (x + d, y - d)], color=color, ancho=2.5, alfa=alfa)
                else:
                    self.punto((x, y), 4, color, alfa)
                x += paso
            y += paso


def subtitulo(ctx, texto, alfa):
    """Franja inferior con el texto que explica la escena (los videos no tienen sonido)."""
    if not texto or alfa <= 0:
        return
    ctx.set_source_rgba(*PAPEL2, 0.96 * alfa)
    ctx.rectangle(0, ALTO - 110, ANCHO, 110)
    ctx.fill()
    ctx.select_font_face(FUENTE, cairo.FONT_SLANT_NORMAL, cairo.FONT_WEIGHT_NORMAL)
    ctx.set_font_size(29)
    # Corte en líneas de hasta ~70 caracteres
    palabras, lineas, actual = texto.split(), [], ''
    for p in palabras:
        if len(actual) + len(p) + 1 > 72:
            lineas.append(actual)
            actual = p
        else:
            actual = (actual + ' ' + p).strip()
    lineas.append(actual)
    y = ALTO - 110 + (110 - 38 * len(lineas)) / 2 + 28
    for linea in lineas:
        ext = ctx.text_extents(linea)
        ctx.set_source_rgba(*TINTA, alfa)
        ctx.move_to((ANCHO - ext.x_advance) / 2, y)
        ctx.show_text(linea)
        y += 38


def placa_titulo(L, titulo, tp, p):
    """Escena de apertura: el título y su TP, con una línea de campo que se dibuja."""
    L.fondo()
    a = suave(tramo(p, 0, 0.35))
    L.ctx.set_source_rgba(*ELEC, a)
    L.ctx.set_line_width(4)
    L.ctx.move_to(160, 430)
    for k in range(0, int(960 * suave(tramo(p, 0.1, 0.8))) + 1, 8):
        L.ctx.line_to(160 + k, 430 + 22 * math.sin(k / 40))
    L.ctx.stroke()
    L.texto(tp, (160, 270), tam=30, color=SUAVE, alfa=a, pantalla=True)
    L.texto(titulo, (160, 350), tam=62, negrita=True, alfa=a, pantalla=True)
    L.texto('Induciendo Ando · Física II', (160, 520), tam=24, color=SUAVE, alfa=a, pantalla=True)


def renderizar(escenas, salida, poster_en=None):
    """escenas: lista de (duracion, dibujar(L, p, t), subtitulo). Escribe salida.mp4 y salida.jpg."""
    total = sum(d for d, _, _ in escenas)
    n = int(round(total * FPS))
    ff = subprocess.Popen([
        'ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'bgra', '-s', f'{ANCHO}x{ALTO}', '-r', str(FPS),
        '-i', '-', '-c:v', 'libx264', '-preset', 'medium', '-crf', '27', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', f'{salida}.mp4',
    ], stdin=subprocess.PIPE)
    superficie = cairo.ImageSurface(cairo.FORMAT_ARGB32, ANCHO, ALTO)
    poster_cuadro = int((poster_en if poster_en is not None else total * 0.45) * FPS)
    inicio = 0.0
    k = 0
    for dur, dibujar, texto in escenas:
        cuadros = int(round(dur * FPS))
        for i in range(cuadros):
            ctx = cairo.Context(superficie)
            L = Lienzo(ctx)
            p = i / max(1, cuadros - 1)
            dibujar(L, p, inicio + i / FPS)
            # El subtítulo entra y sale suave en los bordes de la escena
            alfa = min(1.0, i / 8, (cuadros - 1 - i) / 8 + 0.0001)
            subtitulo(ctx, texto, max(0.0, alfa))
            superficie.flush()
            ff.stdin.write(bytes(superficie.get_data()))
            if k == poster_cuadro:
                superficie.write_to_png(f'{salida}.png')
            k += 1
        inicio += dur
    ff.stdin.close()
    ff.wait()
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', f'{salida}.png', '-q:v', '4', f'{salida}.jpg'], check=True)
    subprocess.run(['rm', '-f', f'{salida}.png'], check=True)

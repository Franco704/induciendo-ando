"""Los trece videos de la guía. Uso: python3 scripts/videos/videos.py [nombre ...] (sin nombres, todos).

Se escriben en videos/<nombre>.mp4 y videos/<nombre>.jpg (portada). Cada uno dura alrededor de un minuto,
no tiene sonido y explica con subtítulos en pantalla.
"""
import math
import os
import sys
from multiprocessing import Pool

from motor import (Lienzo, renderizar, placa_titulo, suave, tramo, TINTA, SUAVE, CUADRICULA, ELEC, MAG, MAS, MENOS, OCRE, PAPEL)

SALIDA = os.path.join(os.path.dirname(__file__), '..', '..', 'videos')


# ---------- física mínima para dibujar ----------

def campo(cargas, x, y):
    ex = ey = 0.0
    for q, cx, cy in cargas:
        dx, dy = x - cx, y - cy
        r2 = dx * dx + dy * dy
        if r2 < 1e-6:
            return 0.0, 0.0
        k = q / (r2 * math.sqrt(r2))
        ex += k * dx
        ey += k * dy
    return ex, ey


def lineas(cargas, por=10, paso=0.03, maxp=700, limite=9):
    salida = []
    for q, cx, cy in cargas:
        if q <= 0:
            continue
        n = max(6, int(por * q))
        for k in range(n):
            a = 2 * math.pi * (k + 0.5) / n
            x, y = cx + 0.12 * math.cos(a), cy + 0.12 * math.sin(a)
            pts = [(x, y)]
            for _ in range(maxp):
                ex, ey = campo(cargas, x, y)
                m = math.hypot(ex, ey)
                if m == 0:
                    break
                x += paso * ex / m
                y += paso * ey / m
                pts.append((x, y))
                if abs(x) > limite or abs(y) > limite or any(math.hypot(x - c[1], y - c[2]) < 0.1 for c in cargas if c[0] < 0):
                    break
            salida.append(pts)
    return salida


def parcial(pts, p):
    return pts[:max(2, int(len(pts) * p))]


def titulo(nombre, tp):
    return (4.0, lambda L, p, t: placa_titulo(L, nombre, tp, p), None)


def cierre(lineas_texto, formulas):
    def dib(L, p, t):
        L.fondo()
        a = suave(tramo(p, 0, 0.25))
        L.texto('Para llevarse', (160, 180), tam=30, color=SUAVE, alfa=a, pantalla=True)
        y = 260
        for f in formulas:
            L.texto(f, (160, y), tam=44, negrita=True, color=ELEC, alfa=a, pantalla=True)
            y += 70
        for l in lineas_texto:
            L.texto(l, (160, y + 10), tam=30, alfa=a, pantalla=True)
            y += 46
    return dib


# ---------- 1. campo eléctrico ----------

def campo_electrico():
    def prueba(L, p, t):
        L.fondo()
        L.carga((-3, 0), +1, r=0.5)
        x = 1.5 - 1.2 * suave(tramo(p, 0, 0.4))
        L.punto((x, 0), 9, OCRE)
        L.texto('q₀', (x - 0.2, 0.5), tam=30, color=OCRE)
        largo = 2.4 / (x + 3) ** 2 * 9
        L.flecha((x, 0), (largo, 0), color=MAG, ancho=5)
        L.texto('F', (x + largo / 2, -0.7), tam=34, color=MAG, alinear='centro')
        if p > 0.5:
            a = suave(tramo(p, 0.5, 0.8))
            L.texto('E = F / q₀', (2.5, 2.4), tam=52, negrita=True, color=ELEC, alfa=a)
            L.texto('[N/C] = [V/m]', (2.5, 1.5), tam=30, color=SUAVE, alfa=a)

    radial_pos = lineas([(1, 0, 0)], por=14)

    def radial(L, p, t):
        L.fondo()
        signo = 1 if p < 0.5 else -1
        q = suave(tramo(p % 0.5, 0, 0.35))
        for ln in radial_pos:
            pts = parcial(ln, q)
            L.linea(pts, color=ELEC, ancho=2.5)
            if len(pts) > 30:
                k = 25
                dx, dy = pts[k + 1][0] - pts[k][0], pts[k + 1][1] - pts[k][1]
                d = math.hypot(dx, dy)
                L.flecha(pts[k], (signo * 0.3 * dx / d, signo * 0.3 * dy / d), color=ELEC, ancho=2.5)
        L.carga((0, 0), signo, r=0.5)
        L.texto('sale de la positiva' if signo > 0 else 'entra en la negativa', (4.2, 3.3), tam=32, color=SUAVE)

    dip = lineas([(1, -2, 0), (-1, 2, 0)], por=16)

    def dipolo(L, p, t):
        L.fondo()
        q = suave(tramo(p, 0, 0.6))
        for ln in dip:
            L.linea(parcial(ln, q), color=ELEC, ancho=2.5)
        L.carga((-2, 0), 1, r=0.45)
        L.carga((2, 0), -1, r=0.45)

    def superposicion(L, p, t):
        L.fondo()
        L.carga((-3, -1), 1, r=0.45)
        L.carga((3, -1), 1, r=0.45)
        P = (0, 2)
        L.punto(P, 8, TINTA)
        L.texto('P', (0.3, 2.3), tam=30)
        a = suave(tramo(p, 0, 0.3))
        b = suave(tramo(p, 0.35, 0.65))
        e1 = (1.8 * a, 1.8 * a)
        e2 = (-1.8 * a, 1.8 * a)
        L.flecha(P, e1, color=MAS, ancho=4)
        L.flecha(P, e2, color=MAS, ancho=4)
        if b > 0:
            L.linea([(P[0] + e1[0], P[1] + e1[1]), (P[0], P[1] + 3.6)], color=SUAVE, ancho=2, guiones=[8, 8], alfa=b)
            L.linea([(P[0] + e2[0], P[1] + e2[1]), (P[0], P[1] + 3.6)], color=SUAVE, ancho=2, guiones=[8, 8], alfa=b)
            L.flecha(P, (0, 3.6 * b), color=ELEC, ancho=6)
        if p > 0.7:
            L.texto('E = E₁ + E₂  (vectores)', (2.6, 3.6), tam=36, color=ELEC, negrita=True, alfa=suave(tramo(p, 0.7, 0.9)))

    return [
        titulo('El campo eléctrico', 'TP 2 · Electrostática'),
        (9, prueba, 'Una carga de prueba q₀ positiva siente una fuerza. El campo eléctrico es esa fuerza por unidad de carga: E = F/q₀.'),
        (10, radial, 'El campo de una carga puntual es radial: sale de las positivas y entra en las negativas. Cae con el cuadrado de la distancia.'),
        (9, dipolo, 'Con dos cargas, las líneas nacen en la positiva y mueren en la negativa. Nunca se cruzan, y donde están más juntas el campo es más intenso.'),
        (11, superposicion, 'Con varias cargas, el campo en un punto es la suma vectorial de los campos de cada una: superposición. Acá las componentes horizontales se cancelan.'),
        (6, cierre(['El campo es tangente a las líneas.', 'Varias cargas: se suman los vectores.'], ['E = F / q₀', 'E = k q / r²']), None),
    ]


# ---------- 2. ley de Gauss ----------

def ley_de_gauss():
    def flujo(L, p, t):
        L.fondo()
        for y in [-2.4, -1.2, 0, 1.2, 2.4]:
            L.flecha((-7, y), (13, 0), color=ELEC, ancho=2, alfa=0.7)
        ang = math.pi / 2 * suave(tramo(p, 0.1, 0.9))
        w = 2.2 * math.cos(ang)
        L.linea([(-w / 2 * 0.0 - 0.0 + 0, -2.2), (0, 2.2)], color=MAG, ancho=1)
        L.linea([(-0.35 * math.sin(ang), -2.2), (0.35 * math.sin(ang), 2.2)], color=MAG, ancho=8)
        L.flecha((0, 0), (1.8 * math.cos(ang), 1.8 * math.sin(ang)), color=OCRE, ancho=4)
        L.texto('n', (1.9 * math.cos(ang) + 0.2, 1.9 * math.sin(ang)), tam=30, color=OCRE)
        L.texto(f'Φ = E·A·cos θ      θ = {math.degrees(ang):.0f}°', (-6.8, 3.6), tam=36, negrita=True)
        L.texto(f'Φ = {math.cos(ang):.2f} · E·A'.replace('.', ','), (-6.8, 2.9), tam=32, color=SUAVE)
        _ = w

    rad = lineas([(1, 0, 0)], por=16, limite=6)

    def esfera(L, p, t):
        L.fondo()
        for ln in rad:
            L.linea(ln, color=ELEC, ancho=2, alfa=0.8)
        L.carga((0, 0), 1, r=0.4)
        R = 1.2 + 2.3 * (0.5 - 0.5 * math.cos(2 * math.pi * p))
        L.circulo((0, 0), R, color=OCRE, ancho=4, guiones=[14, 10])
        L.texto('El flujo no cambia: Φ = q / ε₀', (-7, 3.7), tam=36, negrita=True)
        L.texto(f'r = {R:.1f}'.replace('.', ','), (-7, 3.0), tam=30, color=SUAVE)

    afuera = lineas([(1, 4.5, 0)], por=18, limite=10)

    def exterior(L, p, t):
        L.fondo()
        for ln in afuera:
            L.linea(ln, color=ELEC, ancho=2, alfa=0.8)
        L.carga((4.5, 0), 1, r=0.4)
        L.circulo((-1, 0), 2.2, color=OCRE, ancho=4, guiones=[14, 10])
        L.texto('Lo que entra, sale: Φ neto = 0', (-7, 3.7), tam=36, negrita=True)
        L.texto('(pero el campo no es cero)', (-7, 3.0), tam=30, color=SUAVE)

    def cilindro(L, p, t):
        L.fondo()
        L.linea([(-7, 0), (7, 0)], color=MAS, ancho=8)
        L.texto('λ', (6.4, 0.4), tam=34, color=MAS)
        a = suave(tramo(p, 0, 0.4))
        L.rect(-2.5, -1.8, 5, 3.6, color=OCRE, ancho=3, alfa=a)
        L.circulo((-2.5, 0), 0.01, color=None)
        for x in [-2, -1, 0, 1, 2]:
            L.flecha((x, 1.8), (0, 1.0), color=ELEC, ancho=3, alfa=a)
            L.flecha((x, -1.8), (0, -1.0), color=ELEC, ancho=3, alfa=a)
        b = suave(tramo(p, 0.45, 0.8))
        L.texto('E · 2πr ℓ = λ ℓ / ε₀', (-6.8, 3.7), tam=38, negrita=True, alfa=b)
        L.texto('E = λ / (2π ε₀ r)', (-6.8, -3.2), tam=40, negrita=True, color=ELEC, alfa=b)

    return [
        titulo('Flujo y ley de Gauss', 'TP 3 · Electrostática'),
        (10, flujo, 'El flujo cuenta cuántas líneas atraviesan una superficie. Es máximo con la superficie de frente al campo y nulo cuando las líneas la rozan.'),
        (10, esfera, 'Una superficie cerrada alrededor de una carga: si la agrandamos, el campo baja como 1/r² pero el área crece como r². El flujo no cambia.'),
        (9, exterior, 'Una carga de afuera no aporta flujo neto: sus líneas entran por un lado y salen por el otro.'),
        (11, cilindro, 'Con simetría, la ley de Gauss da el campo en una línea: para un hilo infinito se usa un cilindro; por las tapas no pasa flujo.'),
        (6, cierre(['Vale para cualquier superficie cerrada.', 'Sirve para calcular E cuando hay simetría.'], ['Φ (sup. cerrada) = Q_enc / ε₀']), None),
    ]


# ---------- 3. potencial ----------

def potencial():
    def anillos(L, p, t):
        L.fondo()
        n = int(1 + 7 * suave(tramo(p, 0, 0.6)))
        for k in range(1, n + 1):
            L.circulo((0, 0), 0.5 * k, color=MAS, ancho=3, alfa=1 - k / 9)
        L.carga((0, 0), 1, r=0.35)
        L.texto('V = k q / r', (2.8, 3.2), tam=46, negrita=True, color=ELEC)
        L.texto('superficies equipotenciales: esferas', (2.8, 2.4), tam=28, color=SUAVE)

    def trabajo(L, p, t):
        L.fondo()
        for k in range(1, 8):
            L.circulo((-3, 0), 0.6 * k, color=MAS, ancho=2, alfa=0.25 + 0.5 * (k == 4) + 0.2 * (k == 2))
        L.carga((-3, 0), 1, r=0.35)
        if p < 0.5:
            a = math.pi * 0.9 * suave(tramo(p, 0, 0.45))
            pos = (-3 + 2.4 * math.cos(a), 2.4 * math.sin(a))
            L.punto(pos, 9, OCRE)
            L.texto('sobre una equipotencial: W = 0', (0.8, 3.4), tam=34, negrita=True)
        else:
            r = 2.4 - 1.2 * suave(tramo(p, 0.55, 0.95))
            L.punto((-3 + r, 0), 9, OCRE)
            L.flecha((-3 + 2.4, -0.5), (-1.2, 0), color=OCRE, ancho=3)
            L.texto('acercarla cuesta: W = q (V_B − V_A)', (0.4, 3.4), tam=34, negrita=True)

    def uniforme(L, p, t):
        L.fondo()
        L.mundo(-8, 8, -4.5, 4.5)
        L.rect(-6, -3, 0.25, 6, relleno=MAS)
        L.rect(-1.25, -3, 0.25, 6, relleno=MENOS)
        for y in [-2, -1, 0, 1, 2]:
            L.flecha((-5.6, y), (4.2, 0), color=ELEC, ancho=2.5)
        for k in range(1, 4):
            L.linea([(-5.75 + 1.15 * k, -3), (-5.75 + 1.15 * k, 3)], color=OCRE, ancho=2, guiones=[8, 8])
        a = suave(tramo(p, 0.2, 0.9))
        L.linea([(1, 2.6), (1 + 5 * a, 2.6 - 4.4 * a)], color=ELEC, ancho=5)
        L.linea([(1, -2), (6.5, -2)], color=SUAVE, ancho=2)
        L.linea([(1, -2), (1, 3)], color=SUAVE, ancho=2)
        L.texto('V', (0.5, 3.1), tam=30)
        L.texto('x', (6.6, -2.4), tam=30)
        L.texto('ΔV = −E d', (2.4, 3.6), tam=40, negrita=True, color=ELEC)

    return [
        titulo('Potencial y equipotenciales', 'TP 4 · Electrostática'),
        (10, anillos, 'El potencial es energía por unidad de carga, como una altura eléctrica. Alrededor de una carga puntual, las superficies de igual potencial son esferas.'),
        (12, trabajo, 'Mover una carga sobre una equipotencial no cuesta trabajo. Pasar de una a otra cuesta q por la diferencia de potencial, sin importar el camino.'),
        (10, uniforme, 'Entre placas, el campo es uniforme y el potencial baja en línea recta. El campo apunta hacia donde el potencial disminuye: E = −dV/dx.'),
        (6, cierre(['El campo es perpendicular a las equipotenciales.', 'El potencial se suma como escalar.'], ['V = k q / r', 'W = q (V_A − V_B)']), None),
    ]


# ---------- 4. capacitor y dieléctrico ----------

def capacitor():
    def dibujar_cap(L, p, conectado):
        L.fondo()
        kappa = 3
        f = suave(tramo(p, 0.15, 0.6))
        V = 1.0 if conectado else 1 / (1 + (kappa - 1) * f)
        Q = (1 + (kappa - 1) * f) if conectado else 1.0
        L.rect(-5, 2, 10, 0.3, relleno=MAS)
        L.rect(-5, -2.3, 10, 0.3, relleno=MENOS)
        if f > 0:
            L.rect(5 - 10 * f, -1.9, 10 * f, 3.8, relleno=MAG, alfa=0.55)
            for x in [5 - 10 * f + 0.5 + 1.0 * k for k in range(int(10 * f))]:
                L.texto('−', (x, 1.45), tam=30, color=PAPEL, alinear='centro')
                L.texto('+', (x, -1.75), tam=30, color=PAPEL, alinear='centro')
        n = max(3, int(round(8 * V)))
        for k in range(n):
            x = -4.5 + 9 * (k + 0.5) / n
            L.flecha((x, 1.8), (0, -3.5), color=ELEC, ancho=3)
        m = int(round(9 * Q))
        for k in range(m):
            x = -4.7 + 9.4 * (k + 0.5) / m
            L.texto('+', (x, 2.55), tam=30, color=MAS, alinear='centro')
            L.texto('−', (x, -3.1), tam=30, color=MENOS, alinear='centro')
        L.texto('batería conectada: V fijo' if conectado else 'batería desconectada: Q fijo', (-7.6, 3.8), tam=32, negrita=True)
        L.texto(f'C ×{1 + (kappa - 1) * f:.1f}   Q ×{Q:.1f}   V ×{V:.2f}   E ×{V:.2f}'.replace('.', ','), (-7.6, -3.9), tam=30, color=ELEC)

    return [
        titulo('El capacitor y el dieléctrico', 'TP 5 · Capacitores'),
        (11, lambda L, p, t: dibujar_cap(L, p, True), 'Con la batería conectada la tensión no cambia. Al entrar el dieléctrico, la capacidad sube κ veces y la batería aporta más carga.'),
        (11, lambda L, p, t: dibujar_cap(L, p, False), 'Desconectado, la carga queda atrapada. El dieléctrico se polariza, sus cargas inducidas debilitan el campo y la tensión baja κ veces.'),
        (6, cierre(['Dieléctrico: C se multiplica por κ.', 'U = ½ C V² = Q² / 2C'], ['C = κ ε₀ A / d']), None),
    ]


# ---------- 5. circuito RC ----------

def circuito_rc():
    def grafico(L, p, descarga=False):
        L.fondo()
        L.mundo(-0.5, 6, -0.35, 1.25)
        L.linea([(0, 0), (5.5, 0)], color=SUAVE, ancho=2)
        L.linea([(0, 0), (0, 1.15)], color=SUAVE, ancho=2)
        for k in range(1, 6):
            L.texto(f'{k}τ', (k, -0.12), tam=24, color=SUAVE, alinear='centro')
            L.linea([(k, 0), (k, 1.05)], color=CUADRICULA, ancho=1)
        tmax = 5 * suave(tramo(p, 0.05, 0.85))
        vc = [(s / 100, (math.exp(-s / 100) if descarga else 1 - math.exp(-s / 100))) for s in range(int(tmax * 100) + 1)]
        ii = [(s / 100, math.exp(-s / 100)) for s in range(int(tmax * 100) + 1)]
        L.linea([(0, 1), (5.5, 1)], color=CUADRICULA, ancho=2, guiones=[6, 6])
        L.linea(vc, color=ELEC, ancho=5)
        L.linea(ii, color=MAG, ancho=4, alfa=0.9)
        L.texto('v_C / ε' if not descarga else 'q / Q₀', (5.1, 1.08), tam=28, color=ELEC)
        L.texto('|i| / i₀', (5.1, 0.12), tam=28, color=MAG)
        if tmax > 1:
            y = math.exp(-1) if descarga else 1 - math.exp(-1)
            L.punto((1, y), 8, OCRE)
            L.texto(('37 %' if descarga else '63 %'), (1.1, y + 0.06), tam=28, color=OCRE)

    return [
        titulo('Carga y descarga de un capacitor', 'TP 8 · Circuitos RC'),
        (12, lambda L, p, t: grafico(L, p), 'Al cerrar, el capacitor descargado actúa como un cable: la corriente arranca en ε/R. A medida que se carga, la corriente se apaga y su tensión sube.'),
        (8, lambda L, p, t: grafico(L, 1), 'En una constante de tiempo τ = RC llega al 63 % de su carga. A las 5τ supera el 99 %: se considera cargado.'),
        (11, lambda L, p, t: grafico(L, p, True), 'En la descarga, carga y corriente caen juntas: en τ queda el 37 %. Una R o una C más grandes hacen todo más lento.'),
        (6, cierre(['La fuente entrega Cε²; el capacitor guarda la mitad.', 'La otra mitad se disipa en R.'], ['q = Cε (1 − e^(−t/RC))', 'τ = R C']), None),
    ]


# ---------- 6. fuerza magnética ----------

def fuerza_magnetica():
    def orbita(L, p, t):
        L.fondo()
        L.cruces(-7.5, 7.5, -3.8, 3.8, paso=1.0)
        R = 2.6
        a = 2 * math.pi * suave(tramo(p, 0, 0.9))
        c = (0, 0)
        pts = [(c[0] + R * math.sin(s / 60), c[1] - R * math.cos(s / 60)) for s in range(int(a * 60) + 1)]
        L.linea(pts, color=MAS, ancho=4)
        pos = (R * math.sin(a), -R * math.cos(a))
        L.flecha(pos, (1.4 * math.cos(a), 1.4 * math.sin(a)), color=TINTA, ancho=4)
        L.flecha(pos, (-1.2 * math.sin(a), 1.2 * math.cos(a)), color=MAG, ancho=4)
        L.punto(pos, 10, MAS)
        L.texto('v', (pos[0] + 1.6 * math.cos(a), pos[1] + 1.6 * math.sin(a)), tam=30)
        L.texto('F = q v × B', (3.6, 3.6), tam=36, negrita=True, color=MAG)
        L.texto('B entrante', (-7.4, 3.6), tam=28, color=SUAVE)

    def dos(L, p, t):
        L.fondo()
        L.cruces(-7.5, 7.5, -3.8, 3.8, paso=1.0)
        a = math.pi * suave(tramo(p, 0, 0.8))
        for (r, color, nombre) in [(2.4, MAS, 'isótopo liviano'), (3.0, OCRE, 'isótopo pesado')]:
            pts = [(-5 + r - r * math.cos(s / 80), r * math.sin(s / 80)) for s in range(int(a * 80) + 1)]
            L.linea(pts, color=color, ancho=4)
            L.texto(nombre, (-5 + 2 * r - 0.3, -0.7 if r < 2.7 else -1.4), tam=26, color=color)
        L.rect(-6, -0.15, 13, 0.1, relleno=SUAVE)
        L.texto('r = m v / (q B)', (2.2, 3.6), tam=38, negrita=True, color=MAG)

    def selector(L, p, t):
        L.fondo()
        L.cruces(-7.5, 7.5, -2.3, 2.3, paso=1.0)
        L.rect(-7.5, 2.6, 15, 0.25, relleno=MAS)
        L.rect(-7.5, -2.85, 15, 0.25, relleno=MENOS)
        x = -7 + 14 * suave(tramo(p, 0, 0.9))
        L.linea([(-7, 0), (x, 0)], color=OCRE, ancho=4)
        L.punto((x, 0), 10, MAS)
        L.flecha((x, 0), (0, -1.4), color=ELEC, ancho=4)
        L.flecha((x, 0), (0, 1.4), color=MAG, ancho=4)
        L.texto('qE', (x + 0.3, -1.4), tam=28, color=ELEC)
        L.texto('qvB', (x + 0.3, 1.4), tam=28, color=MAG)
        L.texto('pasa derecho si v = E / B', (-3.5, 3.6), tam=36, negrita=True)

    return [
        titulo('Cargas en un campo magnético', 'TP 9 · Magnetostática'),
        (12, orbita, 'La fuerza magnética es perpendicular a la velocidad: no cambia la rapidez, solo la dirección. En un campo uniforme la carga da vueltas.'),
        (10, dos, 'Con la misma carga y velocidad, el radio es proporcional a la masa: así el espectrómetro separa isótopos.'),
        (10, selector, 'Con campos eléctrico y magnético cruzados, solo las partículas con v = E/B pasan sin desviarse: es el selector de velocidades.'),
        (6, cierre(['La fuerza magnética no hace trabajo.', 'El período no depende de la velocidad.'], ['F = q v × B', 'T = 2π m / (q B)']), None),
    ]


# ---------- 7. campo de corrientes ----------

def campo_de_corrientes():
    def hilo(L, p, t):
        L.fondo()
        n = int(1 + 5 * suave(tramo(p, 0, 0.6)))
        for k in range(1, n + 1):
            r = 0.8 * k
            L.circulo((0, 0), r, color=ELEC, ancho=3, alfa=1.1 - k / 6)
            L.flecha((r, -0.15), (0, 0.3), color=ELEC, ancho=3, alfa=1.1 - k / 6)
        L.circulo((0, 0), 0.35, color=TINTA, ancho=4, relleno=PAPEL)
        L.punto((0, 0), 7, TINTA)
        L.texto('corriente saliendo', (-7.4, 3.6), tam=28, color=SUAVE)
        L.texto('B = μ₀ I / (2π r)', (2.6, 3.6), tam=40, negrita=True, color=ELEC)

    def paralelos(L, p, t):
        L.fondo()
        mismo = p < 0.5
        q = suave(tramo(p % 0.5, 0.05, 0.4))
        d = 3.2 - (0.6 * q if mismo else -0.6 * q)
        for x, s in [(-d / 2, 1), (d / 2, 1 if mismo else -1)]:
            L.circulo((x, 0), 0.35, color=TINTA, ancho=4, relleno=PAPEL)
            if s > 0:
                L.punto((x, 0), 7, TINTA)
            else:
                L.linea([(x - 0.2, -0.2), (x + 0.2, 0.2)], ancho=4)
                L.linea([(x - 0.2, 0.2), (x + 0.2, -0.2)], ancho=4)
        dirx = 1 if mismo else -1
        L.flecha((-d / 2, 0.7), (dirx * 1.2, 0), color=MAG, ancho=5)
        L.flecha((d / 2, 0.7), (-dirx * 1.2, 0), color=MAG, ancho=5)
        L.texto('mismo sentido: se atraen' if mismo else 'sentidos opuestos: se repelen', (-4.5, 3.4), tam=38, negrita=True)
        L.texto('F / L = μ₀ I₁ I₂ / (2π d)', (-3.6, -3.0), tam=36, color=MAG)

    return [
        titulo('Corrientes que crean campos', 'TP 10 · Magnetostática'),
        (11, hilo, 'Un hilo con corriente crea un campo magnético en circunferencias. Con el pulgar en el sentido de la corriente, los dedos dan el sentido de B.'),
        (14, paralelos, 'Cada hilo está en el campo del otro. Con corrientes del mismo sentido se atraen; con sentidos opuestos se repelen. Las fuerzas son iguales y opuestas.'),
        (6, cierre(['Ampère: circulación de B = μ₀ I.', 'Solenoide: B = μ₀ n I.'], ['B = μ₀ I / (2π r)']), None),
    ]


# ---------- 8. Faraday y Lenz ----------

def faraday_y_lenz():
    def creciente(L, p, t):
        L.fondo()
        intensidad = 0.3 + 0.7 * suave(tramo(p, 0, 0.8))
        L.cruces(-3.5, 3.5, -3, 3, paso=0.9, color=ELEC, alfa=intensidad)
        L.circulo((0, 0), 2.4, color=TINTA, ancho=5)
        if 0.05 < p < 0.85:
            for k in range(4):
                a = k * math.pi / 2 + t * 1.5
                pos = (2.4 * math.cos(a), 2.4 * math.sin(a))
                L.flecha(pos, (-0.8 * math.sin(a), 0.8 * math.cos(a)), color=MAG, ancho=5)
        L.texto('B entrante que crece', (3.8, 3.2), tam=30, color=ELEC)
        L.texto('corriente antihoraria:', (3.8, 2.4), tam=30, color=MAG)
        L.texto('su campo sale', (3.8, 1.8), tam=30, color=MAG)
        L.texto('ε = −N dΦ/dt', (3.8, -2.6), tam=40, negrita=True)

    def barra(L, p, t):
        L.fondo()
        L.cruces(-7.5, 7.5, -3.5, 3.5, paso=1.0)
        x = -3 + 7 * suave(tramo(p, 0, 0.95))
        L.rect(-6, -2, x + 6, 4, relleno=ELEC, alfa=0.15)
        L.linea([(7.5, -2), (-6, -2), (-6, 2), (7.5, 2)], ancho=4)
        L.rect(x - 0.12, -2.4, 0.24, 4.8, relleno=OCRE)
        L.flecha((x, 2.9), (1.2, 0), ancho=4)
        L.texto('v', (x + 1.4, 2.8), tam=30)
        L.flecha((x + 0.4, -0.6), (0, 1.2), color=MAG, ancho=5)
        L.flecha((x, 0), (-1.6, 0), color=MAS, ancho=5)
        L.texto('F que frena', (x - 3.2, -0.6), tam=28, color=MAS)
        L.texto('ε = B ℓ v', (-5.6, 3.4), tam=38, negrita=True)

    return [
        titulo('Faraday y Lenz', 'TP 11 · Inducción'),
        (12, creciente, 'Un flujo magnético que cambia induce una fem. Por Lenz, la corriente circula de modo que su propio campo se opone al cambio.'),
        (12, barra, 'Al deslizar la barra crece el área del circuito y con ella el flujo: aparece la fem ε = Bℓv. La corriente en el campo genera una fuerza que frena la barra.'),
        (6, cierre(['Lenz: la corriente se opone al cambio.', 'La energía mecánica termina como calor en R.'], ['ε = −N dΦ_B/dt']), None),
    ]


# ---------- 9. oscilaciones LC ----------

def oscilaciones_lc():
    def osc(L, p, t, R=0.0):
        L.fondo()
        L.mundo(-0.5, 6.5, -1.4, 1.4)
        w = 2 * math.pi
        tt = 3 * p
        q = math.exp(-R * tt) * math.cos(w * tt)
        i = math.exp(-R * tt) * math.sin(w * tt)
        pts = [(s / 100, math.exp(-R * s / 100) * math.cos(w * s / 100)) for s in range(int(tt * 100) + 1)]
        L.linea([(0, 0), (3.2, 0)], color=SUAVE, ancho=2)
        L.linea(pts, color=ELEC, ancho=5)
        if R:
            L.linea([(s / 50, math.exp(-R * s / 50)) for s in range(161)], color=SUAVE, ancho=2, guiones=[8, 8])
        L.rect(4.2, -1.1, 0.6, 2.2 * q * q / 1.0 * 0.95, relleno=ELEC)
        L.rect(5.3, -1.1, 0.6, 2.2 * i * i * 0.95, relleno=MAG)
        L.texto('U_C', (4.5, -1.3), tam=26, alinear='centro')
        L.texto('U_L', (5.6, -1.3), tam=26, alinear='centro')
        L.texto('q(t)', (0.1, 1.2), tam=28, color=ELEC)

    return [
        titulo('Oscilaciones LC y RLC', 'TP 13 · Circuitos RL, LC y RLC'),
        (12, lambda L, p, t: osc(L, p, t), 'Un capacitor cargado se descarga a través de una bobina. La energía pasa del campo eléctrico al magnético y vuelve: oscila con ω² = 1/(LC).'),
        (12, lambda L, p, t: osc(L, p, t, R=0.35), 'Con resistencia, en cada ciclo se pierde energía y la oscilación se apaga con e^(−Rt/2L). Con R² mayor que 4L/C ya no oscila.'),
        (6, cierre(['Cuando q = 0, la corriente es máxima.', 'Es el mismo modelo que un resorte.'], ['ω² = 1 / (LC)']), None),
    ]


# ---------- 10. fasores ----------

def fasores():
    def giro(L, p, t):
        L.fondo()
        L.mundo(-2.5, 9, -2.6, 2.6)
        a = 2 * math.pi * 1.5 * p
        VR, VL, VC = 1.4, 1.8, 0.8
        pr = (VR * math.cos(a), VR * math.sin(a))
        pl = (VL * math.cos(a + math.pi / 2), VL * math.sin(a + math.pi / 2))
        pc = (VC * math.cos(a - math.pi / 2), VC * math.sin(a - math.pi / 2))
        L.circulo((0, 0), 2.1, color=CUADRICULA, ancho=2)
        L.flecha((0, 0), pr, color=SUAVE, ancho=5)
        L.flecha(pr, pl, color=MAS, ancho=5)
        L.flecha((pr[0] + pl[0], pr[1] + pl[1]), pc, color=MENOS, ancho=5)
        tot = (pr[0] + pl[0] + pc[0], pr[1] + pl[1] + pc[1])
        L.flecha((0, 0), tot, color=ELEC, ancho=6)
        # La proyección vertical es el valor instantáneo: dibuja la sinusoide
        fi = math.atan2(VL - VC, VR)
        V = math.hypot(VR, VL - VC)
        pts = [(2.8 + 6 * s / 200, V * math.sin(a - 2 * math.pi * 1.5 * s / 200 * 0.8 + fi)) for s in range(201)]
        L.linea(pts, color=ELEC, ancho=3)
        L.linea([(tot[0], tot[1]), (2.8, tot[1])], color=SUAVE, ancho=1.5, guiones=[6, 6])
        L.texto('V_R', (-2.4, -2.2), tam=26, color=SUAVE)
        L.texto('V_L', (-1.6, -2.2), tam=26, color=MAS)
        L.texto('V_C', (-0.8, -2.2), tam=26, color=MENOS)
        L.texto('V', (0.0, -2.2), tam=26, color=ELEC)

    def resonancia(L, p, t):
        L.fondo()
        L.mundo(-0.3, 3.2, -0.25, 1.25)
        L.linea([(0, 0), (3, 0)], color=SUAVE, ancho=2)
        L.linea([(0, 0), (0, 1.15)], color=SUAVE, ancho=2)
        Q = 3.0
        f = lambda x: 1 / math.sqrt(1 + Q * Q * (x - 1 / x) ** 2)
        pts = [(k / 100, f(k / 100)) for k in range(5, 300)]
        L.linea(pts, color=MAG, ancho=5)
        x = 0.2 + 2.6 * suave(tramo(p, 0.05, 0.95))
        L.punto((x, f(x)), 10, ELEC)
        L.texto('ω₀² = 1/(LC)', (1.02, 1.1), tam=30, color=ELEC)
        L.linea([(1, 0), (1, 1)], color=SUAVE, ancho=2, guiones=[6, 6])
        L.texto('I / I_máx', (0.05, 1.18), tam=26, color=SUAVE)

    return [
        titulo('Fasores y resonancia', 'TP 14 · Corriente alterna'),
        (14, giro, 'En alterna cada tensión es un vector que gira: V_R en fase con la corriente, V_L adelantada 90° y V_C atrasada 90°. La fuente es la suma vectorial, y su proyección es la sinusoide.'),
        (11, resonancia, 'Cuando X_L = X_C los fasores de la bobina y el capacitor se cancelan: la impedancia es mínima (Z = R) y la corriente, máxima. Es la resonancia.'),
        (6, cierre(['tg φ = (X_L − X_C) / R', 'Solo la resistencia disipa potencia.'], ['Z² = R² + (X_L − X_C)²']), None),
    ]


# ---------- 11. onda electromagnética ----------

def onda_em():
    def onda(L, p, t):
        L.fondo()
        L.mundo(-1, 11, -3.2, 3.2)
        fase = 2 * math.pi * 1.5 * p * 4
        pz = lambda z: (-0.5 * z, -0.6 * z)
        L.flecha((0, 0), (10.5, 0), color=SUAVE, ancho=2)
        pe, pb = [], []
        for k in range(0, 501):
            x = k / 50
            s = math.sin(1.3 * x - fase)
            pe.append((x, 2.2 * s))
            dx, dy = pz(2.2 * s)
            pb.append((x + dx, dy))
            if k % 25 == 0:
                L.linea([(x, 0), (x, 2.2 * s)], color=ELEC, ancho=1.5, alfa=0.7)
                L.linea([(x, 0), (x + dx, dy)], color=MAG, ancho=1.5, alfa=0.7)
        L.linea(pe, color=ELEC, ancho=4)
        L.linea(pb, color=MAG, ancho=4)
        L.texto('E', (0.3, 2.6), tam=32, color=ELEC, negrita=True)
        L.texto('B', (-1.0, -1.6), tam=32, color=MAG, negrita=True)
        L.texto('c', (10.6, 0.3), tam=32)

    def espectro(L, p, t):
        L.fondo()
        nombres = ['radio', 'microondas', 'infrarrojo', 'visible', 'UV', 'rayos X', 'gamma']
        a = suave(tramo(p, 0, 0.5))
        for k, n in enumerate(nombres):
            x = -7 + 2.1 * k
            color = OCRE if n == 'visible' else ELEC
            L.rect(x, -0.6, 1.9, 1.2, relleno=color, alfa=0.25 + 0.5 * (n == 'visible'))
            L.texto(n, (x + 0.95, -1.2), tam=24, alinear='centro', alfa=a)
        L.texto('mayor longitud de onda', (-7, 1.4), tam=26, color=SUAVE)
        L.texto('mayor frecuencia', (7.4, 1.4), tam=26, color=SUAVE, alinear='der')
        L.texto('I = E²_máx / (2 μ₀ c)', (-7, 3.2), tam=40, negrita=True, color=ELEC)

    return [
        titulo('La onda electromagnética', 'TP 16 · Maxwell y ondas'),
        (14, onda, 'Un campo eléctrico variable crea un campo magnético y viceversa: se sostienen y viajan a c. E y B son perpendiculares, están en fase y E = cB.'),
        (10, espectro, 'La luz, las ondas de radio y los rayos X son lo mismo con distinta frecuencia. La intensidad crece con el cuadrado de la amplitud.'),
        (6, cierre(['S = E × B / μ₀ apunta hacia donde viaja.', 'c = 3·10⁸ m/s en el vacío'], ['E = c B', 'c = λ f']), None),
    ]


# ---------- 12. interferencia ----------

def interferencia():
    def ondas(L, p, t):
        L.fondo()
        L.mundo(-7, 9, -4, 4)
        lam = 0.9
        fase = (p * 6 * lam) % lam
        L.rect(-6.2, -4, 0.25, 8, relleno=SUAVE)
        for y0 in (0.8, -0.8):
            L.rect(-6.2, y0 - 0.12, 0.25, 0.24, relleno=PAPEL)
            r = fase
            while r < 13:
                L.circulo((-6, y0), r, color=ELEC, ancho=2, alfa=max(0.0, 0.7 - r / 20))
                r += lam
        # Pantalla con la intensidad de dos rendijas
        L.rect(7.6, -4, 0.15, 8, relleno=CUADRICULA)
        d, Ld = 1.6, 13.6
        pts = []
        for k in range(-400, 401):
            y = 4 * k / 400
            dif = d * y / math.hypot(Ld, y)
            I = math.cos(math.pi * dif / lam) ** 2
            pts.append((7.8 + 1.0 * I * suave(tramo(p, 0.3, 0.8)), y))
        L.linea(pts, color=OCRE, ancho=3)

    def camino(L, p, t):
        L.fondo()
        L.mundo(-7, 9, -4, 4)
        L.rect(-6.2, -4, 0.25, 8, relleno=SUAVE)
        P = (7.5, 2.4)
        r1, r2 = (-6, 0.8), (-6, -0.8)
        L.linea([r1, P], color=ELEC, ancho=3)
        L.linea([r2, P], color=MAG, ancho=3)
        L.punto(P, 9, OCRE)
        L.texto('d sen θ = m λ : brillante', (-4.5, -2.6), tam=36, negrita=True, color=OCRE)
        L.texto('d sen θ = (m + ½) λ : oscura', (-4.5, -3.4), tam=32, color=SUAVE)
        L.texto('diferencia de camino', (0, 3.4), tam=30)

    return [
        titulo('Interferencia de Young', 'TP 17 · Óptica física'),
        (13, ondas, 'La luz pasa por dos rendijas y salen dos ondas coherentes. Donde llegan cresta con cresta se refuerzan; cresta con valle, se cancelan.'),
        (10, camino, 'Todo depende de la diferencia de camino entre las dos rendijas: un número entero de longitudes de onda da franja brillante.'),
        (6, cierre(['Franjas separadas Δy = λ L / d.', 'Rendija simple: a sen θ = m λ da los mínimos.'], ['y_m = m λ L / d']), None),
    ]


# ---------- 13. calor y primer principio ----------

def calor_y_primer_principio():
    def curva(L, p, t):
        L.fondo()
        L.mundo(-0.5, 11, -0.4, 6.5)
        L.linea([(0, 0), (10.5, 0)], color=SUAVE, ancho=2)
        L.linea([(0, 0), (0, 6)], color=SUAVE, ancho=2)
        tramos = [((0, 0.5), (1, 1.5), 'hielo'), ((1, 1.5), (3.5, 1.5), 'fusión'), ((3.5, 1.5), (5.2, 4.5), 'agua'), ((5.2, 4.5), (9.8, 4.5), 'vaporización'), ((9.8, 4.5), (10.4, 5.6), 'vapor')]
        q = 10.4 * suave(tramo(p, 0, 0.92))
        for a, b, nombre in tramos:
            if q <= a[0]:
                break
            fx = min(1, (q - a[0]) / (b[0] - a[0]))
            fin = (a[0] + (b[0] - a[0]) * fx, a[1] + (b[1] - a[1]) * fx)
            meseta = a[1] == b[1]
            L.linea([a, fin], color=OCRE if meseta else ELEC, ancho=5)
            if fx > 0.6:
                L.texto(nombre, ((a[0] + b[0]) / 2, max(a[1], b[1]) + 0.35), tam=26, alinear='centro', color=OCRE if meseta else ELEC)
        L.texto('T', (-0.4, 6.1), tam=30)
        L.texto('Q', (10.6, -0.3), tam=30)
        L.texto('0 °C', (-0.4, 1.4), tam=24, color=SUAVE, alinear='der')
        L.texto('100 °C', (-0.4, 4.4), tam=24, color=SUAVE, alinear='der')

    def piston(L, p, t):
        L.fondo()
        x = 1.5 + 2.2 * suave(tramo(p, 0.15, 0.85))
        L.rect(-5, -2, x + 5, 4, relleno=MAS, alfa=0.12 + 0.15 * suave(tramo(p, 0.1, 0.8)))
        L.linea([(x + 0.4, -2), (-5, -2), (-5, 2), (x + 0.4, 2)], ancho=5)
        L.rect(x, -2, 0.35, 4, relleno=SUAVE)
        L.rect(x + 0.35, -0.2, 2.5, 0.4, relleno=SUAVE)
        L.flecha((-3.2, -3.6), (0, 1.4), color=MAS, ancho=5)
        L.texto('Q entra', (-2.8, -3.4), tam=28, color=MAS)
        L.flecha((x + 3.0, 0.8), (1.4, 0), color=ELEC, ancho=5)
        L.texto('W sale', (x + 3.0, 1.2), tam=28, color=ELEC)
        L.texto('Q = ΔU + W', (-6.8, 3.6), tam=44, negrita=True)
        L.texto('W = área bajo la curva p–V', (-6.8, 2.8), tam=28, color=SUAVE)

    return [
        titulo('Calor, cambio de fase y primer principio', 'TP 19 · Termodinámica'),
        (13, curva, 'Al calentar hielo, la temperatura sube hasta 0 °C y se detiene: el calor latente funde el hielo sin cambiar la temperatura. Lo mismo pasa a 100 °C al hervir.'),
        (11, piston, 'Un gas que recibe calor puede aumentar su energía interna y hacer trabajo empujando el pistón. El primer principio reparte la energía: Q = ΔU + W.'),
        (6, cierre(['Q = m c ΔT,  Q = m L', 'Gas ideal: ΔU = n c_v ΔT'], ['Q = ΔU + W']), None),
    ]


VIDEOS = {
    'campo-electrico': campo_electrico, 'ley-de-gauss': ley_de_gauss, 'potencial-electrico': potencial,
    'capacitor-y-dielectrico': capacitor, 'circuito-rc': circuito_rc, 'fuerza-magnetica': fuerza_magnetica,
    'campo-de-corrientes': campo_de_corrientes, 'faraday-y-lenz': faraday_y_lenz, 'oscilaciones-lc': oscilaciones_lc,
    'fasores-y-resonancia': fasores, 'onda-electromagnetica': onda_em, 'interferencia-de-young': interferencia,
    'calor-y-primer-principio': calor_y_primer_principio,
}


def hacer(nombre):
    os.makedirs(SALIDA, exist_ok=True)
    escenas = VIDEOS[nombre]()
    # Portada: el final de la segunda escena de contenido, cuando el dibujo ya está completo
    poster = sum(d for d, _, _ in escenas[:3]) - 0.5
    renderizar(escenas, os.path.join(SALIDA, nombre), poster_en=poster)
    return nombre


if __name__ == '__main__':
    nombres = sys.argv[1:] or list(VIDEOS)
    with Pool(min(4, len(nombres))) as pool:
        for n in pool.imap_unordered(hacer, nombres):
            print('listo', n, flush=True)

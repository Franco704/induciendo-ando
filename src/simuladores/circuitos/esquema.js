// Símbolos de circuito sobre un Lienzo2D, en coordenadas del mundo. Todos los tramos son verticales u horizontales.

export function cable(l, puntos, color = l.c.tinta) {
  l.trazo(puntos, { color, ancho: 2 });
}

// Resistor en zigzag entre a y b (tramo vertical u horizontal)
export function resistor(l, a, b, { color = l.c.tinta, etiqueta = null } = {}) {
  const vertical = a[0] === b[0];
  const largo = vertical ? b[1] - a[1] : b[0] - a[0];
  const zona = Math.sign(largo) * Math.min(Math.abs(largo) * 0.5, 0.32);
  const m0 = (vertical ? a[1] : a[0]) + (largo - zona) / 2;
  const pts = [a];
  const n = 6, amp = 0.06;
  for (let k = 0; k <= n; k++) {
    const t = m0 + (zona * k) / n, desv = k === 0 || k === n ? 0 : (k % 2 ? amp : -amp);
    pts.push(vertical ? [a[0] + desv, t] : [t, a[1] + desv]);
  }
  pts.push(b);
  l.trazo(pts, { color, ancho: 2 });
  if (etiqueta) l.texto(etiqueta, vertical ? [a[0], (a[1] + b[1]) / 2] : [(a[0] + b[0]) / 2, a[1]], { dx: vertical ? 12 : -14, dy: vertical ? 4 : -12, tam: 12 });
}

// Batería entre a y b; el borne positivo (placa larga) del lado de `positivo` ('a' o 'b')
export function bateria(l, a, b, { positivo = 'b', etiqueta = null } = {}) {
  const vertical = a[0] === b[0];
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
  const s = positivo === 'b' ? 1 : -1, g = 0.035;
  const cerca = vertical ? [mx, my - s * g] : [mx - s * g, my];
  const lejos = vertical ? [mx, my + s * g] : [mx + s * g, my];
  l.trazo([a, vertical ? [mx, my - g * Math.sign(b[1] - a[1])] : [mx - g * Math.sign(b[0] - a[0]), my]], { color: l.c.tinta, ancho: 2 });
  l.trazo([vertical ? [mx, my + g * Math.sign(b[1] - a[1])] : [mx + g * Math.sign(b[0] - a[0]), my], b], { color: l.c.tinta, ancho: 2 });
  const placa = (p, mitad, ancho) => l.trazo(vertical ? [[p[0] - mitad, p[1]], [p[0] + mitad, p[1]]] : [[p[0], p[1] - mitad], [p[0], p[1] + mitad]], { color: l.c.tinta, ancho });
  placa(lejos, 0.13, 2.5); // positiva: larga
  placa(cerca, 0.07, 4.5); // negativa: corta y gruesa
  if (etiqueta) l.texto(etiqueta, [mx, my], { dx: vertical ? -16 : 0, dy: vertical ? 4 : -18, alinear: vertical ? 'right' : 'center', tam: 12 });
}

// Flecha de corriente sobre un tramo, con su valor
export function corriente(l, p, dir, valor, { color = l.c.mag } = {}) {
  if (!Number.isFinite(valor)) return;
  const s = Math.sign(valor) || 1;
  l.flecha([p[0] - (dir[0] * s * 0.1) / 2, p[1] - (dir[1] * s * 0.1) / 2], [dir[0] * s * 0.1, dir[1] * s * 0.1], { color, ancho: 2.5, cabeza: 10 });
}

//Ejercicio 5:  Programa de puntos - Ferretería

// 1. Pedir cédula y monto de compra
let cedula = prompt("Ingrese la cédula del cliente:");
let monto = parseFloat(prompt("Ingrese el monto de la compra:"));

// 2. Saldo inicial de puntos
let puntos = 100;
let puntosOtorgados = 0;
let descuento = 0;

// 3. Calcular los puntos otorgados según el monto
if (monto < 100000) {
    puntosOtorgados = 100;
} else if (monto === 100000) {
    puntosOtorgados = 100;
} else if (monto > 100000 && monto < 500000) {
    puntosOtorgados = 250;
} else if (monto === 500000) {
    puntosOtorgados = 250;
} else if (monto > 500000) {
    puntosOtorgados = 400;
}

// Actualizar saldo de puntos
puntos += puntosOtorgados;

// 4. Mostrar resultados
alert("Cliente con cédula: " + cedula +
      "\nMonto de la compra: $" + monto.toFixed(2) +
      "\nPuntos otorgados: " + puntosOtorgados +
      "\nNuevo saldo de puntos: " + puntos);

// 5. Verificar si aplica descuento
if (puntos >= 500) {
    descuento = monto * 0.20;
    alert("¡Felicidades! Tienes un descuento pendiente de $" + descuento.toFixed(2) + 
          " para tu próxima compra (20%).");
} else {
    let faltan = 500 - puntos;
    alert("Sigue acumulando. Te faltan " + faltan + " puntos para llegar a 500.");
}

// Ejercicio 2: Suscripciones de Revistas – Cálculo de costo

// 1. Preguntar la revista
let revista = prompt("¿A qué revista desea suscribirse? (Dinero, National Geographic o American Journal)");

// 2. Preguntar el tiempo de suscripción
let tiempo = prompt("¿Por cuánto tiempo? (3 meses, 6 meses o 1 año)");

// 3. Preguntar operador de celular
let operador = prompt("¿Cuál es su operador de celular?");

// Convertimos entradas a minúsculas para evitar problemas de mayúsculas/minúsculas
let revistaLower = revista.toLowerCase()
let tiempoLower = tiempo.toLowerCase()

if (revistaLower === "dinero") {
    if (tiempoLower === "3 meses") {
        costo = 6;
    } else if (tiempoLower === "6 meses") {
        costo = 11;
    } else if (tiempoLower === "1 año") {
        costo = 20;
    }
} else if (revistaLower === "national geographic") {
    if (tiempoLower === "3 meses") {
        costo = 10;
    } else if (tiempoLower === "6 meses") {
        costo = 13;
    } else if (tiempoLower === "1 año") {
        costo = 22;
    }
} else if (revistaLower === "american journal") {
    if (tiempoLower === "3 meses") {
        costo = 12;
    } else if (tiempoLower === "6 meses") {
        costo = 18;
    } else if (tiempoLower === "1 año") {
        costo = 30;
    }
}

// 5. Aplicar descuento si operador es Claro
if (operador.toLowerCase() === "claro") {
    costo = costo * 0.95; // 5% descuento
}

// 6. Mostrar resultado
alert("El total a pagar por la suscripción es: $" + costo + " USD");
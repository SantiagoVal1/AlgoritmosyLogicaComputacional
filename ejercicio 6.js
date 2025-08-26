// Ejercicio 6: Sistema de Recargas y Paquetes – Operadores Móviles

// 1. Pedir operador
let operador = prompt("Ingrese su operador (Claro, Tigo o Movistar):").toLowerCase();

// 2. Pedir tipo de operación
let tipo = prompt("¿Desea hacer una recarga o comprar un paquete?").toLowerCase();

let resultado = ""; 
let monto = 0;      

if (tipo === "recarga") {
    // 3. Validar monto de recarga
    monto = parseInt(prompt("Ingrese el monto de la recarga:"));
    if (monto > 10000) {
        resultado = "Recarga exitosa.";
    } else {
        resultado = "Error: El monto debe ser mayor a $10.000.";
    }

} else if (tipo === "paquete") {
    // 4. Validar paquetes según operador
    if (operador === "claro") {
        let paquete = prompt("Ingrese el paquete (CV = $12.000, CA = $20.000):").toUpperCase();
        if (paquete === "CV") {
            monto = 12000;
            resultado = "Compra de paquete CV exitosa.";
        } else if (paquete === "CA") {
            monto = 20000; 
            resultado = "Compra de paquete CA exitosa.";
        } else {
            resultado = "Código de paquete inválido para Claro.";
        }
    } else if (operador === "tigo") {
        let paquete = prompt("Ingrese el paquete (TA = $22.000, TB = $30.000):").toUpperCase();
        if (paquete === "TA") {
            monto = 22000;
            resultado = "Compra de paquete TA exitosa.";
        } else if (paquete === "TB") {
            monto = 30000;
            resultado = "Compra de paquete TB exitosa.";
        } else {
            resultado = "Código de paquete inválido para Tigo.";
        }
    } else if (operador === "movistar") {
        resultado = "Paquetes suspendidos para Movistar. Intente con recarga.";
    } else {
        resultado = "Operador no válido.";
    }

} else {
    resultado = "Tipo de operación no válido.";
}

// 5. Mostrar resumen de la operación
alert("Resumen de operación:" +
      "\nOperador: " + operador.charAt(0).toUpperCase() + operador.slice(1) +
      "\nTipo: " + tipo +
      "\nMonto/Precio: $" + monto +
      "\nResultado: " + resultado);

//Ejercicio 3  Semáforo Digital – Control y Estado

// 1. Preguntar si el semáforo está encendido o apagado
let estado = prompt("¿El semáforo está encendido o apagado?").toLowerCase();

let mensaje = "";

// 2. Verificar estado
if (estado === "apagado") {
    mensaje = "Semáforo apagado";
} else if (estado === "encendido") {
    // 2.1 Preguntar el color
    let color = prompt("Ingrese el color del semáforo (verde, amarillo, rojo):").toLowerCase();

    // 3. Mostrar mensaje según el color
    if (color === "verde") {
        mensaje = "Puede avanzar";
    } else if (color === "amarillo") {
        mensaje = "Precaución";
    } else if (color === "rojo") {
        mensaje = "Deténgase";
    } else {
        mensaje = "Fallo en el dispositivo";
    }
} else {
    mensaje = "Estado inválido. Debe ser 'encendido' o 'apagado'.";
}

// 4. Mostrar resultado
alert("Resultado: " + mensaje);

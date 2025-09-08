function login() {
    let PASS_CORRECTA = "seguro123"; // contraseña guardada
    let intentos = 0; 
    let accesoPermitido = false; 
    let passIngresada;

    // Ciclo con máximo 3 intentos
    do {
        passIngresada = prompt("Ingresa tu contraseña:");
        intentos++;

        if (passIngresada === PASS_CORRECTA) {
            accesoPermitido = true;
            break; // salir del ciclo si es correcta
        } else {
            console.log("❌ Contraseña incorrecta. Intento " + intentos + " de 3");
        }

    } while (intentos < 3);

    // Mensaje final
    if (accesoPermitido) {
        console.log("✅ Acceso permitido. ¡Bienvenido!");
    } else {
        console.log("⛔ Acceso bloqueado. Has superado los 3 intentos.");
    }
}

login();

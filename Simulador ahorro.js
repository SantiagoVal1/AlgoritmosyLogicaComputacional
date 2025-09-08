function simuladorAhorro() {
    let totalAhorrado = 0;
    let semana = 1;

    // Ciclo while para 4 semanas
    while (semana <= 4) {
        let ahorro = parseFloat(prompt("Ingresa el ahorro de la semana " + semana + ":"));
        totalAhorrado += ahorro; // Se suma al total
        semana++; // Pasamos a la siguiente semana
    }

    // Mostrar el resultado final
    console.log(" El total ahorrado en 4 semanas es: $" + totalAhorrado);
}

simuladorAhorro();

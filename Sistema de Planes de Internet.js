function sistemaPlanesInternet() {
    // Pedimos al usuario que seleccione un plan
    let plan = parseInt(prompt(
        "Selecciona tu plan de internet:\n" +
        "1. Básico (10MB - $15)\n" +
        "2. Intermedio (50MB - $30)\n" +
        "3. Premium (100MB - $50)"
    ));

    let detalles;

    // Usamos switch para asignar las características del plan
    switch (plan) {
        case 1:
            detalles = "Plan Básico\nVelocidad: 10MB\nPrecio: $15\nCaracterísticas: Ideal para uso personal y navegación básica.";
            break;
        case 2:
            detalles = "Plan Intermedio\nVelocidad: 50MB\nPrecio: $30\nCaracterísticas: Perfecto para streaming y teletrabajo.";
            break;
        case 3:
            detalles = "Plan Premium\nVelocidad: 100MB\nPrecio: $50\nCaracterísticas: Alta velocidad para familias y gamers.";
            break;
        default:
            detalles = "Opción no válida. Selecciona un número del 1 al 3.";
    }

    // Mostramos el resultado en consola
    console.log(detalles);
}

// Llamamos a la función
sistemaPlanesInternet();

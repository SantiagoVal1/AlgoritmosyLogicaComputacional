function seleccionLavado() {
    // Pedimos al usuario seleccionar un programa de lavado
    let programa = parseInt(prompt(
        "Selecciona programa de lavado:\n" +
        "1. Rápido (30min - $5)\n" +
        "2. Normal (45min - $7)\n" +
        "3. Pesado (60min - $10)\n" +
        "4. Delicado (40min - $8)"
    ))

    let detalles

    // Usamos switch para asignar los detalles del programa
    switch (programa) {
        case 1:
            detalles = "Programa: Rápido\nDuración: 30 min\nPrecio: $5"
            break;
        case 2:
            detalles = "Programa: Normal\nDuración: 45 min\nPrecio: $7"
            break;
        case 3:
            detalles = "Programa: Pesado\nDuración: 60 min\nPrecio: $10"
            break;
        case 4:
            detalles = "Programa: Delicado\nDuración: 40 min\nPrecio: $8"
            break;
        default:
            detalles = "Opción no válida. Por favor selecciona entre 1 y 4.";
    }

    // Mostramos los detalles en consola
    console.log(detalles)
}

// Llamamos a la función
seleccionLavado()

function sistemaDescuentos() {
    // Pedimos al usuario el día de la semana
    let dia = parseInt(prompt(
        "Ingresa el día:\n" +
        "1: Lunes\n" +
        "2: Martes\n" +
        "3: Miércoles\n" +
        "4: Jueves\n" +
        "5: Viernes\n" +
        "6: Sábado\n" +
        "7: Domingo"
    ));

    let descuento;

    // Usamos switch para asignar el descuento según el día
    switch (dia) {
        case 1:
            descuento = "Hoy es Lunes: descuento del 10%";
            break;
        case 3:
            descuento = "Hoy es Miércoles: descuento del 15%";
            break;
        case 5:
            descuento = "Hoy es Viernes: descuento del 20%";
            break;
        case 2:
        case 4:
        case 6:
        case 7:
            descuento = "Hoy no hay descuento disponible.";
            break;
        default:
            descuento = "Día no válido. Ingresa un número del 1 al 7.";
    }

    // Mostramos el resultado en consola
    console.log(descuento);
}

// Llamamos a la función
sistemaDescuentos();

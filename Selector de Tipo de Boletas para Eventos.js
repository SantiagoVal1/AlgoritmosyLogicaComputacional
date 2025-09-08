function selectorBoletas() {
    // Pedimos al usuario el tipo de boleta
    let tipoBoleta = parseInt(prompt(
        "Selecciona tipo de boleta:\n" +
        "1. General ($20)\n" +
        "2. VIP ($50)\n" +
        "3. Platinum ($100)\n" +
        "4. Niño ($10)"
    ));

    let resumen;

    // Usamos switch para asignar los detalles según el tipo de boleta
    switch (tipoBoleta) {
        case 1:
            resumen = "Boleta General\nPrecio: $20\nBeneficios: Acceso a gradería general.";
            break;
        case 2:
            resumen = "Boleta VIP\nPrecio: $50\nBeneficios: Asientos preferenciales, bebida gratis.";
            break;
        case 3:
            resumen = "Boleta Platinum\nPrecio: $100\nBeneficios: Asientos premium, backstage y cena incluida.";
            break;
        case 4:
            resumen = "Boleta Niño\nPrecio: $10\nBeneficios: Acceso a gradería general para menores de 12 años.";
            break;
        default:
            resumen = "Opción no válida. Selecciona un número del 1 al 4.";
    }

    // Mostramos el resumen en consola
    console.log(resumen);
}

// Llamamos a la función
selectorBoletas();

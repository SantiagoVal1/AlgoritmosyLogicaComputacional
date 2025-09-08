function sistemaSoporte() {
    // Pedimos al usuario seleccionar el tipo de problema
    let problema = parseInt(prompt(
        "Selecciona el tipo de problema:\n" +
        "1. Facturación\n" +
        "2. Problemas técnicos\n" +
        "3. Ventas\n" +
        "4. Quejas y sugerencias"
    ));

    let contacto;

    // Usamos switch para redirigir al departamento correcto
    switch (problema) {
        case 1:
            contacto = "Departamento de Facturación\nCorreo: facturacion@empresa.com\nTel: 300-111-1111";
            break;
        case 2:
            contacto = "Departamento Técnico\nCorreo: soporte@empresa.com\nTel: 300-222-2222";
            break;
        case 3:
            contacto = "Departamento de Ventas\nCorreo: ventas@empresa.com\nTel: 300-333-3333";
            break;
        case 4:
            contacto = "Departamento de Quejas y Sugerencias\nCorreo: quejas@empresa.com\nTel: 300-444-4444";
            break;
        default:
            contacto = "Opción no válida. Selecciona un número entre 1 y 4.";
    }

    // Mostramos la información en consola
    console.log(contacto);
}

// Llamamos a la función
sistemaSoporte();

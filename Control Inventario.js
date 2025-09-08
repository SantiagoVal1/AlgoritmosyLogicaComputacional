function controlInventario() {
    let producto = "";
    let totalVendido = 0;

    // El ciclo se repite hasta que el usuario escriba "terminar"
    while (producto !== "terminar") {
        producto = prompt("Ingresa producto vendido (escribe 'terminar' para finalizar):");

        if (producto !== "terminar") {
            totalVendido++; // suma un producto vendido
        }
    }

    console.log(" Total de productos vendidos hoy: " + totalVendido);
}

controlInventario();

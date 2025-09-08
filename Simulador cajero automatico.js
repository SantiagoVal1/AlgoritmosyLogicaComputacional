function cajeroAutomatico() {
    let saldo = 1000; // Saldo inicial
    let opcion;

    do {
        opcion = parseInt(prompt(
            "Selecciona operación:\n1. Consultar saldo\n2. Retirar\n3. Depositar\n4. Salir"
        ));

        switch (opcion) {
            case 1:
                console.log(" Tu saldo actual es: $" + saldo);
                break;

            case 2:
                let retiro = parseFloat(prompt("Ingresa el monto a retirar:"));
                if (retiro > saldo) {
                    console.log(" Fondos insuficientes.");
                } else {
                    saldo -= retiro;
                    console.log("Retiraste $" + retiro + ". Nuevo saldo: $" + saldo);
                }
                break;

            case 3:
                let deposito = parseFloat(prompt("Ingresa el monto a depositar:"));
                saldo += deposito;
                console.log(" Depositaste $" + deposito + ". Nuevo saldo: $" + saldo);
                break;

            case 4:
                console.log("Gracias por usar el cajero. ¡Hasta luego!");
                break;

            default:
                console.log(" Opción inválida. Intenta de nuevo.");
        }

    } while (opcion !== 4); // se repite hasta que el usuario elija salir
}

cajeroAutomatico();

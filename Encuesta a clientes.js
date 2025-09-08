function encuestaSatisfaccion() {
    let totalPuntos = 0

    // Ciclo para encuestar a 10 clientes
    for (let i = 1; i <= 10; i++) {
        let satisfaccion = parseInt(prompt("Cliente " + i + ": Califica nuestro servicio (1-5):"))

        // Validamos que esté entre 1 y 5
        while (isNaN(satisfaccion) || satisfaccion < 1 || satisfaccion > 5) {
            satisfaccion = parseInt(prompt("Valor inválido. Cliente " + i + ": Ingresa un número entre 1 y 5:"))
        }

        // Acumulamos la calificación
        totalPuntos += satisfaccion
    }

    // Calculamos el promedio
    let promedio = totalPuntos / 10

    // Mostramos el resultado en consola
    console.log("El promedio de satisfacción de los clientes es: " + promedio.toFixed(2))
}

// Se llama a la función
encuestaSatisfaccion()

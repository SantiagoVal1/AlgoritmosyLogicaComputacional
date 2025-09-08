function calcularPromedio() {
    let cantidad = parseInt(prompt("¿Cuántas asignaturas tienes?"));
    let suma = 0;

    // Pedimos cada calificación
    for (let i = 1; i <= cantidad; i++) {
        let nota = parseFloat(prompt("Ingresa la calificación de la asignatura " + i + ":"));
        suma += nota; // acumulamos la nota
    }

    let promedio = suma / cantidad;

    console.log(" El promedio de tus calificaciones es: " + promedio.toFixed(2));
}

calcularPromedio();

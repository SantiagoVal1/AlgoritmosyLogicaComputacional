function registroTemperaturas() {
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let total = 0;
    let maxTemp = -9999;
    let minTemp = 9999;
    let diaCaluroso = "";
    let diaFrio = "";

    // Pedir temperaturas
    for (let i = 0; i < 7; i++) {
        let temp = parseFloat(prompt("Temperatura del día " + dias[i] + ":"));

        total += temp; // Sumar para promedio

        if (temp > maxTemp) {   // Más caliente
            maxTemp = temp;
            diaCaluroso = dias[i];
        }

        if (temp < minTemp) {   // Más frío
            minTemp = temp;
            diaFrio = dias[i];
        }
    }

    let promedio = total / 7;

    // Mostrar resultados
    console.log(" Día más caluroso: " + diaCaluroso + " con " + maxTemp + "°C");
    console.log(" Día más frío: " + diaFrio + " con " + minTemp + "°C");
    console.log(" Promedio semanal: " + promedio.toFixed(2) + "°C");
}

registroTemperaturas();

function sistemaReservas() {
    let mesasReservadas = 0;

    // Recorremos las 5 mesas
    for (let mesa = 1; mesa <= 5; mesa++) {
        let reservada = prompt("¿Está reservada la mesa " + mesa + "? (si/no)");

        if (reservada.toLowerCase() === "si") {
            mesasReservadas++; // suma una mesa reservada
        }
    }

    let disponibles = 5 - mesasReservadas;
    console.log("Mesas reservadas: " + mesasReservadas);
    console.log("Mesas disponibles: " + disponibles);
}

sistemaReservas();

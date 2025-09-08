function sistemaDeNiveles() {

    let nivel = parseInt(prompt("Ingresa tu nivel (1 - 5):"));
    let recompensa;

    switch (nivel) {
        case 1:
            recompensa = "Espada de madera";
            break;
        case 2:
            recompensa = "Escudo de hierro";
            break;
        case 3:
            recompensa = "Armadura ligera";
            break;
        case 4:
            recompensa = "Arco mágico";
            break;
        case 5:
            recompensa = "Espada legendaria";
            break;
        default:
            recompensa = "Nivel no válido, no recibes recompensa.";
    }

    console.log("Tu recompensa es: " + recompensa);
}

sistemaDeNiveles();

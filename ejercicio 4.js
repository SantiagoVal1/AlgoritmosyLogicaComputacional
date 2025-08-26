//Control de Aforo – Estadio Centenario (Armenia)

// 1. Pedir el código
let codigo = prompt("Ingrese su código alfanumérico (ej: O12345):");

// 2. Validar formato (1 letra + 5 dígitos)
if (/^[A-Z][0-9]{5}$/i.test(codigo)) {

    // 3. Extraer la letra inicial (convierto a mayúscula para no importar minúsculas)
    let letra = codigo[0].toUpperCase();

    let zona = "";
    if (letra === "O") {
        zona = "Oriental";
    } else if (letra === "T") {
        zona = "Occidental";
    } else if (letra === "S") {
        zona = "Sur";
    } else if (letra === "N") {
        zona = "Norte";
    }

    // Si la letra corresponde a una zona válida
    if (zona !== "") {
        alert("Bienvenido. Diríjase a la zona " + zona + ".");
    } else {
        alert("Código inválido. Por favor verifique e intente nuevamente.");
    }

} else {
    // 4. Si no cumple el patrón
    alert("Código inválido. Por favor verifique e intente nuevamente.");
}

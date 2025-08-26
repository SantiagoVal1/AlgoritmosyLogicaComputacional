//Ejercicio 1: LavaSpress – Cálculo de alquiler de lavadoras

// Tarifas
const TARIFA_PEQUENA = 3000
const TARIFA_GRANDE = 4000

// 1. Pedir horas al usuario
let horasPequena = parseInt(prompt("¿Cuántas horas va a alquilar la lavadora pequeña?")) 
let horasGrande = parseInt(prompt("¿Cuántas horas va a alquilar la lavadora grande?")) 

// 2. Calcular costos individuales
let costoPequena = horasPequena * TARIFA_PEQUENA
let costoGrande = horasGrande * TARIFA_GRANDE

// 3. Calcular total sin descuento
let total = costoPequena + costoGrande

// 4. Verificar si aplica descuento
let horasTotales = horasPequena + horasGrande;
if (horasTotales > 10) {
  total = total * 0.97 // descuento del 3%
}

// 5. Mostrar resultado
alert("El total a pagar es: " + total + " pesos")






    







'use strict'

// Calculadora 

var num1 = parseInt(prompt("Ingrese numero:"));
var num2 = parseInt(prompt("Ingrese numero:"));

while (isNaN(num1)) {
    num1 = parseInt(prompt("Ingrese un numero valido:"));
}
while (isNaN(num2)) {
    num2 = parseInt(prompt("Ingrese un numero valido:"));
}
if (!isNaN(num1) && !isNaN(num2)) {
    var suma = num1 + num2;
    var resta = num1 - num2;
    var mult = num1 * num2;
    var div = num1 / num2;
    document.write("Resultado operaciones de los numeros " + num1 + " y " + num2 + "<br/>" + "Suma = " + suma + "<br/>" + "Resta = " + resta + "<br/>" + "Multiplicación = " + mult + "<br/>" + "División = " + div + "<br/>");
    console.log("Suma = " + suma);
    console.log("Resta = " + resta);
    console.log("Multiplicación = " + mult);
    console.log("División = " + div);
}

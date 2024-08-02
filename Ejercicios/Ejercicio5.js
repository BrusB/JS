'use strict'

// Muestra todos los numeros divisores de un numero introducido en el prompt

var num1 = parseInt(prompt("Ingrese numero:"));

for (var i = 1; i <= num1; i++) {
    if (num1 % i == 0) {
        document.write("El numero " + i + " es divisor <br/>");
    }
}
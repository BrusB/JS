'use strict'

// Programa que diga si el numero es par o impar 
// Si el numero introducido no es valido que pida de nuevo el numero

var num1 = parseInt(prompt("Ingrese numero:"));

while (isNaN(num1) || num1 <= 0) {
    num1 = parseInt(prompt("Ingrese un numero valido:"));
}
if (num1 % 2 == 0) {
    document.write("El numero " + num1 + " es par");
} else {
    document.write("El numero " + num1 + " es impar");

}


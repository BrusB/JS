'use strict'

// Programa que nos pida dos numeros y nos diga cual es mayor o menor y si son iguales

var num1 = parseInt(prompt("Ingrese primer número"));
var num2 = parseInt(prompt("Ingrese segundo número"));


while (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)) {
    alert("Numeros incorrectos");
    num1 = parseInt(prompt("Ingrese primer número"));
    num2 = parseInt(prompt("Ingrese segundo número"));
}

if (num1 > num2) {
    alert("El primer numero " + num1 + " es mayor que el segundo " + num2);
} else if (num1 < num2) {
    alert("El primer numero " + num1 + " es menor que el segundo " + num2);
} else if (num1 == num2) {
    alert("El primer numero " + num1 + " es igual que el segundo " + num2);
} else {
    alert("Numeros incorrectos");
}





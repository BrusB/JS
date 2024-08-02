'use strict'

//Programa que muestre todos los numeros entre dos numeros introducidos por el usuario

var num1 = parseInt(prompt("Ingrese primer numero:"));
var num2 = parseInt(prompt("Ingrese segundo numero:"));

if (num1 == num2) {
    document.write("Los numeros son iguales");
} else {
    document.write("Del numero " + num1 + " al numero " + num2 + " hay: <br/>")
    do {
        if (num1 <= num2) {
            num1++;
            document.write(num1 + "<br/>");
        } else if (num2 <= num1) {
            num2++;
            document.write(num2 + "<br/>");
        }
    } while (num1 != num2);
}


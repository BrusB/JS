'use strict'

//Mostrar todos los nummeros impares que hay entre dos numeros introducidos por el usuario

var num1 = parseInt(prompt("Ingrese primer numero:"));
var num2 = parseInt(prompt("Ingrese segundo numero:"));

document.write("Los numeros impares entre " + num1 + " y " + num2 + " son: </br>")
for (num1; num1 <= num2; num1++) {
    if (num1 % 2 != 0) {
        document.write(num1 + "<br/>");
    }
}
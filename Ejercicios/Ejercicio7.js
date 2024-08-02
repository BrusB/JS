'use strict'

// Tabla de multiplicar

var num1 = parseInt(prompt("Ingrese numero:"));
var resultado

for (var i = 1; i <= 10; i++) {
    resultado = i * num1;
    document.write(num1 + " * " + i + " = " + resultado + "<br/>");
}
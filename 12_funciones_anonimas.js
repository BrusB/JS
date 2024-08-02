'use strict'

// Funciones anonimas 
// Funcion sin nombre que se almacena en variables para pasarlas como argumento a otra funcion 

var pelicula = function (nombre) {
    return "La pelicula es " + nombre;
}

// Callback: funcion dentro de otra funcion 
// Primero la funcion padre suma que contiene los parametros show y cuadrado
function suma(num1, num2, show, cuadrado) {
    var sumar = num1 + num2;
    show(sumar);
    cuadrado(sumar);
    return sumar;
}

// Al llamar a la funcion le incluimos como argumento para show y cuadrado funciones anonimas 
/*
suma(3, 7, function (data) {
    console.log("El resultado de la suma es " + data);
}, function (data) {
    console.log("El cuadrado de la suma es " + data * data);
});
*/

// Funcion de flecha
// Es una forma de definir las funciones de callback de manera mas limpia y clara 
suma(4, 7, data => {
    console.log("El resultado de la suma es " + data);
}, data => {
    console.log("El cuadrado de la suma es " + data * data);
});

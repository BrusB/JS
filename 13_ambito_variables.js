'use strict'

// Se  pueden llamar variables de fuera de una funcion a dentro pero no de dentro a fuera 

function hola_mundo(texto) {
    var hola = "Texto dentro de funcion";

    console.log(texto);
    console.log(numero.toString); // Llamada de fuera a dentro | con toString lo convertimos en string 
    console.log(hola); // Llamada de variable de dentro
}

var numero = 1538456;
var texto = "Diablo que difisil me la pusiste";

hola_mundo(texto);

console.log(hola); // Llamada de dentro de la función a fuera ERROR 
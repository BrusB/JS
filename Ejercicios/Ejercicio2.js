'use strict'

// Bucle que muestre la suma y la media de los numeros introducidos hasta 
// que se introduzca un numero negativo y ahí mostrar el resultado. 

var sum = 0;
var media = 0;
var contador = 0;

do {
    var num = parseInt(prompt("Introduce un número (negativo para finalizar)"));

    if (isNaN(num)) {
        alert("Por favor, ingrese un dato numerico");
        continue;
    }

    contador++;
    sum += num;
    media = sum / contador;
    console.log("Contador", contador);
    console.log("Suma", sum);
    console.log("Media", media);

} while (num > 0);


alert("La suma de los numeros es " + sum + "\nLa media de los numeros es " + media); 
'use strict'

// Arrays 

var colors = ["blue", "white", "black", "brown", "orange"];
var numbers = new Array("one", "two", "three", "four", "five");

console.log(colors[1], numbers[2]);

console.log(colors.length);

/*
var color = parseInt(prompt("Escoge un numero"));

while (color >= colors.length) {
    alert("Error numero demasiado alto, introduce un numero menor que " + colors.length);
    color = parseInt(prompt("Escoge un numero"));
}

alert("El color seleccionado es " + colors[color]);
*/


// Recorrer un array 

for (var i = 0; i < colors.length; i++) {
    document.write(colors[i] + "</br>");
}

colors.forEach((color) => {
    document.write(color + "</br>");
});


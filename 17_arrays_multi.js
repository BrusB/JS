'use strict'

// Arrays Multidimensionales
// Arrays dentro de otros arrays 

var categorias = ["Terror", "Accion", "Comedia"];
var peliculas = ["Hereditary", "La Jungla de Cristal", "Resacón"];

var cine = [categorias, peliculas];
console.log(cine[0][1]);

// Operaciones con arrays 

// Introducir elementos 
peliculas.push("Greenbook");

// Introducir un elemento en una posición 
peliculas[0] = "Batman";
console.log(peliculas);


var peli = " ";

do {
    peli = prompt("Introduce una pelicula (escribe 'fin' para acabar):");
    peliculas.push(peli);
}
while (peli != "fin");

peliculas.pop(); // pop para eliminar el ultimo elemento del array


console.log(peliculas);

// Para eliminar un elemento concreto de un array 

var indice = peliculas.indexOf("Batman"); // Con indexOf averiguamos en que posición esta el elemento 

if (indice != -1) { //Primero comprobamos que ha encontrado el elemento con != -1 
    peliculas.splice(indice, 1); // Eliminamos el elemento, indice indica la posición y 1 el numero de elementos que queremos eliminar
    console.log(peliculas);
}


// Convertir un array a texto 

var pelis_string = peliculas.join();
console.log(pelis_string); 

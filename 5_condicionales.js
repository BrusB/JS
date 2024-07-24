'use strict'

//Condicionales IF 

var edad1 = 30;
var edad2 = 15;

if (edad1 > edad2) {
    console.log("edad1 es mayor que edad2");
} else {
    console.log("edad1 es menor o igual que edad2");
}

var edad3 = 70;
var nombre = "John";

if (edad3 >= 18) {
    console.log(nombre + " es mayor de edad");

    if (edad3 <= 30) {
        console.log(nombre + " es joven adulto");
    } else if (edad3 >= 65) {
        console.log(nombre + " es anciano");
    }

} else {
    console.log(nombre + " es menor de edad");
}

/* Operadores relacionales

    > 
    <
    >=
    <=
    ==
    !=

*/

/* Operadores lógicos

and    &&
or     ||
not     !   

*/
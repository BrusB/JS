'use strict'

//LET Y VAR 
//prueba con var 
var number = 40; 
console.log(number); //valor 40 

if (true){
    var number = 50; 
    console.log(number); //valor 50
}

console.log(number); // valor 50 

//prueba con let 
var text = "knekro"; 
console.log(text); //valor knekro

if(true){
    let text = "MONDONGO"; 
    console.log(text); //valor MONDONGO porque el let solo funciona en el bloque del if 
}

console.log(text); // valor knekro
'use strict'

//OPERADORES 
var number1 = 10; 
var number2 = 2; 
var result = number1 / number2; // + - * / %  

alert("The result is: " +result); 

//Tipos de datos 
var number_int = 44; 
var text = "texto"; 
var true_false = true; //boolean values 

//Funciones
var fake_number= "33.5"; 
console.log(Number(fake_number)+7);  //cambia el número del texto a número 
console.log(parseInt(fake_number)+7); //cambia el número del texto a número entero
console.log(parseFloat(fake_number)+7); //cambia el número del texto a número decimal
console.log((String)(number_int)+4); //cambia el numero a texto (al reves que Number)

//El operador typeof reconoce el tipo de dato 
console.log(typeof number_int); 
console.log(typeof text); 
console.log(typeof true_false); 
console.log(typeof result); 
console.log(typeof fake_number); 
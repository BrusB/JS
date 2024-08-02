'use strict'

// Transformacion de cadenas de texto 

var num = 123;
var text1 = "  hola JS hola";
var text2 = "WOW que Matematica";

var data = num.toString();  // Convertir en string
console.log(data);

data = text1.toUpperCase(); // MAYUSCULAS 
console.log(data);

data = text2.toLowerCase(); // minusculas 
console.log(data);

// Calcular longitud de texto 

var nombre = "cinco";
nombre = ["uno", "dos", "tres"];

console.log(nombre.length); // Cuenta las letras y el nunero de elementos si es un array 


// Concatenar 

var textazo = text1 + text2;
textazo = text1.concat(" ", text2);
console.log(textazo);


// Busquedas 

var busqueda = text1.indexOf("hola"); // El metodo indexOF sirve para buscar una palabra concreta segun el caracter  
console.log(busqueda);

busqueda = text1.lastIndexOf("hola"); // En lugar de la primera busca la ultima 
console.log(busqueda);

busqueda = textazo.match(/hola/g); // Para buscar cuantas veces hay una palabra 
console.log(busqueda);

busqueda = textazo.substring(14, 5); // Para sacar el texto desde un caracter especifico, primer numero indica desde donde y el segundo cuantos caracteres 
console.log(busqueda);

busqueda = textazo.charAt(30); // Para obtener un caracter 
console.log(busqueda);

busqueda = textazo.startsWith("ho"); // Para buscar palabras que empiecen por...
console.log(busqueda); // Responde con booleanos 

busqueda = textazo.endsWith("la"); //Buscar palabras que acaben con... 
console.log(busqueda);

busqueda = textazo.includes("Matematica"); //Busca una palabra concreta 
console.log(busqueda);


// Reemplazo de texto

busqueda = textazo.replace("Matematica", "Historia");
console.log(busqueda);

// Cortar texto 
busqueda = textazo.slice(14, 22);
console.log(busqueda);

// Recortar texto y lo mete en un array
busqueda = textazo.split(" "); // En este caso le indicamos que recorte cada espacio asi que guarda cada palabra individualmente
console.log(busqueda);

// Recortar espacios por delante y por detras (util para nombres de usuario y contraseñas)
busqueda = textazo.trim();
console.log(busqueda); 

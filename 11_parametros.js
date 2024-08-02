'use strict'

// Parametros REST y SPREAD 

// Un parametro REST, captura un numero indefinido de parametros en un array
function frutas(fruta1, fruta2, ...resto_frutas) {
    console.log("Fruta1: ", fruta1);
    console.log("Fruta2: ", fruta2);
    console.log(resto_frutas);
}
frutas("Sandia", "Peras", "Cocos", "Fresas", "Manzana");


// Un parametro spread va a capturar el contenido de un array de una varaible y  lo va a introducir en los parametros de la funcion 
// En este ejemplo coge el contenido de la variable frutitias y lo introduce en fruta1 y fruta2.
var frutitas = ["Sandia", "Peras"];
frutas(...frutitas, "Cocos", "Fresas", "Manzana"); 
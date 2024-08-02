'use script'

// Funciones 
// Agrupacion reutilizable de un comnjunto de instrucciones 

function hola_mundo() {

    console.log("Hola mundo JS");
    // return "Hola mundo JS";

}
hola_mundo();

/*
function calculadora(num1, num2) {

    if (!isNaN(num1) && !isNaN(num2)) {
        var suma = num1 + num2;
        var resta = num1 - num2;
        var mult = num1 * num2;
        var div = num1 / num2;
        document.write("Resultado operaciones de los numeros " + num1 + " y " + num2 + "<br/>" + "Suma = " + suma + "<br/>" + "Resta = " + resta + "<br/>" + "Multiplicación = " + mult + "<br/>" + "División = " + div + "<br/><br/>");
        console.log("Suma = " + suma);
        console.log("Resta = " + resta);
        console.log("Multiplicación = " + mult);
        console.log("División = " + div);
        console.log("****************");
    }
} 
//calculadora();

for (var i = 1; i <= 10; i++) {
    calculadora(i, 7);
} */

function consola(num1, num2) {
    var suma = num1 + num2;
    var resta = num1 - num2;
    var mult = num1 * num2;
    var div = num1 / num2;
    console.log("Suma = " + suma);
    console.log("Resta = " + resta);
    console.log("Multiplicación = " + mult);
    console.log("División = " + div);
    console.log("****************");
}

function documento(num1, num2) {
    var suma = num1 + num2;
    var resta = num1 - num2;
    var mult = num1 * num2;
    var div = num1 / num2;
    document.write("Resultado operaciones de los numeros " + num1 + " y " + num2 + "<br/>" + "Suma = " + suma + "<br/>" + "Resta = " + resta + "<br/>" + "Multiplicación = " + mult + "<br/>" + "División = " + div + "<br/><br/>");

}

function calculadora2(num1, num2, show = false) {
    if (!isNaN(num1) && !isNaN(num2)) {
        if (show == false) {
            consola(num1, num2);
        } else {
            documento(num1, num2);
        }
        return true;
    } else {
        console.log("Por favor, ingrese números válidos.");
    }
}


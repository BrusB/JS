'use strict'

//Bucle WHILE

var num = 20;

while (num <= 100) {
    console.log("Has alcanzado el nivel " + num);
    num++;
}

//Do While

var num2 = 5;

do {
    console.log(num2);
    num2++;
    if (num2 == 25) {
        break;
    }
} while (num2 <= 50)
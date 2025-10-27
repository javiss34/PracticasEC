"use strict"
export function funcion(num1,num2){
    if(isNaN(num1) || isNaN(num2)){
        console.log("ERROR");

    }
    for (let i = 0; i < num1; i++) {
        console.log(num2);
        num2*=2;
    }

}
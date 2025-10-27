"use strict";

export function suma(){
    if(arguments.length<2){
        console.log("Error. No tiene los parámetros suficientes.")
        return;
    }

    let suma=0;
    for (let i = 0; i < arguments.length; i++) {
        let num = arguments[i];

        if(typeof num==="number"){
            suma+=num;
        }else{
            console.log("Error. No es un número");
            return;
        }   
    }
    console.log(`La suma es ${suma}`);
    return suma;
}
"use strict";

export function potencia(base,exponente){
    if(!Number.isInteger(base) || !Number.isInteger(exponente)){
        console.log("ERROR. No has introducido números enteros");
        return;
    }

    if(exponente<0){
        console.log("No se puede elevar a un número negativo");
        return;
    }

    let i=0;
    let resultado=1;

    while(exponente>i){
        resultado *= base;
        i++;
    }

    console.log(`Potencia -> ${base}^${exponente}=${resultado}`);

}
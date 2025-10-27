"use strict";

export const crearArrayAleatorio = () => {
    let array=[];
    for (let i = 0; i < 10; i++) {
        array[i]=(Math.floor(Math.random()*9)); 
    }
    return array;
}

export const filtrarMayorQueCinco = (array1,array2,array3) => {
    let arrayFiltrado=[...array1,...array2,...array3];
    return arrayFiltrado.filter(elemento => elemento>5);
}
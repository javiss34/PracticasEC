"use strict";

export const generarArray = (num) => {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(Math.floor(Math.random()*101));   
    }
    return array;
}

export const sumaInversaArrays = (array1,array2) => {
    let arraySuma=[];
    for (let i = 0; i < array1.length; i++) {
        if(array1.length===array2.length && !isNaN(array1[i]) && !isNaN(array2[i])){
        arraySuma.push(array1[i] + array2[array2.length-1-i]);
        }else{
            console.log("Error, los arrays no son del mismo tamaño o no has introducido un número válido");
            return;
        }
    } 
    console.log(arraySuma);
    return arraySuma;
}

export const imprimirArray = (array) => {
    console.log(array.join(", "));
}
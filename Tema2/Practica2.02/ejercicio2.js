"use strict"
export function esNumero(num){
        return !isNaN(num);
}

export function esPar(num){
    return num%2===0;
}

export function esPositivo(num){
    return num>0;//Considero que el 0 es negativo
}
export function esPrimo(num){
    //Ni los negativos ni el 1 son primos
    if(num<2){
        return false;
    }
    //si el numero da de resto 0 en cualquier división entres este y su raiz cuadrada no sera primo
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

export function analisisNumerico(num){
    if(!esNumero(num)){
        console.log("Error.No has introducido un número");
        return;
    }
    console.log(`El número es: `);
    console.log(`${esPar(num) ? "par" : "impar"}`);
    console.log(`${esPositivo(num) ? "positivo" : "negativo"}`);
    console.log(`${esprimo(num) ? "primo" : "no primo"}`);
}
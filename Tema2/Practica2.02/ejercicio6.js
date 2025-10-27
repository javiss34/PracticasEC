"use strict";

//Operaciones
function sumar(num1,num2){
    return num1+num2;
}
function restar(num1,num2){
    return num1-num2;
}
function multiplicar(num1,num2){
    return num1*num2;
}
function dividir(num1,num2){
    return num1/num2;
}
function modulo(num1,num2){
    return num1%num2;
}


export function calculadora(num1,num2,operador){
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        console.log("Error. No has introducido números enteros");
        return;
    }

    let resultado;
    switch (operador) {
        case "+":
            resultado=sumar(num1,num2);
            break;
        case "-":
            resultado=restar(num1,num2);
            break;
        case "*":
            resultado=multiplicar(num1,num2);
            break;
        case "/":
            resultado=dividir(num1,num2);
            break;
        case "%":
            resultado=modulo(num1,num2);
            break;
    
        default:
            console.log("ERROR. Operador inválido")
            break;
    }

    console.log(`${num1}${operador}${num2}=${resultado}`);

}
"use strict";

export const multiplicar = num => {
    let resultado;
    for (let i = 0; i <= 10; i++) {
        resultado=num*i;
        console.log(`${num} x ${i} = ${resultado}`);    
    }
}

export const tablasMult = (num,multiplicar) => {
    for (let i = num; i >= 2; i--) {
        multiplicar(i);
    }

}
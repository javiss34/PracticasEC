"use strict";

export function calcularaImc(masa,altura){
    if(isNaN(masa) || isNaN(altura)){
        console.log("ERROR")
        
    }
    return (masa/(altura*altura));
};
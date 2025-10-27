"use strict";

export function calcularMedia(){
    //valido que el arguments no esté vacío
    if(arguments.length===0){
        console.log("ERROR. No has pasado parámetros")
        return;
    }


    let suma=0;
    let contador=0;
    for (let i = 0; i < arguments.length; i++) {
        let num = arguments[i];

        if(Number.isInteger(num) && num>=0){
            suma+=num;
            contador++;
        }else{
            console.log("ERROR. No has pasado un número entero positivo");
            return;
        }
        
    }


    let media= suma/contador;
    console.log(`${media}`);
    


}
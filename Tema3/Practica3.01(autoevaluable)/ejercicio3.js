"use strict";

function calcularPropina(factura){
    if(factura<50){
        return factura*0.2;
    }else if(factura>=50 && factura<=200){
        return factura*0.15;
    }else{
        return factura*0.1;
    }

}

export function calculadoraPropina(facturas){
    let propinas = [];
    let totales = [];
    for (let i = 0; i < facturas.length; i++) {
        let propina = calcularPropina(facturas[i]);
        propinas.push(propina);
        totales.push(facturas[i] + propina);
        
    }

    console.log(totales);
}
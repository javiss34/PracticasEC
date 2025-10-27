"use strict"
export function calcularPrecio(nombre="Producto genérico",precio=100,impuesto=21){
    if(isNaN(precio) || isNaN(impuesto)){
        console.log("Error");
    }else{
        console.log(`Producto: ${nombre} \nPrecio final: ${precio+(precio*(impuesto/100))}€`)
    }

}

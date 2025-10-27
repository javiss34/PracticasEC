"use strict";

export function mostrarMes(num){
    if(!Number.isInteger(num)){
        console.log("Error. No has introducido un número");
        return;
    }
    let mes;
    switch (num) {
        case 1:
            mes= "Enero";
            break;
        case 2:
            mes= "Febrero";
            break;
        case 3:
            mes= "Marzo";
            break;
        case 4:
            mes= "Abril";
            break;
        case 5:
            mes= "Mayo";
            break;
        case 6:
            mes= "Junio";
            break;
        case 7:
            mes= "Julio";
            break;
        case 8:
            mes= "Agosto";
            break;
        case 9:
            mes= "Septiembre";
            break;
        case 10:
            mes= "Octubre";
            break;
        case 11:
            mes= "Noviembre";
            break;
        case 12:
            mes= "Diciembre";
            break;
    
        default:
            console.log("ERROR. Tu número no esta en el rango 1-12")
            return;
    }
    return console.log(`El mes número ${num} es ${mes}`);

}

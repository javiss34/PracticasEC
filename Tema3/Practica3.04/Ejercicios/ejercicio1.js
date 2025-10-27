"use strict";

export const conversorMayuscula = (array) => {
    return array.map(elemento => elemento.toUpperCase());//map siempre devuelve un nuevo array por lo que no hay que hacer copia.
}

export const ordenarAlfabeticamenteInvero = (array) => { 
    return [...array].sort().reverse(); //Hago copia para que no modifique el array original.
}

export const crearArrayObjeto = (array) => {
    return array.map((nombre,id) => ({id,nombre}));//Pongo id,nombre entre llaves para que sea un objeto
}

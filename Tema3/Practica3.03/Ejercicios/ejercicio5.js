"use strict";

export const imprimirObjeto = (objeto) => {
    //Si es un array lo recorremos ya que en alumnado hay un objeto dentro del array.
    if (Array.isArray(objeto)) {
        objeto.map((elemento, index) => {
            console.log(`[${index}]`);
            imprimirObjeto(elemento); //uso recursividad
        });
    //Si es un objeto lo recorre comprobando que no sea una función 
    } else if (typeof objeto === "object") {
        for (const clave in objeto) {
            if (typeof objeto[clave] !== "function") {
                if (typeof objeto[clave] === "object") {
                    console.log(`${clave}:`);
                    imprimirObjeto(objeto[clave]);
                } else {
                    console.log(`${clave}: ${objeto[clave]}`);
                }
            }
        }
    } else {
        console.log(objeto);//Si no es un array, ni un objeto devuelve la propiedad y el valor tal cual.
    }
};

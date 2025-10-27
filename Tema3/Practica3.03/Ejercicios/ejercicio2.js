"use strict";

export const informeCurso = (curso) => {
    console.log(`_____INFORME CURSO_____`)
    for (const clave in curso) {
        //Como he tenido que introducir la función matricular en el ejercicio1 he tenido que validar que no sea una función para no mostrarlapor pantalla.
        if(typeof curso[clave] !== "function"){
        if(curso.hasOwnProperty(clave)){
            console.log(`${clave}: ${curso[clave]}`);
        }
        }
    }
}
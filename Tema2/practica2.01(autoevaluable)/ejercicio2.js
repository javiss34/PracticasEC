"use strict";
export function puntMedia(partido1,partido2,partido3){
    if(isNaN(partido1) || isNaN(partido2) || isNaN(partido3)){
        console.log("ERROR")
    }
    return (partido1+partido2+partido3)/3;
};

export function mejorMedia(puntMediaEquipoJuan,puntMediaEquipoMiguel,puntMediaEquipoMaria){
    if(puntMediaEquipoJuan>puntMediaEquipoMiguel && puntMediaEquipoJuan>puntMediaEquipoMaria){
        console.log(`El equipo de juan tiene mejor media de puntuación con ${puntMediaEquipoJuan} puntos`);
    }else if(puntMediaEquipoMiguel>puntMediaEquipoJuan && puntMediaEquipoMiguel>puntMediaEquipoMaria){
        console.log(`El equipo de Miguel tiene mejor media de puntuación con ${puntMediaEquipoMiguel} puntos`);
    }else if(puntMediaEquipoJuan==puntMediaEquipoMaria==puntMediaEquipoMiguel){
        console.log(`Empate ${puntMediaEquipoJuan} - ${puntMediaEquipoMiguel} - ${puntMediaEquipoMaria}`);
    }else{
        console.log(`El equipo de María tiene mejor media de puntuación con ${puntMediaEquipoMaria} puntos`)
    }
}
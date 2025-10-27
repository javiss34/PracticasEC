"use strict";

//ejercicio1
import { calcularaImc } from './ejercicio1.js';

let masaMarcos = 80;
let alturaMarcos = 1.90;
let masaJuan = 75;
let alturaJuan = 1.90;

let imcMarcos = calcularaImc(masaMarcos,alturaMarcos);
let imcJuan = calcularaImc(masaJuan,alturaJuan);

let imcMarcosMayorJuan = true;
if(imcMarcos<=imcJuan){
    imcMarcosMayorJuan=false;
}

console.log(imcMarcos);
console.log(imcJuan);
console.log(`Tiene Marcos un IMC mayor que el de Juan : ${imcMarcosMayorJuan}`);



//ejercicio2
import {puntMedia} from './ejercicio2.js';
import { mejorMedia } from './ejercicio2.js';

let puntMediaEquipoJuan = puntMedia(89,120,103);
let puntMediaEquipoMiguel = puntMedia(116,94,123);
let puntMediaEquipoMaria = puntMedia(97,134,105);


mejorMedia(puntMediaEquipoJuan,puntMediaEquipoMiguel,puntMediaEquipoMaria);



//ejercicio3
import {funcion} from "./ejercicio3.js";
funcion(4,6);


//ejercicio4
import {calcularPrecio} from "./ejercicio4.js";
calcularPrecio("PS5", "rt", 21);
calcularPrecio("Coche",20000,21);


//ejercicio1
import { constructorObjetos } from "./Ejercicios/ejercicio1.js";
let curso = constructorObjetos("DAW",2025,"Muy chulo");

//ejercicio2
import { informeCurso } from "./Ejercicios/ejercicio2.js";
informeCurso(curso);

//ejercicio3
import { discente } from "./Ejercicios/ejercicio3.js";
console.log(`La media es ${discente.calcularMedia()}`);
console.log(`Las aficiones son: ${discente.imprimirAficiones()}`);
discente.imprimirInforme();

//ejercicio4
curso.matricular(discente);

//ejercicio5
import { imprimirObjeto } from "./Ejercicios/ejercicio5.js";
console.log(`_____IMPRIMIR OBJETO_____`);
imprimirObjeto(curso);


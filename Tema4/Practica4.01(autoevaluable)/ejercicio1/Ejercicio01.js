"use strict";

//Número de párrafos de la página
let numeroParrafos = document.getElementsByTagName("p");
console.log(`Este página tiene ${numeroParrafos.length} párrafos`);

//Segundo párrafo
let segundoParrafo = document.getElementById("segundo");
console.log(`Segundo párrafo: ${segundoParrafo.textContent}`);

//Número de enlaces
let enlaces = document.getElementsByTagName("a");
console.log(`Esta página tiene ${enlaces.length} enlaces`);

//Dirección del primer enlace
console.log(`El primer enlaces es: ${enlaces[0]}`);

//Dirección del penúltimo enlace
console.log(`El penúltimo enlace es: ${enlaces[enlaces.length-2]}`);


//Añadir información a <div>
let elemento = document.createElement("div");
elemento.setAttribute("id","info");//Le añado un id="info" al div
let contenido = document.createTextNode(
    `Este página tiene ${numeroParrafos.length} párrafos,
    el segundo párrafo es: ${segundoParrafo.textContent},
    tiene ${enlaces.length} enlaces,
    el primer enlaces es: ${enlaces[0]} y 
    el penúltimo enlace es: ${enlaces[enlaces.length-2]}
    `
)
elemento.appendChild(contenido);
document.body.appendChild(elemento);


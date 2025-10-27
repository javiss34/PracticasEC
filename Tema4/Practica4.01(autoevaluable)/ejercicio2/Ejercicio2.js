"use strict";

let numeroAleatorio = () => {
    return Math.floor(Math.random()*1000+1)
}

setInterval(()=>{
    let elemento = document.createElement("li");
    let contenido = document.createTextNode(numeroAleatorio());
    elemento.appendChild(contenido);
    document.querySelector("ul").appendChild(elemento);
},2000);
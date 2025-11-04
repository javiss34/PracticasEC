"use strict";

window.onload = () => {
    let primerDiv = document.createElement("div");
    let imagenes = [
        "img/fila-1-columna-1.jpg",
        "img/fila-1-columna-2.jpg",
        "img/fila-1-columna-3.jpg",
        "img/fila-2-columna-1.jpg",
        "img/fila-2-columna-2.jpg",
        "img/fila-2-columna-3.jpg",
        "img/fila-3-columna-1.jpg",
        "img/fila-3-columna-2.jpg",
        "img/fila-3-columna-3.jpg",
    ]
    let todosLosIndices=[];
    for (let i = 0; i < imagenes.length; i++) {
        let indiceAleatorio;
        do{
            indiceAleatorio = Math.floor(Math.random()*imagenes.length);
        }while(todosLosIndices.includes(indiceAleatorio))
            todosLosIndices=[...todosLosIndices,indiceAleatorio];
            let elementoImg = document.createElement("img");
            elementoImg.setAttribute("src",imagenes[indiceAleatorio])
            primerDiv.appendChild(elementoImg)
    }
    document.body.appendChild(primerDiv)

}
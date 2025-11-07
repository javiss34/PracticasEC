"use strict";

export const desordenarIndices = (array,contenedorPadre) => {
  let todosLosIndices = [];
  for (let i = 0; i < array.length; i++) {
    let numeroAleatorio;
    do {
      numeroAleatorio = Math.floor(Math.random() * array.length);
    } while (todosLosIndices.includes(numeroAleatorio));
    todosLosIndices = [...todosLosIndices, numeroAleatorio];
    contenedorPadre.appendChild(array[numeroAleatorio]);
  }
}

export const comprobarPuzle = (panelJuego,divs,imagenOriginal) => {
    let piezasColocadas = 0;
    for (let i = 0; i < divs.length; i++) {
        if(divs[i].children.length>0){
            piezasColocadas++;
        }
    }
    if(piezasColocadas===imagenOriginal.length){
        for (let i = 0; i < array.length; i++) {
            
        }
    }

}


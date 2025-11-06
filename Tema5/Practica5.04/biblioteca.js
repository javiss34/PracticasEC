"use strict";

let contenedorArrastrable = document.getElementById("zonaArrastrable");
//Función para ordenar las imágenes aleatoriamente y asignarles los atributos src,class e id.
export const ordenarArrayImagenes = (imagenes,div) => {
      let todosLosIndices = [];
    
      for (let i = 0; i < imagenes.length; i++) {
        let indiceAleatorio;
    
        do {
          indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        } while (todosLosIndices.includes(indiceAleatorio));
    
        todosLosIndices = [...todosLosIndices, indiceAleatorio];
        let elementoImg = document.createElement("img");
        elementoImg.setAttribute("src", imagenes[indiceAleatorio]);
        elementoImg.setAttribute("class", "arrastrable");
        elementoImg.setAttribute("id", i+1);
        div.appendChild(elementoImg);
      }
}

//Función para crear 9 divs con el className "soltable"
export const crearDiv3x3 = (div) => {

  for (let i = 0; i < 9; i++) {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.className = "soltable";
    div.appendChild(nuevoDiv);
  }
}

//Función para reiniciar la partida
export const botonReinicio = () => {
  
}
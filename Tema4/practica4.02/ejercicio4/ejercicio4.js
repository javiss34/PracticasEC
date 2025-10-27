"use strict";

let imagenes = [
  "img/ferrari.png",
  "img/lambo.png",
  "img/mazda.png",
  "img/porsche.png",
];

let elementoDiv = document.createElement("div");
let elementoImg = document.createElement("img");
elementoDiv.appendChild(elementoImg);

//No se puede hacer con un for porque solo se mostrarí la última imágen.

let i=0;
setInterval(()=> {
    elementoImg.setAttribute("src",imagenes[i]);
    elementoImg.classList.add("coches");
    i++;
    if(i>=4){
        i=0;
    }
},2000);


document.body.appendChild(elementoDiv);

"use strict";

window.onload = () => {
  let elemento = document.querySelectorAll("div div");//
  //Función para comprobar si un número es par
  const esPar = (num) => {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  };

  //recorremos el NodeList
  elemento.forEach((div, i) => {
      div.addEventListener("click", (evento) => {
        if(esPar(i)){
          if(evento.target===div){
            let contenido = div.nextElementSibling;
            contenido.classList.toggle("mostrar");
          }
        }
      });
  });
};

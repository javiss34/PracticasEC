"use strict";

window.onload = () => {
  let elemento = document.querySelectorAll("div div"); //Aquí selecciono los 6 div que hay dentro del div .contenedor_ejercicio
  console.log(elemento);
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
    if (esPar(i)) {
      //Si el contador es par(0, 2 o 4) se hace el evento
      div.addEventListener("click", () => {
        let siguiente = elemento[i + 1];
        if (siguiente) {//Comprobamos que siguiente existe
          siguiente.classList.toggle("mostrar"); //Aplicamos el estilo del css .mostrar para el siguiente elemento del contador
        }
      });
    }
  });
};

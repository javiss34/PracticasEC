"use strict";

import { crearTabla } from "./biblioteca.js";

window.onload = () => {
  //Creamos la tabla
  crearTabla();
  
  let colorElegido = document.getElementById("elegirColor");
  console.log(colorElegido);

  let seleccion = "#000000"; //Pongo por defecto el negro.
  let click = false; //Controlo cuando se hace click en el raton

  //Con este evento seleccionamos el color deseado y se lo asignamos a la variable seleccion.
  colorElegido.addEventListener("input", () => {
    seleccion = colorElegido.value;
  });

  //Con este evento al clicar en borrar se pone de color blanco
  let botonBorrador = document.getElementById("borrador");
  botonBorrador.addEventListener("click", () => {
    seleccion = "#ffffff";
  });

  //Así accedo a cada celda de la tabla
  let celdas = document.querySelectorAll("div table tr td");

  //Este evento borra todas las celdas
  let botonBorrar = document.getElementById("borrar");
  botonBorrar.addEventListener("click", () => {
    celdas.forEach((c) => {
      c.style.backgroundColor = "#ffffff";
    });
  });

  const eventoPintar = (celdas) => {
    celdas.forEach((celda) => {
      //Primero hago un evento cuando empiezo a clicar y el controlador click se pone true
      celda.addEventListener("mousedown", () => {
        click = true;
        celda.style.backgroundColor = seleccion;
      });
      //Después hago este evento que si click=true se pinta la celda donde este arrastrando el ratón.
      celda.addEventListener("mouseover", () => {
        if (click) {
          celda.style.backgroundColor = seleccion;
        }
      });
    });
  };

  //Con este evento al levantar el click se deja de pintar
  const eventoPararDePintar = (celdas) => {
    celdas.forEach((celda) => {
      celda.addEventListener("mouseup", () => {
        click = false;
      });
    });
  };

  eventoPintar(celdas);
  eventoPararDePintar(celdas);
};

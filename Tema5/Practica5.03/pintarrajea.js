"use strict";

import { crearTabla } from "./biblioteca.js";

window.onload = () => {
  //Creamos la tabla
  crearTabla();
  let  tabla = document.querySelector("div table");
  
  let colorElegido = document.getElementById("elegirColor");

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

  //Con este evento al clickar en cualquier "TD", la variable click se pone true y se pinta el fondo del color seleccionado
  tabla.addEventListener("mousedown", (evento) => {
    if (evento.target.tagName === "TD") {
      click = true;
      evento.target.style.backgroundColor = seleccion;
    }
  });

  //Con este evento mientras se mantiene pulsado el click y sea en el "TD" se sigue pintando
  tabla.addEventListener("mouseover", (evento) => {
    if (click && evento.target.tagName === "TD") {
      evento.target.style.backgroundColor = seleccion;
    }
  });

  //Cuando se levanta el click se cambia la variable a false y deja de pintar
  document.addEventListener("mouseup", () => {
    click = false;
  });

};

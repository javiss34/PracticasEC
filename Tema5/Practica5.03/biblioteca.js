"use strict";

export const crearTabla = () => {
    let segundoDiv = document.createElement("div");
    segundoDiv.className = "segundo_div";
    let tabla = document.createElement("table");
    tabla.classList.add("tabla");
    for (let i = 0; i < 60; i++) {
      let filas = document.createElement("tr");
      for (let j = 0; j < 60; j++) {
        let contenido = document.createElement("td");
        filas.appendChild(contenido);
      }
      tabla.appendChild(filas);
    }
    segundoDiv.appendChild(tabla);
    document.body.appendChild(segundoDiv);
  };
"use strict";
import { desordenarIndices } from "./biblioteca.js";

window.onload = () => {
  let contenedorImagenes = document.getElementById("piezas");
  let imagenes = contenedorImagenes.children;
  let panelJuego = document.getElementById("panel_juego");
  let divsPanelJuego = panelJuego.children;
  let todasLasImagenes = document.querySelectorAll("div img");
  console.log(todasLasImagenes)

  //Desordenar imagenes
  desordenarIndices(imagenes, contenedorImagenes);

  //Ponemos el draggable a cada elemento arrastrable
  let zonaArrastrable = document.getElementById("zona_arrastrable");
  let elementosArrastrables = document.getElementsByClassName("arrastrable");
  for (let i = 0; i < elementosArrastrables.length; i++) {
    elementosArrastrables[i].setAttribute("draggable", true);
  }

  //Establecemos id y nombre al comenzar a arrastrar
  zonaArrastrable.addEventListener("dragstart", (evento) => {
    evento.dataTransfer.setData("id", evento.target.id);
    evento.dataTransfer.setData("etiqueta", evento.target.localName);
  });

  //Neecesitamos hacer el preventDefault para que al deslizar nos deje soltar
  zonaArrastrable.addEventListener("dragover", (evento) => {
    evento.preventDefault();
  });

  zonaArrastrable.addEventListener("drop", (evento) => {
    evento.preventDefault();
    if (evento.target.classList.contains("soltable") && evento.target.tagName === "DIV") {
      evento.target.appendChild(
        document.getElementById(evento.dataTransfer.getData("id"))
      );
    };


    let piezasColocadas = 0;
    for (let i = 0; i < divsPanelJuego.length; i++) {
      if (divsPanelJuego[i].children.length > 0) {
        piezasColocadas++;
      }
    }

    if (piezasColocadas === 9) {
      let puzzleCorrecto = true;

      for (let i = 0; i < divsPanelJuego.length; i++) {
        let idDiv = divsPanelJuego[i].id;
        let idImg = divsPanelJuego[i].children[0].id;

        if (idDiv !== idImg) {
          puzzleCorrecto = false;
          break;
        }
      }

      let felicitaciones = document.createElement("h1");
      felicitaciones.setAttribute("class","mensaje")
      if (puzzleCorrecto) {
        felicitaciones.innerHTML = "Felicidades, puzzle completado";
      } else {
        felicitaciones.innerHTML = "Lo siento, puzzle mal hecho";
      }

      document.body.appendChild(felicitaciones);
    }
  });

  let botonReinicio = document.getElementById("boton_reinicio");
  botonReinicio.addEventListener("click", () => {
    desordenarIndices(todasLasImagenes, contenedorImagenes);
    const mensaje = document.getElementsByClassName("mensaje");
    if (mensaje[0]) {
        mensaje[0].remove();
    }
  });
}; //FIN ONLOAD

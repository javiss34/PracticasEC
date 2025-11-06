"use strict";
import { ordenarArrayImagenes,crearDiv3x3 } from "./biblioteca.js";

window.onload = () => {
  let contenedorArrastrable = document.getElementById("zonaArrastrable");
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
  ];
  
  //Primer div:
  let primerDiv = document.createElement("div");
  primerDiv.className = "div_superior";
  contenedorArrastrable.appendChild(primerDiv);
  //Desordenamos las imágenes de forma aleatoria con esta función que está en la biblioteca
  ordenarArrayImagenes(imagenes,primerDiv);
  

  //Segundo div: Panel de juego
  let segundoDiv = document.createElement("div");
  segundoDiv.className = "div_intermedio";
  contenedorArrastrable.appendChild(segundoDiv);
  //Creamos los 9 divs con esta función que está en la biblioteca
  crearDiv3x3(segundoDiv);

  //Tercer div: Botón de reinicio
  let botonReinicio = document.getElementById("botonReinicio");
  console.log(botonReinicio)
  
  


  const elementosArrastrables = document.getElementsByClassName("arrastrable");
  //Le asignamos a cada imágen el draggable para que se puedan arrastrar
  for (let i = 0; i < elementosArrastrables.length; i++) {
    elementosArrastrables[i].setAttribute("draggable",true);
  }

  let zonaArrastrable = document.getElementById("zonaArrastrable");
  //En primer luegar le asignamos un id y un nombre al comenzar a arrastrar
  zonaArrastrable.addEventListener(
    "dragstart",
    (evento) => {
      evento.dataTransfer.setData("id", evento.target.id);
      evento.dataTransfer.setData("nombre",evento.target.localName);

      console.log(evento.dataTransfer.getData("id"));
      console.log(evento.dataTransfer.getData("nombre"));
    },
    false
  )

  //En segundo lugar hacemos el dragover para que cuando queramos soltar la imagen en un soltable nos deje
  zonaArrastrable.addEventListener(
    "dragover",
    (evento) => {
      evento.preventDefault();
    },
    false
  )

  //En tercer lugar añadimos al soltable el elemento que estoy arrastrando
  zonaArrastrable.addEventListener(
    "drop",
    (evento) => {
      evento.preventDefault();
      //De esta forma se pueden soltar los trozos de imagen tanto del primer div al segundo, como del segundo al primero.
      if(evento.target.classList.contains("soltable") || evento.target.classList.contains("div_superior")){
        evento.target.appendChild(document.getElementById(evento.dataTransfer.getData("id")))
      }
    },
    false
  )

  botonReinicio.addEventListener(
    "drop",
    (evento) => {
      evento.preventDefault();
      if(evento.target.classList.contains("soltable")){
        evento.target.appendChild(document.getElementById(evento.dataTransfer.getData("id")))
      }
    }
  )









  



};

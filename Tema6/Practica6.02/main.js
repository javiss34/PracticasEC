"use strict";

import {
  traerDatos,
  pintarPeliculas,
  pintarInformacion,
} from "./biblioteca.js";

window.onload = () => {
  const url = "https://swapi.dev/api/films/";
  let contenedorPeliculas = document.getElementById("listado_peliculas");
  let contenedorInformacion = document.getElementById("contenedor_informacion");

  const cargarPeliculas = async () => {
    contenedorPeliculas.innerHTML = "CARGANDO...";

    try {
      const peliculas = await traerDatos(url);
      contenedorPeliculas.innerHTML = pintarPeliculas(peliculas);

      contenedorPeliculas.addEventListener("click", (e) => {
        if (e.target.classList.contains("pelicula")) {
          contenedorInformacion.classList.remove("contenedor_oculto");
          contenedorInformacion.classList.add("contenedor_mostrar");
          const id = parseInt(e.target.id);
          contenedorInformacion.innerHTML = pintarInformacion(peliculas, id);
        }
      });
    } catch (error) {
        contenedorPeliculas.innerHTML = `${error.message}`;
    }
  };

  cargarPeliculas();
};

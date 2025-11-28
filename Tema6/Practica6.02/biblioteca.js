"use strict";


const traerDatos = async (url) => {
  return fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      return datos;
    })
    .catch((error) => {
      return `${error.message}`;
    });
};

const pintarPeliculas = (peliculas) => {
  let plantilla = "";
  Array.isArray(peliculas) && peliculas.length
    ? peliculas.map((pelicula,indice) => {
        plantilla += `<p class = "pelicula" id = ${indice}> ${pelicula.episode_id} - ${pelicula.title}. </p>`;
      })
    : (plantilla = "Película no encontrada");
  return plantilla;
};

const pintarInformacion = (peliculas,id) => {
    let plantilla = "";
    Array.isArray(peliculas) && peliculas.length
    ? peliculas.map((pelicula,indice) => {
        id === indice &&
        (plantilla = `
        <div class = "informacion_pelicula" id = ${indice}>
        <h2>${pelicula.title}</h2>
        <p>${pelicula.opening_crawl}</p>
        <p>${pelicula.director}</p>
        <p>${pelicula.producer}</p>
        </div>
        `)
    })
    : (plantilla = "Película no encontrada")
    return plantilla;
}

export { traerDatos, pintarPeliculas,pintarInformacion };

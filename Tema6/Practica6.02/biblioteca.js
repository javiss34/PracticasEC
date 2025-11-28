"use strict";


const traerDatos = (url) => {
  return fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      return datos.results;
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

const formatearFecha = (fechaString) => {
  const fecha = new Date(fechaString);
  return fecha.toLocaleString("es-ES",{year:'numeric',month: '2-digit',day: '2-digit'});
}

const pintarInformacion = (peliculas,id) => {
    let plantilla = "";
    Array.isArray(peliculas) && peliculas.length
    ? peliculas.map((pelicula,indice) => {
        id === indice &&
        (plantilla = `
        <div class = "informacion_pelicula" id = ${indice}>
        <h2>${pelicula.title}</h2>
        <p class = "resumen">${pelicula.opening_crawl}</p>
        <p><strong>Director:</strong> ${pelicula.director}</p>
        <p><strong>Productor:</strong> ${pelicula.producer}</p>
        <p><strong>Fecha de lanzamiento:</strong> ${formatearFecha(pelicula.release_date)}</p>
        </div>
        `)
    })
    : (plantilla = "Película no encontrada")
    return plantilla;
}

export { traerDatos, pintarPeliculas,pintarInformacion };

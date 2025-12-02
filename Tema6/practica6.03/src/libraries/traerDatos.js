"use strict";

const traerDatos = (url) => {
  return fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      console.log(datos.results)
      return datos.results;
    })
    .catch((error) => {
      return `${error.message}`;
    });
};

export {traerDatos};
"use strict";

const traerDatos = (url) => {
  return fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      return datos.results ? datos.results : datos;
    })
    .catch((error) => {
      return `${error.message}`;
    });
};

export {traerDatos};
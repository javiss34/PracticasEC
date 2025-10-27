import React, { useState } from "react";
import peliculasJSON from "../assets/peliculas.json";

const PeliculaDetalle = ({pelicula}) => {
  let estadoInicial = peliculasJSON.peliculas;
  let [peliculasDetalle, setPeliculasDetalle] = useState(estadoInicial);
  return (
    <>
      <div className="contenedor_contenido_detalle">
            <h3>Director: {pelicula.director}</h3>
            <h3>Recaudación: {pelicula.recaudacion}</h3>
            <h3>Nota: {pelicula.nota}</h3>
            <h3>Resumen:</h3>
            <p>{pelicula.resumen}</p>
            <h3>Actores:</h3>
            <div className="actores">
                {pelicula.actores.map((actor, i) => (
                <div key={i}>
                    <h4>{actor.nombre}</h4>
                    <h4>{actor.fechaNacimiento}</h4>
                    <h4>{actor.biografia}</h4>
                    <img src={actor.imagen} alt={actor.nombre} />
                </div>
                ))}
            </div>
          </div>
    </>
  );
};

export default PeliculaDetalle;

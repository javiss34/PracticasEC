import React, { useState } from "react";
import peliculasJSON from "../assets/peliculas.json";
import { useNavigate, useParams } from "react-router-dom";

const PeliculaDetalle = ({peliculas}) => {
  const {id} = useParams();
  const navegar = useNavigate();
  //Es más cómodo con find ya que filter devuelve un array mientras que find devuelve un objeto que es lo que queremos.
  const pelicula = peliculas.find((pelicula) => {
    return pelicula.id.toString() === id
  })

  return (
    <>
      <div className="contenedor_contenido_detalle">
            {/*Botón para volver a ver la lista de películas */}
            <button onClick={()=>{navegar('/peliculas')}}>Volver</button>
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

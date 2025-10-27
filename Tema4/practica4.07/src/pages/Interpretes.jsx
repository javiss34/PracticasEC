import React, { useState } from "react";
import peliculasJSON from "../assets/peliculas.json";

const Interpretes = () => {
  const estadoInicial = peliculasJSON.peliculas;
  const [peliculas, setPeliculas] = useState(estadoInicial);

  return (
    <>
      {peliculas.map((pelicula, i) => (
        <div key={i}>
          <h3>{pelicula.nombre}</h3>
          {pelicula.actores.map((actor, j) => (
            <div key={j}>
              <p>Nombre: {actor.nombre}</p>
              <p>Fecha de nacimiento: {actor.fechaNacimiento}</p>
              <p>Biografía: {actor.biografia}</p>
              <img src={actor.imagen} alt={actor.nombre} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Interpretes;

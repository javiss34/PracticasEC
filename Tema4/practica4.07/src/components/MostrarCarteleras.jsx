import React, { useState } from 'react';
import peliculasJSON from "../assets/peliculas.json";

const MostrarCarteleras = () => {
    let estadoIncial = peliculasJSON.peliculas;
    let [peliculas,setPeliculas] = useState(estadoIncial);
  return (
    <div>
      {peliculas.map((pelicula,i) => (
        <img key={i} src={pelicula.cartelera} alt={pelicula.nombre} />
      ))}
    </div>
  )
}

export default MostrarCarteleras

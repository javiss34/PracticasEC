import React, { useRef, useState } from "react";
import peliculasJSON from "../assets/peliculas.json";
import PeliculaDetalle from "../components/PeliculaDetalle.jsx";
import {Link} from 'react-router-dom';
import "./Peliculas.css";
const Peliculas = () => {
  let estadoInicial = peliculasJSON.peliculas;
  let [peliculas, setPeliculas] = useState(estadoInicial);


  return (
    <>
      <h2>Esta es la página de películas</h2>
      <div className="contenedor_contenido">
        {peliculas.map((pelicula, i) => (
          <div className="pelicula" key={i}>
            <h3>{pelicula.nombre}</h3>
            <Link key={pelicula.id} to={`/peliculas/${pelicula.id}`}>
            <img
            className="imagen_pelicula"
              src={pelicula.cartelera}
              alt={pelicula.nombre}
            />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Peliculas;

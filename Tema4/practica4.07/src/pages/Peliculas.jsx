import React, { useRef, useState } from "react";
import peliculasJSON from "../assets/peliculas.json";
import PeliculaDetalle from "../components/PeliculaDetalle.jsx";
import "./Peliculas.css";
const Peliculas = () => {
  let estadoInicial = peliculasJSON.peliculas;
  let [peliculas, setDetallePelicula] = useState(estadoInicial);
  let [indicePelicula, setIndicePelicula] = useState(null);

  //He intentado hacerlo con useRef y no me salía,
  //Así que he hecho esta función que es como un toggle
  const establecerIndicePelicula = (i) => {
    if (indicePelicula === i) {
      setIndicePelicula(null);
    } else {
      setIndicePelicula(i);
    }
  };

  return (
    <>
      <h2>Esta es la página de películas</h2>
      <div className="contenedor_contenido">
        {peliculas.map((pelicula, i) => (
          <div className="pelicula" key={i}>
            <h3>{pelicula.nombre}</h3>
            <img
              src={pelicula.cartelera}
              alt={pelicula.nombre}
              onClick={() => {
                establecerIndicePelicula(i);
              }}
            />
            {/* En la practica me pide el año de exhibición pero como 
                en el JSON no está pues pongo la clasificación */}
            <h3>{pelicula.clasificacion}</h3>
            {indicePelicula === i && <PeliculaDetalle pelicula={pelicula} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default Peliculas;

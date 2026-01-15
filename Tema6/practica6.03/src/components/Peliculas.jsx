import React, { useEffect, useState, useContext } from "react";
import { traerDatos } from "../libraries/traerDatos";
import Pelicula from "./Pelicula";
import { Contexto } from "../context/Contexto";
import "./Peliculas.css";

const Peliculas = () => {
  const url = "https://swapi.info/api/films";
  const [peliculas, setPeliculas] = useState([]);

  const {
    peliculaSeleccionada,
    setPeliculaSeleccionada,
    protagonistas,
    setProtagonistas
  } = useContext(Contexto);

  const traerPeliculas = async () => {
    const datos = await traerDatos(url);
    if (Array.isArray(datos)) setPeliculas(datos);
  };

  useEffect(() => {
    traerPeliculas();
  }, []);

  const traerProtagonistas = async () => {
    let promesas = [];
    for (
      let i = 0;
      i < 10 && i < peliculaSeleccionada.characters.length;
      i++
    ) {
      promesas.push(traerDatos(peliculaSeleccionada.characters[i]));
    }
    const datos = await Promise.allSettled(promesas);
    setProtagonistas(datos);
  };

  useEffect(() => {
    peliculaSeleccionada && traerProtagonistas();
  }, [peliculaSeleccionada]);

  const handleClick = (e) => {
    if (e.target.tagName !== "H2") return;

    const titulo = e.target.textContent;
    const pelicula = peliculas.find(p => p.title === titulo);

    pelicula && setPeliculaSeleccionada(pelicula);
  };

  return (
    <div className="contenedor_lista">
      <div className="lista_peliculas" onClick={handleClick}>
        {Array.isArray(peliculas) && peliculas.length
          ? peliculas.map((pelicula, index) => (
              <h2 key={index}>{pelicula.title}</h2>
            ))
          : "Cargando películas..."}
      </div>

      <Pelicula
        pelicula={peliculaSeleccionada}
        protagonistas={protagonistas}
      />
    </div>
  );
};

export default Peliculas;

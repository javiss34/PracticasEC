import React, { useState } from "react";
import peliculasJSON from "../assets/peliculas.json";
import Pelicula from "./Pelicula.jsx";

const Peliculas = () => {
  let estadoInicial = peliculasJSON.peliculas;
  let [peliculas, setPeliculas] = useState(estadoInicial);
  return (
    <div>
      {peliculas.map((v,i) => (
        <Pelicula key={v.id} pelicula={v}/>
      ))}
    </div>
  )
};

export default Peliculas;

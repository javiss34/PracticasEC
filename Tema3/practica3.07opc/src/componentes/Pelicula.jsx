import React from "react";
import "./pelicula.css";

const Pelicula = ({ pelicula }) => {
  return (
    <>
      <div className="contenedor_entero">
        <h1 className="titulo_pelicula">{pelicula.nombre}</h1>
        <img src={pelicula.cartelera} alt={pelicula.nombre} className="cartela" />
        <p className="resumen">{pelicula.resumen}</p>
        <h2 className="titulo_elenco">Elenco</h2>
        <div className="contenedor_actores">
          {pelicula.actores.map((v, i) => (
            <div key={i} className="actor">
              <img src={v.imagen} alt={v.nombre} className="foto_actor" />
              <div className="info_actor">
              <p>{v.nombre}</p>
              <p>{v.biografia}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pelicula;

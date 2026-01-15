import React, { useState } from "react";
import Personaje from "./Personaje";
import "./Pelicula.css";

const Pelicula = ({ pelicula, protagonistas }) => {
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

  if (!pelicula) {
    return (
      <p className="detalle_inicial">
        Selecciona una película para ver sus detalles
      </p>
    );
  }

  return (
    <div className="detalle_pelicula">
      <h2>{pelicula.title}</h2>
      <p>{pelicula.opening_crawl}</p>

      <p><strong>Director:</strong> {pelicula.director}</p>
      <p><strong>Productor:</strong> {pelicula.producer}</p>
      <p><strong>Estreno:</strong> {pelicula.release_date}</p>

      <h3>Protagonistas</h3>

      <div className="lista_protagonistas">
        {protagonistas.length
          ? protagonistas.map((p, index) => (
              <p key={index} onClick={() => setPersonajeSeleccionado(p.value)}>
                {p.value.name}
              </p>
            ))
          : "Cargando protagonistas..."}
      </div>

      {personajeSeleccionado && (
        <Personaje personaje={personajeSeleccionado} />
      )}
    </div>
  );
};

export default Pelicula;

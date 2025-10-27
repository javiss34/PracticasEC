import React, { useRef } from "react";
import "./pelicula.css";
import "./Taquilla.jsx";
import Taquilla from "./Taquilla.jsx";

const Pelicula = ({ pelicula }) => {
  const elencoRef = useRef(null);
  const taquillaRef = useRef(null);

  const mostrarElenco = () => {
    elencoRef.current.classList.toggle("aparecer_elenco");
  };

  const mostrarTaquilla = () => {
    taquillaRef.current.classList.toggle("aparecer_taquilla");
  };

  return (
    <>
      <div className="contenedor_entero">
        <h1 className="titulo_pelicula">{pelicula.nombre}</h1>
        <img
          src={pelicula.cartelera}
          alt={pelicula.nombre}
          className="cartela"
        />
        <p className="resumen">{pelicula.resumen}</p>
        {/* Botón Elenco */}
        <button
          onClick={() => {
            mostrarElenco();
          }}
        >
          Elenco
        </button>
        {/* Botón Taquilla */}
        <button
          onClick={() => {
            mostrarTaquilla();
          }}
        >
          Taquilla
        </button>
        <div ref={taquillaRef} className="contenedor_taquilla">
          <Taquilla recaudacion={pelicula.recaudacion} />
        </div>
        <div className="contenedor_actores" ref={elencoRef}>
          <h2 className="titulo_elenco">Elenco</h2>
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

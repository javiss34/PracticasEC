import React from "react";
import './recorrerDiscos.css';

const RecorrerDiscos = ({ discos,eliminarDisco }) => {
  const obtenerGenerosSeleccionados = (disco) => {
    //De esta forma vamos añadiendo a generosSeleccionados, los generos que ha elegido el usuario
    let generosSeleccionados = [];

    if (disco.regueton) {
      generosSeleccionados = [...generosSeleccionados, "regueton"];
    }
    if (disco.pop) {
      generosSeleccionados = [...generosSeleccionados, "pop"];
    }
    if (disco.flamenco) {
      generosSeleccionados = [...generosSeleccionados, "flamenco"];
    }
    if (disco.rap) {
      generosSeleccionados = [...generosSeleccionados, "rap"];
    }

    return generosSeleccionados.join(", ");
  };
  return (
    <>
      <div className="discos-grid">
        {discos.length
          ? discos.map((disco, i) => (
              <>
                <div key={i} className="disco-card">
                  <h5>{disco.nombre}</h5>
                  <img src={disco.caratula} alt={disco.nombre} className="disco-caratula" />
                  <h5>{disco.interprete}</h5>
                  <h5>{disco.anioPubli}</h5>
                  <h5>{obtenerGenerosSeleccionados(disco)}</h5>
                  <h5>{disco.localizacion}</h5>
                  <h5>Prestado: {disco.prestado}</h5>
                  <button onClick={()=> eliminarDisco(disco.nombre)} className="btn-eliminar">ELIMINAR</button>
                </div>
              </>
            ))
          : "No hay discos"}
      </div>
    </>
  );
};

export default RecorrerDiscos;

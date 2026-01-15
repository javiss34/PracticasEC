import React, { useState } from "react";
import { traerDatos } from "../libraries/traerDatos";
import "./Personaje.css";

const Personaje = ({ personaje }) => {
  const [vehiculos, setVehiculos] = useState(null);

  const traerVehiculos = async () => {
    const urls = [...personaje.starships, ...personaje.vehicles];

    if (!urls.length) {
      setVehiculos([]);
      return;
    }

    const promesas = urls.map(url => traerDatos(url));
    const datos = await Promise.all(promesas);
    setVehiculos(datos);
  };

  return (
    <div className="detalle_personaje">
      <h4>{personaje.name}</h4>
      <p>Género: {personaje.gender}</p>
      <p>Altura: {personaje.height}</p>
      <p>Peso: {personaje.mass}</p>

      <button onClick={traerVehiculos}>Pilota</button>

      {vehiculos && (
        vehiculos.length ? (
          vehiculos.map((v, index) => (
            <div key={index} className="detalle_nave">
              <p><strong>{v.name}</strong></p>
              <p>Modelo: {v.model}</p>
              <p>Fabricante: {v.manufacturer}</p>
            </div>
          ))
        ) : (
          <p>Este personaje no pilota naves ni vehículos</p>
        )
      )}
    </div>
  );
};

export default Personaje;

import React from "react";
import BotonInicio from "../components/BotonInicio";
const Productos = () => {
  let productos = [
    {
      id: 1,
      nombre: "Cámiseta del Barcelona",
      precio: "120€",
    },
    {
      id: 2,
      nombre: "Cámiseta del Eldense",
      precio: "80€",
    },
    {
      id: 3,
      nombre: "Cámiseta del Villareal",
      precio: "100€",
    },
  ];
  return (
    <>
      <h1>Camisetas de fútbol</h1>
      <ul>
        {productos.map((v) => (
            <li key={v.id}>{v.nombre}: {v.precio}</li>
        ))}
      </ul>
      <BotonInicio/>
    </>
  );
};

export default Productos;

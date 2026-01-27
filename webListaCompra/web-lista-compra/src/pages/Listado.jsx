import React from "react";
import "./listado.css";
import useSesion from "../hooks/useSesion.js";
import ListarProductos from "../components/ListarProductos.jsx";
import ProveedorProductos from "../context/ProveedorProductos.jsx";

const Listado = () => {

  return (
    <div className="contenedor_mensaje">
      <ProveedorProductos>
        <ListarProductos />
      </ProveedorProductos>
    </div>
  );
};

export default Listado;

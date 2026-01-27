import React from "react";
import "./Listado.css";
import ListarProductos from "../components/ListarProductos.jsx";
import ProveedorProductos from "../context/ProveedorProductos.jsx";

const Listado = () => {

  return (
    <div className="contenedor_mensaje">
        <ListarProductos />
    </div>
  );
};

export default Listado;

import React, { useState } from "react";
import useProductos from "../hooks/useProductos";
import useSesion from "../hooks/useSesion";
import ConfirmacionBorrar from "./ConfirmacionBorrar.jsx";

const Producto = ({ producto }) => {
  const { eliminarProducto } = useProductos();
  const { sesionIniciada } = useSesion();
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  return (
    <>
      <div key={producto.id} className="producto">
        <h2>{producto.nombre}</h2>
        <h4>Peso: {producto.peso}g</h4>
        <h4>Precio: {producto.precio}€</h4>
        <img
          src={producto.imagen_url}
          alt={producto.nombre}
          className="imagen_producto"
        />
        <p>{producto.descripcion}</p>
        {sesionIniciada && (
          <div className="botones_producto">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5935/5935145.png"
              alt="editar producto"
              className="boton_editar"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
              alt="eliminar producto"
              className="boton_borrar"
              onClick={() => {
                setMostrarConfirmacion(true);
              }}
            />
          </div>
        )}
      </div>
      <ConfirmacionBorrar
        mostrar={mostrarConfirmacion}
        mensaje={`Seguro que deseas borrar el siguiente producto: ${producto.nombre}`}
        cancelar={() => {
          setMostrarConfirmacion(false);
        }}
        confirmar={() => {
          eliminarProducto(producto.id);
          setMostrarConfirmacion(false);
        }}
      />
    </>
  );
};

export default Producto;

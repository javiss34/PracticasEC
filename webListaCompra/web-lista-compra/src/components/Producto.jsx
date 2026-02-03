import React, { useState } from "react";
import useProductos from "../hooks/useProductos";
import useSesion from "../hooks/useSesion";
import ConfirmacionBorrar from "./ConfirmacionBorrar.jsx";
import { useNavigate } from "react-router-dom";
import { formatearPrecio,formatearPeso } from "../library/formato.js";

const Producto = ({ producto }) => {
  const { eliminarProducto } = useProductos();
  const { sesionIniciada } = useSesion();
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const navegar = useNavigate();


  return (
    <>
      <div className="producto">
        <h2>{producto.nombre}</h2>
        <h4>Peso: {formatearPeso(producto.peso)} g</h4>
        <h4>Precio: {formatearPrecio(producto.precio)}</h4>
        <img
          src={producto.imagen_url ? producto.imagen_url : "https://img.freepik.com/vector-premium/imagen-no-es-conjunto-iconos-disponibles-simbolo-vectorial-stock-fotos-faltante-defecto-estilo-relleno-delineado-negro-signo-no-encontro-imagen_268104-6708.jpg"}
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
              onClick={()=>{
                navegar(`/listado/editar/${producto.id}`)
              }}
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

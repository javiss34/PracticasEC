import React, { use, useEffect, useState } from "react";
import useListas from "../hooks/useListas.js";
import useProductos from "../hooks/useProductos.js";
import Producto from "./Producto.jsx";
import { useNavigate, useParams } from "react-router-dom";
import "./añadirProductosALista.css";

const AñadirProductosALista = () => {
  const { id } = useParams();
  const { productos } = useProductos();
  const { insertarProductosEnLista } = useListas();
  const [productoIntroducido, setProductoIntroducido] = useState(false);
  const [procesandoInsercion, setProcesandoInsercion] = useState(false);
  const navegar = useNavigate();

  const meterProductosEnLista = async (id_producto) => {
    await insertarProductosEnLista(id, id_producto);
    setProcesandoInsercion(false);
    setProductoIntroducido(true);
    /* Mostramos un mensaje de producto añadido correctamente durante 1s */
    setTimeout(() => {
      setProductoIntroducido(false);
    }, 1000);
  };

  return (
    <div className="panel_anadir">
      <h3>Catálogo</h3>
      {productos &&
        !procesandoInsercion ? 
        productos.map((p) => {
          return (
            <Producto
              key={p.id}
              producto={p}
              insertar={() => {
                meterProductosEnLista(p.id);
                setProcesandoInsercion(true);
              }}
            />
          );
        }) : (
            <h2 className="mensaje_cargar">CARGANDO INSERCIÓN...</h2>
        )}
      {productoIntroducido && (
        <div className="mensaje_exito">Producto añadido correctamente</div>
      )}
      <div>
        <input
          type="button"
          className="boton_redireccionar"
          value="Detalles Lista"
          onClick={() => {
            navegar(`/lista-detalles/${id}`);
          }}
        />
      </div>
    </div>
  );
};

export default AñadirProductosALista;

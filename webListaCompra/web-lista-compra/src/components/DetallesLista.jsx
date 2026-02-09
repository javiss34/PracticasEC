import React, { useEffect, useState } from "react";
import useListas from "../hooks/useListas";
import useProductos from "../hooks/useProductos";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./detallesLista.css";
import {
  formatearPrecio,
  formatearFecha,
  formatearPeso,
} from "../library/formato.js";
import ConfirmacionBorrar from "./ConfirmacionBorrar.jsx";

const DetallesLista = () => {
  const { id } = useParams();
  const {
    obtenerDetallesLista,
    listas,
    borrarLista,
    eliminarProductoDeLista,
    editarLista,
  } = useListas();
  const navegar = useNavigate();

  const [productosLista, setProductosLista] = useState([]);
  const [listaActual, setListaActual] = useState(null);
  const [confirmacionBorrarProducto, setConfirmacionBorrarProducto] =
    useState(false);
  const [confirmacionBorrarLista, setConfirmacionBorrarLista] = useState(false);

  const cargarDatos = async () => {
    if (listas) {
      const listaEncontrada = listas.find((l) => l.id === id);
      setListaActual(listaEncontrada);
    }

    const datos = await obtenerDetallesLista(id);
    setProductosLista(datos || []);
  };

  useEffect(() => {
    cargarDatos();
  }, [id, listas]);

  const calcularPesoTotalLista = () => {
    let totalPeso = 0;
    productosLista.map((producto) => {
      totalPeso += producto.cantidad * producto.productos.peso;
    });
    return totalPeso;
  };
  calcularPesoTotalLista();
  const calcularPrecioTotalLista = () => {
    let totalPrecio = 0;
    productosLista.map((producto) => {
      totalPrecio += producto.cantidad * producto.productos.precio;
    });
    return totalPrecio;
  };

  const fechaCreacion = () => {
    return formatearFecha(listaActual.fecha_creacion);
  };

  const eliminarProducto = (id_producto, cantidad) => {
    if (cantidad > 1) {
      const cantidadActualizada = cantidad - 1;
      const datos = {
        cantidad: cantidadActualizada,
        id: id_producto,
      };
      editarLista(id, datos);
    } else {
      eliminarProductoDeLista(id_producto);
      setConfirmacionBorrarProducto(false);
    }
    cargarDatos();
  };

  if (!listaActual) {
    return <div>CARGANDO...</div>;
  }

  return (
    <div className="detalles_lista">
      <h2>Detalles de la lista: {listaActual.nombre_lista}</h2>
      {productosLista.length > 0 ? (
        productosLista.map((p) => (
          <>
            <div key={p.id} className="productos_lista_card">
              <h3>
                {p.productos.nombre}{" "}
                <strong>{p.cantidad > 1 && `x${p.cantidad}`}</strong>
              </h3>
              <input
                type="button"
                value="Eliminar Producto"
                /* He hecho que solo muestre el mensaje de confirmación si solo hay 1 de cantidad de ese producto */
                onClick={() => {
                  p.cantidad > 1
                    ? eliminarProducto(p.id, p.cantidad)
                    : setConfirmacionBorrarProducto(true);
                }}
              />
            </div>
            <div className="confirmacion_borrar_productos">
              <ConfirmacionBorrar
                mostrar={confirmacionBorrarProducto}
                mensaje={`Seguro que desea borrar el siguiente producto: ${p.productos.nombre}`}
                cancelar={() => {
                  setConfirmacionBorrarProducto(false);
                }}
                confirmar={() => {
                  eliminarProducto(p.id, p.cantidad);
                }}
              />
            </div>
          </>
        ))
      ) : (
        <h3>No hay productos añadidos a esta lista</h3>
      )}

      <div className="Información_adicional">
        <h2>Información adicional</h2>
        <h3>Precio Total: {formatearPrecio(calcularPrecioTotalLista())}</h3>
        <h3>Peso Total: {formatearPeso(calcularPesoTotalLista())} kg</h3>
        <h3>Fecha de creación: {fechaCreacion()}</h3>
        {calcularPesoTotalLista() > 15000 && (
          <p>
            "Tu lista supera los 15kg, por lo que te recomendamos ir en coche"
          </p>
        )}
      </div>
      <div className="boton_redireccion">
        <input
          type="button"
          value="Volver"
          onClick={() => {
            navegar("/mostrar_listas");
          }}
        />
      </div>
      <div className="boton_borrar_lista">
        <input
          type="button"
          value="Eliminar Lista"
          onClick={() => {
            setConfirmacionBorrarLista(true);
          }}
        />
      </div>

      <div className="confirmacion_borrar_lista">
        <ConfirmacionBorrar
          mostrar={confirmacionBorrarLista}
          mensaje={`Seguro que deseas borrar la lista: ${listaActual.nombre_lista}`}
          cancelar={() => {
            setConfirmacionBorrarLista(false);
          }}
          confirmar={() => {
            borrarLista(id);
            navegar("/mostrar_listas");
          }}
        />
      </div>
    </div>
  );
};

export default DetallesLista;

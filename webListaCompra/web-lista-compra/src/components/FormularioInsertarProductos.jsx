import React, { use, useEffect, useState } from "react";
import useProductos from "../hooks/useProductos.js";
import "./formularioInsertarProductos.css";
import { validarString, validarFloat } from "../library/validaciones.js";

const FormularioInsertarProductos = () => {
  const productoInicial = {
    nombre: "",
    peso: "",
    precio: "",
    url_imagen: "",
    descripcion: "",
  };
  const [producto, setProducto] = useState(productoInicial);
  const [objetoErrores,setObjetoErrores] = useState({});
  const [listaErrores, setListaErrores] = useState([]);

  const { insertarProductos } = useProductos();

  const actualizarDato = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const validarDato = (name, value) => {
    let error = "";

    if (name === "nombre") {
      error = validarString(name, value);
    }
    if (name === "peso") {
      error = validarFloat(name, value);
    }
    if (name === "precio") {
      error = validarFloat(name, value);
    }
    return error;
  };

  const validarFormulario = async (e) => {
    e.preventDefault();
    let objetoErroresActuales = {};
    let listaErroresActuales = [];
    let formularioValido = true;

    //Hacemos obligatorios estos campos, que son los que considero esenciales.
    const errorNombre = validarDato("nombre", producto.nombre);
    if(errorNombre){
      objetoErroresActuales.nombre = errorNombre;
      listaErroresActuales = [...listaErroresActuales,errorNombre];
      formularioValido = false;
    }

    const errorPeso = validarDato("peso",producto.peso);
    if(errorPeso){
      objetoErroresActuales.peso = errorPeso;
      listaErroresActuales=[...listaErroresActuales,errorPeso];
      formularioValido = false;
    }
    const errorPrecio = validarDato("precio",producto.precio);
    if(errorPrecio){
      objetoErroresActuales.precio = errorPrecio;
      listaErroresActuales=[...listaErroresActuales,errorPrecio];
      formularioValido = false;
    }
    setObjetoErrores(objetoErroresActuales);
    setListaErrores(listaErroresActuales);

    if (listaErroresActuales.length === 0) {
      try {
        await insertarProductos(producto);
        setProducto(productoInicial);
        setListaErrores([]);
      } catch (error) {
        setListaErrores([...listaErroresActuales, error.message]);
      }
    }
  };

  return (
    <div className="contenedor_formulario">
      <legend>Añade productos a tu lista</legend>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={producto.nombre}
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="peso">Peso:</label>
        <input
          type="number"
          id="peso"
          name="peso"
          value={producto.peso}
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          name="precio"
          value={producto.precio}
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="url_imagen">URL Imágen:</label>
        <input
          type="url"
          id="url_imagen"
          name="url_imagen"
          value={producto.url_imagen}
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="descripcion">Descripción:</label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={producto.descripcion}
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
        <br />
        <br />
        <input
          type="button"
          id="boton_guardar"
          value="Guardar producto"
          onClick={(e) => {
            validarFormulario(e);
          }}
        />
      </form>
      <div className="zona_errores">
        {listaErrores &&
          listaErrores.map((error) => {
            return <p>{error}</p>;
          })}
      </div>
    </div>
  );
};

export default FormularioInsertarProductos;

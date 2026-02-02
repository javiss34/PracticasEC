import React, { use, useEffect, useState } from "react";
import useProductos from "../hooks/useProductos.js";
import "./formularioInsertarProductos.css";

const FormularioInsertarProductos = () => {
  const productoInicial = {
    nombre: "",
    peso: "",
    precio: "",
    url_imagen: "",
    descripcion: "",
  }; 
  const [producto,setProducto] = useState(productoInicial);
  const [listaErrores,setListaErrores] = useState([]);
  const {insertarProductos} = useProductos();

  const actualizarDato = (e) => {
    const {name,value} = e.target;
    setProducto({...producto,[name]:value});
  }

  const validarFormulario = async(e) => {
    e.preventDefault();
    let errores = [];

    //Hacemos obligatorios estos dos campos, que son los que considero esenciales.
    if(!producto.nombre){
      errores = [...errores,"El nombre del producto es obligatorio"];
    }
    if(!producto.precio || producto.precio<0){
      errores = [...errores,"El precio del producto es obligatorio y no puede ser negativo"];
    }
    setListaErrores(errores);

    if(errores.length === 0){
      try {
        await insertarProductos(producto);
        setProducto(productoInicial);
        setListaErrores([]);
        
      } catch (error) {
        setListaErrores([...errores,error.message]);

      }
    }

  }

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
        <input type="button" id="boton_guardar" value="Guardar producto" onClick={(e)=>{validarFormulario(e)}} />
      </form>
      <div className="zona_errores">
          {listaErrores && listaErrores.map((error) => {
            return <p>{error}</p>
          })}
      </div>
    </div>
  );
};

export default FormularioInsertarProductos;

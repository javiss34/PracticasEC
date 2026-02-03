import React, { use, useEffect, useState } from "react";
import useProductos from "../hooks/useProductos.js";
import "./formularioInsertarProductos.css";
import { validarString, validarFloat } from "../library/validaciones.js";
import MostrarError from "../components/errores/MostrarError.jsx";
import { useNavigate, useParams } from "react-router-dom";

/* He hecho un único formulario tanto para 
insertarProductos, como para modificarlos */
const FormularioInsertarProductos = () => {
  const productoInicial = {
    nombre: "",
    peso: "",
    precio: "",
    imagen_url: "",
    descripcion: "",
  };
  const [producto, setProducto] = useState(productoInicial);
  /* Creo dos estados de errores:
  - Una lista de errores para que se muestre debajo del formulario
  -Un objeto de errores que por cada input que sea erroneo almacenara un error con ese nombre */
  const [objetoErrores, setObjetoErrores] = useState({});
  const [listaErrores, setListaErrores] = useState([]);

  const { insertarProductos, productos, editarProducto } = useProductos();

  const { id } = useParams();
  const navegar = useNavigate();

  useEffect(() => {
    //Si se le pasa un parámetro, se establece ese producto.
    if (id) {
      const productoEncontrado = productos.find(
        (producto) => producto.id === id,
      );
      if (productoEncontrado) {
        setProducto(productoEncontrado);
      } else {
        navegar("/listado");
      }
      //Si no se le pasa ningun parametro se establece el objeto producto vacío.
    } else {
      setProducto(productoInicial);
    }
  }, [id, productos]);

  const actualizarDato = (e) => {
    const { name, value } = e.target;
    //Cada vez que el usuario escribe en un input en rojo se quita el error
    const nuevosErroresObj = { ...objetoErrores };
    nuevosErroresObj[name] = "";
    setObjetoErrores(nuevosErroresObj);
    setProducto({ ...producto, [name]: value });
  };

  //Voy a válidar solo los campos nombre, peso y precio, que son los que me parecen esenciales.
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

    /* Tanto al objeto como a la lista de errores, le asignamos el error
    correspondiente, en caso de que validarDato devuelva un error */
    const errorNombre = validarDato("nombre", producto.nombre);
    if (errorNombre) {
      objetoErroresActuales.nombre = errorNombre;
      listaErroresActuales = [...listaErroresActuales, errorNombre];
      formularioValido = false;
    }
    const errorPeso = validarDato("peso", producto.peso);
    if (errorPeso) {
      objetoErroresActuales.peso = errorPeso;
      listaErroresActuales = [...listaErroresActuales, errorPeso];
      formularioValido = false;
    }
    const errorPrecio = validarDato("precio", producto.precio);
    if (errorPrecio) {
      objetoErroresActuales.precio = errorPrecio;
      listaErroresActuales = [...listaErroresActuales, errorPrecio];
      formularioValido = false;
    }
    setObjetoErrores(objetoErroresActuales);
    setListaErrores(listaErroresActuales);

    if (formularioValido) {
      try {
        //Si hay id, el producto se edita
        if (id) {
          await editarProducto(producto);
          navegar("/listado");
          //Si no hay id, el producto se crea
        } else {
          await insertarProductos(producto);
          setProducto(productoInicial);
          setListaErrores([]);
        }
      } catch (error) {
        setListaErrores([...listaErroresActuales, error.message]);
      }
    }
  };

  return (
    <div className="contenedor_formulario">
      <legend>
        {id ? "Actualiza el producto" : "Añade productos a tu lista"}
      </legend>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className={objetoErrores.nombre ? "error" : ""}
          value={producto.nombre}
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
        <label htmlFor="peso">Peso:</label>
        <input
          type="number"
          id="peso"
          name="peso"
          className={objetoErrores.peso ? "error" : ""}
          value={producto.peso}
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          name="precio"
          className={objetoErrores.precio ? "error" : ""}
          value={producto.precio}
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
        <label htmlFor="imagen_url">URL Imágen:</label>
        <input
          type="url"
          id="imagen_url"
          name="imagen_url"
          value={producto.imagen_url}
          onChange={(e) => {
            actualizarDato(e);
          }}
        />
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
        <input
          type="button"
          id="boton_guardar"
          value={id ? "Actualizar Producto" : "Guardar Producto"}
          onClick={(e) => {
            validarFormulario(e);
          }}
        />
      </form>
      <div className="zona_errores">
        <MostrarError errores={listaErrores} />
      </div>
    </div>
  );
};

export default FormularioInsertarProductos;

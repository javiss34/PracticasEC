import React, { act, useState } from "react";
import { validarString } from "../library/validaciones.js";
import useListas from "../hooks/useListas.js";
import useSesion from "../hooks/useSesion";
import MostrarError from '../components/errores/MostrarError.jsx';

const FormularioCrearListas = () => {
  const listaInicial = {
    nombre: "",
  };
  const [lista, setLista] = useState(listaInicial);
  const [objetoErrores, setObjetoErrores] = useState({});
  const [listaErrores, setListaErrores] = useState([]);
  const { crearLista } = useListas();
  const {datosUsuario} = useSesion();

  const actualizarDato = (e) => {
    const { name, value } = e.target;

    const copiaObjetoErrores = { ...objetoErrores };
    copiaObjetoErrores[name] = "";
    setObjetoErrores(copiaObjetoErrores);
    setLista({ ...lista, [name]: value });
  };

  const validarDato = (name, value) => {
    if(name === "nombre"){
      return validarString(name,value);
    }
  };

  const validarFormulario = async (e) => {
    e.preventDefault();
    let objetoErroresActuales = {};
    let listaErroresActuales = [];
    let formularioValido = true;

    const errorNombre = validarDato("nombre", lista.nombre);
    if (errorNombre) {
      objetoErroresActuales.nombre = errorNombre;
      listaErroresActuales = [...listaErroresActuales, errorNombre];
      formularioValido = false;
    }
    setListaErrores(listaErroresActuales);
    setObjetoErrores(objetoErroresActuales);

    if (formularioValido) {
      try {
        const listaAInsertar = {
            nombre_lista: lista.nombre,
            fecha_creacion: new Date().toISOString(),
            propietario_id: datosUsuario.id
        }
        console.log(listaAInsertar)
        await crearLista(listaAInsertar);
        setLista(listaInicial);
        setListaErrores([]);
      } catch (error) {
        setListaErrores([...listaErroresActuales, error.message]);
      }
    }
  };

  return (
    <>
    <div className="contenedor_formulario">
      <label htmlFor="nombre">Nombre de la lista:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        className={objetoErrores.nombre ? "error" : ""}
        value={lista.nombre}
        onChange={(e) => {
          actualizarDato(e);
        }}
      />
      <input type="button" className="boton_enviar" value="Guardar Lista" onClick={(e) => {validarFormulario(e)}}/>
    </div>
    <div>
        <MostrarError errores={listaErrores}/>
    </div>
    </>
  );
};

export default FormularioCrearListas;

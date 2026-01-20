import React, { useState } from "react";
import MostrarError from "../components/MostrarError.jsx";
import './insertarDiscos.css';

const InsertarDiscos = () => {
  const valoresInicales = {
    nombre: "",
    caratula: "",
    interprete: "",
    anioPubli: "",
    regueton: false,
    pop: false,
    flamenco: false,
    rap: false,
    localizacion: "",
    prestado: "no",
  };

  let erroresIniciales = [];
  const [disco, setDisco] = useState(valoresInicales);
  const [errores, setErrores] = useState(erroresIniciales);

  const actualizarDisco = (e) => {
    const { name, value } = e.target;
    setDisco({ ...disco, [name]: value });
  };

  const actualizarDiscoCheck = (e) => {
    const { name, checked } = e.target;
    setDisco({ ...disco, [name]: checked });
  };

  //Hago una función validar dato que sirve para campos text
  const validarDato = (dato) => {
    let erroresElementos = [];
    const { name, value } = dato;
    if (name === "nombre" || name === "interprete") {
      if (value.length === 0 || value.length < 5) {
        erroresElementos = [
          ...erroresElementos,
          `El ${name} debe tener al menos 5 carácteres.`,
        ];
      }
    }
    if (name === "anioPubli") {
      if (value.length !== 4 || isNaN(value)) {
        erroresElementos = [
          ...erroresElementos,
          `El ${name} debe contener 4 carácteres numéricos`,
        ];
      }
    }
    if (name === "localizacion") {
      if (!/^ES-\d{3}[A-Z]{2}$/.test(value)) {
        erroresElementos = [
          ...erroresElementos,
          `La ${name} debe tener un formato ES-001AA`,
        ];
      }
    }
    return erroresElementos;
  };

  //Esta función sirve para validar el checkbox
  const validarDatoCheck = () => {
    let erroresCheck = [];
    if (!(disco.regueton || disco.pop || disco.flamenco || disco.rap)) {
      erroresCheck = [
        ...erroresCheck,
        `Debe haber al menos un género seleccionado`,
      ];
    }
    return erroresCheck;
  };

  //De esta forma validamos que todos los campos del formulario son válidos y sino mostramos que campos no son válidos
  const validarFormulario = (e) => {
    e.preventDefault();
    const formulario = e.target.parentNode;
    let erroresListado = [];
    let inputsSimples = ["nombre", "interprete", "anioPubli", "localizacion"];

    for (let i = 0; i < formulario.elements.length; i++) {
      let elemento = formulario.elements[i];
      if (inputsSimples.includes(elemento.name)) {
        let erroresElementos = validarDato(elemento);
        erroresListado = [...erroresListado, ...erroresElementos];
      }
    }
    let erroresGeneros = validarDatoCheck();
    erroresListado = [...erroresListado, ...erroresGeneros];
    setErrores(erroresListado);

    return erroresListado.length === 0;
  };

  return (
    <>
    <div className="formulario-discos">
      <h2>Almacenamiento de discos</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={disco.nombre}
          onChange={(e) => {
            actualizarDisco(e);
          }}
        ></input>
        <br />
        <label htmlFor="caratula">Carátula del disco:</label>
        <input
          type="url"
          name="caratula"
          placeholder="URL"
          value={disco.caratula}
          onChange={(e) => {
            actualizarDisco(e);
          }}
        ></input>
        <br />
        <label htmlFor="interprete">Grupo de música o intérprete:</label>
        <input
          type="text"
          name="interprete"
          value={disco.interprete}
          onChange={(e) => {
            actualizarDisco(e);
          }}
        ></input>
        <br />
        <label htmlFor="anioPubli">Año de publicación:</label>
        <input
          type="text"
          name="anioPubli"
          value={disco.anioPubli}
          onChange={(e) => {
            actualizarDisco(e);
          }}
        ></input>
        <br />
        <label htmlFor="genero">Género:</label>
        <br />
        <div className="contenedor_genero">
          <legend>Género de música: </legend>
          <label>
            <input
              type="checkbox"
              name="regueton"
              id="regueton"
              value="regueton"
              checked={disco.regueton}
              onChange={(e) => {
                actualizarDiscoCheck(e);
              }}
            />
            Regueton
          </label>
          <label>
            <input
              type="checkbox"
              name="pop"
              id="pop"
              value="pop"
              checked={disco.pop}
              onChange={(e) => {
                actualizarDiscoCheck(e);
              }}
            />
            Pop
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="flamenco"
              id="flamenco"
              value="flamenco"
              checked={disco.flamenco}
              onChange={(e) => {
                actualizarDiscoCheck(e);
              }}
            />
            Flamenco
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              name="rap"
              id="rap"
              value="rap"
              checked={disco.rap}
              onChange={(e) => {
                actualizarDiscoCheck(e);
              }}
            />
            Rap
          </label>
        </div>
        <label htmlFor="localizacion">Localización: </label>
        <input
          type="text"
          name="localizacion"
          placeholder="ES-000XX"
          value={disco.localizacion}
          onChange={(e) => {
            actualizarDisco(e);
          }}
        ></input>
        <br />
        <div className="contenedor_prestado">
          <legend>Prestado: </legend>
          <label>
            <input
              type="radio"
              name="prestado"
              id="si"
              value="sí"
              checked={disco.prestado === "sí"}
              onChange={(e) => {
                actualizarDisco(e);
              }}
            />
            Sí
          </label>
          <label>
            <input
              type="radio"
              name="prestado"
              id="no"
              value="no"
              checked={disco.prestado === "no"}
              onChange={(e) => {
                actualizarDisco(e);
              }}
            />
            No
          </label>
        </div>
        <br />
        <input
          type="button"
          name="guardar"
          value="Guardar"
          onClick={(e) => {
            if(validarFormulario(e)){
              let discoJSON = localStorage.getItem('listaDiscos');
              let discos = discoJSON ? JSON.parse(discoJSON) : [];
              discos = [...discos,disco];
              localStorage.setItem('listaDiscos',JSON.stringify(discos));
              setDisco(valoresInicales);
              setErrores(erroresIniciales);
              console.log(localStorage)
            }
            
          }}
        />
      </form>
    </div>

      <div>
        <MostrarError errores={errores} />
      </div>
    </>
  );
};

export default InsertarDiscos;

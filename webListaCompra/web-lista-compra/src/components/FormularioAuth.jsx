import React from "react";
import useSesion from "../hooks/useSesion.js";
import "./formularioAuth.css";
import { Link } from "react-router-dom";

/* He decidido hacer un solo formulario tanto para el registro como para el inicio de sesión
y dependiendo de si se trata de un registro o de un inicio de sesión se muestran unas cosas 
u otras */
const FormularioAuth = ({ registro }) => {
  const { actualizarDato, registrar, mensajeUsuario, iniciarSesion } =
    useSesion();

  /* Esta función sirve para hacer un registro o un inicio de sesión en la base de datos
  dependiendo de que se le haya pasado por props. */
  const elegirAccion = () => {
    if (registro) {
      registrar();
    } else {
      iniciarSesion();
    }
  };

  return (
    <>
      <div className="campos_formulario">
        <h2>{registro ? "Registrate" : "Inicia sesión"}</h2>
        <div className="campo_email">
          {/* Si se trata de un registro también se muestra el campo nombre */}
          {registro && (
            <>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                onChange={(e) => actualizarDato(e)}
              />
            </>
          )}
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => {
              actualizarDato(e);
            }}
          />
        </div>
        <div className="campo_password">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              actualizarDato(e);
            }}
          />
        </div>
        {/* Si se trata de un inicio de sesión se muestra un enlace por si no tiene cuenta o quiere registrarse */}
        {!registro && (
          <div className="enlace_registro">
            <Link to="/registrarse">No tengo cuenta, Registrarme</Link>
          </div>
        )}
        {/* Si se trata de un registro se muestra un enlace por si ya tiene cuenta y quiere iniciciar sesión */}
        {registro && (
          <div className="enlace_inicio_sesion">
            <Link to="/iniciar_sesion">Ya tengo cuenta</Link>
          </div>
        )}
        <div className="campo_boton">
          <input
            type="button"
            value={registro ? "Crear cuenta" : "Entrar"}
            className="boton_regsitro"
            onClick={() => {
              elegirAccion();
            }}
          />
        </div>
      </div>
      {/* Aquí se muestran tanto los mensajes de error como los de informar al usuario*/}
      <div className={mensajeUsuario ? "mensaje_usuario" : "no_mostrar"}>
        <h3>{mensajeUsuario}</h3>
      </div>
    </>
  );
};

export default FormularioAuth;

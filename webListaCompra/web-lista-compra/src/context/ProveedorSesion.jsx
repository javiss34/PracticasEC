import React, { createContext, useEffect, useState } from "react";
import { supabaseConexion } from "../supabase/supabase.js";
import { useNavigate } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";

const ContextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
  const datosSesionInicial = {
    email: "",
    password: "",
    nombre: "",
  };
  const datosusuarioInicial = {};
  const mensajeUsuarioInicial = "";
  const sesionIniciadaInicial = false;

  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [datosUsuario, setDatosUsuario] = useState(datosusuarioInicial);
  const [mensajeUsuario, setMensajeUsuario] = useState(mensajeUsuarioInicial);
  const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);

  const navegar = useNavigate();

  const actualizarDato = (e) => {
    setMensajeUsuario(mensajeUsuarioInicial); //Así cuando el usuario escriba se va el error
    const { name, value } = e.target;
    setDatosSesion({ ...datosSesion, [name]: value });
  };

  const registrar = async () => {
    setMensajeUsuario(mensajeUsuarioInicial);
    try {
      const { data, error } = await supabaseConexion.auth.signUp({
        email: datosSesion.email,
        password: datosSesion.password,
        options: {
          emailRedirectTo: "http://localhost:5173/", //Redirección tras confirmar email
          data: {
            nombre: datosSesion.nombre, //El nombre es un metadato
          }
        },
      });
      if (error) {
        throw error;
      } else {
        setMensajeUsuario("Mira tu correo para confirmar la cuenta.");
      }
    } catch (error) {
      setMensajeUsuario(error.message);
    }
  };

  const iniciarSesion = async () => {
    setMensajeUsuario(mensajeUsuarioInicial);
    try {
      const { data, error } = await supabaseConexion.auth.signInWithPassword({
        email: datosSesion.email,
        password: datosSesion.password,
      });
      if (error) {
        throw error;
      }
    } catch (error) {
      setMensajeUsuario(error.message);
    }
  };

  const cerrarSesion = async () => {
    try {
      await supabaseConexion.auth.signOut();
      setMensajeUsuario(mensajeUsuarioInicial);
      navegar("/iniciar_sesion");
    } catch (error) {
      setMensajeUsuario(error.message);
    }
  };

  const obtenerUsuario = async () => {
    try {
      const { data, error } = supabaseConexion.auth.getUser();
      if (error) {
        throw error;
      } else {
        setDatosUsuario(data.user);
        setMensajeUsuario(mensajeUsuarioInicial);
      }
    } catch (error) {
      setMensajeUsuario(error.message);
    }
  };

  useEffect(() => {
    const suscripcion = supabaseConexion.auth.onAuthStateChange(
      (event, session) => {
        if(session){
          setDatosUsuario(session.user);
          navegar("/listado");
          setSesionIniciada(true);
        }else{
          setDatosUsuario(datosusuarioInicial);
          navegar("/iniciar_sesion");
          setSesionIniciada(false);
        }

      }
    )
  },[]);

  const datosAProveer = {
    actualizarDato,
    registrar,
    iniciarSesion,
    cerrarSesion,
    mensajeUsuario,
    sesionIniciada,
    datosUsuario
  };

  return (
    <ContextoSesion.Provider value={datosAProveer}>
      {children}
    </ContextoSesion.Provider>
  );
};

export default ProveedorSesion;
export { ContextoSesion };

import React, { useContext } from "react";
import { ContextoSesion } from "../context/ProveedorSesion.jsx";

const useSesion = () => {
  const contexto = useContext(ContextoSesion);
  if (!contexto) {
    throw new Error("El hook useSesion está fallando");
  }
  return contexto;
};

export default useSesion;

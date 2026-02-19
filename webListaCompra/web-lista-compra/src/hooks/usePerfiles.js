import React, { useContext } from "react";
import { ContextoPerfiles } from "../context/ProveedorPerfiles.jsx";

const usePerfiles = () => {
  const contexto = useContext(ContextoPerfiles);
  if (!contexto) {
    throw new Error("El hook usePerfiles está fallando.");
  }
  return contexto;
};

export default usePerfiles;

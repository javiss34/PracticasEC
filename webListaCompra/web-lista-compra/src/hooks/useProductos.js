import React, { useContext } from "react";
import { contextoProductos } from "../context/ProveedorProductos";

const useProductos = () => {
  const contexto = useContext(contextoProductos);
  if (!contexto) {
    throw new Error("El hook useProductos está fallando");
  }
  return contexto;
};

export default useProductos;

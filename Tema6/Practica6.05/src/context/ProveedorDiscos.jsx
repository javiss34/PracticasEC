import React, { createContext, useEffect, useState } from "react";
import useApi from "../hooks/useApi";

const contextoDiscos = createContext();

const ProveedorDiscos = ({ children }) => {
  const [discos, setDiscos] = useState([]);

  const url = "http://localhost:4003/discos";

  const { cargando, error, obtener, insertar,eliminar,actualizar } = useApi();

  const obtenerDiscos = async () => {
    try {
      const datos = await obtener(url);
      setDiscos(datos);
    } catch (error) {
        throw error;
    }
  };

  const insertarDiscos = async (datos) => {
    try {
        const respuesta = await insertar(url, datos);
        obtenerDiscos();
    } catch (error) {
        throw error;
        
    }
  };

  const eliminarDisco = async(id) => {
    try {
        const respuesta=await eliminar(`${url}/${id}`);
        obtenerDiscos();
    } catch (error) {
        throw error;
    }
  }

  const actualizarDisco = async(id,datos) => {
    try {
        const respuesta = await actualizar(`${url}/${id}`,datos);
        obtenerDiscos();
    } catch (error) {
        throw error;
    }
  }

  useEffect(()=>{
    obtenerDiscos();
  }, [])

  const datosContexto = {
    discos,
    obtenerDiscos,
    insertarDiscos,
    eliminarDisco,
    actualizarDisco,
    cargando,
    error
  }

  return (
    <>
        <contextoDiscos.Provider value={datosContexto}>
            {children}
        </contextoDiscos.Provider>
    
    </>
  );
};

export default ProveedorDiscos;
export {contextoDiscos};

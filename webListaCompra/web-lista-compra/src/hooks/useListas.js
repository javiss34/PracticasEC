import React, { useContext } from 'react'
import { contextoListas } from '../context/ProveedorListas.jsx'

const useListas = () => {
    const contexto = useContext(contextoListas);
    if(!contexto){
        throw new Error("El hook useListas está fallando");
    }
  return contexto;
}

export default useListas

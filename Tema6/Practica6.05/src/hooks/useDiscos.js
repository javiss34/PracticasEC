import React, { useContext } from 'react'
import { contextoDiscos } from '../context/ProveedorDiscos'

const useDiscos = () => {
    const contexto = useContext(contextoDiscos);
    if(!contexto){
        throw new Error(
            "Fallo en el hook useDiscentes"
        )
    }
  return contexto;
}

export default useDiscos

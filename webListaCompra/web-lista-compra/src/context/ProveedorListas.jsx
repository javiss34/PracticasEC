import React, { createContext, useEffect, useState } from 'react'
import {supabaseConexion} from '../supabase/supabase.js';
import useSupabase from '../hooks/useSupabase.js';

const contextoListas = createContext();
const ProveedorListas = ({children}) => {
    const [listas,setListas] = useState([]);
    const {insertar,obtener,cargando} = useSupabase();

    const traerListas = async() => {
        const listas = await obtener("listas");
        if(listas){
            setListas(listas);
        }
    }

    const crearLista = async(listaAInsertar) => {
        const resultado = await insertar("listas",listaAInsertar)
        if(resultado){
            traerListas();
        }
    }

    useEffect(() => {
        traerListas();
    },[])

    
    const datosAProveer = {
        traerListas,
        listas,
        crearLista,
        cargando
    };



  return (
    <contextoListas.Provider value={datosAProveer}>
        {children}
    </contextoListas.Provider>
  )
}

export default ProveedorListas
export {contextoListas};
import React, { useState } from "react";
import { supabaseConexion } from "../supabase/supabase.js";

const useSupabase = () => {
  const errorIncial = "";
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(errorIncial);

  const ejecutar = async (consulta) => {
    setCargando(true);
    setError(errorIncial);
    try {
      const { data, error } = await consulta;
      if (error) {
        throw error;
      } else {
        return data;
      }
    } catch (error) {
        setError(error.message);
        throw error;
    } finally {
        setCargando(false);
    }
  };


  /* En prácticas anteriores ejecutaba la sentencia en estas funciones, pero
  me he dado cuenta que es mucho más reutilizable que estas funciones devuelvan, 
  simplemente la consulta, de esta forma, si la consulta es más compleja
  se le puede añadir al llamar a cualquiera de esta función y ya ejecutarla
  en el proveedor
  */
  const obtener = (tabla) => {
    return supabaseConexion.from(tabla).select("*");
  }
  const insertar = (tabla,datos) => {
    return supabaseConexion.from(tabla).insert(datos);
  }
  const eliminar = (tabla,id) => {
    return supabaseConexion.from(tabla).delete().eq("id",id);
  }

  /* he tenido que añadir a la función un parametro opcional, por si el id se llama diferente de id
  como es en el caso de perfil_id, sé que lo suyo es que sea un dato que haya que pasar siempre como parametro, pero
  sino tendria que cambiar muchas partes de mi web,  así lo addapto mejor */
  const editar = (tabla,datos,columnaId = "id") => {
    return supabaseConexion.from(tabla).update(datos).eq(columnaId,datos[columnaId]);
  }


  return {
    cargando,
    error,
    ejecutar,
    obtener,
    insertar,
    eliminar,
    editar
  };
};

export default useSupabase;

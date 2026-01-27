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
    } finally {
        setCargando(false);
    }
  };

  const obtener = async(tabla) => {
    await ejecutar(supabaseConexion.from(tabla).select("*"));
  }
  const insertar = async(tabla,datos) => {
    await ejecutar(supabaseConexion.from(tabla).insert(datos));
  }
  const eliminar = (id) => {
    ejecutar(supabaseConexion.from(tabla).delete().eq("id",id))
  }
  const editar = (tabla,datos) => {
    ejecutar(supabaseConexion.from(tabla).update(datos).eq("id",datos.id));
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

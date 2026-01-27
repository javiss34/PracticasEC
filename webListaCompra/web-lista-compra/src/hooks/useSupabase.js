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

  const obtener = (tabla) => {
    ejecutar(supabaseConexion.from(tabla).select("*"));
  }

  return {
    cargando,
    error,
    ejecutar,
    obtener
  };
};

export default useSupabase;

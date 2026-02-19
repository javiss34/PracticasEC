import React, { Children, createContext, useEffect, useState } from "react";
import useSesion from "../hooks/useSesion";
import useSupabase from "../hooks/useSupabase";

const ContextoPerfiles = createContext();

const ProveedorPerfiles = ({ children }) => {
  const { datosUsuario } = useSesion();
  const { ejecutar, obtener, editar, cargando } = useSupabase();
  const [perfil, setPerfil] = useState(null);

  const obtenerDatosPerfil = async () => {
    if (datosUsuario?.id) {
      const consulta = obtener("perfiles")
        .eq("id_perfil", datosUsuario.id)
      const resultado = await ejecutar(consulta);
      if (resultado && resultado.length > 0) {
        setPerfil(resultado[0]);
      }
    }
  };

  const actualizarPerfil = async (nuevosDatos) => {
    if (datosUsuario?.id) {
      const consulta = editar("perfiles", nuevosDatos,"id_perfil").select();
      console.log(consulta)
      const resultado = await ejecutar(consulta);
      console.log(resultado)
      if (resultado) {
        setPerfil(resultado[0] || resultado);
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    obtenerDatosPerfil();
  }, [datosUsuario]);

  const datosAProveer = {
    perfil,
    actualizarPerfil,
    cargando
  };
  return (
    <ContextoPerfiles.Provider value={datosAProveer}>
      {children}
    </ContextoPerfiles.Provider>
  );
};

export default ProveedorPerfiles;
export { ContextoPerfiles };

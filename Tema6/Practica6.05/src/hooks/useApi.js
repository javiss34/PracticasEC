import React, { useState } from "react";

const useApi = () => {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const solicitud = async (url, options = {}) => {
    setCargando(true);
    try {
      const respuesta = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers, //De esta forma si en el options se añade algún headers se añadira a este.
        },
        ...options,
      });

      if (!respuesta.ok) {
        throw new Error("Error en la solicitud de la url");
      }
      const datos = respuesta.json();
      return datos;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const obtener = (url) => {
    return solicitud(url, { method: "GET" });
  };

  const insertar = (url, body) => {
    return solicitud(url, { method: "POST", body: JSON.stringify(body) });
  };

  const eliminar = (url) => {
    return solicitud(url, { method: "DELETE" });
  };

  const actualizar = (url, body) => {
    return solicitud(url, { method: "PATCH", body: JSON.stringify(body) });
  };

  return {
    cargando,
    error,
    obtener,
    insertar,
    eliminar,
    actualizar
  };
};

export default useApi;

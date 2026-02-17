import React, { createContext, useEffect, useState } from "react";
import { supabaseConexion } from "../supabase/supabase.js";
import useSupabase from "../hooks/useSupabase.js";

const contextoListas = createContext();
const ProveedorListas = ({ children }) => {
  const [listas, setListas] = useState([]);
  const { ejecutar, insertar, obtener, editar, eliminar, cargando } =
    useSupabase();

  const traerListas = async () => {
    const consulta = obtener("listas");
    const listas = await ejecutar(consulta);
    if (listas) {
      setListas(listas);
    } else {
      setListas([]);
    }
  };

  const crearLista = async (listaAInsertar) => {
    const consulta = insertar("listas", listaAInsertar);
    await ejecutar(consulta);
    traerListas();
  };

  const insertarProductosEnLista = async (lista_id, producto_id) => {
    //con esta consulta descubrimos si ya existe el producto.
    const consultaABuscar = obtener("lista_productos")
      .eq("lista_id", lista_id)
      .eq("producto_id", producto_id)
    const resultados = await ejecutar(consultaABuscar);
    if (resultados.length>0) {
      const resultado = resultados[0];
      //Si hay resultado sumamos uno a la cantidad.
      const consultaAEditar = editar("lista_productos", {
        cantidad: resultado.cantidad + 1,
        id: resultado.id
      });
      await ejecutar(consultaAEditar);
    } else {
      console.log("Creo uno nuevo")
      //Si no hay resultados, creamos la fila.
      const consultaAInsertar = insertar("lista_productos", {
        lista_id: lista_id,
        producto_id: producto_id,
        cantidad: 1,
      });
      await ejecutar(consultaAInsertar);
    }
  };

  const eliminarProductoDeLista = async (id_producto) => {
    const consulta = eliminar("lista_productos", id_producto);
    await ejecutar(consulta);
    traerListas();
  };

  const obtenerDetallesLista = async (id_lista) => {
    const consulta = supabaseConexion
      .from("lista_productos")
      .select("id,cantidad,productos(nombre,peso,precio)")
      .eq("lista_id", id_lista);
    return await ejecutar(consulta);
  };

  const borrarLista = async (id_lista) => {
    const consulta = eliminar("listas", id_lista);
    await ejecutar(consulta);
    traerListas();
  };

  const editarLista = async(id,datos) => {
    const consulta = editar("lista_productos",datos);
    await ejecutar(consulta);
    traerListas();
  }


  useEffect(() => {
    /* He tenido que hacer esto para que al iniciar sesión se traigan las listas correspondientes, sino había que pulsar f5 para que se recargara */
    supabaseConexion.auth.onAuthStateChange(
      (event,session)=>{
        if(event==="INITIAL_SESSION" || event==="SIGNED_IN"){
          traerListas()
        }
      }
    )
  }, []);

  const datosAProveer = {
    traerListas,
    listas,
    crearLista,
    cargando,
    insertarProductosEnLista,
    eliminarProductoDeLista,
    borrarLista,
    editarLista,
    obtenerDetallesLista
  };

  return (
    <contextoListas.Provider value={datosAProveer}>
      {children}
    </contextoListas.Provider>
  );
};

export default ProveedorListas;
export { contextoListas };

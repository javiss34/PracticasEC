import React, { createContext, useEffect, useState } from "react";
import { supabaseConexion } from "../supabase/supabase.js";
import useSupabase from "../hooks/useSupabase.js";

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
  const productosiniciales = [];
  const errorInicial = "";
  //Por defecto se filtra y se ordena por nombre
  const filtroIncial = {
    tipo: "nombre",
    valor: "",
  };
  const ordenInicial = {
    tipo: "nombre",
    asc: true,
  };

  const [productos, setProductos] = useState(productosiniciales);

  const [filtro, setFiltro] = useState(filtroIncial);
  const [orden, setOrden] = useState(ordenInicial);

  const { ejecutar,insertar, cargando, error } = useSupabase();

  /* Como hay varias posibilidades de filtros y de ordenaciones, he pensado que lo mejor es generar una función para crear
    la consulta según el filtro y otra para ordenar según la columna y si quiere ascendente o descendente. Y luego la función listarProductos,
    que se encarga de hacer la selección de todos los productos e ir sumandole según desee el usuario, la consulta de filtro y la de orden */

  const consultaFiltro = (consulta, filtroActual) => {
    if (!filtroActual.valor) {
      return consulta;
    } else {
      if (filtroActual.tipo === "nombre") {
        return consulta.ilike("nombre", `%${filtroActual.valor}%`); //Los % indican que puede haber cualquier cosa antes o después del valor.
        //Como tanto el precio como el peso son float, hago la misma consulta para ambos.
      } else {
        return consulta.lte(filtroActual.tipo, filtroActual.valor);
      }
    }
  };

  const consultaOrden = (consulta, ordenActual) => {
    return consulta.order(ordenActual.tipo, { ascending: ordenActual.asc });//ascending pertenece a supabase y sirve para indicar si es asc o desc.
  };

  const listarProductos = async () => {
    //Aquí no hace falta hacer try catch para capturtar errores porque ya lo hace ejecutar().
      let consulta = supabaseConexion.from("productos").select("*");
      consulta = consultaFiltro(consulta, filtro);
      consulta = consultaOrden(consulta, orden);
      const resultado = await ejecutar(consulta);
      if (resultado) {
        setProductos(resultado);
      }
  };

  const insertarProductos = async(nuevoProducto) => {
    const resultado = await insertar("productos",nuevoProducto);
    if(resultado){
      listarProductos();
    }
  }

  const actualizarFiltro = (e) => {
    const { name, value } = e.target;
    setFiltro({
      ...filtro,
      [name]: value,
    });
  };

  const actualizarOrden = (e) => {
    const [tipo, direccion] = e.target.value.split("-");
    setOrden({ tipo, asc: direccion === "asc" });
  };

  const actualizarDato = (e) => {
    const {name,value} = e.target;
    console.log(name,value);
    setProductos({...productos,[name]:value});
  }

  useEffect(() => {
    listarProductos();
  }, [filtro, orden]);

  const datosAProveer = {
    productos,
    cargando,
    error,
    filtro,
    orden,
    actualizarFiltro,
    actualizarOrden,
    actualizarDato
  };

  return (
    <contextoProductos.Provider value={datosAProveer}>
      {children}
    </contextoProductos.Provider>
  );
};

export default ProveedorProductos;
export { contextoProductos };

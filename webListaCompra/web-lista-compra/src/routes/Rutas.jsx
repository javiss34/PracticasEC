import React from "react";
import { Routes, Route } from "react-router-dom";
import Registro from "../pages/Registro.jsx";
import InicioSesion from "../pages/InicioSesion.jsx";
import Inicio from "../pages/Inicio.jsx";
import Listado from "../pages/Listado.jsx";
import InsertarProductos from '../pages/InsertarProductos.jsx'
import ActualizarProducto from "../pages/ActualizarProducto.jsx";
import InsertarListas from "../pages/InsertarListas.jsx";
import MostrarListas from "../components/MostrarListas.jsx";
import DetallesLista from "../components/DetallesLista.jsx";
import AñadirProductosALista from "../components/AñadirProductosALista.jsx";
import MostrarPerfil from "../components/MostrarPerfil.jsx";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/iniciar_sesion" element={<InicioSesion />}/>
        <Route path="/registrarse" element={<Registro/>}/>

        <Route path="/listado" element={<Listado/>}/>
        <Route path="/insertar_productos" element={<InsertarProductos/>}/>
        <Route path="/listado/editar/:id" element={<ActualizarProducto/>}/>

        <Route path="/insertar_lista" element={<InsertarListas/>}/>
        <Route path="/mostrar_listas" element={<MostrarListas/>}/>

        <Route path="/lista-detalles/:id" element={<DetallesLista/>}/>
        <Route path="/insertar-producto/:id" element={<AñadirProductosALista/>}/>
        <Route path="/perfil/:id" element={<MostrarPerfil/>}/>
      </Routes>
    </>
  );
};

export default Rutas;

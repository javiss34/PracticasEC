import React from "react";
import { Routes, Route } from "react-router-dom";
import Registro from "../pages/Registro.jsx";
import InicioSesion from "../pages/InicioSesion.jsx";
import Inicio from "../pages/Inicio.jsx";
import Listado from "../pages/Listado.jsx";
import InsertarProductos from "../pages/InsertarProductos.jsx";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/iniciar_sesion" element={<InicioSesion />}/>
        <Route path="/registrarse" element={<Registro/>}/>
        <Route path="/listado" element={<Listado/>}/>
        <Route path="/insertar_productos" element={<InsertarProductos/>}/>
      </Routes>
    </>
  );
};

export default Rutas;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import Peliculas from "../pages/Peliculas.jsx";
import Interpretes from "../pages/Interpretes.jsx";
import Galeria from "../pages/Galeria.jsx";
import AcercaDe from "../pages/AcercaDe.jsx";
import Titulo from "../pages/submenu/Titulo.jsx";
import Interprete from "../pages/submenu/Interprete.jsx";
import Director from "../pages/submenu/Director.jsx";
import Error from "../pages/Error.jsx";
import PeliculaDetalle from "../components/PeliculaDetalle.jsx";
import PeliculasJSON from "../assets/peliculas.json";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/interpretes" element={<Interpretes />} />
        <Route path="/galeria" element={<Galeria />} >
          <Route path="/galeria/titulo" element={<Titulo />} />
          <Route path="/galeria/interprete" element={<Interprete />} />
          <Route path="/galeria/director" element={<Director />} />
        </Route>
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/peliculas/:id" element={<PeliculaDetalle peliculas={PeliculasJSON.peliculas} />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
};

export default Rutas;

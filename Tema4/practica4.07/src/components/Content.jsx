import React from "react";
import Menu from "./menu/Menu.jsx";
import Rutas from "../routes/Rutas.jsx";
import "./Content.css";

const Content = () => {
  return (
    <div className="contenido">
      <Menu />
      <Rutas />
    </div>
  );
};

export default Content;

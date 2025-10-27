import React from "react";
import { Outlet, Link } from "react-router-dom";
import MostrarCarteleras from "../components/MostrarCarteleras";
import SubMenu from "../components/menu/SubMenu.jsx";

const Galeria = () => {
  return (
    <div>
      <h1>Galeria</h1>
      <SubMenu />
      <Outlet />
      <MostrarCarteleras/>
    </div>
  );
};

export default Galeria;

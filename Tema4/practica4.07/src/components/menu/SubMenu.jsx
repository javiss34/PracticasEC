import React from "react";
import { Link } from "react-router-dom";
import './Submenu.css';

const SubMenu = () => {
  return (
    <div>
      <nav className="submenu_completo">
        <Link className="submenu" to="/galeria/titulo">
          Título
        </Link>
        <Link className="submenu" to="/galeria/interprete">
          Interprete
        </Link>
        <Link className="submenu" to="/galeria/director">
          Director
        </Link>
      </nav>
    </div>
  );
};

export default SubMenu;

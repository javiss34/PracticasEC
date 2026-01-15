import React from "react";
import { Link } from "react-router-dom";
import './inicio.css';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <h1>¡Bienvenido a tu Colección de Discos!</h1>{" "}
      <p>
        Esta es la web perfecta para almacenar tus discos preferidos
      </p>
      <h2>Empieza a Gestionar</h2>
      <div className="inicio-acciones">
        <Link className="menu-inicio" to='/insertar-discos'>Insertar discos</Link>
        <Link className="menu-inicio" to='/lista-discos'>Lista de discos</Link>
      </div>
      <p>
        Usa la barra de navegación superior para acceder a todas las secciones.
      </p>
    </div>
  );
};

export default Inicio;

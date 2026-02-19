import React from "react";
import "./perfil.css";
import { useNavigate } from "react-router-dom";

const Perfil = ({ perfil }) => {
  const navegar = useNavigate();
  return (
    <div className="perfil">
      <img
        src={
          perfil.imagen_url
            ? perfil.imagen_url
            : "https://cdn-icons-png.flaticon.com/512/6326/6326055.png"
        }
        alt="imagen de perfil"
      />
      <h1>{perfil.nombre}</h1>
      <p>{perfil.descripcion}</p>
      <input
        type="button"
        value="Editar Perfil"
        onClick={() => navegar(`/editar-perfil/${perfil.id_perfil}`)}
      />
    </div>
  );
};

export default Perfil;

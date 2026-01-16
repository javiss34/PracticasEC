import React, { useContext, useState } from "react";
import { contextoDiscos } from "../context/ProveedorDiscos";
import ConfirmacionBorrar from "../components/ConfirmacionBorrar.jsx";
import "./disco.css";
import { useNavigate } from "react-router-dom";
import useDiscos from "../hooks/useDiscos.js";

const Disco = ({ disco }) => {
  const { eliminarDisco } = useDiscos();
  //Este estado sirve para saber cuando hay que mostrar el componente confirmación.
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const navegar = useNavigate();

  const mostrarGeneros = () => {
    let generos = [];
    if (disco.regueton) {
      generos = [...generos, "Regueton"];
    }
    if (disco.pop) {
      generos = [...generos, "Pop"];
    }
    if (disco.flamenco) {
      generos = [...generos, "Flamenco"];
    }
    if (disco.rap) {
      generos = [...generos, "Rap"];
    }
    return generos.join(", ");
  };

  //se llamara cuando el usuario confirme que si quiere borrar.
  const borraDisco = () => {
    eliminarDisco(disco.id);
    setMostrarConfirmacion(false);
  };

  return (
    <>
      <div className="disco-card">
        <div className="caratula">
          <img
            src={
              disco.caratula ||
              "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
            }
            alt={disco.nombre}
          />
        </div>
        <div className="disco_info">
          <h3>
            {disco.nombre} - {disco.grupo}
          </h3>
          <p>
            <strong>Año publicación:</strong> {disco.anioPubli}
          </p>
          <p>
            <strong>Genero:</strong> {mostrarGeneros()}
          </p>
          <p>
            <strong>Localización:</strong> {disco.localizacion}
          </p>
          <p>
            <strong>Prestado:</strong> {disco.prestado}
          </p>
        </div>
        <div className="disco_acciones">
          <input
            type="button"
            value="Editar"
            onClick={() => {
              navegar(`/lista-discos/editar/${disco.id}`);
            }}
          />
          <img
            src="https://cdn-icons-png.freepik.com/512/3625/3625005.png"
            alt="eliminar"
            className="imagen_borrar"
            onClick={() => setMostrarConfirmacion(true)}
          />
        </div>
      </div>

      <ConfirmacionBorrar
        mostrar={mostrarConfirmacion}
        mensaje={`¿Seguro que quieres eliminar el disco ${disco.nombre}?`}
        cancelar={() => setMostrarConfirmacion(false)}
        confirmar={() => borraDisco()}
      />
    </>
  );
};

export default Disco;

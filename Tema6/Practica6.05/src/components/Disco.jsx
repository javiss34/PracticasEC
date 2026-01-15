import React, { useContext, useState } from "react";
import { contextoDiscos } from "../context/ProveedorDiscos";
import ConfirmacionBorrar from "../components/ConfirmacionBorrar.jsx";
import "./disco.css";
import { useNavigate } from "react-router-dom";

const Disco = ({ disco }) => {
  const { eliminarDisco, setDiscoAEditar } = useContext(contextoDiscos);
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

  const borraDisco = () => {
    eliminarDisco(disco.id);
    setMostrarConfirmacion(false);
  };

  const manejarActualizacionDisco = () => {
    setDiscoAEditar(disco);
    navegar(`/editar/${disco.id}`);

  }

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
              manejarActualizacionDisco()
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

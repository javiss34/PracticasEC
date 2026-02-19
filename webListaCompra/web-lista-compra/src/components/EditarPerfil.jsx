import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePerfiles from "../hooks/usePerfiles";
import './editarPerfil.css';

const EditarPerfil = () => {
  const {id} = useParams();
  const datosIniciales = {
    nombre: "",
    imagen_url: "",
    descripcion: "",
    rol: ""
  };
  const [datos, setDatos] = useState(datosIniciales);
  const { perfil, actualizarPerfil } = usePerfiles();
  const navegar = useNavigate();

  useEffect(() => {
    if (perfil) {
      setDatos({
        id_perfil: id,
        nombre: perfil.nombre || "",
        imagen_url: perfil.imagen_url || "",
        descripcion: perfil.descripcion || "",
      });
    }
  }, [perfil]);

  const urlFoto =
    datos.imagen_url !== ""
      ? datos.imagen_url
      : "https://cdn-icons-png.flaticon.com/512/6326/6326055.png";

  const actualizarDato = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const validarFormualario = async (e) => {
    e.preventDefault();
    const resultado = await actualizarPerfil(datos);
    if(resultado){
      navegar(`/perfil/${id}`)
    }
  };


  return (
    <div className="contenedor_perfil">
      <h1>Perfil de usuario</h1>
      <img src={urlFoto} alt="Foto de perfil" />
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datos.nombre || ""}
          onChange={actualizarDato}
        />

        <label htmlFor="imagen_url">URL Imagen de perfil</label>
        <input
          type="url"
          id="imagen_url"
          name="imagen_url"
          value={datos.imagen_url || ""}
          onChange={actualizarDato}
        />

        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={datos.descripcion || ""}
          onChange={actualizarDato}
        />
        <input
          type="button"
          value="Actualizar Perfil"
          onClick={(e) => validarFormualario(e)}
        />
      </form>
    </div>
  );
};

export default EditarPerfil;

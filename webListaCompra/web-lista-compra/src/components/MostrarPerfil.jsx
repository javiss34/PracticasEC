import React, { useEffect, useState } from "react";
import useSesion from "../hooks/useSesion";
import { useParams } from "react-router-dom";

const MostrarPerfil = () => {
  const { id } = useParams();
  const { datosUsuario } = useSesion();
  const perfilInicial =  {
    nombre: "",
    imagen: "",
    descripcion: ""
  }
  const [perfil,setPerfil] = useState(perfilInicial)

  useEffect(() => {
    if(datosUsuario){
        setPerfil({
            nombre: datosUsuario.user_metadata?.nombre
        })
    }
  })

  return (
    <div className="contenedor_perfil">
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre"/>
        <label htmlFor="imagen_perfil">Imagen de perfil</label>
        <input type="url" />
      </form>
    </div>
  );
};

export default MostrarPerfil;

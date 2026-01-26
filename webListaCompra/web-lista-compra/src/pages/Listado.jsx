import React from 'react'
import './listado.css';
import useSesion from '../hooks/useSesion.js';

const Listado = () => {
  const {datosUsuario} = useSesion();
  const nombreUsuario = datosUsuario?.user_metadata?.nombre || "Cargando...";

  return (
    <div className='contenedor_mensaje'>
      <h1>Hola, {nombreUsuario}</h1>
      <h2>Esta es tu parte privada de la web</h2>
      <h2>Aquí tendrás tu lista de la compra</h2>
      <h1>😉</h1>
    </div>
  )
}

export default Listado

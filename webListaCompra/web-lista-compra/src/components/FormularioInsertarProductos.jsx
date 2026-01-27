import React, { useState } from 'react'
import useProductos from '../hooks/useProductos.js';
import './formularioInsertarProductos.css';

const FormularioInsertarProductos = () => {
  const {actualizarDato} = useProductos();

  return (
    <div className='contenedor_formulario'>
      <legend>Añade productos a tu lista</legend>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id='nombre' name='nombre' onChange={(e)=>{actualizarDato(e)}}/>
        <br /><br />
        <label htmlFor="peso">Peso:</label>
        <input type="number" id='peso' name='peso' onChange={(e)=>{actualizarDato(e)}}/>
        <br /><br />
        <label htmlFor="precio">Precio:</label>
        <input type="number" id='precio' name='precio' onChange={(e)=>{actualizarDato(e)}}/>
        <br /><br />
        <label htmlFor="url_imagen">URL Imágen:</label>
        <input type="url" id='url_imagen' name='url_imagen' onChange={(e)=>{actualizarDato(e)}}/>
        <br /><br />
        <label htmlFor="descripcion">Descripción:</label>
        <input type="text" id='descripcion' name='descripcion' onChange={(e)=>{actualizarDato(e)}}/>
      </form>
    </div>
  )
}

export default FormularioInsertarProductos


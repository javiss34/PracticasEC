import React, { useState } from 'react'

const InsertarDiscos = () => {
  const valoresInicales= {
    nombre: "",
    caratula: "",
    interprete: "",
    anioPubli: "",
    regueton: "",
    pop: "",
    flamenco: "",
    rap: "",
    localizacion: "",
    prestado: "false"
  };

  const [disco,setDisco] = useState(valoresInicales);

  const actualizarDisco = (e) => {
    const {name,value} = e.target;
    setDisco({...disco,[name]:value});
  }

  const actualizarDiscoCheck = (e) => {
    const{name,checked} = e.target;
    setDisco({...disco,[name]:checked})
  }

  const validarDato = (dato) => {
    const { name, value } = dato;
    let erroresElementos = [];
    if(name==="nombre"){
      
    }
  }

  return (
    <>
      <h2>Almacenamiento de discos</h2>
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name='nombre' value={disco.nombre} onChange={(e)=>{actualizarDisco(e)}}></input>
        <br />
        <label htmlFor="caratula">Carátula del disco:</label>
        <input type="url" name="caratula" placeholder="URL" value={disco.caratula} onChange={(e)=>{actualizarDisco(e)}}></input>
        <br />
        <label htmlFor='interprete'>Grupo de música o intérprete:</label>
        <input type="text" name="interprete" value={disco.interprete} onChange={(e)=>{actualizarDisco(e)}}></input>
        <br />
        <label htmlFor="anioPubli">Año de publicación:</label>
        <input type="text" name="anioPubli" value={disco.anioPubli} onChange={(e)=>{actualizarDisco(e)}}></input>
        <br />
        <label htmlFor="genero">Género:</label>
        <br />
        <div className='contenedor_genero'>
          <legend>Género de música: </legend>
          <label>
            <input type="checkbox" name='regueton' id='regueton' value='regueton' checked={disco.regueton} onChange={(e)=>{actualizarDiscoCheck(e)}}/>Regueton
          </label>
          <label>
            <input type="checkbox" name='pop' id='pop' value='pop' checked={disco.pop} onChange={(e)=>{actualizarDiscoCheck(e)}}/>Pop
          </label>
          <label htmlFor="">
            <input type="checkbox" name='flamenco' id='flamenco' value='flamenco' checked={disco.flamenco} onChange={(e)=>{actualizarDiscoCheck(e)}}/>Flamenco
          </label>
          <label htmlFor="">
            <input type="checkbox" name='rap' id='rap' value='rap' checked={disco.rap} onChange={(e)=>{actualizarDiscoCheck(e)}}/>Rap
          </label>
        </div>
        <label htmlFor='localizacion'>Localización: </label>
        <input type="text" name="localizacion" value={disco.localizacion} onChange={(e)=>{actualizarDisco(e)}}></input>
        <br />
        <div className='contenedor_prestado'>
          <legend>Prestado: </legend>
          <label>
            <input type="radio" name='prestado' id='si' value='sí' checked={disco.prestado==="sí"} onChange={(e)=>{actualizarDisco(e)}}/>Sí
          </label>
          <label>
            <input type="radio" name='prestado' id='no' value='no' checked={disco.prestado==="no"} onChange={(e)=>{actualizarDisco(e)}}/>No
          </label>
        </div>
        <br />
        <input type="button" name='guardar' value='Guardar' />
      </form>
    </>
  )
}

export default InsertarDiscos

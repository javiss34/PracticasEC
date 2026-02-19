import React from 'react'
import Perfil from './Perfil'
import usePerfiles from '../hooks/usePerfiles'
import './mostrarPerfil.css'

const MostrarPerfil = () => {
    const{perfil} = usePerfiles();

  return (
    <div className='card-perfil'>
        {!perfil ? "...CARGANDO" : <Perfil perfil={perfil}/>}
    </div>
  )
}

export default MostrarPerfil

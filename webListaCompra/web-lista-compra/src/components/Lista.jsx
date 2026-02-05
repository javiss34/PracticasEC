import React from 'react'

const Lista = ({lista}) => {
  return (
    <div className='card-lista'>
      <h2>{lista.nombre_lista}</h2>
    </div>
  )
}

export default Lista

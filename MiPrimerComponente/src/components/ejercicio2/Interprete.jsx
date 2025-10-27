import React from 'react';
import './Interprete.css';

const Interprete = (props) => {
  return (
    <div className='interprete_alerta'>
            <img src={props.foto} alt={`Foto de ${props.nombre}`} className='foto'></img>
    
        <div className='texto'>
            <h2>{props.nombre}</h2>
            <p>{props.children}</p>
        </div>

    </div>
  )
}

export default Interprete;

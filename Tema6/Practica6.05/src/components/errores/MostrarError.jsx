import React from 'react';
import './mostrarError.css';

const MostrarError = ({errores}) => {
  return (
    <div className={errores.length ? "errores" : "sinErrores"}>
      {errores.length ? errores.map((error,i) => (
        <p key={i}>{error}</p>
      )):
      null
    }
    </div>
  )
}

export default MostrarError

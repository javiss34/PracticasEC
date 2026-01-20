import React from 'react';
import '../pages/insertarDiscos.css';

const MostrarError = ({errores}) => {
  return (
    <div className={errores.length ? "errores" : "sinErrores"}>
      {errores.length && errores.map((error,i) => (
        <p key={i}>{error}</p>
      ))
    }
    </div>
  )
}

export default MostrarError

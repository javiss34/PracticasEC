import React from 'react';
import {useNavigate} from 'react-router-dom';
import './BotonInicio.css'
/* He hecho este componente para no tener que reptir el mismo botón en todas las páginas */
const BotonInicio = () => {
    const navegar = useNavigate();
  return (
    <>
        <button  className="boton_inicio" onClick={() => {
            navegar("/");
        }}>
            Volver a inicio
        </button>
    </>
  )
}

export default BotonInicio

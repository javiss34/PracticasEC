import React from "react";
import './confirmacionBorrar.css';

const ConfirmacionBorrar = ({mostrar,mensaje,cancelar,confirmar}) => {
  //mostrar será un estado que si es false no devuelve nada y si es true devuelve el mensaje de confirmación.
    if(!mostrar){
        return null;
    }

  return (
  <div className="mensaje_confirmacion">
    <p>{mensaje}</p>
    <div className="boton_rechazar">
        <input type="button" value="Cancelar" onClick={cancelar} />
    </div>
    <div className="boton_confirmar">
        <input type="button" value="Confirmar" onClick={confirmar}/>
    </div>

  </div>
  );
};

export default ConfirmacionBorrar;

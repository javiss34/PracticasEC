import React, { useState } from 'react';
import './ContadorLimite.css';

const ContadorLimite = () => {
    let[contador,setContador]=useState(0);
    const incrementar = () => {
        let contadorIncrementado = contador + 1;
        setContador(contadorIncrementado);
    }
    const decrementar = () => {
        let contadorDecrementado = contador - 1;
        setContador(contadorDecrementado);
    }
  return (
    <div className='contador_limite'>
        <h1>CONTADOR CON LÍMITES</h1>
        <h1>{contador}</h1>
        <p className='contador_limite_botones'>
            <button disabled={contador===0} onClick={decrementar}>Decrementar</button>{/* Desactivo el botón de decrementar si el contador es 0 */}
            <button disabled={contador===10} onClick={incrementar}>Incrementar</button> {/* Desactivo el botón de incrementar si el contador es 10 */}
        </p>
      
    </div>
  )
}

export default ContadorLimite

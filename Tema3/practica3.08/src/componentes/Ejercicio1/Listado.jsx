import React, { useState } from 'react';
import './Listado.css';

const Listado = () => {
    let arrayNumeros = [];
    let[numeros,setNumeros]=useState(arrayNumeros);

    const generarNumero = () => {
        let numeroAleatorio;
        do{
          numeroAleatorio = Math.floor(Math.random() * (100) + 1);
        } while (numeros.includes(numeroAleatorio));//Mientras el numero alatorio esté en el array, se repite el bucle.
        setNumeros([...numeros,numeroAleatorio]);
    }

    const eliminar = () => {
      setNumeros([]);
    }

  return (
    <div className='contenedor_listado'>
      {/* Si metía el listado en un p me salataba un error en consola diciendo que no puede haber ul dentro de p*/}
          <h1>LISTADO NÚMEROS</h1>
          <ul className='listado'>
            {/*Le tengo que poner una clave al valor para que no salga error por consola */}
            {numeros.map((v,i) => {
              return <li key={i}>{v}</li>
            })}
          </ul>
          <div className='botones_listado'>
        <button disabled={numeros.length===100} onClick={generarNumero}>Generar</button>{/* He hecho que cuando llegue a 100 numeros se desactive el botón de generar, sino se peta ya que no hay más números*/}
        <button disabled={numeros.length===0} onClick={eliminar}>Eliminar</button>{/* También hago que si el array está vacío se deshabilite el botón de eliminar */}
          </div>
    </div>
  )
}

export default Listado

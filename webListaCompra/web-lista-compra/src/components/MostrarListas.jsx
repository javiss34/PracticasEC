import React from 'react'
import useListas from '../hooks/useListas';
import Lista from './Lista.jsx';
import './mostrarListas.css';
import { useNavigate } from 'react-router-dom';
import useSesion from '../hooks/useSesion.js';

const MostrarListas = () => {
    const {listas} = useListas();
    const navegar = useNavigate();
    const {sesionIniciada} = useSesion();

  return (
    <div className='contenedor_lista'>
        {sesionIniciada && (
           <input type="button" value="Insertar Nueva Lista" className='boton_insertar' onClick={()=>{
            navegar('/insertar_lista')
           }}/>
        )}
        <div className='lista_listas'>
            {listas.length > 0 ? (
                listas.map((lista) => (
                    <Lista lista={lista} key={lista.id}/>
                ))
            ): (
                <h2 className='lista_vacia'>No hay nunguna lista creada</h2>
            )}
        </div>
    </div>
  )
}

export default MostrarListas

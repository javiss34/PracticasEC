import React, { useContext } from 'react';
import { contextoDiscos } from '../context/ProveedorDiscos.jsx';
import Disco from './Disco.jsx';
import './listarDiscos.css';

const ListarDiscos = () => {
  const {discos} = useContext(contextoDiscos);

  return (
    <div className='lista_discos'>
      {discos.length && Array.isArray(discos) ? 
        discos.map((disco) => {
         return <Disco key={disco.id} disco={disco}/>
        })
        :
        <h3>No hay discos</h3>
      
    }
      
    </div>
  )
}

export default ListarDiscos

import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <>
        <nav>
            <Link className='menu-elemento' to='/'>Inicio</Link>
            <Link className='menu-elemento' to='/insertar-discos'>Insertar Discos</Link>
            <Link className='menu-elemeto' to='/listar-discos'>Listar Discos</Link>  
        </nav>
    </>
  )
}

export default Menu

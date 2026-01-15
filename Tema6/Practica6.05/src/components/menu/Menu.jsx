import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
    <>
        <nav>
            <Link className='menu-elemento' to='/'>Inicio</Link>
            <Link className='menu-elemento' to='/insertar-discos'>Insertar Discos</Link>
            <Link className='menu-elemeto' to='/lista-discos'>Lista Discos</Link>  
        </nav>
    </>
  )
}

export default Menu

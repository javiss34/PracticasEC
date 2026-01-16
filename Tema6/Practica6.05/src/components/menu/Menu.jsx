import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
    <>
        <nav>
            <Link className='menu-elemento' to='/'>INICIO</Link>
            <Link className='menu-elemento' to='/insertar-discos'>INSERTAR DISCOS</Link>
            <Link className='menu-elemento' to='/lista-discos'>LISTA DISCOS</Link>  
        </nav>
    </>
  )
}

export default Menu

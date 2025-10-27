import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <>
      <nav>
        <Link className='menu' to='/'>
        Inicio
        </Link>
        <Link className='menu' to='/Contacto'>
        Contacto
        </Link>
        <Link className='menu' to='/acerca_de'>
        Acerca de
        </Link>
        <Link className='menu' to='/productos'>
        Productos
        </Link>
      </nav>
    </>
  )
}

export default Menu;

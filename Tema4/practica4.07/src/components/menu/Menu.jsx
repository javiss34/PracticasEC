import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <>
      <nav className='menu_completo'>
        <Link className='menu' to='/'>Inicio</Link>
        <Link className='menu' to='/peliculas'>Películas</Link>
        <Link className='menu' to='/interpretes'>Interpretes</Link>
        <Link className='menu' to='/galeria'>Galeria</Link>
        <Link className='menu' to='/acerca-de'>Acerca de</Link>
      </nav>
    </>
  )
}

export default Menu;

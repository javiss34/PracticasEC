import React from 'react';
import Menu from './menu/Menu.jsx';
import Rutas from '../routes/Rutas.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Content = () => {
  return (
    <div>
        <Header/>
        <Menu/>
        <Rutas/>
        <Footer/>
    </div>
  )
}

export default Content

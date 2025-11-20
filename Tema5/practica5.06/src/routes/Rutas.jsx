import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import InsertarDiscos from '../pages/InsertarDiscos.jsx';
import ListarDiscos from '../pages/ListarDiscos.jsx';

const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/insertar-discos' element={<InsertarDiscos/>}/>
            <Route path='/listar-discos' element={<ListarDiscos/>}/>
        </Routes>

    </>
  )
}

export default Rutas

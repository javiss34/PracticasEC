import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import FormularioInsertarDiscos from '../pages/FormularioInsertarDiscos.jsx';
import MostrarDiscos from '../pages/MostrarDiscos.jsx'

const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/insertar-discos' element={<FormularioInsertarDiscos/>}/>
            <Route path='/lista-discos' element={<MostrarDiscos/>}/>
            <Route path='/editar/:id' element={<FormularioInsertarDiscos/>}/>
        </Routes>

    </>
  )
}

export default Rutas

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContadorLimite from './componentes/Ejercicio2/ContadorLimite.jsx';
import ContadorLikes from './componentes/Ejercicio3/ContadorLikes.jsx';
import Listado from './componentes/Ejercicio1/Listado.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Listado/>
      <ContadorLimite/>
      <ContadorLikes/>
    </>
  )
}

export default App

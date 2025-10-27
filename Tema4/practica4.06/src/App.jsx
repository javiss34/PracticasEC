import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rutas from './routes/Rutas.jsx';
import Menu from './menu/menu.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <Rutas/>
    </>
  )
}

export default App

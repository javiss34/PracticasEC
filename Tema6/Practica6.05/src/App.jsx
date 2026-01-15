import './App.css';
import Menu from './components/menu/Menu.jsx'
import Rutas from './routes/Rutas.jsx'
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ProveedorDiscos from './context/ProveedorDiscos.jsx';

function App() {

  return (
    <>
    <div>
      <ProveedorDiscos>
        <Header/>
        <Menu/>
        <Rutas/>
        <Footer/>
      </ProveedorDiscos>
    </div>
    </>
  )
}

export default App

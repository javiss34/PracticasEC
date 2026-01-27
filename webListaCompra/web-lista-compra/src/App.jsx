import "./App.css";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Menu from "./components/menu/Menu.jsx";
import ProveedorSesion from "./context/ProveedorSesion.jsx";
import ProveedorProductos from "./context/ProveedorProductos.jsx";
import Rutas from "./routes/Rutas.jsx";

function App() {
  return (
    <>
      <ProveedorSesion>
        <ProveedorProductos>
          <Header />
          <Menu />
          <Rutas />
          <Footer />
        </ProveedorProductos>
      </ProveedorSesion>
    </>
  );
}

export default App;

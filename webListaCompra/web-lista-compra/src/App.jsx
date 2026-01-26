import "./App.css";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Menu from "./components/menu/Menu.jsx";
import ProveedorSesion from "./context/ProveedorSesion.jsx";
import Rutas from "./routes/Rutas.jsx";

function App() {
  return (
    <>
      <ProveedorSesion>
          <Header />
            <Menu />
            <Rutas />
            <Footer />
      </ProveedorSesion>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";
import "./menu.css";
import useSesion from "../../hooks/useSesion.js";

const Menu = () => {
  const { sesionIniciada } = useSesion();
  return (
    <nav className="sub-menu">
      <Link className="menu-elemento" to="/">
        Inicio
      </Link>
      {/* Si la sesión está iniciada se muestra también la parte listado */}
      <Link className="menu-elemento" to="/listado">
        Productos
      </Link>
      {sesionIniciada && (
        <>
          <Link className="menu-elemento" to="/mostrar_listas">
            Listas
          </Link>
        </>
      )}
    </nav>
  );
};

export default Menu;

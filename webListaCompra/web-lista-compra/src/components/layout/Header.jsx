import { Link } from "react-router-dom";
import "./header.css";
import useSesion from "../../hooks/useSesion.js";
import { useEffect } from "react";

const Header = () => {
  const { sesionIniciada, cerrarSesion,datosUsuario } = useSesion();

  const nombre = datosUsuario?.user_metadata?.nombre || "...Cargando";

  return (
    <header className="main-header">
      <div className="header-content">
        <h1>Mi Lista De La Compra</h1>
        <Link to='/'>
        <h2 className="header-icon">🛒</h2>
        </Link>
      </div>

      <div className="header-auth">
        {sesionIniciada ? (
          <>
            <h3>Hola {nombre}</h3>
            <input
              type="button"
              id="boton_cerrar_sesion"
              className="boton_cerrar_sesion"
              value="Cerrar Sesion"
              onClick={() => {
                cerrarSesion();
              }}
            />
          </>
        ) : (
          <Link to="/iniciar_sesion">
            <button className="login-btn">
              <div className="user-image-container">
                <img
                  src="https://images.icon-icons.com/2483/PNG/512/user_icon_149851.png"
                  alt="Usuario"
                  className="user-avatar-img"
                />
              </div>
              <p className="login-text">Iniciar Sesión</p>
            </button>
          </Link>
        )}
      </div>
      
    </header>
  );
};

export default Header;

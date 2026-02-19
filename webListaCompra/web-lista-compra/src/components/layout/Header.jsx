import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import useSesion from "../../hooks/useSesion.js";
import ConfirmacionBorrar from "../ConfirmacionBorrar.jsx";
import { useState } from "react";
import usePerfiles from "../../hooks/usePerfiles.js";

const Header = () => {
  const { sesionIniciada, cerrarSesion, datosUsuario } = useSesion();
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const navegar = useNavigate();
  const { perfil } = usePerfiles();


  const nombre = perfil?.nombre || "Usuario";
  const fotoPerfil =
    perfil?.imagen_url ||
    "https://cdn-icons-png.flaticon.com/512/6326/6326055.png";

  return (
    <>
      <header className="main-header">
        <div className="header-content">
          <h1>Mi Lista De La Compra</h1>
          <Link to="/">
            <h2 className="header-icon">🛒</h2>
          </Link>
        </div>

        <div className="header-auth">
          {sesionIniciada ? (
            <>
              <Link to={`/perfil/${datosUsuario?.id}`} className="enlace_perfil">
              <h3>Hola, {nombre}</h3>
              <img src={fotoPerfil} alt="Mi perfil" className="foto_usuario"/>
              </Link>
              <input
                type="button"
                id="boton_cerrar_sesion"
                className="boton_cerrar_sesion"
                value="Cerrar Sesion"
                onClick={() => {
                  setMostrarConfirmacion(true);
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
      <ConfirmacionBorrar
        mostrar={mostrarConfirmacion}
        mensaje={`¿Seguro que quieres cerrar sesión?`}
        confirmar={() => {
          cerrarSesion();
          setMostrarConfirmacion(false);
          navegar("/iniciar_sesion");
        }}
        cancelar={() => setMostrarConfirmacion(false)}
      />
    </>
  );
};

export default Header;

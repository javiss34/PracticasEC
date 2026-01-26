import React from "react";
import { Link } from "react-router-dom";
import useSesion from "../hooks/useSesion.js";
import "./inicio.css";

const Inicio = () => {
  const { sesionIniciada } = useSesion();

  return (
    <div className="inicio-container">
      
      <section className="hero-section">
        <h1 className="titulo-principal">
          Organiza tu mundo <span className="texto-destacado">digital</span>
        </h1>
        <p className="slogan">
          La mejor forma de gestionar tu colección de discos y listas de la compra
          en un solo lugar. Rápido, seguro y en la nube.
        </p>

        <div className="acciones">
          {sesionIniciada ? (
            <Link to="/listado" className="boton-inicio primario">
              🚀 Ir a mi Colección
            </Link>
          ) : (
            <>
              <Link to="/registrarse" className="boton-inicio primario">
                Empezar Ahora
              </Link>
            </>
          )}
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <div className="icono">⚡</div>
          <h3>Rápido</h3>
          <p>Tus datos se sincronizan al instante gracias a Supabase.</p>
        </div>

        <div className="feature-card">
          <div className="icono">🔒</div>
          <h3>Seguro</h3>
          <p>Autenticación robusta y protección de tus datos privados.</p>
        </div>

        <div className="feature-card">
          <div className="icono">📱</div>
          <h3>Accesible</h3>
          <p>Consulta tu lista desde el móvil, tablet u ordenador.</p>
        </div>
      </section>

    </div>
  );
};

export default Inicio;

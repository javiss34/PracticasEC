// Header.jsx
import './header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <span className="header-icon">🛒</span>
        <h1>Mi Lista De La Compra</h1>
      </div>

      <div className="header-auth">
        <button className="login-btn">
          <div className="user-image-container">
            <img 
              src="https://images.icon-icons.com/2483/PNG/512/user_icon_149851.png" 
              alt="Usuario" 
              className="user-avatar-img" 
            />
          </div>
          <span className="login-text">Iniciar Sesión</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
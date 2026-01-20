import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
    <nav className="sub-menu">
      <Link className='menu-elemento' to='/'>Inicio</Link>
      <Link className='menu-elemento' to='/listado'>Listado</Link>
      
    </nav>
  );
};

export default Menu;
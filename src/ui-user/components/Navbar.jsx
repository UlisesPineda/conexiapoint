import { Link, NavLink } from 'react-router-dom';
import './styles/Navbar.css';

export const Navbar = () => {
  return (
    <nav className='main-user-navbar'>
        <Link
          to='/' 
          className='logo-container'
        >
          <img src="/img/logo-green.png" alt="Logo de Conexia Point" />
        </Link>
        <div className="links-container">
          <NavLink
            to="/registro"
            title='Crea una cuenta'
            className="link-menu"
            >
            REGISTRO
          </NavLink>
          <NavLink
            to="/entrar"
            title='Inicia Sesión'
            className="link-menu"
          >
            ENTRAR
          </NavLink>
        </div>
    </nav>
  );
};

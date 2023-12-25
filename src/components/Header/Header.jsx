import { Link, useLocation } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <header>
      <nav>
        <ul className={css.header}>
          <li>
            <Link className={isHome ? css.active : ''} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={!isHome ? css.active : ''} to="/movies">
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

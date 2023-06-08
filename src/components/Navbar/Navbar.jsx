// CORE
import { Link, NavLink, useLocation } from 'react-router-dom';

// STYLE
import styles from './Navbar.module.scss';

export const Navbar = () => {

  const locale = useLocation();

  return (
    <header>
      <NavLink className={styles.navigation}>
        <Link className={styles.link} to='/'>
          Home
        </Link>
        <Link className={styles.link} to='/aboutme'>
          About me
        </Link>
      </NavLink>
    </header>
  )
}
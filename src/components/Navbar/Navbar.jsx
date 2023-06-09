// CORE
import { NavLink } from 'react-router-dom';

// STYLE
import styles from './Navbar.module.scss';
import { MenuLink } from '../NavLink/MenuLink';

export const Navbar = () => {

  return (
    <header>
      <NavLink className={styles.navigation}>
        <MenuLink to='/'>
          Home
        </MenuLink>
        <MenuLink to='/aboutme'>
          About me
        </MenuLink>
      </NavLink>
    </header>
  )
}
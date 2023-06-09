// CORE
import { NavLink } from 'react-router-dom';

// STYLE
import styles from './MenuLink.module.scss';

export const MenuLink = ({ children, to }) => {

  return (
    <NavLink
      className={({ isActive }) => `
          ${styles.link}
          ${isActive ? styles.currentLink : ""}
      `}
      to={to}
      end
    >
      {children}
    </NavLink>
  )
}
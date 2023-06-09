// STYLE
import styles from './Footer.module.scss';

import { ReactComponent as Mark } from 'assets/mark.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Mark />
      Developed by Kaike Oliveira
    </footer>
  )
}
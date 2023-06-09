// STYLE
import styles from './Button.module.scss';

export const Button = ({ children, size }) => {
  return (
    <button className={`${styles.button} ${styles[size]}`}>
      {children}
    </button>
  )
}
// STYLE
import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import { Button } from 'components/Button/Button';

// IMAGE
import error404 from 'assets/erro_404.png';

export const NotFound = () => {

  const surf = useNavigate();

  return (
    <>
      <div className={styles.contentContainer}>
        <span className={styles.text404}>404</span>
        <h1 className={styles.title}>
          Sorry, page not found!
        </h1>
        <p className={styles.pagraph}>
          Are you sure this is what you were looking for?
        </p>
        <p className={styles.pagraph}>
          Wait a few moments and reload the page or return to the home screen!
        </p>
        <div
          className={styles.button}
          onClick={() => surf("/")}
        >
          <Button size="lg">Back</Button>
        </div>
        <img
          className={styles.imageError}
          src={error404}
          alt='error 404'
        />
      </div>
      <div className={styles.blankSpace}></div>
    </>
  )
}
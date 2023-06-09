// STYLE
import styles from './Banner.module.scss';

// IMAGES
import circle from 'assets/circle.png';
import profile from 'assets/profile-pic.png';

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>Hello World</h1>
        <p className={styles.pagraph}>
          Hey there! I'm a front-end developer, and I'd love to share my projects and learning journey with you. Check out my work on GitHub. Let's dive into the world of front-end development together!
        </p>
      </div>
      <div className={styles.images}>
        <img
          className={styles.circle}
          src={circle}
          aria-hidden={true}
          alt='circle'
        />
        <img 
          className={styles.myPhoto}
          src={profile}
          alt='Kaike-Oliveira'
        />
      </div>
    </div>
  )
}
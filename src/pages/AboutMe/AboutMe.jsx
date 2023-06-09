// STYLE
import styles from './AboutMe.module.scss';

// COMPONENTS
import { ModelPost } from 'components/ModelPost/ModelPost';

// IMAGES
import coverPhoto from 'assets/aboutme.png';
import myPhoto from 'assets/profile-pic.png';

export const AboutMe = () => {
  return (
    <ModelPost title="About me" coverPhoto={coverPhoto} >
      <h3 className={styles.subtitle}>
        Whats up I'm Kaike Oliveira!
      </h3>
      <img className={styles.aboutMePhoto} src={myPhoto} alt='profile' />
    </ModelPost>
  )
}
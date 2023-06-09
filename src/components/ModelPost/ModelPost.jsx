// STYLE
import styles from './ModelPost.module.scss';

export const ModelPost = ({ coverPhoto, title, children }) => {
  return (
    <article className={styles.modelPostContainer}>
      <div
        className={styles.coverPhoto}
        style={{ backgroundImage: `url(${coverPhoto})` }}
      ></div>

      <h2 className={styles.title}>
        {title}
      </h2>

      <div className={styles.contentPostContainer}>
        {children}
      </div>

    </article>
  )
}
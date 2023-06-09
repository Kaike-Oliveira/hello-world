// STYLE
import { Link } from 'react-router-dom';
import styles from './Post.module.scss';

// COMPONENTS
import { Button } from 'components/Button/Button';

export const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img 
          className={styles.cover}
          src={`/assets/posts/${post.id}/capa.png`}
          alt='Post cover'
        />

        <h2 className={styles.title}>{post.title}</h2>

        <Button>Read</Button>
      </div>
    </Link>
  )
}
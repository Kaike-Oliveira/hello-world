// STYLE
import styles from './Home.module.scss';

// COMPONENTS
import { PostCard } from 'components/PostCard/PostCard';

// POSTS
import posts from 'json/posts.json';

export const Home = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}
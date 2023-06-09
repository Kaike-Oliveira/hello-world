// STYLE
import styles from './Home.module.scss';

// COMPONENTS
import { Post } from 'components/Post/Post';

// POSTS
import posts from 'json/posts.json';

export const Home = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  )
}
// CORE
import { useParams } from "react-router-dom"
import { ModelPost } from "components/ModelPost/ModelPost";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// POSTS
import posts from 'json/posts.json';

// STYLE
import './Post.css';

// PAGES
import { NotFound } from "pages/NotFound/NotFound";

export const Post = () => {
  const parameters = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameters.id);
  });

  if (!post) {
    return <NotFound />
  } else {
    return (
      <ModelPost 
        coverPhoto={`/assets/posts/${post.id}/capa.png`}
        title={post.title}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>
          {post.text}
          </ReactMarkdown>
        </div>
      </ModelPost>
    )
  }
}

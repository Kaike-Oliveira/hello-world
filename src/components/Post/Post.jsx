// CORE
import { useParams } from "react-router-dom"
import posts from 'json/posts.json';
import { ModelPost } from "components/ModelPost/ModelPost";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// STYLE
import './Post.css';

export const Post = () => {
  const parameters = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parameters.id);
  });

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

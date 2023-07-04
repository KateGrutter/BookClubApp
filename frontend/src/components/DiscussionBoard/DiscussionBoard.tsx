import { useContext, useEffect } from "react";
import { Post } from "../../models/Post";
import { PostForm } from "./PostForm";
import { UserPost } from "./UserPost";
import "./DiscussionBoard.css";
import BookContext from "../../contexts/BookContext";
import { getPosts } from "../../services/PostService";

export function DiscussionBoard() {
  // const [posts, setPosts] = useState<Post[]>([]);
  const { listPosts, addListPost, loadPosts } = useContext(BookContext);

  useEffect(() => {
    getPosts().then((data) => {console.log(data);loadPosts(data)});
  }, []);
  

  return (
    <div className="discussion-posts">
      <PostForm
        onSubmitForm={(newPost: Post) => addListPost(newPost)}
      ></PostForm>
      <div className="post-container">
        {listPosts.slice(0).reverse().map((post, i) => (
          <UserPost post={post} key={i}></UserPost>
          // <UserPost post={newPost} key={i}></UserPost>
        ))}
      </div>
    </div>
  );
}
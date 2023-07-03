import { useContext, useEffect, useState } from "react";
import { Post } from "../../models/Post";
import { PostForm } from "./PostForm";
import { UserPost } from "./UserPost";
import Modal from "react-modal";
import "./DiscussionBoard.css";
import BookContext from "../../contexts/BookContext";
import { getPost } from "../../services/PostService";

export function DiscussionBoard() {
  // const [posts, setPosts] = useState<Post[]>([]);
  const { listPosts, addListPost } = useContext(BookContext);

  useEffect(() => {
    getPost().then((data) => addListPost(data));
  }, []);
  console.log(listPosts)

  return (
    <div className="discussion-posts">
      <PostForm
        onSubmitForm={(newPost: Post) => addListPost(newPost)}
      ></PostForm>
      <div className="post-container">
        {listPosts.map((post, i) => (
          <UserPost post={post} key={i}></UserPost>
          // <UserPost post={newPost} key={i}></UserPost>
        ))}
      </div>
    </div>
  );
}

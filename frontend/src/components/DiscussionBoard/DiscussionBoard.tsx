import { useContext, useEffect, useState } from "react";
import { Post } from "../../models/Post";
import { PostForm } from "./PostForm";
import { UserPost } from "./UserPost";
import Modal from "react-modal";
import "./DiscussionBoard.css";
import BookContext from "../../contexts/BookContext";
import { getPost } from "../../services/PostService";

export function DiscussionBoard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { listPosts, addListPost } = useContext(BookContext);

  useEffect(() => {
    getPost().then((data) => addListPost(data));
  }, []);

  return (
    <div className="discussion-posts">
      <PostForm
        onSubmitForm={(newPost: Post) => setPosts([...posts, newPost])}
      ></PostForm>
      <div className="post-container">
        {listPosts.map((post) => (
          <UserPost post={post}></UserPost>
        ))}
      </div>
    </div>
  );
}

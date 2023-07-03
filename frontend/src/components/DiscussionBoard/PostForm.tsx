import { useState } from "react";
import { Post } from "../../models/Post";
import { addPost } from "../../services/PostService";
import "./PostForm.css";

export function PostForm(props: { onSubmitForm: (post: Post) => void }) {
  const [userName, setUserName] = useState("");
  const [thought, setThought] = useState("");

  function handleFormSubmit(e: any) {
    e.preventDefault();

    const newPost = {
      userName,
      thought: thought,
    };
    setThought("");
    addPost(newPost).then((data) => props.onSubmitForm(data));
  }

  return (
    <div className="post-form">
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <textarea
          className="post-form-textarea-post"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        ></textarea>
        <button className="post-button submit" type="submit">Post</button>
      </form>
    </div>
  );
}

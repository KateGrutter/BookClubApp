import { useContext, useState } from "react";
import { Post } from "../../models/Post";
import { addPost } from "../../services/PostService";
import "./PostForm.css";
import AuthContext from "../../AuthContext";

export function PostForm(props: { onSubmitForm: (post: Post) => void }) {
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState("");
  const [thought, setThought] = useState("");
  const { currentUser } = useContext(AuthContext);

  function handleFormSubmit(e: any) {
    e.preventDefault();

    const newPost = {
      userName: currentUser!.displayName!,
      thought: thought,
      date: new Date().toISOString().substring(0, 10)
    };
    // setThought("");
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
        <button className="post-button submit" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

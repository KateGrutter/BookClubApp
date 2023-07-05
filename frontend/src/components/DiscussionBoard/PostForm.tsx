import { useContext, useState } from "react";
import { Post } from "../../models/Post";
import { addPost } from "../../services/PostService";
import "./PostForm.css";
import AuthContext from "../../AuthContext";

export function PostForm(props: { onSubmitForm: (post: Post) => void }) {
  
  const [thought, setThought] = useState("");
  const { currentUser } = useContext(AuthContext);

  function handleFormSubmit(e: any) {
    e.preventDefault();

    const newPost = {
      userName: currentUser!.displayName!,
      thought: thought,
      date: new Date().toISOString().substring(0, 10)
    };
    
    // addPost(newPost).then((data) => props.onSubmitForm(data));
    addPost(newPost).then((data) => {
      props.onSubmitForm(data);
      setThought(""); // Clear the thought value after form submission
    });

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

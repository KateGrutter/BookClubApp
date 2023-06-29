import { useState } from "react";
import { Post } from "../../models/Post";




export function PostForm(props: { onSubmitForm: (post: Post) => void} ) {
    const [userName, setUserName] = useState('');
    const [thought, setThought] = useState('');

    function handleFormSubmit(e: any) {
        e.preventDefault();

        const post = {
            userName, thought
        };
        setThought('');
        props.onSubmitForm(post);
    }
    
    return(
        <div className="post-form">
            
            <form onSubmit={handleFormSubmit}>

            <textarea value={thought} onChange={e => setThought(e.target.value)}></textarea>
            <button className="post-button">Post</button>
            </form>
        </div>
    )
}
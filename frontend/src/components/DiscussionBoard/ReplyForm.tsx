
import { useState } from "react";
import { Post } from "../../models/Post";




export function ReplyForm(props: { onSubmitForm: (post: Post) => void, onClose: () => void} ) {
    const [userName, setUserName] = useState('');
    const [thought, setThought] = useState('');

    function handleFormSubmit(e: any) {
        e.preventDefault();

        const post = {
            userName, thought
        };
        
        props.onSubmitForm(post);
        props.onClose()
    }
    
    return(
        <div className="post-form">
            
            <form onSubmit={handleFormSubmit}>

            <textarea value={thought} onChange={e => setThought(e.target.value)}></textarea>
            <button>Post</button>
            </form>
        </div>
    )
}
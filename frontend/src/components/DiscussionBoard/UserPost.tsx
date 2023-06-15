import { useState } from "react";
import { Post } from "../../models/Post";
import  Modal from "react-modal";
import { PostForm } from "./PostForm";
import { ReplyForm } from "./ReplyForm";
import { ReplyPost } from "./ReplyPost";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root')

export function UserPost(props: {post: Post}) {
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const [posts, setPosts] =useState<Post[]>([])
    
    function closeModal() {
        setIsOpen(false)
    }
    
    return(
            <div className="post">
                <h3>{props.post.userName}</h3>
                <p>{props.post.thought}</p>
                <button className="reply" onClick={() => setIsOpen(true)}>Reply</button>
                <div className="reply-container">
                {
                    posts.map((post, i) => <ReplyPost post={post} key={i}></ReplyPost>)
                }
            </div>
                <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        >
            <ReplyForm onSubmitForm={(newPost: Post) => setPosts([...posts, newPost])} onClose={closeModal} ></ReplyForm>
        </Modal>
            </div>
    )
}
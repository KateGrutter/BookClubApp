import { useState } from "react"
import { Post } from "../../models/Post"
import { PostForm } from "./PostForm"
import { UserPost } from "./UserPost"
import Modal from "react-modal"


export function DiscussionBoard() {
    const [posts, setPosts] = useState<Post[]>([])
    
    
    return (
        
        <div className="discussion-posts">
            <PostForm onSubmitForm={(newPost: Post) => setPosts([...posts, newPost])}></PostForm>
            <div className="post-container">
                {
                    posts.map((post, i) => <UserPost post={post} key={i}></UserPost>)
                }
            </div>
           
        </div>
    )
}
import { Post } from "../../models/Post";


export function ReplyPost(props: {post: Post}) {
    return(
        <div className="reply-post">
            <h3>{props.post.userName}</h3>
            <p>{props.post.thought}</p>
        </div>
    )
}
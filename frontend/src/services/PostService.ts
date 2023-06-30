import axios from "axios";
import { Post } from "../models/Post";



export function addPost(post: Post) {
    return axios
        .post(`http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/posts`, post)
        .then(response => response.data)
}

export function getPost() {
    return axios
    .get(`http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/posts`)
    .then(response => response.data)
}
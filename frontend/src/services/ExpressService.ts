import axios from "axios";
import { User } from "../models/User";

export function getUsers() {
    return axios
        .get(`http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/users`)
        .then((response) => response.data);
}

export function getUserById(id: string): Promise<User> {
    return axios
        .get(`http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/users/${id}`)
        .then((response) => response.data)
}

export function getUserByEmail(email: string): Promise<User> {
    return axios
        .get(`http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/users/${email}`)
        .then((response) => response.data)
}
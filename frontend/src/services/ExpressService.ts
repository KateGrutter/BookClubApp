import axios from "axios";

export function getUsers() {
    return axios
        .get(`http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/users`)
        .then((response) => response.data);
}

export function getUserById(id: string) {
    return axios
        .get(`http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/users${id}`)
        .then((response) => response.data)
}
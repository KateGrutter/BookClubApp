import axios from "axios";
import { Meeting } from "../models/Meeting";

export function addMeeting(meeting: Meeting) {
    return axios
        .post(`http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/pastmeetings`, meeting)
        .then(response => response.data)
}

export function getMeeting(meeting: Meeting) {
    return axios
    .get(`http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/pastmeetings`)
    .then(response => response.data.length -1)
}

import axios from "axios";
import { Meeting } from "../models/Meeting";

export function addMeeting(meeting: Meeting) {
    return axios
<<<<<<< HEAD
    .post(`http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/pastmeetings`, meeting)
    .then(response => response.data)
    }
=======
        .post(`http://127.0.0.1:5001/bookclubapp-41e2d/us-central1/api/pastmeetings`, meeting)
        .then(response => response.data)
}
>>>>>>> dc029b92b12290f041cd2b9fc5ab973a780acbda

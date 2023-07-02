import { Meeting } from "../../models/Meeting";
import "./NextMeeting.css";

export function NextMeeting(props: { meeting: Meeting }) {
  return (
    <div className="next-meeting">
      <h4>You're Invited!</h4>
      <p className="meeting-date">
        Join us for an upcoming event on {props.meeting?.date} at{" "}
        {props.meeting?.time}.
      </p>
      <p>Location: {props.meeting?.location}</p>
      <p>Additional Details: {props.meeting?.information}</p>
    </div>
  );
}

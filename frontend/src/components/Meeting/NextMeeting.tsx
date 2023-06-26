import { Meeting } from "../../models/Meeting";
import "./NextMeeting.css";

export function NextMeeting(props: { meeting: Meeting }) {
  return (
    <div>
      <h4>You are invited</h4>
      <p>
        When? {props.meeting?.date} at {props.meeting?.time}
      </p>
      <p>Where? {props.meeting?.location}</p>
      <p>Details: {props.meeting?.information}</p>
    </div>
  );
}

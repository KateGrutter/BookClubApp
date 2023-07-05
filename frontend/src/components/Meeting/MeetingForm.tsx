import { useState } from "react";
import { addMeeting } from "../../services/MeetingService";
import { Meeting } from "../../models/Meeting";
import "./MeetingForm.css";
export function MeetingForm(props: { onAdd: (meeting: Meeting) => void }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [information, setInformation] = useState("");
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  function buttonText() {
    return isFormOpen ? "Close" : "Add Next Meeting";
  }

  function onSubmit(e: any) {
    e.preventDefault();

    const newMeeting = {
      date: date,
      time: time,
      location: location,
      information: information,
    };
    addMeeting(newMeeting).then((data) => {
      props.onAdd(data);
      setDate('');
      setTime('');
      setLocation('');
      setInformation('');
    });
  }

  return (
    <div>
      <div className="meeting-form-container">
        {isFormOpen && (
          <form onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="date">Date</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="text"
            />
            <label htmlFor="time">Time</label>
            <input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="text"
            />
            <label htmlFor="location">Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
            />
            <label htmlFor="additional-info">Additional Information:</label>
            <input
              value={information}
              onChange={(e) => setInformation(e.target.value)}
              type="text"
            />
            <button className="submit" type="submit">
              Set Next Meeting
            </button>
          </form>
        )}
      </div>

      <button
        className="addMeetingButton"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        {buttonText()}
      </button>
    </div>
  );
}

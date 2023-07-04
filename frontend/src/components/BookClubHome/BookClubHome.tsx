import { CurrentBook } from "../CurrentBook/CurrentBook";
// import { DiscussionBoard } from "./DiscussionBoard/DiscussionBoard";
import { useContext, useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchBar/SearchResults";
import { DiscussionBoard } from "../DiscussionBoard/DiscussionBoard";
import { Book } from "../../models/Book";
import { Header } from "../Header/Header";
import { NextMeeting } from "../Meeting/NextMeeting";
import { Meeting } from "../../models/Meeting";
import { MeetingForm } from "../Meeting/MeetingForm";
import "./BookClubHome.css";
import AuthContext from "../../AuthContext";

export function BookClubHome() {
  const [books, setBooks] = useState<Book[]>([]);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const { currentUser } = useContext(AuthContext);

  function onAdd(newMeeting: Meeting) {
    setMeetings([...meetings, newMeeting]);
  }

  const lastMeeting = meetings[meetings.length - 1];

  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="book-club-home">
          <div className="feed-item">
            <div className="welcome-user">
              <h2>Welcome {currentUser?.displayName}</h2>
              <p className="welcome-message">
                We're excited to have you here in our book club community. Get
                ready to discover new books, engage in discussions, and connect
                with fellow book lovers.
              </p>
            </div>
            <div className="feed-item">
              <div className="current-read">
                <CurrentBook />
              </div>
              <div className="feed-item">
                <div className="searchbar">
                  <SearchBar
                    onSearch={(searchResults: Book[]) =>
                      setBooks(searchResults)
                    }
                  />
                  <SearchResults Books={books} />
                </div>
              </div>
              <div className="feed-item">
                <div className="meeting-form">
                  <NextMeeting meeting={lastMeeting} />
                  <MeetingForm onAdd={(meeting: Meeting) => onAdd(meeting)} />
                </div>
              </div>
            </div>
          </div>

          <div className="feed-item">
            <div className="discussion-board">
              <DiscussionBoard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

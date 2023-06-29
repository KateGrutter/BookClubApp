import { CurrentBook } from "../CurrentBook/CurrentBook";
// import { DiscussionBoard } from "./DiscussionBoard/DiscussionBoard";
import { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchBar/SearchResults";
import { DiscussionBoard } from "../DiscussionBoard/DiscussionBoard";
import { Book } from "../../models/Book";
import { Header } from "../Header/Header";
import { NextMeeting } from "../Meeting/NextMeeting";
import { Meeting } from "../../models/Meeting";
import { MeetingForm } from "../Meeting/MeetingForm";
import "./BookClubHome.css";

export function BookClubHome() {
  const [books, setBooks] = useState<Book[]>([]);
  const [meetings, setMeetings] = useState<Meeting[]>([]);

  function onAdd(newMeeting: Meeting) {
    setMeetings([...meetings, newMeeting]);
  }

  const lastMeeting = meetings[meetings.length - 1]

  return (
    <div className="book-club-home">
      <Header />
     <div className="current-feed-items"> 
     <div className="feed-item">
        <div className="meeting-form">
          <NextMeeting meeting={lastMeeting} />
          <MeetingForm onAdd={(meeting: Meeting) => onAdd(meeting)} />
          
        </div>
      </div>
      <div className="feed-item">
        <div className="current-read">
          <CurrentBook />
        </div>
      </div>
      
      </div>
      <div className="feed-item">
        <div className="discussion-board">
          <DiscussionBoard />
        </div>
      </div>
      <div className="feed-item">
        <div className="member-list">{/* <MemberList /> */}</div>
      </div>
      <div className="feed-item">
        <div>
          <SearchBar
            onSearch={(searchResults: Book[]) => setBooks(searchResults)}
          />
        </div>
      </div>
      <div className="feed-item">
        <div>
          <SearchResults Books={books} />
        </div>
      </div>
    </div>
  );
}

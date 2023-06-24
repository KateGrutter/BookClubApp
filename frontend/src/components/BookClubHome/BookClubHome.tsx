import { CurrentBook } from "../../CurrentBook/CurrentBook";
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
import { MemberList } from "../MemberList";
import { Login } from "../LoginForm/LoginForm";
import { NewUserForm } from "../NewUser/NewUserForm";
import { User } from "../../models/User";
import "./BookClubHome.css";

export function BookClubHome() {
  const [books, setBooks] = useState<Book[]>([]);
  const [meeting, setMeeting] = useState<Meeting>({
    date: "June 25",
    time: "11:00am",
    location: "6854 Woodbrook Dr SE",
    information: 'Please join us for brunch to discuss "Once Upon a Wardrobe"',
  });

  function onAdd(newMeeting: Meeting) {
    setMeeting(newMeeting);
  }

  return (
    <div className="book-club-home">
      <Header />
      <div className="feed-item">
        <div className="current-read">
          <CurrentBook />
        </div>
      </div>
      <div className="feed-item">
        <div className="meeting-form">
          <MeetingForm onAdd={(meeting: Meeting) => onAdd(meeting)} />
        </div>
      </div>
      <div className="feed-item">
        <div className="discussion-board">
          <DiscussionBoard />
        </div>
      </div>
      <div className="feed-item">
        <div className="member-list">
          <MemberList />
        </div>
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

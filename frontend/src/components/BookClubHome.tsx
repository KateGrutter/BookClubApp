import { CurrentBook } from "./CurrentBook";
// import { DiscussionBoard } from "./DiscussionBoard/DiscussionBoard";
import { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import { SearchResults } from "./SearchBar/SearchResults";
import { DiscussionBoard } from "./DiscussionBoard/DiscussionBoard";
import { Book } from "../models/Book";
import { Header } from "./Header/Header";
import { NextMeeting } from "./Meeting/NextMeeting";
import { Meeting } from "../models/Meeting";
import { MeetingForm } from "./Meeting/MeetingForm";
import { MemberList } from "./MemberList";

export function BookClubHome() {
  const [books, setBooks] = useState<Book[]>([]); // Declare a state variable 'books' using the useState hook, initialize it with an empty array. 'setBooks' is the function to update the 'books' state.
  const [meeting, setMeeting] = useState<Meeting>({
    date: "June 25",
    time: "11:00am",
    location: "6854 Woodbrook Dr SE",
    information: 'Please join us for brunch to discuss "Once Upon a Wardrobe"',
  });
  // function handleSearch(term: string): any {
  // setBooks(books)
  // }

  function onAdd(newMeeting: Meeting) {
    setMeeting(newMeeting);
  }

  return (
    <div>
      <Header></Header>
      <MeetingForm onAdd={(meeting: Meeting) => onAdd(meeting)} />
      <NextMeeting meeting={meeting} />
      <CurrentBook />
      <DiscussionBoard></DiscussionBoard>
      <SearchBar
        onSearch={(searchResults: Book[]) => setBooks(searchResults)}
      ></SearchBar>
      <MemberList />
      <SearchResults Books={books}></SearchResults>
    </div>
  );
}
// Render the CurrentBook component
// Render the DiscussionBoard component
// Pass the 'onSearch' prop to the SearchBar component. It is a function that takes an array of Book objects as a parameter and updates the 'books' state.
// <search results> Render the SearchResults component and pass the 'Books' prop, which is set with the 'books' state.

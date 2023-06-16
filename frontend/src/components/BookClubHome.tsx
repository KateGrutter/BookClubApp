import { CurrentBook } from "./CurrentBook";
// import { DiscussionBoard } from "./DiscussionBoard/DiscussionBoard";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { DiscussionBoard } from "./DiscussionBoard/DiscussionBoard";
import { Book } from "../models/Book";
import { Header } from "./Header/Header";

export function BookClubHome() {
  const [books, setBooks] = useState<Book[]>([]); // Declare a state variable 'books' using the useState hook, initialize it with an empty array. 'setBooks' is the function to update the 'books' state.

  // function handleSearch(term: string): any {
  // setBooks(books)
  // }

  return (
    <div>
      <Header></Header>
      <CurrentBook />
      <DiscussionBoard></DiscussionBoard>
      <SearchBar
        onSearch={(searchResults: Book[]) => setBooks(searchResults)}
      ></SearchBar>

      <SearchResults Books={books}></SearchResults>
    </div>
  );
}
// Render the CurrentBook component
// Render the DiscussionBoard component
// Pass the 'onSearch' prop to the SearchBar component. It is a function that takes an array of Book objects as a parameter and updates the 'books' state.
// <search results> Render the SearchResults component and pass the 'Books' prop, which is set with the 'books' state.

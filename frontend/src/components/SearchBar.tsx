import { useState } from "react";
import { searchBooks } from "../services/BookService";
import { Book } from "../models/Book";

export function SearchBar(props: { onSearch: (books: Book[]) => void }) {
  // Define state for the search input
  const [searchInput, setSearchInput] = useState("");

  // Handle form submission
  function formSubmit(e: any) {
    e.preventDefault();
    // Call the searchBooks function and pass the search input
    searchBooks(searchInput).then((data) => {
      // Call the onSearch callback function with the search results
      props.onSearch(data);
    });
  }

  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search by title"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

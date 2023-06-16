import { useState } from "react";
import { searchBooks } from "../services/BookService";
import { Book } from "../models/Book";

export function SearchBar(props: { onSearch: (Book: Book[]) => Book[] }) {
  const [searchInput, setSearchInput] = useState<Book[]>([]);

  // function handleInputChange(e: any) {
  //     setSearchInput(e.target.value)
  // }

  function formSubmit(e: any) {
    e.preventDefault();
    props.onSearch(searchInput);
  }

  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <input
          value={''}
          onChange={(e) =>
            searchBooks(e.target.value).then((data) =>
              setSearchInput(data.docs)
            )
          }
          type="text"
          placeholder="Search by title"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

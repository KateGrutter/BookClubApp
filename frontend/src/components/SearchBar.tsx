import { useState } from "react";
import { searchBooks } from "../services/BookService";

export function SearchBar(props: { onSearch: (searchTerm: string) => void }) {
  const [searchInput, setSearchInput] = useState<any>("");

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
          value={searchInput}
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

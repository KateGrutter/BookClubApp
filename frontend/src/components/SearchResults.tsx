import { useState, useEffect } from "react";
import { searchBooks } from "../services/BookService";
import { Link } from "react-router-dom";
import { Book } from "../models/Book";

export function SearchResults(props: { Books: Book[]}) {
  const [results, setResults] = useState<Book[]>([]);

  

  return (
    <div>
      <h2>Search Results</h2>
      {results.length > 0 ? (
        results.map((book) => (
          <Link to={`/books/${book.key}`}>{book.title}</Link>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

//Add model book
// Change state array of books (state)
// Remove search books from search results
// Change search bar to pass up the array of books (data.docs)
// Change bookclub home an array too


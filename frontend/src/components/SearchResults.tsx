import { useState, useEffect } from "react";
import { searchBooks } from "../services/BookService";
import { Link } from "react-router-dom";
import { Book } from "../models/Book";

export function SearchResults(props: { Books: Book[]}) {
  const [results, setResults] = useState<any[]>([]);

  

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

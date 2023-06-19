import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book } from "../../models/Book";

export function SearchResults(props: { Books: Book[] }) {
  // Define state for the search results
  const [results, setResults] = useState<Book[]>([]);

  // Update the search results whenever the Books prop changes
  useEffect(() => {
    // Set the Books prop as the new value for the results state
    setResults(props.Books);
  }, [props.Books]);

  console.log("Books:", props.Books);
  console.log("results:", results);

  return (
    <div className="results">
      <h2>Search Results</h2>
      {results.length > 0 ? (
        // Display the search results if there are any
        results.map((book) => (
          <Link to={`/books/${book.key}`} key={book.key}>
            {book.title}
          </Link>
        ))
      ) : (
        // Display a message when no results are found
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

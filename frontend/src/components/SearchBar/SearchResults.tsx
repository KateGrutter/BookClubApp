import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Book } from "../../models/Book";
import Modal from 'react-modal'
import { BookDetails } from "../BookDetails";
import { bookDetails } from "../../services/BookService";

const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root')

export function SearchResults(props: { Books: Book[] }) {
  // Define state for the search results
  const [results, setResults] = useState<Book[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false)  

  // Update the search results whenever the Books prop changes
  useEffect(() => {
    // Set the Books prop as the new value for the results state
    setResults(props.Books);
  }, [props.Books]);

  function closeModal() {
    setIsOpen(false)
}


 

  console.log("Books:", props.Books);
  console.log("results:", results);

  return (
    <div className="results">
      <h2>Search Results</h2>
      {results.length > 0 ? (
        // Display the search results if there are any
        results.map((book) => (
          <Link to={`/books/${book.key}`} key={book.key} onClick={() => setIsOpen(true)}>
            {book.title}
          </Link>
        ))
      ) : (
        // Display a message when no results are found
        <p>No results found.</p>
      )}

      <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
      <BookDetails onClose={() => setIsOpen(false)}></BookDetails>
      </Modal>
    </div>
  );
}
//Add model book
// Change state array of books (state)
// Remove search books from search results
// Change search bar to pass up the array of books (data.docs)
// Change bookclub home an array too

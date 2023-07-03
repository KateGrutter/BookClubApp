import { useContext, useEffect } from "react";
import { Header } from "../Header/Header";
import BookContext from "../../contexts/BookContext";
import { getBooksRead } from "../../services/BookService";
import "./PastReads.css";

export function PastReads() {
  const { listBooks, loadBooks } = useContext(BookContext);

  useEffect(() => {
    getBooksRead().then((data) => {console.log(data);loadBooks(data)});
  }, []);

  console.log(listBooks);
  return (
    <div>
      <Header />
      <div className="past-reads">
        <h2>ChapterChat Archives</h2>
        <p className="archive-message">
          Welome to the archives, where you'll see a collection of books that
          have been previously read and discussed by our book club community.
          Dive into a variety of titles, authors, and genres to discover the
          literary adventures our members have enjoyed. Happy browsing!
        </p>
        <ul>
          {listBooks.map((book) => (
            <li className="book-title">
              {book.title}
              <p className="book-author">{book.authors}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

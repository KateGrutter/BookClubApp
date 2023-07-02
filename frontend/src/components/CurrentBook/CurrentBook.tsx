import { useContext } from "react";
import "./CurrentBook.css";
import BookContext from "../../contexts/BookContext";
import NextBook from "../../assets/NextBook.png";

export function CurrentBook() {
  const { currentBook } = useContext(BookContext);
  return (
    <div className="current-book">
      <h3>This Months Book</h3>
      <p className="title">{currentBook?.title}</p>
      <p className="author">{currentBook?.authors}</p>
      <div>
        <img
          src={currentBook?.imageLinks.thumbnail || NextBook}
          alt="bookcover"
        />
      </div>
      <p className="description">{currentBook?.description}</p>
    </div>
  );
}

//this is basic (dummy) component
//change state with button 'set current book'
//function to remove from current, but add to past read
//mark as read button (finished)
//menu button past books
//service call for current book

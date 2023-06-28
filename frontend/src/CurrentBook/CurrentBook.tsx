
import { useContext } from "react";
import NoImage from "../assets/NoImage.png";
import "./CurrentBook.css";
import BookContext from "../contexts/BookContext";

export function CurrentBook() {

  const {currentBook} = useContext(BookContext);
  return (
    <div className="current-book">
      <h3>Current Read: {currentBook?.title}</h3>
      <div>
        <img src={NoImage} alt="" />
      </div>
    </div>
  );
}

//this is basic (dummy) component
//change state with button 'set current book'
//function to remove from current, but add to past read
//mark as read button (finished)
//menu button past books
//service call for current book
